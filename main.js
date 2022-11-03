function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,450);
    canvas.position(560,70);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#2a7ce8');
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
    }
}