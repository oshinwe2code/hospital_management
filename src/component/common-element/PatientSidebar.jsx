import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Styles/general/Sidebar.css'; // Assuming similar CSS

const PatientSidebar = ({ links = [] }) => { // Default to an empty array
  return (
    <div className="c_sidebar">
      <ul className="c_list">
        {links.map((link, index) => (
          <li key={index} className="c_links">
            {link.icon && <span className="me-2">{link.icon}</span>}
            <Link to={`/patient/${link.path}`} className="text-decoration-none">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PatientSidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node, // icon is optional
    })
  ).isRequired,
};

export default PatientSidebar;
