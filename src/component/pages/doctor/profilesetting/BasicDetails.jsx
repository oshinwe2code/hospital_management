import { useRef, useState } from "react";
import TagInput from "../../../common-element/TagInput";
import { FaImage } from "react-icons/fa";
import Input from "../../../common-element/Input";

const BasicDetails = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();

  // State to manage dynamic membership entries (initialize with one row)
  const [memberships, setMemberships] = useState([{ title: "", about: "" }]);

  // State to manage input field values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    languages: [],
  });

  // State to manage errors for validation
  const [errors, setErrors] = useState({});

  // Handle input change for personal details and membership fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMembershipChange = (index, field, value) => {
    const updatedMemberships = [...memberships];
    updatedMemberships[index][field] = value;
    setMemberships(updatedMemberships);
  };

  const handleAddMembership = () => {
    setMemberships([...memberships, { title: "", about: "" }]);
  };

  const handleRemoveMembership = (index) => {
    if (memberships.length > 1) {
      setMemberships(memberships.filter((_, i) => i !== index));
    }
  };

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

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    memberships.forEach((membership, index) => {
      if (!membership.title.trim()) {
        newErrors[`membership_title_${index}`] = "Membership title is required";
      }
      if (!membership.about.trim()) {
        newErrors[`membership_about_${index}`] = "Membership about is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
     alert("Form Submitted");
    }
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="col-md-12 p-0 overflow-hidden">
          <div className="content">
            <h3 className="font-weight-600 pt-4" style={{ fontSize: "1rem" }}>
              Profile
            </h3>
            <div className="w-100 d-flex gap-4 flex-wrap align-items-center px-4 py-2 border border-gray rounded-1">
              <div className="rounded-1" style={{ maxWidth: "100px" }}>
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
                <h4 className="font-size-2">Dr. John Doe</h4>
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
          <div className="pt-4">
            <h3 className="font-weight-700 p-0" style={{ fontSize: "1rem" }}>
              Personal Information
            </h3>
            <div className="form-group row py-4 mx-0 border border-gray rounded-1">
              <div className="col-md-4">
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>
              <div className="col-md-4">
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="col-md-4">
                <Input
                  label="Phone"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-danger">{errors.phone}</p>}
              </div>
              <div className="col-md-4">
                <Input
                  label="Address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="text-danger">{errors.address}</p>
                )}
              </div>
              <div className="col-md-4">
                <Input
                  label="City"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="text-danger">{errors.city}</p>}
              </div>
              <div className="col-md-4">
                <Input
                  label="State"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && <p className="text-danger">{errors.state}</p>}
              </div>
              <div className="col">
                <TagInput placeholder="Add a New" label="Known Languages" />
              </div>
            </div>

            {/* Membership Section */}
            <div>
              <h3 className="font-weight-bold pt-4" style={{ fontSize: "1rem" }}>
                Membership
              </h3>
              <div className="form-group py-4 border border-gray rounded-1">
                {memberships.map((membership, index) => (
                  <div className="row align-items-end mb-3 px-2" key={index}>
                    <div className="col-md-6 px-3">
                      <Input
                        label="Title"
                        type="text"
                        name={`membership_title_${index}`}
                        value={membership.title}
                        onChange={(e) =>
                          handleMembershipChange(
                            index,
                            "title",
                            e.target.value
                          )
                        }
                      />
                      {errors[`membership_title_${index}`] && (
                        <p className="text-danger">
                          {errors[`membership_title_${index}`]}
                        </p>
                      )}
                    </div>
                    <div className="col-md-6 px-3">
                      <Input
                        label="About Membership"
                        type="text"
                        name={`membership_about_${index}`}
                        value={membership.about}
                        onChange={(e) =>
                          handleMembershipChange(index, "about", e.target.value)
                        }
                      />
                      {errors[`membership_about_${index}`] && (
                        <p className="text-danger">
                          {errors[`membership_about_${index}`]}
                        </p>
                      )}
                    </div>
                    <div className="col-auto mb-3">
                      {memberships.length > 1 && (
                        <button
                          type="button"
                          className="btn text-danger"
                          onClick={() => handleRemoveMembership(index)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-end px-3">
                  <button
                    type="button"
                    className="c_btn_primary float-right"
                    onClick={handleAddMembership}
                  >
                    Add Membership
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="d-flex justify-content-end mt-3 px-3">
            <button className="c_btn" onClick={() => setFormData({})}>
              Cancel
            </button>
            <button className="c_btn_primary" onClick={handleSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
