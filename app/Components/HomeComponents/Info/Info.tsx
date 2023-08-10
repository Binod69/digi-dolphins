'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './info.module.css';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import mockData from '../../../mockData';
import Image from 'next/image';
import business from '../../../../public/img/business-bg-1.webp';
import Animation from '../../Animation/Animation';

interface InfoItem {
  id: number;
  icon: any;
  title: string;
  description: string;
  link: string;
}

const Info: React.FC = () => {
  return (
    <>
      <Container className={styles.infoContainer}>
        <div className={styles.titleCont}>
          <Image
            src={business}
            alt="svg image"
            placeholder="blur"
            quality={100}
            sizes="100vw"
            className={`d-none d-lg-block object-fit-cover ${styles.titleImg}`}
          />
          <h2 className={styles.infoTitle}>
            Make your business future-proof to anticipate the challenges to be
          </h2>
        </div>
        <Animation>
          <Row>
            {mockData.map((item: InfoItem) => (
              <Col className={styles.colCon} key={item.id} md={4}>
                <div className={styles.icon}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={50}
                    height={50}
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
        </Animation>
        <hr className="my-lg-5" />
      </Container>
    </>
  );
};

export default Info;
