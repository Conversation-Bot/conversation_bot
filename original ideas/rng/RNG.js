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