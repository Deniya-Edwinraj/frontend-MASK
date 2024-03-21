// import React from 'react';
import { Link } from 'react-router-dom';
import './body.css';
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Body () {
const [formData, setFormData] = useState({
  
   name: '',
   email: '',
   phoneNumber: '',
   message: ''
});


const handleChange = (e) => {
  const { name, value } = e.target;
  
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/api/contact/new', formData, {withCredentials:true});
    console.log('Message send successfully:', response.data);
    toast.success('Message send successfully');

    // Optionally, you can clear the form after a successful submission
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  } catch (error) {
    console.error('Error submitting contact request:', error.message);
    // Handle errors, e.g., show an error message to the user
    toast.error('Invalid process');
  }
};
  

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  }

    return (
      <div className="Body">
{/* <!-- Home --> */}
      <section className="home">

        <div className="content">
            <h1 className="h1"> MASK</h1>
            <p className="description">We are Provide Best Decorative Ornaments <span> & </span> Function Decoration According To Your Preferance.</p>
        </div>

        <div className="image">
            <img src={require("./Assests/img/IMG_20240128_225317_911.jpg")} alt="heroimg" data-speed="-3" className="move img-fluid"/>
        </div>
      </section>
{/* <!-- End Home --> */}

{/* <!-- About --> */}
   <section className="about-section" id="about">
     <div className="main">
      <img src={require("./Assests/img/collage (1).jpg")} alt='aboutimg1' style={{height:'70%', width:'70%'}}/>
     </div>
     <div className="all-text">
      <h2>We Provide The Best <br/>You Want</h2>
      <p><span>MASK</span> provide you with the finest paper-based decorative ornaments and functional decoration as you wish at an affordable price.</p>
      <h3 style={{color: '#fff'}}>Join us for a unique experience !</h3>
     
     <div className="btn-button">
     <Link to="/product">
      <button className="btn2" id="decorativeOrnamentsBtn"><i className="bi bi-cart-fill"></i> Start Shop</button>
      </Link>
     </div>
    </div>

   </section>
{/* <!-- About End --> */}


{/* <!-- Contact Form --> */}
<div className="contact-section" id="contact">

<form className="contactform"  onSubmit={handleSubmit}>
<div className="banner-map">
            <iframe allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3933.394322960658!2d80.03600307598626!3d9.647307990440883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjGsDE2JDU2REFDIDkxNDCCMDk0UyA0NSJFIDUxNDcxMCwgVGjDoW5oLCBWaeG7h3QgTmFtIEtuaWdodCBOYW0!5e0!3m2!1sen!2slk!4v1706866217815!5m2!1sen!2slk"
                title="map" style={{ width:'100%',height:'150px', border:'0',loading:'lazy',referrerpolicy:'no-referrer-when-downgrade'}}></iframe>
        </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required 
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className='btn-block'>
      <button className='btn-contact' type="submit" >Submit</button>
      </div>
    </form>
    <div className='details'>
      <h3>Let's Get In Touch</h3><br/>
      <h5><i className="bi bi-envelope-at-fill"></i>  mask@gmail.com</h5>
      <h5><i className="bi bi-geo-alt-fill"></i>  Valanpuram, Jaffna.</h5>
      <h5><i className="bi bi-telephone-fill"></i>  94-123465789</h5>
       
       <div className="social-links">
        <a href="1" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="1" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="1" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="1" className="linkedin"><i className="bx bxl-linkedin"></i></a></div>
       </div>
    </div>
{/* <!-- Contact end -->   */}

      </div>
    );
  }
  
  export default Body;