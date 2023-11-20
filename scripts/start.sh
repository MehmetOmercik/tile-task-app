#!/bin/bash
# ? Script that starts both frontend and backend

#Adding executable permissions to script
chmod +x start.sh

# Start Django backend server and activate virtual env
cd ../backend
source backend_venv/bin/activate
echo Starting Backend Server
python3 manage.py migrate
python3 manage.py runserver & sleep 2 &
open http://127.0.0.1:8000/tiles/

# Start React frontend server
echo -e "\nNow Starting Frontend" & sleep 2
cd ../frontend
npm run dev & open http://localhost:5000/

exit 0