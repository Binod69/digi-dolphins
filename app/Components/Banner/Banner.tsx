'use client';
import { Col, Container, Row } from 'react-bootstrap';
import { useTypewriter } from 'react-simple-typewriter';
import BannerImage from '../../../public/img/digi-hero.jpeg';

import styles from './banner.module.css';
import Image from 'next/image';
const Banner = () => {
  const [text] = useTypewriter({
    words: ['business', 'web apps', 'mobile app'],
    loop: 0,
  });
  return (
    <>
      <div className={`${styles.bannerContainer} position-relative `}>
        <Image
          src={BannerImage}
          alt="banner image"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ minHeight: '80vh' }}
          className="d-none d-lg-block object-fit-cover"
        />
        <Container className=" position-relative">
          <div className={styles.colArticle}>
            <Row>
              <Col>
                <article>
                  <h1 className={styles.bannerTitle}>
                    Designing your next
                    <span className={styles.bannerTitleGradient}>{text}</span>
                  </h1>
                  <p className={styles.para}>
                    Small business, big opportunity? We help our clients exploit
                    technology to strategically reshape their business around
                    digital economy.
                  </p>
                </article>
                <div className={styles.btnContainer}>
                  <button className={`${styles.disBtn} mt-4`}>
                    Discover Now
                  </button>
                  <button className={`${styles.howBtn}`}>How it Works</button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
