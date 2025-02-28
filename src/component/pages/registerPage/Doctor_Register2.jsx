import React, { useState } from 'react';
import Input from '../../common-element/Input';

export default function Doctor_Register2() {
    const [formData, setFormData] = useState({
        phone: '',
        phoneCode: '',
        email: '',
        emailCode: ''
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
                                    <div className="login-title text-left">
                                        <br />
                                        <h2><b>Doctor Signup</b></h2>
                                        {/* Align the message to the left */}
                                        <p>To secure your account, create and complete the verification request.</p>
                                    </div>

                                    {/* Step 2: Verify Account heading */}
                                    <div className="login-title text-center">
                                        <h3 className="mb-3">
                                            <i className="bi bi-lock-fill"></i> {/* Bootstrap lock icon */}
                                            Step 2: Verify Account
                                        </h3>
                                    </div>

                                    {/* Form */}
                                    <form style={{ fontSize: "15px" }}>

                                        {/* Phone Code Input with Get Code button */}
                                        <div className="mb-3 d-flex justify-content-between align-items-center">
                                            <div style={{ flex: "1" }}>
                                                <Input
                                                    label="Phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                            <button className="btn btn-link" style={{ marginLeft: "10px" }}>Get Code</button>
                                        </div>

                                        <div className="mb-3 d-flex justify-content-between align-items-center">
                                            <div style={{ flex: "1" }}>
                                                <Input
                                                    label="Enter the 6-digit code sent to your phone"
                                                    name="phoneCode"
                                                    value={formData.phoneCode}
                                                    onChange={handleChange}
                                                    placeholder="Enter phone verification code"
                                                />
                                            </div>
                                        </div>

                                        {/* Email Input with Get Code button */}
                                        <div className="mb-3 d-flex justify-content-between align-items-center">
                                            <div style={{ flex: "1" }}>
                                                <Input
                                                    label="Email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <button className="btn btn-link" style={{ marginLeft: "10px" }}>Get Code</button>
                                        </div>

                                        <div className="mb-3 d-flex justify-content-between align-items-center">
                                            <div style={{ flex: "1" }}>
                                                <Input
                                                    label="Enter the 6-digit code sent to your email"
                                                    name="emailCode"
                                                    value={formData.emailCode}
                                                    onChange={handleChange}
                                                    placeholder="Enter email verification code"
                                                />
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="mb-3">
                                            <button className="btn btn-primary-gradient btn-xl w-100 btn-primary" type="submit" style={{ borderRadius: "25px" }}>Submit</button>
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
