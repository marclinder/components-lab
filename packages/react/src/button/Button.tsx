import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  variant = 'primary',
    size = 'md',
  disabled = false,
}: ButtonProps) => {
  const className = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
};
