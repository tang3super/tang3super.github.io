# 网站维护说明（Jekyll版）

这个网站现在用Jekyll搭建。**样式、布局、导航、跳转关系都已经定义好，以后新增内容只需要写Markdown文件，不用碰HTML/CSS。**

---

## 怎么加一篇新文章

1. 找到对应板块的文件夹（注意是**带下划线前缀**的那个）：

   | 板块 | 文章存放目录 |
   |---|---|
   | 期权异动雷达 | `_options_radar/` |
   | 个股分析 | `_stock_analysis/` |
   | 宏观交易 | `_macro_trade/` |
   | 读书笔记 | `_book_note/` |

2. 在对应文件夹里新建一个`.md`文件，文件名随意（建议用日期开头，比如`2026-08-05-nvda.md`）

3. 文件最开头写这几行"标注"（前后的`---`不能省）：

   ```yaml
   ---
   title: NVDA · 文章标题
   date: 2026-08-05
   subtitle: 副标题信息（可选，会显示在正文标题下面）
   summary: 一句话摘要（可选，会显示在板块列表页）
   ---
   ```

4. `---`下面直接写正文，支持Markdown语法（`##`是小标题、`**加粗**`），也可以直接写HTML（比如我们已经在用的高亮框、表格、结论块，参考已有的SNDK/MU两篇文章抄格式就行）：

   - 高亮摘要框：`<div class="summary-box">...</div>`
   - 2x2原因网格：`<div class="grid2"><div class="grid-item"><span class="tag">标题</span>说明</div>...</div>`
   - 深色结论块：`<div class="verdict"><h3>核心判断</h3><p>...</p></div>`
   - 表格里某行标红：`<tr class="hot">`；某格标绿：`<td class="buy">`

5. 保存、上传到GitHub。**完事**——这篇文章会自动出现在对应板块的列表页，如果是该板块最新的3篇之一，也会自动出现在首页。不需要手动改任何列表页或首页文件。

---

## 板块的名称/说明文字要改，去哪改

打开 `_data/boards.yml`，里面是四个板块各自的中文名、英文标签、说明文字，改这一个文件就行，不用碰模板。

## 首页的引言、自我介绍要改，去哪改

- 首页顶部那句引言和说明：改 `index.md` 文件开头的 `quote` / `subtitle` 两行
- "你好，我是Super"这段自我介绍：在 `_layouts/home.html` 里，`<section class="about">` 那一块
- 联系方式（微信/小红书/邮箱）：改 `_includes/footer.html`

## 样式（颜色/字体/间距）要改，去哪改

`assets/style.css`，一个文件管全站。

---

## 目录结构参考

```
jekyll_site/
├── _config.yml              网站配置（板块collection定义）
├── _data/boards.yml         四个板块的名称/说明文字
├── _layouts/                页面模板（首页/列表页/文章页），一般不用碰
├── _includes/                导航栏、页脚组件
├── assets/style.css          全站样式
├── index.md                  首页文案参数
├── options-radar/
│   ├── index.md              列表页（自动生成文章列表，不用手动加链接）
│   └── about.md              筛选规则说明（独立静态页）
├── stock-analysis/index.md
├── macro-trade/index.md
├── book-note/index.md
├── _options_radar/           期权异动雷达的文章都放这里（注意带下划线）
│   ├── 2026-07-28-sndk.md
│   └── 2026-07-28-mu.md
├── _stock_analysis/          个股分析的文章放这里
├── _macro_trade/              宏观交易的文章放这里
└── _book_note/                读书笔记的文章放这里
```

---

## ⚠️ 重要提醒

这套Jekyll结构我在本地没法真正构建测试（沙盒环境没有Ruby），**第一次上传后一定要去GitHub仓库的Settings → Pages确认构建成功**，或者直接访问网站看效果。如果页面显示不对、或者GitHub提示构建失败，把报错信息截图发给我，我来定位问题。
