# 上线说明

## 先安装依赖

```bash
npm install
```

## 本地预览

```bash
npm run dev
```

## 正式发布

推荐方式：

1. 把 `future-app` 推到 GitHub。
2. 打开 Vercel。
3. 导入这个 GitHub 仓库。
4. Root Directory 选择 `future-app`。
5. 点击 Deploy。

Vercel 会自动识别 Next.js 项目。

## 接入 Supabase

需要登录或数据库时：

1. 创建 Supabase 项目。
2. 复制 `.env.example` 为 `.env.local`。
3. 填入：

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

4. 之后就可以在 `lib/supabase.ts` 里统一使用 Supabase 客户端。
