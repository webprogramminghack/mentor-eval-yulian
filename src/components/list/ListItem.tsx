import React, { MouseEvent, useState } from 'react';
import styles from './ListItem.module.scss';
import ListEdit from './ListEdit';

interface IListItemProps {
  completed: boolean;
  text: string;
  onChecked: () => void;
}

function ListItem({ text, completed, onChecked }: IListItemProps) {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEditTask = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = (show: boolean) => {
    setShowEditModal(show);
  };

  const handleToggleCheckbox = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    onChecked()
  };

  return (
    <>
      <div className={styles.item} onClick={handleEditTask}>
        <input
          type='checkbox'
          onClick={handleToggleCheckbox}
          defaultChecked={completed}
        />
        <p>{text}</p>
      </div>
      <ListEdit
        editValue={text}
        show={showEditModal}
        onCloseModal={handleCloseModal}
      />
    </>
  );
}

export default ListItem;
