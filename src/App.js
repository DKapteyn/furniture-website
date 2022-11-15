import Nav from "./components/nav";
import Main from "./components/main";
import Bottom from "./components/bottom";
import "./sass/App.scss";
import DataSheet from "./data/Data";
import React, { useState } from "react";

function App() {
  const [dataNum, setdataNum] = useState(0);
  const [classSize, setClassSize] = useState("");

  function clickClassChange() {
    setClassSize((prevClass) => (prevClass === "" ? "-onclick" : ""));
  }

  function classChange() {
    if (window.innerWidth > 400) {
      setClassSize("");
    }
  }

  window.addEventListener("resize", classChange);

  function numUp() {
    if (dataNum === DataSheet.length - 1) {
      setdataNum(0);
    } else {
      setdataNum((num) => num + 1);
    }
  }

  function numDown() {
    if (dataNum === 0) {
      setdataNum(DataSheet.length - 1);
    } else {
      setdataNum((num) => num - 1);
    }
  }

  return (
    <div className="app--container">
      <Nav
        classChange={classChange}
        classSize={classSize}
        clickClassChange={clickClassChange}
      />
      <Main
        Limg={DataSheet[dataNum].Limg}
        Simg={DataSheet[dataNum].Simg}
        title={DataSheet[dataNum].title}
        para={DataSheet[dataNum].para}
        clickClassChange={clickClassChange}
        classSize={classSize}
        handleClickDown={numDown}
        handleClickUp={numUp}
      />
      <Bottom />
    </div>
  );
}

export default App;
