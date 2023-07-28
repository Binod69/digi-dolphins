'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../../public/img/business-imgg.webp';
import imageBox from '../../../public/img/img-box.webp';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import styles from './business.module.css';
const Business = () => {
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!startCount && inView) {
      setStartCount(true);
    }
  }, [inView, startCount]);

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });

  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="my-5">
            <div className={styles.imgContainer}>
              <Image
                src={image}
                alt="business.webp"
                placeholder="blur"
                quality={100}
                sizes="100vw"
                className={` d-lg-block object-fit-cover img img-fluid `}
              />
              <div className={styles.img2}>
                <Image
                  src={imageBox}
                  alt="business.webp"
                  placeholder="blur"
                  quality={100}
                  sizes="100vw"
                  className={` d-lg-block object-fit-cover img img-fluid `}
                />
              </div>
            </div>
          </Col>

          <Col
            md={6}
            className=" d-flex flex-lg-row justify-content-center align-items-center"
          >
            <article className="">
              <animated.div ref={ref} style={animation}>
                <h2 className={styles.title}>
                  We’re building business for your digital economy
                </h2>
                <p className={styles.para}>
                  We are building business, banking products and services to
                  support the next generation of entrepreneurs. The world as we
                  know it is no longer the same, and changes now occur in days
                  and months, not years. Get started!
                </p>
              </animated.div>
              <div className=" d-flex gap-3">
                <div ref={ref}>
                  <CountUp start={0} end={startCount ? 120 : 0} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span className={styles.counter1} ref={countUpRef} />
                        <span className={styles.counter1}>k</span>
                      </div>
                    )}
                  </CountUp>
                </div>

                <div ref={ref}>
                  <CountUp start={0} end={startCount ? 370 : 0} delay={0}>
                    {({ countUpRef }) => (
                      <div>
                        <span className={styles.counter1} ref={countUpRef} />
                        <span className={styles.counter1}>+</span>
                      </div>
                    )}
                  </CountUp>
                </div>
              </div>
              <span className={styles.counterPara}>Business started</span>
              <span className={`${styles.counterPara} ms-5`}>startup</span>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Business;

// 'use client';
// import { useEffect, useRef, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { useInView } from 'react-intersection-observer';
// import { useSpring, animated } from '@react-spring/web';
// import CountUp from 'react-countup';
// import Image from 'next/image';
// // import ImageSection from './ImageSection';
// import styles from './business.module.css';
// import imageBox from '../../../public/img/business-imgg.webp';

// interface AnimatedContentProps {
//   title: string;
//   paragraph: string;
//   startCount: boolean;
//   endCount: number;
//   delay: number;
// }

// const AnimatedContent: React.FC<AnimatedContentProps> = ({
//   title,
//   paragraph,
//   startCount,
//   endCount,
//   delay,
// }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0,
//   });

//   const [startAnimation, setStartAnimation] = useState(false);

//   useEffect(() => {
//     if (!startAnimation && inView) {
//       setStartAnimation(true);
//     }
//   }, [inView, startAnimation]);

//   const animation = useSpring({
//     opacity: inView ? 1 : 0,
//     transform: inView ? 'translateY(0)' : 'translateY(100px)',
//   });

//   const counterProps = {
//     start: 0,
//     end: startAnimation ? endCount : 0,
//     delay,
//   };

//   return (
//     <animated.div ref={ref} style={animation}>
//       <h2 className={styles.title}>{title}</h2>
//       <p className={styles.para}>{paragraph}</p>
//       <div className=" d-flex gap-3">
//         <div>
//           <CountUp {...counterProps}>
//             {({ countUpRef }) => (
//               <div>
//                 <span className={styles.counter1} ref={countUpRef} />
//                 <span className={styles.counter1}>k</span>
//               </div>
//             )}
//           </CountUp>
//         </div>

//         <div>
//           <CountUp {...counterProps}>
//             {({ countUpRef }) => (
//               <div>
//                 <span className={styles.counter1} ref={countUpRef} />
//                 <span className={styles.counter1}>+</span>
//               </div>
//             )}
//           </CountUp>
//         </div>
//       </div>
//       <span className={styles.counterPara}>Business started</span>
//       <span className={`${styles.counterPara} ms-5`}>startup</span>
//     </animated.div>
//   );
// };

// const Business: React.FC = () => {
//   const scrollRef = useRef(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       scrollRef.current = window.scrollY;
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <Container>
//         <Row>
//           <Image
//             src={imageBox}
//             alt="business.webp"
//             placeholder="blur"
//             quality={100}
//             sizes="100vw"
//             className={` d-lg-block object-fit-cover img img-fluid `}
//           />
//           <Col
//             md={6}
//             className="d-flex flex-lg-row justify-content-center align-items-center"
//           >
//             <article>
//               <AnimatedContent
//                 title="We’re building business for your digital economy"
//                 paragraph="We are building business, banking products and services to support the next generation of entrepreneurs. The world as we know it is no longer the same, and changes now occur in days and months, not years. Get started!"
//                 startCount={false}
//                 endCount={120}
//                 delay={0}
//               />
//             </article>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Business;
