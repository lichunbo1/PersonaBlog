/**
 * Created by 波哥你好 on 2017/2/3.
 */
/*canvas时钟*/
var dom=document.getElementById('clock');
var ctx=dom.getContext("2d");
var width=ctx.canvas.width;
var height=ctx.canvas.height;
var r=width/2;
/*画表盘*/
function draw(){
    ctx.save();
    ctx.translate(r,r)
}
