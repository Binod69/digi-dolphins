'use client';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import CountUp from 'react-countup';

interface AnimatedContentProps {
  title: string;
  paragraph: string;
  startCount: boolean;
  endCount: number;
  delay: number;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  title,
  paragraph,
  startCount,
  endCount,
  delay,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (!startAnimation && inView) {
      setStartAnimation(true);
    }
  }, [inView, startAnimation]);

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });

  const counterProps = {
    start: 0,
    end: startAnimation ? endCount : 0,
    delay,
  };

  return (
    <animated.div ref={ref} style={animation}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.para}>{paragraph}</p>
      <div className=" d-flex gap-3">
        <div>
          <CountUp {...counterProps}>
            {({ countUpRef }) => (
              <div>
                <span className={styles.counter1} ref={countUpRef} />
                <span className={styles.counter1}>k</span>
              </div>
            )}
          </CountUp>
        </div>

        <div>
          <CountUp {...counterProps}>
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
    </animated.div>
  );
};
