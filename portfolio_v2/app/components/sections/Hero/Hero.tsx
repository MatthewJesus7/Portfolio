// src/app/components/sections/Hero/Hero.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  const diagramRef = useRef<SVGSVGElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animar diagrama após montagem
    if (diagramRef.current) {
      const paths = diagramRef.current.querySelectorAll('.diagram-path');
      paths.forEach((path, index) => {
        const pathElement = path as SVGPathElement;
        setTimeout(() => {
          pathElement.style.animation = `diagram-form 2s var(--ease-out) forwards`;
        }, index * 200);
      });

      const nodes = diagramRef.current.querySelectorAll('.diagram-node');
      nodes.forEach((node, index) => {
        const nodeElement = node as SVGCircleElement;
        setTimeout(() => {
          nodeElement.style.animation = `node-appear 0.6s var(--ease-spring) forwards`;
        }, 1000 + index * 150);
      });
    }

    // Animar indicador de scroll
    const animateScrollIndicator = () => {
      if (scrollIndicatorRef.current) {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const opacity = Math.max(0, 1 - (scrollY / windowHeight) * 2);
        scrollIndicatorRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', animateScrollIndicator);
    return () => window.removeEventListener('scroll', animateScrollIndicator);
  }, []);

  return (
    <section className={styles.hero} data-observador="O1">
      {/* Diagrama Auto-Organizador */}
      <div className={styles.diagramContainer}>
        <svg
          ref={diagramRef}
          className={styles.diagram}
          viewBox="0 0 800 400"
          aria-hidden="true"
        >
          {/* Conexões entre nós */}
          <path
            className={`${styles.diagramPath} diagram-path`}
            d="M100,200 L250,100 L400,200 L550,100 L700,200"
            fill="none"
            strokeWidth="1.5"
          />
          <path
            className={`${styles.diagramPath} diagram-path`}
            d="M100,200 L250,300 L400,200 L550,300 L700,200"
            fill="none"
            strokeWidth="1.5"
          />

          {/* Nós (7 páginas) */}
          <g className={styles.diagramNodes}>
            {[
              { cx: 100, cy: 200, label: 'Home' },
              { cx: 250, cy: 100, label: 'Processo' },
              { cx: 250, cy: 300, label: 'Projetos' },
              { cx: 400, cy: 200, label: 'Ferramentas' },
              { cx: 550, cy: 100, label: 'Princípios' },
              { cx: 550, cy: 300, label: 'Sobre' },
              { cx: 700, cy: 200, label: 'Contato' },
            ].map((node, index) => (
              <g key={node.label}>
                <circle
                  className={`${styles.diagramNode} diagram-node`}
                  cx={node.cx}
                  cy={node.cy}
                  r="12"
                  strokeWidth="2"
                  style={{ animationDelay: `${1000 + index * 150}ms` }}
                />
                <text
                  x={node.cx}
                  y={node.cy + 30}
                  textAnchor="middle"
                  className={styles.diagramLabel}
                >
                  {node.label}
                </text>
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Conteúdo Principal */}
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <span className={styles.titleLine}>Complexidade</span>
            <span className={`${styles.titleLine} ${styles.titleLineHighlight}`}>
              pode ser domada
            </span>
          </h1>
        </div>

        <p className={styles.subtitle}>
          Método Ψ-TSOC para transformar caos em clareza
        </p>

        {/* Scroll Indicator Ψ */}
        <div ref={scrollIndicatorRef} className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Explorar sistema</span>
          <div className={styles.scrollLine}>
            <div className={styles.scrollProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}