console.log("Calculator Exercise")

// var operator = document.getElementById("plus").addEventListener("click", function(){
// 	getValues();
// 	return event.target.innerHTML;
// })


// var operator = document.getElementById("minus").addEventListener("click", function(){
// 	console.log ("event", event.target.innerHTML);
// 	return event.target.innerHTML;
// })
// var operator = document.getElementById("multiply").addEventListener("click", function(){
// 	console.log("event", event);
// 	return event.target.innerHTML;
// })
// var operator = document.getElementById("divide").addEventListener("click", function(){
// 	console.log("event", event);
// 	return event.target.innerHTML;
// })
var output;
var calculator;
	calculator = document.getElementById("body").addEventListener("click", function(){
	calculator = event.target.innerHTML;
	calculate(getValues()[0], getValues()[1], calculator)
	})

function calculate(value1, value2, calculator){
	if (calculator === "+"){
		var output = addValues(value1, value2);
		document.getElementById("output").innerHTML = output;
}
	else if (calculator === "-"){
		var output = minusValues(value1, value2);
		outputdiv = document.getElementById("output").innerHTML = output;
}
	else if (calculator === "*"){
		var output = multiplyValues(value1, value2);
		outputdiv = document.getElementById("output").innerHTML = output;
}
	else if (calculator === "/"){
		var output = divideValues(value1, value2);
		outputdiv = document.getElementById("output").innerHTML = output;
}
	else{
	}
}
function getValues(event){
	var values = [document.getElementById("number1").value, document.getElementById("number2").value];
	return values;
}
function multiplyValues(value1, value2){
	return value1 * value2;
}

function addValues(value1, value2){
	return +value1 + +value2;
}

function minusValues(value1, value2){
	return value1 - value2;
}

function divideValues(value1, value2){
	return value1 / value2;
}

// function calculate(value1, value2, operator){
// 	if 

// }
