import { useState, useRef } from 'react';
import { FaImage } from 'react-icons/fa';
import Input from '../../../common-element/Input';



const Experience = () => {
    // State to manage multiple experience entries
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
            image: null
        }
    ]);

    // Reference for file input
    const fileInputRefs = useRef([]);

    // Add a new experience entry
    const addExperience = () => {
        console.log("Adding experience");
        setExperiences(prevExperiences => {
          const newId =
            prevExperiences.length > 0
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
              image: null
            }
          ];
        });
      };
      ;

    // Delete an experience entry
    const deleteExperience = (id) => {
        if(experiences.length > 1)
        setExperiences(experiences.filter(exp => exp.id !== id));
    };

    // console.log(experiences.length);

    // Handle image upload
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

    // Handle upload button click
    const handleUploadClick = (index) => {
        if (fileInputRefs.current[index]) {
            fileInputRefs.current[index].click();
        }
    };

    // Handle remove image
    const handleRemoveImage = (index) => {
        const newExperiences = [...experiences];
        newExperiences[index].image = null;
        setExperiences(newExperiences);
    };

    return (
        <div className="w-100 pt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="font-weight-700">
                    Experience
                </h2>
                <button className="c_btn_primary" onClick={addExperience} type="button">Add Experience</button>
            </div>

            {/* Accordion */}
            <div className="accordion " id="experienceAccordion">
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
                                            {/* Hidden file input */}
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
                                            <p className="text-muted">
                                                Your image should be below 4 MB. Accepted formats: jpg, png,
                                                svg.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-4">
                                            <Input label="Title" type="text" name={`title-${experience.id}`} />
                                        </div>
                                        <div className="col-md-4">
                                            <Input label="Hospital" type="text" name={`company-${experience.id}`} />
                                        </div>
                                        <div className="col-md-4">
                                            <Input label="Years of Experience" type="text" name={`experience-${experience.id}`} />
                                        </div>
                                        <div className="col-md-6">
                                            <Input label="Location" type="text" name={`location-${experience.id}`} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor={`employment-type-${experience.id}`} className="form-label">Employment Type</label>
                                            <select name={`employment-type-${experience.id}`} id={`employment-type-${experience.id}`} className="form-control w-100 font-size-1">
                                                <option value="Full Time">Full Time</option>
                                                <option value="Part Time">Part Time</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-12">
                                            <Input label="Job Description" type="text-area" name={`description-${experience.id}`} />
                                        </div>

                                        <div className="col-md-4">
                                            <Input label="Start Date" type="date" name={`start-date-${experience.id}`} />
                                        </div>
                                        <div className="col-md-4">
                                            <Input label="End Date" type="date" name={`end-date-${experience.id}`} />
                                        </div>
                                        <div className="col-md-4 d-flex align-items-center gap-2 pt-3 text-capitalize">
                                            <input
                                                id={`currently-working-${experience.id}`}
                                                type="checkbox"
                                                name={`currently-working-${experience.id}`}
                                            />
                                            <label htmlFor={`currently-working-${experience.id}`}>I am currently working here</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-end gap-2">
                <button className='c_btn'>Cancel</button>
                <button className="c_btn_primary" type="button">Save</button>
            </div>
        </div>
    );
};

export default Experience;