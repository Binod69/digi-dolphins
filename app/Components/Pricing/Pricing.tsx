'use client';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import styles from './pricing.module.css';

const Pricing: React.FC = () => {
  const [showDiscountedPrice, setShowDiscountedPrice] =
    useState<boolean>(false);

  const handleSwitchToggle = () => {
    setShowDiscountedPrice((prevValue) => !prevValue);
  };

  return (
    <>
      <Container className={styles.con}>
        <Row>
          <Col sm={12} md={12} lg={12}>
            <article className={styles.articleCon}>
              <h2 className={styles.title}>
                Pricing built for businesses of all sizes
              </h2>
              <p className={styles.para}>
                Scale your software operations through a custom engineering
                team. Meet the demand of your company’s
              </p>
            </article>
          </Col>
          <Col sm={12} md={12} lg={12} className="text-center"></Col>
        </Row>
        <Form className={styles.form}>
          <span className={styles.monthly}>Monthly</span>
          <Form.Check
            type="switch"
            id="price-switch"
            checked={showDiscountedPrice}
            onChange={handleSwitchToggle}
            className={styles.toggle}
          />
          <span className={styles.yearly}>Yearly</span>
          <span className={styles.save}>Save 25%</span>
        </Form>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                  {showDiscountedPrice
                    ? 'Discounted Price: $14.99/year'
                    : 'Original Price: $19.00/month'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                  {showDiscountedPrice
                    ? 'Discounted Price: $24.99/year'
                    : 'Original Price: $29.00/month'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                  {showDiscountedPrice
                    ? 'Discounted Price: $49.99/year'
                    : 'Original Price: $59.00/month'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
