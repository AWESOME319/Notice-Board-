difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,450);
    canvas.position(560,70);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    textSize(difference)
}
function draw(){
    background('#2a7ce8');
    fill('#050505');
    text('This month many things will be happening. We have a food drive which starts on November 14.',20,100);
 }
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX +"difference = " + difference)
    }
}
