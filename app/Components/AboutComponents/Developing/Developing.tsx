'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './developing.module.css';
import Btn from '../../ui/Btn';
import Animation from '../../Animation/Animation';
const Developing = () => {
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row>
            <Col>
              <Animation>
                <article className={styles.articleCon}>
                  <p className={styles.para}>
                    IT’S TIME FOR A BLOCKCHAIN REVOLUTION
                  </p>
                  <h2 className={styles.title}>
                    Developing sustainable and innovative blockchain solutions
                  </h2>
                </article>
              </Animation>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Row className="my-4">
                <Animation>
                  <Col lg={12} className={styles.cardCon1}>
                    <article className=" d-flex flex-wrap align-items-center">
                      <span className={styles.iconCon1}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="15"
                          viewBox="0 0 24 15"
                          fill="none"
                          className={styles.icon}
                        >
                          <path
                            d="M23 1.00342L13.5 10.5034L8.5 5.50342L1 13.0034"
                            stroke="#4C6FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>

                      <h3 className={styles.cardTitle}>Strategy & Business</h3>
                      <div className="">
                        <p className={styles.cardPara}>
                          We design business models and growth strategies to be
                          effective and competitive.
                        </p>
                      </div>
                    </article>
                  </Col>
                </Animation>
              </Row>
              <Row className="my-4">
                <Animation>
                  <Col lg={12} className={styles.cardCon2}>
                    <article className=" d-flex flex-wrap align-items-center">
                      <span className={styles.iconCon2}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M21 16.0033V8.00332C20.9996 7.65259 20.9071 7.30813 20.7315 7.00448C20.556 6.70084 20.3037 6.44868 20 6.27332L13 2.27332C12.696 2.09778 12.3511 2.00537 12 2.00537C11.6489 2.00537 11.304 2.09778 11 2.27332L4 6.27332C3.69626 6.44868 3.44398 6.70084 3.26846 7.00448C3.09294 7.30813 3.00036 7.65259 3 8.00332V16.0033C3.00036 16.354 3.09294 16.6985 3.26846 17.0022C3.44398 17.3058 3.69626 17.558 4 17.7333L11 21.7333C11.304 21.9089 11.6489 22.0013 12 22.0013C12.3511 22.0013 12.696 21.9089 13 21.7333L20 17.7333C20.3037 17.558 20.556 17.3058 20.7315 17.0022C20.9071 16.6985 20.9996 16.354 21 16.0033Z"
                            stroke="#6AC75A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M3.27002 6.96338L12 12.0134L20.73 6.96338"
                            stroke="#6AC75A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 22.0834V12.0034"
                            stroke="#6AC75A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>

                      <h3 className={styles.cardTitle}>Product Design</h3>
                      <div className="">
                        <p className={styles.cardPara}>
                          We design business models and growth strategies to be
                          effective and competitive.
                        </p>
                      </div>
                    </article>
                  </Col>
                </Animation>
              </Row>
              <Row className="my-4">
                <Animation>
                  <Col lg={12} className={styles.cardCon3}>
                    <article className=" d-flex flex-wrap align-items-center">
                      <span className={styles.iconCon3}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_147_922)">
                            <path
                              d="M12 15.0034C15.866 15.0034 19 11.8694 19 8.00342C19 4.13742 15.866 1.00342 12 1.00342C8.13401 1.00342 5 4.13742 5 8.00342C5 11.8694 8.13401 15.0034 12 15.0034Z"
                              stroke="#FF6D43"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M8.21 13.8933L7 23.0033L12 20.0033L17 23.0033L15.79 13.8833"
                              stroke="#FF6D43"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_147_922">
                              <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0 0.00341797)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </span>

                      <h3 className={styles.cardTitle}>Futures Research</h3>
                      <div className="">
                        <p className={styles.cardPara}>
                          We design business models and growth strategies to be
                          effective and competitive.
                        </p>
                      </div>
                    </article>
                  </Col>
                </Animation>
              </Row>
            </Col>
            <Col lg={6} className=" d-flex flex-column justify-content-center ">
              <article className={styles.articleRight}>
                <h2 className={styles.rightTitle}>
                  Strategies that get you on the path to success
                </h2>
                <p className={styles.rightPara}>
                  What if blockchain adoption didn’t mean crypto adoption? A
                  stablecoin as our gas token removes transaction volatility and
                  speculation. We are creating the next class of blockchain,
                  built on the principle of economic sustainability.
                </p>
              </article>
              <Animation>
                <div>
                  <Btn btnTitle={'Our Services'} />

                  <button className={`${styles.howBtn}`}>How it Works</button>
                </div>
              </Animation>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Developing;
