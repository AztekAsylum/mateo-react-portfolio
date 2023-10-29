import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

export default function Portfolio() {
  return (
    <Container>
      <Row>
        {projectData.map((project) => {
          return (
            <Col md={4} className="mx-auto">
              <ProjectCard project={project} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
