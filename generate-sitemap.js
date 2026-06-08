#!/usr/bin/env node
/**
 * 生成 sitemap.xml
 * 用法: node generate-sitemap.js
 * 会读取 js/tools-data.js 中的 ALL_TOOLS，自动生成 sitemap.xml
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://ceecee1234.github.io/toolbox';
const TODAY = new Date().toISOString().split('T')[0];

// 读取 tools-data.js，提取 ALL_TOOLS
const dataPath = path.join(__dirname, 'js', 'tools-data.js');
const dataCode = fs.readFileSync(dataPath, 'utf8');

// 在沙箱中执行，获取 ALL_TOOLS 和 TOOL_CATEGORIES
const sandbox = {};
const fn = new Function('window', dataCode);
fn(sandbox);

const tools = sandbox.ALL_TOOLS || [];

// 静态页面
const staticPages = [
    { url: '', changefreq: 'daily', priority: '1.0' },
    { url: 'ai.html', changefreq: 'weekly', priority: '0.8' },
    { url: 'about.html', changefreq: 'monthly', priority: '0.5' },
    { url: 'privacy.html', changefreq: 'yearly', priority: '0.3' },
];

function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

const entries = [];

// 静态页面
for (const page of staticPages) {
    const loc = page.url ? `${BASE_URL}/${page.url}` : BASE_URL + '/';
    entries.push(`  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
}

// 工具页面
const seenUrls = new Set();
for (const tool of tools) {
    if (!tool.url || seenUrls.has(tool.url)) continue;
    seenUrls.add(tool.url);

    const loc = `${BASE_URL}/${tool.url}`;
    const priority = tool.hot ? '0.9' : '0.7';
    entries.push(`  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`sitemap.xml 已生成，共 ${entries.length} 个URL`);
console.log(`  静态页面: ${staticPages.length}`);
console.log(`  工具页面: ${seenUrls.size}`);
