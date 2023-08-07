'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import slideData from './slideData';
import styles from './serviceslide.module.css';
import Image from 'next/image';
import Rating from '../../Rating/Rating';
const ServiceSlide = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container>
        <Row>
          <Slider {...settings}>
            {slideData &&
              slideData.map((item) => (
                <Col sm={12} lg={2} key={item.id}>
                  <Card className={styles.card}>
                    <Card.Body>
                      <div className={styles.cardCon}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          quality={80}
                          width={80}
                          height={80}
                        />
                        <div className="ms-lg-3">
                          <Card.Title className={styles.cardTitle}>
                            {item.name}
                          </Card.Title>
                          <Card.Text className={styles.jobTitle}>
                            {item.jobtitle}
                          </Card.Text>
                          <Card.Text>
                            <Rating
                              value={item.rating}
                              text={`${item.rating} `}
                            />
                          </Card.Text>
                        </div>
                      </div>
                      <Card.Text className={styles.description}>
                        <q>{item.description}</q>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Slider>
        </Row>
      </Container>
    </>
  );
};

export default ServiceSlide;
