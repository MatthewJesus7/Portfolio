// src/app/components/ui/Footer/Footer.tsx
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Coluna 1: Assinatura */}
          <div className={styles.col}>
            <div className={styles.signature}>
              <span className={styles.tagline}>Complexidade domada</span>
              <span className={styles.year} data-current-year={currentYear}>
                Ψ {currentYear}
              </span>
            </div>
          </div>

          {/* Coluna 2: Links utilitários */}
          <div className={styles.col}>
            <nav className={styles.utils} aria-label="Links utilitários">
              <a href="/sitemap" className={styles.utilLink}>
                Mapa do site
              </a>
              <a href="/acessibilidade" className={styles.utilLink}>
                Acessibilidade
              </a>
              <a href="/privacidade" className={styles.utilLink}>
                Privacidade
              </a>
            </nav>
          </div>

          {/* Coluna 3: Contato discreto */}
          <div className={styles.col}>
            <address className={styles.contact}>
              <a href="mailto:contato@.design" className={styles.email}>
                contato@.design
              </a>
              <div className={styles.location}>
                <span>São Paulo, BR</span>
                <span className={styles.timezone}>UTC-3</span>
              </div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}