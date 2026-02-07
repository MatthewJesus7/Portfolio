// src/app/components/ui/Card/Card.tsx
'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Card.module.css';

export interface CardProps {
  variant?: 'project' | 'tool' | 'principle' | 'compact';
  density?: 'light' | 'ideal' | 'dense';
  category?: string;
  time?: string;
  title: string;
  excerpt: string;
  href?: string;
  tags?: Array<{
    label: string;
    type: 'complexity' | 'impact' | 'status' | 'custom';
    value?: string;
  }>;
  progress?: number;
  ctaText?: string;
  children?: ReactNode;
  onCtaClick?: () => void;
}

export default function Card({
  variant = 'project',
  density = 'ideal',
  category,
  time,
  title,
  excerpt,
  href,
  tags = [],
  progress,
  ctaText = 'Ver detalhes',
  children,
  onCtaClick,
}: CardProps) {
  const CardContainer = href ? Link : 'div';
  
  const containerProps = href ? {
    href,
    className: styles.cardLink
  } : {
    className: styles.cardContainer
  };

  return (
    <article 
      className={`${styles.card} ${styles[variant]} ${styles[`density-${density}`]}`}
      data-density={density}
      data-precision="high"
    >
      <CardContainer {...containerProps}>
        {/* Header com categoria e tempo */}
        {(category || time) && (
          <div className={styles.header}>
            {category && (
              <span 
                className={styles.category}
                data-category={category.toLowerCase().replace(/\s+/g, '-')}
              >
                {category}
              </span>
            )}
            {time && (
              <time className={styles.time} dateTime={time}>
                {time}
              </time>
            )}
          </div>
        )}

        {/* Conteúdo principal */}
        <div className={styles.body}>
          <h3 className={styles.title}>
            {title}
          </h3>
          
          <p className={styles.excerpt}>
            {excerpt}
          </p>

          {/* Tags de complexidade/impacto */}
          {tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className={styles.tag}
                  data-type={tag.type}
                  data-value={tag.value}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}

          {/* Conteúdo adicional */}
          {children && (
            <div className={styles.content}>
              {children}
            </div>
          )}
        </div>

        {/* Footer com progresso e CTA */}
        <div className={styles.footer}>
          {progress !== undefined && (
            <div className={styles.progress}>
              <div 
                className={styles.progressBar}
                style={{ '--progress': `${progress}%` } as React.CSSProperties}
              />
              <span className={styles.progressLabel}>
                {Math.round(progress)}% completo
              </span>
            </div>
          )}

          {onCtaClick && (
            <button 
              className={styles.cta}
              onClick={onCtaClick}
              aria-label={ctaText}
            >
              <span className={styles.ctaText}>{ctaText}</span>
              <svg className={styles.ctaIcon} viewBox="0 0 16 16">
                <path fill="currentColor" d="M8 0L6.59 1.41 12.17 7H0v2h12.17l-5.58 5.59L8 16l8-8z" />
              </svg>
            </button>
          )}
        </div>
      </CardContainer>
    </article>
  );
}