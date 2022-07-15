import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date().getHours();

let Greeting;

const customStyle = {
  color: ""
}

if (currentDate < 12){
  Greeting = "Good morning";
  customStyle.color = "red";

}else if(currentDate < 18){
    Greeting = "Good afternoon";
    customStyle.color = "blue";
}else {
  Greeting = "Good night";
  customStyle.color = "green";
};

ReactDOM.render(
  <div>
  <h1 style={customStyle}>{Greeting}</h1>
  </div>,
  document.getElementById("root")
)