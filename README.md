# Make sure you have Python3 installed


#### Check if you have virtualenv package installed. If not, install it by:
    $ pip install virtualenv

#### Clone the project from GitHub
    $ git clone https://github.com/fredricksimi/covid19
#### Cd into the project directory
    $ cd covid19
#### Create a virtual environment for your project
    $ virtualenv projectenv
#### Activate the virtual environment
    $ source projectenv/bin/activate
#### Install the project dependencies
    $ pip install -r requirements.txt
#### Start the project server
    $ python manage.py runserver
#### Open the project on the browser by visiting
    http://127.0.0.1:8000