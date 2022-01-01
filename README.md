# GamejQuery
A mini game that I developed while learning jQuery through ALURA platform. 
ALURA provided the whole nodeJS server structure (which was not the focus of the course) that i used to host the game and the database.
I only modified and adapt the front-end part to a different type of game.

The game works by showing to the player a tip about a brazilian football team, and the user has to write an answer in the text area. If the aswer is right, his score is automatically increased in one and the next tip is showed (through an Ajax request to the api in the server). Each tip has its own timer and if the player cannot guess the right team in the time given, the game is finished and he can try to play again by clicking on the restart button.
