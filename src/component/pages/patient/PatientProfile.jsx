import { useRef, useState } from "react";
import { FaHome, FaImage, } from "react-icons/fa";
import { Link } from "react-router";
import HeadingNav from "../../common-element/HeadingNav";
import Sidebar from "../../common-element/Sidebar";
import Input from "../../common-element/Input";
import img from "../../../assets/react.svg";
import { RxDashboard } from "react-icons/rx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";


const PatientProfile = () => {
  const [image, setImage] = useState(false);
  const fileInputRef = useRef();



  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // You can add validations here (size, type, etc.)
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger the hidden file input when Upload Image is clicked
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Remove the uploaded image
  const handleRemoveImage = () => {
    setImage(null);
  };

  const sidebarLinks = [
    { path: "/patient-dashboard", label: "Dashboard", icon: <i className="bi bi-speedometer2"></i> },
    { path: "/patient-appointment", label: "My Appointments", icon: <i className="bi bi-envelope"></i> },
    { path: "/patient-favourites", label: "Favourites", icon: <i className="bi bi-calendar-check"></i> },
    { path: "/patient-dependants", label: "Dependants", icon: <i className="bi bi-clock"></i> },
    { path: "/patient-medical-records", label: "Medical Records", icon: <i className="bi bi-person-check"></i> },
    { path: "/patient-wallet", label: "Wallet", icon: <i className="bi bi-wallet2"></i> },
    { path: "/patient-invoices", label: "Invoices", icon: <i className="bi bi-cash"></i> },
    { path: "/patient-message", label: "Message", icon: <i className="bi bi-share"></i> },
    { path: "/patient-vitals", label: "Vitals", icon: <i className="bi bi-heart-pulse"></i> },
    { path: "/patient-settings", label: "Settings", icon: <i className="bi bi-gear"></i> },
    { path: "/patient-logout", label: "Logout", icon: <i className="bi bi-box-arrow-right"></i> },
];


  return (
    <div className="container pb-4">
      <div className="row">
        <div>
          <HeadingNav
            icon={<FaHome />}
            title="Patient"
            linktitle="Patient Profile"
          />
        </div>
      </div>

      <div className="row gap-4">
        <div className="col-sm-3 border border-gray rounded-3 p-0 overflow-hidden">
          {/* Profile Card */}
          <div className=" c_profile_card c_background">
            <img
              src={img}
              alt="profile"
            />
            <Link to="/">
              Handrita Hayes
            </Link>
            <span className="text-muted pb-0">
              Patient Id: 1234
            </span>
            <span className=" font-weight-700 mb-0">
              Female 32 Years 3 months
            </span>

          </div>
          {/* Sidebar */}
          <Sidebar links={sidebarLinks} />
        </div>

        {/* Main Content Area */}
        <div className="col p-0">
          {/* Button Group */}
          <div className="d-flex gap-2 flex-wrap">
            <Link
              to="/update-profile"
              className="c_btn active border border-gray"
            >
              Profile
            </Link>
            <Link to="/update-profile" className=" c_btn  border border-gray">
              Change Password
            </Link>
            <Link to="/update-profile" className="c_btn border border-gray">
              2 Factor Authentication
            </Link>
            <Link to="/update-profile" className="c_btn border border-gray">
              Delete Account
            </Link>
          </div>

          {/* Basic Details */}
          <div className=" d-none border-gray rounded-1 mt-3 p-3">
            <h4 className="font-size-1 border-bottom border-gray pb-2">Profile Setting</h4>

            {/* Profile Setting */}
            <div className="border border-gray rounded-1 mt-3">
              <h3
                className="font-weight-bold pt-3 px-4"
                style={{ fontSize: "1rem" }}
              >
                Profile Photo
              </h3>
              <div className="w-100 d-flex gap-4 flex-wrap align-items-center px-4">
                <div className="bg-white rounded-1" style={{ maxWidth: "100px" }}>
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="img-fluid p-0  bg-white rounded-1"
                      style={{ maxWidth: "100%" }}
                    />
                  ) : (
                    <FaImage size={40} />
                  )}
                  {/* Hidden file input */}
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
                    Your image should be below 4 MB. Accepted formats: jpg, png,
                    svg.
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
                  <Input label="First Name" type="text" name="name" />
                </div>
                <div className="col-md-4">
                  <Input label="Last Name" type="text" name="name" />
                </div>
                <div className="col-md-4">
                  <Input label="Date of Birth" type="date" name="dob" />
                </div>
                <div className="col-md-4">
                  <Input label="Email Address" type="email" name="email" />
                </div>
                <div className="col-md-4">
                  <Input label="Phone Number" type="text" name="phone" />
                </div>
                <div className="col-md-4">
                  <label htmlFor="Blood Group" className="c_label">Blood Group</label>
                  <select name="Blood Group" id="" className="w-100 py-2 px-2 mt-2 border border-gray rounded-2">
                    <option value="">A+</option>
                    <option value="">A-</option>
                    <option value="">B+</option>
                    <option value="">B-</option>
                    <option value="">O+</option>
                  </select>
                </div>
              </div>

              <div className="form-group py-4">
                <h3 className="font-weight-bold" style={{ fontSize: "1rem" }}>
                  Address
                </h3>
                <div className="row py-4 px-2 m-0 border border-gray rounded-1">
                  <div className="col-lg-12">
                    <Input label="Address" type="text" name="address" />
                  </div>
                  <div className="col-lg-6">
                    <Input label="City" type="text" name="city" />
                  </div>
                  <div className="col-lg-6">
                    <Input label="State" type="text" name="state" />
                  </div>
                  <div className="col-lg-6">
                    <Input label="Country" type="text" name="country" />
                  </div>
                  <div className="col-lg-6">
                    <Input label="pincode" type="number" name="pincode" />
                  </div>
                </div>
              </div>

            </div>
            {/* submit button */}

            <div className="d-flex justify-content-end">
              <button className="c_btn">cancel</button>
              <button className="c_btn_primary">save changes</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PatientProfile;



