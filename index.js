"use strict";
let light = document.getElementById("controls");
let rLight = document.getElementById("stopLight");
let yLight = document.getElementById("slowLight");
let gLight = document.getElementById("goLight");
let bulbs = document.getElementsByClassName("bulb");
let buttons = document.getElementsByClassName("button");

function lightOn(evt) {
  if (evt.target.id === "stopButton") {
    if (rLight.classList.contains("stop")) {
      rLight.classList.remove("stop");
      console.log("Red Light Off");
    } else {
      rLight.classList.add("stop");
      console.log("Red Light On");
    }
  } else if (evt.target.id === "slowButton") {
    if (yLight.classList.contains("slow")) {
      yLight.classList.remove("slow");
      console.log("Yellow Light Off");
    } else {
      yLight.classList.add("slow");
      console.log("Yellow Light On");
    }
  } else if (evt.target.id === "goButton") {
    if (gLight.classList.contains("go")) {
      gLight.classList.remove("go");
      console.log("Green Light Off");
    } else {
      gLight.classList.add("go");
      console.log("Green Light On");
    }
  }
}
function inOrOutButton(evt, i) {
  if (evt.toElement.id === "stopButton") {
    console.log("Entered Stop Button");
  } else if (evt.toElement.id === "slowButton") {
    console.log("Entered Slow Button");
  } else if (evt.toElement.id === "goButton") {
    console.log("Entered Go Button");
  }
}

function inOrOut(evt, i) {
  if (evt.toElement.id === "stopLight") {
    console.log("Entered Stop Light");
  } else if (evt.toElement.id === "slowLight") {
    console.log("Entered Slow Light");
  } else if (evt.toElement.id === "goLight") {
    console.log("Entered Go Light");
  }
}

light.addEventListener("click", lightOn);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseenter", inOrOutButton);
}
for (let i = 0; i < bulbs.length; i++) {
  bulbs[i].addEventListener("mouseenter", inOrOut);
}
