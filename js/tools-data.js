/**
 * 全能工具箱 - 工具数据源
 * window.ALL_TOOLS - 100+ 工具元数据
 */
(function() {
    'use strict';

    window.ALL_TOOLS = [
        // ==============================
        // AI 工具 (1-15)
        // ==============================
        {
            id: 'seo-title-gen',
            name: 'SEO标题生成器',
            description: '基于关键词一键生成高点击率SEO文章标题，内置多种标题公式模板',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['SEO', '标题', '写作', 'AI'],
            url: 'tools/seo-title-gen.html',
            icon: '📝',
            hot: false
        },
        {
            id: 'summary-gen',
            name: '摘要生成器',
            description: '输入长文本，一键提炼核心内容摘要，支持中英文',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['摘要', '文字', '提炼', 'AI'],
            url: 'tools/summary-gen.html',
            icon: '✂️',
            hot: false
        },
        {
            id: 'text-rewriter',
            name: '文本改写器',
            description: '智能改写文本，保留原意，生成全新表达，支持多种风格',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['改写', '文字', '写作', 'AI'],
            url: 'tools/text-rewriter.html',
            icon: '🔄',
            hot: false
        },
        {
            id: 'markdown-editor',
            name: 'Markdown编辑转换',
            description: 'Markdown实时预览与HTML转换，支持GFM语法，程序员写作必备',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['Markdown', 'HTML', '转换', '编辑器'],
            url: 'tools/markdown-editor.html',
            icon: '📄',
            hot: true
        },
        {
            id: 'slang-gen',
            name: '行业黑话生成器',
            description: '输入行业关键词，生成专业黑话术语，让你秒变行业大佬',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['黑话', '有趣', '职场', 'AI'],
            url: 'tools/slang-gen.html',
            icon: '🎭',
            hot: false
        },
        {
            id: 'email-polisher',
            name: 'AI邮件润色助手',
            description: '将粗糙邮件草稿润色为专业商务邮件，支持中英文切换',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['邮件', '润色', '商务', 'AI'],
            url: 'tools/email-polisher.html',
            icon: '📧',
            hot: false
        },
        {
            id: 'story-writer',
            name: '小说故事续写器',
            description: '输入故事开头，基于AI续写情节，支持多种文风和类型',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['小说', '续写', '创作', 'AI'],
            url: 'tools/story-writer.html',
            icon: '📚',
            hot: false
        },
        {
            id: 'youtube-title-gen',
            name: 'YouTube标题生成',
            description: '根据视频主题生成高点击率YouTube标题，内置爆款公式',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['YouTube', '标题', '视频', 'AI'],
            url: 'tools/youtube-title-gen.html',
            icon: '▶️',
            hot: false
        },
        {
            id: 'tiktok-copy-gen',
            name: 'TikTok视频文案',
            description: '生成TikTok短视频文案脚本，包含开场钩子、正文、CTA',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['TikTok', '文案', '短视频', 'AI'],
            url: 'tools/tiktok-copy-gen.html',
            icon: '🎵',
            hot: false
        },
        {
            id: 'xiaohongshu-generator',
            name: '小红书爆款文案',
            description: '生成小红书爆款标题与种草文案，内置颜文字和话题标签',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['小红书', '文案', '种草', '爆款', 'AI'],
            url: 'tools/xiaohongshu-generator.html',
            icon: '📱',
            hot: true
        },
        {
            id: 'telegram-name-gen',
            name: 'Telegram频道名生成',
            description: '生成有创意的Telegram频道名称和简介，吸引订阅者',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['Telegram', '频道', '命名', 'AI'],
            url: 'tools/telegram-name-gen.html',
            icon: '✈️',
            hot: false
        },
        {
            id: 'blog-outline-gen',
            name: '博客大纲生成器',
            description: '根据文章主题自动生成完整博客大纲，包含章节和要点',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['博客', '大纲', '写作', 'AI'],
            url: 'tools/blog-outline-gen.html',
            icon: '🗂️',
            hot: false
        },
        {
            id: 'compliment-gen',
            name: 'AI赞美生成器',
            description: '输入对象特点，生成走心又不尬的赞美语句，送礼赞人必备',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['赞美', '文字', '有趣', 'AI'],
            url: 'tools/compliment-gen.html',
            icon: '🌟',
            hot: false
        },
        {
            id: 'ruozhi-challenger',
            name: '弱智吧逻辑挑战器',
            description: '生成经典弱智吧式脑洞问题，测试你的逻辑思维和脑洞',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['有趣', '脑洞', '逻辑', 'AI'],
            url: 'tools/ruozhi-challenger.html',
            icon: '🧠',
            hot: false
        },
        {
            id: 'speech-outline-gen',
            name: 'AI演讲稿大纲生成',
            description: '输入演讲主题和时长，生成完整演讲稿大纲框架',
            category: 'ai',
            categoryName: 'AI工具',
            tags: ['演讲', '大纲', '写作', 'AI'],
            url: 'tools/speech-outline-gen.html',
            icon: '🎤',
            hot: false
        },

        // ==============================
        // 文本工具 (16-25)
        // ==============================
        {
            id: 'word-count',
            name: '字数统计与排版',
            description: '实时统计中英文字数、段落、阅读时长，一键清理空行空格',
            category: 'text',
            categoryName: '文本工具',
            tags: ['字数', '统计', '排版', '字符'],
            url: 'tools/text-word-count.html',
            icon: '📊',
            hot: false
        },
        {
            id: 'case-converter',
            name: '驼峰/下划线命名转换',
            description: 'camelCase、snake_case、PascalCase、kebab-case 互转',
            category: 'text',
            categoryName: '文本工具',
            tags: ['命名', '转换', '驼峰', '下划线', '开发'],
            url: 'tools/case-converter.html',
            icon: '🔠',
            hot: false
        },
        {
            id: 'csv-json-converter',
            name: 'CSV/JSON互转',
            description: 'CSV与JSON格式互相转换，支持自定义分隔符，数据处理必备',
            category: 'text',
            categoryName: '文本工具',
            tags: ['CSV', 'JSON', '转换', '数据'],
            url: 'tools/csv-json-converter.html',
            icon: '⇄',
            hot: false
        },
        {
            id: 'html-entity-decoder',
            name: '乱码/HTML实体转码',
            description: 'HTML实体字符编解码，乱码修复，支持常见转义字符',
            category: 'text',
            categoryName: '文本工具',
            tags: ['HTML', '实体', '乱码', '转码'],
            url: 'tools/html-entity-decoder.html',
            icon: '🔤',
            hot: false
        },
        {
            id: 'text-case',
            name: '大小写一键转换',
            description: '文本大小写批量转换，支持全大写、全小写、首字母大写等',
            category: 'text',
            categoryName: '文本工具',
            tags: ['大写', '小写', '转换', '文本'],
            url: 'tools/text-case.html',
            icon: 'Aa',
            hot: false
        },
        {
            id: 'trailing-space-cleaner',
            name: '行尾空格清理器',
            description: '清理文本行尾空格、多余换行、BOM字符，代码粘贴必备',
            category: 'text',
            categoryName: '文本工具',
            tags: ['空格', '清理', '文本', '格式化'],
            url: 'tools/trailing-space-cleaner.html',
            icon: '🧹',
            hot: false
        },
        {
            id: 'text-dedup',
            name: '文本去重工具',
            description: '删除文本中的重复行，支持忽略空行、大小写不敏感去重',
            category: 'text',
            categoryName: '文本工具',
            tags: ['去重', '文本', '重复'],
            url: 'tools/text-dedup.html',
            icon: '🗑️',
            hot: false
        },
        {
            id: 'text-align',
            name: '对齐排版助手',
            description: '文本列对齐、空格对齐、Markdown表格对齐一键处理',
            category: 'text',
            categoryName: '文本工具',
            tags: ['对齐', '排版', '表格', 'Markdown'],
            url: 'tools/text-align.html',
            icon: '⬜',
            hot: false
        },

        // ==============================
        // 站长工具 (26-35)
        // ==============================
        {
            id: 'meta-desc-gen',
            name: 'Meta Description生成',
            description: '根据页面内容生成符合SEO规范的Meta Description，长度提示',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['SEO', 'Meta', 'Description', '站长'],
            url: 'tools/meta-desc-gen.html',
            icon: '🔍',
            hot: false
        },
        {
            id: 'keyword-extractor',
            name: 'Keywords关键词提取',
            description: '从文章中提取高频关键词，支持TF-IDF权重分析',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['关键词', 'SEO', '提取', '分析'],
            url: 'tools/keyword-extractor.html',
            icon: '🏷️',
            hot: false
        },
        {
            id: 'url-slug-gen',
            name: 'URL Slug生成器',
            description: '将中文标题转为SEO友好的URL Slug，支持多语言',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['URL', 'Slug', 'SEO', '站长'],
            url: 'tools/url-slug-gen.html',
            icon: '🔗',
            hot: false
        },
        {
            id: 'sitemap-gen',
            name: 'Sitemap在线生成',
            description: '输入网站URL列表，生成标准sitemap.xml，提升搜索收录',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['Sitemap', 'SEO', 'XML', '站长'],
            url: 'tools/sitemap-gen.html',
            icon: '🗺️',
            hot: false
        },
        {
            id: 'robots-gen',
            name: 'Robots.txt生成器',
            description: '可视化配置robots.txt规则，一键生成标准格式',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['robots.txt', 'SEO', '爬虫', '站长'],
            url: 'tools/robots-gen.html',
            icon: '🤖',
            hot: false
        },
        {
            id: 'htaccess-gen',
            name: 'HTACCESS规则生成',
            description: '可视化生成.htaccess重定向、缓存、HTTPS跳转等规则',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['.htaccess', 'Apache', '重定向', '站长'],
            url: 'tools/htaccess-gen.html',
            icon: '⚙️',
            hot: false
        },
        {
            id: 'schema-gen',
            name: 'Schema结构化数据生成',
            description: '生成JSON-LD格式的Schema.org结构化数据，提升富文本搜索展示',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['Schema', 'JSON-LD', 'SEO', '结构化数据'],
            url: 'tools/schema-gen.html',
            icon: '📋',
            hot: false
        },
        {
            id: 'og-tag-gen',
            name: 'Open Graph标签生成',
            description: '生成Facebook、Twitter等社交分享OG标签，预览分享卡片效果',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['OG', 'OpenGraph', '社交', 'SEO'],
            url: 'tools/og-tag-gen.html',
            icon: '🌐',
            hot: false
        },
        {
            id: 'dns-lookup',
            name: 'DNS记录查询',
            description: '查询域名的A、CNAME、MX、TXT等DNS记录，诊断域名配置',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['DNS', '域名', '查询', '站长'],
            url: 'tools/dns-lookup.html',
            icon: '🌍',
            hot: false
        },
        {
            id: 'tdk-copy',
            name: '网页TDK标签复制',
            description: '输入URL，提取页面Title、Description、Keywords标签内容',
            category: 'seo',
            categoryName: '站长工具',
            tags: ['TDK', 'Title', 'SEO', '标签'],
            url: 'tools/tdk-copy.html',
            icon: '📌',
            hot: false
        },

        // ==============================
        // 开发工具 (36-50)
        // ==============================
        {
            id: 'json',
            name: 'JSON格式化',
            description: '在线JSON美化、压缩、校验、转义，支持语法高亮和错误定位',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['JSON', '格式化', '压缩', '校验', '开发'],
            url: 'tools/json.html',
            icon: '{ }',
            hot: true
        },
        {
            id: 'tailwind-search',
            name: 'Tailwind类名检索',
            description: '快速搜索Tailwind CSS类名及对应CSS属性值，开发提速神器',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['Tailwind', 'CSS', '类名', '检索'],
            url: 'tools/tailwind-search.html',
            icon: '🎨',
            hot: false
        },
        {
            id: 'base64',
            name: 'Base64/URL编解码',
            description: 'Base64文本编解码、图片转Base64、URL编解码一体化工具',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['Base64', 'URL', '编码', '解码', '开发'],
            url: 'tools/base64.html',
            icon: '🔐',
            hot: true
        },
        {
            id: 'regex-tester',
            name: '正则表达式测试',
            description: '实时测试正则表达式匹配结果，支持捕获组高亮展示',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['正则', 'Regex', '测试', '开发'],
            url: 'tools/regex-tester.html',
            icon: '🔍',
            hot: false
        },
        {
            id: 'jwt-decoder',
            name: 'JWT解码验证器',
            description: '解码JWT Token的Header、Payload内容，验证签名格式',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['JWT', 'Token', '解码', '认证'],
            url: 'tools/jwt-decoder.html',
            icon: '🔑',
            hot: false
        },
        {
            id: 'flex-grid-gen',
            name: 'Flexbox/Grid可视化',
            description: '可视化调节Flexbox和Grid布局属性，实时预览生成CSS代码',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['Flexbox', 'Grid', 'CSS', '布局'],
            url: 'tools/flex-grid-gen.html',
            icon: '⬛',
            hot: false
        },
        {
            id: 'http-status-codes',
            name: 'HTTP状态码手册',
            description: '快速查询所有HTTP状态码含义、使用场景和处理建议',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['HTTP', '状态码', '手册', '开发'],
            url: 'tools/http-status-codes.html',
            icon: '📡',
            hot: false
        },
        {
            id: 'html-to-jsx',
            name: 'HTML转JSX',
            description: '将HTML代码转换为React JSX语法，自动处理class/for等属性',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['HTML', 'JSX', 'React', '转换'],
            url: 'tools/html-to-jsx.html',
            icon: '⚛️',
            hot: false
        },
        {
            id: 'diff-checker',
            name: 'Diff文本对比',
            description: '对比两段文本/代码的差异，高亮显示新增、删除、修改内容',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['Diff', '对比', '文本', '代码'],
            url: 'tools/diff-checker.html',
            icon: '↔️',
            hot: false
        },
        {
            id: 'url-params-parser',
            name: 'URL参数解析拼接',
            description: '解析URL中的查询参数，可视化编辑并重新拼接URL',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['URL', '参数', '解析', '开发'],
            url: 'tools/url-params-parser.html',
            icon: '🔗',
            hot: false
        },
        {
            id: 'user-agent',
            name: 'User-Agent解析',
            description: '解析User-Agent字符串，识别浏览器、操作系统、设备信息',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['User-Agent', '浏览器', '检测', '开发'],
            url: 'tools/user-agent.html',
            icon: '🖥️',
            hot: false
        },
        {
            id: 'markdown-table-gen',
            name: 'Markdown表格生成',
            description: '可视化创建Markdown表格，支持导入CSV，一键复制',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['Markdown', '表格', '生成', '开发'],
            url: 'tools/markdown-table-gen.html',
            icon: '📊',
            hot: false
        },
        {
            id: 'git-command-gen',
            name: 'Git命令生成器',
            description: '通过可视化表单生成常用Git命令，减少记忆负担',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['Git', '命令', '生成', '版本控制'],
            url: 'tools/git-command-gen.html',
            icon: '🐙',
            hot: false
        },
        {
            id: 'npm-commands',
            name: 'npm/yarn/pnpm速查',
            description: 'npm、yarn、pnpm、bun命令对照速查表，包管理器切换必备',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['npm', 'yarn', 'pnpm', '命令', '开发'],
            url: 'tools/npm-commands.html',
            icon: '📦',
            hot: false
        },
        {
            id: 'console-art',
            name: 'Console艺术字Banner',
            description: '生成炫酷的console.log彩色艺术字Banner，美化控制台输出',
            category: 'dev',
            categoryName: '开发工具',
            tags: ['console', 'Banner', '艺术字', 'JavaScript'],
            url: 'tools/console-art.html',
            icon: '🎨',
            hot: false
        },

        // ==============================
        // 效率工具 (51-60)
        // ==============================
        {
            id: 'dev-cron',
            name: 'Cron表达式生成器',
            description: 'Cron表达式可视化生成与中文解读，支持每12小时等快速配置',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['Cron', '定时任务', '表达式', '开发'],
            url: 'tools/dev-cron.html',
            icon: '⏰',
            hot: true
        },
        {
            id: 'timestamp',
            name: '时间戳转换器',
            description: 'Unix时间戳与日期时间互转，秒级/毫秒级，实时显示当前时间戳',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['时间戳', 'Unix', '转换', '开发'],
            url: 'tools/timestamp.html',
            icon: '⏱️',
            hot: true
        },
        {
            id: 'ip-calculator',
            name: 'IP/子网掩码计算',
            description: '计算IP地址的网络地址、广播地址、可用主机数等信息',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['IP', '子网', '网络', '计算'],
            url: 'tools/ip-calculator.html',
            icon: '🌐',
            hot: false
        },
        {
            id: 'websocket-test',
            name: 'WebSocket在线测试',
            description: '在线WebSocket客户端，测试WS连接、发送消息、查看响应',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['WebSocket', '测试', '网络', '开发'],
            url: 'tools/websocket-test.html',
            icon: '🔌',
            hot: false
        },
        {
            id: 'cookie-parser',
            name: 'Cookie转JSON解析',
            description: '将Cookie字符串解析为JSON格式，方便查阅和调试',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['Cookie', 'JSON', '解析', '开发'],
            url: 'tools/cookie-parser.html',
            icon: '🍪',
            hot: false
        },
        {
            id: 'html-stripper',
            name: 'HTML标签剥离器',
            description: '去除文本中的所有HTML标签，保留纯文本内容',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['HTML', '标签', '剥离', '文本'],
            url: 'tools/html-stripper.html',
            icon: '✂️',
            hot: false
        },
        {
            id: 'css-shadow-gen',
            name: 'CSS阴影生成器',
            description: '可视化调节CSS box-shadow参数，实时预览并生成代码',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['CSS', '阴影', 'box-shadow', '生成器'],
            url: 'tools/css-shadow-gen.html',
            icon: '🌑',
            hot: false
        },
        {
            id: 'svg-data-uri',
            name: 'SVG转Data URI',
            description: '将SVG代码转换为Data URI格式，可直接用于CSS背景图',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['SVG', 'Data URI', 'CSS', '转换'],
            url: 'tools/svg-data-uri.html',
            icon: '🖼️',
            hot: false
        },
        {
            id: 'perf-budget',
            name: '前端性能预算计算',
            description: '根据目标加载时间计算JS/CSS/图片等资源的大小预算',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['性能', '预算', '前端', '优化'],
            url: 'tools/perf-budget.html',
            icon: '📈',
            hot: false
        },
        {
            id: 'todo',
            name: '每日清单Todo',
            description: '简洁本地存储待办清单，支持优先级标记，数据永久保存',
            category: 'efficiency',
            categoryName: '效率工具',
            tags: ['Todo', '待办', '清单', '效率'],
            url: 'tools/todo.html',
            icon: '✅',
            hot: false
        },

        // ==============================
        // 图片工具 (61-75)
        // ==============================
        {
            id: 'image-format-convert',
            name: '图片格式转换',
            description: '纯前端PNG/JPG/WebP格式互转，不上传服务器，隐私安全',
            category: 'image',
            categoryName: '图片工具',
            tags: ['图片', '格式', 'PNG', 'JPG', 'WebP', '转换'],
            url: 'tools/image-format-convert.html',
            icon: '🖼️',
            hot: false
        },
        {
            id: 'svg-preview',
            name: 'SVG路径预览优化',
            description: 'SVG代码实时预览、路径优化压缩、尺寸调整',
            category: 'image',
            categoryName: '图片工具',
            tags: ['SVG', '预览', '优化', '图片'],
            url: 'tools/svg-preview.html',
            icon: '🎯',
            hot: false
        },
        {
            id: 'image-compress',
            name: '图片压缩工具',
            description: '纯前端Canvas图片压缩，滑块调节质量，实时对比体积',
            category: 'image',
            categoryName: '图片工具',
            tags: ['图片', '压缩', 'Canvas', '优化'],
            url: 'tools/image-compress.html',
            icon: '🗜️',
            hot: true
        },
        {
            id: 'ico-gen',
            name: 'ICO图标生成器',
            description: '上传图片一键生成.ico格式图标文件，支持多尺寸',
            category: 'image',
            categoryName: '图片工具',
            tags: ['ICO', '图标', 'Favicon', '生成'],
            url: 'tools/ico-gen.html',
            icon: '🔷',
            hot: false
        },
        {
            id: 'color-convert',
            name: '色彩代码转换',
            description: 'HEX、RGB、HSL、HSB颜色代码互转，实时色板预览',
            category: 'image',
            categoryName: '图片工具',
            tags: ['颜色', 'HEX', 'RGB', 'HSL', '转换'],
            url: 'tools/color-convert.html',
            icon: '🎨',
            hot: false
        },
        {
            id: 'image-watermark',
            name: '图片水印添加',
            description: '纯前端为图片添加文字水印，自定义位置、大小、透明度',
            category: 'image',
            categoryName: '图片工具',
            tags: ['图片', '水印', '版权', '前端'],
            url: 'tools/image-watermark.html',
            icon: '💧',
            hot: false
        },
        {
            id: 'image-grid-cut',
            name: '图片九宫格切图',
            description: '将图片切割为3x3九宫格，适合Instagram等社交媒体发布',
            category: 'image',
            categoryName: '图片工具',
            tags: ['图片', '九宫格', '切图', '社交'],
            url: 'tools/image-grid-cut.html',
            icon: '⬛',
            hot: false
        },
        {
            id: 'image-crop',
            name: '图片比例裁剪',
            description: '按主流比例（1:1, 16:9, 4:3等）裁剪图片，适配各平台',
            category: 'image',
            categoryName: '图片工具',
            tags: ['图片', '裁剪', '比例', '社交'],
            url: 'tools/image-crop.html',
            icon: '✂️',
            hot: false
        },
        {
            id: 'canvas-to-svg',
            name: '在线画板转SVG',
            description: '在线涂鸦画板，将手绘内容导出为SVG矢量图',
            category: 'image',
            categoryName: '图片工具',
            tags: ['画板', 'SVG', '矢量', '绘画'],
            url: 'tools/canvas-to-svg.html',
            icon: '✏️',
            hot: false
        },
        {
            id: 'placeholder-gen',
            name: 'UI占位图生成',
            description: '生成自定义尺寸和颜色的UI占位图链接，前端开发利器',
            category: 'image',
            categoryName: '图片工具',
            tags: ['占位图', 'Placeholder', 'UI', '前端'],
            url: 'tools/placeholder-gen.html',
            icon: '🖼️',
            hot: false
        },
        {
            id: 'image-to-base64',
            name: '图片转Base64',
            description: '图片文件转Base64字符串，可直接嵌入HTML/CSS使用',
            category: 'image',
            categoryName: '图片工具',
            tags: ['图片', 'Base64', '转换', '前端'],
            url: 'tools/base64.html',
            icon: '🔐',
            hot: false
        },
        {
            id: 'gif-splitter',
            name: 'GIF分解帧提取',
            description: '将GIF动画分解为帧序列图片，分析动画每一帧',
            category: 'image',
            categoryName: '图片工具',
            tags: ['GIF', '动画', '帧', '分解'],
            url: 'tools/gif-splitter.html',
            icon: '🎞️',
            hot: false
        },
        {
            id: 'palette-gen',
            name: '色彩调色盘生成',
            description: '根据主色调自动生成互补色、渐变色调色盘方案',
            category: 'image',
            categoryName: '图片工具',
            tags: ['调色盘', '配色', '颜色', '设计'],
            url: 'tools/palette-gen.html',
            icon: '🎨',
            hot: false
        },
        {
            id: 'dominant-color',
            name: '图片主色调提取',
            description: '上传图片自动提取主要颜色，生成配色方案',
            category: 'image',
            categoryName: '图片工具',
            tags: ['颜色', '提取', '图片', '配色'],
            url: 'tools/dominant-color.html',
            icon: '💡',
            hot: false
        },
        {
            id: 'web-safe-colors',
            name: '网页安全色速查',
            description: '浏览所有216种网页安全色，点击复制HEX/RGB代码',
            category: 'image',
            categoryName: '图片工具',
            tags: ['安全色', '网页', '颜色', '速查'],
            url: 'tools/web-safe-colors.html',
            icon: '🌈',
            hot: false
        },

        // ==============================
        // 单位换算 (76-80)
        // ==============================
        {
            id: 'binary-converter',
            name: '进制转换器',
            description: '二进制、八进制、十进制、十六进制互转，支持负数和小数',
            category: 'convert',
            categoryName: '单位换算',
            tags: ['进制', '二进制', '十六进制', '转换'],
            url: 'tools/binary-converter.html',
            icon: '🔢',
            hot: false
        },
        {
            id: 'data-storage',
            name: '数据存储单位换算',
            description: 'Bit、Byte、KB、MB、GB、TB、PB存储单位精确换算',
            category: 'convert',
            categoryName: '单位换算',
            tags: ['存储', 'KB', 'MB', 'GB', '换算'],
            url: 'tools/data-storage.html',
            icon: '💾',
            hot: false
        },
        {
            id: 'time-unit',
            name: '时间单位换算',
            description: '纳秒、微秒、毫秒、秒、分钟、小时、天、周、年精确换算',
            category: 'convert',
            categoryName: '单位换算',
            tags: ['时间', '单位', '换算'],
            url: 'tools/time-unit.html',
            icon: '⏱️',
            hot: false
        },
        {
            id: 'length-area',
            name: '长度与面积换算',
            description: '米、英尺、英寸、里、亩、平方米等长度和面积单位换算',
            category: 'convert',
            categoryName: '单位换算',
            tags: ['长度', '面积', '换算', '单位'],
            url: 'tools/length-area.html',
            icon: '📐',
            hot: false
        },
        {
            id: 'temperature',
            name: '温度与能量换算',
            description: '摄氏度、华氏度、开尔文温度换算，焦耳、卡路里能量换算',
            category: 'convert',
            categoryName: '单位换算',
            tags: ['温度', '能量', '换算', '摄氏', '华氏'],
            url: 'tools/temperature.html',
            icon: '🌡️',
            hot: false
        },

        // ==============================
        // 金融工具 (81-85)
        // ==============================
        {
            id: 'fangdai',
            name: '房贷计算器',
            description: '等额本息/等额本金月供计算，含还款计划表，最新LPR利率',
            category: 'finance',
            categoryName: '金融工具',
            tags: ['房贷', '月供', '计算', '金融', 'LPR'],
            url: 'tools/fangdai.html',
            icon: '🏠',
            hot: true
        },
        {
            id: 'geshui',
            name: '个税计算器',
            description: '2025年最新个税计算，支持专项附加扣除，一键算税后工资',
            category: 'finance',
            categoryName: '金融工具',
            tags: ['个税', '工资', '计算', '金融'],
            url: 'tools/geshui.html',
            icon: '📊',
            hot: true
        },
        {
            id: 'exchange-rate',
            name: '汇率转换模拟器',
            description: '主要货币汇率换算，包含手续费计算，帮助出行和汇款决策',
            category: 'finance',
            categoryName: '金融工具',
            tags: ['汇率', '货币', '换算', '金融'],
            url: 'tools/exchange-rate.html',
            icon: '💱',
            hot: false
        },
        {
            id: 'saas-roi',
            name: 'SaaS订阅ROI计算',
            description: '计算SaaS工具的投资回报率，帮助决策是否值得订阅',
            category: 'finance',
            categoryName: '金融工具',
            tags: ['SaaS', 'ROI', '复利', '计算', '独立开发'],
            url: 'tools/saas-roi.html',
            icon: '📈',
            hot: false
        },
        {
            id: 'stripe-fee',
            name: 'Stripe手续费精算',
            description: '精确计算Stripe、PayPal收款扣除手续费后的实际到账金额',
            category: 'finance',
            categoryName: '金融工具',
            tags: ['Stripe', 'PayPal', '手续费', '金融', '出海'],
            url: 'tools/stripe-fee.html',
            icon: '💳',
            hot: false
        },

        // ==============================
        // 赚钱工具 (86-93)
        // ==============================
        {
            id: 'github-money-nav',
            name: 'GitHub赚钱项目导航',
            description: '精选GitHub上可用于变现的开源项目，包含部署教程和赚钱方向',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['GitHub', '赚钱', '副业', '开源'],
            url: 'tools/github-money-nav.html',
            icon: '💰',
            hot: true
        },
        {
            id: 'affiliate-nav',
            name: '联盟营销CPA导航',
            description: '精选联盟营销、CPA广告、接单渠道导航，副业变现参考',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['联盟营销', 'CPA', '副业', '变现'],
            url: 'tools/affiliate-nav.html',
            icon: '🤝',
            hot: false
        },
        {
            id: 'prompt-marketplace',
            name: 'Prompt商城卖图指引',
            description: '在Promptbase、PromptSea等平台出售AI Prompt的完整指引',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['Prompt', '卖图', '变现', 'AI'],
            url: 'tools/prompt-marketplace.html',
            icon: '🏪',
            hot: false
        },
        {
            id: 'chrome-ext-guide',
            name: 'Chrome插件上架指南',
            description: 'Chrome扩展开发到上架Chrome Web Store完整流程和避坑指南',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['Chrome', '插件', '扩展', '变现'],
            url: 'tools/chrome-ext-guide.html',
            icon: '🧩',
            hot: false
        },
        {
            id: 'tos-gen',
            name: '服务条款TOS生成',
            description: '为独立站/SaaS产品生成标准Terms of Service服务条款模板',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['TOS', '服务条款', '法律', '独立站'],
            url: 'tools/tos-gen.html',
            icon: '📜',
            hot: false
        },
        {
            id: 'privacy-policy-gen',
            name: '隐私政策生成器',
            description: '为App Store/Google Play上架生成符合要求的隐私政策文本',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['隐私政策', 'App', '合规', '法律'],
            url: 'tools/privacy-policy-gen.html',
            icon: '🔒',
            hot: false
        },
        {
            id: 'license-picker',
            name: '开源许可证选择器',
            description: '帮你选择最合适的开源许可证，对比MIT/Apache/GPL特点',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['许可证', 'MIT', 'GPL', '开源'],
            url: 'tools/license-picker.html',
            icon: '⚖️',
            hot: false
        },
        {
            id: 'saas-tax-nav',
            name: 'SaaS税务合规导航',
            description: '海外SaaS税务(VAT/GST)、合规注意事项和常见工具导航',
            category: 'money',
            categoryName: '赚钱工具',
            tags: ['税务', 'VAT', 'SaaS', '合规', '出海'],
            url: 'tools/saas-tax-nav.html',
            icon: '🧾',
            hot: false
        },

        // ==============================
        // 导航工具 (94-105)
        // ==============================
        {
            id: 'deploy-nav',
            name: '免费部署平台导航',
            description: 'Vercel/Cloudflare/HuggingFace/Railway等免费部署平台对比导航',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['部署', 'Vercel', 'Cloudflare', '免费', '导航'],
            url: 'tools/deploy-nav.html',
            icon: '🚀',
            hot: true
        },
        {
            id: 'cloudflare-guide',
            name: 'Cloudflare配置指南',
            description: 'Cloudflare DNS、CDN、Workers、Pages基础配置教程导航',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['Cloudflare', 'CDN', 'DNS', 'Workers'],
            url: 'tools/cloudflare-guide.html',
            icon: '☁️',
            hot: false
        },
        {
            id: 'vps-domain-nav',
            name: 'VPS域名购买导航',
            description: '海外VPS优惠监控、域名注册商对比，独立站搭建必看',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['VPS', '域名', '购买', '独立站'],
            url: 'tools/vps-domain-nav.html',
            icon: '🖥️',
            hot: false
        },
        {
            id: 'mcp-nav',
            name: 'MCP工具导航',
            description: 'Model Context Protocol相关工具、服务器、应用导航汇总',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['MCP', 'Claude', 'AI', '工具', '导航'],
            url: 'tools/mcp-nav.html',
            icon: '🔌',
            hot: true
        },
        {
            id: 'ai-course-nav',
            name: 'AI课程资讯聚合',
            description: '精选AI学习课程、最新AI资讯和技术博客聚合导航',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['AI', '课程', '学习', '资讯'],
            url: 'tools/ai-course-nav.html',
            icon: '📡',
            hot: false
        },
        {
            id: 'payment-gateway-nav',
            name: '全球支付网关对比',
            description: '对比Stripe、PayPal、LemonSqueezy等支付网关费率和适用场景',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['支付', 'Stripe', 'PayPal', '对比', '出海'],
            url: 'tools/payment-gateway-nav.html',
            icon: '💳',
            hot: false
        },
        {
            id: 'free-assets-nav',
            name: '免费素材网站导航',
            description: '精选免费图片、音效、视频、字体、图标等设计素材网站',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['素材', '图片', '音效', '免费', '设计'],
            url: 'tools/free-assets-nav.html',
            icon: '🎁',
            hot: false
        },
        {
            id: 'launch-platform-nav',
            name: '独立产品发布平台',
            description: 'Product Hunt、Hacker News、Reddit等海外独立产品发布平台导航',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['Product Hunt', '发布', '推广', '独立开发'],
            url: 'tools/launch-platform-nav.html',
            icon: '🎯',
            hot: false
        },
        {
            id: 'ai-directory-submit',
            name: 'AI导航站提交矩阵',
            description: 'AI产品提交到各大AI导航站、产品目录的完整提交清单',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['AI', '导航站', '提交', '推广'],
            url: 'tools/ai-directory-submit.html',
            icon: '📋',
            hot: false
        },
        {
            id: 'indie-hacker-tools',
            name: 'Indie Hacker运营工具',
            description: '出海独立开发者运营必备工具图谱全景：SEO、分析、增长黑客',
            category: 'nav',
            categoryName: '导航工具',
            tags: ['独立开发', 'Indie Hacker', '出海', '运营'],
            url: 'tools/indie-hacker-tools.html',
            icon: '🗺️',
            hot: true
        },

        // ==============================
        // 额外补充工具 - 时间日期
        // ==============================
        {
            id: 'age-calc',
            name: '年龄计算器',
            description: '精确计算周岁、虚岁、出生天数，支持未来日期预测',
            category: 'datetime',
            categoryName: '时间日期',
            tags: ['年龄', '计算', '生日', '日期'],
            url: 'tools/age-calc.html',
            icon: '🎂',
            hot: false
        },
        {
            id: 'date-diff',
            name: '日期差计算',
            description: '计算两个日期之间相差的天数、小时、分钟，节日倒计时',
            category: 'datetime',
            categoryName: '时间日期',
            tags: ['日期', '天数', '差值', '计算'],
            url: 'tools/date-diff.html',
            icon: '📅',
            hot: false
        },
        {
            id: 'qrcode',
            name: '二维码生成器',
            description: '在线生成二维码，支持自定义颜色、大小，一键下载',
            category: 'text',
            categoryName: '文本工具',
            tags: ['二维码', 'QR', '生成', '扫码'],
            url: 'tools/qrcode.html',
            icon: '📱',
            hot: true
        },
        {
            id: 'password',
            name: '密码生成器',
            description: '生成高强度随机密码，自定义长度和字符类型，保存历史',
            category: 'text',
            categoryName: '文本工具',
            tags: ['密码', '安全', '随机', '生成'],
            url: 'tools/password.html',
            icon: '🔐',
            hot: false
        },
        {
            id: 'security-password',
            name: '高强度密码生成器',
            description: '自由勾选字符类型，滑块调节6-64位，批量生成，强度可视化评级',
            category: 'text',
            categoryName: '文本工具',
            tags: ['密码', '安全', '随机', '加密', '高强度'],
            url: 'tools/security-password.html',
            icon: '🛡️',
            hot: true
        }
    ];

    // 分类元数据
    window.TOOL_CATEGORIES = [
        { id: 'all',        name: '全部工具',   icon: '🛠️' },
        { id: 'ai',         name: 'AI工具',     icon: '🤖' },
        { id: 'text',       name: '文本工具',   icon: '📝' },
        { id: 'seo',        name: '站长工具',   icon: '🔍' },
        { id: 'dev',        name: '开发工具',   icon: '💻' },
        { id: 'efficiency', name: '效率工具',   icon: '⚡' },
        { id: 'image',      name: '图片工具',   icon: '🖼️' },
        { id: 'convert',    name: '单位换算',   icon: '📏' },
        { id: 'finance',    name: '金融工具',   icon: '💰' },
        { id: 'money',      name: '赚钱工具',   icon: '💵' },
        { id: 'nav',        name: '导航工具',   icon: '🗺️' },
        { id: 'datetime',   name: '时间日期',   icon: '⏰' }
    ];

})();
