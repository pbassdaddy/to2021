//clocks

var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
var milli = time.getMilliseconds();

//HMTL
var intro = document.getElementById('intro');
var paraOne = document.getElementById('1');
var paraTwo = document.getElementById('2');
var paraThree = document.getElementById('3');
var paraFour = document.getElementById('4');
console.log(hour);

//poems

var poemOne = "A year ago I thought you were going to make out with Sebastion. I didn't know <br> he was literally a dog.";
var poemTwo = "That year has passed like a comet for the ages: <br> aggression, congestion, digestion, <br> oppression, concession, supression.";
var poemThree = "I became your red dress;<br>your secret, well made, salted bed.";
var poemFour = "Now it's 2021 and I must ask you:<br> may we be wed?";

//functions

function introline(){
	
if (hour > 20 || hour == 0) { 
	intro.style.visibility="hidden"
		}
	};
introline();

function timePoemOne() {
	var comparison = (hour >= 21 || hour == 0) ? paraOne.innerHTML = poemOne : console.log("not yet poemOne")
  };
  
timePoemOne();

function timePoemTwo() {
	var comparison = (hour >= 22 || hour == 0) ? paraTwo.innerHTML = poemTwo : console.log("not yet poemTwo")
  };
  
timePoemTwo();

function timePoemThree() {
	var comparison = (hour >= 23 || hour == 0) ? paraThree.innerHTML = poemThree : console.log("not yet poemThree")
  };
  
timePoemThree();

function timePoemFour() {
	var comparison = (hour == 0) ? paraFour.innerHTML = poemFour : console.log("not yet poemFour")
  };
  
timePoemFour();
