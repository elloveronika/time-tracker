const Activity = (props) => {
  console.log("this is props inside activity", props.data);
  return (
    <div className="activity">
      <h2>{props.data.title} </h2>
    </div>
  );
};
export default Activity;
