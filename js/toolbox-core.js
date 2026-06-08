/**
 * 全能工具箱 - 核心控制层
 * 搜索、收藏、最近使用、分类切换
 */
(function () {
    'use strict';

    // ========== 常量 ==========
    const STORAGE_KEYS = {
        RECENT: 'toolbox_recent_v2',
        FAVORITES: 'toolbox_favorites_v2',
        THEME: 'theme'
    };
    const MAX_RECENT = 8;
    const MAX_FAVORITES = 50;

    // ========== 存储 ==========
    const Store = {
        get(key, def) {
            try {
                const raw = localStorage.getItem(key);
                return raw ? JSON.parse(raw) : def;
            } catch { return def; }
        },
        set(key, val) {
            try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
        }
    };

    // ========== 收藏管理 ==========
    const Favorites = {
        _data: null,
        load() {
            if (!this._data) this._data = Store.get(STORAGE_KEYS.FAVORITES, []);
            return this._data;
        },
        save() { Store.set(STORAGE_KEYS.FAVORITES, this._data); },
        has(id) { return this.load().some(t => t.id === id); },
        add(tool) {
            this.load();
            if (this.has(tool.id)) return false;
            if (this._data.length >= MAX_FAVORITES) this._data.pop();
            this._data.unshift({ id: tool.id, name: tool.name, icon: tool.icon, url: tool.url, category: tool.categoryName });
            this.save();
            return true;
        },
        remove(id) {
            this.load();
            this._data = this._data.filter(t => t.id !== id);
            this.save();
        },
        toggle(tool) {
            if (this.has(tool.id)) { this.remove(tool.id); return false; }
            return this.add(tool);
        },
        getAll() { return this.load(); }
    };

    // ========== 最近使用 ==========
    const Recent = {
        _data: null,
        load() {
            if (!this._data) this._data = Store.get(STORAGE_KEYS.RECENT, []);
            return this._data;
        },
        add(tool) {
            this.load();
            this._data = this._data.filter(t => t.id !== tool.id);
            this._data.unshift({ id: tool.id, name: tool.name, icon: tool.icon, url: tool.url, category: tool.categoryName, time: Date.now() });
            if (this._data.length > MAX_RECENT) this._data = this._data.slice(0, MAX_RECENT);
            Store.set(STORAGE_KEYS.RECENT, this._data);
        },
        getAll() { return this.load(); }
    };

    // ========== 工具数据访问 ==========
    const ToolsDB = {
        getAll() { return window.ALL_TOOLS || []; },
        getHot() { return this.getAll().filter(t => t.hot); },
        getByCategory(cat) {
            if (cat === 'all') return this.getAll();
            return this.getAll().filter(t => t.category === cat);
        },
        search(kw) {
            if (!kw || kw.length < 1) return [];
            const q = kw.toLowerCase();
            return this.getAll().filter(t => {
                return t.name.toLowerCase().includes(q)
                    || (t.description && t.description.toLowerCase().includes(q))
                    || (t.tags && t.tags.some(tag => tag.toLowerCase().includes(q)));
            }).slice(0, 12);
        },
        findById(id) { return this.getAll().find(t => t.id === id); }
    };

    // ========== 搜索高亮 ==========
    function highlight(text, kw) {
        if (!kw) return text;
        const re = new RegExp('(' + kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        return text.replace(re, '<mark style="background:var(--primary-light);color:var(--primary);border-radius:2px">$1</mark>');
    }

    // ========== Toast ==========
    function toast(msg, type) {
        const el = document.getElementById('toast');
        if (!el) return;
        el.textContent = msg;
        el.className = 'toast show' + (type ? ' ' + type : '');
        clearTimeout(el._timer);
        el._timer = setTimeout(() => { el.className = 'toast'; }, 2800);
    }

    // ========== 搜索组件 ==========
    const SearchUI = {
        input: null,
        dropdown: null,
        _timer: null,

        init() {
            this.input = document.getElementById('searchInput');
            this.dropdown = document.getElementById('searchDropdown');
            if (!this.input) return;

            if (!this.dropdown) {
                this.dropdown = document.createElement('div');
                this.dropdown.id = 'searchDropdown';
                this.dropdown.className = 'search-dropdown';
                this.input.parentNode.appendChild(this.dropdown);
            }

            this.input.addEventListener('input', () => {
                clearTimeout(this._timer);
                this._timer = setTimeout(() => this._doSearch(), 120);
            });

            this.input.addEventListener('focus', () => {
                if (this.input.value.trim()) this._doSearch();
            });

            document.addEventListener('click', (e) => {
                if (!this.input.parentNode.contains(e.target)) this._hide();
            });

            this.input.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') { this._hide(); this.input.blur(); }
            });

            // URL 参数搜索支持
            const q = new URLSearchParams(location.search).get('q');
            if (q) { this.input.value = q; this._doSearch(); }
        },

        _doSearch() {
            const kw = this.input.value.trim();
            if (!kw) { this._hide(); return; }

            const results = ToolsDB.search(kw);
            if (!results.length) {
                this.dropdown.innerHTML = '<div class="search-empty">未找到相关工具 🔍</div>';
            } else {
                this.dropdown.innerHTML = results.map(t => `
                    <a href="${t.url}" class="search-item" data-id="${t.id}">
                        <span class="s-icon">${t.icon}</span>
                        <span class="s-name">${highlight(t.name, kw)}</span>
                        <span class="s-cat">${t.categoryName}</span>
                    </a>
                `).join('');

                this.dropdown.querySelectorAll('.search-item').forEach(el => {
                    el.addEventListener('click', () => {
                        const tool = ToolsDB.findById(el.dataset.id);
                        if (tool) Recent.add(tool);
                    });
                });
            }

            this.dropdown.classList.add('active');
        },

        _hide() { this.dropdown && this.dropdown.classList.remove('active'); }
    };

    // ========== 分类标签 ==========
    const CategoryTabs = {
        container: null,
        currentCat: 'all',

        init() {
            this.container = document.getElementById('toolsContainer');
            const tabsEl = document.getElementById('categoryTabs');
            if (!tabsEl || !this.container) return;

            const cats = window.TOOL_CATEGORIES || [];
            tabsEl.innerHTML = cats.map(c => `
                <button class="cat-tab ${c.id === 'all' ? 'active' : ''}" data-cat="${c.id}">
                    <span>${c.icon}</span> ${c.name}
                </button>
            `).join('');

            tabsEl.addEventListener('click', (e) => {
                const btn = e.target.closest('.cat-tab');
                if (!btn) return;
                tabsEl.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentCat = btn.dataset.cat;
                this.render(this.currentCat);
            });

            this.render('all');
        },

        render(cat) {
            const tools = ToolsDB.getByCategory(cat);
            if (!tools.length) {
                this.container.innerHTML = '<div class="tools-empty">该分类暂无工具</div>';
                return;
            }

            // Group by category when showing all
            if (cat === 'all') {
                const cats = window.TOOL_CATEGORIES || [];
                const groups = cats.filter(c => c.id !== 'all').map(c => ({
                    cat: c,
                    tools: ToolsDB.getByCategory(c.id)
                })).filter(g => g.tools.length > 0);

                this.container.innerHTML = groups.map(g => `
                    <section class="tools-section" id="cat-${g.cat.id}">
                        <div class="section-header">
                            <h2 class="section-title">${g.cat.icon} ${g.cat.name}</h2>
                            <span class="section-count">${g.tools.length}个工具</span>
                        </div>
                        <div class="tools-grid">
                            ${g.tools.map(t => ToolCardUI.render(t)).join('')}
                        </div>
                    </section>
                `).join('');
            } else {
                this.container.innerHTML = `
                    <div class="tools-grid" style="margin-top:16px">
                        ${tools.map(t => ToolCardUI.render(t)).join('')}
                    </div>
                `;
            }

            this._bindClicks();
        },

        _bindClicks() {
            if (!this.container) return;
            this.container.querySelectorAll('.tool-card-link').forEach(el => {
                el.addEventListener('click', () => {
                    const tool = ToolsDB.findById(el.dataset.id);
                    if (tool) Recent.add(tool);
                    RecentSection.refresh();
                });
            });

            this.container.querySelectorAll('.fav-toggle').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const id = btn.dataset.id;
                    const tool = ToolsDB.findById(id);
                    if (!tool) return;
                    const added = Favorites.toggle(tool);
                    btn.textContent = added ? '★' : '☆';
                    btn.classList.toggle('active', added);
                    toast(added ? '收藏成功 ★' : '已取消收藏', added ? 'success' : '');
                    FavSection.refresh();
                });
            });
        }
    };

    // ========== 工具卡片 UI ==========
    const ToolCardUI = {
        render(tool) {
            const isFav = Favorites.has(tool.id);
            return `
                <div class="tool-card-wrap">
                    <a href="${tool.url}" class="tool-card-link ${tool.hot ? 'tool-card-hot' : ''}" data-id="${tool.id}">
                        ${tool.hot ? '<span class="tool-hot-badge">热门</span>' : ''}
                        <div class="tool-card-icon">${tool.icon}</div>
                        <div class="tool-card-name">${tool.name}</div>
                        <div class="tool-card-desc">${tool.description ? tool.description.slice(0, 28) + (tool.description.length > 28 ? '…' : '') : ''}</div>
                    </a>
                    <button class="fav-toggle ${isFav ? 'active' : ''}" data-id="${tool.id}" title="${isFav ? '取消收藏' : '收藏'}">${isFav ? '★' : '☆'}</button>
                </div>
            `;
        }
    };

    // ========== 最近使用区 ==========
    const RecentSection = {
        container: null,
        init() {
            this.container = document.getElementById('recentSection');
            this.refresh();
        },
        refresh() {
            if (!this.container) return;
            const items = Recent.getAll();
            if (!items.length) {
                this.container.style.display = 'none';
                return;
            }
            this.container.style.display = '';
            const listEl = this.container.querySelector('.quick-chips');
            if (listEl) {
                listEl.innerHTML = items.map(t => `
                    <a href="${t.url}" class="quick-chip" data-id="${t.id}">
                        <span>${t.icon}</span> ${t.name}
                    </a>
                `).join('');
            }
        }
    };

    // ========== 收藏区 ==========
    const FavSection = {
        container: null,
        init() {
            this.container = document.getElementById('favSection');
            this.refresh();
        },
        refresh() {
            if (!this.container) return;
            const items = Favorites.getAll();
            if (!items.length) {
                this.container.style.display = 'none';
                return;
            }
            this.container.style.display = '';
            const listEl = this.container.querySelector('.quick-chips');
            if (listEl) {
                listEl.innerHTML = items.map(t => `
                    <a href="${t.url}" class="quick-chip" data-id="${t.id}">
                        <span>${t.icon}</span> ${t.name}
                    </a>
                `).join('');
            }
        }
    };

    // ========== 主题切换 ==========
    const Theme = {
        init() {
            const btn = document.getElementById('themeBtn');
            if (!btn) return;
            btn.addEventListener('click', () => {
                const isDark = document.documentElement.classList.toggle('dark');
                Store.set(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
            });
        }
    };

    // ========== 收藏按钮（工具内页） ==========
    const ToolPageFav = {
        init() {
            const btn = document.querySelector('.tool-fav-btn');
            if (!btn) return;
            const toolId = btn.dataset.toolId;
            if (!toolId) return;

            const update = () => {
                const faved = Favorites.has(toolId);
                btn.textContent = faved ? '★ 已收藏' : '☆ 收藏';
                btn.classList.toggle('active', faved);
            };
            update();

            btn.addEventListener('click', () => {
                const tool = ToolsDB.findById(toolId) || {
                    id: toolId,
                    name: document.title.split(' - ')[0],
                    icon: '🔧',
                    url: location.pathname.replace(/^\//, ''),
                    categoryName: '工具'
                };
                Favorites.toggle(tool);
                update();
                toast(Favorites.has(toolId) ? '收藏成功 ★' : '已取消收藏', 'success');
            });

            // record recent
            const tool = ToolsDB.findById(toolId);
            if (tool) Recent.add(tool);
        }
    };

    // ========== 暴露给全局 ==========
    window.ToolboxCore = {
        Favorites,
        Recent,
        ToolsDB,
        toast,
        Store
    };

    // ========== 初始化 ==========
    function init() {
        Theme.init();
        SearchUI.init();
        CategoryTabs.init();
        RecentSection.init();
        FavSection.init();
        ToolPageFav.init();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
