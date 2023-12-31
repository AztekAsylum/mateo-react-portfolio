import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Ratio,
  Image,
} from "react-bootstrap";

function ProjectCard(props) {
  const { _id, imageUrl, title, description, deployedUrl, repoUrl } =
    props.project;
  return (
    <Card key={_id} className="mt-3 CustomShadow ProjectCard">
      <Ratio aspectRatio={913 / 1462}>
        <Image className="ProjectImage rounded" src={imageUrl} />
      </Ratio>
      <Card.Body className="ProjectCardBody">
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center">{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row className="pb-3">
            <Col className="justify-content-center">
              <Button
                className="mx-auto ProjectButton"
                href={deployedUrl}
                target="_blank"
                variant="dark"
              >
                Deployed App
              </Button>
            </Col>
            <Col className="justify-content-center">
              <Button
                className="mx-auto ProjectButton"
                href={repoUrl}
                target="_blank"
                variant="dark"
              >
                GitHub Repo
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default ProjectCard;
