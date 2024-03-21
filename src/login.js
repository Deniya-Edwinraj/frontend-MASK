// import React, { useState } from 'react';
// import './login.css';
// import { Link } from 'react-router-dom';


// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/users/auth', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // Handle successful login here (e.g., save the token and redirect)
//         console.log('Login successful:', data);
//       } else {
//         const error = await response.json();
//         // Handle error here (e.g., show an error message)
//         console.error('Login error:', error);
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//     }
//   };

//   return (
//     <div className="Login">
//       <section className="login">
//         <div className="login-box">
//           <form onSubmit={handleSubmit} id="loginForm">
//             <h2>Login</h2>
//             <div className="input-box">
//               <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-box">
//               <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//               <label>Password</label>
//             </div>
//             {/* <Link to="/"> */}
//             <button className="btnlogin" type="submit">Login</button>
//             {/* </Link> */}
//             <div className="register-link">
//               <p>
//                 Don't have an account? <Link to="/register"><a href="123" id="toggleRegister">Register</a></Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/api/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = response.data;
        localStorage.setItem('token', token);
      
  
        console.log('Login successful', data);
  
        const userRole = data.role;

        if (userRole === 'admin') {
          navigate('http://localhost:5173/');
          toast.success('Admin login successful');
        } else {
          navigate('/');
          toast.success('Login successful');
        }
        
      } else {
        const error = await response.json();
        console.error('Login error:', error);
        setLoginError('Invalid email or password');
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Network error:', error);
      setLoginError('Network error. Please try again.');
    }
  };
  

  return (
    <div className="Login">
      <section className="login">
        <div className="login-box">
          <form onSubmit={handleSubmit} id="loginForm">
            <h2>Login</h2>
            <div className="input-box">
              <span className="icon">
              <i className="bi bi-person-fill"></i>              
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><i className="bi bi-key-fill"></i></span>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label>Password</label>
            </div>

            <button className="btnlogin" type="submit">
              Login
            </button>

            {/* Display error message if there's a login error */}
            {loginError && <div className="error-message">{loginError}</div>}

            <div className="register-link">
              <p>
                Don't have an account? <Link to="/register"><a href="123" id="toggleRegister">Register</a></Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
