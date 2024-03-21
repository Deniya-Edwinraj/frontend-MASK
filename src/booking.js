// // import React from 'react';
// import './booking.css';
// import React, { useState } from 'react';

// function Booking() {
//   const [formData, setFormData] = useState({
//     deliveryInfo: {
//       address: '',
//       district: '',
//       phoneNo: '',
//     },
//     user: {
//       name: '',
//       email: '',
//       phoneNo: '',
//     },
//     bookings: [
//       {
//         function_type: '',
//         theme: '',
//         date_of_delivery: '',
//         description: '',
//       },
//     ],
//     bookingStatus: 'Processing',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('http://localhost:5000/api/booking/new', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (response.ok) {
//       alert('Booking created successfully');
//     } else {
//       alert('Failed to create booking');
//     }
//   };

//   const handleAddBooking = () => {
//     setFormData({
//       ...formData,
//       bookings: [...formData.bookings, { function_type: '', theme: '', date_of_delivery: '', description: '' }],
//     });
//   };

//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       bookings: formData.bookings.map((booking, i) => (i === index ? { ...booking, [name]: value } : booking)),
//     });
//   };

//   const handleChangeDeliveryInfo = (e, type) => {
//     setFormData({
//       ...formData,
//       deliveryInfo: { ...formData.deliveryInfo, [type]: e.target.value },
//     });
//   };

//   const handleChangeUser = (e, type) => {
//     setFormData({
//       ...formData,
//       user: { ...formData.user, [type]: e.target.value },
//     });
//   };

//     return (
//         <div className="Booking">
//         <div className="testbox">
//     <form className="bookingform" onSubmit={handleSubmit}>
//       <div className="banner">
//         <h1>Function Decorations Booking Form</h1>
//       </div>
      // <div className="item">
      //   <p>Function Type</p>
      //   <select onChange={(e) => handleChange(e, index)}>
      //     <option value=""></option>
      //     <option value="1">*Please select*</option>
      //     <option value="2">Wedding</option>
      //     <option value="3">Birthday Party</option>
      //     <option value="4">Reunion</option>
      //     <option value="5">Family Get Together</option>
      //     <option value="6">Other</option>
      //   </select>
      // </div>
//       <div className="item">
//         <p>Theme</p>
//         <input className='inputbooking' type="text" name="theme" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Date of Delivery</p>
//         <input className='inputbooking' type="date" name="bdate" onChange={(e) => handleChange(e, index)} required/>
//         <i className="fas fa-calendar-alt"></i>
//       </div>
      
//       <div className="item">
//         <p>Description of Event</p>
//         <textarea rows="4" onChange={(e) => handleChange(e, index)} required></textarea>
//       </div>
//       <div className="item">
//         <p>Name</p>
//         <input className='inputbooking' type="text" name="name" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Email</p>
//         <input className='inputbooking' type="email" name="email" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Phone Number</p>
//         <input className='inputbooking' type="text" name="phone-no" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>Address</p>
//         <input className='inputbooking' type="text" name="address" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="item">
//         <p>District</p>
//         <input className='inputbooking' type="text" name="district" onChange={(e) => handleChange(e, index)} required/>
//       </div>
//       <div className="btn-block">
//         <button type="submit" href="/">SEND</button>
//       </div>
//     </form>
//   </div>

//   </div>
//     );
// }

// export default Booking;




import React, { useState } from 'react';
import './booking.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Booking() {
  const [formData, setFormData] = useState({
    function_type: '',
    theme: '',
    date_of_delivery: '',
    description: '',
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    district: '',
    // image:'',
  });

  // const [imageFile, setImageFile] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    const token = 'abc123';
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/booking/new', formData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Message sent successfully:', response.data);
      toast.success('Booking created successfully');
      // Optionally, you can clear the form after a successful submission
      setFormData({
        function_type: '',
        theme: '',
        date_of_delivery: '',
        description: '',
        name: '',
        email: '',
        phoneNo: '',
        address: '',
        district: '',
        // image: '',
      });
    } catch (error) {
      console.error('Error submitting contact request:', error.message);
      // Handle errors, e.g., show an error message to the user
      toast.error('Invalid process');
    }
  };
  

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImageFile(file);
  // };

  const handleClear = () => {
    setFormData({
        function_type: '',
        theme: '',
        date_of_delivery: '',
        description: '',
        name: '',
        email: '',
        phoneNo: '',
        address: '',
        district: '',
        // image:'',
    });
  }

  return (
    <div className="Booking">
      <div className="testbox">
        <form className="bookingform" onSubmit={handleSubmit}>
          <div className="banner">
            <h1>Function Decorations Booking Form</h1>
          </div>
          <div className="item">
            <p>Function Type</p>
            <select name="function_type" value={formData.function_type} onChange={handleChange} required>
              <option value=""></option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Reunion">Reunion</option>
              <option value="Family Get Together">Family Get Together</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="item">
            <p>Theme</p>
            <input className='inputbooking' type="text" name="theme" value={formData.theme} onChange={handleChange} required />
          </div>
          <div className="item">
            <p>Date of Delivery</p>
            <input className='inputbooking' type="date" name="date_of_delivery" value={formData.date_of_delivery} onChange={handleChange} required />
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="item">
            <p>Description of Event</p>
            <textarea rows="4" name="description" value={formData.description} onChange={handleChange} required></textarea>
          </div>
          <div className="item">
            <p>Name</p>
            <input className='inputbooking' type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="item">
            <p>Email</p>
            <input className='inputbooking' type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="item">
            <p>Phone Number</p>
            <input className='inputbooking' type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
          </div>
          <div className="item">
            <p>Address</p>
            <input className='inputbooking' type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="item">
            <p>District</p>
            <input className='inputbooking' type="text" name="district" value={formData.district} onChange={handleChange} required />
          </div>
          {/* <div className="item">
            <p>Upload Image</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div> */}
          <div className="btn-block">
            <button className='btn-booking' type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;
