
var dom=document.getElementById("clock");
var ctx=dom.getContext("2d");
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;
var rem=width/192;
//画表盘
function draw(){
    ctx.save();
    ctx.translate(r,r);
    ctx.beginPath();
    ctx.lineWidth=10*rem;
    ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
    ctx.stroke();
    //画小时数
    var hourNumber=[3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font=19*rem+"px Arial";
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    hourNumber.forEach(function(number,i){
        var rad=2*Math.PI/12*i;
        var x=Math.cos(rad)*(r-30*rem);
        var y=Math.sin(rad)*(r-30*rem);
        ctx.fillText(number,x,y);
    });
    //画表盘的60个点
    for(var j=0;j<60;j++){
        var rad=2*Math.PI/60*j;
        var x=Math.cos(rad)*(r-18*rem);
        var y=Math.sin(rad)*(r-18*rem);
        ctx.beginPath();
        if(j%5===0){
            ctx.fillStyle="#000";
            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
        }
        else{
            ctx.fillStyle="#ccc";
            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
        }
        ctx.fill();
    }
}

//画时针
function drawHour(hour,minute){
    ctx.save();
    var rad=2*Math.PI/12*hour;
    var mard=2*Math.PI/12/60*minute;
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.rotate(rad+mard);
    ctx.lineWidth=6*rem;
    ctx.moveTo(0,5*rem);
    ctx.lineTo(0,-r/2);
    ctx.stroke();
    ctx.restore();
}

//画分针
function drawMinute(minute){
    ctx.save();
    var rad=2*Math.PI/60*minute;
    ctx.beginPath();
    ctx.lineCap="round";
    ctx.rotate(rad);
    ctx.lineWidth=3*rem;
    ctx.moveTo(0,10*rem);
    ctx.lineTo(0,-r+30*rem);
    ctx.stroke();
    ctx.restore();
}

//画秒针
function drawSecond(second){
    ctx.save();
    ctx.beginPath();
    var rad=2*Math.PI/60*second;
    ctx.strokeStyle="#C14543";
    ctx.lineCap="round";
    ctx.rotate(rad);
    ctx.lineWidth=2*rem;
    ctx.moveTo(0,15*rem);
    ctx.lineTo(0,-r+20*rem);
    ctx.stroke();
    ctx.restore();
}
//画圆心
function drawDot(){
    ctx.beginPath();
    ctx.fillStyle="#fff";
    ctx.arc(0,0,3*rem,2*Math.PI,false);
    ctx.fill();
}
//动画
function actionDarw(){
    ctx.clearRect(0,0,width,height);
    var now=new Date;
    var h=now.getHours();
    var m=now.getMinutes();
    var s=now.getSeconds();
    draw();
    drawHour(h,m);
    drawMinute(m);
    drawSecond(s);
    drawDot();
    ctx.restore();
}
actionDarw();
setInterval(actionDarw,1000);

//倒计时
setInterval(function(){
    var nowtime=new Date;
    var year=nowtime.getFullYear();
    var month=nowtime.getMonth()+1;
    var day=nowtime.getDate();
    var hours=nowtime.getHours();
    var minutes=nowtime.getMinutes();
    var second=nowtime.getSeconds();
    var timeInputs=document.getElementById("graduate").getElementsByTagName("input");
    timeInputs.item(0).value=2017-year;
    if(month>7) {
        timeInputs.item(1).value=7+12-month;
    }else {
        timeInputs.item(1).value=7-month;
    }
    if(day>1){
        timeInputs.item(2).value=1+30-day;
    }else{
        timeInputs.item(2).value=1-day;
    }
    timeInputs.item(3).value=24-hours;
    timeInputs.item(4).value=60-minutes;
    timeInputs.item(5).value=60-second;
},1000);

