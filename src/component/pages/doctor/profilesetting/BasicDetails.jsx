import { useRef, useState } from 'react'

import TagInput from "../../../common-element/TagInput";
import { FaImage } from 'react-icons/fa';
import Input from '../../../common-element/Input';

const BasicDetails = () => {

    const [image, setImage] = useState(null);

    const fileInputRef = useRef();

    // State to manage dynamic membership entries (initialize with one row)
    const [memberships, setMemberships] = useState([{ title: "", about: "" }]);

    // Handle input change for membership fields
    const handleMembershipChange = (index, field, value) => {
        const updatedMemberships = [...memberships];
        updatedMemberships[index][field] = value;
        setMemberships(updatedMemberships);
    };

    const handleAddMembership = () => {
        setMemberships([...memberships, { title: "", about: "" }]);
    };

    const handleRemoveMembership = (index) => {
        // Only remove if there's more than one row
        if (memberships.length > 1) {
            setMemberships(memberships.filter((_, i) => i !== index));
        }
    };
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

        const handleUploadClick = () => {
            fileInputRef.current.click();
        };

        // Remove the uploaded image
        const handleRemoveImage = () => {
            setImage(null);
        };

        return (
            <div>
                <div className="">
                    <div className="content">
                        <h3
                            className="font-weight-600  pt-4"
                            style={{ fontSize: "1rem" }}
                        >
                            Profile
                        </h3>
                        <div className="w-100 d-flex gap-4 flex-wrap align-items-center px-4 py-2 border border-gray rounded-1">
                            <div className=" rounded-1" style={{ maxWidth: "100px" }}>
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
                                <Input label="Name" type="text" name="name" />
                            </div>
                            <div className="col-md-4">
                                <Input label="Email" type="email" name="email" />
                            </div>
                            <div className="col-md-4">
                                <Input label="Phone" type="text" name="phone" />
                            </div>
                            <div className="col-md-4">
                                <Input label="Address" type="text" name="address" />
                            </div>
                            <div className="col-md-4">
                                <Input label="City" type="text" name="city" />
                            </div>
                            <div className="col-md-4">
                                <Input label="State" type="text" name="state" />
                            </div>
                            <div className="col">
                                <TagInput placeholder="Add a New" label="Known Languages" />
                            </div>
                        </div>

                        {/* Membership Section */}
                        <div>
                            <h3
                                className="font-weight-bold pt-4"
                                style={{ fontSize: "1rem" }}
                            >
                                Membership
                            </h3>
                            <div className="form-group py-4 border border-gray rounded-1">
                                {memberships.map((membership, index) => (
                                    <div
                                        className="row align-items-end mb-3 px-2"
                                        key={index}
                                    >
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
                                        </div>
                                        <div className="col-md-6 px-3">
                                            <Input
                                                label="About Membership"
                                                type="text"
                                                name={`membership_about_${index}`}
                                                value={membership.about}
                                                onChange={(e) =>
                                                    handleMembershipChange(
                                                        index,
                                                        "about",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="col-auto mb-3  ">
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
                        <button className="c_btn">cancel</button>
                        <button className=" c_btn_primary">save changes</button>
                    </div>
                </div>
            </div>
        )
    }

    export default BasicDetails;