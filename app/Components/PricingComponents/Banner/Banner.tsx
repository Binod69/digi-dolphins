'use client';
import Image from 'next/image';
import styles from './banner.module.css';

interface PricingBannerProps {
  image: any;
}
const PricingBanner: React.FC<PricingBannerProps> = ({ image }) => {
  return (
    <>
      <div>
        <figure className={styles.imgCon}>
          <Image
            className={styles.img}
            src={image}
            alt="about.webp"
            quality={80}
            placeholder="blur"
          />
        </figure>
      </div>
    </>
  );
};

export default PricingBanner;
