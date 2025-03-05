import React, { useState } from 'react';

export default function AddDependent() {
  const [formData, setFormData] = useState({
    name: '',
    relationship: '',
    dob: '',
    gender: 'male',
    profilePhoto: null,
  });
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handle file input differently
    }));
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.relationship.trim()) {
      newErrors.relationship = 'Relationship is required';
    }
    if (!formData.dob.trim()) {
      newErrors.dob = 'Date of Birth is required';
    }
    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }
    if (!formData.profilePhoto) {
      newErrors.profilePhoto = 'Profile photo is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission logic
      alert("submitted")
    }
  };

  return (
    <div className="modal fade custom-modals" id="add_dependent" tabIndex="-1" aria-labelledby="addDependentModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="addDependentModalLabel"><b>Add Dependent</b></h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12">
                  <label className="form-label">Profile Photo</label>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <i className="fa-solid fa-file-image fa-2x"></i>
                    </div>
                    <div>
                      <div className="d-flex">
                        <input type="file" className="form-control me-2" name="profilePhoto" onChange={handleChange} />
                        <button type="button" className="btn btn-outline-danger" onClick={() => setFormData((prev) => ({ ...prev, profilePhoto: null }))}>
                          Remove
                        </button>
                      </div>
                      <small className="text-muted">Your image should be below 4 MB, accepted formats: jpg, png, svg.</small>
                      {errors.profilePhoto && <p className="text-danger">{errors.profilePhoto}</p>}
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Relationship <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" name="relationship" value={formData.relationship} onChange={handleChange} required />
                  {errors.relationship && <p className="text-danger">{errors.relationship}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Date of Birth <span className="text-danger">*</span></label>
                  <div className="input-group">
                    <input type="text" className="form-control" name="dob" placeholder="MM/DD/YYYY" value={formData.dob} onChange={handleChange} required />
                    <span className="input-group-text"><i className="fa-solid fa-calendar"></i></span>
                  </div>
                  {errors.dob && <p className="text-danger">{errors.dob}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Select Gender <span className="text-danger">*</span></label>
                  <div className="d-flex">
                    <div className="form-check me-3">
                      <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check me-3">
                      <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                  </div>
                  {errors.gender && <p className="text-danger">{errors.gender}</p>}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">Add Dependent</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
