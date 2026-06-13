import { images } from "./assets";

export type Achievement = {
  id: string;
  title: string;
  label: string;
  metric: string;
  role: string;
  summary: string;
  detail: string;
  relatedProjectSlug?: string;
  resumeAnchor: string;
  evidence?: {
    label: string;
    href: string;
    note: string;
  };
};

export const achievements: Achievement[] = [
  {
    id: "transport-third-prize",
    title: "全国大学生交通运输科技大赛全国三等奖",
    label: "National Third Prize",
    metric: "国家级",
    role: "项目负责人 / 队长",
    summary: "作为队长带队获得全国大学生交通运输科技大赛全国三等奖。",
    detail:
      "项目方向为道路路面病害智能检测，重点围绕无人机低空采集、视觉识别和养护辅助闭环展开，体现项目组织、现场答辩和工程化表达能力。",
    relatedProjectSlug: "uav-yolo26-road-damage",
    resumeAnchor: "/resume#achievements",
    evidence: {
      label: "相关材料",
      href: images.transportAwardNews.src,
      note: "官网新闻稿和奖项材料辅助展示。",
    },
  },
  {
    id: "innovation-project",
    title: "校级大学生创新创业训练计划项目",
    label: "Innovation Project",
    metric: "在研",
    role: "项目参与者",
    summary: "围绕黄土边坡动态预警、多源监测数据融合和时序预测开展项目实践。",
    detail:
      "参与方向包括多源监测数据预处理、SSA-LSTM 位移预测、在线迁移学习和风险分级预警逻辑设计。",
    relatedProjectSlug: "loess-slope-warning",
    resumeAnchor: "/resume#projects",
  },
  {
    id: "invention-patents",
    title: "国家发明专利 2 项",
    label: "2 Invention Patents",
    metric: "2 项",
    role: "发明人之一",
    summary: "作为发明人之一参与 2 项国家发明专利。",
    detail:
      "作为发明人之一参与相关专利工作，积累科研与工程实践经历。",
    resumeAnchor: "/resume#research",
  },
  {
    id: "caac-bvlos",
    title: "CAAC 中型超视距无人机机长执照",
    label: "CAAC BVLOS Pilot",
    metric: "资质",
    role: "持证人",
    summary:
      "具备低空数据采集、航测组织与复杂环境现场作业基础。",
    detail:
      "具备低空数据采集、航测组织与复杂环境现场作业基础。",
    resumeAnchor: "/resume#achievements",
    evidence: {
      label: "相关材料",
      href: images.caacLicense.src,
      note: "资质材料辅助展示。",
    },
  },
  {
    id: "computer-rank",
    title: "全国计算机等级考试二级证书",
    label: "Computer Rank Exam",
    metric: "二级",
    role: "Python 语言程序设计",
    summary:
      "具备程序设计、数据处理与基础工程开发能力。",
    detail:
      "通过 Python 语言程序设计方向考试，具备程序设计、数据处理与基础工程开发能力。",
    resumeAnchor: "/resume#achievements",
    evidence: {
      label: "相关材料",
      href: images.computerRank.src,
      note: "证书材料辅助展示。",
    },
  },
];
