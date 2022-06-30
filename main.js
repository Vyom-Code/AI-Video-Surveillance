objects = [];
video =  "";
status =  "";
function preload(){
    video = createVideo('video.mp4');
    video.position(700,400);
}

function setup(){
    canvas = createCanvas(1000,800);
    canvas.position(700,200);
}


function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Staus: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(0.75);
    video.volume(0);
}
function draw(){
    image(video, 0, 0, 1000, 800);
    if(status != "")
    {
        objectDetector.detect(video, gotResults);
        for (i=0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects Detected Are: "+ objects.length;


            fill("red");
            percent = floor(objects[i].confidence *100);
            text(objects[i].label + " "+percent+"%", objects[i].x + 200, objects[i].y +15);
            noFill();
            stroke("#red");
            rect (objects[i].x+200, objects[i].y+10, objects[i].width, objects[i].height);
        }
    }
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}