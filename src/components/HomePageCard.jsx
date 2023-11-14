import { Card, Ratio, Image } from "react-bootstrap";

function HomePageCard(props) {
  const { _id, imageUrl, title, description, deployedUrl, repoUrl } =
    props.project;
  return (
    <Card key={_id} className="CustomShadow ProjectCard ProjectImage">
      <Ratio aspectRatio={913 / 1462}>
        <Image className="rounded" src={imageUrl} />
      </Ratio>
      <Card.Body className="ProjectCardBody">
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default HomePageCard;
