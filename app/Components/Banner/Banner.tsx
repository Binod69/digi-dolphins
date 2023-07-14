'use client';
import { Col, Container, Row } from 'react-bootstrap';
// import { useTypewriter } from 'react-simple-typewriter';

import styles from './banner.module.css';
const Banner = () => {
  //   const [text] = useTypewriter({
  //     words: ['business', 'web apps'],
  //     loop: 0,
  //   });
  return (
    <>
      <div className={styles.bannerContainer}>
        <Container>
          <Row>
            <Col>
              <article>
                <h1 className={styles.bannerTitle}>
                  Designing your next
                  <span className={styles.bannerTitleGradient}>business</span>
                </h1>
                <p className={styles.para}>
                  Small business, big opportunity? We help our clients exploit
                  technology to strategically reshape their business around
                  digital economy.
                </p>
              </article>
              <div className="">
                <button className={`${styles.disBtn} mt-4`}>
                  Discover Now
                </button>
                <button className={`${styles.howBtn}`}>How it Works</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
