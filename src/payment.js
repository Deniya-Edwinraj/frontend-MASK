// import React from 'react';
// import { Link } from 'react-router-dom';
// import './payment.css';

// function Payment() {
//     return (
//         <div className="Payment">
            // <header>
            //     <div className="container-payment">
            //         <div className="left">
            //             <h3>BILLING ADDRESS</h3>
            //             <form className="payment-form">
                            // <div>
                            //     <label htmlFor="name">Full name</label>
                            //     <input type="text" name="name" placeholder="Enter name" />
                            // </div>
                            // <div>
                            //     <label htmlFor="email">Email</label>
                            //     <input type="text" name="email" placeholder="Enter email" />
                            // </div>
                            // <div>
                            //     <label htmlFor="address">Address</label>
                            //     <input type="text" name="address" placeholder="Enter address" />
                            // </div>
                            // <div>
                            //     <label htmlFor="city">City</label>
                            //     <input type="text" name="city" placeholder="Enter City" />
                            // </div>
                            // <div id="zip">
                            //     <label htmlFor="state">
                            //         State
                            //         <select name="state">
                            //             <option>Choose State..</option>
                            //             <option>Sri Lanka</option>
                            //             <option>India</option>
                            //         </select>
                            //     </label>
                            //     <label htmlFor="zipCode">
                            //         Zip code
                            //         <input type="number" name="zipCode" placeholder="Zip code" />
                            //     </label>
                            // </div>
            //             </form>
            //         </div>
            //         <div className="right">
            //             <h3>PAYMENT</h3>
            //             <form>
                            // Accepted Card <br />
                            // <img src={require("./Assests/img/card1.png")} alt="card1" style={{ width: '20%' }} /><br />
                            // {/* <img src={require("./Assests/img/card2.png")} alt='card2' style={{width:'10%', height:'20%'}}/> */}
                            // <br></br>

                            // Credit card number
                            // <input type="text" name="" placeholder="Enter card number" />
                            // <div id="zip">
                            //     <label htmlFor="expMonth">
                            //         Exp month
                            //         <input type="text" name="expMonth" placeholder="Enter Month" />
                            //     </label>
                            //     </div>
                            //     <div id="zip">
                            //         <label htmlFor="expYear">
                            //             Exp year
                            //             <select name="expYear">
                            //                 <option>Choose Year..</option>
                            //                 <option>2024</option>
                            //                 <option>2025</option>
                            //                 <option>2026</option>
                            //                 <option>2027</option>
                            //                 <option>2028</option>
                            //             </select>
                            //         </label>
                            //         <label htmlFor="cvv">
                            //             CVV
                            //             <input type="number" name="cvv" placeholder="CVV" />
                            //         </label>
                            //     </div>
//                             <Link to="/product" >
//                             <input type="submit" name="" value="Proceed to Checkout" />
//                             </Link>
            //             </form>
            //         </div>
            //     </div>
            // </header>
//         </div>
//     );
// }

// export default Payment;

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './payment.css';

// function Payment() {
//     const [stripeApiKey, setStripeApiKey] = useState('');

//     useEffect(() => {
//         fetch('http://localhost:5000/api/payment/sendapi', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Authorization': `Bearer ${yourAuthTokenHere}`
//             }
//         })
//             .then(response => response.json())
//             .then(data => setStripeApiKey(data.stripeApiKey))
//             .catch(error => console.error('Error fetching Stripe API key:', error));
//     }, []);

//     const handlePayment = () => {
//     };

//     return (
//         <div className="Payment">
//             <header>
//                 <div className="container-payment">
//                     <div className="left">
//                         <h3>BILLING ADDRESS</h3>
//                         <form className="payment-form">
//                         <div>
//                                 <label htmlFor="name">Full name</label>
//                                 <input type="text" name="name" placeholder="Enter name" />
//                             </div>
//                             <div>
//                                 <label htmlFor="email">Email</label>
//                                 <input type="text" name="email" placeholder="Enter email" />
//                             </div>
//                             <div>
//                                 <label htmlFor="address">Address</label>
//                                 <input type="text" name="address" placeholder="Enter address" />
//                             </div>
//                             <div>
//                                 <label htmlFor="city">City</label>
//                                 <input type="text" name="city" placeholder="Enter City" />
//                             </div>
//                             <div id="zip">
//                                 <label htmlFor="state">
//                                     State
//                                     <select name="state">
//                                         <option>Choose State..</option>
//                                         <option>Sri Lanka</option>
//                                         <option>India</option>
//                                     </select>
//                                 </label>
//                                 <label htmlFor="zipCode">
//                                     Zip code
//                                     <input type="number" name="zipCode" placeholder="Zip code" />
//                                 </label>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="right">
//                         <h3>PAYMENT</h3>
//                         <form>
//                         Accepted Card <br />
//                             <img src={require("./Assests/img/card1.png")} alt="card1" style={{ width: '20%' }} /><br />
//                             {/* <img src={require("./Assests/img/card2.png")} alt='card2' style={{width:'10%', height:'20%'}}/> */}
//                             <br></br>

//                             Credit card number
//                             <input type="text" name="" placeholder="Enter card number" />
//                             <div id="zip">
//                                 <label htmlFor="expMonth">
//                                     Exp month
//                                     <input type="text" name="expMonth" placeholder="Enter Month" />
//                                 </label>
//                                 </div>
//                                 <div id="zip">
//                                     <label htmlFor="expYear">
//                                         Exp year
//                                         <select name="expYear">
//                                             <option>Choose Year..</option>
//                                             <option>2024</option>
//                                             <option>2025</option>
//                                             <option>2026</option>
//                                             <option>2027</option>
//                                             <option>2028</option>
//                                         </select>
//                                     </label>
//                                     <label htmlFor="cvv">
//                                         CVV
//                                         <input type="number" name="cvv" placeholder="CVV" />
//                                     </label>
//                                 </div>                            
//                                 {/* <Link to="/payment" > */}
//                                 <input type="button" value="Proceed to Checkout" onClick={handlePayment} />
//                             {/* </Link> */}
//                         </form>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default Payment;

// import React, { useState, useEffect } from 'react';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import './payment.css';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';

// function Payment() {
//     const [stripeApiKey, setStripeApiKey] = useState('');
//     const stripe = useStripe();
//     const elements = useElements();

//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const totalAmount = queryParams.get('totalAmount') || 'defaultTotalAmount';

//     useEffect(() => {
//         const token = 'sk_test_51Ora6CRqx8Fsqr19EPSESuKdd32z7EFozm4ybozMoCWPHyVKviuR6dcKZZPtMU76FQtYXun5BQbY1hSK92iOc02q006hXiDGDj';
//         fetch('http://localhost:5000/api/payment/sendapi', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//         })
//             .then(response => response.json())
            
//             .then(data => setStripeApiKey(data.stripeApiKey))
//             .catch(error => console.error('Error fetching Stripe API key:', error));
//     }, []);

//     const handlePayment = async () => {
//         if (!stripe || !elements) {
//           return;
//         }
      
//         try {
//           // Get the card Element
//           const cardElement = elements.getElement(CardElement);
      
//           // Validate the card Element
//           if (!cardElement) {
//             console.error('Invalid card element');
//             return;
//           }
      
//           // Create a payment intent on the server-side
//           const response = await fetch('http://localhost:5000/api/payment/process', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               amount: 1000, // Set the amount you want to charge in cents
//             }),
//           });
      
//           const { clientSecret } = await response.json();
      
//           // Confirm the payment intent on the client-side
//           const result = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//               card: cardElement,
//               billing_details: {
//                 name: 'Deniciya',
//                 email: 'deniciyaedwinraj@gmail.com',
//               },
//             },
//           });
      
//           if (result.error) {
//             console.error('Error confirming payment:', result.error);
//             // Handle the error
//           } else {
//             console.log('Payment confirmed:', result);
//             // Payment successful, redirect or show a success message
//           }
//         } catch (error) {
//           console.error('Error creating payment intent:', error);
//           // Handle the error
//         }
    
//     };  
    

//     return (
//         <div className="Payment">
//             <header>
//                 <div className="container-payment">
//                     <div className="left">
//                         <h3 style={{textAlign: 'center'}}>BILLING ADDRESS</h3>
//                         <form className="payment-form">
//                         <div>
//                                 <label htmlFor="name">Full name</label>
//                                 <input type="text" name="name" placeholder="Enter name" />
//                             </div>
//                             <div>
//                                 <label htmlFor="email">Email</label>
//                                 <input type="text" name="email" placeholder="Enter email" />
//                             </div>
//                             <div>
//                                 <label htmlFor="address">Address</label>
//                                 <input type="text" name="address" placeholder="Enter address" />
//                             </div>
//                             <div>
//                                 <label htmlFor="city">City</label>
//                                 <input type="text" name="city" placeholder="Enter City" />
//                             </div>
//                             <div id="zip">
//                                 <label htmlFor="state">
//                                     State
//                                     <select name="state">
//                                         <option>Choose State</option>
//                                         <option>Sri Lanka</option>
//                                         <option>India</option>
//                                     </select>
//                                 </label>
//                                 {/* <label htmlFor="zipCode">
//                                     Zip code
//                                     <input type="number" name="zipCode" placeholder="Zip code" />
//                                 </label> */}
//                             </div>
//                         </form>
//                     </div>
//                     <div className="right">
//                         <h3 style={{textAlign: 'center'}}>PAYMENT</h3>
//                         <form className='payment'>
//                         Accepted Card <br />
//                             <img src={require("./Assests/img/card1.png")} alt="card1" style={{ width: '20%' }} /><br /> 
//                             {/* <img src={require("./Assests/img/card2.png")} alt='card2' style={{width:'10%', height:'20%'}}/> */}
//                              <br></br>

//                             {/* Credit card number
//                             <input type="text" name="cardNumber" placeholder="Enter card number" />
//                             <div id="zip">
//                                 <label htmlFor="expMonth">
//                                     Exp month
//                                     <input type="text" name="expMonth" placeholder="Enter Month" />
//                                 </label>
//                                 </div>
//                                 <div id="zip">
//                                     <label htmlFor="expYear">
//                                         Exp year
//                                         <select name="expYear">
//                                             <option>Choose Year..</option>
//                                             <option>2024</option>
//                                             <option>2025</option>
//                                             <option>2026</option>
//                                             <option>2027</option>
//                                             <option>2028</option>
//                                         </select>
//                                     </label>
//                                     <label htmlFor="cvv">
//                                         CVV
//                                         <input type="number" name="cvv" placeholder="CVV" />
//                                     </label>
//                                 </div>    */}
                                
                                                         
//                                 <div>
//                                 <label htmlFor="card">Credit Card</label><br/>
//                                 <CardElement id="card" options={{ style: { base: { fontSize: '16px', color:' #FFD700' } } }} />
//                             </div><br/>
//                             <input type="button" value="Proceed to Checkout" onClick={handlePayment} />
//                         </form>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     );
// }

// export default Payment;
