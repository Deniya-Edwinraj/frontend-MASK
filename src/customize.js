// import React from 'react';
// import './customize.css';
// // import { Link } from 'react-router-dom';

// function Customize () {
//   return (
//     <div className="Customize">

// <div class="form-container">
//   <div class="testbox-cus">
//     <form action="" className='customize-form'>
//       <div class="banner-cus">
//         <h1> Customize As You Wish</h1>
//       </div>
//       <div class="item">
//         <p>Product Name</p>
//         <input type="text" name="name" required/>
//       </div>
//       <div class="item">
//         <p>Category</p>
//         <input type="text" name="category" required/>
//       </div>
//       <div class="item">
//         <p>Size</p>
//         <input type="text" name="category"/>
//       </div>
//       <div class="item">
//         <p>Colour</p>
//         <input type="text" name="category"/>
//       </div>
//       <div class="item">
//         <p>Extra Features that need to add</p>
//         <textarea rows="4" ></textarea>
//       </div>
//       <div class="btn-block">
//         <button class="btn5" type="submit" href="/">Add to cart</button>
//       </div>
//     </form>
//   </div>
//   </div>
   
//     </div>
//     );
//   }
  
//   export default Customize;


// import React from 'react'
// import './customize.css'
// import ModalComponent from './Modal'

// const Customize = () => {
//   return (
//     <div className="Customize">
//       <div class="form-container">
//         <div class="testbox-cus">
//           <form action="" className='customize-form'>
//             <div class="banner-cus">
//               <h1> Customize As You Wish</h1>
//             </div>
//             <div class="item">
//               <p>Product Name</p>
//               <input type="text" name="name" required />
//             </div>
//             <div class="item">
//               <p>Category</p>
//               <input type="text" name="category" required />
//             </div>
//             <div class="item">
//               <p>Size</p>
//               <input type="text" name="category" />
//             </div>
//             <div class="item">
//               <p>Colour</p>
//               <input type="text" name="category" />
//             </div>
//             <div class="item">
//               <p>Extra Features that need to add</p>
//               <textarea rows="4" ></textarea>
//             </div>
//             <div class="btn-block">
//               <ModalComponent buttonText="Add to cart">
//                 <p>Product added to cart!</p>
//               </ModalComponent>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Customize;

// import React, { useState } from 'react';
// import './customize.css';
// import { Link } from 'react-router-dom';

// function Customize() {

//   return (
//     <div className="Customize">
//       <div class="form-container">
//         <div class="testbox-cus">
//           <form action="" className="customize-form">
//           <div class="banner-cus">
//                <h1> Customize As You Wish</h1>
//              </div>
//              <div class="item">
//                <p>Product Name</p>
//                <input type="text" name="name" required />
//              </div>
//              <div class="item">
//                <p>Category</p>
//                <input type="text" name="category" required />
//              </div>
//              <div class="item">
//                <p>Size</p>
//                <input type="text" name="category" />
//              </div>
//              <div class="item">
//                <p>Colour</p>
//               <input type="text" name="category" />
//             </div>
//             <div class="item">
//                 <p>Extra Features that need to add</p>
//               <textarea rows="4" ></textarea>
//              </div>            
//              <div class="btn-block">
//               <Link to="/product">
//               <button class="btn5" type="button" >Add to cart</button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Customize;

import React, { useState } from 'react';
import './customize.css';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Customize({ item, handleClick }) {
  const { productName } = useParams();
  const decodedProductName = decodeURIComponent(productName)
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    product: decodedProductName,
    category: '',
    size: '',
    colour: '',
    extra_features: '',
    quantity: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'quantity' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/customize/new', formData, { withCredentials: true });
      console.log('Message sent successfully:', response.data);
      toast.success('Customized successfully');
      navigate('/product');

      setFormData({
        product: decodedProductName,
        category: '',
        size: '',
        colour: '',
        extra_features: '',
        quantity: 1
      });
    } catch (error) {
      console.error('Error submitting contact request:', error.message);
      console.error(error);
      toast.error('Invalid process');
    }
  };

  const handleClear = () => {
    setFormData({
      product: decodedProductName,
      category: '',
      size: '',
      colour: '',
      extra_features: '',
      quantity: 1
    });
  };

  return (
    <div className="Customize">
      <div className="form-container">
        <div className="testbox-cus">
          <form className="customize-form" onSubmit={handleSubmit}>
          <div className="banner-cus">
                <h1> Customize As You Wish</h1>
              </div>
              <div className="item">
                <p>Product Name</p>
                <input type="text" name="product" value={decodedProductName}   onChange={(e) => {
    setFormData((prevData) => ({
      ...prevData,
      name: e.target.value,
    }));
  }} required />
              </div>
              <div className="item">
                <p>Category</p>
                <select className='select-cus' name="category" value={formData.category} onChange={handleChange}>
                  <option value=""></option>
                  <option value="1">Flower Vase</option>
                  <option value="2">Wall Hangers</option>
                  <option value="3">Bouquets</option>
                  <option value="4">Lanterns</option>
                </select>
              </div>
              <div className="item">
                <p>Size</p>
                <input type="text" name="size" value={formData.size} onChange={handleChange}/>
              </div>
              <div className="item">
                <p>Colour</p>
               <input type="text" name="colour" value={formData.colour} onChange={handleChange} />
              </div>
              <div className="item">
                <p>Extra Features that need to add</p>
                <textarea rows="4" name="extra_features" value={formData.extra_features} onChange={handleChange}></textarea>
              </div>
            
              <div className="btn-block">
                {/* <Link to='/product'> */}
               <button className="btn5" type="submit" >Customize</button>
               {/* </Link> */}
             </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Customize;

