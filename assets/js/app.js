/**
 * 全能工具箱 - 主脚本
 * 针对 GitHub Pages 纯前端优化
 */
(function() {
    'use strict';

    // ========== 配置 ==========
    const CONFIG = {
        STORAGE_PREFIX: 'toolbox_',
        MAX_RECENT: 8,
        MAX_FAV: 50,
        SEARCH_DELAY: 150
    };

    // ========== 工具函数 ==========
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    // 存储封装
    const Storage = {
        get(key, def = null) {
            try {
                const data = localStorage.getItem(CONFIG.STORAGE_PREFIX + key);
                return data ? JSON.parse(data) : def;
            } catch (e) {
                return def;
            }
        },
        set(key, val) {
            try {
                localStorage.setItem(CONFIG.STORAGE_PREFIX + key, JSON.stringify(val));
                return true;
            } catch (e) {
                return false;
            }
        }
    };

    // 防抖
    const debounce = (fn, ms) => {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn.apply(this, args), ms);
        };
    };

    // Toast 提示
    const toast = (msg, type = '') => {
        const el = $('#toast');
        if (!el) return;
        el.textContent = msg;
        el.className = 'toast show ' + type;
        setTimeout(() => {
            el.className = 'toast';
        }, 2500);
    };

    // ========== 主题切换 ==========
    const Theme = {
        init() {
            const btn = $('#themeToggle');
            if (!btn) return;

            btn.addEventListener('click', () => {
                const isDark = document.documentElement.classList.toggle('dark');
                Storage.set('theme', isDark ? 'dark' : 'light');
            });
        }
    };

    // ========== 收藏功能 ==========
    const Favorites = {
        data: [],

        init() {
            this.data = Storage.get('favorites', []);
            this.updateBadge();
        },

        add(tool) {
            if (this.has(tool.id)) {
                toast('已在收藏中', 'error');
                return false;
            }
            if (this.data.length >= CONFIG.MAX_FAV) {
                this.data.pop();
            }
            this.data.unshift({
                id: tool.id,
                name: tool.name,
                icon: tool.icon,
                url: tool.url
            });
            this.save();
            toast('收藏成功 ❤️', 'success');
            return true;
        },

        remove(id) {
            this.data = this.data.filter(t => t.id !== id);
            this.save();
            toast('已取消收藏');
        },

        toggle(tool) {
            if (this.has(tool.id)) {
                this.remove(tool.id);
                return false;
            } else {
                this.add(tool);
                return true;
            }
        },

        has(id) {
            return this.data.some(t => t.id === id);
        },

        save() {
            Storage.set('favorites', this.data);
            this.updateBadge();
        },

        updateBadge() {
            const badge = $('#favCount');
            if (badge) {
                badge.textContent = this.data.length || '';
            }
        },

        getAll() {
            return this.data;
        }
    };

    // ========== 最近使用 ==========
    const Recent = {
        data: [],

        init() {
            this.data = Storage.get('recent', []);
        },

        add(tool) {
            this.data = this.data.filter(t => t.id !== tool.id);
            this.data.unshift({
                id: tool.id,
                name: tool.name,
                icon: tool.icon,
                url: tool.url,
                time: Date.now()
            });
            if (this.data.length > CONFIG.MAX_RECENT) {
                this.data = this.data.slice(0, CONFIG.MAX_RECENT);
            }
            Storage.set('recent', this.data);
        },

        getAll() {
            return this.data;
        }
    };

    // ========== 工具数据 ==========
    const ToolsData = {
        raw: null,
        flatList: [],

        init() {
            const script = $('#toolsData');
            if (!script) return;

            try {
                this.raw = JSON.parse(script.textContent);
                this.buildFlatList();
            } catch (e) {
                console.error('工具数据解析失败:', e);
            }
        },

        buildFlatList() {
            if (!this.raw) return;
            this.flatList = [];

            // 分类工具
            if (this.raw.categories) {
                this.raw.categories.forEach(cat => {
                    cat.tools.forEach(tool => {
                        this.flatList.push({
                            ...tool,
                            category: cat.name,
                            categoryId: cat.id,
                            url: `tools/${cat.id}/${tool.id}.html`
                        });
                    });
                });
            }

            // AI 工具
            if (this.raw.aiTools) {
                this.raw.aiTools.forEach(tool => {
                    this.flatList.push({
                        ...tool,
                        category: 'AI工具',
                        categoryId: 'ai',
                        url: tool.url || `ai/${tool.id}.html`
                    });
                });
            }
        },

        search(keyword) {
            if (!keyword || keyword.length < 1) return [];
            const kw = keyword.toLowerCase();
            return this.flatList.filter(tool => {
                const nameMatch = tool.name.toLowerCase().includes(kw);
                const descMatch = tool.desc && tool.desc.toLowerCase().includes(kw);
                const keywordMatch = tool.keywords && tool.keywords.some(k => k.toLowerCase().includes(kw));
                return nameMatch || descMatch || keywordMatch;
            }).slice(0, 10);
        },

        getHot() {
            return this.flatList.filter(t => t.hot).slice(0, 6);
        },

        getById(id) {
            return this.flatList.find(t => t.id === id);
        },

        getCategories() {
            return this.raw ? this.raw.categories : [];
        }
    };

    // ========== 搜索功能 ==========
    const Search = {
        input: null,
        results: null,

        init() {
            this.input = $('#searchInput');
            this.results = $('#searchResults');
            if (!this.input || !this.results) return;

            // 输入搜索
            this.input.addEventListener('input', debounce(() => {
                this.doSearch(this.input.value.trim());
            }, CONFIG.SEARCH_DELAY));

            // 聚焦显示
            this.input.addEventListener('focus', () => {
                if (this.input.value.trim()) {
                    this.doSearch(this.input.value.trim());
                }
            });

            // 点击外部关闭
            document.addEventListener('click', (e) => {
                if (!this.input.contains(e.target) && !this.results.contains(e.target)) {
                    this.hide();
                }
            });

            // ESC 关闭
            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.hide();
                    this.input.blur();
                }
            });
        },

        doSearch(keyword) {
            if (!keyword) {
                this.hide();
                return;
            }

            const results = ToolsData.search(keyword);

            if (results.length === 0) {
                this.results.innerHTML = '<div class="search-empty">未找到相关工具</div>';
            } else {
                this.results.innerHTML = results.map(tool => `
                    <a href="${tool.url}" class="search-item" data-id="${tool.id}">
                        <span class="icon">${tool.icon}</span>
                        <span class="name">${this.highlight(tool.name, keyword)}</span>
                        <span class="category">${tool.category}</span>
                    </a>
                `).join('');

                // 点击记录
                $$('.search-item', this.results).forEach(item => {
                    item.addEventListener('click', () => {
                        const tool = ToolsData.getById(item.dataset.id);
                        if (tool) Recent.add(tool);
                    });
                });
            }

            this.show();
        },

        highlight(text, keyword) {
            const regex = new RegExp(`(${keyword})`, 'gi');
            return text.replace(regex, '<span class="search-highlight">$1</span>');
        },

        show() {
            this.results.classList.add('active');
        },

        hide() {
            this.results.classList.remove('active');
        }
    };

    // ========== 快捷入口 Tabs ==========
    const QuickTabs = {
        container: null,
        tabs: [],

        init() {
            this.container = $('#quickTools');
            this.tabs = $$('.tabs .tab');
            if (!this.container || !this.tabs.length) return;

            this.tabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    this.tabs.forEach(t => {
                        t.classList.remove('active');
                        t.setAttribute('aria-selected', 'false');
                    });
                    tab.classList.add('active');
                    tab.setAttribute('aria-selected', 'true');
                    this.render(tab.dataset.tab);
                });
            });

            // 默认显示热门
            this.render('hot');
        },

        render(type) {
            let tools = [];

            switch (type) {
                case 'hot':
                    tools = ToolsData.getHot();
                    break;
                case 'fav':
                    tools = Favorites.getAll();
                    break;
                case 'recent':
                    tools = Recent.getAll();
                    break;
            }

            if (tools.length === 0) {
                const emptyMsg = {
                    hot: '暂无热门工具',
                    fav: '还没有收藏，点击工具卡片上的 ❤️ 添加',
                    recent: '还没有使用记录'
                };
                this.container.innerHTML = `<div class="quick-empty">${emptyMsg[type]}</div>`;
                return;
            }

            this.container.innerHTML = tools.map(tool => `
                <a href="${tool.url}" class="quick-item" data-id="${tool.id}">
                    ${tool.icon} ${tool.name}
                </a>
            `).join('');

            // 点击记录
            $$('.quick-item', this.container).forEach(item => {
                item.addEventListener('click', () => {
                    const tool = ToolsData.getById(item.dataset.id);
                    if (tool) Recent.add(tool);
                });
            });
        }
    };

    // ========== 工具列表渲染 ==========
    const ToolsRenderer = {
        container: null,

        init() {
            this.container = $('#toolsContainer');
            if (!this.container) return;
            this.render();
        },

        render() {
            const categories = ToolsData.getCategories();
            if (!categories.length) {
                this.container.innerHTML = '<div class="loading">暂无工具数据</div>';
                return;
            }

            this.container.innerHTML = categories.map(cat => `
                <div class="category-block" id="${cat.id}">
                    <div class="category-header">
                        <h2 class="category-title">
                            <span>${cat.icon}</span>
                            ${cat.name}
                        </h2>
                        <span class="category-count">${cat.tools.length}个工具</span>
                    </div>
                    <div class="tools-grid">
                        ${cat.tools.map(tool => this.renderCard(tool, cat.id)).join('')}
                    </div>
                </div>
            `).join('');

            // 绑定点击
            $$('.tool-card', this.container).forEach(card => {
                card.addEventListener('click', () => {
                    const tool = ToolsData.getById(card.dataset.id);
                    if (tool) Recent.add(tool);
                });
            });
        },

        renderCard(tool, categoryId) {
            const url = `tools/${categoryId}/${tool.id}.html`;
            return `
                <a href="${url}" class="tool-card ${tool.hot ? 'hot' : ''}" data-id="${tool.id}">
                    ${tool.hot ? '<span class="hot-badge">热门</span>' : ''}
                    <span class="icon">${tool.icon}</span>
                    <span class="name">${tool.name}</span>
                    <span class="desc">${tool.desc}</span>
                </a>
            `;
        }
    };

    // ========== 回到顶部 ==========
    const BackTop = {
        init() {
            const btn = $('#backTop');
            if (!btn) return;

            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        btn.classList.toggle('show', window.scrollY > 300);
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });

            btn.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    };

    // ========== 工具内页功能 ==========
    const ToolPage = {
        init() {
            const favBtn = $('.fav-btn');
            if (!favBtn) return;

            const toolId = favBtn.dataset.toolId;
            if (!toolId) return;

            // 更新状态
            this.updateFavState(favBtn, toolId);

            // 收藏按钮
            favBtn.addEventListener('click', () => {
                const tool = ToolsData.getById(toolId) || {
                    id: toolId,
                    name: document.title.split(' - ')[0],
                    icon: '🔧',
                    url: location.pathname
                };
                const added = Favorites.toggle(tool);
                this.updateFavState(favBtn, toolId);
            });

            // 记录使用
            const tool = ToolsData.getById(toolId);
            if (tool) Recent.add(tool);
        },

        updateFavState(btn, toolId) {
            const isFav = Favorites.has(toolId);
            btn.classList.toggle('active', isFav);
            btn.innerHTML = isFav ? '❤️ 已收藏' : '🤍 收藏';
        }
    };

    // ========== 广告加载 ==========
    const Ads = {
        init() {
            // 检测 AdSense 是否加载
            if (typeof adsbygoogle === 'undefined') return;

            setTimeout(() => {
                $$('.ad-slot').forEach(slot => {
                    if (slot.querySelector('.adsbygoogle')) return;
                    
                    const ins = document.createElement('ins');
                    ins.className = 'adsbygoogle';
                    ins.style.display = 'block';
                    ins.dataset.adClient = 'ca-pub-XXXXXXXX';
                    ins.dataset.adSlot = slot.id === 'adTop' ? '1234567890' : '0987654321';
                    ins.dataset.adFormat = 'auto';
                    ins.dataset.fullWidthResponsive = 'true';
                    
                    slot.innerHTML = '';
                    slot.appendChild(ins);
                    
                    try {
                        (adsbygoogle = window.adsbygoogle || []).push({});
                    } catch (e) {}
                });
            }, 100);
        }
    };

    // ========== 通用计算工具函数 ==========
    window.ToolUtils = {
        // 格式化金额
        formatMoney(num) {
            const n = parseFloat(num);
            if (isNaN(n)) return '0.00';
            return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // 获取输入值
        getValue(id, defaultVal = 0) {
            const el = document.getElementById(id);
            if (!el) return defaultVal;
            const val = parseFloat(el.value);
            return isNaN(val) ? defaultVal : val;
        },

        // 显示结果
        showResult(containerId) {
            const el = document.getElementById(containerId);
            if (el) {
                el.classList.add('show');
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        },

        // 隐藏结果
        hideResult(containerId) {
            const el = document.getElementById(containerId);
            if (el) el.classList.remove('show');
        },

        // Toast
        toast: toast
    };

    // ========== 初始化 ==========
    const init = () => {
        // 基础模块
        Theme.init();
        ToolsData.init();
        Favorites.init();
        Recent.init();
        
        // 页面功能
        Search.init();
        QuickTabs.init();
        ToolsRenderer.init();
        BackTop.init();
        ToolPage.init();

        // 广告延迟加载
        window.addEventListener('load', () => {
            Ads.init();
        });

        console.log('✅ 全能工具箱初始化完成');
    };

    // DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
