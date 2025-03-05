import React, { useState } from 'react';
import Input from '../../common-element/Input';
import Swal from 'sweetalert2';
export default function Patient_Login() {
   const [formData, setFormData] = useState({
       email: '',
       phone: '',
       password: ''
   });
   const [loginWithPhone, setLoginWithPhone] = useState(false); // Toggle between email and phone login
   const [errors, setErrors] = useState({}); // To store validation errors

   // Handle input change
   const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
           ...formData,
           [name]: value,
       });
       setErrors({
           ...errors,
           [name]: '', // Reset error when user types
       });
   };

   // Form validation function
   const validateForm = () => {
       const newErrors = {};

       // Email validation (only when not logging in with phone)
       if (!loginWithPhone && !/\S+@\S+\.\S+/.test(formData.email)) {
           newErrors.email = 'Invalid email format';
       }

       // Phone validation (only when logging in with phone)
       if (loginWithPhone && !/^\d{10}$/.test(formData.phone)) {
           newErrors.phone = 'Phone number must be exactly 10 digits';
       }

       // Password validation
       if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(formData.password)) {
           newErrors.password = 'Password must be at least 8 characters and contain both letters and numbers';
       }

       setErrors(newErrors);
       return Object.keys(newErrors).length === 0; // Return true if no errors
   };

   // Handle form submission
   const handleSubmit = (e) => {
       e.preventDefault();

       if (validateForm()) {
           // Proceed with form submission (e.g., API call)
           Swal.fire({
                          icon: 'success',
                          title: 'Login Successfully !',
                          text: '',
                          confirmButtonText: 'OK'
                      });
       }
   };

   return (
       <div className="main-wrapper">
           <div className="login-content-info">
               <div className="container">
                   <div className="row justify-content-center">
                       <div className="col-lg-6 col-md-8">
                           <div className="account-content" style={{ padding: "30px 20px" }}>
                               <div className="account-info">
                                   <div className="login-title">
                                       <h2><b>Patient Login</b></h2>
                                       <p className="mb-0" style={{fontSize:"18px"}}>Enter your credentials to log in</p>
                                       <br></br>
                                       <p className="mb-0">
                                           Login with &nbsp;
                                           <a href="#" onClick={() => setLoginWithPhone(!loginWithPhone)}>
                                               {loginWithPhone ? 'Email' : 'Phone number'}
                                           </a>
                                       </p>
                                   </div>
                                   <br />
                                   <form onSubmit={handleSubmit} style={{ fontSize: "15px" }}>
                                       {!loginWithPhone ? (
                                           <div className="form-group">
                                               <Input
                                                   label="Email"
                                                   name="email"
                                                   value={formData.email}
                                                   onChange={handleChange}
                                                   placeholder="Enter your Email"
                                               />
                                               {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                                           </div>
                                       ) : (
                                           <div className="form-group">
                                               <Input
                                                   label="Phone Number"
                                                   name="phone"
                                                   value={formData.phone}
                                                   onChange={handleChange}
                                                   placeholder="Enter your Phone Number"
                                               />
                                               {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                                           </div>
                                       )}

                                       <div className="form-group">
                                           <Input
                                               label="Password"
                                               name="password"
                                               value={formData.password}
                                               onChange={handleChange}
                                               placeholder="Enter your Password"
                                               type="password"
                                           />
                                           {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                                       </div>

                                       <div className="mb-3">
                                           <button className="btn btn-primary-gradient btn-xl w-100 btn-primary" type="submit" style={{ borderRadius: "25px" }}>
                                               Login
                                           </button>
                                       </div>

                                       <div className="mb-3 text-center">
                                           <a href="/patientforgetpassword" className="forgot-password-link">Forgot Password?</a>
                                       </div>

                                       <div className="social-login-btn">
                                           <a href="javascript:void(0);" className="btn w-100" style={socialButtonStyle}>
                                               Sign in With Google
                                           </a>
                                           <a href="javascript:void(0);" className="btn w-100" style={socialButtonStyle}>
                                               Sign in With Facebook
                                           </a>
                                       </div>

                                       <div className="account-signup" style={{ textAlign: "center" }}>
                                           <p>Don't have an account? <a href="/patientregister">Sign Up</a></p>
                                       </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   );
}

const socialButtonStyle = {
   border: "1px solid lightgray",
   borderRadius: "20px",
   marginBottom: "10px",
   backgroundColor: "white",
   transition: "background-color 0.3s, border-color 0.3s",
   onMouseEnter: (e) => {
       e.target.style.backgroundColor = '#007bff';
       e.target.style.borderColor = '#007bff';
       e.target.style.color = 'white';
   },
   onMouseLeave: (e) => {
       e.target.style.backgroundColor = 'white';
       e.target.style.borderColor = 'lightgray';
       e.target.style.color = 'black';
   }
};
