---
title: 跨资产宏观传导框架
date: 2026-08-03
subtitle: 点击情境标签切换，查看传导链条与资产影响
summary: 从宏观驱动事件出发，拆解传导链条、四类资产的方向性影响，以及容易被忽略的非共识洞察，覆盖加息、降息、日元套息崩解、地缘冲击、CPI/PPI通胀数据强弱、美债长端期限溢价冲击、劳动力数据强弱共11种情境，按驱动因素分组浏览，另附美债曲线形态速览。
---

<div class="summary-box">
从宏观驱动事件出发，拆解传导链条、四类资产（美元、美债收益率、黄金、股市）的方向性影响，以及容易被忽略的非共识洞察或陷阱提示，覆盖加息、降息、日元套息崩解、地缘政治冲击、CPI意外走强/走弱、PPI意外走强/走弱、美债长端期限溢价冲击、劳动力数据超预期走强/走弱共11种情境，按驱动因素分组、点击下方标签切换。
</div>

<style>
.macro-tool { font-family: var(--font-mono); }
.macro-tool .tabs { margin-bottom:20px; }
.macro-tool .tab-group-label{ font-family:var(--font-mono); font-size:10.5px; font-weight:500; color:var(--muted); letter-spacing:1px; text-transform:uppercase; margin:14px 0 6px; }
.macro-tool .tab-group-label:first-child{ margin-top:0; }
.macro-tool .tab-group-row{ display:flex; flex-wrap:wrap; gap:8px; }
.macro-tool .tab {
  font-family: var(--font-sans); font-size:12.5px; font-weight:500;
  padding:10px 14px; border-radius:8px; border:1px solid var(--border);
  background:var(--bg); color:var(--muted); cursor:pointer; text-align:center;
  transition:all .15s ease; line-height:1.4; flex:0 0 auto;
}
.macro-tool .tab:hover{ border-color:var(--accent); color:var(--ink); }
.macro-tool .tab.active{ background:var(--ink); border-color:var(--ink); color:var(--bg); font-weight:600; }

.macro-tool .trigger-box{ border:1px solid var(--border); border-radius:8px; padding:14px 16px; margin-bottom:16px; background:var(--bg); }
.macro-tool .tag-row{ display:flex; gap:8px; flex-wrap:wrap; margin-bottom:10px; }
.macro-tool .tag-driver{ font-family:var(--font-mono); font-size:10.5px; padding:3px 9px; border-radius:5px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, transparent); color:var(--accent); }
.macro-tool .tag-lag{ font-family:var(--font-mono); font-size:10.5px; padding:3px 9px; border-radius:5px; background:var(--bg); color:var(--muted); border:1px solid var(--border); }
.macro-tool .trigger-text{ font-size:13px; color:var(--ink); line-height:1.8; }
.macro-tool .section-label{ font-family:var(--font-mono); font-size:10.5px; font-weight:500; color:var(--muted); margin:20px 0 10px; letter-spacing:.5px; text-transform:uppercase; }

.macro-tool .chain{ margin-bottom:6px; }
.macro-tool .chain-step{ display:flex; align-items:flex-start; gap:12px; padding:9px 0; border-bottom:1px dashed var(--border); }
.macro-tool .chain-step:last-child{ border-bottom:none; }
.macro-tool .chain-num{ font-family:var(--font-mono); font-size:11px; color:var(--accent); background:color-mix(in srgb, var(--accent) 10%, transparent); width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
.macro-tool .chain-text{ font-size:13px; line-height:1.7; color:var(--ink); }

.macro-tool .igrid{ display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.macro-tool .icard{ border:1px solid var(--border); border-radius:8px; padding:11px 12px; background:var(--bg); }
.macro-tool .icard-asset{ font-family:var(--font-sans); font-size:12px; font-weight:600; color:var(--ink); margin-bottom:5px; }
.macro-tool .icard-dir{ font-family:var(--font-mono); font-size:10.5px; font-weight:500; padding:2px 7px; border-radius:4px; display:inline-block; margin-bottom:6px; }
.macro-tool .dir-up{ background:color-mix(in srgb, #2E7D52 12%, transparent); color:#2E7D52; }
.macro-tool .dir-down{ background:color-mix(in srgb, #B23B2E 12%, transparent); color:#B23B2E; }
.macro-tool .dir-neutral{ background:var(--border); color:var(--muted); }
.macro-tool .icard-note{ font-size:11.5px; color:var(--muted); line-height:1.6; }

.macro-tool .ins{ border-radius:8px; padding:14px 16px; border-left:3px solid var(--accent); background:color-mix(in srgb, var(--accent) 6%, transparent); margin:16px 0 6px; }
.macro-tool .ins.trap{ border-left-color:#A13C2D; background:color-mix(in srgb, #A13C2D 8%, transparent); }
.macro-tool .ins-label{ font-family:var(--font-sans); font-size:11.5px; font-weight:600; margin-bottom:5px; }
.macro-tool .ins-text{ font-size:13px; line-height:1.8; color:var(--ink); }

.macro-tool .matrix-wrap{ margin-top:30px; }
.macro-tool table{ width:100%; border-collapse:collapse; font-size:12.5px; font-family:var(--font-mono); }
.macro-tool th,.macro-tool td{ padding:8px 8px; text-align:left; border-bottom:1px solid var(--border); }
.macro-tool th{ font-size:10.5px; color:var(--muted); font-weight:500; text-transform:uppercase; letter-spacing:.3px; }
.macro-tool td{ color:var(--ink); }
.macro-tool td.dir-up{ background:none; color:#2E7D52; font-weight:600; }
.macro-tool td.dir-down{ background:none; color:#B23B2E; font-weight:600; }
.macro-tool td.dir-neutral{ background:none; color:var(--muted); font-weight:600; }
.macro-tool .matrix-row-active{ background: color-mix(in srgb, var(--accent) 6%, transparent); }
</style>

<div class="macro-tool">
<div class="tabs" id="tabs"></div>
<div id="sc"></div>

<div class="matrix-wrap">
  <div class="section-label">曲线形态速览</div>
  <p style="font-size:13px;color:var(--muted);line-height:1.6;margin:-4px 0 16px;">美债短端（2Y）反映Fed政策路径预期，美债长端（10Y/30Y）反映期限溢价——二者方向可能不同，<strong style="color:var(--ink);font-weight:500;">美债利差走势比单一收益率更有信号价值</strong>。任何情境下都建议顺手看一眼，不依赖具体触发事件。</p>
  <div class="igrid">
    <div class="icard">
      <div class="icard-asset">陡峭化（美债2s10s / 2s30s 利差走阔）</div>
      <div class="icard-note">通常意味着美债短端降息预期在兑现，但长端因通胀黏性/财政供给/买家撤退面临额外压力。经济数据转弱但长端独立走高的组合是典型形态——本轮（2026年8月）30年期美债收益率创19年新高属于此类。</div>
    </div>
    <div class="icard">
      <div class="icard-asset">收窄 / 倒挂（美债利差走平或转负）</div>
      <div class="icard-note">通常意味着市场在为衰退定价，美债短端因预期大幅降息而快速下行，长端跟随但幅度较小；历史上是经济周期转向的重要前瞻信号。</div>
    </div>
  </div>
  <div class="ins" style="margin-top:14px;">
    <div class="ins-label">重点监控指标</div>
    <div class="ins-text">美债2s10s、2s30s利差的方向和幅度（不只是单看DGS2/DGS10/DGS30三条美债收益率本身）；30年期美债标售的认购倍数与中标利率相对预发行（when-issued）收益率的偏离程度——这个能直接反映海外买家意愿，与"美债长端期限溢价冲击"卡片直接对应。</div>
  </div>
</div>

<div class="matrix-wrap">
  <div class="section-label">快速参考矩阵</div>
  <table>
    <thead>
      <tr><th>情境</th><th>美元</th><th>美债收益率</th><th>黄金</th><th>股市</th></tr>
    </thead>
    <tbody id="matrix"></tbody>
  </table>
</div>
</div>

<script>
const scenarios = {
  fed_hike: {
    label: '美联储加息',
    driver: '货币政策',
    lag: '即时 ~ 2季度',
    trigger: '美联储在议息会议上上调联邦基金利率目标区间，并释放偏鹰派前瞻指引，市场重新定价未来加息路径。',
    chain: [
      '短端利率上行，货币市场收益率同步抬升，融资成本增加',
      '美元实际利差扩大，吸引全球资本回流美元资产，美元指数走强',
      '高估值成长股折现率上升，估值压缩幅度大于盈利下修幅度',
      '新兴市场本币面临贬值压力，偿还美元债成本上升，资本外流风险抬头'
    ],
    impacts: [
      {asset:'美元指数', dir:'up', note:'短期偏强，利差逻辑主导'},
      {asset:'美债收益率', dir:'up', note:'短端上行更快，曲线可能趋平'},
      {asset:'黄金', dir:'down', note:'持有成本上升，短期承压'},
      {asset:'成长股/纳指', dir:'down', note:'久期最长，对利率最敏感'}
    ],
    insight:{type:'ins', label:'非共识洞察', text:'"加息=股市跌"并非线性关系。如果加息是因为经济数据强劲（而非单纯抗通胀），盈利上修可能部分抵消估值压缩——历史上多次加息周期股市仍上涨。真正的风险点在于"加息速度超出盈利消化能力"的临界点。'}
  },
  fed_cut: {
    label: '美联储降息',
    driver: '货币政策',
    lag: '即时 ~ 3季度',
    trigger: '美联储开启降息周期，无论是预防式降息还是应对经济走弱的被动降息，市场开始交易流动性宽松预期。',
    chain: [
      '短端利率下行，资金成本下降，风险偏好回升',
      '美元利差优势收窄，美元指数承压走弱',
      '长久期资产（成长股、长债）折现率下降，估值获得支撑',
      '新兴市场资本流入改善，本币压力缓解，套利交易重新活跃'
    ],
    impacts: [
      {asset:'美元指数', dir:'down', note:'利差收窄，资金分流海外'},
      {asset:'美债收益率', dir:'down', note:'短端领跌，曲线走陡'},
      {asset:'黄金', dir:'up', note:'实际利率下行，持有成本降低'},
      {asset:'成长股/纳指', dir:'up', note:'估值端受益最直接'}
    ],
    insight:{type:'trap', label:'陷阱提示', text:'"预防式降息"和"衰退式降息"的市场反应截然相反。前者往往是股市牛市延续的起点（1995年案例），后者往往伴随盈利大幅下修、股市继续下跌（2001年、2007年案例）。关键要看降息发生时经济数据和信用利差的状态，而不是降息本身。'}
  },
  yen_carry: {
    label: '日元套息崩解',
    driver: '汇率冲击',
    lag: '数日 ~ 数周',
    trigger: '日本央行意外收紧货币政策（加息或减少购债），叠加日元大幅升值，触发大规模日元套息交易平仓。',
    chain: [
      '日元升值超出套息交易的容忍阈值，杠杆头寸被迫平仓止损',
      '套息资金撤出高息资产，全球范围内风险资产被同步抛售',
      '流动性最好、杠杆最集中的资产（美股科技股、加密货币）首当其冲',
      '波动率飙升引发系统性去杠杆，短期流动性紧张，相关性趋近于1'
    ],
    impacts: [
      {asset:'日元', dir:'up', note:'平仓买盘驱动，短期急升'},
      {asset:'美元指数', dir:'down', note:'对日元被动走弱，对其他货币不一定'},
      {asset:'黄金', dir:'neutral', note:'避险与流动性抛售相互拉扯，初期常同跌'},
      {asset:'全球股市', dir:'down', note:'高杠杆、高估值资产跌幅最大'}
    ],
    insight:{type:'trap', label:'陷阱提示', text:'套息平仓引发的抛售是"流动性驱动"而非"基本面驱动"，往往在1-2周内出现技术性反弹，容易让人误判为趋势反转。真正需要跟踪的是套息交易的存量规模是否已经出清——可以通过CFTC日元非商业持仓数据侧面观察。'}
  },
  geopolitical: {
    label: '地缘政治冲击',
    driver: '地缘政治',
    lag: '即时 ~ 数周',
    trigger: '突发地缘冲突或局势升级（如中东、台海、俄乌相关事件），市场在信息不完整的情况下对尾部风险重新定价。',
    chain: [
      '避险情绪瞬间升温，资金从风险资产撤出，流向传统避险资产',
      '若事件涉及能源通道，油价首先反应，输入性通胀预期升温',
      '央行政策两难加剧——通胀压力与增长担忧同时出现，滞胀交易浮现',
      '若事件在数周内未升级，风险溢价逐步回吐，市场交易重新回归基本面'
    ],
    impacts: [
      {asset:'黄金', dir:'up', note:'经典避险资产，反应最快最直接'},
      {asset:'原油', dir:'up', note:'取决于事件是否涉及供给通道'},
      {asset:'美元/美债', dir:'up', note:'避险资金回流，短端需求上升'},
      {asset:'全球股市', dir:'down', note:'风险偏好回落，跌幅视事件烈度而定'}
    ],
    insight:{type:'ins', label:'非共识洞察', text:'历史数据显示，多数地缘冲击对股市的影响是"深V"而非趋势反转——标普500在多次地缘事件中平均在1-3周内收复失地，除非事件演变为供应链或能源的持续性中断。真正决定资产价格走势的不是事件本身，而是"事件是否会实质性改变现金流预期"。'}
  },
  cpi_strong: {
    label: 'CPI意外走强',
    driver: '经济周期',
    lag: '1 ~ 2季度',
    trigger: 'CPI数据在下行趋势中意外反弹（如能源价格反弹、关税传导、工资黏性），打破"通胀已被控制"的市场共识。',
    chain: [
      'CPI/PCE数据超预期，市场重新计入更长时间维持高利率的概率',
      '降息预期被推迟或降息次数被下修，美债收益率曲线整体上移',
      '实际利率上行侵蚀无息资产吸引力，同时压制高估值成长股',
      '若通胀反弹伴随增长走弱，滞胀交易占优——大宗商品与防御股相对跑赢'
    ],
    impacts: [
      {asset:'美债收益率', dir:'up', note:'降息预期后移，长端跟随上行'},
      {asset:'美元指数', dir:'up', note:'"higher for longer"支撑利差'},
      {asset:'黄金', dir:'neutral', note:'抗通胀属性与实际利率上行相互对冲'},
      {asset:'成长股/纳指', dir:'down', note:'估值端最先承压'}
    ],
    insight:{type:'trap', label:'陷阱提示', text:'不要把单月通胀反弹直接等同于趋势反转。需要拆解结构：是能源等波动性分项驱动（噪音），还是核心服务/工资黏性驱动（趋势）。后者对政策路径的影响远大于前者，也是判断"是否需要重新定价降息节奏"的关键分界线。'}
  },
  cpi_weak: {
    label: 'CPI意外走弱',
    driver: '经济周期',
    lag: '1 ~ 2季度',
    trigger: 'CPI数据全面低于预期（核心与整体同步降温），确认去通胀趋势符合甚至超出Fed预期，市场加大对降息路径的定价。',
    chain: [
      '核心CPI环比读数低于预期，市场立即上修年内降息次数概率',
      '名义与实际利率同步下行，美元指数承压，利差优势收窄',
      '无息资产（黄金）受益于实际利率下行，通胀受控也降低了实际收益率的不确定性',
      '需要区分走弱性质：若是"温和去通胀"（核心服务/工资仍具韧性），股市偏多；若伴随需求端疲软信号（零售、就业同步转弱），市场可能切换到"需求破坏"叙事，风险资产转为承压'
    ],
    impacts: [
      {asset:'美债收益率', dir:'down', note:'降息预期强化，短端领跌'},
      {asset:'美元指数', dir:'down', note:'利差收窄逻辑主导'},
      {asset:'黄金', dir:'up', note:'实际利率下行，确定性较高的正向情境'},
      {asset:'股市', dir:'neutral', note:'温和去通胀阶段偏多，一旦伴随需求破坏信号则转为承压'}
    ],
    insight:{type:'trap', label:'陷阱提示', text:'不要把"CPI走弱=万事顺遂"当成必然结论。真正需要交叉验证的是这次走弱是否伴随需求端同步走弱的信号（零售销售、消费者信心、劳动力数据）——若只是通胀单独降温而增长依然稳健，是最理想的"金发姑娘"情境；但若通胀和增长同步走弱，则是衰退信号被通胀数据掩盖，此时"降息利好"很快会让位于"盈利下修"担忧。'}
  },
  ppi_strong: {
    label: 'PPI意外走强',
    driver: '经济周期',
    lag: '数日 ~ 1-2个月（向CPI/PCE传导需要时间）',
    trigger: '生产者价格指数（PPI）大幅超预期上行，尤其是核心商品和直接计入PCE的服务分项（医疗保健、投资组合管理、机票等），市场开始为下一期CPI/PCE数据"抢跑定价"。',
    chain: [
      'PPI衡量的是生产端/批发端成本，其上升本身不直接改变消费者支付的价格——关键要看企业是否有提价能力（pricing power）',
      '若企业能够顺利转嫁成本：终端消费价格随之上行，PPI走强被视为CPI/PCE的领先信号，市场提前上修通胀预期、下修降息次数',
      '若企业提价能力受限（竞争激烈、需求疲软）：企业被迫自行消化成本，毛利率受到直接压缩，这条链条主要冲击企业盈利预期而非消费端价格',
      'PPI中直接计入核心PCE的分项（医疗服务、投资组合管理费、航空票价）意外走强，会让市场对下一期核心PCE读数产生更直接、更技术性的上修预期，比CPI本身传导更快'
    ],
    impacts: [
      {asset:'股市', dir:'down', note:'若成本无法转嫁，毛利率压缩直接冲击盈利预期，这条路径与利率关系相对独立'},
      {asset:'美债收益率', dir:'up', note:'市场为下一期CPI/PCE走强预先定价，降息预期后移'},
      {asset:'美元指数', dir:'up', note:'跟随收益率逻辑同步走强'},
      {asset:'黄金', dir:'neutral', note:'抗通胀属性与实际利率上行相互对冲，方向不明确'}
    ],
    insight:{type:'ins', label:'非共识洞察', text:'PPI走强不应被简单等同于"CPI即将走强"。真正的分水岭是企业的成本转嫁能力（pricing power）——可以观察行业集中度、需求端景气度（PMI新订单分项）和财报电话会中管理层对"提价"或"成本压力"的表态。转嫁能力强，PPI走强对股市反而是滞后利空（通胀预期）；转嫁能力弱，PPI走强对股市是即时利空（盈利预期），两者作用的资产和时间维度完全不同。'}
  },
  ppi_weak: {
    label: 'PPI意外走弱',
    driver: '经济周期',
    lag: '数日 ~ 1-2个月',
    trigger: 'PPI数据大幅低于预期，生产端成本压力缓解，市场评估这对企业盈利和下一期CPI/PCE的双重影响。',
    chain: [
      '生产端成本下降为企业毛利率修复提供空间，尤其对制造业和消费品企业是直接利好',
      '若成本下降与终端需求疲软同步出现（而非单纯供给端改善），则需要警惕这是需求走弱的信号而非纯粹的"好消息"',
      'PPI走弱同时降低了下一期核心CPI/PCE的意外上行风险，市场对Fed路径的不确定性溢价随之下降',
      '若是供给端改善型走弱（如能源、原材料价格回落）：明确利好，传导路径清晰；若是需求端拖累型走弱：需与劳动力、零售数据交叉验证'
    ],
    impacts: [
      {asset:'股市', dir:'up', note:'毛利率修复预期，尤其利好对成本敏感的制造业/消费品板块'},
      {asset:'美债收益率', dir:'down', note:'下一期通胀意外上行风险降低，市场情绪偏鸽'},
      {asset:'美元指数', dir:'down', note:'跟随收益率逻辑走弱，除非避险需求主导'},
      {asset:'黄金', dir:'neutral', note:'通胀风险降低是利空，实际利率下行是利好，两者对冲'}
    ],
    insight:{type:'trap', label:'陷阱提示', text:'PPI走弱看似是"皆大欢喜"的情境，但一定要交叉验证走弱的来源——若是能源等供给端价格回落带来的成本缓解，是纯粹的好消息；但若是终端需求疲软导致生产商被迫降价出货（去库存压力），则是需求破坏的早期信号，与"CPI意外走弱"卡片里的陷阱提示是同一个判断逻辑，需要放在一起交叉核对。'}
  },
  term_premium_shock: {
    label: '美债长端期限溢价冲击',
    driver: '经济周期',
    lag: '数周 ~ 数月',
    trigger: '30年期国债标售遇冷（认购倍数走低、中标利率高于预发行收益率）与海外主要持有国（英国/中国/日本）同步减持同时出现，叠加AI相关企业债发行创纪录，市场开始为"谁来接盘长端供给"重新定价。',
    chain: [
      '财政部发债规模扩大、海外买家意愿下降，长端一级市场需求转弱，直接体现在标售的中标利率和认购倍数上',
      '与此同时，AI资本开支驱动的科技公司为融资建设算力/数据中心大举发行投资级债券，与美债长端在同一批长久期资金池里竞争',
      '短端因Fed政策预期基本稳定甚至下行而不受影响，长端因此独立走高，曲线陡峭化（2s30s、2s10s利差走阔）',
      '若外国官方买家（尤其日本）同时因本币贬值被迫干预汇率而抛售美债，会形成"汇率→长端"的反向反馈，进一步放大供给压力，而不是单纯由货币政策或经济数据驱动'
    ],
    impacts: [
      {asset:'美债收益率(长端)', dir:'up', note:'标售遇冷+海外买家撤退直接体现在中标利率上，短端基本不受影响'},
      {asset:'成长股/纳指', dir:'down', note:'长端是估值贴现率的锚，久期最长、叙事驱动型标的最先承压；硬件/供给紧张型标的可能逆势抗跌'},
      {asset:'黄金', dir:'neutral', note:'实际利率上行的压制，与"去美元化/买家撤退"带来的对冲需求相互抵消，方向不明确'},
      {asset:'美元指数', dir:'neutral', note:'传统利差逻辑指向走强，但若长端上涨源于买家撤退而非追捧，美元的支撑逻辑本身更脆弱'}
    ],
    insight:{type:'ins', label:'非共识洞察', text:'这类情境最容易被误判为"加息式"的货币政策冲击，但它跟"美联储加息"卡片的本质区别在于——短端不动，只有长端在涨。判断关键是2s30s利差是否走阔（而非收窄），以及30年期标售的认购倍数和中标利率相对于预发行收益率的偏离幅度。如果本国短端稳定、只有长端独立走高，说明这是供给/买家结构问题，而不是Fed紧缩，不能直接套用"加息"卡片里"美元走强、黄金承压"那类线性结论。'}
  },
  labor_strong: {
    label: '劳动力数据超预期走强',
    driver: '经济周期',
    lag: '数小时 ~ 数周（取决于当时主导叙事）',
    trigger: '非农新增就业或初请失业金数据大幅好于预期，打破"经济正在降温、为降息铺路"的市场共识，市场重新评估这份数据究竟是利多还是利空。',
    chain: [
      '数据公布后，市场首先判断当前处于"担心通胀"还是"担心衰退"的主导叙事阶段——这一步决定了后续所有反应方向',
      '若处于"担心通胀"阶段：数据走强被解读为鹰派信号，降息预期后移，美债收益率与美元同步走强',
      '若处于"担心衰退"阶段：数据走强被解读为经济韧性信号，风险偏好回升，反而推升股市',
      '无论哪种叙事，黄金短期承压的概率都更高——数据走强同时削弱了"降息交易"和"避险买盘"两条支撑逻辑'
    ],
    impacts: [
      {asset:'美债收益率', dir:'up', note:'短端最先反应降息路径生变'},
      {asset:'美元指数', dir:'up', note:'跟随收益率走强，通胀叙事阶段更明显'},
      {asset:'黄金', dir:'down', note:'降息预期和避险需求双重支撑同时减弱'},
      {asset:'股市', dir:'neutral', note:'方向取决于主导叙事——通胀阶段承压，稳增长阶段偏多'}
    ],
    insight:{type:'trap', label:'陷阱提示', text:'不要把"数据强=股市涨"或"数据强=股市跌"当成固定公式。判断关键在于数据公布前市场的主导焦虑是什么：若盘面正担心"通胀顽固、降息推迟"，走强的数据是利空；若盘面正担心"经济硬着陆"，走强的数据反而是利好。脱离叙事背景去套用方向判断，大概率会踩坑——这也是这类数据比地缘政治冲击更难判断的原因。'}
  },
  labor_weak: {
    label: '劳动力数据超预期走弱',
    driver: '经济周期',
    lag: '数小时 ~ 数周',
    trigger: '非农新增就业大幅低于预期，或初请失业金人数连续多周上行确认趋势性走弱，市场开始交易"经济是否正在滑向衰退"这一问题。',
    chain: [
      '数据公布后，市场先判断这是"降息窗口打开"的好消息，还是"衰退风险"的坏消息——分水岭在于走弱幅度和持续性',
      '温和走弱（软着陆式降温）：强化"Fed可以从容降息"叙事，风险资产短期受益，收益率下行',
      '大幅走弱（尤其伴随初请数据连续多周确认）：市场担忧切换为衰退定价，信用利差走阔，避险抛售可能压过降息利好',
      '黄金在这一情境下受益最直接——降息预期升温与避险需求同时指向同一方向，这是与"地缘政治冲击"情境的关键区别（后者仅由避险单独驱动）'
    ],
    impacts: [
      {asset:'美债收益率', dir:'down', note:'降息预期升温，短端领跌'},
      {asset:'美元指数', dir:'down', note:'利差收窄逻辑主导，除非避险情绪极端'},
      {asset:'黄金', dir:'up', note:'降息预期与避险需求形成共振，确定性相对较高'},
      {asset:'股市', dir:'neutral', note:'温和降温阶段偏多，一旦触发衰退定价则转跌，分水岭在恶化速度'}
    ],
    insight:{type:'ins', label:'非共识洞察', text:'判断"温和降温"还是"衰退式恶化"，初请失业金人数的连续走势斜率比非农单月数字更可靠——非农数据修订频繁、噪音较大，初请频率更高、方向性更稳定，连续4周环比趋势比单月非农意外幅度更能提前捕捉衰退拐点。真正决定股市方向的分界线，是"降息利好"能否压过"盈利预期下修"的速度。'}
  }
};

const order = ['fed_hike','fed_cut','yen_carry','geopolitical','cpi_strong','cpi_weak','ppi_strong','ppi_weak','term_premium_shock','labor_strong','labor_weak'];

// 按驱动因素分组渲染标签，11个情境放在一起时更容易扫读
const tabsEl = document.getElementById('tabs');
let lastDriver = null;
let currentGroupRow = null;
order.forEach(key=>{
  const s = scenarios[key];
  if(s.driver !== lastDriver){
    const groupLabel = document.createElement('div');
    groupLabel.className = 'tab-group-label';
    groupLabel.textContent = s.driver;
    tabsEl.appendChild(groupLabel);
    currentGroupRow = document.createElement('div');
    currentGroupRow.className = 'tab-group-row';
    tabsEl.appendChild(currentGroupRow);
    lastDriver = s.driver;
  }
  const b = document.createElement('div');
  b.className = 'tab';
  b.textContent = s.label;
  b.onclick = ()=>go(key);
  b.dataset.key = key;
  currentGroupRow.appendChild(b);
});

function dirLabel(d){
  if(d==='up') return '↑ 上行';
  if(d==='down') return '↓ 下行';
  return '— 分化';
}
function dirClass(d){
  return d==='up' ? 'dir-up' : (d==='down' ? 'dir-down' : 'dir-neutral');
}

function go(key){
  document.querySelectorAll('.macro-tool .tab').forEach(t=>{
    t.classList.toggle('active', t.dataset.key===key);
  });
  const s = scenarios[key];

  const chainHtml = s.chain.map((step,i)=>`
    <div class="chain-step">
      <div class="chain-num">${i+1}</div>
      <div class="chain-text">${step}</div>
    </div>`).join('');

  const impactsHtml = s.impacts.map(im=>`
    <div class="icard">
      <div class="icard-asset">${im.asset}</div>
      <div class="icard-dir ${dirClass(im.dir)}">${dirLabel(im.dir)}</div>
      <div class="icard-note">${im.note}</div>
    </div>`).join('');

  const insTypeClass = s.insight.type === 'trap' ? 'ins trap' : 'ins';
  const insColor = s.insight.type === 'trap' ? '#A13C2D' : 'var(--accent)';

  document.getElementById('sc').innerHTML = `
    <div class="trigger-box">
      <div class="tag-row">
        <span class="tag-driver">${s.driver}</span>
        <span class="tag-lag">⏱ ${s.lag}</span>
      </div>
      <div class="trigger-text">${s.trigger}</div>
    </div>
    <div class="section-label">传导链条</div>
    <div class="chain">${chainHtml}</div>
    <div class="section-label">资产影响</div>
    <div class="igrid">${impactsHtml}</div>
    <div class="${insTypeClass}">
      <div class="ins-label" style="color:${insColor}">【${s.insight.label}】</div>
      <div class="ins-text">${s.insight.text}</div>
    </div>
  `;

  renderMatrix(key);
}

function matrixDir(key, asset){
  const map = {
    fed_hike:    {usd:'up', yield:'up', gold:'down', equity:'down'},
    fed_cut:     {usd:'down', yield:'down', gold:'up', equity:'up'},
    yen_carry:   {usd:'down', yield:'neutral', gold:'neutral', equity:'down'},
    geopolitical:{usd:'up', yield:'up', gold:'up', equity:'down'},
    cpi_strong:  {usd:'up', yield:'up', gold:'neutral', equity:'down'},
    cpi_weak:    {usd:'down', yield:'down', gold:'up', equity:'neutral'},
    ppi_strong:  {usd:'up', yield:'up', gold:'neutral', equity:'down'},
    ppi_weak:    {usd:'down', yield:'down', gold:'neutral', equity:'up'},
    term_premium_shock:{usd:'neutral', yield:'up', gold:'neutral', equity:'down'},
    labor_strong:{usd:'up', yield:'up', gold:'down', equity:'neutral'},
    labor_weak:  {usd:'down', yield:'down', gold:'up', equity:'neutral'}
  };
  return map[key][asset];
}

function renderMatrix(activeKey){
  const tbody = document.getElementById('matrix');
  tbody.innerHTML = order.map(key=>{
    const s = scenarios[key];
    const rowClass = key===activeKey ? 'matrix-row-active' : '';
    return `<tr class="${rowClass}">
      <td>${s.label}</td>
      <td class="${dirClass(matrixDir(key,'usd'))}">${dirLabel(matrixDir(key,'usd'))}</td>
      <td class="${dirClass(matrixDir(key,'yield'))}">${dirLabel(matrixDir(key,'yield'))}</td>
      <td class="${dirClass(matrixDir(key,'gold'))}">${dirLabel(matrixDir(key,'gold'))}</td>
      <td class="${dirClass(matrixDir(key,'equity'))}">${dirLabel(matrixDir(key,'equity'))}</td>
    </tr>`;
  }).join('');
}

go('fed_hike');
</script>
