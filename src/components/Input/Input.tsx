import { ChangeEvent, useState } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  placeholder?: string;
  value?: string;
}

function Input({
  placeholder = '',
  value = ''
}: IInputProps) {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return (
    <input
      type='text'
      className={styles.input}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => handleInputChange(e)}
    />
  );
}

export default Input;
