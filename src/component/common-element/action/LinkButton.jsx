import React from 'react';
//import { FaLink } from 'react-icons/fa';
import { IoIosLink } from "react-icons/io"; // Importing the link icon

export default function LinkButton() {
    return (
        <div>
            <button type="button" className="btn btn-light btn-sm"> {/* Small button */}
                <IoIosLink /> {/* Link icon */}
            </button>
        </div>
    );
}
