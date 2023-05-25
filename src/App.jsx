import React, { createContext } from "react";
//import ReactDOM from "react-dom";
//import React from "react";
import "./index.css";
import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import CountNumber from "./CountNumber";
import TimeDisplay from "./Time";
import Eventshandl from "./Eventshandl";
import ControlledComponent from "./ControlledComponent";
import LoginFome from "./LoginFome";
import MultipleInputFome from "./MultipleInputFome";
import MultipleFomeChallenge from "./MultipleFomeChallenge";
import SoutcoutMultipleLoginFome from "./SoutcoutMultipleLoginFome";
import IncrementDecrement from "./IncrementDecrement";
import UseEffec from "./UseEffec";
import TitleuseEffect from "./TitleuseEffect";
import CovidAppuseEffect from "./CovidAppuseEffect";

const FirstName = createContext();
const LastName = createContext();
function App() {
  return (
    <>
      <TitleuseEffect />
      <UseEffec />
      <CovidAppuseEffect />
      <FirstName.Provider value={"Ajit"}>
        <LastName.Provider value={"kumar"}>
          <Heading />
          <Para />
          <List />
          <Para />
          <CountNumber />
          <TimeDisplay />
          <Eventshandl />
          <ControlledComponent />
          <LoginFome />
          <MultipleInputFome />
          <MultipleFomeChallenge />
          <SoutcoutMultipleLoginFome />
          <IncrementDecrement />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}
export default App;
