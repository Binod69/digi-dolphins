'use client';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './develop.module.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import DevelopCard from '../DevelopCard/DevelopCard';
const Develop = () => {
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row>
            <Col>
              <article className={styles.articleCon}>
                <h2 className={styles.title}>
                  Develop your next business today
                </h2>
                <p className={styles.para}>
                  We design new concepts, prototypes and processes for the next
                  generation of services and experiences, ready for the market.
                </p>
              </article>
            </Col>
          </Row>
          <DevelopCard />
        </Container>
      </div>
    </>
  );
};

export default Develop;
