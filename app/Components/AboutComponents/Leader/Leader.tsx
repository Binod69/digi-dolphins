'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ux from '../../../../public/img/image4.png';
import leaderData from './leaderData';
import styles from './leader.module.css';

const Leader = () => {
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row>
            <Col lg={12}>
              <article className={styles.articleCon}>
                <h2 className={styles.title}>
                  As leaders in developing sustainable solutions, the future of
                  software development is in our history
                </h2>
              </article>
            </Col>
          </Row>
          <Row className={styles.imgCon}>
            {leaderData &&
              leaderData.map((item) => (
                <Col key={item.id} lg={6}>
                  <figure>
                    <Image
                      src={item.image}
                      alt="ui.webp"
                      quality={100}
                      loading="lazy"
                      width={500}
                      height={500}
                      style={{ objectFit: 'cover' }}
                      className={styles.img}
                    />
                    <figcaption className={styles.imgPara}>
                      {item.title}
                    </figcaption>
                  </figure>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Leader;
