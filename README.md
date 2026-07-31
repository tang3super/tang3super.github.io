# 如何给网站新增一篇文章

以后你只需要做两件事：**①复制模板改内容 ②在板块列表页加一条链接**，不需要碰样式表（`assets/style.css`），也不需要改导航栏。

---

## 第一步：复制模板

打开 `templates/article-template.html`，复制一份到对应板块的文件夹里，重命名成新文件，比如：

```
options-radar/2026-08-05-nvda.html
stock-analysis/2026-08-01-谷歌财报点评.html
macro-trade/2026-08-10-美联储降息展望.html
book-note/聪明的投资者-读书笔记.html
```

文件名建议用英文/拼音/日期，不要用中文标点符号（可以用中文字，但避免书名号、冒号这些特殊符号），保证网址干净。

## 第二步：按模板里的编号说明填内容

`article-template.html` 里每一段前面都有类似这样的注释：

```html
<!-- ①【必改】... -->
<!-- ⑧【可选】... -->
```

- **【必改】**：必须替换成真实内容的地方（标题、日期、正文等）
- **【可选】**：这个模块（表格/2x2网格/深色结论块）可以整段删掉，如果这篇文章用不上
- **【不要改】**：路径、导航栏这些结构性代码，不用动，改了反而可能出问题

模板里还标注了几个常用的样式技巧：
- 表格里想让某一行标红高亮 → 给 `<tr>` 加 `class="hot"`
- 表格里想让某个格子标绿（比如"买入"）→ 给 `<td>` 加 `class="buy"`
- 想强调某个数字 → 用 `<strong>数字</strong>` 包起来，会自动变蓝加粗

## 第三步：去板块列表页加一条链接

打开对应板块的 `index.html`（比如 `options-radar/index.html`），找到 `<ul class="article-list">` 这个位置，复制一个 `<li>...</li>` 块，改成新文章的信息：

```html
<li>
  <a class="article-item" href="2026-08-05-nvda.html">
    <div class="date">2026-08-05</div>
    <div class="title">NVDA · 文章标题</div>
    <div class="desc">一句话摘要，概括这篇文章最核心的内容。</div>
  </a>
</li>
```

如果这个板块之前显示的是"暂无文章，敬请期待"（`<p class="empty-note">`），把这一行删掉，换成上面的 `<ul class="article-list">` 结构。

## 第四步：上传到GitHub

跟以前一样，把改动过的文件（新文章 + 改过的列表页）覆盖上传到 `tang3super.github.io` 仓库，等一两分钟生效。

---

## 目录结构参考

```
site_final/
├── index.html                 主页（一般不用动）
├── assets/
│   ├── style.css              全站共用样式（不要碰）
│   └── img/about.jpg          你的头像照片
├── templates/
│   └── article-template.html  新文章都从这里复制
├── options-radar/
│   ├── index.html             文章列表（加新文章时改这个）
│   ├── about.html             筛选规则说明
│   └── *.html                 各篇文章
├── stock-analysis/index.html
├── macro-trade/index.html
└── book-note/index.html
```
