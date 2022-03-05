const Activity = (props) => {
  console.log("this is props inside activity", props.time);
  let time = props.time;
  return (
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
  );
};
export default Activity;
