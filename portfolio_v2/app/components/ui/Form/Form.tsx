// src/app/components/ui/Form/Form.tsx
'use client';

import { 
  InputHTMLAttributes, 
  TextareaHTMLAttributes, 
  SelectHTMLAttributes,
  ReactNode,
  useState,
  ChangeEvent
} from 'react';
import Button from '../Button/Button';
import styles from './Form.module.css';

// Common form element props
interface BaseFormProps {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  density?: 'light' | 'ideal' | 'dense';
  required?: boolean;
  className?: string;
}

// Input Component
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseFormProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';
  icon?: ReactNode;
}

export function Input({
  label,
  hint,
  error,
  success,
  density = 'ideal',
  required,
  icon,
  className,
  id,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value || props.defaultValue || '');
  
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;
  const hasSuccess = !!success && !hasError;
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <div 
      className={`${styles.formGroup} ${styles[density]} ${className || ''}`}
      data-state={hasError ? 'error' : hasSuccess ? 'success' : isFocused ? 'focused' : 'default'}
    >
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          <span className={styles.labelText}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
          {hint && <span className={styles.hint}>{hint}</span>}
        </label>
      )}

      <div className={styles.field}>
        {icon && (
          <div className={styles.iconContainer}>
            {icon}
          </div>
        )}
        
        <input
          id={inputId}
          className={`${styles.input} ${icon ? styles.withIcon : ''}`}
          value={value}
          onChange={handleChange}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            [error && `${inputId}-error`, hint && `${inputId}-hint`]
              .filter(Boolean)
              .join(' ')
          }
          {...props}
        />
      </div>

      {/* Feedback */}
      <div className={styles.feedback}>
        {error && (
          <div id={`${inputId}-error`} className={styles.error} role="alert">
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-5.5H7V4h2v4z" />
            </svg>
            {error}
          </div>
        )}
        
        {success && !error && (
          <div id={`${inputId}-success`} className={styles.success}>
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.7 5.3L7 11 4.3 8.3l1.4-1.4L7 8.2l3.3-3.3 1.4 1.4z" />
            </svg>
            {success}
          </div>
        )}
        
        {hint && !error && !success && (
          <div id={`${inputId}-hint`} className={styles.hintText}>
            {hint}
          </div>
        )}
      </div>
    </div>
  );
}

// Textarea Component
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseFormProps {}

export function Textarea({
  label,
  hint,
  error,
  success,
  density = 'ideal',
  required,
  className,
  id,
  ...props
}: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value || '');
  
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;
  const hasSuccess = !!success && !hasError;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <div 
      className={`${styles.formGroup} ${styles[density]} ${className || ''}`}
      data-state={hasError ? 'error' : hasSuccess ? 'success' : isFocused ? 'focused' : 'default'}
    >
      {label && (
        <label htmlFor={textareaId} className={styles.label}>
          <span className={styles.labelText}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
          {hint && <span className={styles.hint}>{hint}</span>}
        </label>
      )}

      <div className={styles.field}>
        <textarea
          id={textareaId}
          className={styles.textarea}
          value={value}
          onChange={handleChange}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            [error && `${textareaId}-error`, hint && `${textareaId}-hint`]
              .filter(Boolean)
              .join(' ')
          }
          {...props}
        />
        
        <div className={styles.textareaCounter}>
          {value.toString().length}/{props.maxLength || '∞'}
        </div>
      </div>

      {/* Feedback */}
      <div className={styles.feedback}>
        {error && (
          <div id={`${textareaId}-error`} className={styles.error} role="alert">
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-5.5H7V4h2v4z" />
            </svg>
            {error}
          </div>
        )}
        
        {success && !error && (
          <div id={`${textareaId}-success`} className={styles.success}>
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.7 5.3L7 11 4.3 8.3l1.4-1.4L7 8.2l3.3-3.3 1.4 1.4z" />
            </svg>
            {success}
          </div>
        )}
        
        {hint && !error && !success && (
          <div id={`${textareaId}-hint`} className={styles.hintText}>
            {hint}
          </div>
        )}
      </div>
    </div>
  );
}

// Select Component
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, BaseFormProps {
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  icon?: ReactNode;
}

export function Select({
  label,
  hint,
  error,
  success,
  density = 'ideal',
  required,
  options,
  icon,
  className,
  id,
  ...props
}: SelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(props.value || '');
  
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;
  const hasSuccess = !!success && !hasError;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <div 
      className={`${styles.formGroup} ${styles[density]} ${className || ''}`}
      data-state={hasError ? 'error' : hasSuccess ? 'success' : isFocused ? 'focused' : 'default'}
    >
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          <span className={styles.labelText}>
            {label}
            {required && <span className={styles.required}>*</span>}
          </span>
          {hint && <span className={styles.hint}>{hint}</span>}
        </label>
      )}

      <div className={styles.field}>
        {icon && (
          <div className={styles.iconContainer}>
            {icon}
          </div>
        )}
        
        <div className={styles.selectWrapper}>
          <select
            id={selectId}
            className={`${styles.select} ${icon ? styles.withIcon : ''}`}
            value={value}
            onChange={handleChange}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            required={required}
            aria-invalid={hasError}
            aria-describedby={
              [error && `${selectId}-error`, hint && `${selectId}-hint`]
                .filter(Boolean)
                .join(' ')
            }
            {...props}
          >
            <option value="" disabled={required}>
              {props.placeholder || 'Selecione uma opção'}
            </option>
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          <svg className={styles.selectIcon} viewBox="0 0 16 16">
            <path fill="currentColor" d="M8 11L3 6h10z" />
          </svg>
        </div>
      </div>

      {/* Feedback */}
      <div className={styles.feedback}>
        {error && (
          <div id={`${selectId}-error`} className={styles.error} role="alert">
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-5.5H7V4h2v4z" />
            </svg>
            {error}
          </div>
        )}
        
        {success && !error && (
          <div id={`${selectId}-success`} className={styles.success}>
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.7 5.3L7 11 4.3 8.3l1.4-1.4L7 8.2l3.3-3.3 1.4 1.4z" />
            </svg>
            {success}
          </div>
        )}
        
        {hint && !error && !success && (
          <div id={`${selectId}-hint`} className={styles.hintText}>
            {hint}
          </div>
        )}
      </div>
    </div>
  );
}

// Checkbox Component
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, BaseFormProps {
  description?: string;
}

export function Checkbox({
  label,
  hint,
  error,
  success,
  description,
  density = 'ideal',
  required,
  className,
  id,
  ...props
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(props.checked || false);
  
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;
  const hasSuccess = !!success && !hasError;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    props.onChange?.(e);
  };

  return (
    <div 
      className={`${styles.formGroup} ${styles.checkboxGroup} ${styles[density]} ${className || ''}`}
      data-state={hasError ? 'error' : hasSuccess ? 'success' : 'default'}
    >
      <div className={styles.checkboxWrapper}>
        <input
          id={checkboxId}
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          onChange={handleChange}
          required={required}
          aria-invalid={hasError}
          aria-describedby={
            [error && `${checkboxId}-error`, hint && `${checkboxId}-hint`, description && `${checkboxId}-description`]
              .filter(Boolean)
              .join(' ')
          }
          {...props}
        />
        
        <label htmlFor={checkboxId} className={styles.checkboxLabel}>
          <div className={styles.checkboxBox}>
            {isChecked && (
              <svg className={styles.checkboxIcon} viewBox="0 0 16 16">
                <path fill="currentColor" d="M13.5 4L6 11.5 2.5 8l1.1-1.1L6 9.3l6.4-6.4 1.1 1.1z" />
              </svg>
            )}
          </div>
          
          <div className={styles.checkboxContent}>
            <span className={styles.checkboxLabelText}>
              {label}
              {required && <span className={styles.required}>*</span>}
            </span>
            
            {description && (
              <div id={`${checkboxId}-description`} className={styles.checkboxDescription}>
                {description}
              </div>
            )}
          </div>
        </label>
      </div>

      {/* Feedback */}
      <div className={styles.feedback}>
        {error && (
          <div id={`${checkboxId}-error`} className={styles.error} role="alert">
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1-5.5H7V4h2v4z" />
            </svg>
            {error}
          </div>
        )}
        
        {success && !error && (
          <div id={`${checkboxId}-success`} className={styles.success}>
            <svg className={styles.feedbackIcon} viewBox="0 0 16 16">
              <path fill="currentColor" d="M8 1a7 7 0 100 14A7 7 0 008 1zm3.7 5.3L7 11 4.3 8.3l1.4-1.4L7 8.2l3.3-3.3 1.4 1.4z" />
            </svg>
            {success}
          </div>
        )}
        
        {hint && !error && !success && (
          <div id={`${checkboxId}-hint`} className={styles.hintText}>
            {hint}
          </div>
        )}
      </div>
    </div>
  );
}

// Form Container
interface FormProps {
  children: ReactNode;
  onSubmit?: (data: FormData) => void | Promise<void>;
  className?: string;
}

export function Form({ children, onSubmit, className }: FormProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (onSubmit) {
      const formData = new FormData(e.currentTarget);
      await onSubmit(formData);
    }
  };

  return (
    <form 
      className={`${styles.form} ${className || ''}`}
      onSubmit={handleSubmit}
      data-precision="high"
    >
      {children}
    </form>
  );
}

// Form Actions Component
interface FormActionsProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
}

export function FormActions({ children, align = 'right' }: FormActionsProps) {
  return (
    <div className={`${styles.formActions} ${styles[align]}`}>
      {children}
    </div>
  );
}

// Export all components
export default {
  Form: Form,
  Input: Input,
  Textarea: Textarea,
  Select: Select,
  Checkbox: Checkbox,
  Actions: FormActions,
  Button: Button,
};