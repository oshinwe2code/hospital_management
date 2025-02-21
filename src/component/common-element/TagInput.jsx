import { useState } from 'react';
import PropTypes from 'prop-types';

const TagInput = ({ placeholder = "Add a tag", onSubmit  ,label}) => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState("");

  // Add tag on Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      // Prevent form submission if inside a form
      e.preventDefault();

      // Avoid duplicate tags
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput("");
    }
  };

  // Remove a tag by index
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  // Save button handler
  const handleSave = () => {
    if (onSubmit) {
      onSubmit(tags);
    } else {
      console.log("Saved tags:", tags);
    }
  };

  return (
    <div>
      <label className="form-label c_label">{label}</label>
      <div className="d-flex flex-wrap align-items-center border rounded p-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="badge px-2  me-1 mb-1 d-flex align-items-center"
            style={{ backgroundColor: `rgb(235, 235, 236)` , color:`rgba(53, 52, 52, 0.71)` }}
          >
            {tag}
            <button
              type="button"
              className="btn-close btn-close-black btn-sm ms-1"
              aria-label="Remove"
              onClick={() => removeTag(index)}
            />
          </div>
        ))}
        <input
          type="text"
          className="flex-grow-1 border-0"
          style={{ minWidth: '100px' }}
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/* Save button */}
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

TagInput.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default TagInput;
