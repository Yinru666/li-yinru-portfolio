export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  usage: string;
  sensitive?: boolean;
};

export const images = {
  portrait: {
    src: "/images/picture/portrait-main.png",
    width: 1122,
    height: 1402,
    alt: "李胤儒正式个人照片",
    caption: "正式个人照片。",
    usage: "about portrait",
  },
  roadDamageHero: {
    src: "/images/picture/road-damage-hero.jpg",
    width: 1706,
    height: 1280,
    alt: "无人机道路巡检现场作业场景",
    caption: "无人机道路巡检现场。",
    usage: "road damage project",
  },
  uav: {
    src: "/images/picture/UAV.jpg",
    width: 1706,
    height: 1279,
    alt: "道路病害巡检作业所用无人机",
    caption: "道路病害巡检作业所用无人机。",
    usage: "road damage project",
  },
  detectionOrigin: {
    src: "/images/picture/detection-origin-01.jpg",
    width: 1920,
    height: 1080,
    alt: "YOLO26 道路病害巡检原始图像",
    caption: "道路病害巡检原始图像，可与检测结果对照。",
    usage: "road damage evidence",
  },
  detectionResultOne: {
    src: "/images/picture/detection-result-01.jpg",
    width: 1920,
    height: 1080,
    alt: "YOLO26 道路病害检测结果图，包含检测框和置信度",
    caption: "YOLO26 道路病害检测结果图。检测框、类别和置信度保持原图。",
    usage: "road damage evidence",
  },
  detectionResultTwo: {
    src: "/images/picture/detection-result-02.jpg",
    width: 1920,
    height: 1080,
    alt: "YOLO26 道路病害验证集检测结果图",
    caption: "验证集输出结果图。检测框、类别和置信度保持原图。",
    usage: "road damage evidence",
  },
  technicalRoute: {
    src: "/images/picture/technical-route.png",
    width: 1319,
    height: 813,
    alt: "道路病害检测项目技术路线图",
    caption: "道路病害检测项目技术路线图，展示采集、训练、输出和养护辅助闭环。",
    usage: "road damage method",
  },
  slopeTechnicalRoute: {
    src: "/images/picture/slope-technical-route.png",
    width: 1021,
    height: 663,
    alt: "边坡动态预警项目技术路线图",
    caption: "边坡动态预警项目技术路线图，展示多源监测与预警流程。",
    usage: "slope project method",
  },
  transportAward: {
    src: "/images/picture/transport-competition-award.jpg",
    width: 1279,
    height: 1807,
    alt: "全国大学生交通运输科技大赛全国三等奖证明材料",
    caption: "全国大学生交通运输科技大赛全国三等奖证明材料。",
    usage: "achievement evidence",
    sensitive: true,
  },
  transportAwardNews: {
    src: "/images/picture/transport-competition-award-news.png",
    width: 1915,
    height: 1003,
    alt: "太原科技大学官网比赛获奖新闻稿截图",
    caption: "太原科技大学官网发布的比赛获奖新闻截图。",
    usage: "achievement evidence",
  },
  transportShow: {
    src: "/images/picture/transport-competition-show.jpg",
    width: 1920,
    height: 1279,
    alt: "全国大学生交通运输科技大赛答辩现场",
    caption: "全国大学生交通运输科技大赛答辩现场。",
    usage: "achievement evidence",
  },
  caacLicense: {
    src: "/images/picture/caac-license-redacted.jpg",
    width: 1273,
    height: 2146,
    alt: "CAAC 中型超视距无人机机长执照相关材料",
    caption: "CAAC 中型超视距无人机机长执照相关材料。",
    usage: "credential evidence",
    sensitive: true,
  },
  computerRank: {
    src: "/images/picture/computer-rank%20level-2.jpg",
    width: 1843,
    height: 1280,
    alt: "全国计算机等级考试二级证书相关材料",
    caption: "全国计算机等级考试二级证书相关材料。",
    usage: "credential evidence",
    sensitive: true,
  },
} satisfies Record<string, SiteImage>;
