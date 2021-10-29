
var canvas= new fabric.Canvas("myCanvas");

p_x=10;
p_y=10;

b_W=30;
b_H=30;

var player_object="";
var block_object="";

function player_update(){

    fabric.Image.fromURL("player.png", function (Img){
    player_object=Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:p_y,
        left:p_x
    });
    
   canvas.add(player_object);
});

}

function block_update(getImg){
    fabric.Image.fromURL(getImg, function (Img){
        block_object=Img;
    
        block_object.scaleToWidth(b_W);
        block_object.scaleToHeight(b_H);
        block_object.set({
            top:p_y,
            left:p_x
        });
        
       canvas.add(block_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
key_pressed=e.keyCode;
console.log(key_pressed);

if(key_pressed=="80" && e.shiftKey==true){
    console.log("shift_p");
    b_H= b_H + 10;
    b_W= b_W + 10;

    document.getElementById("current_width").innerHTML=b_W;
    document.getElementById("current_height").innerHTML=b_H;
}
if(key_pressed=="77" && e.shiftKey==true){
    console.log("shift_m");
    b_H= b_H - 10;
    b_W= b_W - 10;

    document.getElementById("current_width").innerHTML=b_W;
    document.getElementById("current_height").innerHTML=b_H;
}
if(key_pressed=="37"){
    left();
    console.log("left");
}
if(key_pressed=="38"){
    up();
    console.log("up");
}
if(key_pressed=="39"){
    right();
    console.log("right");
}   

if(key_pressed=="40"){
    down();
    console.log("down");
}

if(key_pressed=="87"){
    console.log("w");
    block_update("wall.jpg");

}
if(key_pressed=="67"){
    console.log("c");
    block_update("cloud.jpg");

}
if(key_pressed=="68"){
    console.log("d");
    block_update("dark_green.png");

}
if(key_pressed=="71"){
    console.log("g");
    block_update("ground.png");

}
if(key_pressed=="76"){
    console.log("l");
    block_update("light_green.png");

}
if(key_pressed=="82"){
    console.log("r");
    block_update("roof.jpg");
}
if(key_pressed=="84"){
    console.log("t");
    block_update("trunk.jpg");
}
if(key_pressed=="85"){
    console.log("u");
    block_update("unique.png");

}
if(key_pressed=="89"){
    console.log("y");
    block_update("yellow_wall.png");

}
}


function left(){
    if(p_x>=b_W){
    p_x=p_x-b_W;
    canvas.remove(player_object);
    player_update();
}
}
function right(){
    if(p_x<=canvas.width){
    p_x=p_x + b_W;
    canvas.remove(player_object);
    player_update();
}
}
function up(){
    if(p_y>=0){
    p_y=p_y-b_H;
    canvas.remove(player_object);
    player_update();
}
}
function down(){
    if(p_y<=canvas.height){
    p_y=p_y+ b_H;
    canvas.remove(player_object);
    player_update();
}
}