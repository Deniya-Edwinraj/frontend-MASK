import React, { useState } from 'react';
import './order.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Order () {
  const navigate = useNavigate();
  const { productName,totalAmount } = useParams();
  const decodedProductName = decodeURIComponent(productName)
  const decodedtotalAmount = decodeURIComponent(totalAmount)


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    address: '',
    district: '',
    totalprice: decodedtotalAmount,
    orderItems: decodedProductName,
    paymentMethod:'',
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
      const response = await axios.post('http://localhost:5000/api/order/new', formData, { withCredentials: true });
      console.log('Message send successfully:', response.data);
      toast.success('Order created succssfully');
      navigate(`/product`);
  
      setFormData({
        name: '',
        email: '',
        phoneNo: '',
        address: '',
        district: '',
        totalprice: decodedtotalAmount,
        orderItems: decodedProductName,
        paymentMethod:'',
      });
    } catch (error) {
      console.error('Error submitting contact request:', error.message);
      toast.error('Invalid process');
    }
  };
  

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      phoneNo: '',
      address: '',
      district: '',
      totalprice: decodedtotalAmount,
      orderItems: decodedProductName,
      paymentMethod:'',
    });
  }

    return (
      <div className="Order">
        <div className="popup-container">
  <div className="testbox">
    <form className="orderform"  onSubmit={handleSubmit}>
      <div className="banner">
        <h1>Decorative Ornaments Ordering Form</h1>
      </div>
      
      <div className="item">
        <p>Order Items</p>
        <textarea className='textarea' rows="4" name="orderItems"  value={decodedProductName}   onChange={(e) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));}} required></textarea>
      </div>
      <div className="item">
        <p>Total Price</p>
        <input className='inputorder' type="text" name="totalprice"  value={ decodedtotalAmount}   onChange={(e) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    })); }}required/>
      </div>
      <div className="item">
        <p>Name</p>
        <input className='inputorder' type="text" name="name" value={formData.name} onChange={handleChange} required/>
      </div>
      <div className="item">
        <p>Email</p>
        <input className='inputorder' type="email" name="email" value={formData.email} onChange={handleChange} required/>
      </div>
      <div className="item">
        <p>Phone Number</p>
        <input className='inputorder' type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required/>
      </div>
      <div className="item">
        <p>Address</p>
        <input className='inputorder' type="text" name="address" value={formData.address} onChange={handleChange} required/>
      </div>
      <div className="item">
        <p>District</p>
        <input className='inputorder' type="text" name="district" value={formData.district} onChange={handleChange} required/>
      </div>
      <div className="item">
              <p>Payment Method</p>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    onChange={handleChange}
                    checked={formData.paymentMethod === 'bank'}
                  />
                  Bank Transfer
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash_on_delivery"
                    onChange={handleChange}
                    checked={formData.paymentMethod === 'cash_on_delivery'}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>
      <div className="btn-block">
        <button className="btn-order" type="submit" >SEND</button>
      </div>
    </form>
  </div>
  </div>

      </div>
   );
}
           
export default Order;