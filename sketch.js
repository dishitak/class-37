var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;
var allplayers;
var getPlayerInfo;
var database;

var form, player, game;


function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);
 
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  if(playerCount===4)
  {
    game.update(1)
  }
   if(gameState===1)
   {
     clear();
     game.play();
   }
}

