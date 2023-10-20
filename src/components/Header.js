import { BiCodeAlt, BiDownload } from "react-icons/bi";
import Swal from 'sweetalert2'; // Import SweetAlert 2
import 'sweetalert2/src/sweetalert2.scss'; // Import SweetAlert 2 styles
import '../css/sweetalert2-custom.css'; // Import your custom SweetAlert 2 style
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const Header = () => {
    const handleDownloadCV = () => {
        MySwal.fire({
            title: 'Download CV?',
            text: 'Do you want to download the CV?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, download',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Trigger the download link if confirmed
                const downloadLink = document.createElement('a');
                downloadLink.href = '/assets/CV - Bautista, Lloyd Anthony M..pdf'; // Update with your file path
                downloadLink.download = 'CV - Lloyd Anthony Bautista.pdf'; // Set the download filename
                downloadLink.click();
            }
        });
    };

    return (
        <header className="header">
            <div className="logo">
                <div className="logo-icon"><BiCodeAlt/></div>
                <h2 className="logo-label">lamb.</h2>
            </div>
            <nav className="navbar">
                <a href="#home" className="active">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#services">SERVICES</a>
                <a href="#portfolio">PROJECTS</a>
                <a href="#contact">CONTACTS</a>
            </nav>
            <div className="cv-button">
                <a href="#home" onClick={ handleDownloadCV} className="cv-button-link">
                    <div className="cv-dl-icon"><BiDownload/></div>
                    <h2>CV</h2>
                </a>
            </div>
        </header>
    );
}

export default Header;
