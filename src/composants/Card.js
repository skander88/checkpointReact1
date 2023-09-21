import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
function Cards() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://img.freepik.com/vecteurs-premium/logo-tete-lion_60438-41.jpg?w=740"
      />
      <Card.Body>
        <Card.Title>Lions Team</Card.Title>
        <Card.Text>
          Our club was created in 2003 in berlin/germany . We are recruting new
          members for future projects in 13 countries in europe .
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Creation : 2003</ListGroup.Item>
        <ListGroup.Item>place : Berlin (Deutschland)</ListGroup.Item>
        <ListGroup.Item>President : lionel Mueller</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Our logo</Card.Link>
        <Card.Link href="#">Join us</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
