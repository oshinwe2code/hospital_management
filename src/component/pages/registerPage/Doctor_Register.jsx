import React, { useState } from 'react'
import Input from '../../common-element/Input';
export default function Doctor_Register() {
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
                                        <br></br>
                                        <h2><b>Doctor Signup</b></h2>
                                        <p className="mb-0">Enter your credentials & create your account</p>
                                    </div>
                                    <br />
                                    <div className="login-title text-center">
                                        <h3 className="mb-3">
                                            <i className="bi bi-person-fill"></i> {/* Bootstrap user icon */}
                                            Step 1: Register
                                        </h3>
                                    </div>
                                    <form action="signup-success.html" style={{ fontSize: "15px" }}>
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




                                        <div className="mb-3">
                                            <button
                                                className="btn btn-primary-gradient btn-xl w-100 btn-primary"
                                                type="submit"
                                                style={{ borderRadius: "25px" }}
                                            >
                                                <a href="/doctorregister2" style={{color:"white"}}>Next</a>
                                            </button>
                                        </div>

                                        <div className="account-signup" style={{ textAlign: "center" }}>
                                            <p>Already have an account? <a href="/doctorlogin">Sign In</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
