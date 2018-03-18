//学习五个原则（可用、健壮、可靠、宽容、精益求精）变成你自己的开发习惯
//可用：它最核心的、最低的要求
//健壮：最基本的兼容性处理、边界处理，异常处理、用户输入校验。
//可靠: 尽可能在任何情况下，都返回一个可靠的结果。
//宽容：对需求宽容、对用户宽容、对调用者宽容（其他类型的数字是否支持）、对维护者宽容（注释，调整代码）

//题目：编写一个javscript函数 fn，该函数有一个参数 n（数字类型），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。

//获取一个随机数并插入数组
function getARandomIntoArray(arr, start, end) {

	var random = getRandom(start, end);
	random = Math.floor(random);

	var sameNum = 0;
	arr.forEach(function(e) {
		if (e == random) {
			sameNum++;
		}
	})

	if (sameNum > 0) {
		console.log("has same");
		console.log(random);
	} else {
		arr.push(random);
	}

	return arr
}

//获取范围从start到end 的随机数
function getRandom(start, end) {
	var a = end - start + 1;
	return Math.random() * a + start;
}

//判断输入 n 是否数字类型
function checkIsNum(n) {
	if (typeof(n) == "number") {
		return true;
	} else {
		return false;
	}
}
//判断输入 n 是否整型
function checkIsInteger(n) {
	if (n != undefined) {
		var result = (n.toString()).indexOf(".");
		if (result == -1) {
			return true;
		} else {
			return false;
		}
	}
}

function fn(n, start = 2, end = 32) {
	//判断输入 n 是否符合
	checkIsNum(n);
	checkIsInteger(n);
	if (n == undefined) {
		console.log("请输入参数");
		return;
	} else {
		if (checkIsNum(n) && checkIsInteger(n)) {
			//获取一个长度为n的数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]
			var arr = new Array();
			var times = n;
			//循环直到数组长度等于n
			while (arr.length < times) {
				//获取一个随机数并插入数组
				getARandomIntoArray(arr, start, end);
			}

			return arr;
		} else {
			console.log("请输入整型数字");
			return;
		}
	}

}

var randomArr = fn(5);
console.log(randomArr);