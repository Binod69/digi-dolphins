'use client';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './info.module.css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import mockData from '../../mockData';
import Image from 'next/image';
import business from '../../../public/img/business-bg-1.webp';

const Info = () => {
  return (
    <Container className={styles.infoContainer}>
      <div className={styles.titleCont}>
        <Image
          src={business}
          alt="banner image"
          placeholder="blur"
          quality={100}
          sizes="100vw"
          className={`d-none d-lg-block object-fit-cover ${styles.titleImg}`}
        />
        <h2 className={styles.infoTitle}>
          Make your business future-proof to anticipate the challenges to be
        </h2>
      </div>
      <Row>
        {mockData.map((item) => (
          <Col className={styles.colCon} key={item.id} md={4}>
            <div className={styles.icon}>
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={120}
              />
            </div>
            <article>
              <h4 className={styles.descTitle}>{item.title}</h4>
              <p className={styles.descPara}>{item.description}</p>
            </article>
            <Link href="/" passHref className={styles.learnMoreLink}>
              {item.link} <AiOutlineArrowRight />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Info;
