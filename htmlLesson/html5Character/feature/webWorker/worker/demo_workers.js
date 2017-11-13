var i = 0;

function timedCount() {
	i = i + 1;
	postMessage(i);  //传送数据
	setTimeout("timedCount()", 500);
}

timedCount();