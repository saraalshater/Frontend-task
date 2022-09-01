import "./ReactCardSlider.css";
import leftArrow from "../assets/Arrowleft.svg";
import rightArrow from "../assets/Arrowright.svg";

const ReactCardSlider = (props) => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 410;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 410;
  };

  return (
    <>
      <div id="slider">
        {props.slides.map((slide, index) => {
          return (
            <div
              className="slider-card"
              key={index}
              onClick={() => slide.clickEvent()}
            >
              <p className="slider-card-title">{slide.title}</p>
              <p className="slider-card-description">{slide.description}</p>
              {/* <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div> */}
              <div className="client-info-container">
                <img
                  src={slide.image}
                  alt="clients-img"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "12px ",
                    marginTop: "2px",
                  }}
                />
                <div className="client-info">
                  <p className="name">{slide.name}</p>
                  <p className="job">{slide.job}</p>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
      <div className="slider-btn-container">
        <button   type="button" className="slider-icon-right" onClick={slideRight}><img alt="right arrow icon" src={rightArrow} style={{width:"35px",top:"8px",left:"7px", position:"absolute"}}/> </button>
        <button className="slider-icon-left" onClick={slideLeft}><img alt="left arrow icon" src={leftArrow} style={{width:"35px",top:"8px",right:"7px", position:"absolute"}}/> </button>
      </div>
      <div className="green-circle"></div>
    </>
  );
};
export default ReactCardSlider;
