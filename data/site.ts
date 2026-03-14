import type {
  ContactChannel,
  FocusArea,
  NavItem,
  Principle,
  Stat,
  TimelineItem,
} from "@/types/content";

export const siteMetadata = {
  siteUrl: "https://structural-engineer-portfolio.vercel.app",
  title: "周屿衡 | 产品结构工程师",
  description:
    "产品结构工程师个人官网与作品集，展示消费电子与智能硬件领域的结构设计、堆叠协调、量产导入和问题闭环能力。",
};

export const profile = {
  name: "周屿衡",
  role: "产品结构工程师",
  location: "深圳 / 可远程协作",
  tagline: "专注产品结构设计与工程落地，兼顾功能、制造、成本与体验。",
  shortIntro:
    "8 年智能硬件与消费电子产品经验，长期参与从概念评估、结构方案、试产验证到量产导入的完整闭环。",
  summary:
    "我的工作重点不是把零件画出来，而是把产品真正做成：在有限体积、复杂约束和量产节奏里，找到可靠、可制造、可交付的结构解。",
  availability:
    "可承接全职机会、顾问型合作，以及新品前期结构评估与量产问题诊断。",
};

export const navigationLinks: NavItem[] = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于我" },
  { href: "/projects", label: "项目作品" },
  { href: "/skills", label: "专业能力" },
  { href: "/contact", label: "联系方式" },
];

export const heroStats: Stat[] = [
  {
    value: "35+",
    label: "参与项目导入",
    note: "覆盖消费电子、智能硬件、工业设备等方向",
  },
  {
    value: "8 年",
    label: "工程协同经验",
    note: "贯穿 ID、电子、模具、供应链与试产",
  },
  {
    value: "98%+",
    label: "量产阶段良率目标",
    note: "以结构容错与装配稳定性为核心抓手",
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: "消费电子结构方案",
    description: "面向耳机、音频、智能终端等产品，完成轻薄化、强度、防护与装配平衡。",
    detail: "擅长在极限体积内处理堆叠、卡扣、转轴、天线避让和电池空间。",
  },
  {
    title: "复杂内部堆叠协调",
    description: "在外观语言与内部器件约束之间建立可执行结构策略。",
    detail: "重视 tolerance chain、装配路径、热区隔离与维修可达性。",
  },
  {
    title: "试产与量产闭环",
    description: "从 DFMEA、DFM、模具检讨到试产问题追踪，建立真正能交付的结构方案。",
    detail: "关注修模节奏、制程窗口、CPK 风险与现场问题复盘。",
  },
];

export const professionalHighlights: Principle[] = [
  {
    title: "从需求到风险预判",
    description:
      "先明确功能边界、成本目标与关键失效场景，再进入结构分解，避免后期反复返工。",
  },
  {
    title: "把结构设计放进制造体系里思考",
    description:
      "结构方案不仅追求纸面成立，更要同时看模具、装配、工艺节拍和供应链稳定性。",
  },
  {
    title: "用数据和样机说话",
    description:
      "通过样机验证、试产数据、失效分析和问题闭环，让设计判断具备可追溯依据。",
  },
  {
    title: "重视跨团队沟通质量",
    description:
      "结构工程不是单点输出，需要把约束翻译给 ID、电子、采购、模具与工厂现场。",
  },
];

export const experienceTimeline: TimelineItem[] = [
  {
    period: "2022 - 至今",
    title: "高级产品结构工程师",
    company: "某智能硬件品牌",
    description:
      "负责消费电子与智能家居新品结构方案、内部堆叠协调、试产问题推动与量产导入。",
  },
  {
    period: "2019 - 2022",
    title: "结构工程师",
    company: "某消费电子制造企业",
    description:
      "参与耳机、音箱、便携设备等项目的结构设计、模具检讨、样机验证和工艺优化。",
  },
  {
    period: "2017 - 2019",
    title: "助理结构工程师",
    company: "某工业产品研发团队",
    description:
      "完成图纸输出、零件打样、基础可靠性验证和量产问题记录，形成工程方法论基础。",
  },
];

export const engineeringPrinciples: Principle[] = [
  {
    title: "结构不是单一零件设计，而是系统约束下的最优解",
    description:
      "我习惯把结构方案拆成强度、装配、制程、堆叠、风险五条主线并行判断，而不是只追求某一个维度的局部最优。",
  },
  {
    title: "越靠近量产，越需要克制与判断",
    description:
      "成熟工程方案往往不是最炫的方案，而是在供应链能力、成本边界和交付节奏里依旧可靠的方案。",
  },
  {
    title: "好的协同可以显著降低项目损耗",
    description:
      "我重视前期评审和信息透明，尽量把问题暴露在评审桌，而不是暴露在开模后和试产现场。",
  },
];

export const contactChannels: ContactChannel[] = [
  {
    type: "邮箱",
    label: "商务与招聘联系",
    value: "hello@zhouyuheng.com",
    href: "mailto:hello@zhouyuheng.com",
  },
  {
    type: "LinkedIn",
    label: "职业档案占位",
    value: "linkedin.com/in/zhouyuheng",
    href: "https://www.linkedin.com/in/zhouyuheng",
  },
  {
    type: "微信",
    label: "沟通占位",
    value: "zhou-yh-studio",
    href: "#",
  },
];

export const contactExpectations: Principle[] = [
  {
    title: "适合沟通的合作类型",
    description: "全职岗位、项目制合作、结构诊断、DFM 预评估、量产问题复盘。",
  },
  {
    title: "常见回复节奏",
    description: "工作日 24 小时内回复；如果涉及 NDA 或方案评估，可先邮件简述背景。",
  },
  {
    title: "资料准备建议",
    description: "如有产品定义、ID 图、堆叠图、样机问题或量产照片，沟通效率会更高。",
  },
];
