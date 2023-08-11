import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Animation from '../../Animation/Animation';
import styles from './developcard.module.css';
interface DevelopCardProps {
  linkTitle: string;
}
const DevelopCard: React.FC<DevelopCardProps> = ({ linkTitle }) => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <Row sm={12} md={2} lg={2}>
            <Col>
              <Animation>
                <div className={styles.cardCon1}>
                  <div className="text-center">
                    <div className=" my-lg-5  my-4">
                      <span className={styles.icon1Con}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.2099 15.8901C20.5737 17.3946 19.5787 18.7203 18.3118 19.7514C17.0449 20.7825 15.5447 21.4875 13.9424 21.8049C12.34 22.1222 10.6843 22.0422 9.12006 21.5719C7.55578 21.1015 6.13054 20.2551 4.96893 19.1067C3.80733 17.9583 2.94473 16.5428 2.45655 14.984C1.96837 13.4252 1.86948 11.7706 2.16851 10.1647C2.46755 8.55886 3.15541 7.05071 4.17196 5.77211C5.18851 4.49351 6.5028 3.4834 7.99992 2.83008"
                            stroke="#4C6FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V12H22Z"
                            stroke="#4C6FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <article>
                      <h5 className={styles.cardTitle}>
                        Business Agility & Innovation
                      </h5>
                    </article>
                  </div>
                </div>
              </Animation>
            </Col>
            <Col className="mt-lg-5 mt-md-0 my-5  my-lg-0">
              <Animation>
                <div className={styles.cardCon1}>
                  <div className="text-center">
                    <div className="my-lg-5 my-4 ">
                      <span className={styles.icon2Con}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M2 17L12 22L22 17"
                            stroke="#FFC0EC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M2 12L12 17L22 12"
                            stroke="#FFC0EC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 2L2 7L12 12L22 7L12 2Z"
                            stroke="#FFC0EC"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <article>
                      <h5 className={styles.cardTitle}>
                        Strategic Goal Definition
                      </h5>
                    </article>
                  </div>
                </div>
              </Animation>
            </Col>
            <Col>
              <Animation>
                <div className={styles.cardCon1}>
                  <div className="text-center">
                    <div className="my-lg-5 my-4">
                      <span className={styles.icon3Con}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M23 6L13.5 15.5L8.5 10.5L1 18"
                            stroke="#61DCDF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M17 6H23V12"
                            stroke="#61DCDF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <article>
                      <h5 className={styles.cardTitle}>
                        Action Roadmap Definition
                      </h5>
                    </article>
                  </div>
                </div>
              </Animation>
            </Col>
            <Col className="mt-lg-5 mt-md-0 my-5  my-lg-0">
              <Animation>
                <div className={styles.cardCon1}>
                  <div className="text-center">
                    <div className="my-lg-5 my-4">
                      <span className={styles.icon4Con}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                            stroke="#6AC75A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                            stroke="#6AC75A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <article>
                      <h5 className={styles.cardTitle}>
                        Business Model Analysis
                      </h5>
                    </article>
                  </div>
                </div>
              </Animation>
            </Col>
          </Row>
        </Col>

        <Col
          lg={6}
          className=" d-lg-flex justify-content-lg-center flex-lg-column align-items-lg-center"
        >
          <article className="ms-lg-5">
            <Animation>
              <h2 className={styles.title}>
                Strategies that get you on the path to success
              </h2>
            </Animation>
            <Animation>
              <p className={styles.para}>
                Through an in-depth knowledge of all industrial sectors and the
                application of approaches such as Lean Strategy, and Business
                Design, we prepare organisations to welcome change, to be ready
                to evolve rapidly while remaining competitive in the market.
              </p>
            </Animation>
            <Animation>
              <Link href="/" className={styles.link}>
                {linkTitle} <AiOutlineArrowRight />
              </Link>
            </Animation>
          </article>
        </Col>
      </Row>
    </>
  );
};

export default DevelopCard;
