@echo off
setlocal enabledelayedexpansion
echo [%date% %time%] 开始检查 3000 端口...

set found=0
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000" ^| findstr "LISTENING"') do (
  set found=1
  echo [%date% %time%] 找到进程 PID: %%a
  taskkill /PID %%a /F >nul 2>nul
  if !errorlevel! equ 0 (
    echo [%date% %time%] 成功终止进程 PID: %%a
  ) else (
    echo [%date% %time%] 终止进程失败 PID: %%a
  )
)

if !found! equ 0 (
  echo [%date% %time%] 未找到 3000 端口上的进程
) else (
  echo [%date% %time%] 操作完成
)

endlocal