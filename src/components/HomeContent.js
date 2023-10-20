import { BiLogoLinkedin, BiLogoGithub, BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
const HomeContent = () => {
    return(
        <section className="home" id="home">
             <div className="home-content">
                <h3>Hello, I'm</h3>
                <h1>Lloyd Bautista</h1>
                <h3>And I'm an aspiring <span className="multiple-entry">Web Developer</span></h3>
                <p>I am currently seeking for a position in a company where I can leverage my skills and expertise in the field of IT and contribute to a company that provides an opportunity for both personal and career growth.
                </p>
                <div className="social-media">
                    <a href="https://github.com/lambtsta">
                       <div className="social-media-icons"><BiLogoGithub/></div> 
                    </a>
                    <a href="https://www.linkedin.com/in/lloyd-anthony-bautista-294240287/">
                       <div className="social-media-icons"> <BiLogoLinkedin/></div>
                    </a>
                    <a href="https://web.facebook.com/lloydanthony.bautista">
                        <div className="social-media-icons"><BiLogoFacebook/></div>
                    </a>
                    <a href="https://www.instagram.com/128la_mb/">
                        <div className="social-media-icons"><BiLogoInstagram/></div>
                    </a>
                </div>
                <a href="#about">
                    <div className="read-more-btn">
                        READ MORE
                    </div>
                </a>
        </div>
        <div className="home-img">
            <img src="/assets/programmer-hoodie.png" alt="programmer"/>
        </div>
        </section>
    );
}
export default HomeContent;
