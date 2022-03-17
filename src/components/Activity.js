import play from "../images/icon-play.svg";
import work from "../images/icon-work.svg";
import selfcare from "../images/icon-self-care.svg";

const Activity = (props) => {
  console.log("this is props inside activity", props.time);
  let time = props.time;

  const styles = {
    backgroundImage: `url(${
      props.data.title.toLowerCase() == "play" ? play : work
    })`,
    // zIndex: 3,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top",
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
