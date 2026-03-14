@echo off
setlocal

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

set "PATH=%ROOT%\.tools\node-v20.20.1-win-x64;%ROOT%\.tools\node-v20.20.1-win-x64\node_modules\npm\bin;%PATH%"

start "portfolio-site" /min cmd /c "cd /d %ROOT% && call .tools\node-v20.20.1-win-x64\npm.cmd run start -- --hostname 127.0.0.1 --port 3000 > .next-start.log 2> .next-start.err.log"

endlocal
