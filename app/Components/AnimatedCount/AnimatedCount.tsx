'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';
import CountUp from 'react-countup';
import styles from './animatedcount.module.css';

interface AnimatedContentProps {
  title: string;
  className: string;
  classNameTitle: string;
  classNameCounter: string;
  startCount: boolean;
  endCount: number;
  delay: number;
}

const AnimatedCount: React.FC<AnimatedContentProps> = ({
  title,
  className,
  classNameTitle,
  classNameCounter,
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
      <div className="gap-3">
        <div>
          <CountUp {...counterProps}>
            {({ countUpRef }) => (
              <div className={className}>
                <span className={classNameCounter} ref={countUpRef} />
                <span className={classNameCounter}>k</span>
                <div>
                  <span className={classNameTitle}>{title}</span>
                </div>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </animated.div>
  );
};

export default AnimatedCount;
