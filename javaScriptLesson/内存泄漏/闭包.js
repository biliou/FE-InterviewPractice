function numberGenerator(){
	var num = 1;
	
	function checkNumber(){
		return num;
	}
	
//	var checkNumber = function (){  //函数表达式
//		return num;
//	}
	
	num++;
	return checkNumber;
}

var fn = numberGenerator();
var number = fn(); 
consoe.log(number); //2
