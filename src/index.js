//ES6
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));*/

//JSX
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
ReactDOM.render(
  <h1>JSX Hello World!</h1>, //This line is JSX/JS XML
  document.getElementById("root")
);*/

//Javascript cod run in data show
/*var h1 = document.createElement("h1");
h1.innerHTML = "Ajit kumar";
document.getElementById("root").appendChild(h1);*/

//How to Render Multiple Element
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>,<h2>Ajit kumar</h2>
    <p>Lorem ipsum, dolor sit amet</p>
  </div>,
  document.getElementById("root")
);*/

//or concept of Array
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
ReactDOM.render(
  [
    <h1>Hello World!</h1>,
    <h2>Ajit kumar mukul </h2>,
    <p>Lorem ipsum, dolor sit amet</p>,
  ],
  document.getElementById("root")
);*/

//React Fragment concept
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
ReactDOM.render(
  <React.Fragment>
    <h1>Hello World!</h1>,<h2>Ajit kumar</h2>
    <p>Lorem ipsum, dolor sit amet aaaaa</p>
  </React.Fragment>,
  document.getElementById("root")
);*/

//or Fragment concept
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
ReactDOM.render(
  <>
    <h1>Hello World!</h1>,<h2>Ajit kumar mukul</h2>
    <p>Lorem ipsum, dolor sit amet</p>
  </>,
  document.getElementById("root")
);*/

//JSX Expression in React
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const fname = "ajit umar patna";
ReactDOM.render(
  <div>
    <h1>Hello World! {12 - 5}</h1>,<h2>my name is {fname}</h2>
    <p>Lorem ipsum, dolor sit amet {3 * 5}</p>
  </div>,
  document.getElementById("root")
);*/

//ES6 Template Literals in jsx in React
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const fname = "Ram";
const lname = "kumar";
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>,<h2>my name is {`${fname} ${lname}`}</h2>
    <p>Lorem ipsum, dolor sit amet</p>
  </div>,
  document.getElementById("root")
);*/

//challenge
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>,<h2>Ajit kumar</h2>
    <p>Lorem ipsum, dolor sit amet</p>
    <p>current Date is = {currDate}</p>
    <p>current Time is = {currTime}</p>
  </div>,
  document.getElementById("root")
);*/

//or JSX Attributes in React
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "Ajit kumar";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.google.com";
ReactDOM.render(
  <>
    <h1 contentEditable="true">my name is {name} </h1>,
    <img src={img1} alt="randomImages" />
    <img src={img2} alt="randomImages" />
    <a href={links} target="_Ajit">
      <img src={img3} alt="randomImages" />
    </a>
  </>,
  document.getElementById("root")
);*/

//or className in React
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const name = "Ajit kumar";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.google.com";
ReactDOM.render(
  <>
    <h1 className="heading">my name is {name} </h1>,
    <div className="img_div">
      <img src={img1} alt="randomImages" />
      <img src={img2} alt="randomImages" />
      <a href={links} target="_Ajit">
        <img src={img3} alt="randomImages" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);*/

//challenge
/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let currDate = new Date(2023, 4, 19, 5);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morining";
  cssStyle.color = "orange";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "Black";
}
ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>{" "}
      </h1>
    </div>
  </>,
  document.getElementById("root")
);*/

// Function component
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
