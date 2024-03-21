import './Assests/bootstrap-icons/bootstrap-icons.min.css'
import './Assests/boxicons/css/boxicons.min.css'
function Footer () {
    return (
      <div className="Footer">

<footer id="footer">
  <div className="container-foot">
    <img src={require("./Assests/img/logo.png")} alt="foot-img" style={{height: "130px", width: "150px"}}/>
    <h1>MASK</h1>
    <p>We are think for you !</p>
    <p>We provide you with customized decorative ornaments and functional decorations. Join Mask to have a unique experience.</p>

    <div className="social-links">
      <a href="1" className="twitter"><i className="bx bxl-twitter"></i></a>
      <a href="1" className="facebook"><i className="bx bxl-facebook"></i></a>
      <a href="1" className="instagram"><i className="bx bxl-instagram"></i></a>

      <a href="1" className="linkedin"><i className="bx bxl-linkedin"></i></a>

    </div>
    <div className="copyright">
      &copy; Copyright <strong><span>MASK</span></strong>. All Rights Reserved.
    </div>
    <div className="credits">
      
    </div>
  </div>
</footer>
        
      </div>
    );
  }
  
  export default Footer;