export type ResearchArea = {
  id: string;
  title: string;
  english: string;
  summary: string;
  keywords: string[];
  methods: string[];
  scenarios: string[];
  futureWork: string;
};

export const researchAreas: ResearchArea[] = [
  {
    id: "uav-remote-sensing",
    title: "低空智能巡检与无人机遥感",
    english: "UAV-based Inspection",
    summary:
      "面向道路、边坡等交通基础设施场景，开展低空影像采集、航测组织、巡检路径设计和现场数据获取。",
    keywords: ["UAV", "Route Planning", "Low-altitude Sensing", "Field Data"],
    methods: ["航线规划", "现场采集流程", "多高度影像对比"],
    scenarios: ["道路巡检", "交通边坡", "复杂环境现场作业"],
    futureWork: "完善不同飞行高度、覆盖效率和识别稳定性之间的工程权衡。",
  },
  {
    id: "road-damage-detection",
    title: "道路病害视觉识别与小目标检测",
    english: "Road Damage Detection",
    summary:
      "基于 YOLO 系列模型开展道路裂缝、坑槽、龟裂等病害检测，关注小目标、细长目标、阴影、积水和类别不均衡问题。",
    keywords: ["YOLO", "Small Object", "P2 Head", "Class Imbalance"],
    methods: ["P2 小目标检测层", "类别感知采样", "Warm Start 训练策略"],
    scenarios: ["路面裂缝", "坑槽", "龟裂", "积水与阴影干扰"],
    futureWork: "继续积累跨天气、跨材质和跨高度的数据，提升模型稳定性。",
  },
  {
    id: "loess-slope-warning",
    title: "黄土边坡多源监测与动态预警",
    english: "Loess Slope Warning",
    summary:
      "融合位移、降雨、土壤水分、孔隙水压等多源监测数据，探索 SSA-LSTM、在线迁移学习和风险分级预警。",
    keywords: ["SSA-LSTM", "Data Fusion", "Risk Level", "Transfer Learning"],
    methods: ["多源数据预处理", "时序预测", "在线迁移学习"],
    scenarios: ["黄土边坡", "降雨入渗", "位移预测", "风险分级"],
    futureWork: "将数据驱动模型与有限元稳定性评价路径进一步结合。",
  },
  {
    id: "digital-twin-loop",
    title: "交通基础设施数字孪生与风险闭环管理",
    english: "Digital Twin & Risk Loop",
    summary:
      "探索无人机影像、传感器数据、有限元模型和平台工单系统的融合路径，构建“发现—预测—预警—处置—复核”的闭环。",
    keywords: ["Digital Twin", "Work Order", "Risk Loop", "Infrastructure Safety"],
    methods: ["多源数据融合", "三维重建", "工单闭环设计"],
    scenarios: ["道路养护", "边坡治理", "风险复核", "平台原型"],
    futureWork: "将识别结果、空间位置和处置流程统一到可追踪的工程管理链路。",
  },
];

