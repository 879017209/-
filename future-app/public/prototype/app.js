const taskSets = {
  todo: [
    ["scene_5k_001", "标注", "正常", "障碍物目标检测", "100", "2009", "2026-5-12 13:36:00", "2026-5-12 13:36:00", "10秒"],
    ["scene_5k_005", "审核", "驳回", "车道线", "100", "2867", "2026-5-12 13:36:00", "2026-5-12 13:36:00", "1分钟"],
    ["scene_5k_006", "质检", "正常", "语义分割", "100", "-", "2026-5-12 13:36:00", "2026-5-12 13:36:00", "2小时"],
    ["scene_5k_009", "验收", "驳回", "车道线", "100", "2867", "2026-5-12 13:36:00", "2026-5-12 13:36:00", "10天"],
  ],
  paused: [
    ["scene_5k_012", "标注", "正常", "车道线", "100", "1894", "2026-5-11 09:18:00", "2026-5-12 11:20:00", "1天"],
    ["scene_5k_016", "质检", "驳回", "语义分割", "100", "-", "2026-5-10 15:30:00", "2026-5-11 16:21:00", "1天"],
  ],
  submitted: [
    ["scene_5k_021", "验收", "正常", "障碍物目标检测", "100", "3122", "2026-5-08 10:00:00", "2026-5-09 15:45:00", "1天"],
    ["scene_5k_025", "验收", "正常", "车道线", "100", "2419", "2026-5-07 08:35:00", "2026-5-08 17:12:00", "1天"],
    ["scene_5k_026", "验收", "正常", "语义分割", "100", "-", "2026-5-05 14:09:00", "2026-5-06 09:30:00", "19小时"],
  ],
};

const poolTasks = [
  { name: "标注任务", count: 200, available: true },
  { name: "审核任务", count: 200, available: true },
  { name: "质检任务", count: 200, available: true },
  { name: "验收任务", count: 200, available: true },
];

let activeTab = "todo";
let toastTimer;

const rowTarget = document.querySelector("#taskRows");
const emptyState = document.querySelector("#emptyState");
const totalCount = document.querySelector("#totalCount");
const toast = document.querySelector("#toast");

function notify(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 1800);
}

function currentFilters() {
  return {
    name: document.querySelector("#taskName").value.trim().toLowerCase(),
    node: document.querySelector("#nodeFilter").value,
    work: document.querySelector("#workFilter").value,
    label: document.querySelector("#labelFilter").value,
  };
}

function filteredTasks() {
  const filters = currentFilters();
  return taskSets[activeTab].filter((task) => {
    return (!filters.name || task[0].toLowerCase().includes(filters.name))
      && (!filters.node || task[1] === filters.node)
      && (!filters.work || task[2] === filters.work)
      && (!filters.label || task[3] === filters.label);
  });
}

function renderTasks() {
  const tasks = filteredTasks();
  rowTarget.innerHTML = tasks.map((task) => `
    <tr>
      <td class="task-name">${task[0]}</td>
      ${task.slice(1).map((cell) => `<td>${cell}</td>`).join("")}
      <td><button class="link-btn" data-action="处理" data-task="${task[0]}">处理</button><button class="link-btn" data-action="更多" data-task="${task[0]}">更多</button></td>
    </tr>
  `).join("");
  totalCount.textContent = `共 ${tasks.length} 条`;
  emptyState.classList.toggle("visible", tasks.length === 0);
}

function renderPool(filter = "all") {
  const visible = poolTasks.filter((task) => filter === "all" || task.available);
  document.querySelector("#poolList").innerHTML = visible.map((task) => `
    <div class="pool-card">
      <div>
        <strong>${task.name}</strong>
        <div><b>${task.count}</b><span>条可领取</span></div>
      </div>
      <button class="primary-btn claim-btn" data-name="${task.name}">随机领取</button>
    </div>
  `).join("");
}

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("expandable")) {
      item.classList.toggle("open");
      item.nextElementSibling.classList.toggle("visible");
      return;
    }
    document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
    notify(`${item.dataset.nav}页面`);
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    renderTasks();
  });
});

document.querySelector("#filterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  renderTasks();
  notify("筛选结果已更新");
});

document.querySelector("#resetBtn").addEventListener("click", () => {
  document.querySelector("#filterForm").reset();
  document.querySelector("#labelFilter").value = "";
  renderTasks();
  notify("筛选条件已重置");
});

document.querySelector("#advancedBtn").addEventListener("click", () => {
  document.querySelector("#advancedFilter").classList.toggle("visible");
});

document.querySelector("#labelFilter").addEventListener("change", renderTasks);

document.querySelector("#taskRows").addEventListener("click", (event) => {
  const button = event.target.closest(".link-btn");
  if (button) notify(`${button.action || button.dataset.action}：${button.dataset.task}`);
});

document.querySelector("#poolFilterBtn").addEventListener("click", () => {
  document.querySelector("#poolFilter").classList.toggle("visible");
});

document.querySelector("#poolFilter").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  document.querySelectorAll("#poolFilter button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderPool(button.dataset.filter);
});

document.querySelector("#poolList").addEventListener("click", (event) => {
  const button = event.target.closest(".claim-btn");
  if (button) notify(`已领取${button.dataset.name}`);
});

document.querySelector("#bannerClaim").addEventListener("click", () => notify("已随机领取标注任务"));
document.querySelector(".switch-icon").addEventListener("click", () => notify("项目切换功能已展开"));

document.querySelectorAll(".page-btn").forEach((button) => {
  button.addEventListener("click", () => {
    if (!/^\d+$/.test(button.textContent)) return;
    document.querySelector(".page-btn.active").classList.remove("active");
    button.classList.add("active");
    notify(`已切换到第 ${button.textContent} 页`);
  });
});

document.querySelector(".size-btn").addEventListener("click", () => notify("每页显示 10 条"));

document.querySelector("#edgeHandle").addEventListener("click", (event) => {
  document.querySelector(".right-column").classList.toggle("collapsed");
  document.querySelector(".dashboard-grid").classList.toggle("pool-collapsed");
  const collapsed = document.querySelector(".right-column").classList.contains("collapsed");
  event.currentTarget.textContent = collapsed ? "‹" : "›";
  event.currentTarget.setAttribute("aria-label", collapsed ? "展开任务池" : "收起任务池");
});

renderTasks();
renderPool();
