'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineDone } from 'react-icons/md';

import image1 from '../../../../public/img/exp-about-1.webp';
import image2 from '../../../../public/img/exp-about-2.webp';
import image3 from '../../../../public/img/exp-about-3.webp';
import image4 from '../../../../public/img/exp-about-4.webp';
import styles from './featuresabout.module.css';
import Animation from '../../Animation/Animation';

const FeaturesAbout = () => {
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row>
            <Col lg={6}>
              <article className={styles.articleCon}>
                <h4 className={styles.title}>
                  Growth strategies to be effective & competitive
                </h4>
                <p className={styles.para}>
                  Money should never sit still. Achieve capital efficiency with
                  our apps: as a leading DeFi yield aggregator, we offer
                  first-rate yield optimization and risk teaching strategies.
                  Get the best yield by using, integrating or building on top of
                  Idle’s products.
                </p>
                <div className={styles.listCon}>
                  <div>
                    <ul className={styles.ul}>
                      <li className={styles.li}>
                        <MdOutlineDone size={20} className={styles.icon} />
                        Boost Seo
                      </li>
                      <li className={styles.li}>
                        <MdOutlineDone size={20} className={styles.icon} />
                        Visual Reviews
                      </li>
                      <li className={styles.li}>
                        <MdOutlineDone size={20} className={styles.icon} />
                        Social Sharing
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className={styles.ul}>
                      <li className={styles.li}>
                        <MdOutlineDone size={20} className={styles.icon} />{' '}
                        Manage Buying
                      </li>
                      <li className={styles.li}>
                        <MdOutlineDone size={20} className={styles.icon} />{' '}
                        Buying Protection
                      </li>
                      <li className={styles.li}>
                        <MdOutlineDone size={20} className={styles.icon} />{' '}
                        Virtual Card
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </Col>
            <Col lg={6}>
              <Row>
                <Col className={styles.leftCon}>
                  <Animation>
                    <figure className="mb-lg-4">
                      <Image
                        className={styles.img}
                        src={image1}
                        alt="image.webp"
                      />
                    </figure>
                  </Animation>
                  <Animation>
                    <figure>
                      <Image
                        className={styles.img}
                        src={image2}
                        alt="image2.webp"
                      />
                    </figure>
                  </Animation>
                </Col>
                <Col className={styles.rightCon}>
                  <Animation>
                    <figure className="mb-lg-4">
                      <Image
                        className={styles.img}
                        src={image3}
                        alt="image.webp"
                      />
                    </figure>
                  </Animation>
                  <Animation>
                    <figure>
                      <Image
                        className={styles.img}
                        src={image4}
                        alt="image2.webp"
                      />
                    </figure>
                  </Animation>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FeaturesAbout;
