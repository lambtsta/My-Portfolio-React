const ProjAid = (props) => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-box-img">
            <img src={props.icon} alt="icon" />
            </div>
            <div className="portfolio-box-content">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <div className="portfolio-app-container">
                {props.images.map((image, index) => (
                    <div className="aidukasyon" key={index}>
                    <img src={image} alt="projects-img" />
                    <span>{props.image_labels[index]}</span>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );

}
const ProjAtlantis = (props)=>{
    return(
        <div className="portfolio-container">
            <div className="portfolio-box-content">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <div className="portfolio-app-container">
                    {props.images.map((image, index) => (
                        <div className="atlantis" key={index}>
                        <img src={image} alt="projects-img" />
                        <span>{props.image_labels[index]}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="portfolio-box-img">
                    <img src={props.icon} alt="icon" />
                </div>
        </div>
    );
}

const ProjRMS = (props) => {
    return (
        <div className="portfolio-container">
            <div className="portfolio-box-img">
            <img src={props.icon} alt="icon" />
            </div>
            <div className="portfolio-box-content">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <div className="portfolio-app-container">
                {props.images.map((image, index) => (
                    <div className="rms" key={index}>
                    <img src={image} alt="projects-img" />
                    <span>{props.image_labels[index]}</span>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );

}
const ProjContent = () => {
    return (
        <section className="portfolio" id="portfolio">
                <h2 className="heading">Recent <span>Projects</span></h2>
                <ProjRMS
                icon="/assets/RMS.png"
                title="Research Management Services"
                desc="Research Management Services, or RMS, 
                is a web-based system that serves as a central repository for patent documents and published articles 
                contributed by students, instructors, and professors across all campuses of Batangas State University."
                images={[
                    "https://cdn-icons-png.flaticon.com/128/5968/5968332.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://cdn-icons-png.flaticon.com/128/1051/1051277.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://cdn-icons-png.flaticon.com/128/732/732190.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://img.icons8.com/?size=80&id=9Um0Q4sZ0QCC&format=png",
                    "https://cdn-icons-png.flaticon.com/128/5968/5968342.png?ga=GA1.1.1091421505.1676426509&track=ais"
                ]}
                image_labels={["PHP", "HTML", "CSS", "JavaScript", "JQuery", "PostgreSQL"]}
                />
                <ProjAtlantis
                
                icon="/assets/ATLANTIS.png"
                title="ATLANTIS Project"
                desc="ATLANTIS is a DOST funded project to check the current status of the aquaponics between mobile phone and edge device attached to a greenhouse."
                images={[
                    "https://cdn-icons-png.flaticon.com/128/760/760457.png",
                    "https://img.icons8.com/?size=80&id=baihjTL3IBX9&format=png",
                    "https://cdn-icons-png.flaticon.com/128/5968/5968342.png?ga=GA1.1.1091421505.1676426509&track=ais"
                ]}
                image_labels={["React", "Django (REST API)", "PostgreSQL"]}
                />
                <ProjAid
                icon="/assets/AID.png"
                title="AIDukasyon: An Educational Assistance Web Portal"
                desc="AIDukasyon is a Capstone Project intended for the 
                Local Government Unit of Alitagtag to serve the
                 application process of the educational assistance 
                 program of the LGU-Alitagtag."
                images={[
                    "https://cdn-icons-png.flaticon.com/128/5968/5968332.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://cdn-icons-png.flaticon.com/128/1051/1051277.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://cdn-icons-png.flaticon.com/128/732/732190.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png?ga=GA1.1.1091421505.1676426509&track=ais",
                    "https://img.icons8.com/?size=80&id=9Um0Q4sZ0QCC&format=png",
                    "https://cdn-icons-png.flaticon.com/128/5968/5968313.png"
                ]}
                image_labels={["PHP", "HTML", "CSS", "JavaScript", "JQuery", "MySQL"]}
                />
            </section>
        
        
    );
}
  

export default ProjContent;
  








  