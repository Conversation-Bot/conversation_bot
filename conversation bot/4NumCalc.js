var nums = prompt("How many numbers? Max 4, min is 2.");
if (nums == 2) {
var oper1 = prompt("What operation should I use? Options: - (minus), * (multiply), % (modulo), / (divide),  √ (square root), ^ (exponent).");
var a = prompt("What should the first number be?");
var b = prompt("What should the second number be?");
if (oper1 == "-") {
var h = function minus(a, b) {
return a - b;
}
;alert(a - b);
}
if (oper1 == "*") {
var h = function multiply(a, b) {
return a * b;
}
;alert(a * b);
}
if (oper1 == "%") {
var h = function modulo(a, b) {
return a % b;
}
;alert(a % b);
}
if (oper1 == "/") {
var h = function divide(a, b) {
return a / b;
}
;alert(a / b);
}
if (oper1 == "√") {
var h = function sqrt(a, b) {
return Math.sqrt(a, b);
}
;alert(Math.sqrt(a, b));
}
if (oper1 == "^") {
var h = function pow(a, b) {
return Math.pow(a, b);
}
;alert(Math.pow(a, b));
}
}
if (nums == 3) {
var oper1 = prompt("What operation should I use between the first and second numbers? Options: - (minus), * (multiply), % (modulo), / (divide),  √ (square root), ^ (exponent).");
var oper2 = prompt("What operation should I use between the second and third numbers? Options: - (minus), * (multiply), % (modulo), / (divide),  √ (square root), ^ (exponent).");
var a = prompt("What should the first number be?");
var b = prompt("What should the second number be?"); 
var c = prompt("What should the third number be?");
if (oper1 == "-") {
if (oper2 == "-") {
var h = function minusMinus(a, b, c) {
return a - b - c;
}; alert(a - b - c);
}
if (oper2 == "*") {
var h = function minusMultiply(a, b, c) {
return a - b * c
;}; alert(a - b * c)
;}
if (oper2 == "%" ){
var h = function minusModulo(a, b, c) {
return a - b % c
;}; alert(a - b % c);
}}
if (oper2 == "/"){
var h = function minusDivide(a, b, c) {
return a - b / c
;}; alert(a - b / c)
;}
if (oper2 == "√") {
var h = function minusSqrt(a, b, c) {
return a - (Math.pow(b, c))
;}; alert(a - (Math.pow(b, c)))
;}
if (oper2 == "^") {
var h = function minusPow(a, b, c) {
return a - (Math.pow(b, c))
;}; alert(a - (Math.pow(b, c)))
;} }
if (oper1 == "*") {
if (oper2 == "-") {
var h = function multiplyMinus(a, b, c) {
return a * b - c
;}; alert(a * b - c)
;}
if (oper2 == "*" ){
var h = function multiplyMultiply(a, b, c) {
return a * b * c
;}; alert(a * b * c)
;}
if (oper2 == "%" ){
var h = function multiplyModulo(a, b, c) {
return a * b % c
;}; alert(a * b % c)
;}
if (oper2 == "/" ){
var h = function multiplyDivide(a, b, c) {
return a * b / c
;}; alert(a * b / c)
;}
if (oper2 == "√" ){
var h = function multiplySqrt(a, b, c) {
return a * (Math.pow(b, c))
;}; alert(a * (Math.pow(b, c)))
;}
if (oper2 == "^" ){
var h = function multiplyPow(a, b, c) {
return a * (Math.pow(b, c))
;}; alert(a * (Math.pow(b, c)))
;} }
if (oper1 == "%") {
if (oper2 == "-" ){
var h = function moduloMinus(a, b, c) {
return a % b - c
;}; alert(a % b - c)
;}
if (oper2 == "*" ){
var h = function moduloMultiply(a, b, c) {
return a % b * c
;}; alert(a % b * c)
;}
if (oper2 == "%") {
var h = function moduloModulo(a, b, c) {
return a % b % c
;}; alert(a % b % c)
;}
if (oper2 == "/") {
var h = function moduloDivide(a, b, c) {
return a % b / c
;}; alert(a % b / c)
;}
if (oper2 == "√") {
var h = function moduloSqrt(a, b, c) {
return a % (Math.pow(b, c))
;}; alert(a % (Math.pow(b, c)))
;}
if (oper2 == "^") {
var h = function moduloPow(a, b, c) {
return a % (Math.pow(b, c))
;}; alert(a % (Math.pow(b, c)))
;} }
if (oper1 == "/") {
if (oper2 == "-") {
var h = function divideMinus(a, b, c) {
return a / b - c
;}; alert(a / b - c)
;}
if (oper2 == "*") {
var h = function divideMultiply(a, b, c) {
return a / b * c
;}; alert(a / b * c)
;}
if (oper2 == "%") {
var h = function divideModulo(a, b, c) {
return a / b % c
;}; alert(a / b % c)
;}
if (oper2 == "/") {
var h = function divideDivide(a, b, c) {
return a / b / c
;}; alert(a / b / c)
;}
if (oper2 == "√") {
var h = function divideSqrt(a, b, c) {
return a / (Math.pow(b, c))
;}; alert(a / (Math.pow(b, c)))
;}
if (oper2 == "^") {
var h = function dividePow(a, b, c) {
return a / (Math.pow(b, c))
;}; alert(a / (Math.pow(b, c)))
;} }
if (oper1 == "^") {
if (oper2 == "-") {
var h = function powMinus(a, b, c) {
return Math.pow(a, b) - c
;}; alert(Math.pow(a, b) - c)
;}
if (oper2 == "*") {
var h = function powMultiply(a, b, c) {
return Math.pow(a, b) * c
;}; alert(Math.pow(a, b) * c)
;}
if (oper2 == "%") {
var h = function powModulo(a, b, c) {
return Math.pow(a, b) % c
;}; alert(Math.pow(a, b) % c)
;}
if (oper2 == "/") {
var h = function powDivide(a, b, c) {
return Math.pow(a, b) / c
;}; alert(Math.pow(a, b) / c)
;}
if (oper2 == "√") {
var h = function powSqrt(a, b, c) {
return Math.pow(a, (Math.pow(b, c)))
;}; alert(Math.pow(a, (Math.pow(b, c))))
;}
if (oper2 == "^") {
var h = function powPow(a, b, c) {
return Math.pow(a, (Math.pow(b, c)))
;}; alert(Math.pow(a, (Math.pow(b, c))))
;} }
if (oper1 == "√") {
if (oper2 == "-") {
var h = function sqrtMinus(a, b, c) {
return Math.sqrt(a, b) - c
;}; alert(Math.sqrt(a, b) - c)
;}
if (oper2 == "*") {
var h = function sqrtMultiply(a, b, c) {
return Math.sqrt(a, b) * c
;}; alert(Math.sqrt(a, b) * c)
;}
if (oper2 == "%") {
var h = function sqrtModulo(a, b, c) {
return Math.sqrt(a, b) % c
;}; alert(Math.sqrt(a, b) % c)
;}
if (oper2 == "/") {
var h = function sqrtDivide(a, b, c) {
return Math.sqrt(a, b) / c
;}; alert(Math.sqrt(a, b) / c)
;}
if (oper2 == "√") {
var h = function sqrtSqrt(a, b, c) {
return Math.sqrt(a, (Math.pow(b, c)))
;}; alert(Math.sqrt(a, (Math.pow(b, c))))
;}
if (oper2 == "^") {
var h = function dividePow(a, b, c) {
return Math.sqrt(a, (Math.pow(b, c)));
}; alert(Math.sqrt(a, (Math.pow(b, c)))) ;} } 
if (nums == 4) {
var a = prompt("What should the first number be?")
;var b = prompt("What should the second number be?")
;var c = prompt("What should the third number be?")
;var d = prompt("What should the fourth number be?")
;var oper1 = prompt("What should the operator between the first and second numbers be? Options: - (minus), * (multiply), % (modulo), / (divide),  √ (square root), ^ (exponent).")
;var oper2 = prompt("What should the operator between the second and third numbers be? Options: - (minus), * (multiply), % (modulo), / (divide),  √ (square root), ^ (exponent).")
;var oper3 = prompt("What should the operator between the third and fourth numbers be? Options: - (minus), * (multiply), % (modulo), / (divide),  √ (square root), ^ (exponent).")
;if (oper1 == "-") {
if (oper2 == "-") {
if (oper3 == "-") {
var h = function minusMinusMINUS(a, b, c, d) {
return a - b - c - d
;}; alert(a - b - c - d)
;} if (oper3 == "*") {
var h = function minusMinusMULTIPLY(a, b, c, d) {
return a - b - c * d
;}; alert(a - b - c * d)
;} if (oper3 == "%") {
var h = function minusMinusMODULO(a, b, c, d) {
return a - b - c % d
;}; alert(a - b - c % d)
;} if (oper3 == "/") {
var h = function minusMinusDIVIDE(a, b, c, d) {
return a - b - c / d
;}; alert(a - b - c / d)
;} if (oper3 == "√") {
var h = function minusMinusSQRT(a, b, c, d) {
return a - b - Math.sqrt(c, d)
;}; alert(a - b - Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function minusMinusPOW(a, b, c, d) {
return a - b - Math.pow(c, d)
;}; alert(a - b - Math.pow(c, d))
;} } if (oper2 == "*") {
if (oper3 == "-") {
var h = function minusMultiplyMINUS(a, b, c, d) {
return a - b * c - d
;}; alert(a - b * c - d)
;} if (oper3 == "*") {
var h = function minusMultiplyMULTIPLY(a, b, c, d) {
return a - b * c * d
;}; alert(a - b * c * d)
;} if (oper3 == "%") {
var h = function minusMultiplyMODULO(a, b, c, d) {
return a - b * c % d
;}; alert(a - b * c % d)
;} if (oper3 == "/") {
var h = function minusMultiplyDIVIDE(a, b, c, d) {
return a - b * c / d
;}; alert(a - b * c / d)
;} if (oper3 == "√") {
var h = function minusMultiplySQRT(a, b, c, d) {
return a - b * Math.sqrt(c, d)
;}; alert(a - b * Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function minusMultiplyPOW(a, b, c, d) {
return a - b * Math.pow(c, d)
;}; alert(a - b * Math.pow(c, d))
;} } if (oper2 == "%") {
if (oper3 == "-") {
var h = function minusModuloMINUS(a, b, c, d) {
return a - b % c - d
;}; alert(a - b % c - d)
;} if (oper3 == "*") {
var h = function minusModuloMULTIPLY(a, b, c, d) {
return a - b % c * d
;}; alert(a - b % c * d)
;} if (oper3 == "%") {
var h = function minusModuloMODULO(a, b, c, d) {
return a - b % c % d
;}; alert(a - b % c % d)
;} if (oper3 == "/") {
var h = function minusModuloDIVIDE(a, b, c, d) {
return a - b % c / d
;}; alert(a - b % c / d)
;} if (oper3 == "√") {
var h = function minusModuloSQRT(a, b, c, d) {
return a - b % Math.sqrt(c, d)
;}; alert(a - b % Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function minusMinusPOW(a, b, c, d) {
return a - b % Math.pow(c, d)
;}; alert(a - b % Math.pow(c, d))
;} } if (oper2 == "/") {
if (oper3 == "-") {
var h = function minusDivideMINUS(a, b, c, d) {
return a - b / c - d
;}; alert(a - b / c - d)
;} if (oper3 == "*") {
var h = function minusDivideMULTIPLY(a, b, c, d) {
return a - b / c * d
;}; alert(a - b / c * d)
;} if (oper3 == "%") {
var h = function minusDivideMODULO(a, b, c, d) {
return a - b / c % d
;}; alert(a - b / c % d)
;} if (oper3 == "/") {
var h = function minusDivideDIVIDE(a, b, c, d) {
return a - b / c / d
;}; alert(a - b / c / d)
;} if (oper3 == "√") {
var h = function minusDivideSQRT(a, b, c, d) {
return a - b / Math.sqrt(c, d)
;}; alert(a - b / Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function minusDividePOW(a, b, c, d) {
return a - b / Math.pow(c, d)
;}; alert(a - b / Math.pow(c, d))
;} } if (oper2 == "^") {
if (oper3 == "-") {
var h = function minusPowMINUS(a, b, c, d) {
return a - Math.pow(b, (c - d))
;}; alert(a - Math.pow(b, (c - d)))
;} if (oper3 == "*") {
var h = function minusPowMULTIPLY(a, b, c, d) {
return a - Math.pow(b, (c * d))
;}; alert(a - Math.pow(b, (c * d)))
;} if (oper3 == "%") {
var h = function minusPowMODULO(a, b, c, d) {
return a - Math.pow(b, (c % d))
;}; alert(a - Math.pow(b, (c % d)))
;} if (oper3 == "/") {
var h = function minusPowDIVIDE(a, b, c, d) {
return a - Math.pow(b, (c / d))
;}; alert(a - Math.pow(b, (c / d)))
;} if (oper3 == "√") {
var h = function minusPowSQRT(a, b, c, d) {
return a - Math.pow(b, (Math.sqrt(c, d)))
;}; alert(a - Math.pow(b, (Math.sqrt(c, d))))
;} if (oper3 == "^") {
var h = function minusPowPOW(a, b, c, d) {
return a - Math.sqrt(b, (Math.pow(c, d)))
;}; alert(a - Math.sqrt(b, (Math.pow(c, d))))
;} } } 


if (oper1 == "*") {
if (oper2 == "-") {
if (oper3 == "-") {
var h = function multiplyMinusMINUS(a, b, c, d) {
return a * b - c - d
;}; alert(a * b - c - d)
;} if (oper3 == "*") {
var h = function multiplyMinusMULTIPLY(a, b, c, d) {
return a * b - c * d
;}; alert(a * b - c * d)
;} if (oper3 == "%") {
var h = function MultiplyMinusMODULO(a, b, c, d) {
return a * b - c % d
;}; alert(a * b - c % d)
;} if (oper3 == "/") {
var h = function multiplyMinusDIVIDE(a, b, c, d) {
return a * b - c / d
;}; alert(a * b - c / d)
;} if (oper3 == "√") {
var h = function multiplyMinusSQRT(a, b, c, d) {
return a * b - Math.sqrt(c, d)
;}; alert(a * b - Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function multiplyMinusPOW(a, b, c, d) {
return a * b - Math.pow(c, d)
;}; alert(a * b - Math.pow(c, d))
;} } if (oper2 == "*") {
if (oper3 == "-") {
var h = function MultiplyMultiplyMINUS(a, b, c, d) {
return a * b * c - d
;}; alert(a * b * c - d)
;} if (oper3 == "*") {
var h = function multiplyMultiplyMULTIPLY(a, b, c, d) {
return a * b * c * d
;}; alert(a * b * c * d)
;} if (oper3 == "%") {
var h = function multiplyMultiplyMODULO(a, b, c, d) {
return a * b * c % d
;}; alert(a * b * c % d)
;} if (oper3 == "/") {
var h = function multiplyMultiplyDIVIDE(a, b, c, d) {
return a * b * c / d
;}; alert(a * b * c / d)
;} if (oper3 == "√") {
var h = function multiplyMultiplySQRT(a, b, c, d) {
return a * b * Math.sqrt(c, d)
;}; alert(a * b * Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function multiplyMultiplyPOW(a, b, c, d) {
return a * b * Math.pow(c, d)
;}; alert(a * b * Math.pow(c, d))
;} } if (oper2 == "%") {
if (oper3 == "-") {
var h = function multiplyModuloMINUS(a, b, c, d) {
return a * b % c - d
;}; alert(a * b % c - d)
;} if (oper3 == "*") {
var h = function multiplyModuloMULTIPLY(a, b, c, d) {
return a * b % c * d
;}; alert(a * b % c * d)
;} if (oper3 == "%") {
var h = function multiplyModuloMODULO(a, b, c, d) {
return a * b % c % d
;}; alert(a * b % c % d)
;} if (oper3 == "/") {
var h = function multiplyModuloDIVIDE(a, b, c, d) {
return a * b % c / d
;}; alert(a * b % c / d)
;} if (oper3 == "√") {
var h = function multiplyModuloSQRT(a, b, c, d) {
return a * b % Math.sqrt(c, d)
;}; alert(a * b % Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function multiplyMinusPOW(a, b, c, d) {
return a * b % Math.pow(c, d)
;}; alert(a * b % Math.pow(c, d))
;} } if (oper2 == "/") {
if (oper3 == "-") {
var h = function multiplyDivideMINUS(a, b, c, d) {
return a * b / c - d
;}; alert(a * b / c - d)
;} if (oper3 == "*") {
var h = function multiplyDivideMULTIPLY(a, b, c, d) {
return a * b / c * d
;}; alert(a * b / c * d)
;} if (oper3 == "%") {
var h = function multiplyDivideMODULO(a, b, c, d) {
return a * b / c % d
;}; alert(a * b / c % d)
;} if (oper3 == "/") {
var h = function multiplyDivideDIVIDE(a, b, c, d) {
return a * b / c / d
;}; alert(a * b / c / d)
;} if (oper3 == "√") {
var h = function multiplyDivideSQRT(a, b, c, d) {
return a * b / Math.sqrt(c, d)
;}; alert(a * b / Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function multiplyDividePOW(a, b, c, d) {
return a * b / Math.pow(c, d)
;}; alert(a * b / Math.pow(c, d))
;} } if (oper2 == "^") {
if (oper3 == "-") {
var h = function multiplyPowMINUS(a, b, c, d) {
return a * Math.pow(b, (c - d))
;}; alert(a * Math.pow(b, (c - d)))
;} if (oper3 == "*") {
var h = function multiplyPowMULTIPLY(a, b, c, d) {
return a * Math.pow(b, (c * d))
;}; alert(a * Math.pow(b, (c * d)))
;} if (oper3 == "%") {
var h = function multiplyPowMODULO(a, b, c, d) {
return a * Math.pow(b, (c % d))
;}; alert(a * Math.pow(b, (c % d)))
;} if (oper3 == "/") {
var h = function multiplyPowDIVIDE(a, b, c, d) {
return a * Math.pow(b, (c / d))
;}; alert(a * Math.pow(b, (c / d)))
;} if (oper3 == "√") {
var h = function multiplyPowSQRT(a, b, c, d) {
return a * Math.pow(b, (Math.sqrt(c, d)))
;}; alert(a * Math.pow(b, (Math.sqrt(c, d))))
;} if (oper3 == "^") {
var h = function multiplyPowPOW(a, b, c, d) {
return a * Math.sqrt(b, (Math.pow(c, d)))
;}; alert(a * Math.sqrt(b, (Math.pow(c, d))))
;} } }


if (oper1 == "%") {
if (oper2 == "-") {
if (oper3 == "-") {
var h = function moduloMinusMINUS(a, b, c, d) {
return a % b - c - d
;}; alert(a % b - c - d)
;} if (oper3 == "*") {
var h = function moduloMinusMULTIPLY(a, b, c, d) {
return a % b - c * d
;}; alert(a % b - c * d)
;} if (oper3 == "%") {
var h = function MultiplyMinusMODULO(a, b, c, d) {
return a % b - c % d
;}; alert(a % b - c % d)
;} if (oper3 == "/") {
var h = function moduloMinusDIVIDE(a, b, c, d) {
return a % b - c / d
;}; alert(a % b - c / d)
;} if (oper3 == "√") {
var h = function moduloMinusSQRT(a, b, c, d) {
return a % b - Math.sqrt(c, d)
;}; alert(a % b - Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function moduloMinusPOW(a, b, c, d) {
return a % b - Math.pow(c, d)
;}; alert(a % b - Math.pow(c, d))
;} } if (oper2 == "*") {
if (oper3 == "-") {
var h = function MultiplyMultiplyMINUS(a, b, c, d) {
return a % b * c - d
;}; alert(a % b * c - d)
;} if (oper3 == "*") {
var h = function moduloMultiplyMULTIPLY(a, b, c, d) {
return a % b * c * d
;}; alert(a % b * c * d)
;} if (oper3 == "%") {
var h = function moduloMultiplyMODULO(a, b, c, d) {
return a % b * c % d
;}; alert(a % b * c % d)
;} if (oper3 == "/") {
var h = function moduloMultiplyDIVIDE(a, b, c, d) {
return a % b * c / d
;}; alert(a % b * c / d)
;} if (oper3 == "√") {
var h = function moduloMultiplySQRT(a, b, c, d) {
return a % b * Math.sqrt(c, d)
;}; alert(a % b * Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function moduloMultiplyPOW(a, b, c, d) {
return a % b * Math.pow(c, d)
;}; alert(a % b * Math.pow(c, d))
;} } if (oper2 == "%") {
if (oper3 == "-") {
var h = function moduloModuloMINUS(a, b, c, d) {
return a % b % c - d
;}; alert(a % b % c - d)
;} if (oper3 == "*") {
var h = function moduloModuloMULTIPLY(a, b, c, d) {
return a % b % c * d
;}; alert(a % b % c * d)
;} if (oper3 == "%") {
var h = function moduloModuloMODULO(a, b, c, d) {
return a % b % c % d
;}; alert(a % b % c % d)
;} if (oper3 == "/") {
var h = function moduloModuloDIVIDE(a, b, c, d) {
return a % b % c / d
;}; alert(a % b % c / d)
;} if (oper3 == "√") {
var h = function moduloModuloSQRT(a, b, c, d) {
return a % b % Math.sqrt(c, d)
;}; alert(a % b % Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function moduloMinusPOW(a, b, c, d) {
return a % b % Math.pow(c, d)
;}; alert(a % b % Math.pow(c, d))
;} } if (oper2 == "/") {
if (oper3 == "-") {
var h = function moduloDivideMINUS(a, b, c, d) {
return a % b / c - d
;}; alert(a % b / c - d)
;} if (oper3 == "*") {
var h = function moduloDivideMULTIPLY(a, b, c, d) {
return a % b / c * d
;}; alert(a % b / c * d)
;} if (oper3 == "%") {
var h = function moduloDivideMODULO(a, b, c, d) {
return a % b / c % d
;}; alert(a % b / c % d)
;} if (oper3 == "/") {
var h = function moduloDivideDIVIDE(a, b, c, d) {
return a % b / c / d
;}; alert(a % b / c / d)
;} if (oper3 == "√") {
var h = function moduloDivideSQRT(a, b, c, d) {
return a % b / Math.sqrt(c, d)
;}; alert(a % b / Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function moduloDividePOW(a, b, c, d) {
return a % b / Math.pow(c, d)
;}; alert(a % b / Math.pow(c, d))
;} } if (oper2 == "^") {
if (oper3 == "-") {
var h = function moduloPowMINUS(a, b, c, d) {
return a % Math.pow(b, (c - d))
;}; alert(a % Math.pow(b, (c - d)))
;} if (oper3 == "*") {
var h = function moduloPowMULTIPLY(a, b, c, d) {
return a % Math.pow(b, (c * d))
;}; alert(a % Math.pow(b, (c * d)))
;} if (oper3 == "%") {
var h = function moduloPowMODULO(a, b, c, d) {
return a % Math.pow(b, (c % d))
;}; alert(a % Math.pow(b, (c % d)))
;} if (oper3 == "/") {
var h = function moduloPowDIVIDE(a, b, c, d) {
return a % Math.pow(b, (c / d))
;}; alert(a % Math.pow(b, (c / d)))
;} if (oper3 == "√") {
var h = function moduloPowSQRT(a, b, c, d) {
return a % Math.pow(b, (Math.sqrt(c, d)))
;}; alert(a % Math.pow(b, (Math.sqrt(c, d))))
;} if (oper3 == "^") {
var h = function moduloPowPOW(a, b, c, d) {
return a % Math.sqrt(b, (Math.pow(c, d)))
;}; alert(a % Math.sqrt(b, (Math.pow(c, d))))
;} } }



if (oper1 == "/") {
if (oper2 == "-") {
if (oper3 == "-") {
var h = function divideMinusMINUS(a, b, c, d) {
return a / b - c - d
;}; alert(a / b - c - d)
;} if (oper3 == "*") {
var h = function divideMinusMULTIPLY(a, b, c, d) {
return a / b - c * d
;}; alert(a / b - c * d)
;} if (oper3 == "%") {
var h = function MultiplyMinusMODULO(a, b, c, d) {
return a / b - c % d
;}; alert(a / b - c % d)
;} if (oper3 == "/") {
var h = function divideMinusDIVIDE(a, b, c, d) {
return a / b - c / d
;}; alert(a / b - c / d)
;} if (oper3 == "√") {
var h = function divideMinusSQRT(a, b, c, d) {
return a / b - Math.sqrt(c, d)
;}; alert(a / b - Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function divideMinusPOW(a, b, c, d) {
return a / b - Math.pow(c, d)
;}; alert(a / b - Math.pow(c, d))
;} } if (oper2 == "*") {
if (oper3 == "-") {
var h = function MultiplyMultiplyMINUS(a, b, c, d) {
return a / b * c - d
;}; alert(a / b * c - d)
;} if (oper3 == "*") {
var h = function divideMultiplyMULTIPLY(a, b, c, d) {
return a / b * c * d
;}; alert(a / b * c * d)
;} if (oper3 == "%") {
var h = function divideMultiplyMODULO(a, b, c, d) {
return a / b * c % d
;}; alert(a / b * c % d)
;} if (oper3 == "/") {
var h = function divideMultiplyDIVIDE(a, b, c, d) {
return a / b * c / d
;}; alert(a / b * c / d)
;} if (oper3 == "√") {
var h = function divideMultiplySQRT(a, b, c, d) {
return a / b * Math.sqrt(c, d)
;}; alert(a / b * Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function divideMultiplyPOW(a, b, c, d) {
return a / b * Math.pow(c, d)
;}; alert(a / b * Math.pow(c, d))
;} } if (oper2 == "%") {
if (oper3 == "-") {
var h = function divideModuloMINUS(a, b, c, d) {
return a / b % c - d
;}; alert(a / b % c - d)
;} if (oper3 == "*") {
var h = function divideModuloMULTIPLY(a, b, c, d) {
return a / b % c * d
;}; alert(a / b % c * d)
;} if (oper3 == "%") {
var h = function divideModuloMODULO(a, b, c, d) {
return a / b % c % d
;}; alert(a / b % c % d)
;} if (oper3 == "/") {
var h = function divideModuloDIVIDE(a, b, c, d) {
return a / b % c / d
;}; alert(a / b % c / d)
;} if (oper3 == "√") {
var h = function divideModuloSQRT(a, b, c, d) {
return a / b % Math.sqrt(c, d)
;}; alert(a / b % Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function divideMinusPOW(a, b, c, d) {
return a / b % Math.pow(c, d)
;}; alert(a / b % Math.pow(c, d))
;} } if (oper2 == "/") {
if (oper3 == "-") {
var h = function divideDivideMINUS(a, b, c, d) {
return a / b / c - d
;}; alert(a / b / c - d)
;} if (oper3 == "*") {
var h = function divideDivideMULTIPLY(a, b, c, d) {
return a / b / c * d
;}; alert(a / b / c * d)
;} if (oper3 == "%") {
var h = function divideDivideMODULO(a, b, c, d) {
return a / b / c % d
;}; alert(a / b / c % d)
;} if (oper3 == "/") {
var h = function divideDivideDIVIDE(a, b, c, d) {
return a / b / c / d
;}; alert(a / b / c / d)
;} if (oper3 == "√") {
var h = function divideDivideSQRT(a, b, c, d) {
return a / b / Math.sqrt(c, d)
;}; alert(a / b / Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function divideDividePOW(a, b, c, d) {
return a / b / Math.pow(c, d)
;}; alert(a / b / Math.pow(c, d))
;} } if (oper2 == "^") {
if (oper3 == "-") {
var h = function dividePowMINUS(a, b, c, d) {
return a / Math.pow(b, (c - d))
;}; alert(a / Math.pow(b, (c - d)))
;} if (oper3 == "*") {
var h = function dividePowMULTIPLY(a, b, c, d) {
return a / Math.pow(b, (c * d))
;}; alert(a / Math.pow(b, (c * d)))
;} if (oper3 == "%") {
var h = function dividePowMODULO(a, b, c, d) {
return a / Math.pow(b, (c % d))
;}; alert(a / Math.pow(b, (c % d)))
;} if (oper3 == "/") {
var h = function dividePowDIVIDE(a, b, c, d) {
return a / Math.pow(b, (c / d))
;}; alert(a / Math.pow(b, (c / d)))
;} if (oper3 == "√") {
var h = function dividePowSQRT(a, b, c, d) {
return a / Math.pow(b, (Math.sqrt(c, d)))
;}; alert(a / Math.pow(b, (Math.sqrt(c, d))))
;} if (oper3 == "^") {
var h = function dividePowPOW(a, b, c, d) {
return a / Math.sqrt(b, (Math.pow(c, d)))
;}; alert(a / Math.sqrt(b, (Math.pow(c, d))))
;} } }




if (oper1 == "√") {
if (oper2 == "-") {
if (oper3 == "-") {
var h = function sqrtMinusMINUS(a, b, c, d) {
return Math.sqrt(a, b) - c - d
;}; alert(Math.sqrt(a, b) - c - d)
;} if (oper3 == "*") {
var h = function sqrtMinusMULTIPLY(a, b, c, d) {
return Math.sqrt(a, b) - c * d
;}; alert(Math.sqrt(a, b) - c * d)
;} if (oper3 == "%") {
var h = function sqrtMinusMODULO(a, b, c, d) {
return Math.sqrt(a, b) - c % d
;}; alert(Math.sqrt(a, b) - c % d)
;} if (oper3 == "/") {
var h = function sqrtMinusDIVIDE(a, b, c, d) {
return Math.sqrt(a, b) - c / d
;}; alert(Math.sqrt(a, b) - c / d)
;} if (oper3 == "√") {
var h = function sqrtMinusSQRT(a, b, c, d) {
return Math.sqrt(a, b) - Math.sqrt(c, d)
;}; alert(Math.sqrt(a, b) - Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function sqrtMinusPOW(a, b, c, d) {
return Math.sqrt(a, b) - Math.pow(c, d)
;}; alert(Math.sqrt(a, b) - Math.pow(c, d))
;} } if (oper2 == "*") {
if (oper3 == "-") {
var h = function MultiplyMultiplyMINUS(a, b, c, d) {
return Math.sqrt(a, b) * c - d
;}; alert(Math.sqrt(a, b) * c - d)
;} if (oper3 == "*") {
var h = function sqrtMultiplyMULTIPLY(a, b, c, d) {
return Math.sqrt(a, b) * c * d
;}; alert(Math.sqrt(a, b) * c * d)
;} if (oper3 == "%") {
var h = function sqrtMultiplyMODULO(a, b, c, d) {
return Math.sqrt(a, b) * c % d
;}; alert(Math.sqrt(a, b) * c % d)
;} if (oper3 == "/") {
var h = function sqrtMultiplyDIVIDE(a, b, c, d) {
return Math.sqrt(a, b) * c / d
;}; alert(Math.sqrt(a, b) * c / d)
;} if (oper3 == "√") {
var h = function sqrtMultiplySQRT(a, b, c, d) {
return Math.sqrt(a, b) * Math.sqrt(c, d)
;}; alert(Math.sqrt(a, b) * Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function sqrtMultiplyPOW(a, b, c, d) {
return Math.sqrt(a, b) * Math.pow(c, d)
;}; alert(Math.sqrt(a, b) * Math.pow(c, d))
;} } if (oper2 == "%") {
if (oper3 == "-") {
var h = function sqrtModuloMINUS(a, b, c, d) {
return Math.sqrt(a, b) % c - d
;}; alert(Math.sqrt(a, b) % c - d)
;} if (oper3 == "*") {
var h = function sqrtModuloMULTIPLY(a, b, c, d) {
return Math.sqrt(a, b) % c * d
;}; alert(Math.sqrt(a, b) % c * d)
;} if (oper3 == "%") {
var h = function sqrtModuloMODULO(a, b, c, d) {
return Math.sqrt(a, b) % c % d
;}; alert(Math.sqrt(a, b) % c % d)
;} if (oper3 == "/") {
var h = function sqrtModuloDIVIDE(a, b, c, d) {
return Math.sqrt(a, b) % c / d
;}; alert(Math.sqrt(a, b) % c / d)
;} if (oper3 == "√") {
var h = function sqrtModuloSQRT(a, b, c, d) {
return Math.sqrt(a, b) % Math.sqrt(c, d)
;}; alert(Math.sqrt(a, b) % Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function sqrtMinusPOW(a, b, c, d) {
return Math.sqrt(a, b) - Math.pow(c, d)
;}; alert(Math.sqrt(a, b) - Math.pow(c, d))
;} } if (oper2 == "/") {
if (oper3 == "-") {
var h = function sqrtDivideMINUS(a, b, c, d) {
return Math.sqrt(a, b) / c - d
;}; alert(Math.sqrt(a, b) / c - d)
;} if (oper3 == "*") {
var h = function sqrtDivideMULTIPLY(a, b, c, d) {
return Math.sqrt(a, b) / c * d
;}; alert(Math.sqrt(a, b) / c * d)
;} if (oper3 == "%") {
var h = function sqrtDivideMODULO(a, b, c, d) {
return Math.sqrt(a, b) / c % d
;}; alert(Math.sqrt(a, b) / c % d)
;} if (oper3 == "/") {
var h = function sqrtDivideDIVIDE(a, b, c, d) {
return Math.sqrt(a, b) / c / d
;}; alert(Math.sqrt(a, b) / c / d)
;} if (oper3 == "√") {
var h = function sqrtDivideSQRT(a, b, c, d) {
return Math.sqrt(a, b) / Math.sqrt(c, d)
;}; alert(Math.sqrt(a, b) / Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function sqrtDividePOW(a, b, c, d) {
return Math.sqrt(a, b) / Math.pow(c, d)
;}; alert(Math.sqrt(a, b) / Math.pow(c, d))
;} } if (oper2 == "^") {
if (oper3 == "-") {
var h = function sqrtPowMINUS(a, b, c, d) {
return Math.sqrt(a, Math.pow(b, (c - d)))
;}; alert(Math.sqrt(a, Math.pow(b, (c - d))))
;} if (oper3 == "*") {
var h = function sqrtPowMULTIPLY(a, b, c, d) {
return Math.sqrt(a, Math.pow(b, (c * d)))
;}; alert(Math.sqrt(a, Math.pow(b, (c * d))))
;} if (oper3 == "%") {
var h = function sqrtPowMODULO(a, b, c, d) {
return Math.sqrt(a, Math.pow(b, (c % d)))
;}; alert(Math.sqrt(a, Math.pow(b, (c - d))))
;} if (oper3 == "/") {
var h = function sqrtPowDIVIDE(a, b, c, d) {
return Math.sqrt(a, Math.pow(b, (c - d)))
;}; alert(Math.sqrt(a, Math.pow(b, (c - d))))
;} if (oper3 == "√") {
var h = function sqrtPowSQRT(a, b, c, d) {
return Math.sqrt(a, Math.pow(b, Math.sqrt(c, d)))
;}; alert(Math.sqrt(a, Math.pow(b, Math.sqrt(c, d))))
;} if (oper3 == "^") {
var h = function sqrtPowPOW(a, b, c, d) {
return Math.sqrt(a, Math.pow(b, Math.pow(c, d)))
;}; alert(Math.sqrt(a, Math.pow(b, Math.sqrt(c, d))))
;} } }
if (oper1 == "^") {
if (oper2 == "-") {
if (oper3 == "-") {
var h = function powMinusMINUS(a, b, c, d) {
return Math.pow(a, b) - c - d
;}; alert(Math.pow(a, b) - c - d)
;} if (oper3 == "*") {
var h = function powMinusMULTIPLY(a, b, c, d) {
return Math.pow(a, b) - c * d
;}; alert(Math.pow(a, b) - c * d)
;} if (oper3 == "%") {
var h = function powMinusMODULO(a, b, c, d) {
return Math.pow(a, b) - c % d
;}; alert(Math.pow(a, b) - c % d)
;} if (oper3 == "/") {
var h = function powMinusDIVIDE(a, b, c, d) {
return Math.pow(a, b) - c / d
;}; alert(Math.pow(a, b) - c / d)
;} if (oper3 == "√") {
var h = function powMinusSQRT(a, b, c, d) {
return Math.pow(a, b) - Math.sqrt(c, d)
;}; alert(Math.pow(a, b) - Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function powMinusPOW(a, b, c, d) {
return Math.pow(a, b) - Math.pow(c, d)
;}; alert(Math.pow(a, b) - Math.pow(c, d))
;} } if (oper2 == "*") {
if (oper3 == "-") {
var h = function MultiplyMultiplyMINUS(a, b, c, d) {
return Math.pow(a, b) * c - d
;}; alert(Math.pow(a, b) * c - d)
;} if (oper3 == "*") {
var h = function powMultiplyMULTIPLY(a, b, c, d) {
return Math.pow(a, b) * c * d
;}; alert(Math.pow(a, b) * c * d)
;} if (oper3 == "%") {
var h = function powMultiplyMODULO(a, b, c, d) {
return Math.pow(a, b) * c % d
;}; alert(Math.pow(a, b) * c % d)
;} if (oper3 == "/") {
var h = function powMultiplyDIVIDE(a, b, c, d) {
return Math.pow(a, b) * c / d
;}; alert(Math.pow(a, b) * c / d)
;} if (oper3 == "√") {
var h = function powMultiplySQRT(a, b, c, d) {
return Math.pow(a, b) * Math.sqrt(c, d)
;}; alert(Math.pow(a, b) * Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function powMultiplyPOW(a, b, c, d) {
return Math.pow(a, b) * Math.pow(c, d)
;}; alert(Math.pow(a, b) * Math.pow(c, d))
;} } if (oper2 == "%") {
if (oper3 == "-") {
var h = function powModuloMINUS(a, b, c, d) {
return Math.pow(a, b) % c - d
;}; alert(Math.pow(a, b) % c - d)
;} if (oper3 == "*") {
var h = function powModuloMULTIPLY(a, b, c, d) {
return Math.pow(a, b) % c * d
;}; alert(Math.pow(a, b) % c * d)
;} if (oper3 == "%") {
var h = function powModuloMODULO(a, b, c, d) {
return Math.pow(a, b) % c % d
;}; alert(Math.pow(a, b) % c % d)
;} if (oper3 == "/") {
var h = function powModuloDIVIDE(a, b, c, d) {
return Math.pow(a, b) % c / d
;}; alert(Math.pow(a, b) % c / d)
;} if (oper3 == "√") {
var h = function powModuloSQRT(a, b, c, d) {
return Math.pow(a, b) % Math.sqrt(c, d)
;}; alert(Math.pow(a, b) % Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function powMinusPOW(a, b, c, d) {
return Math.pow(a, b) - Math.pow(c, d)
;}; alert(Math.pow(a, b) - Math.pow(c, d))
;} } if (oper2 == "/") {
if (oper3 == "-") {
var h = function powDivideMINUS(a, b, c, d) {
return Math.pow(a, b) / c - d
;}; alert(Math.pow(a, b) / c - d)
;} if (oper3 == "*") {
var h = function powDivideMULTIPLY(a, b, c, d) {
return Math.pow(a, b) / c * d
;}; alert(Math.pow(a, b) / c * d)
;} if (oper3 == "%") {
var h = function powDivideMODULO(a, b, c, d) {
return Math.pow(a, b) / c % d
;}; alert(Math.pow(a, b) / c % d)
;} if (oper3 == "/") {
var h = function powDivideDIVIDE(a, b, c, d) {
return Math.pow(a, b) / c / d
;}; alert(Math.pow(a, b) / c / d)
;} if (oper3 == "√") {
var h = function powDivideSQRT(a, b, c, d) {
return Math.pow(a, b) / Math.sqrt(c, d)
;}; alert(Math.pow(a, b) / Math.sqrt(c, d))
;} if (oper3 == "^") {
var h = function powDividePOW(a, b, c, d) {
return Math.pow(a, b) / Math.pow(c, d)
;}; alert(Math.pow(a, b) / Math.pow(c, d))
;} } if (oper2 == "^") {
if (oper3 == "-") {
var h = function powPowMINUS(a, b, c, d) {
return Math.pow(a, Math.pow(b, (c - d)))
;}; alert(Math.pow(a, Math.pow(b, (c - d))))
;} if (oper3 == "*") {
var h = function powPowMULTIPLY(a, b, c, d) {
return Math.pow(a, Math.pow(b, (c * d)))
;}; alert(Math.pow(a, Math.pow(b, (c * d))))
;} if (oper3 == "%") {
var h = function powPowMODULO(a, b, c, d) {
return Math.pow(a, Math.pow(b, (c % d)))
;}; alert(Math.pow(a, Math.pow(b, (c - d))))
;} if (oper3 == "/") {
var h = function powPowDIVIDE(a, b, c, d) {
return Math.pow(a, Math.pow(b, (c - d)))
;}; alert(Math.pow(a, Math.pow(b, (c - d))))
;} if (oper3 == "√") {
var h = function powPowSQRT(a, b, c, d) {
return Math.pow(a, Math.pow(b, Math.sqrt(c, d)))
;}; alert(Math.pow(a, Math.pow(b, Math.sqrt(c, d))))
;} if (oper3 == "^") {
var h = function powPowPOW(a, b, c, d) {
return Math.pow(a, Math.pow(b, Math.pow(c, d)))
;}; alert(Math.pow(a, Math.pow(b, Math.sqrt(c, d))))
;} } }
}