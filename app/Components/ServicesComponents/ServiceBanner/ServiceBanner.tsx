import Image from 'next/image';
import service from '../../../../public/img/service.webp';
import styles from './servicebanner.module.css';
const ServiceBanner = () => {
  return (
    <>
      <div className={styles.con}>
        <figure>
          <Image
            className={styles.img}
            src={service}
            alt="service.webp"
            quality={80}
          />
        </figure>
      </div>
    </>
  );
};

export default ServiceBanner;
