import { useState, useRef } from 'react';
import { FaImage } from 'react-icons/fa';
import Input from '../../../common-element/Input';

const Education = () => {
    const [education, setEducation] = useState([
        {
            id: 1,
            nameoftheInstitution: '',
            course: '',
            description: '',
            startDate: '',
            endDate: '',
            noofyears: '',
            image: null,
            errors: {}
        }
    ]);

    const fileInputRefs = useRef([]);

    const addEducation = () => {
        setEducation(prevEducations => {
            const newId = prevEducations.length > 0 ? Math.max(...prevEducations.map(exp => exp.id)) + 1 : 1;
            return [
                ...prevEducations,
                {
                    id: newId,
                    nameoftheInstitution: '',
                    course: '',
                    description: '',
                    startDate: '',
                    endDate: '',
                    noofyears: '',
                    image: null,
                    errors: {}
                }
            ];
        });
    };

    const deleteEducation = (id) => {
        if (education.length > 1) setEducation(education.filter(exp => exp.id !== id));
    };

    const handleImageUpload = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const newEducation = [...education];
                newEducation[index].image = e.target.result;
                setEducation(newEducation);
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
        const newEducation = [...education];
        newEducation[index].image = null;
        setEducation(newEducation);
    };

    const handleInputChange = (index, field, value) => {
        setEducation(prev => {
            const newEdu = [...prev];
            newEdu[index][field] = value;
            return newEdu;
        });
    };

    // Handle form validation
    const validateForm = () => {
        let isValid = true;
        const updatedEducation = education.map((edu) => {
            let errors = {};
            if (!edu.nameoftheInstitution.trim()) errors.nameoftheInstitution = "Institution name is required";
            if (!edu.course.trim()) errors.course = "Course is required";
            if (!edu.startDate.trim()) errors.startDate = "Start date is required";
            if (!edu.endDate.trim()) errors.endDate = "End date is required";
            if (!edu.noofyears.trim()) errors.noofyears = "Number of years is required";

            if (Object.keys(errors).length > 0) isValid = false;
            return { ...edu, errors };
        });

        setEducation(updatedEducation);
        return isValid;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            alert("Form is valid. Submit the data.");
            // Proceed to submit the data
        } else {
            console.log("Form is invalid. Please correct the errors.");
        }
    };

    return (
        <div className="w-100 pt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="font-weight-700">Education</h2>
                <button className="c_btn_primary" onClick={addEducation} type="button">
                    Add Education
                </button>
            </div>

            <div className="accordion" id="educationAccordion">
                {education.map((edu, index) => (
                    <div className="accordion-item shadow-lg mb-3" key={edu.id}>
                        <h2 className="accordion-header position-relative" id={`heading${edu.id}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${edu.id}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${edu.id}`}
                            >
                                {edu.nameoftheInstitution || edu.course
                                    ? `${edu.nameoftheInstitution} - ${edu.course}`
                                    : `Education ${index + 1}`}
                            </button>
                            <button
                                className="c_btn_text text-danger position-absolute"
                                style={{
                                    right: "40px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    zIndex: 10
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    deleteEducation(edu.id);
                                }}
                                type="button"
                            >
                                <i className="fas fa-trash"></i> Delete
                            </button>
                        </h2>
                        <div
                            id={`collapse${edu.id}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading${edu.id}`}
                            data-bs-parent="#educationAccordion"
                        >
                            <div className="accordion-body">
                                <div className="content">
                                    <div className="w-100 d-flex gap-4 flex-wrap align-items-center px-1 py-2">
                                        <div className="rounded-1" style={{ maxWidth: "100px" }}>
                                            {edu.image ? (
                                                <img
                                                    src={edu.image}
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
                                            <h4 className="font-size-2">Institution Logo</h4>
                                            <button
                                                onClick={() => handleUploadClick(index)}
                                                className="border-0 text-primary pe-2 bg-transparent"
                                                type="button"
                                            >
                                                Upload Image
                                            </button>
                                            <button
                                                onClick={() => handleRemoveImage(index)}
                                                className="border-0 text-danger bg-transparent"
                                                type="button"
                                            >
                                                Remove
                                            </button>
                                            <p className="text-muted">
                                                Your image should be below 4 MB. Accepted formats: jpg, png, svg.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <Input
                                                label="Name of the Institution"
                                                type="text"
                                                name="nameoftheInstitution"
                                                value={edu.nameoftheInstitution}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'nameoftheInstitution', e.target.value)
                                                }
                                                error={edu.errors.nameoftheInstitution}
                                            />
                                            {edu.errors.nameoftheInstitution && <p className="text-danger">{edu.errors.nameoftheInstitution}</p>}
                                        </div>
                                        <div className="col-md-6">
                                            <Input
                                                label="Course"
                                                type="text"
                                                name="course"
                                                value={edu.course}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'course', e.target.value)
                                                }
                                                error={edu.errors.course}
                                            />
                                            {edu.errors.course && <p className="text-danger">{edu.errors.course}</p>}
                                        </div>

                                        <div className="col-md-4">
                                            <Input
                                                label="Start Date"
                                                type="date"
                                                name="startDate"
                                                value={edu.startDate}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'startDate', e.target.value)
                                                }
                                                error={edu.errors.startDate}
                                            />
                                            {edu.errors.startDate && <p className="text-danger">{edu.errors.startDate}</p>}
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                label="End Date"
                                                type="date"
                                                name="endDate"
                                                value={edu.endDate}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'endDate', e.target.value)
                                                }
                                                error={edu.errors.endDate}
                                            />
                                            {edu.errors.endDate && <p className="text-danger">{edu.errors.endDate}</p>}
                                        </div>
                                        <div className="col-md-4">
                                            <Input
                                                label="No of Years"
                                                type="text"
                                                name="noofyears"
                                                value={edu.noofyears}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'noofyears', e.target.value)
                                                }
                                                error={edu.errors.noofyears}
                                            />
                                            {edu.errors.noofyears && <p className="text-danger">{edu.errors.noofyears}</p>}
                                        </div>
                                        <div className="col-md-12">
                                            <Input
                                                label="Description"
                                                type="textarea"
                                                name="description"
                                                value={edu.description}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'description', e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 text-end">
                <button className="c_btn_primary" onClick={handleSubmit} type="button">
                    Save
                </button>
            </div>
        </div>
    );
};

export default Education;
