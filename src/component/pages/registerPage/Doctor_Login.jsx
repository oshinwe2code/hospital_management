import React, { useState } from 'react';
import Input from '../../common-element/Input';

export default function Doctor_Login() {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: ''
    });
    const [loginWithPhone, setLoginWithPhone] = useState(false); // Toggle between email and phone login

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <div className="main-wrapper">
                <div className="login-content-info">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="account-content" style={{ padding: "30px 20px" }}>
                                    <div className="account-info">
                                        <div className="login-title">
                                            <h2><b>Doctor Login</b></h2>
                                            <p className="mb-0" style={{fontSize:"18px"}}>Enter your credentials to log in</p>
                                                 <br></br>
                                            {/* Add the "Login with Phone number" link */}
                                            <p className="mb-0">
                                            Login with &nbsp;
                                                <a href="#" onClick={() => setLoginWithPhone(!loginWithPhone)}>
                                                    {loginWithPhone ? 'Email' : 'Phone number'}
                                                </a>
                                            </p>
                                        </div>
                                        <br />
                                        <form action="login-success.html" style={{ fontSize: "15px" }}>
                                            {/* Conditional Input for Email or Phone */}
                                            {!loginWithPhone ? (
                                                <Input
                                                    label="Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your Email"
                                                />
                                            ) : (
                                                <Input
                                                    label="Phone Number"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your Phone Number"
                                                />
                                            )}

                                            {/* Password input */}
                                            <Input
                                                label="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Enter your Password"
                                                type="password"
                                            />

                                            <div className="mb-3">
                                                <button className="btn btn-primary-gradient btn-xl w-100 btn-primary" type="submit" style={{ borderRadius: "25px" }}>Login</button>
                                            </div>

                                            {/* Forgot password button */}
                                            <div className="mb-3 text-center">
                                                <a href="/patientforgetpassword" className="forgot-password-link">Forgot Password?</a>
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
                                                <p>Don't have an account? <a href="/doctorregister">Sign Up</a></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
