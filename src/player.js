import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <>
    {/* The Bootstrap Card component */}
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        <p>Team: {team}</p>
        <p>Nationality: {nationality}</p>
        <p>Jersey Number: {jerseyNumber}</p>
        <p>Age: {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};

export default Player;
