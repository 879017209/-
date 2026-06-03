const nextSteps = [
  "把静态原型拆成可维护的页面组件",
  "接入登录和成员权限",
  "把任务列表改为数据库真实数据",
  "增加领取、提交、审核等后台接口",
];

export default function Home() {
  return (
    <main className="shell">
      <section className="hero">
        <div>
          <p className="eyebrow">West Genesis</p>
          <h1>西部创源工作台</h1>
          <p className="summary">
            当前页面先承载已有原型，后续可以逐步升级成带登录、数据库和接口的真实应用。
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
          <iframe title="西部创源原型预览" src="/prototype/index.html" />
        </article>

        <aside className="card">
          <h2>后续升级方向</h2>
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
