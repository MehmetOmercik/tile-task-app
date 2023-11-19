#!/bin/bash
# ? This script deletes the db and virtual envs, resetting the repo back to normal

#Adding executable permissions to script
chmod +x destroy.sh

#Destroy frontend first
cd ../frontend

# Creating your virtual environment 
echo Removing Frontend virtual environment first & sleep 2

rm -rf node_modules

#Destroying Backend Now
echo -e  "\nNow removing dependencies for backend" & sleep 2
cd ../backend
deactivate
rm -rf backend_venv 
rm -rf db.sqlite3

echo -e "\nDestruction complete"

exit 0