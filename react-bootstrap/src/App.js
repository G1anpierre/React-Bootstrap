import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Accordion, Card, useAccordionToggle} from 'react-bootstrap';
import Accord from './componets/Accord';
import FAQ from './componets/faq';
import './App.scss';
import faq from './componets/faq';


function CustomToggle({children, eventKey}) {
  const decoratedOnClick = useAccordionToggle(eventKey, ()=> {
    console.log('totally custom!');
  })

  return (
    <button
      type="button"
      style={{ backgroundColor: 'pink'}}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  )
}

function PruebaChild(props) {
  return <div> Hello World </div>
}

function Welcome(props) {
  const { children, name} = props
  
  return (
      <div>
        <h1>Hello, {name}</h1> 
        <hr></hr>
       {children}
       </div>
    )
}


function App() {

  const [show, setShow] = useState(false);
  const [faqs, setfaqs] = useState([
    {
      question: 'How many programer does it take to screw in a lighzbulb?',
      answer: 'None. We dont address hardware issues',
      open: true,
      id:1
    },
    {
      question: 'who is the most awesome person?',
      answer: 'You. The Viewer',
      open: false,
      id:2
    },
    {
      question: 'How many questions does it take to make a succesful FAQ Page?',
      answer: 'This many.',
      open: false,
      id:3
    }
  ]);

  const toggleFAQ = id => {
    const elementMatch = faqs.filter((item) => {
      return item.id === id;
    });
    setfaqs(!elementMatch.open);

  }

  return (
    <div className="App">

      <Accord />

      <div className="faqs">
          {faqs.map( (faq) => {
            return( <FAQ faq={faq}  key={faq.id} id={faq.id} toggle={toggleFAQ}/> )
          })}
      </div>

       {/*  

      <Alert show={show} variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again.
        </p>
        <hr></hr>
        <div className="d-flex justify-content-end" >
          <Button onClick={() => setShow(false)} variant="outline-succes">
            Close me ya'll!
          </Button>
        </div>
      </Alert>

      <Container className="back-color" fluid="md">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="border" md={true}>1 of 3</Col>
          <Col className="border">2 of 3</Col>
          <Col className="border">3 of 3</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="border">1 of 3</Col>
          <Col className="border" xs={6}> 2 of 3 </Col>
          <Col className="border">3 of 3</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col className="border">1 of 3</Col>
          <Col className="border" md="auto">Variable width content</Col>
          <Col xs lg="2" className="border">
            3 of 3
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={true}>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={8}>
            xs={12} md={8}
          </Col>
          <Col xs={6} md={4}>
            xs={6} md={4}
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs> First, but unordered</Col>
          <Col xs={{ order: 12}}>Second, but last</Col>
          <Col xs={{ order: 1}}>Third, but second</Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            future alert
            <div>
              <Alert variant="myalert">
                This si  alert it out!
              </Alert>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="0">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <CustomToggle eventKey="1">Click me!</CustomToggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

          </Col>
        </Row>
      </Container>

    <Container>
      <Row>
        <Col>
          <div>
            <Welcome name="Gianpierre">
              
                <PruebaChild />
              
            </Welcome> 
          </div>
        </Col>
      </Row>
    </Container>


      {!show && <Button variant="myself" onClick={() => setShow(true)}>Show Alert</Button>}
    

    */}

    </div>  
  );
}

export default App;
