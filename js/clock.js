var canvas = document.getElementById('clock');
var clock = canvas.getContext('2d');
function drowClock(){
	//清除画布
	clock.clearRect(0, 0, 800, 800);
	var now = new Date();
	var secd = now.getSeconds();
	var min = now.getMinutes();
	var hour = now.getHours();
	//小时必须获取浮点类型（小时+分数转化的小时）
	//时间格式19:23:30
	//将24小时进制装换为12小时进制
	hour = hour + (min / 60);
	hour = hour > 12 ? hour - 12 : hour;
	//背景
	clock.beginPath();
	clock.lineWidth = 10;
	clock.strokeStyle = "blue";
	clock.arc(250, 250, 200, 0, 360, false);
	clock.stroke();
	clock.closePath();
	//刻度
	//时刻度
	for (var i = 0; i < 12; i++) {
		clock.save();
		//设置时针的粗细
		clock.lineWidth = 7;
		//设置时针的颜色
		clock.strokeStyle = "#000";
		//先设置0,0点
		clock.translate(250, 250);
		//再设置旋转角度
		clock.rotate((i * 30) * Math.PI / 180);//角度*Math.PI/180=弧度
		clock.beginPath();
		clock.moveTo(0, -170);
		clock.lineTo(0, -190);
		clock.closePath();
		clock.stroke();
		clock.restore();
	}
	//分刻度
	for (var i = 0; i < 60; i++) {
		clock.save();
		//设置时针的粗细
		clock.lineWidth = 3;
		//设置时针的颜色
		clock.strokeStyle = "#000";
		//先设置0,0点
		clock.translate(250, 250);
		//再设置旋转角度
		clock.rotate((i * 6) * Math.PI / 180);//角度*Math.PI/180=弧度
		clock.beginPath();
		clock.moveTo(0, -180);
		clock.lineTo(0, -190);
		clock.closePath();
		clock.stroke();
		clock.restore();
	}
	//时针
	clock.save();
	clock.lineWidth = 7;
	clock.strokeStyle = "black";
	clock.translate(250, 250);
	clock.rotate(hour * 30 * Math.PI / 180);
	clock.beginPath();
	clock.moveTo(0, -140);
	clock.lineTo(0, 10);
	clock.stroke();
	clock.closePath();
	clock.restore();
	////分针
	clock.save();
	clock.lineWidth = 5;
	clock.strokeStyle = "black";
	clock.translate(250, 250);
	clock.rotate(min * 6 * Math.PI / 180);
	clock.beginPath();
	clock.moveTo(0, -160);
	clock.lineTo(0, 10);
	clock.stroke();
	clock.closePath();
	clock.restore();
	//秒针
	clock.save();
	clock.lineWidth = 3;
	clock.strokeStyle = "red";
	clock.translate(250, 250);
	clock.rotate(secd * 6 * Math.PI / 180);
	clock.beginPath();
	clock.moveTo(0, -170);
	clock.lineTo(0, 10);
	clock.closePath();
	clock.stroke();
	//画交叉点
	clock.beginPath();
	clock.arc(0, 0, 5, 0, 360, false);
	clock.closePath();
	clock.fillStyle = "gray";
	clock.fill();
	clock.stroke();
	clock.beginPath();
	clock.arc(0, -150, 5, 0, 360, false);
	clock.closePath();
	clock.fillStyle = "gray";
	clock.fill();
	clock.stroke();
	clock.restore();
}
//使用setInternal（代码，（毫秒）时间）  让时钟动起来
drowClock();
setInterval(drowClock, 1000);