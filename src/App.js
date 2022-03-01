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
  const [timeFrame, setTimeFrame] = useState(
    data.map((el) => {
      let title = el.title;
      let frame = el.timeframes.daily;
      return { title, frame };
    })
  );

  console.log("this is timeframe", timeFrame);

  const handleClickDaily = () => {
    console.log("hi this is click daily :3");

    setTimeFrame(
      data.map((el) => {
        let title = el.title;
        let frame = el.timeframes.daily;
        return { title, frame };
      })
    );
  };
  const handleClickWeekly = () => {
    console.log("hi this is click weekly :3");

    setTimeFrame(
      data.map((el) => {
        let title = el.title;
        let frame = el.timeframes.weekly;
        return { title, frame };
      })
    );
  };
  const handleClickMonthly = () => {
    console.log("hi this is click monthly :3");

    setTimeFrame(
      data.map((el) => {
        let title = el.title;
        let frame = el.timeframes.monthly;
        return { title, frame };
      })
    );
  };

  return (
    <div className="app">
      <About
        dailyClicked={handleClickDaily}
        weeklyClicked={handleClickWeekly}
        monthlyClicked={handleClickMonthly}
      />
      <div className="app--activity">
        {timeFrame.map((el) => (
          <Activity title={el.title} selectedTimeFrame={el.frame} />
        ))}
      </div>
    </div>
  );
};
export default App;
