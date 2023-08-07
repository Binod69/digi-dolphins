'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceSlide from './ServiceSlide';
import styles from './customerreviews.module.css';

const CustomerReviews = () => {
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row>
            <Col>
              <article className={styles.articleCon}>
                <h2 className={styles.title}>What our customers are saying</h2>
              </article>
            </Col>
            <ServiceSlide />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CustomerReviews;
