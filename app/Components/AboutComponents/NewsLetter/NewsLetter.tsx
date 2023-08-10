'use client';
import React, { FormEvent } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import styles from './newsletter.module.css';

const NewsLetter: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container className={styles.con}>
      <Row>
        <Col>
          <article className={styles.articleCon}>
            <h3 className={styles.title}>
              Receive the latest technology & business news in your inbox
            </h3>
          </article>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form className={styles.form}>
            <Form.Control
              className={styles.input}
              type="text"
              placeholder="Your email address"
            />

            <button className={styles.btn} onClick={handleSubmit}>
              Sign up
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsLetter;
