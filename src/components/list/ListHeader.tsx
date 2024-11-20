import styles from './ListHeader.module.scss'


function ListHeader() {
  return (
    <>
      <h1 className={styles.heading}>Let`s Get Thing Done</h1>
      <h3 className={styles.subheading}>One Step Closer to Your Goals</h3>
    </>
  );
}

export default ListHeader;
