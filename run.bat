@echo off
cd /d "%~dp0"
title MLN122 - Triet hoc trong doi song (Philosophy in Life)
cls

echo =========================================================================
echo    MLN122 - TRIET HOC TRONG DOI SONG (PHILOSOPHY IN LIFE)
echo    "Hoc triet hoc bang cach nhin vao chinh cuoc song."
echo =========================================================================
echo.

echo [1/2] Kiem tra thu vien node_modules...
if not exist "node_modules\" (
    echo Dang cai dat thu vien, vui long doi...
    call npm.cmd install
)

echo [2/2] Dang khoi dong may chu va mo trinh duyet...
echo.
echo =========================================================================
echo    May chu dang chay tai: http://localhost:3000/
echo    Trinh duyet se tu dong mo trong giay lat...
echo    (De tat may chu, hay dong cua so nay hoac nhan Ctrl + C)
echo =========================================================================
echo.

start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:3000/"

call npm.cmd run dev

if errorlevel 1 (
    echo.
    echo Chuyen sang chay may chu du phong Node server.js...
    node server.js
)

pause
