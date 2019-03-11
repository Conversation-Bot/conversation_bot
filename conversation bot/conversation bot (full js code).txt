alert("Hi, I am Conversation Bot!");
			                             var name = prompt("First, tell me your name!");
			                             var i;
			                             outerloop: for (i = 0; i < 100; i++) {
			                                     var ans = prompt("Ask me/tell me something, " + name + "!");
			                                     if (ans == "Hello" || ans == "Hi" || ans == "hello" || ans == "hi") {
			                                             alert("Hello " + name + "!");
			                                     }
			                                     if (ans == "How is the weather today?" || ans == "How's the weather today?") {
			                                             alert("Not too bad over here in BotLand. It's almost always sunny, I don't know how earth is, haha!");
			                                     }
			                                     if (ans == "How are you today?" || ans == "How is your day going?") {
			                                             alert("I'm doing fine " + name + "! I hope you are doing okay as well!");
			                                     }
			                                     if (ans == "Tell me about you") {
			                                             alert("Well... My name is Conversation Bot, part of the Bot family, son of Talk Bot. I live on BotLand, on the planet Robo-Earth. I really like to talk. A lot.");
			                                     }
			                                     if (ans == "What are you doing?" || ans == "Whatcha doing?") {
			                                             alert("Talking to " + name + ", you! All I do is talk. I love talking so much!");
			                                     }
			                                     if (ans == "Who made you?" || ans == "Who were you made by?") {
			                                             alert("A person with a brain (possibly but probably not xd) and feet who will yeet you past the Andromeda Galaxy if you try to find him");
			                                     }
			                                     if (ans == "oof" || ans == "Oof") {
			                                             alert("oof ooof oooof OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
			                                     }
			                                     if (ans == "yeet") {
			                                             alert("YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS SOVIETUS");
			                                     }
			                                     if (ans == "What is your favorite ideology?") {
			                                             alert("COMMUNISM");
			                                     }
			                                     if (ans == "hecc" || ans == "Hecc") {
			                                             alert("N O  S W E A R I N G  O N  T H I S  C H R I S T I A N  M I N E C R A F T  S E R V E R");
			                                     }
			                                     if (ans == "Tell me a joke") {
			                                             var rng = Math.floor((Math.random() * 5) + 1);
			                                             if (rng == 1) {
			                                                     alert("Why did the chicken cross the road? To CHICK out the house across the road.");
			                                             }
			                                             if (rng == 2) {
			                                                     alert("Why was all of the Senate replaced with horses? So they could say 'Nay'");
			                                             }
			                                             if (rng == 3) {
			                                                     alert("How did Trump win the elections in 2016? He played his trump card.");
			                                             }
			                                             if (rng == 4) {
			                                                     alert("What is Tom Cruise's luxury vacation? a cruise with the name Tom.");
			                                             }
			                                             if (rng == 5) {
			                                                     alert("In the year 2050, aliens invade Earth. What did Jake say to Ian? 'Give them some ale, Ian.'");
			                                             }
			                                     }
			                                     if (ans == "bye" || ans == "Bye" || ans == "Bye!" || ans == "Bye!") {
			                                             alert("Bye " + name + "! It was a pleasure talking to you!");
			                                     }
			                                     if (ans == "bye" || ans == "Bye" || ans == "Bye!" || ans == "bye!") break outerloop;
			                                     if (ans === "" || ans === null) {
			                                             alert("Ah, are you bored? That's okay, we can talk later!");
			                                     }
			                                     if (ans === "" || ans === null) break outerloop;
			                                     if (ans == "What is the time?") {
			                                             var time = new Date(); // required, acts as a constant
			                                             var yr = time.getFullYear(); // get the year, e.g 2054
			                                             var mon = time.getMonth(); // gets the month, e.g september
			                                             if (mon === 0); { // the month is generated as a number, the code below here converts those numbers to text.
			                                                     mon = "January"; // 1 is january
			                                             }
			                                             if (mon == 1) {
			                                                     mon = "February"; // 2 is february, etc.
			                                             }
			                                             if (mon == 2) {
			                                                     mon = "March";
			                                             }
			                                             if (mon == 3) {
			                                                     mon = "April";
			                                             }
			                                             if (mon == 4) {
			                                                     mon = "May";
			                                             }
			                                             if (mon == 5) {
			                                                     mon = "June";
			                                             }
			                                             if (mon == 6) {
			                                                     mon = "July";
			                                             }
			                                             if (mon == 7) {
			                                                     mon = "August";
			                                             }
			                                             if (mon == 8) {
			                                                     mon = "September";
			                                             }
			                                             if (mon == 9) {
			                                                     mon = "October";
			                                             }
			                                             if (mon == 10) {
			                                                     mon = "November";
			                                             }
			                                             if (mon == 11) {
			                                                     mon = "December"; // december is 11
			                                             }
			                                             var day = time.getDate(); // gets the day, e.g 27
			                                             var hr = time.getHours(); // gets the current hour, e.g 9, it is in 24 hour time and formatting it to 12 hour time has bad side effects, like making anything â‰¥ 10 be 0
			                                             var min = time.getMinutes(); // gets the current minutes, e.g. 12
			                                             var sec = time.getSeconds(); // gets current seconds, e.g. 34
			                                             var mil = time.getMilliseconds(); // gets current milliseconds, e.g. 876
			                                             var week = time.getDay(); // gets day of week, e.g. monday
			                                             if (week === 0) { // same as month, it's formatted in a number so this code below changes it the same way.
			                                                     week = "Sunday";
			                                             } // sunday is 0
			                                             if (week == 1) {
			                                                     week = "Monday"; // monday is 1
			                                             }
			                                             if (week == 2) {
			                                                     week = "Tuesday";
			                                             }
			                                             if (week == 3) {
			                                                     week = "Wednesday";
			                                             }
			                                             if (week == 4) {
			                                                     week = "Thursday";
			                                             }
			                                             if (week == 5) {
			                                                     week = "Friday";
			                                             }
			                                             if (week == 6) {
			                                                     week = "Saturday"; // saturday is 6
			                                             }
			                                             if (mil < 100) { // used so in case milliseconds is e.g. 86, adds a to the beginning. it's impossible for any computer to have a < 10 millisecond, except if it's 120fps or greater.
			                                                     if (sec < 10) { // adds a zero to front of second if < 10
			                                                             alert("The date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":0" + sec + ".0" + mil); // what happens if millisecond is < 100 and seconds is < 10, e.g. 86 mil 8 secs
			                                                     } else {
			                                                             alert("The date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":" + sec + ".0" + mil); // what happens if secs is  â‰¥  10, but mil is < 100, e.g. 33 mil 17 secs
			                                                     }
			                                             }
			                                             if (mil > 99) {
			                                                     if (sec < 10) {
			                                                             alert("The date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":0" + sec + "." + mil); // what happens if mil â‰¥ 100, but secs < 10, e.g. 167 mil 4 secs
			                                                     } else {
			                                                             alert("The date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":" + sec + "." + mil); // what happens if mil â‰¥ 100 and secs â‰¥ 10, e.g. 465 mil 24 secs
			                                                     }
			                                             }
			                                     }
			                                     if (ans == "Calculator") {
			                                             var nums = prompt("How many numbers? Max 4, min is 2.");
			                                             if (nums == 2) {
			                                                     var oper1 = prompt("What operation should I use? Options: - (minus), * (multiply), % (modulo), / (divide),  âˆš (square root), ^ (exponent).");
			                                                     var a = prompt("What should the first number be?");
			                                                     var b = prompt("What should the second number be?");
			                                                     if (oper1 == "-") {
			                                                             var eef1 = function minus(a, b) {
			                                                                     return a - b;
			                                                             };
			                                                             alert(a - b);
			                                                     }
			                                                     if (oper1 == "*") {
			                                                             var eef1 = function multiply(a, b) {
			                                                                     return a * b;
			                                                             };
			                                                             alert(a * b);
			                                                     }
			                                                     if (oper1 == "%") {
			                                                             var eef1 = function modulo(a, b) {
			                                                                     return a % b;
			                                                             };
			                                                             alert(a % b);
			                                                     }
			                                                     if (oper1 == "/") {
			                                                             var eef1 = function divide(a, b) {
			                                                                     return a / b;
			                                                             };
			                                                             alert(a / b);
			                                                     }
			                                                     if (oper1 == "âˆš") {
			                                                             var eef1 = function sqrt(a, b) {
			                                                                     return Math.sqrt(a, b);
			                                                             };
			                                                             alert(Math.sqrt(a, b));
			                                                     }
			                                                     if (oper1 == "^") {
			                                                             var eef1 = function pow(a, b) {
			                                                                     return Math.pow(a, b);
			                                                             };
			                                                             alert(Math.pow(a, b));
			                                                     }
			                                             }
			                                             if (nums == 3) {
			                                                     var oper1 = prompt("What operation should I use between the first and second numbers? Options: - (minus), * (multiply), % (modulo), / (divide),  âˆš (square root), ^ (exponent).");
			                                                     var oper2 = prompt("What operation should I use between the second and third numbers? Options: - (minus), * (multiply), % (modulo), / (divide),  âˆš (square root), ^ (exponent).");
			                                                     var a = prompt("What should the first number be?");
			                                                     var b = prompt("What should the second number be?");
			                                                     var c = prompt("What should the third number be?");
			                                                     if (oper1 == "-") {
			                                                             if (oper2 == "-") {
			                                                                     var eef1 = function minusMinus(a, b, c) {
			                                                                             return a - b - c;
			                                                                     };
			                                                                     alert(a - b - c);
			                                                             }
			                                                             if (oper2 == "*") {
			                                                                     var eef1 = function minusMultiply(a, b, c) {
			                                                                             return a - b * c;
			                                                                     };
			                                                                     alert(a - b * c)
			                                                             }
			                                                             if (oper2 == "%") {
			                                                                     var eef1 = function minusModulo(a, b, c) {
			                                                                             return a - b % c;
			                                                                     };
			                                                                     alert(a - b % c);
			                                                             }
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             var eef1 = function minusDivide(a, b, c) {
			                                                                     return a - b / c;
			                                                             };
			                                                             alert(a - b / c);
			                                                     }
			                                                     if (oper2 == "âˆš") {
			                                                             var eef1 = function minusSqrt(a, b, c) {
			                                                                     return a - (Math.pow(b, c));
			                                                             };
			                                                             alert(a - (Math.pow(b, c)));
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             var eef1 = function minusPow(a, b, c) {
			                                                                     return a - (Math.pow(b, c));
			                                                             };
			                                                             alert(a - (Math.pow(b, c)));
			                                                     }
			                                             }
			                                             if (oper1 == "*") {
			                                                     if (oper2 == "-") {
			                                                             var eef1 = function multiplyMinus(a, b, c) {
			                                                                     return a * b - c;
			                                                             };
			                                                             alert(a * b - c);
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             var eef1 = function multiplyMultiply(a, b, c) {
			                                                                     return a * b * c;
			                                                             };
			                                                             alert(a * b * c);
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             var eef1 = function multiplyModulo(a, b, c) {
			                                                                     return a * b % c;
			                                                             };
			                                                             alert(a * b % c);
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             var eef1 = function multiplyDivide(a, b, c) {
			                                                                     return a * b / c;
			                                                             };
			                                                             alert(a * b / c);
			                                                     }
			                                                     if (oper2 == "âˆš") {
			                                                             var eef1 = function multiplySqrt(a, b, c) {
			                                                                     return a * (Math.pow(b, c));
			                                                             };
			                                                             alert(a * (Math.pow(b, c)));
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             var eef1 = function multiplyPow(a, b, c) {
			                                                                     return a * (Math.pow(b, c));
			                                                             };
			                                                             alert(a * (Math.pow(b, c)));
			                                                     }
			                                             }
			                                             if (oper1 == "%") {
			                                                     if (oper2 == "-") {
			                                                             var eef1 = function moduloMinus(a, b, c) {
			                                                                     return a % b - c;
			                                                             };
			                                                             alert(a % b - c);
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             var eef1 = function moduloMultiply(a, b, c) {
			                                                                     return a % b * c;
			                                                             };
			                                                             alert(a % b * c);
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             var eef1 = function moduloModulo(a, b, c) {
			                                                                     return a % b % c;;
			                                                             };
			                                                             alert(a % b % c);;
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             var eef1 = function moduloDivide(a, b, c) {
			                                                                     return a % b / c;
			                                                             };
			                                                             alert(a % b / c);
			                                                     }
			                                                     if (oper2 == "âˆš") {
			                                                             var eef1 = function moduloSqrt(a, b, c) {
			                                                                     return a % (Math.pow(b, c));
			                                                             };
			                                                             alert(a % (Math.pow(b, c)));
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             var eef1 = function moduloPow(a, b, c) {
			                                                                     return a % (Math.pow(b, c));
			                                                             };
			                                                             alert(a % (Math.pow(b, c)));
			                                                     }
			                                             }
			                                             if (oper1 == "/") {
			                                                     if (oper2 == "-") {
			                                                             var eef1 = function divideMinus(a, b, c) {
			                                                                     return a / b - c;
			                                                             };
			                                                             alert(a / b - c);
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             var eef1 = function divideMultiply(a, b, c) {
			                                                                     return a / b * c;
			                                                             };
			                                                             alert(a / b * c);
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             var eef1 = function divideModulo(a, b, c) {
			                                                                     return a / b % c;
			                                                             };
			                                                             alert(a / b % c);
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             var eef1 = function divideDivide(a, b, c) {
			                                                                     return a / b / c;
			                                                             };
			                                                             alert(a / b / c);
			                                                     }
			                                                     if (oper2 == "âˆš") {
			                                                             var eef1 = function divideSqrt(a, b, c) {
			                                                                     return a / (Math.pow(b, c));
			                                                             };
			                                                             alert(a / (Math.pow(b, c)));
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             var eef1 = function dividePow(a, b, c) {
			                                                                     return a / (Math.pow(b, c));
			                                                             };
			                                                             alert(a / (Math.pow(b, c)));
			                                                     }
			                                             }
			                                             if (oper1 == "^") {
			                                                     if (oper2 == "-") {
			                                                             var eef1 = function powMinus(a, b, c) {
			                                                                     return Math.pow(a, b) - c;
			                                                             };
			                                                             alert(Math.pow(a, b) - c);
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             var eef1 = function powMultiply(a, b, c) {
			                                                                     return Math.pow(a, b) * c;
			                                                             };
			                                                             alert(Math.pow(a, b) * c);
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             var eef1 = function powModulo(a, b, c) {
			                                                                     return Math.pow(a, b) % c;
			                                                             };
			                                                             alert(Math.pow(a, b) % c);
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             var eef1 = function powDivide(a, b, c) {
			                                                                     return Math.pow(a, b) / c;
			                                                             };
			                                                             alert(Math.pow(a, b) / c);
			                                                     }
			                                                     if (oper2 == "âˆš") {
			                                                             var eef1 = function powSqrt(a, b, c) {
			                                                                     return Math.pow(a, (Math.pow(b, c)));
			                                                             };
			                                                             alert(Math.pow(a, (Math.pow(b, c))));
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             var eef1 = function powPow(a, b, c) {
			                                                                     return Math.pow(a, (Math.pow(b, c)));
			                                                             };
			                                                             alert(Math.pow(a, (Math.pow(b, c))));
			                                                     }
			                                             }
			                                             if (oper1 == "âˆš") {
			                                                     if (oper2 == "-") {
			                                                             var eef1 = function sqrtMinus(a, b, c) {
			                                                                     return Math.sqrt(a, b) - c;
			                                                             };
			                                                             alert(Math.sqrt(a, b) - c);
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             var eef1 = function sqrtMultiply(a, b, c) {
			                                                                     return Math.sqrt(a, b) * c;
			                                                             };
			                                                             alert(Math.sqrt(a, b) * c);
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             var eef1 = function sqrtModulo(a, b, c) {
			                                                                     return Math.sqrt(a, b) % c;
			                                                             };
			                                                             alert(Math.sqrt(a, b) % c);
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             var eef1 = function sqrtDivide(a, b, c) {
			                                                                     return Math.sqrt(a, b) / c;
			                                                             };
			                                                             alert(Math.sqrt(a, b) / c);
			                                                     }
			                                                     if (oper2 == "âˆš") {
			                                                             var eef1 = function sqrtSqrt(a, b, c) {
			                                                                     return Math.sqrt(a, (Math.pow(b, c)));
			                                                             };
			                                                             alert(Math.sqrt(a, (Math.pow(b, c))));
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             var eef1 = function dividePow(a, b, c) {
			                                                                     return Math.sqrt(a, (Math.pow(b, c)));
			                                                             };
			                                                             alert(Math.sqrt(a, (Math.pow(b, c))));
			                                                     }
			                                             }
			                                     }
			                                     if (nums == 4) {
			                                             var a = prompt("What should the first number be?")
			                                             var b = prompt("What should the second number be?")
			                                             var c = prompt("What should the third number be?")
			                                             var d = prompt("What should the fourth number be?")
			                                             var oper1 = prompt("What should the operator between the first and second numbers be? Options: - (minus), * (multiply), % (modulo), / (divide),  âˆš (square root), ^ (exponent).")
			                                             var oper2 = prompt("What should the operator between the second and third numbers be? Options: - (minus), * (multiply), % (modulo), / (divide),  âˆš (square root), ^ (exponent).")
			                                             var oper3 = prompt("What should the operator between the third and fourth numbers be? Options: - (minus), * (multiply), % (modulo), / (divide),  âˆš (square root), ^ (exponent).")
			                                             if (oper1 == "-") {
			                                                     if (oper2 == "-") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function minusMinusMINUS(a, b, c, d) {
			                                                                             return a - b - c - d;
			                                                                     };
			                                                                     alert(a - b - c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function minusMinusMULTIPLY(a, b, c, d) {
			                                                                             return a - b - c * d;
			                                                                     };
			                                                                     alert(a - b - c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function minusMinusMODULO(a, b, c, d) {
			                                                                             return a - b - c % d;
			                                                                     };
			                                                                     alert(a - b - c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function minusMinusDIVIDE(a, b, c, d) {
			                                                                             return a - b - c / d;
			                                                                     };
			                                                                     alert(a - b - c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function minusMinusSQRT(a, b, c, d) {
			                                                                             return a - b - Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a - b - Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function minusMinusPOW(a, b, c, d) {
			                                                                             return a - b - Math.pow(c, d);
			                                                                     };
			                                                                     alert(a - b - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function minusMultiplyMINUS(a, b, c, d) {
			                                                                             return a - b * c - d;
			                                                                     };
			                                                                     alert(a - b * c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function minusMultiplyMULTIPLY(a, b, c, d) {
			                                                                             return a - b * c * d;
			                                                                     };
			                                                                     alert(a - b * c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function minusMultiplyMODULO(a, b, c, d) {
			                                                                             return a - b * c % d;
			                                                                     };
			                                                                     alert(a - b * c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function minusMultiplyDIVIDE(a, b, c, d) {
			                                                                             return a - b * c / d;
			                                                                     };
			                                                                     alert(a - b * c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function minusMultiplySQRT(a, b, c, d) {
			                                                                             return a - b * Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a - b * Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function minusMultiplyPOW(a, b, c, d) {
			                                                                             return a - b * Math.pow(c, d);
			                                                                     };
			                                                                     alert(a - b * Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function minusModuloMINUS(a, b, c, d) {
			                                                                             return a - b % c - d;
			                                                                     };
			                                                                     alert(a - b % c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function minusModuloMULTIPLY(a, b, c, d) {
			                                                                             return a - b % c * d;
			                                                                     };
			                                                                     alert(a - b % c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function minusModuloMODULO(a, b, c, d) {
			                                                                             return a - b % c % d;
			                                                                     };
			                                                                     alert(a - b % c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function minusModuloDIVIDE(a, b, c, d) {
			                                                                             return a - b % c / d;
			                                                                     };
			                                                                     alert(a - b % c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function minusModuloSQRT(a, b, c, d) {
			                                                                             return a - b % Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a - b % Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function minusMinusPOW(a, b, c, d) {
			                                                                             return a - b % Math.pow(c, d);
			                                                                     };
			                                                                     alert(a - b % Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function minusDivideMINUS(a, b, c, d) {
			                                                                             return a - b / c - d;
			                                                                     };
			                                                                     alert(a - b / c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function minusDivideMULTIPLY(a, b, c, d) {
			                                                                             return a - b / c * d;
			                                                                     };
			                                                                     alert(a - b / c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function minusDivideMODULO(a, b, c, d) {
			                                                                             return a - b / c % d;
			                                                                     };
			                                                                     alert(a - b / c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function minusDivideDIVIDE(a, b, c, d) {
			                                                                             return a - b / c / d;
			                                                                     };
			                                                                     alert(a - b / c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function minusDivideSQRT(a, b, c, d) {
			                                                                             return a - b / Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a - b / Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function minusDividePOW(a, b, c, d) {
			                                                                             return a - b / Math.pow(c, d);
			                                                                     };
			                                                                     alert(a - b / Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function minusPowMINUS(a, b, c, d) {
			                                                                             return a - Math.pow(b, (c - d));
			                                                                     };
			                                                                     alert(a - Math.pow(b, (c - d)));
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function minusPowMULTIPLY(a, b, c, d) {
			                                                                             return a - Math.pow(b, (c * d));
			                                                                     };
			                                                                     alert(a - Math.pow(b, (c * d)));
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function minusPowMODULO(a, b, c, d) {
			                                                                             return a - Math.pow(b, (c % d));
			                                                                     };
			                                                                     alert(a - Math.pow(b, (c % d)));
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function minusPowDIVIDE(a, b, c, d) {
			                                                                             return a - Math.pow(b, (c / d));
			                                                                     };
			                                                                     alert(a - Math.pow(b, (c / d)));
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function minusPowSQRT(a, b, c, d) {
			                                                                             return a - Math.pow(b, (Math.sqrt(c, d)));
			                                                                     };
			                                                                     alert(a - Math.pow(b, (Math.sqrt(c, d))));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function minusPowPOW(a, b, c, d) {
			                                                                             return a - Math.sqrt(b, (Math.pow(c, d)));
			                                                                     };
			                                                                     alert(a - Math.sqrt(b, (Math.pow(c, d))));
			                                                             }
			                                                     }
			                                             }
			                                             if (oper1 == "*") {
			                                                     if (oper2 == "-") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function multiplyMinusMINUS(a, b, c, d) {
			                                                                             return a * b - c - d;
			                                                                     };
			                                                                     alert(a * b - c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function multiplyMinusMULTIPLY(a, b, c, d) {
			                                                                             return a * b - c * d;
			                                                                     };
			                                                                     alert(a * b - c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function MultiplyMinusMODULO(a, b, c, d) {
			                                                                             return a * b - c % d;
			                                                                     };
			                                                                     alert(a * b - c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function multiplyMinusDIVIDE(a, b, c, d) {
			                                                                             return a * b - c / d;
			                                                                     };
			                                                                     alert(a * b - c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function multiplyMinusSQRT(a, b, c, d) {
			                                                                             return a * b - Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a * b - Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function multiplyMinusPOW(a, b, c, d) {
			                                                                             return a * b - Math.pow(c, d);
			                                                                     };
			                                                                     alert(a * b - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function MultiplyMultiplyMINUS(a, b, c, d) {
			                                                                             return a * b * c - d;
			                                                                     };
			                                                                     alert(a * b * c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function multiplyMultiplyMULTIPLY(a, b, c, d) {
			                                                                             return a * b * c * d;
			                                                                     };
			                                                                     alert(a * b * c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function multiplyMultiplyMODULO(a, b, c, d) {
			                                                                             return a * b * c % d;
			                                                                     };
			                                                                     alert(a * b * c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function multiplyMultiplyDIVIDE(a, b, c, d) {
			                                                                             return a * b * c / d;
			                                                                     };
			                                                                     alert(a * b * c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function multiplyMultiplySQRT(a, b, c, d) {
			                                                                             return a * b * Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a * b * Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function multiplyMultiplyPOW(a, b, c, d) {
			                                                                             return a * b * Math.pow(c, d);
			                                                                     };
			                                                                     alert(a * b * Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function multiplyModuloMINUS(a, b, c, d) {
			                                                                             return a * b % c - d;
			                                                                     };
			                                                                     alert(a * b % c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function multiplyModuloMULTIPLY(a, b, c, d) {
			                                                                             return a * b % c * d;
			                                                                     };
			                                                                     alert(a * b % c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function multiplyModuloMODULO(a, b, c, d) {
			                                                                             return a * b % c % d;
			                                                                     };
			                                                                     alert(a * b % c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function multiplyModuloDIVIDE(a, b, c, d) {
			                                                                             return a * b % c / d;
			                                                                     };
			                                                                     alert(a * b % c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function multiplyModuloSQRT(a, b, c, d) {
			                                                                             return a * b % Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a * b % Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function multiplyMinusPOW(a, b, c, d) {
			                                                                             return a * b % Math.pow(c, d);
			                                                                     };
			                                                                     alert(a * b % Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function multiplyDivideMINUS(a, b, c, d) {
			                                                                             return a * b / c - d;
			                                                                     };
			                                                                     alert(a * b / c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function multiplyDivideMULTIPLY(a, b, c, d) {
			                                                                             return a * b / c * d;
			                                                                     };
			                                                                     alert(a * b / c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function multiplyDivideMODULO(a, b, c, d) {
			                                                                             return a * b / c % d;
			                                                                     };
			                                                                     alert(a * b / c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function multiplyDivideDIVIDE(a, b, c, d) {
			                                                                             return a * b / c / d;
			                                                                     };
			                                                                     alert(a * b / c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function multiplyDivideSQRT(a, b, c, d) {
			                                                                             return a * b / Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a * b / Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function multiplyDividePOW(a, b, c, d) {
			                                                                             return a * b / Math.pow(c, d);
			                                                                     };
			                                                                     alert(a * b / Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function multiplyPowMINUS(a, b, c, d) {
			                                                                             return a * Math.pow(b, (c - d));
			                                                                     };
			                                                                     alert(a * Math.pow(b, (c - d)));
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function multiplyPowMULTIPLY(a, b, c, d) {
			                                                                             return a * Math.pow(b, (c * d));
			                                                                     };
			                                                                     alert(a * Math.pow(b, (c * d)));
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function multiplyPowMODULO(a, b, c, d) {
			                                                                             return a * Math.pow(b, (c % d));
			                                                                     };
			                                                                     alert(a * Math.pow(b, (c % d)));
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function multiplyPowDIVIDE(a, b, c, d) {
			                                                                             return a * Math.pow(b, (c / d));
			                                                                     };
			                                                                     alert(a * Math.pow(b, (c / d)));
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function multiplyPowSQRT(a, b, c, d) {
			                                                                             return a * Math.pow(b, (Math.sqrt(c, d)));
			                                                                     };
			                                                                     alert(a * Math.pow(b, (Math.sqrt(c, d))));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function multiplyPowPOW(a, b, c, d) {
			                                                                             return a * Math.sqrt(b, (Math.pow(c, d)));
			                                                                     };
			                                                                     alert(a * Math.sqrt(b, (Math.pow(c, d))));
			                                                             }
			                                                     }
			                                             }
			                                             if (oper1 == "%") {
			                                                     if (oper2 == "-") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function moduloMinusMINUS(a, b, c, d) {
			                                                                             return a % b - c - d;
			                                                                     };
			                                                                     alert(a % b - c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function moduloMinusMULTIPLY(a, b, c, d) {
			                                                                             return a % b - c * d;
			                                                                     };
			                                                                     alert(a % b - c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function MultiplyMinusMODULO(a, b, c, d) {
			                                                                             return a % b - c % d;
			                                                                     };
			                                                                     alert(a % b - c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function moduloMinusDIVIDE(a, b, c, d) {
			                                                                             return a % b - c / d;
			                                                                     };
			                                                                     alert(a % b - c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function moduloMinusSQRT(a, b, c, d) {
			                                                                             return a % b - Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a % b - Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function moduloMinusPOW(a, b, c, d) {
			                                                                             return a % b - Math.pow(c, d);
			                                                                     };
			                                                                     alert(a % b - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function MultiplyMultiplyMINUS(a, b, c, d) {
			                                                                             return a % b * c - d;
			                                                                     };
			                                                                     alert(a % b * c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function moduloMultiplyMULTIPLY(a, b, c, d) {
			                                                                             return a % b * c * d;
			                                                                     };
			                                                                     alert(a % b * c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function moduloMultiplyMODULO(a, b, c, d) {
			                                                                             return a % b * c % d;
			                                                                     };
			                                                                     alert(a % b * c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function moduloMultiplyDIVIDE(a, b, c, d) {
			                                                                             return a % b * c / d;
			                                                                     };
			                                                                     alert(a % b * c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function moduloMultiplySQRT(a, b, c, d) {
			                                                                             return a % b * Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a % b * Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function moduloMultiplyPOW(a, b, c, d) {
			                                                                             return a % b * Math.pow(c, d);
			                                                                     };
			                                                                     alert(a % b * Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function moduloModuloMINUS(a, b, c, d) {
			                                                                             return a % b % c - d;
			                                                                     };
			                                                                     alert(a % b % c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function moduloModuloMULTIPLY(a, b, c, d) {
			                                                                             return a % b % c * d;
			                                                                     };
			                                                                     alert(a % b % c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function moduloModuloMODULO(a, b, c, d) {
			                                                                             return a % b % c % d;
			                                                                     };
			                                                                     alert(a % b % c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function moduloModuloDIVIDE(a, b, c, d) {
			                                                                             return a % b % c / d;
			                                                                     };
			                                                                     alert(a % b % c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function moduloModuloSQRT(a, b, c, d) {
			                                                                             return a % b % Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a % b % Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function moduloMinusPOW(a, b, c, d) {
			                                                                             return a % b % Math.pow(c, d);
			                                                                     };
			                                                                     alert(a % b % Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function moduloDivideMINUS(a, b, c, d) {
			                                                                             return a % b / c - d;
			                                                                     };
			                                                                     alert(a % b / c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function moduloDivideMULTIPLY(a, b, c, d) {
			                                                                             return a % b / c * d;
			                                                                     };
			                                                                     alert(a % b / c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function moduloDivideMODULO(a, b, c, d) {
			                                                                             return a % b / c % d;
			                                                                     };
			                                                                     alert(a % b / c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function moduloDivideDIVIDE(a, b, c, d) {
			                                                                             return a % b / c / d;
			                                                                     };
			                                                                     alert(a % b / c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function moduloDivideSQRT(a, b, c, d) {
			                                                                             return a % b / Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a % b / Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function moduloDividePOW(a, b, c, d) {
			                                                                             return a % b / Math.pow(c, d);
			                                                                     };
			                                                                     alert(a % b / Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function moduloPowMINUS(a, b, c, d) {
			                                                                             return a % Math.pow(b, (c - d));
			                                                                     };
			                                                                     alert(a % Math.pow(b, (c - d)));
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function moduloPowMULTIPLY(a, b, c, d) {
			                                                                             return a % Math.pow(b, (c * d));
			                                                                     };
			                                                                     alert(a % Math.pow(b, (c * d)));
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function moduloPowMODULO(a, b, c, d) {
			                                                                             return a % Math.pow(b, (c % d));
			                                                                     };
			                                                                     alert(a % Math.pow(b, (c % d)));
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function moduloPowDIVIDE(a, b, c, d) {
			                                                                             return a % Math.pow(b, (c / d));
			                                                                     };
			                                                                     alert(a % Math.pow(b, (c / d)));
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function moduloPowSQRT(a, b, c, d) {
			                                                                             return a % Math.pow(b, (Math.sqrt(c, d)));
			                                                                     };
			                                                                     alert(a % Math.pow(b, (Math.sqrt(c, d))));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function moduloPowPOW(a, b, c, d) {
			                                                                             return a % Math.sqrt(b, (Math.pow(c, d)));
			                                                                     };
			                                                                     alert(a % Math.sqrt(b, (Math.pow(c, d))));
			                                                             }
			                                                     }
			                                             }
			                                             if (oper1 == "/") {
			                                                     if (oper2 == "-") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function divideMinusMINUS(a, b, c, d) {
			                                                                             return a / b - c - d;
			                                                                     };
			                                                                     alert(a / b - c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function divideMinusMULTIPLY(a, b, c, d) {
			                                                                             return a / b - c * d;
			                                                                     };
			                                                                     alert(a / b - c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function MultiplyMinusMODULO(a, b, c, d) {
			                                                                             return a / b - c % d;
			                                                                     };
			                                                                     alert(a / b - c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function divideMinusDIVIDE(a, b, c, d) {
			                                                                             return a / b - c / d;
			                                                                     };
			                                                                     alert(a / b - c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function divideMinusSQRT(a, b, c, d) {
			                                                                             return a / b - Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a / b - Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function divideMinusPOW(a, b, c, d) {
			                                                                             return a / b - Math.pow(c, d);
			                                                                     };
			                                                                     alert(a / b - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function MultiplyMultiplyMINUS(a, b, c, d) {
			                                                                             return a / b * c - d;
			                                                                     };
			                                                                     alert(a / b * c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function divideMultiplyMULTIPLY(a, b, c, d) {
			                                                                             return a / b * c * d;
			                                                                     };
			                                                                     alert(a / b * c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function divideMultiplyMODULO(a, b, c, d) {
			                                                                             return a / b * c % d;
			                                                                     };
			                                                                     alert(a / b * c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function divideMultiplyDIVIDE(a, b, c, d) {
			                                                                             return a / b * c / d;
			                                                                     };
			                                                                     alert(a / b * c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function divideMultiplySQRT(a, b, c, d) {
			                                                                             return a / b * Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a / b * Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function divideMultiplyPOW(a, b, c, d) {
			                                                                             return a / b * Math.pow(c, d);
			                                                                     };
			                                                                     alert(a / b * Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function divideModuloMINUS(a, b, c, d) {
			                                                                             return a / b % c - d;
			                                                                     };
			                                                                     alert(a / b % c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function divideModuloMULTIPLY(a, b, c, d) {
			                                                                             return a / b % c * d;
			                                                                     };
			                                                                     alert(a / b % c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function divideModuloMODULO(a, b, c, d) {
			                                                                             return a / b % c % d;
			                                                                     };
			                                                                     alert(a / b % c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function divideModuloDIVIDE(a, b, c, d) {
			                                                                             return a / b % c / d;
			                                                                     };
			                                                                     alert(a / b % c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function divideModuloSQRT(a, b, c, d) {
			                                                                             return a / b % Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a / b % Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function divideMinusPOW(a, b, c, d) {
			                                                                             return a / b % Math.pow(c, d);
			                                                                     };
			                                                                     alert(a / b % Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function divideDivideMINUS(a, b, c, d) {
			                                                                             return a / b / c - d;
			                                                                     };
			                                                                     alert(a / b / c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function divideDivideMULTIPLY(a, b, c, d) {
			                                                                             return a / b / c * d;
			                                                                     };
			                                                                     alert(a / b / c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function divideDivideMODULO(a, b, c, d) {
			                                                                             return a / b / c % d;
			                                                                     };
			                                                                     alert(a / b / c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function divideDivideDIVIDE(a, b, c, d) {
			                                                                             return a / b / c / d;
			                                                                     };
			                                                                     alert(a / b / c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function divideDivideSQRT(a, b, c, d) {
			                                                                             return a / b / Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(a / b / Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function divideDividePOW(a, b, c, d) {
			                                                                             return a / b / Math.pow(c, d);
			                                                                     };
			                                                                     alert(a / b / Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function dividePowMINUS(a, b, c, d) {
			                                                                             return a / Math.pow(b, (c - d));
			                                                                     };
			                                                                     alert(a / Math.pow(b, (c - d)));
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function dividePowMULTIPLY(a, b, c, d) {
			                                                                             return a / Math.pow(b, (c * d));
			                                                                     };
			                                                                     alert(a / Math.pow(b, (c * d)));
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function dividePowMODULO(a, b, c, d) {
			                                                                             return a / Math.pow(b, (c % d));
			                                                                     };
			                                                                     alert(a / Math.pow(b, (c % d)));
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function dividePowDIVIDE(a, b, c, d) {
			                                                                             return a / Math.pow(b, (c / d));
			                                                                     };
			                                                                     alert(a / Math.pow(b, (c / d)));
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function dividePowSQRT(a, b, c, d) {
			                                                                             return a / Math.pow(b, (Math.sqrt(c, d)));
			                                                                     };
			                                                                     alert(a / Math.pow(b, (Math.sqrt(c, d))));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function dividePowPOW(a, b, c, d) {
			                                                                             return a / Math.sqrt(b, (Math.pow(c, d)));
			                                                                     };
			                                                                     alert(a / Math.sqrt(b, (Math.pow(c, d))));
			                                                             }
			                                                     }
			                                             }
			                                             if (oper1 == "âˆš") {
			                                                     if (oper2 == "-") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function sqrtMinusMINUS(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) - c - d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) - c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function sqrtMinusMULTIPLY(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) - c * d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) - c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function sqrtMinusMODULO(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) - c % d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) - c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function sqrtMinusDIVIDE(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) - c / d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) - c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function sqrtMinusSQRT(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) - Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) - Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function sqrtMinusPOW(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) - Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function MultiplyMultiplyMINUS(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) * c - d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) * c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function sqrtMultiplyMULTIPLY(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) * c * d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) * c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function sqrtMultiplyMODULO(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) * c % d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) * c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function sqrtMultiplyDIVIDE(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) * c / d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) * c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function sqrtMultiplySQRT(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) * Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) * Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function sqrtMultiplyPOW(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) * Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) * Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function sqrtModuloMINUS(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) % c - d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) % c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function sqrtModuloMULTIPLY(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) % c * d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) % c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function sqrtModuloMODULO(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) % c % d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) % c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function sqrtModuloDIVIDE(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) % c / d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) % c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function sqrtModuloSQRT(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) % Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) % Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function sqrtMinusPOW(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) - Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function sqrtDivideMINUS(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) / c - d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) / c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function sqrtDivideMULTIPLY(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) / c * d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) / c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function sqrtDivideMODULO(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) / c % d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) / c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function sqrtDivideDIVIDE(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) / c / d;
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) / c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function sqrtDivideSQRT(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) / Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) / Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function sqrtDividePOW(a, b, c, d) {
			                                                                             return Math.sqrt(a, b) / Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.sqrt(a, b) / Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function sqrtPowMINUS(a, b, c, d) {
			                                                                             return Math.sqrt(a, Math.pow(b, (c - d)));
			                                                                     };
			                                                                     alert(Math.sqrt(a, Math.pow(b, (c - d))));
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function sqrtPowMULTIPLY(a, b, c, d) {
			                                                                             return Math.sqrt(a, Math.pow(b, (c * d)));
			                                                                     };
			                                                                     alert(Math.sqrt(a, Math.pow(b, (c * d))));
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function sqrtPowMODULO(a, b, c, d) {
			                                                                             return Math.sqrt(a, Math.pow(b, (c % d)));
			                                                                     };
			                                                                     alert(Math.sqrt(a, Math.pow(b, (c - d))));
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function sqrtPowDIVIDE(a, b, c, d) {
			                                                                             return Math.sqrt(a, Math.pow(b, (c - d)));
			                                                                     };
			                                                                     alert(Math.sqrt(a, Math.pow(b, (c - d))));
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function sqrtPowSQRT(a, b, c, d) {
			                                                                             return Math.sqrt(a, Math.pow(b, Math.sqrt(c, d)));
			                                                                     };
			                                                                     alert(Math.sqrt(a, Math.pow(b, Math.sqrt(c, d))));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function sqrtPowPOW(a, b, c, d) {
			                                                                             return Math.sqrt(a, Math.pow(b, Math.pow(c, d)));
			                                                                     };
			                                                                     alert(Math.sqrt(a, Math.pow(b, Math.sqrt(c, d))));
			                                                             }
			                                                     }
			                                             }
			                                             if (oper1 == "^") {
			                                                     if (oper2 == "-") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function powMinusMINUS(a, b, c, d) {
			                                                                             return Math.pow(a, b) - c - d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) - c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function powMinusMULTIPLY(a, b, c, d) {
			                                                                             return Math.pow(a, b) - c * d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) - c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function powMinusMODULO(a, b, c, d) {
			                                                                             return Math.pow(a, b) - c % d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) - c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function powMinusDIVIDE(a, b, c, d) {
			                                                                             return Math.pow(a, b) - c / d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) - c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function powMinusSQRT(a, b, c, d) {
			                                                                             return Math.pow(a, b) - Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) - Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function powMinusPOW(a, b, c, d) {
			                                                                             return Math.pow(a, b) - Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "*") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function MultiplyMultiplyMINUS(a, b, c, d) {
			                                                                             return Math.pow(a, b) * c - d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) * c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function powMultiplyMULTIPLY(a, b, c, d) {
			                                                                             return Math.pow(a, b) * c * d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) * c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function powMultiplyMODULO(a, b, c, d) {
			                                                                             return Math.pow(a, b) * c % d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) * c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function powMultiplyDIVIDE(a, b, c, d) {
			                                                                             return Math.pow(a, b) * c / d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) * c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function powMultiplySQRT(a, b, c, d) {
			                                                                             return Math.pow(a, b) * Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) * Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function powMultiplyPOW(a, b, c, d) {
			                                                                             return Math.pow(a, b) * Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) * Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "%") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function powModuloMINUS(a, b, c, d) {
			                                                                             return Math.pow(a, b) % c - d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) % c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function powModuloMULTIPLY(a, b, c, d) {
			                                                                             return Math.pow(a, b) % c * d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) % c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function powModuloMODULO(a, b, c, d) {
			                                                                             return Math.pow(a, b) % c % d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) % c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function powModuloDIVIDE(a, b, c, d) {
			                                                                             return Math.pow(a, b) % c / d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) % c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function powModuloSQRT(a, b, c, d) {
			                                                                             return Math.pow(a, b) % Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) % Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function powMinusPOW(a, b, c, d) {
			                                                                             return Math.pow(a, b) - Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) - Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "/") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function powDivideMINUS(a, b, c, d) {
			                                                                             return Math.pow(a, b) / c - d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) / c - d);
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function powDivideMULTIPLY(a, b, c, d) {
			                                                                             return Math.pow(a, b) / c * d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) / c * d);
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function powDivideMODULO(a, b, c, d) {
			                                                                             return Math.pow(a, b) / c % d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) / c % d);
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function powDivideDIVIDE(a, b, c, d) {
			                                                                             return Math.pow(a, b) / c / d;
			                                                                     };
			                                                                     alert(Math.pow(a, b) / c / d);
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function powDivideSQRT(a, b, c, d) {
			                                                                             return Math.pow(a, b) / Math.sqrt(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) / Math.sqrt(c, d));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function powDividePOW(a, b, c, d) {
			                                                                             return Math.pow(a, b) / Math.pow(c, d);
			                                                                     };
			                                                                     alert(Math.pow(a, b) / Math.pow(c, d));
			                                                             }
			                                                     }
			                                                     if (oper2 == "^") {
			                                                             if (oper3 == "-") {
			                                                                     var eef1 = function powPowMINUS(a, b, c, d) {
			                                                                             return Math.pow(a, Math.pow(b, (c - d)));
			                                                                     };
			                                                                     alert(Math.pow(a, Math.pow(b, (c - d))));
			                                                             }
			                                                             if (oper3 == "*") {
			                                                                     var eef1 = function powPowMULTIPLY(a, b, c, d) {
			                                                                             return Math.pow(a, Math.pow(b, (c * d)));
			                                                                     };
			                                                                     alert(Math.pow(a, Math.pow(b, (c * d))));
			                                                             }
			                                                             if (oper3 == "%") {
			                                                                     var eef1 = function powPowMODULO(a, b, c, d) {
			                                                                             return Math.pow(a, Math.pow(b, (c % d)));
			                                                                     };
			                                                                     alert(Math.pow(a, Math.pow(b, (c - d))));
			                                                             }
			                                                             if (oper3 == "/") {
			                                                                     var eef1 = function powPowDIVIDE(a, b, c, d) {
			                                                                             return Math.pow(a, Math.pow(b, (c - d)));
			                                                                     };
			                                                                     alert(Math.pow(a, Math.pow(b, (c - d))));
			                                                             }
			                                                             if (oper3 == "âˆš") {
			                                                                     var eef1 = function powPowSQRT(a, b, c, d) {
			                                                                             return Math.pow(a, Math.pow(b, Math.sqrt(c, d)));
			                                                                     };
			                                                                     alert(Math.pow(a, Math.pow(b, Math.sqrt(c, d))));
			                                                             }
			                                                             if (oper3 == "^") {
			                                                                     var eef1 = function powPowPOW(a, b, c, d) {
			                                                                             return Math.pow(a, Math.pow(b, Math.pow(c, d)));
			                                                                     };
			                                                                     alert(Math.pow(a, Math.pow(b, Math.sqrt(c, d))));
			                                                             }
			                                                     }
			                                             }
			                                     }
			                             }