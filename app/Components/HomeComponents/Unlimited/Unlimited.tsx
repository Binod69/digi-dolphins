'use client';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './unlimited.module.css';
import Animation from '../../Animation/Animation';
import Slider from '../Slider/Slider';

interface unlimitedProps {
  title: string;
  description: string;
}

const Unlimited: React.FC<unlimitedProps> = ({ title, description }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className={styles.con}>
        <Container>
          <Row className="my-5">
            <Animation>
              <Col>
                <article className={styles.articleCon}>
                  <p className={styles.para}>{description}</p>
                  <h2 className={styles.title}>{title}</h2>
                </article>
              </Col>
            </Animation>
          </Row>

          <Slider />
        </Container>
      </div>
    </>
  );
};

export default Unlimited;
