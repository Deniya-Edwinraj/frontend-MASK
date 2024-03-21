import React,{useState}  from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Assests/bootstrap/css/bootstrap.min.css';
import './App.css';
import Header from './header';
import Body from './Body';
import Footer from './footer';
import Login from './login';
import Booking from './booking';
import Product from './dec-orn';
import Order from './order';
// import Payment from './payment';
import Register from './register';
import Customize from './customize';
import Services from './services';
import Cart from './cart';
// import PaymentHead from './paymentHead';

function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
  const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

	
  return (
    <>
    <ToastContainer />
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking/>} />
		  <Route path='/order/:productName/:totalAmount' element={<Order />} />
          {/* <Route path='/payment' element={<PaymentHead/>} /> */}
          <Route path='/register' element={<Register/>} />
		  <Route path="/customizeform/:productName" element={<Customize />} />
		      <Route path='/services' element={<Services/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </>

  );
}

export default App;

