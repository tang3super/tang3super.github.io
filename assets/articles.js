/* articles.js
 * 单一数据源渲染：首页"最新文章" + 各栏目列表页
 * 数据源：/data/articles.json
 *
 * 用法：
 *   首页容器：<div class="article-grid" id="latest-articles"></div>
 *   脚本调用：renderHomeLatest('latest-articles', 3);
 *
 *   栏目页容器：<div class="article-list" id="macro-trade-list"></div>
 *   脚本调用：renderColumnList('macro-trade-list', 'macro-trade');
 */

async function loadArticles() {
  const res = await fetch('/data/articles.json');
  if (!res.ok) throw new Error('articles.json 加载失败: ' + res.status);
  return res.json();
}

function sortByDateDesc(list) {
  return list.slice().sort((a, b) => b.date.localeCompare(a.date));
}

/* ---------- 首页：最新文章卡片 ---------- */

function homeCardHtml(a) {
  return `<a class="article-tile ${a.colorClass}" href="${a.url}">
    <div class="top"></div>
    <div class="body">
      <div class="date">${a.date}</div>
      <div class="cat">${a.categoryLabel}</div>
      <h4>${a.title}</h4>
      <p>${a.summary}</p>
    </div>
  </a>`;
}

async function renderHomeLatest(containerId, limit) {
  limit = limit || 3;
  const el = document.getElementById(containerId);
  if (!el) return;
  try {
    const articles = await loadArticles();
    const latest = sortByDateDesc(articles).slice(0, limit);
    if (latest.length === 0) {
      el.innerHTML = '<p class="empty-note">暂无文章，敬请期待。</p>';
      return;
    }
    el.innerHTML = latest.map(homeCardHtml).join('');
  } catch (e) {
    console.error(e);
    el.innerHTML = '<p class="empty-note">文章加载失败，请刷新重试。</p>';
  }
}

/* ---------- 栏目列表页 ---------- */

function listItemHtml(a) {
  return `<a class="article-item" href="${a.url}">
    <div class="date">${a.date}</div>
    <div class="title">${a.title}</div>
    <div class="desc">${a.summary}</div>
  </a>`;
}

async function renderColumnList(containerId, category) {
  const el = document.getElementById(containerId);
  if (!el) return;
  try {
    const articles = await loadArticles();
    const filtered = sortByDateDesc(articles.filter(a => a.category === category));
    if (filtered.length === 0) {
      el.innerHTML = '<p class="empty-note">暂无文章，敬请期待。</p>';
      return;
    }
    el.innerHTML = filtered.map(listItemHtml).join('');
  } catch (e) {
    console.error(e);
    el.innerHTML = '<p class="empty-note">文章列表加载失败，请刷新重试。</p>';
  }
}
