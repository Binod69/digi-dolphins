'use client';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './unlimited.module.css';
import Slider from '../Slider/Slider';

const Unlimited = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const imageAnimation = useSpring({
    transform: `translateX(${activeTab * 100}%)`,
    config: { tension: 100, friction: 26 }, // Adjust these values for desired animation feel
  });
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row className="my-5">
            <Col>
              <article className={styles.articleCon}>
                <p className={styles.para}>
                  HELPING ENTREPRENEURS MAKE MORE MONEY
                </p>
                <h2 className={styles.title}>
                  Unlimited cash back, zero fees, no credit check
                </h2>
              </article>
            </Col>
          </Row>
          <animated.div style={imageAnimation}>
            <Slider />
          </animated.div>
        </Container>
      </div>
    </>
  );
};

export default Unlimited;
