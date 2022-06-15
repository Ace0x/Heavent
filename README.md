# Heaven't
Heaven't is a web game developed with the objective of being an introduction to videogame design in mind. The user is able to design their own levels and play levels designed by other players with the main player, Godn't.

Developed for TC2005B - Software Building and Decision Making


## Developers
Emiliano Cabrera, A01025453<br/>
Diego Corrales, A01781631<br/>
Andrew Dukerley, A01025076<br/>
Do Hyun Nam, A01025276

## Installation
### Website
To run the website locally, go to [/clients](/client/) and install all node dependencies with `npm install`. While still live, the website is available at https://heavent.netlify.app/.

### API
To install and run the API service locally, go to [/api](/api/) and install all libraries using `pip install -r requirements.txt` in a Python virtual environment (Python **3.9.0** or above recommended). While still live, the API is available at https://api-heavent.herokuapp.com/.

### Database
To import database locally, simply import [this dump](/sql_scripts/Dump20220615.sql) using `mysql -u root -p heaventdb < dumpfilename.sql` with password **heavent1234**. Installing on a Docker container is highly recommended. 

### Game 
Import the game locally from [/Game](/Game/) to Unity Game Engine. Unity **2021.3.2f1** is highly recommended. While still live, find the game hosted [here](https://heavent.netlify.app/game/).

## Usage
### Heaven't game
1. To play the game first create an account in the [website](https://heavent.netlify.app/signup/) if you don't have one and then log in over the game itself. 
![Game log in](/assets/gamelogin.png)
2. Then choose whether to play existing levels or build a new one.
![Main menu](/assets/gamemenu.png)
3. For both of them follow the game manual and key mapping displayed over the game page. 
4. Enjoy!

### User stats
1. Log in or sign up, then see the new dashboard when a user is stated.
2. Explore the different pages/sections available.
3. To make any comparison, bear in mind all the different IDs of the objects you'd like to compare. 
4. To access a general dashboard, go to the Dashboard item in the navigation.

### Acknowledgements
S/O to Prof. Octavio Navarro, Gilberto Echeverría, and Esteban Castillo for guiding us throughout the course. Also we'd like to mention our gratitude for the *Mexican Association of Videogames* for proposing the project.

### Project status
The project has been concluded as part of the final coursework for TC2005B - Software Building and Decision Making.

Check more about the workflow [here](/Documentation/MasterDocs%5BHeaven't%5D.pdf).

### [Video Link - Heaven't](https://youtu.be/K2YlWaCCg6U)