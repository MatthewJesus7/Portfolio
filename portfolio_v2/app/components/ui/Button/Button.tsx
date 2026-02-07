// src/app/components/ui/AuraButton/AuraButton.tsx
'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './AuraButton.module.css';

export interface AuraButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  density?: 'light' | 'ideal' | 'dense';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  children: ReactNode;
}

export default function AuraButton({
  variant = 'primary',
  size = 'md',
  density = 'ideal',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  children,
  className,
  ...props
}: AuraButtonProps) {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[size],
    styles[`density-${density}`],
    loading && styles.loading,
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClass}
      disabled={disabled || loading}
      data-state={loading ? 'loading' : disabled ? 'disabled' : 'default'}
      data-precision="high"
      {...props}
    >
      {loading && (
        <span className={styles.loader} aria-hidden="true">
          <svg className={styles.spinner} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" fill="none" strokeWidth="3" />
          </svg>
        </span>
      )}
      
      {icon && iconPosition === 'left' && (
        <span className={`${styles.icon} ${styles.iconLeft}`}>
          {icon}
        </span>
      )}
      
      <span className={styles.label}>
        {children}
      </span>
      
      {icon && iconPosition === 'right' && !loading && (
        <span className={`${styles.icon} ${styles.iconRight}`}>
          {icon}
        </span>
      )}
    </button>
  );
}

// Button Icon Component
export function AuraButtonIcon({ children }: { children: ReactNode }) {
  return <span className={styles.buttonIcon}>{children}</span>;
}