'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './info.module.css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Card } from 'react-bootstrap';
import mockData from '../../mockData';

const Info = () => {
  return (
    <Container>
      <Row>
        <h2 className={styles.infoTitle}>
          Make your business future-proof to anticipate the challenges to be
        </h2>
        <Col md={4}>
          {mockData.map((item) => (
            <Card key={item.id} className="mt-4 shadow-sm">
              <Card.Body>
                <div className={styles.icon}>{item.icon}</div>
                <article>
                  <Card.Title className={styles.descTitle}>
                    {item.title}
                  </Card.Title>
                  <p className={styles.descPara}>{item.description}</p>
                </article>
                <Link href="/" passHref className={styles.learnMoreLink}>
                  {item.link} <AiOutlineArrowRight />
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}></Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
};

export default Info;
