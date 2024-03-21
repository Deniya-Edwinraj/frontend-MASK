import React, { useState, useEffect } from 'react';
import './dec-orn.css';
import Custom from './custom';
import { toast } from 'react-toastify';
import ShoppingCart from './cart.js';

const Product = () => {
  const [ setProducts] = useState([]);
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
    fetch('http://localhost:5000/api/product/')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Custom></Custom>
      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={handleQuantityChange}
        onProductRemove={handleProductRemove}
        addProductToCart={addProductToCart} 
      />

      <div className="wrapper" id="products">
        <div className="category-filter">
          <div className="container">
            <div className="title">
              <h1 className="producth1">Our Products</h1>
            </div>
            <div className="filter-btns">
              <button type="button" className="filter-btn" id="all">
                all
              </button>
              <button type="button" className="filter-btn" id="Flower-Vases">
                Flower Vases
              </button>
              <button type="button" className="filter-btn" id="Wall-Hangers">
                Wall Hangers
              </button>
              <button type="button" className="filter-btn" id="Flower-Bouquets">
                Flower Bouquets
              </button>
              <button type="button" className="filter-btn" id="Lantern">
                Lanterns
              </button>
            </div>

            <div className="products">
              <ul className="cd-items cd-container">
                {products.map(product => (
                  <li
                    className="cd-item filter-item vegetables"
                    style={{ display: 'list-item' }}
                    key={product.id}
                  >
                    <article className="card__article">
                      <img
                        src={require('./Assests/img/vase1.jpg')}
                        className="card__img "
                        alt="image1"
                      />
                      <div className="card__data">
                        <h3 className="card__title">{product.name}</h3>
                        <h5 className="card__title">Rs: {product.price}</h5>
                        <button className="card__button" onClick={() => {setCartVisible(true);
                if (products.length > 0) { addProductToCart(products[0]);}
              }}>
                          Add to cart
                        </button>
{/* <button className="btn shopping-cart-btn" onClick={() => {setCartVisible(true);
                if (products.length > 0) { addProductToCart(products[0]);}
              }}>
              <GiShoppingBag size={24} />
              {productsInCart.length > 0 && (
                <span className="product-count">{productsInCart.length}</span>
              )}
            </button> */}
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;



// import React, { useState, useEffect } from 'react';
// import './dec-orn.css';
// import Custom from './custom';

// const Product = (props) => {
//   const [products, setProducts] = useState([]);
//   const handleAddToCart = (product) => {
//     props.addProductToCart(product); // call the addProductToCart function from the parent component
//   };

//   useEffect(() => {
//     fetch('http://localhost:5000/api/product/')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <>
//       <Custom></Custom>

//       <div className="wrapper" id="products">
//         <div className="category-filter">
//           <div className="container">
//             <div className="title">
//               <h1 className="producth1">Our Products</h1>
//             </div>
//             <div className="filter-btns">
//               <button type="button" className="filter-btn" id="all">
//                 all
//               </button>
//               <button type="button" className="filter-btn" id="Flower-Vases">
//                 Flower Vases
//               </button>
//               <button type="button" className="filter-btn" id="Wall-Hangers">
//                 Wall Hangers
//               </button>
//               <button type="button" className="filter-btn" id="Flower-Bouquets">
//                 Flower Bouquets
//               </button>
//               <button type="button" className="filter-btn" id="Lantern">
//                 Lanterns
//               </button>
//             </div>

//             <div className="products">
//               <ul className="cd-items cd-container">
//                 {products.map((product) => (
//                   <li
//                     className="cd-item filter-item vegetables"
//                     style={{ display: 'list-item' }}
//                     key={product.id}
//                   >
//                     <article className="card__article">
//                       <img
//                         src={require('./Assests/img/vase1.jpg')}
//                         className="card__img "
//                         alt="image1"
//                       />
//                       <div className="card__data">
//                         <h3 className="card__title">{product.name}</h3>
//                         <button className="card__button" onClick={() => handleAddToCart(product)}>Add to cart </button>
//                       </div>
//                     </article>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Product;








