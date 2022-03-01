const Activity = (props) => {
  // console.log("this is props inside activity", props.data);
  return (
    <div className="activity">
      <h2>{props.data.title} </h2>
      <div className="activity--weekly">
        <h2>{props.data.timeframes.weekly.current}hrs</h2>
        <h3>Last Week: {props.data.timeframes.weekly.previous}hrs</h3>
      </div>
    </div>
  );
};
export default Activity;
