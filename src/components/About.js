import images from "../images/image-jeremy.png";

const About = () => {
  // console.log(images);
  return (
    <div className="about">
      <img src={images} alt="eugenevsarah" />
      <span>Report for:</span>
      <h2> Eugene V Sarah</h2>
    </div>
  );
};
export default About;
