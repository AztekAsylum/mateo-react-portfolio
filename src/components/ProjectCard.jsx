import { Container, Row, Col, Button, Card } from "react-bootstrap";

function ProjectCard(props) {
  const { 
    _id,
    imageUrl, 
    title, 
    description, 
    deployedUrl, 
    repoUrl 
    } = props.project;
  return (
    <Card key={_id} className="my-3">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
        <Card.Text className="text-center">{description}</Card.Text>
        <Container>
          <Row>
            <Col className="justify-content-center">
              <Button className="mx-auto ProjectButton" href={deployedUrl} target="_blank" variant="dark">
                Deployed App
              </Button>
            </Col>
            <Col className="justify-content-center">
              <Button className="mx-auto ProjectButton" href={repoUrl} target="_blank" variant="dark">
                Github Repo
              </Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
