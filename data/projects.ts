import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "tws-charging-case-redesign",
    name: "TWS 主动降噪耳机充电盒结构重构",
    category: "消费电子",
    background:
      "在既定电池规格与外观尺寸约束下，对充电盒内部堆叠、转轴结构与装配路径进行重构，以支持更高电池容量与更好的开合手感。",
    responsibility:
      "负责整体结构方案、内部堆叠拆解、转轴与磁吸方案设计、DFMEA 风险评估、试产问题推进与修模闭环。",
    tools: ["Creo", "SolidWorks", "AutoCAD", "DFMEA", "模具检讨"],
    problem:
      "解决极限空间下的电池避让、天线 keep-out、上盖晃动、转轴寿命不足和装配效率偏低等问题。",
    result:
      "整机体积缩减约 12%，开合寿命提升到 20,000+ 次，试产阶段装配工时降低 18%，良率稳定在 98.7%。",
    highlights: ["体积 -12%", "20,000+ 次寿命", "装配工时 -18%"],
    duration: "4.5 个月",
    coverMetric: "20,000+ 开合寿命",
    palette: {
      from: "#0d1522",
      to: "#1b3f6e",
      accent: "#78aaff",
    },
    image: {
      src: "/images/projects/tws-case.svg",
      alt: "TWS 主动降噪耳机充电盒结构示意图，展示上盖、耳机仓和内部堆叠关系。",
    },
  },
  {
    slug: "industrial-terminal-drop-upgrade",
    name: "工业手持终端防跌落结构升级",
    category: "问题分析与改进",
    background:
      "现有终端在 1.2 m 跌落测试中高频出现边角开裂与扫码窗口位移，需要在不显著增加重量的前提下完成结构加固。",
    responsibility:
      "负责跌落失效分析、加强筋与缓冲路径设计、壳体材料替代建议、可靠性验证方案与供应商修模沟通。",
    tools: ["SolidWorks", "失效分析", "公差分析", "可靠性测试", "试产验证"],
    problem:
      "核心问题集中在应力集中、螺柱根部脆弱、窗口固定方式单一，以及装配预紧力控制不稳定。",
    result:
      "通过外壳加强和局部缓冲结构调整，整机通过 1.5 m 跌落验证，返修率下降约 32%，未带来明显的成本上升。",
    highlights: ["跌落等级提升", "返修率 -32%", "成本基本持平"],
    duration: "2.5 个月",
    coverMetric: "1.5 m 跌落通过",
    palette: {
      from: "#10161c",
      to: "#3c4f64",
      accent: "#8fc1ff",
    },
    image: {
      src: "/images/projects/industrial-terminal.svg",
      alt: "工业手持终端结构示意图，展示防跌落包角、扫码窗口和内部支撑结构。",
    },
  },
  {
    slug: "smart-home-panel-stack-coordination",
    name: "智能家居中控屏外观与内部堆叠协同",
    category: "外观与内部堆叠协调",
    background:
      "项目要求实现极窄边框与超薄观感，同时容纳主板、扬声器、天线、散热模组和壁挂安装结构。",
    responsibility:
      "牵头 ID 与结构联调，定义边框、转角、后壳分型、壁挂强度和器件堆叠约束，推动 ID 与电子同步收敛。",
    tools: ["Creo", "堆叠评估", "热区规划", "装配评审", "样机验证"],
    problem:
      "主要挑战是超薄外观与内部器件高度冲突，以及散热、声学开孔、壁挂强度之间的多方矛盾。",
    result:
      "在维持正面视觉简洁的同时完成量产结构定版，后壳厚度控制在目标范围内，首轮 EVT 样机通过主要功能验证。",
    highlights: ["极窄边框", "首轮 EVT 通过", "ID/EE 同步收敛"],
    duration: "5 个月",
    coverMetric: "超薄边框方案定版",
    palette: {
      from: "#0c1319",
      to: "#27486b",
      accent: "#66b8ff",
    },
    image: {
      src: "/images/projects/smart-panel.svg",
      alt: "智能家居中控屏结构示意图，展示窄边框外观与内部堆叠层级。",
    },
  },
  {
    slug: "portable-power-station-thermal-optimization",
    name: "便携式储能产品散热与结构优化",
    category: "结构优化",
    background:
      "针对便携储能设备在连续高负载场景下出现的温升偏高与装配复杂问题，重新规划风道、支撑件和模组固定策略。",
    responsibility:
      "负责热区结构隔离、风道路径重排、钣金件与塑胶件配合设计、装配路径优化和试产工治具建议。",
    tools: ["Creo", "AutoCAD", "热设计协同", "DFA", "供应链对接"],
    problem:
      "需要同时处理风道效率、噪音控制、模组维护性以及大件装配难度，避免改动过大影响项目节点。",
    result:
      "核心器件表面温度下降约 6.5°C，装配步骤减少 3 道，试产现场工位节拍缩短约 14%。",
    highlights: ["温升 -6.5°C", "装配步骤 -3", "工位节拍 -14%"],
    duration: "3 个月",
    coverMetric: "核心温升下降 6.5°C",
    palette: {
      from: "#0e1618",
      to: "#205567",
      accent: "#7ed6ff",
    },
    image: {
      src: "/images/projects/power-station.svg",
      alt: "便携式储能设备结构示意图，展示风道、模组仓和提手结构。",
    },
  },
  {
    slug: "medical-device-snapfit-fast-assembly",
    name: "医疗检测设备快装卡扣方案优化",
    category: "工艺与量产配合",
    background:
      "医疗检测设备上盖拆装频繁，原有螺钉方案影响装配效率与维护体验，需要导入可重复拆装的快装结构。",
    responsibility:
      "负责卡扣结构形态设计、寿命验证、模具拔模分析、装配力窗口定义以及与质量团队同步验证标准。",
    tools: ["SolidWorks", "DFM", "寿命测试", "模具评审", "装配工艺"],
    problem:
      "需要兼顾卡扣重复寿命、装配手感、误操作容错和批量生产一致性，避免医疗设备使用中的松脱风险。",
    result:
      "导入快装方案后，单台装配时间缩短约 21%，维护拆装更加便捷，卡扣寿命验证达 500 次以上。",
    highlights: ["装配时间 -21%", "500+ 次寿命", "维护更友好"],
    duration: "2 个月",
    coverMetric: "500+ 次拆装寿命",
    palette: {
      from: "#0f141d",
      to: "#304a7d",
      accent: "#93b7ff",
    },
    image: {
      src: "/images/projects/medical-device.svg",
      alt: "医疗检测设备快装卡扣结构示意图，展示上盖拆装与卡扣路径。",
    },
  },
  {
    slug: "bluetooth-speaker-mass-production",
    name: "蓝牙音箱量产工艺导入与模具修模闭环",
    category: "工艺与量产配合",
    background:
      "新品蓝牙音箱在试产阶段出现网布贴合不稳定、壳体色差放大和卡扣装配偏紧等问题，影响首批出货节奏。",
    responsibility:
      "主导量产问题拆解、结构与工艺联动优化、模具修模意见输出、颜色与表面处理窗口确认，并协同工厂闭环试产问题。",
    tools: ["试产跟线", "问题复盘", "AutoCAD", "DFA", "供应商沟通"],
    problem:
      "核心在于外观件容差叠加、表面处理公差放大以及工装定位一致性不足，导致装配与外观风险并存。",
    result:
      "在第二轮试产前完成关键问题收敛，首批量产达成交付节点，外观不良率较首轮试产下降约 41%。",
    highlights: ["外观不良率 -41%", "二轮试产收敛", "节点按期交付"],
    duration: "2.5 个月",
    coverMetric: "首批量产按期交付",
    palette: {
      from: "#121316",
      to: "#27333d",
      accent: "#9bb8d0",
    },
    image: {
      src: "/images/projects/speaker-production.svg",
      alt: "蓝牙音箱量产导入示意图，展示外壳、网布和装配定位关系。",
    },
  },
];
