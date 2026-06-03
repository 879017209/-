@echo off
setlocal
cd /d "%~dp0future-app"
set npm_config_offline=false
set HTTP_PROXY=
set HTTPS_PROXY=
set NO_PROXY=localhost,127.0.0.1,::1
echo Starting West Genesis app...
echo.
npm run dev -- --hostname 127.0.0.1 --port 3000
echo.
echo The app stopped. Press any key to close this window.
pause >nul
