'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './footer.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <>
      <footer className={styles.con}>
        <Container>
          <Row>
            <Col lg={6}>
              <article className={styles.articleCon}>
                <h2 className={styles.brand}>Digi Dolphins</h2>
                <p className={styles.para}>
                  Creative-powered to fuel your growth goals. We build
                  world-class digital products, software and branding.
                </p>
              </article>
            </Col>
            <Col lg={2}>
              <article className={styles.articleCon}>
                <h5 className={styles.productTitle}>Products</h5>
                <ul className="m-0 p-0">
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Unify App
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Page Builder
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Templates
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Pricing
                    </Link>
                  </li>
                </ul>
              </article>
            </Col>
            <Col lg={2}>
              <article className={styles.articleCon}>
                <h5 className={styles.productTitle}>Resources</h5>
                <ul className="m-0 p-0">
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Design
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Inspiration
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Blog
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Jobs
                    </Link>
                  </li>
                </ul>
              </article>
            </Col>
            <Col lg={2}>
              <article className={styles.articleCon}>
                <h5 className={styles.productTitle}>Support</h5>
                <ul className="m-0 p-0">
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Documentation
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Help Desk
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Video Guides
                    </Link>
                  </li>
                  <li className={styles.linkCon}>
                    <Link className={styles.link} href="/">
                      {' '}
                      Security
                    </Link>
                  </li>
                </ul>
              </article>
            </Col>
          </Row>
          <Row className=''>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
