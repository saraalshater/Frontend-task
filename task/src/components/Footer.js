import "./Footer.css";
import scrollgrey from "../assets/scroll-grey.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/instagram.svg";
import fb from "../assets/facebook.svg";
import arrUpRight from"../assets/arrowupright.svg";


function Footer(params) {
  return (
    <div className="footer-container">
        <div className="blue-circle"></div>
      <div className="footer-info">
        <div className="footer-left">
        <div className="orange-circle"></div>
          <div className="footer-label">
            <mark>CONTACT US</mark>
          </div>
          <div className="footer-email">
            <h2>Hello@Startup.com</h2>
            <button className="email-icon">
            <img src={arrUpRight} alt="arrow" style={{width:"35px",top:"8px",right:"7px", position:"absolute"}}/>
            </button>
          </div>
          <div className="footer-social-media">
            <p >Social media</p>
            <button className="insta-icon"><img src={insta} alt="insta icon" style={{top:"11px",right:"12px", position:"absolute"}}/></button>
            <button className="twitter-icon"><img src={twitter} alt="twitter icon"style={{top:"11px",right:"11px", position:"absolute"}}/></button>
            <button className="fb-icon"><img src={fb} alt="facebook icon"style={{top:"11px",right:"12px", position:"absolute"}}/></button>
          </div>
        </div>

        <div className="footer-right">
          <p>Quick Links</p>
          <div className="footer-navigations-container">
            <div className="footer-nav-one">
              <a href="#Home">Home</a>
              <a href="#Journey">Journey</a>
              <a href="#Technology">Technology</a>
              <a href="#Team">Team</a>
            </div>
            <div className="footer-nav-two">
              <a href="#Vision">Vision</a>
              <a href="#Thinking">Thinking</a>
              <a href="#Join us">Join us</a>
              <a href="#onnect">Connect</a>
            </div>
            <div className="footer-nav-three">
              <a href="#Privacy">Privacy & Terms</a>
              <a href="#Google"></a>
              <a href="#Alphabet">Alphabet</a>
            </div>
           
          </div>
        </div>
      </div>

      <div className="footer-copy-rights">
        <p>Copyright 2022 Xtratheme. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
