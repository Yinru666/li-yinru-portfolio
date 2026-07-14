import { images, type SiteImage } from "./assets";

export type PipelineStep = {
  title: string;
  detail: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  role: string;
  status: string;
  result?: string;
  summary: string;
  directions: string[];
  keywords: string[];
  problems: PipelineStep[];
  pipeline: PipelineStep[];
  results: string[];
  reflection: string[];
  gallery: SiteImage[];
  heroImage?: SiteImage;
  routeImage?: SiteImage;
  relatedResearch: string[];
};

export const projects: Project[] = [
  {
    slug: "uav-yolo26-road-damage",
    title: "基于无人机与 YOLO26 的道路病害智能巡检系统",
    eyebrow: "UAV Inspection / Road Damage Detection",
    role: "项目负责人 / 队长",
    status: "竞赛项目 / 已完成阶段性成果",
    result: "全国大学生交通运输科技大赛全国三等奖",
    summary:
      "面向道路路面病害智能检测任务，构建无人机低空影像采集、道路病害智能识别、结构化结果输出和养护决策支撑的一体化方案。",
    directions: ["无人机巡检", "道路病害识别", "小目标检测", "智慧交通"],
    keywords: [
      "YOLO26m",
      "P2 Detection Head",
      "Class-aware Sampling",
      "Warm Start",
      "UAV Inspection",
      "Road Damage Detection",
      "Small Object Detection",
    ],
    problems: [
      {
        title: "小目标与细长裂缝",
        detail:
          "路面裂缝在航拍图像中占比小、形态细长，容易被下采样过程弱化。",
      },
      {
        title: "阴影与积水干扰",
        detail:
          "现场光照、阴影、积水和路面纹理会影响检测边界与类别判断。",
      },
      {
        title: "类别不均衡",
        detail:
          "不同病害类型样本分布不均衡，需要在采样和训练策略上做约束。",
      },
      {
        title: "工程化输出",
        detail:
          "检测结果需要结构化输出，服务后续养护辅助和风险处置流程。",
      },
    ],
    pipeline: [
      {
        title: "低空采集",
        detail: "组织无人机巡检，采集不同高度、光照和路况条件下的道路影像。",
      },
      {
        title: "数据整理",
        detail: "完成图像筛选、标注检查和复杂场景样本归类。",
      },
      {
        title: "类别感知采样",
        detail: "针对类别不均衡问题设计采样策略，提高训练数据覆盖度。",
      },
      {
        title: "模型训练",
        detail: "基于 YOLO26m，引入 P2 小目标检测层，并采用 Warm Start 训练策略。",
      },
      {
        title: "结构化输出",
        detail: "将检测结果整理为 JSON 结构，保留类别、位置和置信度信息。",
      },
      {
        title: "养护辅助",
        detail: "构建低空采集、智能识别、养护辅助的道路巡检技术闭环。",
      },
    ],
    results: [
      "形成面向道路病害巡检的无人机采集与视觉识别方案。",
      "完成检测结果的结构化输出设计，便于后续工程平台接入。",
      "作为队长带队获得全国大学生交通运输科技大赛全国三等奖。",
    ],
    reflection: [
      "复杂现场条件下，低空飞行高度并非越低越好，需要在分辨率、覆盖效率和安全性之间权衡。",
      "后续可继续补充更多季节、光照和路面材质样本，提升跨场景稳定性。",
      "项目下一步重点是把检测结果与养护工单、位置索引和复核流程进一步打通。",
    ],
    heroImage: images.roadDamageHero,
    routeImage: images.technicalRoute,
    gallery: [
      images.roadDamageHero,
      images.uav,
      images.detectionOrigin,
      images.detectionResultOne,
      images.detectionResultTwo,
      images.technicalRoute,
    ],
    relatedResearch: [
      "uav-remote-sensing",
      "road-damage-detection",
      "digital-twin-loop",
    ],
  },
  {
    slug: "loess-slope-warning",
    title: "多源监测数据驱动的黄土边坡动态预警模型研究",
    eyebrow: "Loess Slope / Dynamic Warning",
    role: "校级大创项目参与者",
    status: "在研",
    summary:
      "面向黄土边坡灾害风险识别与动态预警问题，融合位移、降雨、土壤水分、孔隙水压等多源监测数据，探索边坡变形预测与风险分级预警模型。",
    directions: ["边坡监测", "时序预测", "多源数据融合", "风险预警"],
    keywords: [
      "SSA-LSTM",
      "Loess Slope",
      "Multi-source Data Fusion",
      "Dynamic Warning",
      "Finite Element Analysis",
      "Risk Warning",
    ],
    problems: [
      {
        title: "多源数据异步",
        detail: "不同监测源采样频率、缺测情况和噪声水平不一致。",
      },
      {
        title: "降雨诱发变形",
        detail: "黄土边坡受水敏性和降雨入渗影响，风险演化具有滞后性。",
      },
      {
        title: "新数据适应",
        detail: "在线新增监测数据需要模型具备持续适应能力。",
      },
    ],
    pipeline: [
      {
        title: "机理梳理",
        detail: "梳理湿陷性、水敏性和降雨入渗诱发变形机制。",
      },
      {
        title: "特征工程",
        detail: "参与多源监测数据预处理、缺测处理和特征构建。",
      },
      {
        title: "时序预测",
        detail: "探索 SSA-LSTM 在边坡位移预测中的应用。",
      },
      {
        title: "迁移学习",
        detail: "研究在线迁移学习对新增监测数据适应性的提升作用。",
      },
      {
        title: "风险分级",
        detail: "参与多级风险预警逻辑设计。",
      },
    ],
    results: [
      "形成边坡监测数据融合与动态预警的研究路径。",
      "明确 SSA-LSTM、在线迁移学习和风险分级逻辑的组合方向。",
    ],
    reflection: [
      "边坡预警不能只依赖单一模型，需要结合工程机理、数据质量和阈值策略。",
      "后续需要进一步验证模型在不同监测断面和降雨事件下的泛化能力。",
    ],
    heroImage: images.slopeTechnicalRoute,
    routeImage: images.slopeTechnicalRoute,
    gallery: [images.slopeTechnicalRoute],
    relatedResearch: ["loess-slope-warning", "digital-twin-loop"],
  },
  {
    slug: "transport-slope-uav-warning-system",
    title: "交通边坡低空智能巡检与灾害风险预警系统",
    eyebrow: "Slope Inspection / Closed-loop Management",
    role: "低空巡检与智能识别方向负责人 / 系统方案设计",
    status: "在研 / 原型验证",
    result: "完成现场踏勘与三维重建验证",
    summary:
      "面向交通边坡安全治理，通过现场踏勘、无人机倾斜摄影与三维重建获取坡体空间信息，并进一步连接多时序变化分析、风险分级预警和现场处置闭环。",
    directions: ["现场踏勘", "无人机倾斜摄影", "三维重建", "风险预警"],
    keywords: [
      "UAV Remote Sensing",
      "Photogrammetry",
      "3D Reconstruction",
      "Slope Warning",
      "InSAR",
      "Multi-temporal Analysis",
      "Closed-loop Management",
    ],
    problems: [
      {
        title: "复杂地形采集",
        detail: "坡体高差、植被遮挡、道路交通和架空线路共同限制低空航线与拍摄角度。",
      },
      {
        title: "三维重建质量",
        detail: "影像重叠度、视角覆盖与纹理特征会直接影响点云完整性和坡体模型连续性。",
      },
      {
        title: "多时序变化判读",
        detail: "裂缝、滑移迹象和危险区域需要跨周期配准与对比，单次扫描无法判断演化趋势。",
      },
      {
        title: "风险处置闭环",
        detail: "识别与预警结果需要进入现场核查、处置和复核流程，才能形成工程管理价值。",
      },
    ],
    pipeline: [
      {
        title: "现场踏勘",
        detail: "记录坡体形态、道路边界、周边障碍和作业条件，明确重点扫描区域与安全边界。",
      },
      {
        title: "航线规划与采集",
        detail: "根据边坡高差和立面特征规划低空航线，以多角度重叠影像覆盖坡面、坡脚与道路空间。",
      },
      {
        title: "三维重建",
        detail: "通过影像匹配、稠密点云与纹理映射生成边坡三维模型，保留坡体形态和道路边界。",
      },
      {
        title: "变化分析与融合",
        detail: "将多时序模型与 InSAR、现场巡查和传感器监测放入统一空间语境，分析异常变化。",
      },
      {
        title: "风险分级与复核",
        detail: "把异常区域转化为可定位的风险记录，并连接现场核查、处置建议与复核归档。",
      },
    ],
    results: [
      "完成典型交通边坡现场踏勘与无人机低空影像采集。",
      "形成包含坡体、道路和周边环境的三维重建结果。",
      "建立从低空感知、多时序分析到风险处置的系统原型路径。",
    ],
    reflection: [
      "架空线路、植被遮挡和道路通行条件会直接影响航线安全与模型覆盖，需要在采集前完成现场约束检查。",
      "用于变化检测的三维模型需要保持相对稳定的航线、尺度与配准基准，避免把采集差异误判为坡体变化。",
      "后续将继续完善多时序对比、风险阈值和现场工单复核之间的闭环。",
    ],
    heroImage: images.slopeFieldOperation,
    routeImage: images.slopeUavReconstruction,
    gallery: [
      images.slopeFieldOperation,
      images.slopeUavReconstruction,
      images.uav,
    ],
    relatedResearch: [
      "uav-remote-sensing",
      "loess-slope-warning",
      "digital-twin-loop",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
