// src/app/components/ui/AuraLoader/AuraLoader.tsx
import styles from './AuraLoader.module.css';

export interface AuraLoaderProps {
  type?: 'spinner' | 'dots' | 'bars' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

export default function AuraLoader({
  type = 'spinner',
  size = 'md',
  text,
  fullScreen = false,
  className,
}: AuraLoaderProps) {
  const loaderClass = [
    styles.loader,
    styles[type],
    styles[size],
    fullScreen && styles.fullScreen,
    className
  ].filter(Boolean).join(' ');

  const content = (
    <div className={loaderClass} data-precision="high" role="status" aria-live="polite">
      {type === 'spinner' && (
        <div className={styles.spinner}>
          <svg className={styles.spinnerCircle} viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
          </svg>
        </div>
      )}
      
      {type === 'dots' && (
        <div className={styles.dots}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      )}
      
      {type === 'bars' && (
        <div className={styles.bars}>
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.bar} />
          <div className={styles.bar} />
        </div>
      )}
      
      {type === 'skeleton' && (
        <div className={styles.skeleton}>
          <div className={styles.skeletonHeader} />
          <div className={styles.skeletonBody}>
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLine} />
            <div className={styles.skeletonLine} />
          </div>
          <div className={styles.skeletonFooter} />
        </div>
      )}
      
      {text && (
        <div className={styles.text}>
          {text}
        </div>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className={styles.fullScreenContainer}>
        {content}
      </div>
    );
  }

  return content;
}