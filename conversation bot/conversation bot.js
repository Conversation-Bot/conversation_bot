alert("Hi, i am Conversation Bot!");
var name = prompt("First, tell me your name!")
var times = 99;
for(var i=0; i < times; i++){
    var ans = prompt("Ask me/tell me something, " + name + "!");
        if (ans == "Hello" || ans == "Hi" || ans == "hello" || ans == "hi") {
            alert("Hello " + name + "!")
        }
        if (ans == "How is the weather today?" || ans == "How's the weather today?") {
            alert("Not too bad over here in BotLand. It's almost always sunny, I don't know how earth is, haha!")
        }
        if (ans == "How are you today?" || ans == "How is your day going?") {
            alert("I'm doing fine " + name + "! I hope you are doing okay as well!")
        }
        if (ans == "Tell me about you") {
            alert("Well... My name is Conversation Bot, part of the Bot family, son of Talk Bot. I live on BotLand, on the planet Robo-Earth. I really like to talk. A lot.")
        }
        if (ans == "What are you doing?" || ans == "Whatcha doing?") {
            alert("Talking to " + name + ", you! All I do is talk. I love talking so much!")
        }
        if (ans == "Who made you?" || ans == "Who were you made by?") {
            alert("A person with a brain (possibly but probably not xd) and feet who will yeet you past the Andromeda Galaxy if you try to find him")
        }
        if (ans == "oof" || ans == "Oof") {
            alert("oof ooof oooof OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
        } 
        if (ans == "yeet") {
alert("YEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEETTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS SOVIETUS")
} if (ans == "What is your favorite ideology?") {
alert("COMMUNISM")
}
if (ans == "hecc" || ans == "Hecc") {
alert("N O  S W E A R I N G  O N  T H I S  C H R I S T I A N  M I N E C R A F T  S E R V E R")
}
       if (ans == "Bye" || ans == "Bye!" || ans == "bye" || ans == "bye!") {
            alert("Bye! See you later " + name + "! It was a pleasure talking to you!")
         }
 if (ans == "Bye") { break; }
if (ans == "" || ans == null) {
alert("Don't have anything to say? Okay, I guess, bye!")
}
if (ans == "" || ans == null) { break; }
if (ans == "What is the time?") {
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
alert(“the date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":0" + sec + "." + mil ) // what happens if mil ≥ 100, but secs < 10, e.g. 167 mil 4 secs
} else {
alert("the date is " + week + " " + mon + " " + day + ", " + yr + ", " + hr + ":" + min + ":" + sec + "." + mil ) // what happens if mil ≥ 100 and secs ≥ 10, e.g. 465 mil 24 secs
} } }
}

