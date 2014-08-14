@echo off

echo "Dear user, this batch file is currently starting the Search Guardian application by executing the command line `grunt serve --force`. Please wait a moment..."
echo.	
echo "To interrupt this console anytime, press on 'Ctrl+C'."
echo.	
set /p INSTALL= Install requirements for the Search Guardian? (Y or N):  
goto %INSTALL%

:Y
echo "Starting installations (require internet connection)"
npm install -g yo
path >> path.txt
findstr /m "AppData\Roaming\npm" path.txt
if %errorlevel%==0 (
echo "npm properly installed...Starting application..."
goto N
) else (
echo "cannot find shortcut for npm in Windows path:"
echo path.txt
echo "Reboot the machine, execute this file again but skip the installations by pressing 'N' instead of 'Y'."
)
pause
goto N

:N
grunt serve --force
echo "Search Guardian shutting down. (shouldn't appear)"
pause