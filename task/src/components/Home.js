import "./Home.css";
import introIllustration from "../assets/Saly.png";

function Home() {
  return (
    <>
      <div className="homeContainer">
        <div className="intro">
          <div className="intro-text">
            <h1>The <span>template</span> your startup needed</h1>
            <p>
              A startup or start-up is a company or project undertaken by an
              entrepreneur to seek, develop, and validate a scalable business
              model.
            </p>
            <div className="intro-btn-container">
              <button></button>
              <button></button>
            </div>
          </div>
          <div className="intro-illustration">
          <div className="yellow-circle"></div>
          <div className="big-circle">
            
                 <img src={introIllustration} alt="intro-illustration" style={{width:'100%', zIndex: '2', }} />
                 
                 </div>
                 <div className="red-circle"></div>
                 
          </div>
          
        </div>

        <div className="testimonials"></div>
      </div>
    </>
  );
}

export default Home;
