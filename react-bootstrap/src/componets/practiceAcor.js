import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

import './practiceAcor.scss';

function practiceAcor() {
    return (
        <div>
            <Accordion defaultActiveKey="0">
                <Card bsPrefix="superCard" variant="flat">
                    <Card.Header className="card-head">
                    <h1>
                        This is some text
                    </h1>
                    <Accordion.Toggle as={Button} variant="mybutton" eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default practiceAcor
