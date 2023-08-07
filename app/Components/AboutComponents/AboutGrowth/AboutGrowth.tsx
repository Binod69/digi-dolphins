'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './growth.module.css';
import Btn from '../../ui/Btn';
import img from '../../../../public/img/aboutgrowth.jpeg';
import Image from 'next/image';
const AboutGrowth = () => {
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row>
            <Col
              lg={5}
              className=" d-lg-flex justify-content-lg-between align-items-lg-center"
            >
              <article className={styles.articleCon}>
                <h3 className={styles.title}>
                  Growth strategies to be effective & competitive
                </h3>
                <p className={styles.para}>
                  Everything we do and dream up has a solid design impact. We
                  create human-centered enterprise software that has the
                  polished, snappy feel of the best consumer apps.
                </p>
                <Btn btnTitle={'Get Started'} />
              </article>
            </Col>
            <Col lg={7}>
              <figure className={styles.imgCon}>
                <Image
                  className={styles.img}
                  src={img}
                  alt="aboutimage.webp"
                  quality={80}
                />
              </figure>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutGrowth;
