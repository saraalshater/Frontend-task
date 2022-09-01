import "./Home.css";
import introIllustration from "../assets/Saly.png";
import scrollgrey from "../assets/scroll-grey.svg";
import scrollwhite from "../assets/scroll-grey.svg";
import peoplePic from "../assets/three-people-pic.png";
import ReactCardSlider from './ReactCardSlider';
import clientOne from "../assets/client-one.png";
import clientTwo from "../assets/client-two.png";
import clientThree from "../assets/client-three.png";


function Home() {

  const slides = [
    {image:[clientOne],name:"Anna Gates",job:"Web Designer",title:"Awesome !!!!",description:"Theres no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch."},
    {image:[clientTwo],name:"Anna Gates",job:"Web Designer",title:"Great Support !!!!",description:"Theres no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch."},
    {image:[clientThree],name:"Anna Gates",job:"Web Designer",title:"Super Helpful !!!!",description:"Theres no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch."},
    {image:[clientOne],name:"Anna Gates",job:"Web Designer",title:"Great Support !!!!",description:"Theres no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch."},
    {image:[clientTwo],name:"Anna Gates",job:"Web Designer",title:"Super Helpful !!!!",description:"Theres no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch."},
    {image:[clientThree],name:"Anna Gates",job:"Web Designer",title:"Awesome !!!!",description:"Theres no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch."},
    
  ]
  return (
    <>
      <div className="homeContainer">
        <div className="intro">
          <div className="top-red-circle"></div>
          <div className="intro-text">
            <h1>
              The <span>template</span> your startup needed
            </h1>
            <p className="intro-para">
              A startup or start-up is a company or project undertaken by an
              entrepreneur to seek, develop, and validate a scalable business
              model.
            </p>
            <div className="intro-btn-container">
              <button className="discuss-btn">Lets discuss</button>
              <button className="learn-btn">Learn more</button>
            </div>
          </div>
          <div className="intro-illustration">
           
            <div className="big-circle">
              <img
                src={introIllustration}
                alt="intro-illustration"
                style={{ width: "100%", zIndex: "2" }}
              />
            </div>
            <div className="red-circle"></div>
          </div>
          <div className="purple-circle"></div>
        </div>
        <div className="scroll-mouse-container">
<img src={scrollgrey} alt="scroll down icon" className="scroll-icon" style={{width:"20px"}}/>
</div>
        <div className="testimonials">
        
        <div className="zindex">    
        <div className="testimonials-label">
              <mark>TESTIMONIALS</mark>
            </div>
            <div className="testimonials-header">
              <h2>
                <span>Trusted</span> by 100's <br /> of clients
              </h2>
              <img
                src={peoplePic}
                alt="three people pictures"
                style={{
                  display: "inline-block",
                  width: "100px",
                  margin: "0em 0em 1em -7em",
                }}
              />
            </div>
            <div className="testimonials-cards">
              {/* <Card/> */}
              < ReactCardSlider slides={slides}/>
            </div></div>
        
            <div className="testimonials-bg"></div>
          </div>
   
        </div>
      
    </>
  );
}

export default Home;
