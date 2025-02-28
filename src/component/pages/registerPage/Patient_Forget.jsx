import React, { useState } from 'react';
import Input from '../../common-element/Input';

export default function Patient_Forget() {
    // State to hold form input values
    const [formData, setFormData] = useState({
        email: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
                                        <h2><b>Forgot Password</b></h2>
                                        <p className="mb-0">Enter your email to reset your password</p>
                                    </div>
                                    <br />
                                    <form action="reset-password-success.html" style={{ fontSize: "15px" }}>
                                        {/* Email input */}
                                        <Input
                                            label="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your Email"
                                        />

                                        <div className="mb-3">
                                            <button className="btn btn-primary-gradient btn-xl w-100 btn-primary" type="submit" style={{ borderRadius: "25px" }}>Submit</button>
                                        </div>

                                        <div className="social-login-btn">
                                            <a
                                                href="javascript:void(0);"
                                                className="btn w-100"
                                                style={{
                                                    border: "1px solid lightgray",
                                                    borderRadius: "20px",
                                                    marginBottom: "10px",
                                                    backgroundColor: "white",
                                                    transition: "background-color 0.3s, border-color 0.3s"
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#007bff';
                                                    e.target.style.borderColor = '#007bff';
                                                    e.target.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.borderColor = 'lightgray';
                                                    e.target.style.color = 'black';
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
                                                    backgroundColor: "white",
                                                    transition: "background-color 0.3s, border-color 0.3s"
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.backgroundColor = '#007bff';
                                                    e.target.style.borderColor = '#007bff';
                                                    e.target.style.color = 'white';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.borderColor = 'lightgray';
                                                    e.target.style.color = 'black';
                                                }}
                                            >
                                                Sign in With Facebook
                                            </a>

                                        </div>

                                        <div className="account-signup" style={{ textAlign: "center" }}>
                                            <p>Remember your password? <a href="/patientlogin">Sign In</a></p>
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
