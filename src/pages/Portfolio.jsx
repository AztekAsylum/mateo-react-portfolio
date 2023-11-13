import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";
import { Container, Row, Col } from "react-bootstrap";

export default function Portfolio() {
  return (
    <Container>
      <Row className="pb-3">
        {projectData.map((project) => {
          return (
            <Col md={4} className="mx-auto py-3">
              <ProjectCard project={project} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
