import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { projectData } from "../data/projectData";
import HomePageCard from "../components/HomePageCard";

const featuredProjects = [projectData[0], projectData[1], projectData[2]];

function CustomCard() {
  return (
    <Container>
      <Row className="pt-3">
        <Col md={8} className="mb-5 mb-md-2 mx-auto">
          <Image src="/Assets/Images/Mateo.jpg" className="AboutMePhoto" />
        </Col>
        <Col md={3} className="mt-0 mx-auto">
          <Row className="pt-0 mt-0">
            {featuredProjects.map((project) => {
              return (
                <Col xs={12} className="mx-auto pb-5 pt-0 mt-0">
                  <a target="_blank" href={project.deployedUrl}>
                    <HomePageCard project={project} />
                  </a>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={11} className="mx-auto text-center AboutMeText">
          <p>
          I specialize in sleek front-end design, merging my creative talents from graphic design into my role as a Front-End Developer. My experience spans graphic design, photography, and videography, allowing me to craft distinctive promotional content. I thrive in adapting creatively, working diligently, and valuing collaborative projects. Proficient in React.js, JavaScript, Node.js, SQL, CSS3, Espress.js, HTML5, MongoDB, and beyond! Excited about the opportunity to work with you soon!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomCard;
