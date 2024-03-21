import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import ShoppingCart from './cart.js';
import { GiShoppingBag } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const products = [
    {
      id: 1,
      name: "Brown Flower Vase",
      price: 600,
    },
    {
      id: 3,
      name: "Round Roll Vase",
      price: 420,
    },
    {
      id: 7,
      name: "Tree wall hanger",
      price: 550,
    },
    {
      id: 5,
      name: "Stripe vase",
      price: 450,
    },
    {
      id: 3,
      name: "Round Roll Vase",
      price: 420,
    }
    ,{
      id: 4,
      name: "Big Jaar Vase with quilled flowers and leaves",
      price: 750,
    },
   
    {
      id: 2,
      name: "Stripe Vase",
      price: 400,
    },
    {
      id: 5,
      name: "Stripe vase",
      price: 450,
    },
    {
      id: 6,
      name: "Cuboid Vase",
      price: 500,
    },
    {
      id: 7,
      name: "Tree wall hanger",
      price: 550,
    }
  ];

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProductsInCart([...productsInCart, newProduct]);
    toast.success('Product added to cart');
  };
  const handleQuantityChange = (productId, count) => {
    setProductsInCart((prevProducts) => {
      const updatedProducts = prevProducts.map((product) => {
        if (product.id === productId) {
          return { ...product, count };
        }
        return product;
      });
      return updatedProducts;
    });
  };

  const handleProductRemove = (product) => {
    setProductsInCart((prevProducts) =>
      prevProducts.filter((p) => p.id !== product.id)
    );
    toast.success(`${product.name} removed from cart`);
  };

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('loggedIn');
    if (isLoggedIn) {
      setLoggedIn(true);
      const userRole = sessionStorage.getItem('userRole');
      if (userRole === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogin = () => {
    sessionStorage.setItem('loggedIn', true);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn');
    setLoggedIn(false);
    toast.success('Logout successful');
  };

  return (
    <div className="Header">
<ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={handleQuantityChange}
        onProductRemove={handleProductRemove}
        addProductToCart={addProductToCart} // pass the addProductToCart function as a prop
      />

      <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
        <div className="container-fluid">
          <img
            src={require('./Assests/img/logo.png')}
            alt="Logo"
            style={{ width: '5rem', height: '4rem' }}
            className="img-fluid"
          />
          <Link to="/" className="navbar-brand">
            MASK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto" style={{ gap: '1rem' }}>
              <li className="nav-item">
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
                  {/* <a className="nav-link" href="index.html"> */}
                    Home
                  {/* </a> */}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <Link to="/services" style={{ textDecoration: 'none', color: '#fff' }}>
                  {/* <a className="nav-link" href="services"> */}
                    Services
                  {/* </a> */}
                </Link>
              </li>
              {isAdmin && (
                <li className="nav-item">
                 <a className="nav-link" href="http://localhost:5173/" target="_blank" rel="noopener noreferrer"  >
                  Dashboard
                 </a>
                </li>
              )}
            </ul>

            <button className="btn shopping-cart-btn" onClick={() => setCartVisible(true)}>
  <GiShoppingBag size={24} />
  {productsInCart.length > 0 && (
    <span className="product-count">{productsInCart.length}</span>
  )}
</button>
{/* <button className="btn shopping-cart-btn" onClick={() => {setCartVisible(true);
                if (products.length > 0) { addProductToCart(products[0]);}
              }}>
              <GiShoppingBag size={24} />
              {productsInCart.length > 0 && (
                <span className="product-count">{productsInCart.length}</span>
              )}
            </button> */}


            {!loggedIn ? (
              <button
                className="btn-login p-2 my-lg-0 my-2"
                id="getStartedBtn"
                onClick={handleLogin}
              >
                <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>
                  <img
                    src={require('./Assests/img/login.png')}
                    alt="Login"
                    style={{ height: '17px', width: '17px' }}
                  />{' '}
                  Login
                </Link>
              </button>
            ) : (
              <button
                className="btn-login p-2 my-lg-0 my-2"
                id="getStartedBtn"
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right"></i> Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

