var firstNum = prompt ("what is your first number");
var operator = prompt ("what operator would you like to use");
var secondNum = prompt ("what is your second number");
function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}
function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}
function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}
function sum(firsNum, secondNum) {
    return firstNum + secondNum;
}
if(operator == "+"){
    console.log(addition(parseFloat(firstNum),parseFloat(secondNum)));
}
else if(operator == "-"){
    console.log(subtraction(parseFloat(firstNum),parseFloat(secondNum)));
}
else if(operator == "*"){
    console.log(multiplication(parseFloat(firstNum),parseFloat(secondNum)));
}
else if(operator == "/"){
    console.log(division(parseFloat(firstNum),parseFloat(secondNum)));
}
else{
    console.log("this is not a symbol")
}