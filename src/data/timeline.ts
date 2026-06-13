export type TimelineEvent = {
  id: string;
  time: string;
  title: string;
  label: string;
  detail: string;
  href: string;
  current?: boolean;
};

export const timeline: TimelineEvent[] = [
  {
    id: "transport-competition",
    time: "竞赛阶段",
    title: "道路病害智能巡检项目",
    label: "UAV + YOLO26",
    detail:
      "作为项目负责人组织道路病害智能检测项目，围绕低空采集、视觉识别和养护辅助闭环完成竞赛表达。",
    href: "/projects/uav-yolo26-road-damage",
  },
  {
    id: "national-prize",
    time: "阶段成果",
    title: "全国大学生交通运输科技大赛全国三等奖",
    label: "National Third Prize",
    detail:
      "通过项目答辩和方案展示，形成国家级竞赛获奖经历。",
    href: "/resume#achievements",
  },
  {
    id: "slope-warning",
    time: "在研方向",
    title: "黄土边坡动态预警",
    label: "SSA-LSTM / Multi-source",
    detail:
      "参与校级大创项目，探索多源监测数据融合、时序预测和风险分级预警。",
    href: "/projects/loess-slope-warning",
    current: true,
  },
  {
    id: "long-term",
    time: "长期方向",
    title: "交通基础设施风险闭环",
    label: "Closed-loop Management",
    detail:
      "将低空巡检、视觉识别、多源监测和平台工单系统串联为可落地的工程闭环。",
    href: "/research#digital-twin-loop",
  },
];

