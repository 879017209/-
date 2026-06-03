const capabilityTags = ["AI 预标注", "4D 标注", "审核质检", "数据闭环"];

const platformCapabilities = [
  {
    title: "AI 预标注",
    description: "自动识别目标、车道线、语义区域",
  },
  {
    title: "4D 标注",
    description: "支持连续帧、时序轨迹、空间关系",
  },
  {
    title: "任务协作",
    description: "领取、提交、审核、质检流程",
  },
  {
    title: "数据闭环",
    description: "标注结果回流模型训练和业务优化",
  },
];

export default function Home() {
  return (
    <main className="shell">
      <section className="platformIntro">
        <div className="introCopy">
          <p className="eyebrow">West Genesis Annotation Platform</p>
          <h1>西部创源标注平台</h1>
          <p className="summary">
            面向数据标注、AI 预标注、4D 标注、审核质检与任务协作的数据生产平台，连接样本处理、标注作业、质量管控和模型训练回流，支撑智能驾驶与多模态数据的规模化生产。
          </p>
          <div className="tagList" aria-label="平台能力标签">
            {capabilityTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <a className="primaryLink" href="/prototype/index.html">
          打开当前原型
        </a>
      </section>

      <section className="prototypeSection" aria-label="原型预览与能力说明">
        <article className="card previewCard">
          <div className="cardHeader">
            <div>
              <p className="sectionLabel">Prototype Preview</p>
              <h2>当前原型</h2>
            </div>
            <span>静态展示版</span>
          </div>
          <iframe title="西部创源标注平台原型预览" src="/prototype/index.html" />
        </article>

        <aside className="card capabilityPanel">
          <p className="sectionLabel">Platform Capabilities</p>
          <h2>核心能力</h2>
          <ul className="capabilityList">
            {platformCapabilities.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
