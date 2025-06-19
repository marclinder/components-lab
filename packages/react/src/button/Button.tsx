import React from 'react';
import { clsx } from 'clsx';
import styles from './Button.module.css';

/**
 * Visual variants and sizes for Button
 */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'xl' | 'lg' | 'md' | 'sm';
/**
 * Button component props
 */
export type ButtonProps = {
  /** Callback triggered on click */
  action?: () => void | Promise<void>;
  /** Button label or children */
  children: React.ReactNode;
  /** Visual variant of the button (default: 'primary') */
  variant?: ButtonVariant;
  /** Visual size of the button (default: 'lg') */
  size?: ButtonSize;
  /** Optional extra class names */
  className?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
};

/**
 * Primary UI button component used across the design system.
 *
 * Supports three visual variants and size presets. Handles
 * async or sync click callbacks and accepts optional styling extensions.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled = false,
  action,
  variant = 'primary',
  size = 'md',
}) => {

  const defaultClassName = clsx(
    styles.button,
    styles[size],
    styles[variant],
    disabled && styles.disabled,
    className
  );

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={action}
      className={defaultClassName}
    >
      {children}
    </button>
  );
};

export default Button;
