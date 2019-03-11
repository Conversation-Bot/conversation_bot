var a = prompt("Type your first number");
var z = prompt("Type your second number");
var oper = prompt("Okay. What operation should I use? Note: type the actual sign, either +, -, √, ^, *, /, %");
if (oper === "*") {
        alert( "The answer is " a * z );
} if (oper === "+") {
        alert( "The answer is " a - -z );
} if (oper === "-") {
        alert( "The answer is " a - z );
} if (oper === "/") {
        alert( "The answer is " a / z );
} if (oper === "+") {
        alert( "The answer is " a - -z );
} if (oper === "√") {
        alert( "The answer is " Math.sqrt(a, z) );
} if (oper === "%") {
        alert( "The answer is " a % z );
} if (oper === "^") {
        alert( "The answer is " Math.pow(a, z) );
}