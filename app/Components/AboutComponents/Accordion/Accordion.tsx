'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Btn from '../../ui/Btn';

import styles from './accordion.module.css';

const AboutAccordion = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col lg={10}>
            <article>
              <h2 className={styles.title}>Frequently asked questions</h2>
              <p className={styles.para}>
                We hope this section will help you better understand the issues
                related to software
              </p>
              <p></p>
            </article>
          </Col>
          <Col lg={2} className="text-center ">
            <Btn btnTitle={'Contact Us'} />
          </Col>
        </Row>
        <Row className="my-3">
          <Col lg={6}>
            <Row className="g-4">
              <Col lg={12}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accTitle}>
                      What do I need to know before contacting you?
                    </Accordion.Header>
                    <Accordion.Body>
                      The most important thing to know is what do you want to
                      accomplish. Why do I need this software? What for? What
                      should it do? Having a clear vision in mind is crucial
                      when ordering a software application.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={12}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accTitle}>
                      How much time will it take for you to make my app?{' '}
                    </Accordion.Header>
                    <Accordion.Body>
                      The most important thing to know is what do you want to
                      accomplish. Why do I need this software? What for? What
                      should it do? Having a clear vision in mind is crucial
                      when ordering a software application.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={12}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accTitle}>
                      Should I create a mobile or a web app?{' '}
                    </Accordion.Header>
                    <Accordion.Body>
                      The most important thing to know is what do you want to
                      accomplish. Why do I need this software? What for? What
                      should it do? Having a clear vision in mind is crucial
                      when ordering a software application.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row className="g-4">
              <Col lg={12}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accTitle}>
                      Do you have any reviews from satisfied customers?{' '}
                    </Accordion.Header>
                    <Accordion.Body>
                      The most important thing to know is what do you want to
                      accomplish. Why do I need this software? What for? What
                      should it do? Having a clear vision in mind is crucial
                      when ordering a software application.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={12}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accTitle}>
                      How do you guarantee product quality?{' '}
                    </Accordion.Header>
                    <Accordion.Body>
                      The most important thing to know is what do you want to
                      accomplish. Why do I need this software? What for? What
                      should it do? Having a clear vision in mind is crucial
                      when ordering a software application.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={12}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.accTitle}>
                      What happens after you finish my app?{' '}
                    </Accordion.Header>
                    <Accordion.Body>
                      The most important thing to know is what do you want to
                      accomplish. Why do I need this software? What for? What
                      should it do? Having a clear vision in mind is crucial
                      when ordering a software application.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutAccordion;
