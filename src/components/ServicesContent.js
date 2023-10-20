import { BiCodeBlock, BiPalette, BiCode } from "react-icons/bi";

const ServicesCont = (props) => {
    return (
      <div className="services-box">
        <div className="services-box-icon">{props.icon}</div>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <div className="app-container">
          {props.images.map((image, index) => (
            <img key={index} src={image} alt="services-img" />
          ))}
        </div>
      </div>
    );
  }
const Services = () =>{
  return(
    <section className="services" id="services">
      <h2 className=" heading">My <span>Services</span></h2>
      <div className="services-container">
        <ServicesCont
          icon={<BiCodeBlock/>}
          desc="I'm knowledgeable with web development technologies like PHP, HTML, JavaScript, and CSS. Additionally, I'm familiar with both MySQL and PostgreSQL for database management."
          title="Web Development"
          images={[
            "https://cdn-icons-png.flaticon.com/128/5968/5968332.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/1051/1051277.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/732/732190.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/5968/5968292.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/5968/5968313.png",
             "https://cdn-icons-png.flaticon.com/128/5968/5968342.png?ga=GA1.1.1091421505.1676426509&track=ais"
          ]}
        />
        <ServicesCont
          icon={<BiPalette/>}
          desc="I provide services to small businesses for creating their infographics and logos. I also accept commissions from students to create their PowerPoint presentations."
          title="Graphic Design"
          images={[
            "https://cdn-icons-png.flaticon.com/128/9813/9813966.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/732/732224.png?ga=GA1.1.1091421505.1676426509&track=ais" 
          ]}
        />
        <ServicesCont
          icon={<BiCode/>}
          desc="I also possess basic knowledge of Python (including Django REST API, Numpy, Matplotlib, Pandas), GIT Version Control System, Power BI, Figma(UI/UX), and Microsoft Office Suites."
          title="Additional Skills"
          images={[
            "https://cdn-icons-png.flaticon.com/128/5968/5968350.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/10055/10055317.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/5968/5968705.png",
            "https://cdn-icons-png.flaticon.com/128/732/732220.png?ga=GA1.1.1091421505.1676426509&track=ais",
            "https://cdn-icons-png.flaticon.com/128/888/888883.png?ga=GA1.1.1091421505.1676426509&track=ais",
           ]}
        />
      </div>
    </section>
  );
}

export default Services;
