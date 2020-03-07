/*
* @Author: Administrator
* @Date:   2020-02-24 18:13:42
* @Last Modified by:   Administrator
* @Last Modified time: 2020-02-24 18:14:09
*/
var wave=document.getElementById('waves');
var ctx=wave.getContext('2d');
var my_gradient=ctx.createLinearGradient(0,0,0,256);
var Sin = Math.sin;
var sp1=0;
var sp2=0;
var sp3=0;
var dx;
var dy;
my_gradient.addColorStop(0,"#0378d2");
my_gradient.addColorStop(0.6,"#57b4fc");
my_gradient.addColorStop(1,"#55b2fb");

function render(){
	ctx.clearRect(0,0,1400,256);
	ctx.fillStyle=my_gradient;
	ctx.fillRect(0,0,1400,256);
	ctx.save();
	ctx.beginPath();
	for(let i=0;i<300;i+=0.01){
		dx=i*35;
		dy=Sin(i-sp1)*40+50;
		ctx.lineTo(dx,dy)
	}
	ctx.lineWidth=0.3;
	ctx.strokeStyle="#f9f9f9";
	ctx.stroke();
	ctx.beginPath();
	for(let i=0;i<300;i+=0.01){
		dx=i*26;
		dy=Sin(i-sp2)*45+90;
		ctx.lineTo(dx,dy)
	}
	ctx.stroke();
	ctx.beginPath();
	for(let i=0;i<300;i+=0.01){
		dx=i*17;
		dy=Sin(i-sp3)*26+60;
		ctx.lineTo(dx,dy)
	}
	ctx.stroke();
	sp1+=0.01;
	sp2+=0.03;
	sp3+=0.04;
	requestAnimationFrame(render)
}
render()