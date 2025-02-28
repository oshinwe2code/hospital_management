import React from 'react';
//import { FaDownload } from 'react-icons/fa'; // Importing the download icon
import { IoDownloadOutline } from "react-icons/io5";
export default function DownloadButton() {
    return (
        <div>
            <button type="button" className="btn btn-light btn-sm"> {/* Light-colored button */}
                <IoDownloadOutline /> {/* Download icon */}
            </button>
        </div>
    );
}
