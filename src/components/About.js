import images from "../images/image-jeremy.png";

const About = (props) => {
  // console.log(images);
  return (
    <div className="about--main">
      <div className="about">
        <img src={images} alt="eugenevsarah" />
        <span>Report for:</span>
        <h2> Eugene V Sarah</h2>
      </div>
      <div className="about--tracker"></div>
      <h3 onClick={props.dailyClicked}>Daily</h3>
      <h3 onClick={props.weeklyClicked}>Weekly</h3>
      <h3 onClick={props.monthlyClicked}>Monthly</h3>
    </div>
  );
};
export default About;
