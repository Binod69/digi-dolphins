'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './footer.module.css';
import Link from 'next/link';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <footer className={styles.con}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <article className={styles.articleCon}>
                <h2 className={styles.brand}>Digi Dolphins</h2>
                <p className={styles.para}>
                  Creative-powered to fuel your growth goals. We build
                  world-class digital products, software and branding.
                </p>
              </article>
            </Col>
            <Col sm={12} md={2} lg={2}>
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
            <Col lg={2} md={2}>
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
            <Col sm={12} md={2} lg={2}>
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
          <Row className={styles.row}>
            <Col sm={12} md={8} lg={10}>
              <article className={styles.copyrightArticle}>
                <p className={styles.copyTitle}>
                  &copy; {date} Digi Dolphins LLC,Kakarvitta,Jhapa.Nepal
                </p>
              </article>
            </Col>
            <Col sm={12} md={4} lg={2}>
              <figure
                className={`${styles.figureCon} d-flex align-items-center gap-4`}
              >
                <Link href="/" className="text-light">
                  <CiFacebook />
                </Link>
                <Link href="/" className="text-light">
                  <CiTwitter />
                </Link>
                <Link href="/" className="text-light">
                  <AiOutlineYoutube />
                </Link>
                <Link href="/" className="text-light">
                  <FaTiktok />
                </Link>
              </figure>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
