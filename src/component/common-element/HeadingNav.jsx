import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeadingNav = ({ icon, title, linktitle }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center py-4 bg-light w-100">
      <div className="d-flex align-items-center gap-2">
        <Link to="/">
          {icon && <span className="header-icon">{icon}</span>}
        </Link>
        <span className="py-1"> &#10095; </span> {/* Arrow with padding */}
        <span>{title}</span>
      </div>
      <h1 className="mt-2">{linktitle}</h1>
    </div>
  );
};

HeadingNav.propTypes = {
  icon: PropTypes.element, // Accepts a React component (icon)
  title: PropTypes.string.isRequired,
  linktitle: PropTypes.string,
};

export default HeadingNav;
