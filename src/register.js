// import React, { useState } from 'react';
// import './login.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';


// function Register() {
//   const [name, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
  
//     const user = { name, email, password };
  
//     try {
//       const response = await axios.post('http://localhost:5000/api/users', user);
  
//       if (response.status === 201) {
//         console.log(response.data);
//       } else {
//         console.error(response.data);
//       }
//     } catch (error) {
//       console.error(error.response.data);
//     }
//   };

//   return (
//     <div className="Register">
//       <section className="login">
//         <div className="login-box">
//           <form onSubmit={handleSubmit} id="registerForm">
//             <h2>Register</h2>
//             <div className="input-box">
//               <span className="icon">
//                 <ion-icon name="person-outline"></ion-icon>
//               </span>
//               <input
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(event) => setUsername(event.target.value)}
//               />
//               <label>User name</label>
//             </div>
//             <div className="input-box">
//               <span className="icon">
//                 <ion-icon name="mail-outline"></ion-icon>
//               </span>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//               />
//               <label>Email</label>
//             </div>
//             <div className="input-box">
//               <span className="icon">
//                 <ion-icon name="lock-closed-outline"></ion-icon>
//               </span>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//               />
//               <label>Password</label>
//             </div>
            
//             <button className="btnlogin" type="submit">
//               Register
//             </button>
            
//             <div className="register-link">
//               <p>
//                 Already have an account?{' '}
//                 <Link to="/login">
//                   <a href="login" id="toggleLogin">
//                     Login
//                   </a>
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


function Register() {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = { name, email, password };

    try {
      const response = await axios.post('http://localhost:5000/api/users', user);

      if (response.status === 201) {

        const token = response.data.token;
        console.log(response.data)

        localStorage.setItem('token', token);
        toast.success('Registered successfully');
        navigate('/');
      } else {
        console.error(response.data);
        toast.error('Invalid user data');
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="Register">
      <section className="login">
        <div className="login-box">
          <form onSubmit={handleSubmit} id="registerForm">
            <h2>Register</h2>
            <div className="input-box">
              <span className="icon">
              <i className="bi bi-person-fill"></i>              
              </span>
              <input
                type="text"
                required
                value={name}
                onChange={(event) => setUsername(event.target.value)}
              />
              <label>User name</label>
            </div>
            <div className="input-box">
              <span className="icon">
              <i className="bi bi-envelope-fill"></i>              
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
              <span className="icon">
              <i className="bi bi-key-fill"></i>
              </span>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <label>Password</label>
            </div>

            <button className="btnlogin" type="submit">
              Register
            </button>

            <div className="register-link">
              <p>
                Already have an account?{' '}
                <Link to="/login">
                  <a href="login" id="toggleLogin">
                    Login
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Register;
