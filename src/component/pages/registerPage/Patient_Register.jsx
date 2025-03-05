import React, { useState } from 'react';
import Input from '../../common-element/Input';
import Swal from 'sweetalert2';

export default function Patient_Register() {
    const [formData, setFormData] = useState({
        phone: '',
        firstName: '',
        lastName: '',
        termsAccepted: false,
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Handle input change with dynamic validation
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: newValue,
        });

        // Dynamically validate the field
        validateField(name, newValue);
    };

    // Validate individual field
    const validateField = (name, value) => {
        let newErrors = { ...errors };

        switch (name) {
            case 'firstName':
                if (!value.trim()) {
                    newErrors.firstName = 'First name is required';
                } else {
                    delete newErrors.firstName;
                }
                break;
            case 'lastName':
                if (!value.trim()) {
                    newErrors.lastName = 'Last name is required';
                } else {
                    delete newErrors.lastName;
                }
                break;
            case 'phone':
                if (!/^\d{10}$/.test(value)) {
                    newErrors.phone = 'Phone number must be exactly 10 digits';
                } else {
                    delete newErrors.phone;
                }
                break;
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    newErrors.email = 'Email is invalid';
                } else {
                    delete newErrors.email;
                }
                break;
            case 'password':
                if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(value)) {
                    newErrors.password = 'Password must contain at least 8 characters, including letters and numbers';
                } else {
                    delete newErrors.password;
                }
                break;
            case 'termsAccepted':
                if (!value) {
                    newErrors.termsAccepted = 'You must accept the terms and conditions';
                } else {
                    delete newErrors.termsAccepted;
                }
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    // Validate entire form on submission
    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(formData.password)) {
            newErrors.password = 'Password must contain at least 8 characters, including letters and numbers';
        }

        if (!formData.termsAccepted) {
            newErrors.termsAccepted = 'You must accept the terms and conditions';
        }

        setErrors(newErrors);

        // Return true if no errors
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            Swal.fire({
                icon: 'success',
                title: 'Form Submitted!',
                text: 'Your form has been successfully submitted.',
                confirmButtonText: 'OK'
            });
            // Form is valid, proceed with submission
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
                                        <h2><b>Patient Signup</b></h2>
                                        <p className="mb-0">Enter your credentials & create your account</p>
                                    </div>
                                    <br />
                                    <form onSubmit={handleSubmit} style={{ fontSize: "15px" }}>
                                        <div className="form-group">
                                            <Input
                                                label="First Name"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="Enter your first name"
                                            />
                                            {errors.firstName && <div style={{ color: 'red' }}>{errors.firstName}</div>}
                                        </div>

                                        <div className="form-group">
                                            <Input
                                                label="Last Name"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                placeholder="Enter your last name"
                                            />
                                            {errors.lastName && <div style={{ color: 'red' }}>{errors.lastName}</div>}
                                        </div>

                                        <div className="form-group">
                                            <Input
                                                label="Phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Enter your Number"
                                            />
                                            {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                                        </div>

                                        <div className="form-group">
                                            <Input
                                                label="Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your Email Id"
                                            />
                                            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                                        </div>

                                        <div className="form-group">
                                            <Input
                                                label="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="Enter Password"
                                            />
                                            {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                                        </div>

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
                                                {errors.termsAccepted && <div style={{ color: 'red' }}>{errors.termsAccepted}</div>}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <button className="btn btn-primary-gradient btn-xl w-100 btn-primary" type="submit" style={{ borderRadius: "25px" }}>Register Now</button>
                                        </div>

                                        <div className="account-signup" style={{ textAlign: "center" }}>
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
