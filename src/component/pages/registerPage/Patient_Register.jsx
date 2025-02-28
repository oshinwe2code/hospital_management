import React, { useState } from 'react';
import Input from '../../common-element/Input';

export default function Patient_Register() {
    // State to hold form input values
    const [formData, setFormData] = useState({
        phone: '',
        firstName: '',
        lastName: '',
        termsAccepted: false,
        email: '',
        password: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <div className="main-wrapper">
            <div className="login-content-info">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8"> {/* Adjusted width of form */}
                            <div className="account-content" style={{ padding: "30px 20px" }}> {/* Adjusted height of the form */}
                                <div className="account-info">
                                    <div className="login-title">
                                       
                                        <h2><b>Patient Signup</b></h2>
                                        <p className="mb-0">Enter your credentials & create your account</p>
                                    </div>
                                    <br />
                                    <form action="signup-success.html" style={{fontSize:"15px"}}>
                                        {/* Replacing input fields with the reusable Input component */}
                                        <Input
                                            label="First Name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter your first name"
                                        />

                                        <Input
                                            label="Last Name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Enter your last name"
                                        />
                                        <Input
                                            label="Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Enter your Number"
                                        />
                                        <Input
                                            label="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your Email Id"
                                        />
                                        <Input
                                            label="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter Password"
                                        />


                                        <div className="mb-3 form-check-box terms-check-box">
                                            <div className="form-group-flex">
                                                <div className="form-check mb-0">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="termsAccepted"
                                                        name="termsAccepted"
                                                        checked={formData.termsAccepted}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-check-label" htmlFor="termsAccepted" style={{ fontSize: "14px" }}>
                                                        I have read and agree to Doccure’s <a href="terms-condition.html">Terms of Service</a> and <a href="privacy-policy.html">Privacy Policy.</a>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <button className="btn btn-primary-gradient btn-xl w-100 btn-primary" type="submit" style={{ borderRadius: "25px" }}>Register Now</button>
                                        </div>

                                        <div className="social-login-btn">
                                            <a
                                                href="javascript:void(0);"
                                                className="btn w-100"
                                                style={{
                                                    border: "1px solid lightgray",
                                                    borderRadius: "20px",
                                                    marginBottom: "10px",
                                                    backgroundColor: "white", // Default background color
                                                    transition: "background-color 0.3s, border-color 0.3s" // Smooth transition for both border and background
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#007bff'; // Primary color on hover
                                                    e.target.style.borderColor = '#007bff'; // Primary border color on hover
                                                    e.target.style.color = 'white'; // Text color change on hover
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'white'; // Reset background color
                                                    e.target.style.borderColor = 'lightgray'; // Reset border color
                                                    e.target.style.color = 'black'; // Reset text color
                                                }}
                                            >
                                                Sign in With Google
                                            </a>

                                            <a
                                                href="javascript:void(0);"
                                                className="btn w-100"
                                                style={{
                                                    border: "1px solid lightgray",
                                                    borderRadius: "20px",
                                                    marginBottom: "10px",
                                                    backgroundColor: "white", // Default background color
                                                    transition: "background-color 0.3s, border-color 0.3s" // Smooth transition for both border and background
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#007bff'; // Primary color on hover
                                                    e.target.style.borderColor = '#007bff'; // Primary border color on hover
                                                    e.target.style.color = 'white'; // Text color change on hover
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'white'; // Reset background color
                                                    e.target.style.borderColor = 'lightgray'; // Reset border color
                                                    e.target.style.color = 'black'; // Reset text color
                                                }}
                                            >
                                                Sign in With Facebook
                                            </a>

                                        </div>

                                        <div className="account-signup" style={{textAlign:"center"}}>
                                            <p>Already have an account? <a href="/patientlogin">Sign In</a></p>
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
