const nextSteps = [
  "AI 预标注：自动识别目标、车道线、语义区域，减少人工第一遍标注成本",
  "4D 标注：支持多帧连续场景、时序轨迹和空间关系标注",
  "质检与审核自动化：用规则和模型辅助发现漏标、错标和异常任务",
  "数据闭环：把标注结果、模型训练和问题回流串成可持续迭代流程",
];

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div>
          <h1>西部创源标注平台</h1>
          <p className="eyebrow">West Genesis Annotation Platform</p>
          <p className="summary">
            西部创源标注平台面向多模态数据生产场景，提供任务管理、人员协作、审核质检、结果交付与数据闭环能力，帮助团队更高效地完成标注生产和质量管控。
          </p>
        </div>
        <a className="primaryLink" href="/prototype/index.html">
          进入平台
        </a>
      </section>

      <section className="grid">
        <article className="card previewCard">
          <div className="cardHeader">
            <h2>平台预览</h2>
            <span>静态展示版</span>
          </div>
          <div className="previewViewport" aria-label="西部创源标注平台静态预览">
            <iframe title="西部创源标注平台原型预览" src="/prototype/index.html" />
          </div>
        </article>

        <aside className="card">
          <h2>后续发展方向</h2>
          <ul>
            {nextSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
