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
  const [timeFrame, setTimeFrame] = useState(data);

  // console.log("this is timeframe", timeFrame);
  let mappedTimeFrame = timeFrame.map((time) => time.timeframes);
  console.log("this is mappedTimeFrame", mappedTimeFrame);

  const handleClickDaily = () => {
    console.log("hi this is click daily :3");

    let mappedTimeFrame = timeFrame.map((time) => time.timeframes);
    setTimeFrame((prevTime) => prevTime.map((time) => time.timeframes.daily));

  };

  return (
    <div className="app">
      <About someFunc={handleClickDaily} />
      <div className="app--activity">
        {data.map((el) => (
          <Activity title={el.title} timeFrame={el.timeframes} />
        ))}
      </div>
    </div>
  );
};
export default App;
