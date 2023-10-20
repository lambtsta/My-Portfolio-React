import { BiArrowToTop } from "react-icons/bi";


const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer-text">
                <p>© L.A.M.B. | 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-icon-top">
                <a href="#home">
                    <div className="footer-icon">
                        <BiArrowToTop/>
                    </div>
                </a>
            </div>
        </footer>
    );
}
export default Footer;