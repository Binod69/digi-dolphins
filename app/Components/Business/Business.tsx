'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../../public/img/business-imgg.webp';
import imageBox from '../../../public/img/img-box.webp';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import styles from './business.module.css';
const Business = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!startCount && inView) {
      setStartCount(true);
    }
  }, [inView, startCount]);

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="my-5">
            <div className={styles.imgContainer}>
              <Image
                src={image}
                alt="business.webp"
                placeholder="blur"
                quality={100}
                sizes="100vw"
                className={` d-lg-block object-fit-cover img img-fluid `}
              />
              <div className={styles.img2}>
                <Image
                  src={imageBox}
                  alt="business.webp"
                  placeholder="blur"
                  quality={100}
                  sizes="100vw"
                  className={` d-lg-block object-fit-cover img img-fluid `}
                />
              </div>
            </div>
          </Col>
          <animated.div ref={ref} style={animation}>
            <Col
              md={6}
              className=" d-flex flex-lg-row justify-content-center align-items-center"
            >
              <article className="">
                <h2 className={styles.title}>
                  We’re building business for your digital economy
                </h2>
                <p className={styles.para}>
                  We are building business, banking products and services to
                  support the next generation of entrepreneurs. The world as we
                  know it is no longer the same, and changes now occur in days
                  and months, not years. Get started!
                </p>
                <div className=" d-flex gap-3">
                  <div ref={ref}>
                    <CountUp start={0} end={startCount ? 120 : 0} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span className={styles.counter1} ref={countUpRef} />
                          <span className={styles.counter1}>k</span>
                        </div>
                      )}
                    </CountUp>
                  </div>

                  <div ref={ref}>
                    <CountUp start={0} end={startCount ? 370 : 0} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span className={styles.counter1} ref={countUpRef} />
                          <span className={styles.counter1}>+</span>
                        </div>
                      )}
                    </CountUp>
                  </div>
                </div>
                <span className={styles.counterPara}>Business started</span>
                <span className={`${styles.counterPara} ms-5`}>startup</span>
              </article>
            </Col>
          </animated.div>
        </Row>
      </Container>
    </>
  );
};

export default Business;
