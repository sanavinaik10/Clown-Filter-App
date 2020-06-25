nosex=0;
nosey=0;
function preload(){
    clown_nose = loadImage("https://i.postimg.cc/JnW36G9L/nose2.png");
}
function setup(){
    canvas = createCanvas(390,355);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(390,355);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',getPoses);
}
function draw(){
    image(video,0,0,390,355);
    /*
    fill(194, 255, 195);
    rect(50,45,300,10);
    rect(50,325,300,10);
    fill(119, 64, 247);
    circle(50,50,30);
    circle(350,330,30);
    fill(0, 0, 255);
    rect(50,175,25,25);
    rect(332,177,25,25);
    */
    /*fill(255,0,0);
    circle(nosex,nosey,20);*/
    image(clown_nose,nosex,nosey,50,50);
    
}
function modelLoaded(){
    console.log("PoseNet is loaded");
}
function take_snapshot(){
    save("myFilterImage.png");
}
function getPoses(results){
    if(results.length > 0){
        console.log(results);  
        nosex = results[0].pose.nose.x-15;
        nosey = results[0].pose.nose.y-15;
        console.log(nosex);
        console.log(nosey);
    }
}