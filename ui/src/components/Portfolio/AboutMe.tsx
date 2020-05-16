import React, { Component } from 'react';
import {
  Container
, Row
, Col
, Card
} from 'react-bootstrap';

export default class AboutMe extends Component {
  render (): JSX.Element {
    return (
      <div className='fadein page-padding'>
        <Container fluid>
          <Row>
            <Col />
            <Col sm={10} md={8} lg={6}>
              <h2 className='centered-text'>About Me</h2>
              <Card
                bg='dark'
              >
                <Card.Body>
                  <h4>Hi. My name is Junha Park.</h4>
                  <p>I&#39;m a seasoned software engineer based in the Bay Area. My primary technologies are <strong>Python</strong> and <strong>JavaScript</strong>, and I specialize in <strong>Full Stack Development</strong>, <strong>Process Automation</strong>, and <strong>Cloud Computing</strong>.</p>
                  <p>These are some of my interests and hobbies: <i>listening to music</i>, <i>fashion</i>, <i><a href='https://www.worldcubeassociation.org/persons/2015PARK22' target='_blank' rel='noopener noreferrer'>twisty cube puzzles</a></i>, and <i>video games</i>.</p>
                  <h5>Contact Me</h5>
                  <p>The best ways to reach me are:</p>
                  <ul>
                    <li><strong>Email</strong>:{' '}
                      <a
                        href='mailto:jpark3@scu.edu'
                      >
                        jpark3@scu.edu
                      </a>
                    </li>
                    <li><strong>LinkedIn</strong>:{' '} 
                      <a
                        href='https://www.linkedin.com/in/park-junha/'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        linkedin.com/in/park-junha
                      </a>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  };
}
