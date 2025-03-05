import { useState, useRef } from 'react';
import { FaImage } from 'react-icons/fa';
import Input from '../../../common-element/Input';

const Experience = () => {
    const [experiences, setExperiences] = useState([
        {
            id: 1,
            title: '',
            company: '',
            yearsExperience: '',
            location: '',
            employmentType: 'Full Time',
            description: '',
            startDate: '',
            endDate: '',
            currentlyWorking: false,
            image: null,
            errors: {},
        },
    ]);

    const fileInputRefs = useRef([]);

    const handleChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        updatedExperiences[index][field] = value;
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        setExperiences(prevExperiences => {
            const newId = prevExperiences.length > 0
                ? Math.max(...prevExperiences.map(exp => exp.id)) + 1
                : 1;
            return [
                ...prevExperiences,
                {
                    id: newId,
                    title: '',
                    company: '',
                    yearsExperience: '',
                    location: '',
                    employmentType: 'Full Time',
                    description: '',
                    startDate: '',
                    endDate: '',
                    currentlyWorking: false,
                    image: null,
                    errors: {},
                },
            ];
        });
    };

    const deleteExperience = (id) => {
        if (experiences.length > 1)
            setExperiences(experiences.filter(exp => exp.id !== id));
    };

    const handleImageUpload = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newExperiences = [...experiences];
                newExperiences[index].image = e.target.result;
                setExperiences(newExperiences);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUploadClick = (index) => {
        if (fileInputRefs.current[index]) {
            fileInputRefs.current[index].click();
        }
    };

    const handleRemoveImage = (index) => {
        const newExperiences = [...experiences];
        newExperiences[index].image = null;
        setExperiences(newExperiences);
    };

    const validateForm = () => {
        let valid = true;
        const updatedExperiences = experiences.map((experience) => {
            const errors = {};

            if (!experience.title) {
                errors.title = 'Title is required';
                valid = false;
            }

            if (!experience.company) {
                errors.company = 'Company is required';
                valid = false;
            }

            if (!experience.yearsExperience) {
                errors.yearsExperience = 'Years of experience is required';
                valid = false;
            }

            if (!experience.location) {
                errors.location = 'Location is required';
                valid = false;
            }

            if (!experience.startDate) {
                errors.startDate = 'Start date is required';
                valid = false;
            }

            if (!experience.currentlyWorking && !experience.endDate) {
                errors.endDate = 'End date is required';
                valid = false;
            }

            return { ...experience, errors };
        });

        setExperiences(updatedExperiences);
        return valid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
           alert("form submitted ")
        } else {
            console.log("Form has errors.");
        }
    };

    return (
        <div className="w-100 pt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="font-weight-700">Experience</h2>
                <button className="c_btn_primary" onClick={addExperience} type="button">Add Experience</button>
            </div>

            <div className="accordion" id="experienceAccordion">
                {experiences.map((experience, index) => (
                    <div className="accordion-item shadow-lg mb-3" key={experience.id}>
                        <h2 className="accordion-header position-relative" id={`heading${experience.id}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${experience.id}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${experience.id}`}
                            >
                                {experience.title || experience.company
                                    ? `${experience.title} at ${experience.company}`
                                    : `Experience ${index + 1}`}
                            </button>
                            <button
                                className="c_btn_text text-danger position-absolute"
                                style={{ right: "40px", top: "50%", transform: "translateY(-50%)", zIndex: 10 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteExperience(experience.id);
                                }}
                                type="button"
                            >
                                <i className="fas fa-trash"></i> Delete
                            </button>
                        </h2>
                        <div
                            id={`collapse${experience.id}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading${experience.id}`}
                            data-bs-parent="#experienceAccordion"
                        >
                            <div className="accordion-body">
                                <div className="content">
                                    <div className="w-100 d-flex gap-4 flex-wrap align-items-center px-1 py-2">
                                        <div className="rounded-1" style={{ maxWidth: "100px" }}>
                                            {experience.image ? (
                                                <img
                                                    src={experience.image}
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
                                                ref={el => fileInputRefs.current[index] = el}
                                                style={{ display: "none" }}
                                                onChange={(e) => handleImageUpload(e, index)}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-size-2">Hospital Logo</h4>
                                            <button
                                                onClick={() => handleUploadClick(index)}
                                                className="border-0 text-primary pe-2 bg-transparent"
                                            >
                                                Upload Image
                                            </button>
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className="border-0 text-danger bg-transparent"
                                            >
                                                Remove
                                            </button>
                                            <p className="text-muted">Your image should be below 4 MB. Accepted formats: jpg, png, svg.</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <Input
                                                label="Title"
                                                type="text"
                                                name={`title-${experience.id}`}
                                                value={experience.title}
                                                onChange={(e) => handleChange(index, 'title', e.target.value)}
                                                error={experience.errors.title}
                                            />
                                            {experience.errors.title && <p className="text-danger">{experience.errors.title}</p>}
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                label="Hospital"
                                                type="text"
                                                name={`company-${experience.id}`}
                                                value={experience.company}
                                                onChange={(e) => handleChange(index, 'company', e.target.value)}
                                                error={experience.errors.company}
                                            />
                                            {experience.errors.company && <p className="text-danger">{experience.errors.company}</p>}
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                label="Years of Experience"
                                                type="text"
                                                name={`yearsExperience-${experience.id}`}
                                                value={experience.yearsExperience}
                                                onChange={(e) => handleChange(index, 'yearsExperience', e.target.value)}
                                                error={experience.errors.yearsExperience}
                                            />
                                            {experience.errors.yearsExperience && <p className="text-danger">{experience.errors.yearsExperience}</p>}
                                        </div>
                                        <div className="col-md-6">
                                            <Input
                                                label="Location"
                                                type="text"
                                                name={`location-${experience.id}`}
                                                value={experience.location}
                                                onChange={(e) => handleChange(index, 'location', e.target.value)}
                                                error={experience.errors.location}
                                            />
                                            {experience.errors.location && <p className="text-danger">{experience.errors.location}</p>}
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor={`employment-type-${experience.id}`} className="form-label">Employment Type</label>
                                            <select
                                                name={`employment-type-${experience.id}`}
                                                id={`employment-type-${experience.id}`}
                                                className="form-control w-100 font-size-1"
                                                value={experience.employmentType}
                                                onChange={(e) => handleChange(index, 'employmentType', e.target.value)}
                                            >
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-12">
                                            <label className="mb-1 mt-3">Description</label>
                                            <textarea
                                                name={`description-${experience.id}`}
                                                value={experience.description}
                                                onChange={(e) => handleChange(index, 'description', e.target.value)}
                                                rows={6}
                                                className="form-control"
                                                placeholder="Describe your experience"
                                            />
                                        </div>

                                        <div className="col-md-4">
                                            <Input
                                                label="Start Date"
                                                type="date"
                                                name={`startDate-${experience.id}`}
                                                value={experience.startDate}
                                                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                                                error={experience.errors.startDate}
                                            />
                                            {experience.errors.startDate && <p className="text-danger">{experience.errors.startDate}</p>}
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                label="End Date"
                                                type="date"
                                                name={`endDate-${experience.id}`}
                                                value={experience.endDate}
                                                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                                                disabled={experience.currentlyWorking}
                                                error={experience.errors.endDate}
                                            />
                                            {experience.errors.endDate && <p className="text-danger">{experience.errors.endDate}</p>}
                                        </div>

                                        <div className="col-md-4">
                                            <div className="form-check d-flex mt-3">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input me-2"
                                                    name={`currentlyWorking-${experience.id}`}
                                                    checked={experience.currentlyWorking}
                                                    onChange={(e) => handleChange(index, 'currentlyWorking', e.target.checked)}
                                                />
                                                <label className="form-check-label" htmlFor={`currentlyWorking-${experience.id}`}>
                                                    I am currently working here
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="c_btn_primary mt-3" onClick={handleSubmit} style={{marginLeft:"660px"}}>Save Experience</button>
        </div>
    );
};

export default Experience;
