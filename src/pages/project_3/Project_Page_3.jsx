import "../project_page.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ProjectImg from "../../assets/links-corporate-consultants.jpg";
import ProjectImg2 from "../../assets/fresho-supermarket-logo.png";
import Canva from "../../assets/canva icon.png";
import Hootsuite from "../../assets/hootsuite icon.png";
import Slack from "../../assets/slack-icon.png";
import GoogleAnalytics from "../../assets/google analytics logo.png";
import PersonIcon from "../../assets/person-icon.png";
import AnalyticsIcon from "../../assets/analytic-icon.png";
import MediaIcon from "../../assets/media-icon.png";

const Project_Page_3 = () => {
  return (
    <div className="project__page">
      <Navbar />

      <div className="project-header">
        <h1>Social Media</h1>
        <p className="project-subtitle">Social media strategy</p>
      </div>

      <div className="project_intro">
        <div className="project_img_container">
          <div><img src={ProjectImg} alt="links-corporate-consultants-logo" /></div>
          <div><img className="img2" src={ProjectImg2} alt="fresho-supermarket-logo" /></div>
        </div>

        <div className="project_overview">
          <h2>Description</h2>

          <p>
            Developed and executed comprehensive social media content strategies for two different companies, focusing on engaging visuals and videos to enhance brand visibility and audience engagement on platforms like Instagram and YouTube.
          </p>

          <h2>Key Skills Used</h2>

          <p>
            Content creation, graphic design, video editing, social media strategy, project management.
          </p>

          <h2>Technologies Used</h2>

          <div className="tools_icons">
            <div className="icon_item">
              <img src={Canva} alt="Canva Icon" />
              <p>Canva</p>
            </div>

            <div className="icon_item">
              <img src={Hootsuite} alt="Hootsuite Icon" />
              <p>Hootsuite</p>
            </div>

            <div className="icon_item">
              <img src={Slack} alt="Slack Icon" />
              <p>Slack</p>
            </div>

            <div className="icon_item">
              <img src={GoogleAnalytics} alt="Google Analytics Icon" />
              <p>Google Analytics</p>
            </div>
          </div>
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
                Creating a content calendar to plan and organize posts, designing eye-catching posters, and producing short videos tailored for Instagram Reels and YouTube. This involved brainstorming creative concepts, collaborating with the clients to align with their brand identity, and ensuring timely delivery of all content.
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
              <li>
                Successfully increased audience engagement across all platforms, with measurable improvements such as increased likes, shares, and comments. The content resonated well with target demographics, leading to an uptick in follower growth for the companies involved.
              </li>
            </ul>
          </article>
        </div>

        <div className="project_card">
          <img src={MediaIcon} alt="Media Icon" />

          <h2>Media</h2>

          <p>Project Links:</p>

          <article>
            <ul>
              <li>- showing organic traffic growth.</li>

              <li>- illustrating keyword position improvements.</li>

              <li>- displaying the increase in referring domains.</li>
            </ul>
          </article>
        </div>
      </div>

      <div className="btn_container">
        <div><a
          href="//linksuae.ae/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex">
          Visit Links corporate Consultants Page
        </a></div>

        <div><a
          href="//freshosupermarket.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="button button--flex">
          Visit Fresho Supermarket Page
        </a></div>
      </div>
      <Footer />
    </div>
  );
};

export default Project_Page_3;
