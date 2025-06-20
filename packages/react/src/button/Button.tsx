import React from "react";
import { clsx } from "clsx";
import styles from "./styles/Button.module.css";

/**
 * Visual variants and sizes for Button
 */
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "link";
export type ButtonIntent = "success" | "warning" | "error" | "info";
export type ButtonSize = "xl" | "lg" | "md" | "sm";

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
  /** Optional semantic intent to modify color (e.g. error, success) */
  intent?: ButtonIntent;
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
  variant = "primary",
  size = "sm",
  intent,
  iconOnly = false,
  className,
}) => {
  // Classnames for the button based on props
  const classNames = clsx(
    styles.button,
    styles[size],
    styles[variant],
    iconOnly && styles["icon-only"],
    disabled && styles.disabled,
    intent && styles[intent],
    className,
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
