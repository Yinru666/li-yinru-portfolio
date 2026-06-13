export type SkillGroup = {
  title: string;
  items: {
    name: string;
    detail: string;
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Vision",
    items: [
      { name: "Python", detail: "数据处理、模型实验和工程脚本基础。" },
      { name: "PyTorch", detail: "深度学习模型训练与实验组织。" },
      { name: "YOLO 系列目标检测", detail: "道路病害、小目标和现场图像检测。" },
      { name: "CNN / RNN / LSTM", detail: "视觉特征建模与时序预测基础。" },
      { name: "SSA-LSTM", detail: "边坡位移预测与动态预警探索。" },
    ],
  },
  {
    title: "Engineering Data",
    items: [
      { name: "小目标检测", detail: "关注裂缝类细长目标与低占比目标识别。" },
      { name: "类别不均衡处理", detail: "通过采样策略和训练组织缓解数据分布问题。" },
      { name: "数据清洗与可视化", detail: "面向实验复盘和工程表达整理数据。" },
      { name: "结构化输出", detail: "将识别结果整理为可接入平台的数据结构。" },
    ],
  },
  {
    title: "Web & Field",
    items: [
      { name: "Next.js / React / TypeScript", detail: "Web 平台原型和科研主页开发。" },
      { name: "Web 平台原型开发", detail: "围绕工程闭环进行界面和流程设计。" },
      { name: "无人机低空数据采集", detail: "具备航测组织和复杂环境现场作业基础。" },
    ],
  },
];

