import Nav from "./nav";
import Main from "./main";
import Bottom from "./bottom";
import "./App.scss";
import DataSheet from "./Data";
import React, { useState } from "react";

function App() {
  const [dataNum, setdataNum] = useState(0);
 const [classSize, setClassSize] = useState("");
  
  function clickClassChange(){
   setClassSize(prevClass => prevClass === ""? "-onclick":"")
  
  }
  
    function classChange() {
     
      if (window.innerWidth > 375){
       setClassSize(previous=> previous = "")
  }
  }
  
  window.addEventListener('resize', classChange)
    
  
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
      classChange = {classChange}
      classSize = {classSize}
      clickClassChange ={clickClassChange}
      />
      <Main
        Limg={DataSheet[dataNum].Limg}
        Simg={DataSheet[dataNum].Simg}
        title={DataSheet[dataNum].title}
        para={DataSheet[dataNum].para}
        clickClassChange ={clickClassChange}
        classSize = {classSize}
        handleClickDown={numDown}
        handleClickUp={numUp}
      />
      <Bottom />
    </div>
  );
}

export default App;
