import React from 'react';
import { clsx } from 'clsx';
import intentVariants from './styles/Button.module.css';
import coreStyles from './styles/Button.module.css';

const styles = { ...coreStyles, ...intentVariants };

/**
 * Visual variants and sizes for Button
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link';
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
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is an icon-only button */
  iconOnly?: boolean;
  /** Optional extra class names */
  className?: string;
};

/**
 * Primary UI button component used across the design system.
 *
 * Supports three visual variants and size presets. Handles
 * async or sync click callbacks and accepts optional styling extensions.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  action,
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  className,
}) => {

  const classNames = clsx(
    styles.button,
    styles[size],
    styles[variant],
    iconOnly && styles.iconOnly,
    disabled && styles.disabled,
    className
  );

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={action}
      className={classNames}
    >
      {children}
    </button>
  );
};

export default Button;
