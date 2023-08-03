'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ipad1 from '../../../public/img/ipad.webp';
import styles from './unlimited.module.css';
import Slider from '../Slider/Slider';

const Unlimited = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const imageAnimation = useSpring({
    from: { transform: `translateX(${activeTab * 100}%)` },
    enter: { transform: `translateX(${activeTab * 0}%)` },
    leave: { transform: `translateX(${activeTab - 100}%)` },
    config: { tension: 100, friction: 26 }, // Adjust these values for desired animation feel
  });
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row className="my-5">
            <Col>
              <article className="text-center">
                <p className={styles.para}>
                  HELPING ENTREPRENEURS MAKE MORE MONEY
                </p>
                <h2 className={styles.title}>
                  Unlimited cash back, zero fees, no credit check
                </h2>
              </article>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <Tabs>
                <Row>
                  <Col sm={12} md={3} className="me-5">
                    <TabList className={styles.tablist}>
                      <Tab
                        className={activeTab === 0 ? styles.activePanel : ''}
                        onClick={() => handleTabClick(0)}
                      >
                        <AiOutlineStock />
                        Strategy & Business
                        <p>
                          We design business models and growth strategies to be
                          effective and competitive.
                        </p>
                      </Tab>
                      <Tab
                        className={activeTab === 1 ? styles.activePanel : ''}
                        onClick={() => handleTabClick(1)}
                      >
                        <GoPackage />
                        Product Development
                        <p>
                          We design business models and growth strategies to be
                          effective and competitive.
                        </p>
                      </Tab>
                      <Tab onClick={() => handleTabClick(2)}>
                        <LiaCertificateSolid />
                        Futures Research
                        <p>
                          We design business models and growth strategies to be
                          effective and competitive.
                        </p>
                      </Tab>
                    </TabList>
                  </Col>
                  <Col sm={12} md={9} className={styles.imgCon}>
                    <animated.div
                      style={imageAnimation}
                      className={styles.tabPanel}
                    >
                      <TabPanel>
                        <Image
                          src={ipad1}
                          alt="ipad.webp"
                          quality={80}
                          className={styles.img}
                        />
                      </TabPanel>
                      <TabPanel>
                        <Image
                          src={ipad1}
                          alt="ipad.webp"
                          quality={80}
                          className={styles.img}
                        />
                      </TabPanel>

                      <TabPanel
                        className={activeTab === 2 ? styles.activePanel : ''}
                      >
                        <Image
                          src={ipad1}
                          alt="ipad.webp"
                          quality={80}
                          className={styles.img}
                        />
                      </TabPanel>
                    </animated.div>
                  </Col>
                </Row>
              </Tabs>
            </Col>
          </Row> */}
          <Slider />
        </Container>
      </div>
    </>
  );
};

export default Unlimited;
