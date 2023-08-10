'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTypewriter } from 'react-simple-typewriter';
import BannerImage from '../../../../public/img/digi-hero.jpeg';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import Btn from '../../ui/Btn';
import styles from './banner.module.css';

const Banner = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });
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
                <animated.div ref={ref} style={animation}>
                  <article>
                    <h1 className={styles.bannerTitle}>
                      Designing your next
                      <span className={styles.bannerTitleGradient}>{text}</span>
                    </h1>
                    <p className={styles.para}>
                      Small business, big opportunity? We help our clients
                      exploit technology to strategically reshape their business
                      around digital economy.
                    </p>
                  </article>

                  <div className={styles.btnContainer}>
                    <Btn btnTitle={'Get Started'} />
                    <button className={`${styles.howBtn}`}>How it Works</button>
                  </div>
                </animated.div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;
