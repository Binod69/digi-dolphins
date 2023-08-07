'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { AiOutlineArrowRight } from 'react-icons/ai';
import styles from './outstanding.module.css';
import Link from 'next/link';
const Outstanding = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <article className={styles.articleCon}>
              <p className={styles.para}>
                WE WORK MAINLY WITH DIGITAL AGENCIES AND SOFTWARE COMPANIES
              </p>
              <h2 className={styles.title}>
                Outstanding software and services that solve your hassle
              </h2>
            </article>
          </Col>
        </Row>
        <Row className="my-3 my-lg-5 g-3">
          <Col sm={12} lg={4}>
            <Card className={styles.card}>
              <span className={styles.iconCon1}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                >
                  <path d="M0 6.41663H27.5V22H0V6.41663Z" fill="#F9C45C"></path>
                  <path
                    d="M0 0V4.58333H27.5V0H0ZM2.75 3.20833C2.5687 3.20833 2.39147 3.15457 2.24073 3.05385C2.08998 2.95312 1.97249 2.80996 1.90311 2.64246C1.83373 2.47496 1.81558 2.29065 1.85095 2.11283C1.88632 1.93502 1.97362 1.77168 2.10182 1.64349C2.23002 1.51529 2.39335 1.42798 2.57117 1.39261C2.74898 1.35724 2.93329 1.3754 3.10079 1.44478C3.26829 1.51416 3.41146 1.63165 3.51218 1.78239C3.61291 1.93314 3.66667 2.11037 3.66667 2.29167C3.66667 2.53478 3.57009 2.76794 3.39818 2.93985C3.22627 3.11176 2.99312 3.20833 2.75 3.20833ZM5.5 3.20833C5.3187 3.20833 5.14147 3.15457 4.99073 3.05385C4.83998 2.95312 4.72249 2.80996 4.65311 2.64246C4.58373 2.47496 4.56558 2.29065 4.60095 2.11283C4.63632 1.93502 4.72362 1.77168 4.85182 1.64349C4.98002 1.51529 5.14335 1.42798 5.32117 1.39261C5.49898 1.35724 5.68329 1.3754 5.85079 1.44478C6.01829 1.51416 6.16146 1.63165 6.26218 1.78239C6.36291 1.93314 6.41667 2.11037 6.41667 2.29167C6.41667 2.53478 6.32009 2.76794 6.14818 2.93985C5.97627 3.11176 5.74312 3.20833 5.5 3.20833ZM8.25 3.20833C8.0687 3.20833 7.89147 3.15457 7.74073 3.05385C7.58998 2.95312 7.47249 2.80996 7.40311 2.64246C7.33373 2.47496 7.31558 2.29065 7.35095 2.11283C7.38632 1.93502 7.47362 1.77168 7.60182 1.64349C7.73002 1.51529 7.89335 1.42798 8.07117 1.39261C8.24898 1.35724 8.43329 1.3754 8.60079 1.44478C8.76829 1.51416 8.91146 1.63165 9.01218 1.78239C9.11291 1.93314 9.16667 2.11037 9.16667 2.29167C9.16667 2.53478 9.07009 2.76794 8.89818 2.93985C8.72627 3.11176 8.49312 3.20833 8.25 3.20833Z"
                    fill="#F9C45C"
                  ></path>
                </svg>
              </span>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Technology Services
                </Card.Title>
                <Card.Text className={styles.cardPara}>
                  Together we transform your business from the people to the
                  processes.
                </Card.Text>
                <Link href="/">
                  <button className={styles.cardBtn}>
                    Learn More <AiOutlineArrowRight />
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className={styles.card}>
              <span className={styles.iconCon2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="22"
                  viewBox="0 0 26 22"
                  fill="none"
                >
                  <path
                    d="M18.7412 13.8517C22.3413 13.8517 25.2597 10.9333 25.2597 7.33322C25.2597 3.73314 22.3413 0.814697 18.7412 0.814697C15.1411 0.814697 12.2227 3.73314 12.2227 7.33322C12.2227 10.9333 15.1411 13.8517 18.7412 13.8517Z"
                    fill="#6AC75A"
                  ></path>
                  <path
                    d="M8.14818 22C9.0482 22 9.77781 21.2704 9.77781 20.3704C9.77781 19.4703 9.0482 18.7407 8.14818 18.7407C7.24816 18.7407 6.51855 19.4703 6.51855 20.3704C6.51855 21.2704 7.24816 22 8.14818 22Z"
                    fill="#6AC75A"
                  ></path>
                  <path
                    d="M18.741 22C19.641 22 20.3706 21.2704 20.3706 20.3704C20.3706 19.4703 19.641 18.7407 18.741 18.7407C17.8409 18.7407 17.1113 19.4703 17.1113 20.3704C17.1113 21.2704 17.8409 22 18.741 22Z"
                    fill="#6AC75A"
                  ></path>
                  <path
                    d="M10.5926 7.33333H6.43704L4.84815 0.611111C4.80365 0.438646 4.70387 0.285512 4.56407 0.175145C4.42427 0.0647775 4.25216 0.00325752 4.07407 0H0.814815C0.598713 0 0.391461 0.0858463 0.238654 0.238654C0.0858463 0.391461 0 0.598713 0 0.814815C0 1.03092 0.0858463 1.23817 0.238654 1.39098C0.391461 1.54378 0.598713 1.62963 0.814815 1.62963H3.42222L7.08889 17.1111H20.5333L21.1852 15.1148C19.9641 15.4988 18.6697 15.5898 17.4068 15.3802C16.144 15.1706 14.9484 14.6665 13.9167 13.9087C12.8851 13.1508 12.0466 12.1606 11.469 11.0182C10.8915 9.8758 10.5912 8.61341 10.5926 7.33333Z"
                    fill="#6AC75A"
                  ></path>
                </svg>
              </span>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Operational Excellence
                </Card.Title>
                <Card.Text className={styles.cardPara}>
                  Together we transform your business from the people to the
                  processes.
                </Card.Text>
                <Link href="/">
                  <button className={styles.cardBtn}>
                    Learn More <AiOutlineArrowRight />
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card className={styles.card}>
              <span className={styles.iconCon3}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="22"
                  viewBox="0 0 27 22"
                  fill="none"
                >
                  <path
                    d="M23.8068 6.17214V0C19.9248 2.7326 15.326 4.26553 10.5808 4.40867H7.05388V13.226C7.05388 15.9153 7.05388 20.0154 12.0357 21.9993H12.3443C12.5571 22.0079 12.7657 21.9391 12.9318 21.8058C13.0978 21.6725 13.21 21.4836 13.2476 21.274C13.2852 21.0644 13.2457 20.8483 13.1364 20.6656C13.0271 20.4829 12.8554 20.3459 12.6529 20.2799C8.81735 18.781 8.81735 15.8271 8.81735 13.226H10.5808C15.3483 13.2386 19.9853 14.7843 23.8068 17.6347V11.4626C24.5084 11.4626 25.1812 11.1839 25.6773 10.6878C26.1734 10.1917 26.452 9.5189 26.452 8.81735C26.452 8.1158 26.1734 7.44298 25.6773 6.94691C25.1812 6.45083 24.5084 6.17214 23.8068 6.17214ZM0 7.05388V10.5808C0 11.2824 0.27869 11.9552 0.774762 12.4513C1.27083 12.9473 1.94365 13.226 2.6452 13.226H5.29041V4.40867H2.6452C1.94365 4.40867 1.27083 4.68736 0.774762 5.18344C0.27869 5.67951 0 6.35233 0 7.05388Z"
                    fill="#4C6FFF"
                  ></path>
                </svg>
              </span>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  Business Consulting
                </Card.Title>
                <Card.Text className={styles.cardPara}>
                  Together we transform your business from the people to the
                  processes.
                </Card.Text>
                <Link href="/">
                  <button className={styles.cardBtn}>
                    Learn More <AiOutlineArrowRight />
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Outstanding;
