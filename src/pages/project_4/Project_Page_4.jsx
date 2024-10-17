import "../project_page.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/al-jubail-city.jpg";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
// import MediaIcon from "../../assets/media-icon.png";

const Project_Page_4 = () => {
  return (
    <div className="project__page">
      <Navbar />

      <div className="project-header">
        <h1>City Branding</h1>
        <p className="project-subtitle">Branding</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <img src={ProjectImg} alt="Al Jubail City" />
        </div>

        <div className="project_overview">
          <h2>Description</h2>

          <p>
            Collaborated with a team on a large-scale city branding project for Al Jubail City, aiming to enhance its appeal for businesses and tourism. The initiative involved developing a comprehensive rebranding strategy to reshape the city&apos;s image and improve its brand perception.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            Brand strategy development, market research, stakeholder engagement, proposal writing.
          </p>
        </div>
      </div>

      <div className="project_body">
        <div className="project_card">
          <img src={PersonIcon} alt="Person Icon" />

          <h2>Role</h2>

          <p>In my role, I was responsible for:</p>

          <article>
            <ul>
              <li>
              I focused on developing a rebranding strategy that identified key strengths and unique selling points of Al Jubail City. This included conducting market research, stakeholder interviews, and competitor analysis to inform our approach. I also contributed to building a detailed proposal outlining our branding recommendations for the client.
              </li>
            </ul>
          </article>
        </div>

        <div className="project_card">
          <img src={AnalyticsIcon} alt="Analytics Icon" />

          <h2>Outcome</h2>

          <p>The project resulted in:</p>

          <article>
            <ul>
              <li>The project resulted in a well-received branding proposal that positioned Al Jubail City as a prime destination for businesses and tourists, leading to potential future marketing campaigns aimed at attracting investment and visitors.</li>
            </ul>
          </article>
        </div>

        {/* <div className="project_card">
          <img src={MediaIcon} alt="Media Icon" />

          <h2>Media</h2>

          <p>Visuals/Media:</p>

          <article>
            <ul>
              <li>- showing organic traffic growth.</li>

              <li>- illustrating keyword position improvements.</li>

              <li>- displaying the increase in referring domains.</li>
            </ul>
          </article>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Project_Page_4;
