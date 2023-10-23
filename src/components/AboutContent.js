const AboutContent = ()=>{
    return(
        <section className="about" id="about">
            <div className="about-img">
                <img src="/assets/lloyd.webp" alt="Lloyd"/>
                <div className="overlay-text">#Class of 2023 🎉</div>
            </div>
            <div className="about-content">
                <h2 className="heading">About<span>Me</span></h2>
                <h3>I'm a graduate of <span> Bachelor of Science in Information Technology</span></h3>
            <h3><span>Major in Business Analytics</span></h3>
            <p>In my specialization, we are taught how to transform data into a valuable insight that could be useful for data visualization and decision making. 
                I have a strong interest when it comes to technology and I enjoy in diving into the world of code and creating solutions.
                 I had the oppurtunity to be an intern at <span>Digital Transformation Center</span> located at STEER Hub inside 
                 Batangas State University Alangilan Campus where I served as a <span>Back-end Developer</span>.
             This experience allowed me to apply and further develop my skills in real-world scenarios </p>
            </div>
        </section>
    );
}
export default AboutContent;