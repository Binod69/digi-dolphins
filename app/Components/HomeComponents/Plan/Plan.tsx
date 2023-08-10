'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Btn from '../../ui/Btn';
import bgpattern from '../../../../public/img/bg-pattern0.webp';
import styles from './plan.module.css';
import Animation from '../../Animation/Animation';

const Plan = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className={styles.con}>
            <Animation>
              <article className={styles.articleCon}>
                <h2 className={styles.title}>
                  Plan for big expenses, manage profits, vendors, and much more
                </h2>
                <p className={styles.para}>
                  We work with organizations of all sizes, from early start-ups
                  to global brands, in the private, public, and social sector.
                </p>
              </article>
            </Animation>
            <Animation>
              <div className={styles.fig}>
                <Image
                  src={bgpattern}
                  alt="bg.webp"
                  quality={80}
                  placeholder="blur"
                />
              </div>
            </Animation>
          </Col>
          <Animation>
            <div className="text-center my-3">
              <Btn btnTitle={'Get started'} />
            </div>
          </Animation>
        </Row>
      </Container>
    </>
  );
};

export default Plan;
