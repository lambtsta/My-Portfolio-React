import { BiSolidGraduation } from "react-icons/bi";


const GradContainer = (props) =>{
    return(
        <div className="educ-bg-box">
            <div className="educ-bg-icon-container">
                <div className="educ-bg-box-icon">
                <BiSolidGraduation/>
                </div>
            </div>
            <div className="grad-wrapper-content">
                <h3>{props.degree}</h3>
                <span>{props.sy}</span>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}


const EducBgContent = () =>{
    return(
        <section className="educ-bg" id="educ-bg">
            <h2 className="heading"> Educational <span>Background</span></h2>
            <div className="educ-bg-container">
                <GradContainer 
                degree="College Degree"
                sy="S.Y. 2019 - 2020"
                desc="
                Graduated as Bachelor of Science in Information Technology Major in 
                Business Analytics at Batangas State University Alangilan Campus
                "
                />
                <GradContainer degree="Senior High School"
                sy="S.Y. 2017 - 2019"
                desc="
                Graduated as Science, Technology, Engineering, & Mathematics student at
                    Alitagtag Senior High School
                "
                />
                <GradContainer 
                degree="Junior High School"
                sy="S.Y. 2013 - 2019"
                desc="
                Graduated at Alitagtag National High School
                "
                />
            </div>
        </section>
    );
}
export default EducBgContent;