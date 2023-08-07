'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedCount from '../../AnimatedCount/AnimatedCount';
import styles from './counterservice.module.css';
const CounterService = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} lg={3} className="my-3">
            <AnimatedCount
              title={'Total Users'}
              className={'con1'}
              classNameTitle={'title'}
              classNameCounter={'counter'}
              startCount={true}
              endCount={50}
              delay={1}
            />
          </Col>
          <Col md={6} lg={3} className="my-3">
            <AnimatedCount
              title={'Downloads'}
              className={'con2'}
              classNameTitle={'title'}
              classNameCounter={'counter'}
              startCount={true}
              endCount={32}
              delay={1}
            />
          </Col>
          <Col md={6} lg={3} className="my-3">
            <AnimatedCount
              title={'Social Likes'}
              className={'con3'}
              classNameTitle={'title'}
              classNameCounter={'counter'}
              startCount={true}
              endCount={90}
              delay={1}
            />
          </Col>
          <Col md={6} lg={3} className="my-3">
            <AnimatedCount
              title={'Subscribers'}
              className={'con4'}
              classNameTitle={'title'}
              classNameCounter={'counter'}
              startCount={true}
              endCount={25}
              delay={1}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CounterService;
