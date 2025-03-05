import { useRef, useState } from "react";
import { FaImage } from "react-icons/fa";
import Input from "../../../common-element/Input";
import ChangePassword from "../../doctor/changepassword/ChangePassword";
import TwoFactorAuthentication from "../settings/TwoFactorAuthentication";
import DeleteAccount from "../settings/DeleteAccount";

const PatientProfile = () => {
  const [image, setImage] = useState(false);
  const [view, setView] = useState("profile"); // State to track active form
  const fileInputRef = useRef();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    dob: '',
    email: '',
    phone: '',
    blood_group: 'A+',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input change and validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  // Validate form
  const validateField = (name, value) => {
    let newErrors = { ...errors };

    // Basic validation rules for each field
    switch (name) {
      case 'first_name':
      case 'last_name':
        newErrors[name] = value.trim() === '' ? 'This field is required' : '';
        break;
      case 'dob':
        newErrors[name] = value === '' ? 'Please select a date of birth' : '';
        break;
      case 'email':
        newErrors[name] = !/\S+@\S+\.\S+/.test(value) ? 'Invalid email format' : '';
        break;
      case 'phone':
        newErrors[name] = !/^\d{10}$/.test(value) ? 'Phone number must be 10 digits' : '';
        break;
      case 'pincode':
        newErrors[name] = !/^\d{6}$/.test(value) ? 'Pincode must be 6 digits' : '';
        break;
      case 'address':
      case 'city':
      case 'state':
      case 'country':
        newErrors[name] = value.trim() === '' ? 'This field is required' : '';
        break;
      default:
        break;
    }

    setErrors(newErrors);
    setIsFormValid(Object.values(newErrors).every(error => error === ''));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Submitted successfully")
    } else {
      console.log("Form validation failed");
    }
  };

  // Image upload logic
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  // Helper function to render the active form
  const renderActiveForm = () => {
    if (view === "change-password") {
      return <ChangePassword />;
    } else if (view === "two-factor") {
      return <TwoFactorAuthentication />;
    } else if (view === "delete-account") {
      return <DeleteAccount />;
    } else {
      return (
        <form onSubmit={handleSubmit}>
          <div className="border-gray rounded-1 mt-3 p-3">
            <h5 className="font-size-1 border-bottom border-gray pb-2">
              <b>Profile Setting</b>
            </h5>

            {/* Profile Setting */}
            <div className="border border-gray rounded-1 mt-3">
              <h3 className="font-weight-bold pt-3 px-4" style={{ fontSize: "1rem" }}>
                Profile Photo
              </h3>
              <div className="w-100 d-flex gap-4 flex-wrap align-items-center px-4">
                <div className="bg-white rounded-1" style={{ maxWidth: "100px" }}>
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="img-fluid p-0 bg-white rounded-1"
                      style={{ maxWidth: "100%" }}
                    />
                  ) : (
                    <FaImage size={40} />
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </div>
                <div>
                  <button
                    onClick={handleUploadClick}
                    className="border-0 text-primary pe-2 bg-transparent"
                  >
                    Upload Image
                  </button>
                  <button
                    onClick={handleRemoveImage}
                    className="border-0 text-danger bg-transparent"
                  >
                    Remove
                  </button>
                  <p className="text-muted">
                    Your image should be below 4 MB. Accepted formats: jpg, png, svg.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="form-group py-4 p-0">
              <h3 className="font-weight-bold p-0" style={{ fontSize: "1rem" }}>
                Information
              </h3>
              <div className="row py-4 px-2 m-0 border border-gray rounded-1">
                <div className="col-md-4">
                  <Input label="First Name" name="first_name" value={formData.first_name} onChange={handleChange} />
                  {errors.first_name && <p className="text-danger">{errors.first_name}</p>}
                </div>
                <div className="col-md-4">
                  <Input label="Last Name" name="last_name" value={formData.last_name} onChange={handleChange} />
                  {errors.last_name && <p className="text-danger">{errors.last_name}</p>}
                </div>
                <div className="col-md-4">
                  <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
                  {errors.dob && <p className="text-danger">{errors.dob}</p>}
                </div>
                <div className="col-md-4">
                  <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                </div>
                <div className="col-md-4">
                  <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <p className="text-danger">{errors.phone}</p>}
                </div>
                <div className="col-md-4">
                  <label htmlFor="Blood Group" className="c_label">Blood Group</label>
                  <select
                    name="blood_group"
                    className="w-100 py-2 px-2 mt-2 border border-gray rounded-2"
                    value={formData.blood_group}
                    onChange={handleChange}
                  >
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                  </select>
                </div>
              </div>

              {/* Address Section */}
              <div className="form-group py-4">
                <h3 className="font-weight-bold" style={{ fontSize: "1rem" }}>
                  Address
                </h3>
                <div className="row py-4 px-2 m-0 border border-gray rounded-1">
                  <div className="col-lg-12">
                    <Input label="Address" name="address" value={formData.address} onChange={handleChange} />
                    {errors.address && <p className="text-danger">{errors.address}</p>}
                  </div>
                  <div className="col-lg-6">
                    <Input label="City" name="city" value={formData.city} onChange={handleChange} />
                    {errors.city && <p className="text-danger">{errors.city}</p>}
                  </div>
                  <div className="col-lg-6">
                    <Input label="State" name="state" value={formData.state} onChange={handleChange} />
                    {errors.state && <p className="text-danger">{errors.state}</p>}
                  </div>
                  <div className="col-lg-6">
                    <Input label="Country" name="country" value={formData.country} onChange={handleChange} />
                    {errors.country && <p className="text-danger">{errors.country}</p>}
                  </div>
                  <div className="col-lg-6">
                    <Input label="Pincode" name="pincode" type="number" value={formData.pincode} onChange={handleChange} />
                    {errors.pincode && <p className="text-danger">{errors.pincode}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-end">
            <button type="button" className="c_btn">Cancel</button>
            <button type="submit" className="c_btn_primary" disabled={!isFormValid}>Save Changes</button>
          </div>
        </form>
      );
    }
  };

  return (
    <div className="container pb-4">
      <div className="row gap-4">
        <div className="col p-0">
          <div className="d-flex gap-2 flex-wrap " style={{marginLeft:"13px"}}>
            <button
              className={`c_btn ${view === "profile" ? "active" : ""} border border-gray`}
              onClick={() => setView("profile")}
            >
              Profile
            </button>
            <button
              className={`c_btn ${view === "change-password" ? "active" : ""} border border-gray`}
              onClick={() => setView("change-password")}
            >
              Change Password
            </button>
            <button
              className={`c_btn ${view === "two-factor" ? "active" : ""} border border-gray`}
              onClick={() => setView("two-factor")}
            >
              2 Factor Authentication
            </button>
            <button
              className={`c_btn ${view === "delete-account" ? "active" : ""} border border-gray`}
              onClick={() => setView("delete-account")}
            >
              Delete Account
            </button>
          </div>

          {/* Render the active form based on the view */}
          {renderActiveForm()}
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
