@echo off
set PATH=%PATH%;%CD%\bin
cd examples
echo available examples:
echo ------------------
dir /B *.js
echo.
echo.
echo Try: jshost ^<test name^>.js
echo.
cmd /k
