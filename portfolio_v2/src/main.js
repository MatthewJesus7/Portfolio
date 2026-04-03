document.addEventListener('DOMContentLoaded', () => {
  initTicker();
  initNav();
  initReveal();
});

/**
 * GATE - Gerencia a transição de entrada e personalização da copy
 * Chamada diretamente pelo onclick="dismiss('contexto')" no HTML
 */
function dismiss(context) {
  const gate = document.getElementById('gate');
  const main = document.getElementById('main');
  
  if (!gate || !main) return;

  gate.classList.add('dismissed');
  main.classList.add('visible');

  const headlines = {
  deadline: { 
    h: 'Não faltou<br><em>tempo.</em><br>Faltou <span class="flip">diagnóstico.</span>', 
    n: '— desvio de cronograma' 
  },
  greenfield: { 
    h: 'Construir<br>sem <em>arquitetura</em><br>é <span class="flip">retrabalho.</span>', 
    n: '— novos sistemas' 
  },
  legacy: { 
    h: 'Legado não é<br><em>débito.</em><br>É <span class="flip">complexidade.</span>', 
    n: '— sustentação de código' 
  },
  scale: { 
    h: 'Escalar exige<br><em>processo,</em><br>não <span class="flip">esforço.</span>', 
    n: '— expansão de carga' 
  },
  null: { 
    h: 'O problema<br>não é <em>técnico.</em><br>É de <span class="flip">estado.</span>', 
    n: '— diagnóstico geral' 
  }
};
  const chosen = headlines[context] || headlines['null'];
  const heroH = document.getElementById('heroHeadline');
  const heroN = document.getElementById('heroName');

  if (heroH) heroH.innerHTML = chosen.h;
  if (heroN) heroN.textContent = chosen.n;

  // Força o scroll para o topo ao entrar no site
  window.scrollTo(0, 0);
}

/**
 * TICKER - Gera a barra infinita de competências
 */
function initTicker() {
  const ticker = document.getElementById('ticker');
  if (!ticker) return;

  const items = [
    'Full Stack Dev', 'O¹ → O²', 'React · Next.js · Node.js', 'python · flask · fastapi',
    'Diagnóstico de estado', 'Intervenção controlada', 'Sistemas elegantes',
    'Sem surpresas negativas', 'Arquitetura de software', 'Designer + Programador',
    'Disponível para projetos selecionados'
  ];

  const doubled = [...items, ...items];
  
  ticker.innerHTML = '';

  doubled.forEach(t => {
    const el = document.createElement('span');
    el.className = 'ticker-item';
    el.innerHTML = `${t}<span class="sep">◆</span>`;
    ticker.appendChild(el);
  });
}

/**
 * NAV - Controla a visibilidade da barra de navegação superior
 */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    // Aparece após 50% da altura da primeira dobra
    nav.classList.toggle('visible', window.scrollY > window.innerHeight * 0.5);
  }, { passive: true });
}

/**
 * REVEAL - Gerencia animações de entrada via IntersectionObserver
 */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    threshold: 0.08,
    rootMargin: "0px 0px -50px 0px"
  };

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');

        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => obs.observe(el));

  window.dismiss = dismiss;
}