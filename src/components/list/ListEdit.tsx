import React from 'react';
import { Button } from '../Button';
import styles from './ListEdit.module.scss';
import Input from '../Input/Input';

interface IListEdit {
  editValue: string;
  show: boolean;
  onCloseModal: (show: boolean) => void;
}

function ListEdit({ editValue, show, onCloseModal }: IListEdit) {
  const handleCloseButton = () => {
    onCloseModal(false);
  };
  return (
    <>
      {show && (
        <div className={styles.overlay} >
          <div className={styles.card}>
            <h3 className={styles.heading}>Edit Task</h3>
            <Input value={editValue} />
            <Button onClick={handleCloseButton}>Save</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default ListEdit;
