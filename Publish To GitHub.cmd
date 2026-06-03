@echo off
setlocal
cd /d "%~dp0"

echo West Genesis online publish helper
echo.
echo Step 1: This script will open the GitHub new repository page.
echo Step 2: Create an empty repository and copy its HTTPS URL.
echo Example:
echo https://github.com/your-name/west-genesis-app.git
echo.
start "" "https://github.com/new"
echo If the browser does not open, open this manually:
echo https://github.com/new
echo.
echo Suggested repository name: west-genesis-app
echo Important: do not add README, .gitignore, or license on GitHub.
echo.
set /p REPO_URL=Paste the GitHub repository HTTPS URL here, then press Enter: 

if "%REPO_URL%"=="" (
  echo Repository URL is required.
  pause
  exit /b 1
)

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

echo.
echo Preparing files for upload...
git add .gitignore README.md PUBLISH_ONLINE.md "Publish To GitHub.cmd" "Start Future App.cmd" index.html styles.css app.js future-app/app future-app/lib future-app/public future-app/.env.example future-app/.gitignore future-app/.vercelignore future-app/DEPLOY.md future-app/next-env.d.ts future-app/next.config.ts future-app/package-lock.json future-app/package.json future-app/README.md future-app/tsconfig.json
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
  echo Push failed. Usually this means GitHub login was not approved, or the repository URL is wrong.
  echo Run this script again after checking those two things.
  pause
  exit /b 1
)

echo.
echo GitHub upload completed.
echo.
echo Vercel will open next.
echo Import the GitHub repository and set Root Directory to:
echo future-app
echo.
start "" "https://vercel.com/new"
echo If the browser does not open, open this manually:
echo https://vercel.com/new
pause
