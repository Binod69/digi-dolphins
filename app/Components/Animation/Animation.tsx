'use client';
import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

interface AnimatedInViewProps {
  children: ReactNode;
}

const Animation: React.FC<AnimatedInViewProps> = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100px)',
  });
  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default Animation;
