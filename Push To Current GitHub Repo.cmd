@echo off
setlocal
cd /d "%~dp0"

set REPO_URL=https://github.com/879017209/-.git

echo Pushing West Genesis project to:
echo %REPO_URL%
echo.

git --version >nul 2>nul
if errorlevel 1 (
  echo Git is not installed or not available in PATH.
  pause
  exit /b 1
)

if not exist ".git" (
  git init
)

git config user.name "West Genesis"
git config user.email "west-genesis@example.local"

git add .gitignore README.md PUBLISH_ONLINE.md "Publish To GitHub.cmd" "Push To Current GitHub Repo.cmd" "Start Future App.cmd" index.html styles.css app.js future-app/app future-app/lib future-app/public future-app/.env.example future-app/.gitignore future-app/.vercelignore future-app/DEPLOY.md future-app/next-env.d.ts future-app/next.config.ts future-app/package-lock.json future-app/package.json future-app/README.md future-app/tsconfig.json
if errorlevel 1 (
  echo Failed to prepare files.
  pause
  exit /b 1
)

git commit -m "Prepare West Genesis app for deployment"
if errorlevel 1 (
  echo No new commit was created. Continuing with push.
)

git branch -M main
git remote remove origin >nul 2>nul
git remote add origin "%REPO_URL%"
git push -u origin main
if errorlevel 1 (
  echo.
  echo Push failed. If a GitHub login window appears, please approve it and run this script again.
  pause
  exit /b 1
)

echo.
echo Upload completed.
echo Opening Vercel...
start "" "https://vercel.com/new"
echo.
echo In Vercel, import this GitHub repository and set Root Directory to:
echo future-app
pause
