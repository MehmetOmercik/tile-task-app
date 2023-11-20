# Tile Task Program

## Description

A full-stack web application utilising React on the frontend and Django on the backend to create a program that allows you to create a set of tasks and link them to a tile.

## Setup

Before using any of these methods, download or git clone the project onto your machine:

```bash
git clone https://github.com/MehmetOmercik/tile-task-app.git
```

### Method 1: Docker method

Using Docker, you can create containers for the application, allowing you to use it without installing the necessary libraries onto your machine. You will however require Docker Desktop first in order to use this method. Click the link here if you need to install it:\
https://www.docker.com/products/docker-desktop/

After the installation is complete, simply follow the next steps.\
<b>Note</b>: Make sure you don't have any other applications running on localhost:8000 or localhost:5000 otherwise the applications won't start properly.

1. Go to the root directory and type:

```bash
docker compose up --build
```

This will build the image and run the applications.

2. To stop the containers just press CTRL+C in the terminal.

3. To remove the containers, run:

```bash
docker compose down
```

4. If you ever want to start the containers again and have already done step one before AND you haven't deleted the docker images then just type `docker-compose up` to recreate the containers again. This is much faster as you don't need to build the image again.

### Method 2: Bash Scripts

Another method to easily setup the project is using bash scripts. Unlike the Docker method however, you must have the necessary software installed onto your machine such as Node.js and Python so make sure you have done that before proceeding.

1. From the root directory, move into the "scripts" directory:

```bash
cd scripts
```

2. Type:

```bash
bash build.sh
```

into the integrated terminal to build both frontend and backend environments

3. Now run:

```bash
bash start.sh
```

to run both ports

4. To close BOTH ports, first press Control+C in the terminal and then run:

```bash
bash end.sh
```

5. To reset the repo, use:

```bash
bash destroy.sh
```

CTRL+C normally shuts the ports down, but in this instance it doesnt for django so I created the script to shut both down just incase.

### Method 3: Manual Setup

If for some reason none of the above methods work or are suitable for you, you can manually set up repository yourself.

#### <ins>Backend</ins>

1. For backend, first move to the backend directory from the root directory by typing:

```
cd backend
```

2. Create a virtual environment by typing:

```python
# Windows
python -m venv {name_of_venv}

# Mac or Linux
python3 -m venv {name_of_venv}
```

make sure to replace `{name_of_venv}` with a name of your own choosing, personally I go for `backend_venv`.

3. Activate the backend virtual environment:

```python
# Windows
source {name_of_venv}\Scripts\activate

# Mac or Linux
source {name_of_venv}\bin\activate
```

4. Install dependancies:

```python
pip install -r requirements.txt
```

5. Make migrations:

```python
# Windows
python manage.py makemigrations

# Mac or Linux
python3 manage.py makemigrations
```

6. Migrate tables:

```python
# Windows
python manage.py migrate

# Mac or Linux
python3 manage.py migrate
```

7. Run the server:

```python
# Windows
python manage.py runserver

# Mac or Linux
python3 manage.py runserver
```

#### <ins>Frontend</ins>

8. Now in a separate terminal go to the frontend directory:

```bash
cd frontend
```

9. Install dependancies:

```js
// Using npm
npm install

// Using yarn
yarn add
```

10: Run frontend server:

```js
// Using npm
npm run dev

// Using yarn
yarn run dev
```

## How to use

#### <ins>Frontend</ins>

Visit http://localhost:5000/ to interact with the frontend application (some of the methods above automatically opens the applications).

To create a tile, click on the + button at the top-right. Once you go through the form you can then create tasks associated to that tile by hovering over it, clicking "view tasks" and then clicking the + button on the top-left of the card.

#### <ins>Backend</ins>

Visit http://127.0.0.1:8000/tiles/ to view the list of tiles created (Note, if you changed the port numbers when running the server you need to alter the url link to take this into account)

Visit http://127.0.0.1:8000/tasks/ to view the list of tasks.

## Testing

#### <ins>Frontend</ins>

Go to the frontend directory, `cd frontend`, and type:

```js
// Normal vite test
npm test

// Coverage report test
npm run test-coverage

// UI vite test, displays tests on http://localhost:51204/\_\_vitest\_\_/
npm run test-ui
```

#### <ins>Backend</ins>

Go to the Backend directory, activate the backend virtual environment and run:

```python
# Normal test
pytest

# Coverage report test
pytest --cov

# Test showing print statements
pytest -rP
```

If the backend isn't running then some tests will fail so make sure that it is.

## Reset

#### Docker method:

```bash
# Remove only containers
docker compose down

# Remove containers and images
docker compose down --rmi all
```

#### Bash Script method:

```bash
bash destroy.sh
```

#### Manual method:

1. Delete node_modules on the frontend.

2. Delete db.sqlite3 and virtual environment on the backend.
