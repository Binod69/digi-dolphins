'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from './outstanding.module.css';
const Outstanding = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <article className={styles.articleCon}>
              <p className={styles.para}>
                WE WORK MAINLY WITH DIGITAL AGENCIES AND SOFTWARE COMPANIES
              </p>
              <h2 className={styles.title}>
                Outstanding software and services that solve your hassle
              </h2>
            </article>
          </Col>
        </Row>
        <Row className=" d-lg-flex justify-content-lg-center align-items-lg-center jus g-3">
          <Col sm={12} lg={4}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Outstanding;
