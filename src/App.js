import React, { useState } from "react";
import About from "./components/About";
import Activity from "./components/Activity";
import "./styles.css";
import data from "./data.json";

// console.log(
//   "this is data",
//   data.map((el) => el.title)
// );
const App = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");

  function getTimeFrameData(time) {
    console.log(time);
    setTimeFrame(time);
  }

  return (
    <div className="app">
      <About timeFunc={getTimeFrameData} />
      <div className="app--activity">
        {data.map((el) => (
          <Activity data={el} time={timeFrame} />
        ))}
      </div>
    </div>
  );
};
export default App;
