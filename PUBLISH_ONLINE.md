# 发布到线上

目标：发布到 Vercel。发布后别人访问线上地址，你的电脑可以关机。

## 第一步：推到 GitHub

1. 打开 GitHub，新建一个空仓库。
2. 复制仓库的 HTTPS 地址，例如：

```text
https://github.com/your-name/west-genesis-app.git
```

3. 双击根目录里的：

```text
Publish To GitHub.cmd
```

4. 粘贴仓库地址并回车。
5. 如果弹出 GitHub 登录窗口，按提示登录授权。

## 第二步：Vercel 发布

1. 打开 Vercel。
2. 选择 Add New Project。
3. 选择刚才的 GitHub 仓库。
4. Root Directory 选择：

```text
future-app
```

5. 点击 Deploy。

部署完成后，Vercel 会给你一个类似这样的地址：

```text
https://west-genesis-app.vercel.app
```

这个地址发给别人即可。你的电脑关机也不影响访问。

## 我已经准备好的上传包

如果你不想先推 GitHub，也可以先保留这个干净上传包：

```text
future-app-vercel-upload-20260603-150327.zip
```
