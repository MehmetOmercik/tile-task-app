#!/bin/bash
# ? This script kills all running servers and ports

#Adding executable permissions to script
chmod +x end.sh

echo Killing both servers

# Killing frontend first 
echo Terminating React Vite frontend first
PID=$(lsof -t -i :5000)

# Terminate the process if it exists
if [ -n "$PID" ]; then
  echo -e "Killing process $PID\n"
  kill $PID
  echo Successfully killed frontend 
else
  echo -e "No process found on port 5000\n"
fi


#Killing backend
echo Terminating Django backend now
PID=$(lsof -t -i :8000)

# Terminate the process if it exists
if [ -n "$PID" ]; then
  echo "Killing process $PID"
  kill $PID
  echo Successfully killed backend
else
  echo "No process found on port 8000"
fi


exit 0


