video = "";
status = "";
function setup(){
    canvas = createCanvas(1000, 800);
    canvas.position(700, 150);
}

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Staus: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    video.loop;
    video.speed(1);
    video.volume(0);
}
function draw(){
    image(video, 0, 0, 1000, 800);
}