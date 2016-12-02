/*function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

 Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);*/

var cel;
function toCelsius(fahTemp) {
cel = (fahTemp -32) / 1.8
return cel;
}
console.log(toCelsius(32))

var faren;
function toFahren(celTemp) {
faren = (celTemp * 1.8) + 32;
return faren;
}
console.log(toFahren(52))

var typeTemp = document.getElementByName("tempType").addEventListener("click", );
var tempLev = document.getElementById("input");

switch (typeTemp) {
case "Celsius" :
  var cel;
  function toCelsius(fahTemp) {
  cel = (fahTemp -32) / 1.8
  return cel;
  }
  break;
case "Fahrenheit" :
  var faren;
  function toFahren(celTemp) {
  faren = (celTemp * 1.8) + 32;
  return faren;
  }
  break;

}
