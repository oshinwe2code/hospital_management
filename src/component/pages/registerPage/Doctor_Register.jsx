import React, { useState, useEffect } from 'react';
import Input from '../../common-element/Input';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Doctor_Register() {
    const [formData, setFormData] = useState({
        phone: '',
        firstName: '',
        lastName: '',
        termsAccepted: false,
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false); // Track form validity
    const navigate = useNavigate(); // Initialize useNavigate for redirection

    // Handle input change
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });

        // Clear errors as the user types
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};

        // Check if firstName is empty
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }

        // Check if lastName is empty
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        // Check if phone number is 10 digits
        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number must be exactly 10 digits';
        }

        // Check if email is valid
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Check if password contains both letters and numbers
        if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/.test(formData.password)) {
            newErrors.password = 'Password must contain at least 8 characters, including letters and numbers';
        }

        setErrors(newErrors);

        // Return true if there are no errors
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
           console.log("done");
                navigate('/doctorregister2'); // Navigate to Doctor_Register2 if form is valid
            
        }
    };

    // Revalidate form on every formData change
    useEffect(() => {
        setIsFormValid(validateForm());
    }, [formData]);

    return (
        <div className="main-wrapper">
            <div className="login-content-info">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8"> {/* Adjusted width of form */}
                            <div className="account-content" style={{ padding: "30px 20px" }}> {/* Adjusted height of the form */}
                                <div className="account-info">
                                    <div className="login-title">
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

                                        <div className="mb-3">
                                            <button
                                                className="btn btn-primary-gradient btn-xl w-100 btn-primary"
                                                type="submit"
                                                disabled={!isFormValid} // Disable the button when form is invalid
                                                style={{
                                                    borderRadius: "25px",
                                                    cursor: isFormValid ? 'pointer' : 'not-allowed'
                                                }}
                                            >
                                                Next
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
    );
}
