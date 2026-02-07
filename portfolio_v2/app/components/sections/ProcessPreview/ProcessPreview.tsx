// src/app/components/sections/ProcessPreview/ProcessPreview.tsx
'use client';

import { useState } from 'react';
import styles from './ProcessPreview.module.css';

interface ProcessStage {
  number: string;
  title: string;
  description: string;
  tools: string[];
}

const processStages: ProcessStage[] = [
  {
    number: '01',
    title: 'Descobrir',
    description: 'Mapeamento epistemológico do problema',
    tools: ['Diagramas de fluxo', 'Entrevistas estruturadas', 'Análise de contexto']
  },
  {
    number: '02',
    title: 'Definir',
    description: 'Estruturação do espaço de possibilidades',
    tools: ['Matriz Ψ', 'Vetores de decisão', 'Limites do sistema']
  },
  {
    number: '03',
    title: 'Desenhar',
    description: 'Criação do sistema visual verificável',
    tools: ['Tokens Ψ', 'Componentes', 'Sistema de grid']
  },
  {
    number: '04',
    title: 'Desenvolver',
    description: 'Implementação com precisão técnica',
    tools: ['Design systems em código', 'Animações', 'Testes de coerência']
  },
  {
    number: '05',
    title: 'Validar',
    description: 'Verificação da estabilidade do sistema',
    tools: ['Testes Ψ-TSOC', 'Métricas de densidade', 'Ajustes finais']
  }
];

export default function ProcessPreview() {
  const [expandedStage, setExpandedStage] = useState<number | null>(null);

  return (
    <section className={styles.preview} data-observador="O2">
      <header className={styles.header}>
        <h2 className={styles.title}>
          <span className={styles.titleNumber}>5</span>
          <span className={styles.titleText}>atos do método</span>
        </h2>
        <p className={styles.description}>
          Processo Ψ-TSOC para domar complexidade
        </p>
      </header>

      <div className={styles.stages}>
        {processStages.map((stage, index) => (
          <div
            key={stage.number}
            className={styles.stage}
            data-stage={stage.number}
            data-expanded={expandedStage === index}
            onMouseEnter={() => setExpandedStage(index)}
            onMouseLeave={() => setExpandedStage(null)}
          >
            <div className={styles.stageHeader}>
              <span className={styles.stageNumber}>{stage.number}</span>
              <h3 className={styles.stageTitle}>{stage.title}</h3>
            </div>

            <div className={styles.stageContent}>
              <p className={styles.stageDescription}>{stage.description}</p>
              
              <div className={styles.stageTools}>
                <ul className={styles.toolsList}>
                  {stage.tools.map((tool) => (
                    <li key={tool} className={styles.toolItem}>
                      <span className={styles.toolIcon}>→</span>
                      <span className={styles.toolName}>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <a href="/processo" className={styles.ctaLink}>
          Explorar processo completo
          <svg className={styles.ctaIcon} viewBox="0 0 24 24" width="16" height="16">
            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </a>
      </div>
    </section>
  );
}