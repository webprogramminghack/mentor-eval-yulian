import React from 'react';
import ListHeader from './ListHeader';
import styles from './List.module.scss';
import ListCard from './ListCard';
function List() {

  return (
    <div className={styles.list}>
      <ListHeader />
      <ListCard />
    </div>
  );
}

export default List;
