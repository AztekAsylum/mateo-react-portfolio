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
            Mateo is a Full Stack Developer with a background in graphic design
            based in Denver, CO. Clean dark theme front-end design is his
            specialty. Additionally, he utilizes his experience in graphic
            design, photography, and video skills to create unique content for
            promo and engagement.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default CustomCard;
