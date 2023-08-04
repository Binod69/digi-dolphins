'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import trust from '../../../public/img/1.webp';
import aws from '../../../public/img/2.webp';
import spotify from '../../../public/img/3.webp';
import company from '../../../public/img/4.webp';
import forbes from '../../../public/img/5.webp';
import styles from './trusted.module.css';
const Trusted = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col className={styles.articleCon}>
            <article>
              <h5 className={styles.title}>
                Trusted by nearly 5000+ customers & startups
              </h5>
            </article>
          </Col>
        </Row>
        <Row className={styles.imageCon}>
          <Col md={3} lg={2}>
            <figure className="text-center ">
              <Image src={trust} alt="trust.webp" quality={80} />
            </figure>
          </Col>
          <Col md={3} lg={2}>
            <figure className="text-center my-3 my-lg-0">
              <Image src={aws} alt="trust.webp" quality={80} />
            </figure>
          </Col>
          <Col md={3} lg={2}>
            <figure className="text-center my-3 my-lg-0">
              <Image src={spotify} alt="trust.webp" quality={80} />
            </figure>
          </Col>
          <Col md={3} lg={2}>
            <figure className="text-center my-3 my-lg-0">
              <Image src={company} alt="trust.webp" quality={80} />
            </figure>
          </Col>
          <Col lg={2}>
            <figure className="text-center my-3 my-lg-0">
              <Image src={forbes} alt="trust.webp" quality={80} />
            </figure>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Trusted;
