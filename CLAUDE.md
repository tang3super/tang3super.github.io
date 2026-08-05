# tang3super.github.io

个人投资博客，Jekyll 静态站点，托管在 GitHub Pages。本地仓库路径：`D:\Github\tang3super.github.io`。

## 结构

- 四个板块 = 四个 Jekyll collection，定义在 `_config.yml`，元数据（名称/描述/slug）在 `_data/boards.yml`：
  - `_options_radar/` → 期权雷达 (`/options-radar/`)
  - `_stock_analysis/` → 个股分析 (`/stock-analysis/`)
  - `_macro_trade/` → 宏观交易 (`/macro-trade/`)
  - `_book_note/` → 读书笔记 (`/book-note/`)
- 每个 collection 的文章自动套用 `_layouts/article.html`（渲染 `page.title` 为 h1、`page.date`+`page.subtitle` 为 meta、`{{ content }}` 为正文、底部自动加免责声明）。
- 首页 (`_layouts/home.html`) 和板块列表页 (`_layouts/board-list.html`) 都从 `site[board.key] | sort: 'date' | reverse` 里取文章，首页每个板块只显示最新 3 篇。
- 全站样式在 `assets/style.css`，用 CSS 变量：`--bg` `--ink` `--muted` `--border` `--accent` `--font-mono`（JetBrains Mono，正文默认）`--font-sans`（Inter/PingFang SC，标题用）。
- 已接入 **Cloudflare Web Analytics**（隐私友好、不用 cookie 的访客统计），追踪代码在 `_layouts/default.html` 里 `</body>` 前，全站页面通用，不用每篇文章单独加。

## 发文章工作流

用户通常会说"把 xxx.html/xxx.md 上传到网站"，源文件一般在 `C:\Users\super\Downloads`。

**发布前可选一步**：用户有时会先说"审核一下 xxx"，这是要用 Gemini CLI 做发布前的事实/逻辑审核（配置见我的记忆 `gemini_cli_setup.md`），把发现的问题汇总给用户确认、按需修正原文之后，再进入下面的正式发文流程。

正式发文步骤：

1. **读源文件**，判断内容属于哪个板块（不确定就问用户，不要瞎猜）。
2. **判断新建文章的日期**：没有明确关联的历史事件日期时，用当天日期。
3. **样式规则（重要，踩过坑）**：源文件如果是别人做的独立卡片/海报风格 HTML（自带 `<style>`、自己的字体、配色），**不要保留原样嵌入**——用户明确反馈过这样"很混搭"。正确做法：
   - 优先直接复用站内已有组件改写内容：`<div class="summary-box">`（摘要框）、`<div class="verdict"><h3>...</h3><p>...</p></div>`（结论深色框）、`<div class="grid2"><div class="grid-item"><span class="tag">标签</span>正文</div>...</div>`（要点卡片）、标准 `<table>`、`**strong**`、`*em*`（旁注斜体）。参考已发布文章：`_options_radar/2026-07-28-mu.md`、`_stock_analysis/2026-08-03-glw-corning.md`。
   - 只有源文件带**真实交互功能**（比如点击切换的 JS 工具，参考 `_macro_trade/2026-08-03-cross-asset-framework.md`）才保留自定义 `<style>`，但必须：把所有选择器限定在一个 wrapper class 下（如 `.macro-tool`），颜色/字体一律用站内变量（`var(--accent)` 等），不要引入 Google Fonts 等站外字体，并补上手机端响应式（原设计如果是固定宽度卡片或多列 grid，在窄屏会挤爆）。
4. **Front matter** 参考现有文章：`title`、`date`、`subtitle`（简短，出现在标题下方 meta 行）、`summary`（用于板块列表页和首页预览，一两句话）。
5. **文件命名**：`_<collection>/YYYY-MM-DD-slug.md`，slug 用英文短横线。
6. **提交前自查**：写完用小脚本数一下 `<div>`/`</div>`、`<style>`/`</style>`、`<table>`/`</table>` 是否配对，front matter 的 `---` 是否是 2 个。
7. **git 提交推送**：`git add -A` → 展示 diff/diff --stat 给用户确认 → `git commit` → `git push`。

## 已知坑

- **PowerShell 会把 `git push` 的正常进度信息（stderr）显示成红色 `NativeCommandError`**，看着像失败，其实只要看 `$LASTEXITCODE` 是 `0` 就是成功了。不要被红字吓到误判。
- **本机用 Clash for Windows 做代理**，端口不是固定的 7890，会漂移。如果 git 网络操作报 "Failed to connect... port 443"，先查 `git config --global --get http.proxy/https.proxy` 和 Clash 实际监听端口是否一致（`Get-NetTCPConnection -State Listen -OwningProcess (Get-Process clash-win64).Id`），不一致就更新 git 代理配置到实际端口，不要一上来就让用户重开代理软件。
- 这台机器没装 Ruby/Jekyll，没法本地 `bundle exec jekyll serve` 预览，只能做静态检查（标签配对等），实际效果要等 GitHub Pages 部署完让用户自己看。
