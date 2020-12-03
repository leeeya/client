import React from 'react';
import styles from './index.module.scss';

const Button = ({
  className,
  onClick,
  text,
  ...attributes
}) => {
  return (
    <button
      type='button'
      className={styles[className]}
      onClick={onClick}
      {...attributes}
    >
      {text}
    </button>
  );
};

export default Button;
