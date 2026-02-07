// src/app/components/ui/Header/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

interface NavItem {
  number: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { number: '01', label: 'Processo', href: '/processo' },
  { number: '02', label: 'Projetos', href: '/projetos' },
  { number: '03', label: 'Ferramentas', href: '/ferramentas' },
  { number: '04', label: 'Princípios', href: '/principios' },
  { number: '05', label: 'Sobre', href: '/sobre' },
  { number: '06', label: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / scrollHeight) * 100;
      setProgress(Math.min(100, scrollProgress));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMenuOpen ? styles.menuOpen : ''}`}
      data-observador="O4"
      data-state={isScrolled ? 'scrolled' : 'home'}
    >
      <div className={styles.container}>
        {/* Logo: Precisão Silenciosa */}
        <Link href="/" className={styles.logo} aria-label=" Design - Início">
          <span className={styles.logoSymbol}>⟁</span>
          <span className={styles.logoText}></span>
        </Link>

        {/* Navegação Principal: Densidade Calibrada */}
        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.number} className={styles.navItem}>
                <Link 
                  href={item.href}
                  className={styles.navLink}
                  data-density="ideal"
                >
                  <span className={styles.navNumber}>{item.number}</span>
                  <span className={styles.navLabel}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Mobile (apenas para telas pequenas) */}
        <button 
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={styles.menuToggleIcon}>
            {isMenuOpen ? '×' : '≡'}
          </span>
        </button>

        {/* Indicador de Progresso Ψ (E⁺: Ordem Emergente) */}
        <div 
          className={styles.progress} 
          aria-hidden="true"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div 
            className={styles.progressBar}
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>

      {/* Menu Mobile Expandido */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav} aria-label="Navegação mobile">
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.number} className={styles.mobileNavItem}>
                  <Link 
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className={styles.mobileNavNumber}>{item.number}</span>
                    <span className={styles.mobileNavLabel}>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}