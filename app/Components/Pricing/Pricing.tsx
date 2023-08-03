'use client';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { MdDone } from 'react-icons/md';
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
            <Card className={`${styles.card} my-3 my-lg-0`}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Personal</Card.Title>
                <Card.Text className={styles.cardText}>
                  {showDiscountedPrice ? ' $14.99' : ' $19.00'}
                </Card.Text>
                <ul className={styles.cardList}>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Unlimited guest reviewers
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Unlimited projects
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Dedicated support
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Lifetime updates
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    No setup fees
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer className={styles.cardFooter}>
                Start 14-free day trail
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`${styles.card} my-3 my-lg-0`}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Start up</Card.Title>
                <Card.Text className={styles.cardText}>
                  {showDiscountedPrice ? ' $24.99' : '$29.00'}
                </Card.Text>
                <ul className={styles.cardList}>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Unlimited guest reviewers
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Unlimited projects
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Dedicated support
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Lifetime updates
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    No setup fees
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer className={styles.cardFooter}>
                Start 14-free day trail
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card className={`${styles.card} my-3 my-lg-0`}>
              <Card.Body>
                <Card.Title className={styles.cardTitle}>Business</Card.Title>
                <Card.Text className={styles.cardText}>
                  {showDiscountedPrice ? '$49.99' : '$59.00'}
                </Card.Text>
                <ul className={styles.cardList}>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Unlimited guest reviewers
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Unlimited projects
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Dedicated support
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    Lifetime updates
                  </li>
                  <li>
                    <span className={styles.iconCon}>
                      <MdDone size={20} className={styles.icon} />
                    </span>
                    No setup fees
                  </li>
                </ul>
              </Card.Body>
              <Card.Footer className={styles.cardFooter}>
                Start 14-free day trail
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pricing;