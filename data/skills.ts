import type { Capability, ProcessStep, ToolGroup } from "@/types/content";

export const capabilityDomains: Capability[] = [
  {
    title: "结构方案设计",
    summary: "能够从产品需求、内部堆叠、强度与装配路径出发，快速建立结构主方案并预判风险。",
    details: ["卡扣 / 螺钉 / 转轴方案", "轻薄化与强度平衡", "公差链与装配分析"],
    level: 4,
    label: "核心主力",
  },
  {
    title: "材料与工艺认知",
    summary: "熟悉塑胶、钣金、硅胶、压铸等常见工艺边界，能在设计阶段主动对齐制造约束。",
    details: ["塑胶件拔模与缩水判断", "表面处理与色差风险", "模具修模闭环经验"],
    level: 4,
    label: "量产导向",
  },
  {
    title: "DFMEA / DFM / DFA 思维",
    summary: "在方案评审、开模前和试产阶段持续使用风险方法论，降低后期返工与现场问题。",
    details: ["失效模式识别", "装配步骤优化", "量产前问题清单化"],
    level: 3,
    label: "方法成熟",
  },
  {
    title: "跨团队协同推进",
    summary: "擅长与 ID、电子、模具、采购、品质和供应链协同，推动结构方案真正收敛。",
    details: ["评审机制搭建", "约束翻译与同步", "试产现场闭环推进"],
    level: 4,
    label: "统筹协同",
  },
  {
    title: "问题分析与改善",
    summary: "对跌落、变形、装配干涉、外观异常等问题具备快速拆解能力，能提出可执行优化路径。",
    details: ["失效原因定位", "改善方案对比", "验证计划输出"],
    level: 3,
    label: "高频应用",
  },
  {
    title: "图文表达与评审支持",
    summary: "能把复杂结构问题转化为清晰的图文表达，提升跨部门沟通效率和决策速度。",
    details: ["结构方案说明", "评审材料整理", "基础渲染与图示表达"],
    level: 2,
    label: "稳定支持",
  },
];

export const engineeringProcess: ProcessStep[] = [
  {
    step: "01",
    title: "需求拆解",
    description: "从功能、堆叠、外观、成本与可靠性目标出发，明确结构边界和优先级。",
  },
  {
    step: "02",
    title: "方案建立",
    description: "输出主结构路径、关键零件策略、装配思路和风险假设，尽早形成讨论对象。",
  },
  {
    step: "03",
    title: "工程评审",
    description: "联合 ID、电子、模具和供应链评审，提前暴露尺寸冲突、工艺窗口和量产风险。",
  },
  {
    step: "04",
    title: "验证迭代",
    description: "通过样机、试产、可靠性测试和失效分析验证关键假设，快速收敛设计。",
  },
  {
    step: "05",
    title: "量产闭环",
    description: "跟进修模、工艺参数、装配节拍与不良项复盘，确保结构设计真正落地。",
  },
];

export const toolGroups: ToolGroup[] = [
  {
    title: "三维设计与出图",
    description: "作为日常主力工具，用于建模、结构评审、装配检查与图纸输出。",
    tools: [
      { name: "Creo", level: "主力", note: "复杂结构方案与装配检查" },
      { name: "SolidWorks", level: "高频", note: "产品结构建模与验证" },
      { name: "AutoCAD", level: "熟练", note: "二维表达、工装与细节补充" },
    ],
  },
  {
    title: "工程分析与协同",
    description: "辅助完成风险评审、设计收敛与跨部门对齐。",
    tools: [
      { name: "DFMEA", level: "高频", note: "失效风险识别与评估" },
      { name: "DFM / DFA", level: "高频", note: "制造与装配可行性分析" },
      { name: "Tolerance Review", level: "高频", note: "公差链和装配容错判断" },
    ],
  },
  {
    title: "表达与展示",
    description: "用于评审材料、项目复盘和对外展示。",
    tools: [
      { name: "KeyShot / 基础渲染", level: "支持", note: "结构方案展示与表达" },
      { name: "图文排版", level: "支持", note: "方案汇报、问题复盘和说明文档" },
      { name: "项目文档管理", level: "稳定", note: "版本迭代与评审记录追踪" },
    ],
  },
];

export const collaborationThemes: Capability[] = [
  {
    title: "与 ID 协同",
    summary: "在形体、分型、缝线、转角、边框与装配逻辑间找到视觉与结构平衡。",
    details: ["前期共同定义边界", "识别外观与结构冲突", "减少后期大改风险"],
    level: 4,
    label: "深度协同",
  },
  {
    title: "与电子协同",
    summary: "围绕主板、天线、电池、散热与接口布局建立结构可行性约束。",
    details: ["器件 keep-out", "热区和干涉判断", "堆叠高度收敛"],
    level: 4,
    label: "工程并行",
  },
  {
    title: "与模具 / 供应链协同",
    summary: "通过模具评审、试产跟线和问题复盘，把设计方案导入真实制造场景。",
    details: ["拔模与缩水判断", "修模方向建议", "制程窗口校准"],
    level: 4,
    label: "量产闭环",
  },
];
