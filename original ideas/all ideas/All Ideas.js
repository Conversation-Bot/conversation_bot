var txt = prompt("type something in here", "huge oof");
 
if (txt == null || txt == "") {
	txt = "User cancelled the prompt."
} else {
 var result = prompt("oh hey, " + txt + " is what you typed ooooooooooooooooooooooooofffffff")
}
if (result == null || result == "") {
	alert("oh wow okay")
} else {
	var result2 = alert("oof, your answer was " + result + " now continue lol")
}



var a = prompt("Type a number to calculate")
var b = prompt("Type another number to calculate in multiplication")
var result = prompt("OOF, " + a + "*" + b + " is your calculation, right?")
    if (result == "yes" || result == "yeah") {
    alert("okay, the result will be shown. Calculating...") 
    alert (a * b)( "is your answer!")
} else {
        alert("okay, just try again!")
    }




var a = prompt("Type a number to calculate")
var b = prompt("Type another number to find the difference!")
var result = prompt("OOF, " + a + " - " + b + " is your calculation, right?")
    if (result == "yes" || result == "yeah") {
    alert("okay, the result will be shown. Calculating...") 
    alert (a - b)( "is your answer!")
} else {
        alert("okay, just try again!")
    }


var a = prompt("Type a number to calculate")
var b = prompt("Type another number to find the difference!")
var result = prompt("OOF, " + a + " / " + b + " is your calculation, right?")
    if (result == "yes" || result == "yeah") {
    alert("okay, the result will be shown. Calculating...")
    alert (a / b)( "is your answer!")
} else {
        alert("okay, just try again!")
    }
   



var a = prompt("Type a number to calculate")
var b = prompt("Type another number to calculate in multiplication")
var result = prompt("OOF, " + a + "+" + b + " is your calculation, right?")
    if (result == "yes" || result == "yeah") {
    alert("okay, the result will be shown. Calculating...")
    alert (a - -b)( "is your answer!")
} else {
        alert("okay, just try again!")
    }


var a = prompt("Type a number to find its square root!")
var result = prompt("OOF, √" + a + " is your calculation, right?")
    if (result == "yes" || result == "yeah") {
    alert("okay, the result will be shown. Calculating...") 
    alert (Math.sqrt(a))( "is your answer!")
    } else {
        alert("okay, just try again!")
    }


var a = prompt("Type a number to calculate")
var b = prompt("Type another number to be the exponent!")
var result = prompt("OOF, " + a + "^" + b + " is your calculation, right?")
    if (result == "yes" || result == "yeah") {
    alert("okay, the result will be shown. Calculating...")
    alert (Math.pow(a, b))( "is your answer!")
} else {
        alert("okay, just try again!")
    }



var a = prompt("Type a number to calculate")
var b = prompt("Type another number to be the exponent!")
var result = prompt("OOF, " + a + "^" + b + " is your calculation, right?")
    if (result == "yes" || result == "yeah") {
    alert("okay, the result will be shown. Calculating...")
    alert (Math.sqrt(a) * Math.sqrt(b) / Math.pow(3.14, 2))( "is your answer!")
} else {
        alert("okay, just try again!")
    }

alert("Hello. This is a simple RNG script for Javascript. All numbers are inclusive.")
var min = prompt("Firstly, what number should be the minimum?")
var max = prompt("Got it. What number should be the maximum?")
alert("Alrighty. Your range is " + min + "-" + max + ". The number will be generated!")
var rngNumber = ((Math.random() * max) + min);
function randomNumber() {
  return Math.random((Math.random() * max) + min);
}
alert("Your random number is: " + rngNumber + ". Thanks for using me!")
txt = "Thanks! Try it again with different numbers!"

var time = new Date() // required, acts as a constant
var yr = time.getFullYear(); // get the year, e.g 2054
var mon = time.getMonth(); // gets the month, e.g september
if (mon == 0) { // the month is generated as a number, the code below here converts those numbers to text.
var mon = "January" // 0 is january
} if (mon == 1) {
var mon = "February" // 1 is february, etc.
} if (mon == 2) {
var mon = "March"
} if (mon == 3) {
var mon = "April"
} if (mon == 4) {
var mon = "May"
} if (mon == 5) {
var mon = "June"
} if (mon == 6) {
var mon = "July"
} if (mon == 7) {
var mon = "August"
} if (mon == 8) {
var mon = "September"
} if (mon == 9) {
var mon = "October"
} if (mon == 10) {
var mon = "November"
} if (mon == 11) {
var mon = "December" // december is 11
} 
var day = time.getDate(); // gets the day, e.g 27
var hr = time.getHours(); // gets the current hour, e.g 9, it is in 24 hour time and formatting it to 12 hour time has bad side effects, like making anything ≥ 10 be 0
var min = time.getMinutes(); // gets the current minutes, e.g. 12
var sec = time.getSeconds(); // gets current seconds, e.g. 34
var mil = time.getMilliseconds(); // gets current milliseconds, e.g. 876
var week = time.getDay(); // gets day of week, e.g. monday
if (week == 0) { // same as month, it's formatted in a number so this code below changes it the same way.
var week = "Sunday" } // sunday is 0
if (week == 1) {
var week = "Monday" // monday is 1
} if (week == 2) {
var week = "Tuesday" 
} if (week == 3) {
var week = "Wednesday"
} if (week == 4) {
var week = "Thursday"
} if (week == 5) {
var week = "Friday"
} if (week == 6) {
var week = "Saturday" // saturday is 6
} if (mil < 100) { // used so in case milliseconds is e.g. 86, adds a to the beginning. it's impossible for any computer to have a < 10 millisecond, except if it's 120fps or greater.
if (sec < 10) { // adds a zero to front of second if < 10
alert("the date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":0" + sec + ".0" + mil ) // what happens if millisecond is < 100 and seconds is < 10, e.g. 86 mil 8 secs
} else {
alert("the date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":" + sec + ".0" + mil ) // what happens if secs is  ≥  10, but mil is < 100, e.g. 33 mil 17 secs
} } if (mil > 99) {
if (sec < 10) {
alert("the date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":0" + sec + "." + mil ) // what happens if mil ≥ 100, but secs < 10, e.g. 167 mil 4 secs
} else {
alert("the date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":" + sec + "." + mil ) // what happens if mil ≥ 100 and secs ≥ 10, e.g. 465 mil 24 secs
} }



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