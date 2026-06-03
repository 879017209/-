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
          <p className="eyebrow">West Genesis</p>
          <h1>西部创源标注平台</h1>
          <p className="summary">
            面向数据标注、审核、质检和任务协作的工作平台，当前展示原型界面，后续将逐步升级为可接入真实业务数据的在线系统。
          </p>
        </div>
        <a className="primaryLink" href="/prototype/index.html">
          打开当前原型
        </a>
      </section>

      <section className="grid">
        <article className="card previewCard">
          <div className="cardHeader">
            <h2>当前原型</h2>
            <span>静态展示版</span>
          </div>
          <iframe title="西部创源标注平台原型预览" src="/prototype/index.html" />
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
