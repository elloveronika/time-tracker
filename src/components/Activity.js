const Activity = (props) => {
  // console.log("this is props inside activity", props.data);
  return (
    <div className="activity">
      <h2>{props.title} </h2>
      <div className="activity--weekly">
        <h2>{props.selectedTimeFrame.current}hrs</h2>
        <h3>Last Week: {props.selectedTimeFrame.previous}hrs</h3>
      </div>
    </div>
  );
};
export default Activity;
