#!/bin/bash
# ? This script downloads the dependancies and sets up the virtual env for both sides

#Adding executable permissions to script
chmod +x build.sh


#Build Backend first
cd ../backend

# Creating your virtual environment 
echo Creating Virtual Environment
sleep 2
echo Creating Backend Virtual Environment
python3 -m venv backend_venv

#Activating it
source backend_venv/bin/activate

#Download requirements
echo Installing Dependancies
pip3 install -r requirements.txt & sleep 5

python3 manage.py migrate

#Building Frontend Now
cd ../frontend
echo -e "\nNow Installing dependancies for frontend" & sleep 4

npm install

exit 0