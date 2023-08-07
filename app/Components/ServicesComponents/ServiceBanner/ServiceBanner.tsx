import Image from 'next/image';
import styles from './servicebanner.module.css';

interface ServiceBannerProps {
  image: any;
}
const ServiceBanner: React.FC<ServiceBannerProps> = ({ image }) => {
  return (
    <>
      <div className={styles.con}>
        <figure>
          <Image
            className={styles.img}
            src={image}
            alt="service.webp"
            quality={80}
          />
        </figure>
      </div>
    </>
  );
};

export default ServiceBanner;
