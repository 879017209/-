# 西部创源应用底座

这个文件夹是后续升级用的版本。当前根目录的 `index.html`、`styles.css`、`app.js` 仍然是可直接发布的静态展示版；这里的 `future-app` 用来逐步升级成真正能登录、保存数据、连接后台的 Web 应用。

## 当前路线

1. 先把现有页面作为原型展示出去。
2. 后续功能稳定后，把页面拆成 Next.js 组件。
3. 需要登录、数据库、文件存储时接入 Supabase。
4. 最终部署到 Vercel。

## 本地启动

第一次需要安装依赖：

```bash
npm install
```

启动开发预览：

```bash
npm run dev
```

然后打开终端显示的本地地址。

## 发布到线上

后续推荐把这个文件夹推到 GitHub，然后在 Vercel 里导入仓库。Vercel 会自动识别 Next.js 项目并部署。

## 环境变量

需要数据库/登录时，复制 `.env.example` 为 `.env.local`，再填入 Supabase 项目的地址和公开 key。
