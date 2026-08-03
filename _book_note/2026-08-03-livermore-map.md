---
title: 利弗莫尔交易思想体系
date: 2026-08-03
subtitle: 《股票大作手回忆录》×《如何在股票中交易》综合整理
summary: 整理杰西·利弗莫尔的核心交易哲学、读市场方法、建仓/持仓/退出手法、历史成功案例与反复出现的失败教训，以及心理与资金管理原则。
---

<style>
.livermore-map *, .livermore-map *::before, .livermore-map *::after { box-sizing: border-box; margin:0; padding:0; }
.livermore-map { font-family: var(--font-sans); }

.livermore-map .section-title {
  font-size:13px; font-weight:600; color:#fff;
  padding:7px 14px; border-radius:20px;
  display:inline-block; margin-bottom:10px;
}
.livermore-map .section { margin-bottom:18px; }

.livermore-map .cards { display:grid; gap:8px; }
.livermore-map .cards.col2 { grid-template-columns:1fr 1fr; }
.livermore-map .cards.col3 { grid-template-columns:1fr 1fr 1fr; }
.livermore-map .cards.col4 { grid-template-columns:1fr 1fr 1fr 1fr; }
@media (max-width:600px) {
  .livermore-map .cards.col3, .livermore-map .cards.col4 { grid-template-columns:1fr 1fr; }
}
@media (max-width:420px) {
  .livermore-map .cards.col2, .livermore-map .cards.col3, .livermore-map .cards.col4 { grid-template-columns:1fr; }
}

.livermore-map .card { border-radius:10px; padding:10px 11px; }
.livermore-map .card .ct { font-size:13px; font-weight:600; margin-bottom:3px; }
.livermore-map .card .cs { font-size:11.5px; line-height:1.6; }

/* 紫色 - 核心哲学 */
.livermore-map .ph-bg { background:#534AB7; }
.livermore-map .ph-card { background:#EEEDFE; }
.livermore-map .ph-card .ct { color:#3C3489; }
.livermore-map .ph-card .cs { color:#534AB7; }

/* 蓝色 - 读市场/建仓 */
.livermore-map .bl-bg { background:#185FA5; }
.livermore-map .bl-card { background:#E6F1FB; }
.livermore-map .bl-card .ct { color:#0C447C; }
.livermore-map .bl-card .cs { color:#185FA5; }

/* 青色 - 持仓/退出 */
.livermore-map .tl-bg { background:#0F6E56; }
.livermore-map .tl-card { background:#E1F5EE; }
.livermore-map .tl-card .ct { color:#085041; }
.livermore-map .tl-card .cs { color:#0F6E56; }

/* 绿色 - 成功案例 */
.livermore-map .gn-bg { background:#3B6D11; }
.livermore-map .gn-card { background:#EAF3DE; }
.livermore-map .gn-card .ct { color:#27500A; }
.livermore-map .gn-card .cs { color:#3B6D11; }

/* 珊瑚 - 失败教训 */
.livermore-map .co-bg { background:#993C1D; }
.livermore-map .co-card { background:#FAECE7; }
.livermore-map .co-card .ct { color:#712B13; }
.livermore-map .co-card .cs { color:#993C1D; }

/* 琥珀 - 心理/资金 */
.livermore-map .am-bg { background:#854F0B; }
.livermore-map .am-card { background:#FAEEDA; }
.livermore-map .am-card .ct { color:#633806; }
.livermore-map .am-card .cs { color:#854F0B; }

/* 灰色 - 原则 */
.livermore-map .gr-card { background:#F1EFE8; }
.livermore-map .gr-card .ct { color:#444441; }
.livermore-map .gr-card .cs { color:#5F5E5A; }

.livermore-map .divider { height:1px; background:#d3d1c7; margin:6px 0 14px; }

.livermore-map .quote {
  background: var(--bg); border-left:3px solid #534AB7;
  border-radius:0 8px 8px 0;
  padding:10px 14px; margin-top:14px;
  font-size:12.5px; color:#3C3489; font-style:italic; line-height:1.7;
}
.livermore-map .quote span { display:block; margin-top:4px; color:#888780; font-style:normal; }

.livermore-map .big-card { border-radius:10px; padding:12px 14px; margin-bottom:8px; }
.livermore-map .big-card .bt { font-size:14px; font-weight:600; margin-bottom:4px; }
.livermore-map .big-card .bs { font-size:12.5px; line-height:1.7; }
.livermore-map .big-card.ph-card .bt { color:#3C3489; }
.livermore-map .big-card.ph-card .bs { color:#534AB7; }
</style>

<div class="livermore-map">

<!-- 核心哲学 -->
<div class="section">
  <span class="section-title ph-bg">核心哲学</span>
  <div class="big-card ph-card">
    <div class="bt">顺势而为 · 耐心等待 · 市场永远是对的</div>
    <div class="bs">情绪是最大的敌人。时间要素与价格要素必须双重确认才能入场。真正的机会一年只有几次，大部分时间应当什么都不做。</div>
  </div>
</div>

<div class="divider"></div>

<!-- 读市场 -->
<div class="section">
  <span class="section-title bl-bg">读懂市场</span>
  <div class="cards col2">
    <div class="card bl-card">
      <div class="ct">判断大势方向</div>
      <div class="cs">牛市只做多，熊市只做空。不在模糊方向中猜测。</div>
    </div>
    <div class="card bl-card">
      <div class="ct">关键点位理论</div>
      <div class="cs">价格突破历史关键阻力/支撑才是真信号，等待市场自己说话。</div>
    </div>
    <div class="card bl-card">
      <div class="ct">价量配合验证</div>
      <div class="cs">放量突破才可信，缩量突破存疑，等待再次确认。</div>
    </div>
    <div class="card bl-card">
      <div class="ct">时间+价格公式</div>
      <div class="cs">《如何交易》核心创新：区间横盘时间越长，突破意义越大。</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- 建仓手法 -->
<div class="section">
  <span class="section-title tl-bg">建仓手法</span>
  <div class="cards col2">
    <div class="card tl-card">
      <div class="ct">探针式入场</div>
      <div class="cs">先用20%小仓位试探，价格确认后再逐步加仓，永不一次性满仓。</div>
    </div>
    <div class="card tl-card">
      <div class="ct">金字塔加仓</div>
      <div class="cs">只在盈利方向加仓，每次加仓量递减，形成底宽顶窄结构。</div>
    </div>
    <div class="card tl-card">
      <div class="ct">领头股策略</div>
      <div class="cs">只买行业中最强那一两只，不分散买第二第三强的股票。</div>
    </div>
    <div class="card tl-card">
      <div class="ct">持续关键点位</div>
      <div class="cs">上涨中横盘整理后再突破，是加仓信号而非离场信号。</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- 持仓与退出 -->
<div class="section">
  <span class="section-title am-bg">持仓 · 止损 · 退出</span>
  <div class="cards col2">
    <div class="card am-card">
      <div class="ct">"坐在利润上"</div>
      <div class="cs">大行情需要数月展开，中途波动不轻易平仓，耐心是最贵的品质。</div>
    </div>
    <div class="card am-card">
      <div class="ct">不摊薄亏损</div>
      <div class="cs">亏损时绝不加仓，那是在向错误判断追加赌注。单笔止损不超过10%。</div>
    </div>
    <div class="card am-card">
      <div class="ct">利润保护</div>
      <div class="cs">盈利达到一定幅度后，将止损上移至成本价以上，锁定"不亏钱"底线。</div>
    </div>
    <div class="card am-card">
      <div class="ct">行情变质即走</div>
      <div class="cs">价量关系或趋势特征改变，不等待"再看看"，立刻平仓。</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- 成功案例 -->
<div class="section">
  <span class="section-title gn-bg">历史成功实践</span>
  <div class="cards col3">
    <div class="card gn-card">
      <div class="ct">1906年大地震</div>
      <div class="cs">预判灾后抛售，逆众做空太平洋铁路。但过早平仓，错过主体跌幅——也是一个教训。</div>
    </div>
    <div class="card gn-card">
      <div class="ct">1907年大恐慌</div>
      <div class="cs">全面做空崩盘市场，单日获利约百万美元。摩根托人请他停止做空以稳定市场。</div>
    </div>
    <div class="card gn-card">
      <div class="ct">1929年大崩盘</div>
      <div class="cs">提前布局百余家经纪商隐蔽空头仓位，崩盘中净赚约一亿美元，成为当时最富之人。</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- 失败教训 -->
<div class="section">
  <span class="section-title co-bg">反复出现的失败模式</span>
  <div class="cards col2">
    <div class="card co-card">
      <div class="ct">听信内幕消息</div>
      <div class="cs">棉花交易轻信帕西·托马斯，违背自身判断建立错误多头，亏损惨重。内幕消息是专为外行设的陷阱。</div>
    </div>
    <div class="card co-card">
      <div class="ct">破坏自己的规则</div>
      <div class="cs">明知规则，总找理由绕过。每次大亏事后复盘都能找到违规节点。一生破产三次以上。</div>
    </div>
    <div class="card co-card">
      <div class="ct">不肯止损等待</div>
      <div class="cs">亏损头寸上告诉自己"再等等"，小亏拖成灾难性亏损。承认错误的速度决定亏损大小。</div>
    </div>
    <div class="card co-card">
      <div class="ct">过早兑现利润</div>
      <div class="cs">行情还未走完就急着锁定，错过大波段主体。坐不住是他自认最难克服的弱点。</div>
    </div>
    <div class="card co-card">
      <div class="ct">在横盘市场交易</div>
      <div class="cs">无趋势时仍频繁进出，消耗资本与精力。最佳操作有时就是不操作。</div>
    </div>
    <div class="card co-card">
      <div class="ct">不预留备用金</div>
      <div class="cs">大胜后未将部分利润锁入不可动账户，导致下次破产时无退路。书中明确自认此错。</div>
    </div>
  </div>
</div>

<div class="divider"></div>

<!-- 心理与资金原则 -->
<div class="section">
  <span class="section-title ph-bg">心理 · 资金管理原则</span>
  <div class="cards col4">
    <div class="card gr-card">
      <div class="ct">孤独决策</div>
      <div class="cs">不与任何人讨论仓位，外部意见只会干扰判断。</div>
    </div>
    <div class="card gr-card">
      <div class="ct">手工记录复盘</div>
      <div class="cs">每笔交易记录理由与结果，发现自身行为规律。</div>
    </div>
    <div class="card gr-card">
      <div class="ct">集中持仓</div>
      <div class="cs">同时持有不超过四五只，否则无法充分关注每一只。</div>
    </div>
    <div class="card gr-card">
      <div class="ct">等待最佳时机</div>
      <div class="cs">宁可不做，不可乱做。强迫交易是亏损根源。</div>
    </div>
  </div>
</div>

<!-- 引言 -->
<div class="quote">
  "投机是世界上最令人着迷的游戏，但它不适合愚蠢的人、精神懒惰的人、情绪控制力差的人，以及那些想一夜暴富的人。他们注定会死得一贫如洗。"
  <span>— 杰西·利弗莫尔，《如何在股票中交易》，1940年（出版后8个月，他以"我是个失败者"为遗言开枪自尽）</span>
</div>

</div>
