import play from "../images/icon-play.svg";
import work from "../images/icon-work.svg";
import selfcare from "../images/icon-self-care.svg";
import social from "../images/icon-social.svg";
import exercise from "../images/icon-exercise.svg";
import study from "../images/icon-study.svg";

const Activity = (props) => {
  console.log("this is props inside activity", props.time);
  let time = props.time;
  let title = props.data.title.toLowerCase();
  const styles = {
    backgroundImage: `url(${
      title == "play"
        ? play
        : title == "work"
        ? work
        : title == "social"
        ? social
        : title == "exercise"
        ? exercise
        : title === "study"
        ? study
        : selfcare
    })`,
    // zIndex: 3,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
    backgroundColor: `${
      title == "play"
        ? "hsl(195, 74%, 62%)"
        : title == "work"
        ? "hsl(15, 100%, 70%)"
        : title == "social"
        ? "hsl(264, 64%, 52%)"
        : title == "exercise"
        ? "hsl(145, 58%, 55%)"
        : title === "study"
        ? "hsl(348, 100%, 68%)"
        : " hsl(43, 84%, 65%)"
    }`,
    // justifyContent: "flex-end",
  };
  console.log("this is props title", props.data.title);

  return (
    <div className="icon-activity" style={styles}>
      <div className="activity">
        <h2>{props.data.title} </h2>
        <div className="activity--weekly">
          <h2>{props.data.timeframes[time].current}hrs</h2>
          <h3>
            {props.time == "weekly"
              ? "Last Week"
              : props.time == "daily"
              ? "Yesterday"
              : "Last Month"}
            : {props.data.timeframes[time].previous}hrs
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Activity;
