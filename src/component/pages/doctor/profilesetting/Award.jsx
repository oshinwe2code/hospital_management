import { useState } from 'react';
import Input from '../../../common-element/Input';

const Award = () => {
    // State to manage multiple award entries
    const [award, setAward] = useState([
        {
            id: 1,
            award: '',
            year: '',
            description: '',
            errors: {}
        }
    ]);

    // Add a new award entry
    const addAward = () => {
        console.log("Adding award");
        setAward(prevAwards => {
            const newId =
                prevAwards.length > 0
                    ? Math.max(...prevAwards.map(exp => exp.id)) + 1
                    : 1;
            return [
                ...prevAwards,
                {
                    id: newId,
                    award: '',
                    year: '',
                    description: '',
                    errors: {}
                }
            ];
        });
    };

    // Delete an award entry
    const deleteAward = (id) => {
        if (award.length > 1) {
            setAward(award.filter(exp => exp.id !== id));
        }
    };

    // Handle changes in input fields for award entries
    const handleInputChange = (index, field, value) => {
        setAward(prevAwards => {
            const newAwards = [...prevAwards];
            newAwards[index][field] = value;
            return newAwards;
        });
    };

    // Form validation
    const validateForm = () => {
        let isValid = true;
        const updatedAwards = award.map((item) => {
            let errors = {};
            if (!item.award.trim()) errors.award = "Award name is required";
            if (!item.year.trim()) errors.year = "Year is required";

            if (Object.keys(errors).length > 0) isValid = false;
            return { ...item, errors };
        });

        setAward(updatedAwards);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = () => {
        if (validateForm()) {
           alert("form submit");
            // Proceed to submit the data
        } else {
            console.log("Form is invalid. Please correct the errors.");
        }
    };

    return (
        <div className="w-100 pt-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="font-weight-700">Award</h2>
                <button className="c_btn_primary" onClick={addAward} type="button">
                    Add Award
                </button>
            </div>

            {/* Accordion */}
            <div className="accordion" id="awardAccordion">
                {award.map((item, index) => (
                    <div className="accordion-item shadow-lg mb-3" key={item.id}>
                        <h2 className="accordion-header position-relative" id={`heading${item.id}`}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${item.id}`}
                                aria-expanded={index === 0 ? "true" : "false"}
                                aria-controls={`collapse${item.id}`}
                            >
                                {item.award
                                    ? item.award
                                    : `Award ${index + 1}`}
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
                                    deleteAward(item.id);
                                }}
                                type="button"
                            >
                                <i className="fas fa-trash"></i> Delete
                            </button>
                        </h2>
                        <div
                            id={`collapse${item.id}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading${item.id}`}
                            data-bs-parent="#awardAccordion"
                        >
                            <div className="accordion-body">
                                <div className="content">
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <Input
                                                label="Award"
                                                type="text"
                                                name={`award-${item.id}`}
                                                value={item.award}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'award', e.target.value)
                                                }
                                                error={item.errors.award}
                                            />
                                            {item.errors.award && <p className="text-danger">{item.errors.award}</p>}
                                        </div>

                                        <div className="col-md-4">
                                            <Input
                                                label="Year"
                                                type="date"
                                                name={`year-${item.id}`}
                                                value={item.year}
                                                onChange={(e) =>
                                                    handleInputChange(index, 'year', e.target.value)
                                                }
                                                error={item.errors.year}
                                            />
                                            {item.errors.year && <p className="text-danger">{item.errors.year}</p>}
                                        </div>

                                        <div className="col-md-12">
                                            <Input
                                                label="Description"
                                                type="text"
                                                name={`description-${item.id}`}
                                                value={item.description}
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

            <div className="d-flex justify-content-end gap-2">
                <button className="c_btn" type="button">Cancel</button>
                <button className="c_btn_primary" type="button" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
};

export default Award;
