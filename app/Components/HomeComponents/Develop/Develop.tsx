'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevelopCard from '../DevelopCard/DevelopCard';
import Animation from '../../Animation/Animation';
import styles from './develop.module.css';

interface DevelopProps {
  title: string;
  para: string;
}
const Develop: React.FC<DevelopProps> = ({ title, para }) => {
  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row>
            <Animation>
              <Col>
                <article className={styles.articleCon}>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.para}>{para}</p>
                </article>
              </Col>
            </Animation>
          </Row>
          <DevelopCard linkTitle={'See How it Works'} />
        </Container>
      </div>
    </>
  );
};

export default Develop;
