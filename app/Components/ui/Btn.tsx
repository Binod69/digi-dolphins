import styles from './btn.module.css';
const Btn = ({ btnTitle }: { btnTitle: string }) => {
  return <button className={`${styles.disBtn} mt-4`}>{btnTitle}</button>;
};

export default Btn;
