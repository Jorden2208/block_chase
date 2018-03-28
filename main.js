window.onload = function(){

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var fps = 60;

var up = false;
var down = false;
var left = false;
var right = false;
var player_speed = 6;
var enemy_speed = 4;

var x = 0;
var y = 0;
var item_x = Math.floor((Math.random() * 1400) + 1);
var item_y = Math.floor((Math.random() * 600) + 1);
var enemy_x = Math.floor((Math.random() * 1400) + 1);
var enemy_y = Math.floor((Math.random() * 600) + 1);
var punten = 0;
var sw = 20;
var sh = 20;

function draw(){
  ///Teken veld
  ctx.fillStyle = 'grey';
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, width, height);
  //Teken item_punt
  ctx.fillStyle = 'orange';
  ctx.fillRect(item_x, item_y, 10, 10);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(item_x, item_y, 10, 10);
//Teken speler
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, 20, 20);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(x, y, 20, 20);
  //Teken enemy
  ctx.fillStyle = 'blue';
  ctx.fillRect(enemy_x, enemy_y, 20, 20);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(enemy_x, enemy_y, 20, 20);
  // teller
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Punten:", 650, 20);
  ctx.fillText(punten, 725, 20);
}


function item(){
  console.log(item_x + " | " + item_y);
  if(x-15 <= item_x && x+15 >= item_x && y-15 <= item_y && y+15 >= item_y){
    item_x = Math.floor((Math.random() * 1400) + 1);
    item_y = Math.floor((Math.random() * 600) + 1);
    punten ++;
  }
}


function move(){
  if(left && x > 0)x -= player_speed;
  if(right && x < 1480)x += player_speed;
  if(up && y > 0)y -= player_speed;
  if(down && y < 675)y += player_speed;
}



window.addEventListener('keydown', function(e){
  if(event.keyCode == 65) left = true;
  if(event.keyCode == 68) right = true;
  if(event.keyCode == 87) up = true;
  if(event.keyCode == 83) down = true;
  if(event.keyCode == 77) enemy_speed = 1;
})

window.addEventListener('keyup', function(e){
  if(event.keyCode == 65) left = false;
  if(event.keyCode == 68) right = false;
  if(event.keyCode == 87) up = false;
  if(event.keyCode == 83) down = false;
  if(event.keyCode == 77) enemy_speed = 4;
})
function vang(){
  if(x < enemy_x) {
    enemy_x = enemy_x - enemy_speed;
  }
  if(x > enemy_x) {
    enemy_x = enemy_x + enemy_speed;
  }
  if(y < enemy_y) {
    enemy_y = enemy_y - enemy_speed;
  }
  if(y > enemy_y) {
    enemy_y = enemy_y + enemy_speed;
  }
}
function enemy_col(){
  if(x-15 <= enemy_x && x+15 >= enemy_x && y-15 <= enemy_y && y+15 >= enemy_y){
    alert("GAME OVER");
    punten = 0;
    location.reload();
  }
}

function Init() {
  setInterval(draw, 1000 / fps);
  setInterval(item, 1000 / fps);
  setInterval(move, 1000 / fps);
  setInterval(vang, 1000 / fps);
  setInterval(enemy_col, 1000 / fps);
}
Init();
}
