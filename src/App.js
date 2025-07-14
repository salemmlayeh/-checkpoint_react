import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Card } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Salem Amine Mlayeh</Navbar.Brand>
          </Container>
        </Navbar>

        <Container className="mt-4">
          <h1>Welcome to My First Page</h1>

          <div className="d-flex justify-content-between mt-4">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>HTML</Card.Title>
                <Card.Text>HyperText Markup Language.</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>CSS</Card.Title>
                <Card.Text>Cascading Style Sheets.</Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>JS</Card.Title>
                <Card.Text>JavaScript.</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;