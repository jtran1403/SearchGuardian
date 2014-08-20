@echo off

echo "Dear user, this batch file is currently starting the Search Guardian application by executing the command line `grunt serve --force`. Please wait a moment..."
echo.	
echo "To interrupt this console anytime, press on 'Ctrl+C'."
echo.	
set /p INSTALL= Install requirements for the Search Guardian? (Y or N):  
goto %INSTALL%

:Y	
echo "Starting installations (require internet connection)"
npm install -g yo && (grunt serve --force) || (grunt serve --force)
echo "If the installations succeeded, start the application (shouldn't appear). Else... Well it really works in fact (need to update the dependencies to be really clean), so just start it"

:N
grunt serve --force
echo "Search Guardian shutting down. (shouldn't appear)"