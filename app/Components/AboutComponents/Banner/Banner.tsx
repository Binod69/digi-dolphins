'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../../../../public/img/about.webp';
import styles from './banner.module.css';
const AboutBanner = () => {
  return (
    <>
      <div>
        <figure className={styles.imgCon}>
          <Image
            className={styles.img}
            src={about}
            alt="about.webp"
            quality={80}
          />
        </figure>
      </div>
    </>
  );
};

export default AboutBanner;
