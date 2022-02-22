import React from "react";
import About from "./components/About";
import Activity from "./components/Activity";
import "./styles.css";
import data from "./data.json";

console.log(
  "this is data",
  data.map((el) => el.title)
);
const App = () => {
  return (
    <div className="app">
      <About />
      <div className="app--activity">
      {data.map((el) => (
        <Activity data={el} />
      ))}
      </div>
    </div>
  );
};
export default App;
