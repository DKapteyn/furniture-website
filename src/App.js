import Nav from "./nav";
import Main from "./main";
import Bottom from "./bottom";
import "./App.scss";
import DataSheet from "./Data";
import React, { useState } from "react";

function App() {
  const [dataNum, setdataNum] = useState(0);

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
      <Nav />
      <Main
        Limg={DataSheet[dataNum].Limg}
        Simg={DataSheet[dataNum].Simg}
        title={DataSheet[dataNum].title}
        para={DataSheet[dataNum].para}
        handleClickDown={numDown}
        handleClickUp={numUp}
      />
      <Bottom />
    </div>
  );
}

export default App;
