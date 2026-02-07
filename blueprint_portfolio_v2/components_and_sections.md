# Ψ-DERIVAÇÃO: COMPONENTES REPETITIVOS VS. ÚNICOS

## **ANÁLISE DE RECURSIVIDADE DO SISTEMA**

```
Ψ_componentes = f(σ_repetição, σ_unicidade, ∇_Σ^(consistência))
```

Derivando do framework:

---

## **1. COMPONENTES Ψ-REPETITIVOS (META-CAMADA M4: CONSISTÊNCIA)**

### **1.1 Header/Navegação (O₄: Meta-Observador)**
**Propósito Ψ**: Guiar sem constranger, revelar estrutura sem anunciar
```html
<!-- Componente: aura-header -->
<header class="aura-header" data-observador="O4">
  <div class="aura-header__container">
    <!-- Logo: precisão silenciosa -->
    <a href="/" class="aura-header__logo">
      <span class="aura-header__logo-symbol">⟁</span>
      <span class="aura-header__logo-text">Aura</span>
    </a>
    
    <!-- Navegação: densidade calibrada -->
    <nav class="aura-header__nav" aria-label="Navegação principal">
      <ul class="aura-header__nav-list">
        <li class="aura-header__nav-item">
          <a href="/processo" class="aura-header__nav-link">
            <span class="aura-header__nav-number">01</span>
            <span class="aura-header__nav-label">Processo</span>
          </a>
        </li>
        <!-- ... outros 6 itens com mesma estrutura -->
      </ul>
    </nav>
    
    <!-- Indicador de progresso (E⁺: ordem emergente) -->
    <div class="aura-header__progress" aria-hidden="true">
      <div class="aura-header__progress-bar"></div>
    </div>
  </div>
</header>
```

**Tokens específicos**:
```css
.aura-header {
  --header-height: 64px;
  --logo-size: 32px;
  --nav-spacing: var(--space-8);
  --progress-height: 1px;
}
```

**Motion states**:
- `data-state="home"`: Logo maior, navegação mais sutil
- `data-state="scrolled"`: Header mais compacto (56px)
- `data-state="menu-open"`: Navegação expandida (mobile)

### **1.2 Footer (Ψ: Confiança Silenciosa)**
```html
<footer class="aura-footer">
  <div class="aura-footer__grid">
    <!-- Coluna 1: Assinatura -->
    <div class="aura-footer__col">
      <div class="aura-footer__signature">
        <span class="aura-footer__tagline">Complexidade domada</span>
        <span class="aura-footer__year" data-current-year></span>
      </div>
    </div>
    
    <!-- Coluna 2: Links utilitários -->
    <div class="aura-footer__col">
      <nav class="aura-footer__utils">
        <a href="/sitemap" class="aura-footer__util-link">Mapa do site</a>
        <a href="/acessibilidade" class="aura-footer__util-link">Acessibilidade</a>
        <a href="/privacidade" class="aura-footer__util-link">Privacidade</a>
      </nav>
    </div>
    
    <!-- Coluna 3: Contato discreto -->
    <div class="aura-footer__col">
      <address class="aura-footer__contact">
        <a href="mailto:contato@aura.design" class="aura-footer__email">
          contato@aura.design
        </a>
      </address>
    </div>
  </div>
</footer>
```

**Feature Ψ**: Densidade decrescente (mais informação em cima, menos embaixo)

### **1.3 Sistema de Cards (M2: Densidade Sem Peso)**
```html
<!-- Card base -->
<article class="aura-card" data-density="1.5" data-precision="high">
  <div class="aura-card__header">
    <!-- Indicador de categoria (E⁺: ordem) -->
    <span class="aura-card__category" data-category="design-system">
      Sistema de Design
    </span>
    
    <!-- Metadata temporal -->
    <time class="aura-card__time" datetime="2024-Q1">
      Q1 2024
    </time>
  </div>
  
  <div class="aura-card__body">
    <h3 class="aura-card__title">
      <a href="#" class="aura-card__title-link">
        Ψ-Token System: Densidade Calibrada
      </a>
    </h3>
    
    <p class="aura-card__excerpt">
      Sistema de tokens que mantém densidade informacional ideal (1.5) 
      através de espaçamento variável e hierarquia tátil.
    </p>
    
    <!-- Tags de complexidade -->
    <div class="aura-card__tags">
      <span class="aura-card__tag" data-complexity="high">Alta complexidade</span>
      <span class="aura-card__tag" data-impact="medium">Impacto médio</span>
    </div>
  </div>
  
  <div class="aura-card__footer">
    <!-- Progress indicator (Ψ: processo visível) -->
    <div class="aura-card__progress">
      <div class="aura-card__progress-bar" style="--progress: 0.8;"></div>
      <span class="aura-card__progress-label">80% completo</span>
    </div>
    
    <!-- CTA preciso -->
    <a href="#" class="aura-card__cta" aria-label="Ver caso detalhado">
      <span class="aura-card__cta-text">Analisar método</span>
      <svg class="aura-card__cta-icon">→</svg>
    </a>
  </div>
</article>
```

**Variações de card**:
1. `aura-card--project`: Para projetos (com before/after slider)
2. `aura-card--tool`: Para ferramentas (com ícone técnico)
3. `aura-card--principle`: Para princípios (com exemplo visual)
4. `aura-card--compact`: Para listagens densas

### **1.4 Sistema de Botões (M3: Precisão Humana)**
```html
<!-- Botão primário -->
<button class="aura-btn aura-btn--primary" data-precision="high">
  <span class="aura-btn__label">Enviar mensagem</span>
  <span class="aura-btn__loader" aria-hidden="true"></span>
</button>

<!-- Botão secundário -->
<a href="#" class="aura-btn aura-btn--secondary" data-density="light">
  <span class="aura-btn__label">Ver detalhes</span>
  <svg class="aura-btn__icon">↗</svg>
</a>

<!-- Botão textual (mais discreto) -->
<button class="aura-btn aura-btn--text" data-weight="light">
  <span class="aura-btn__label">Saiba mais</span>
</button>
```

**States Ψ**:
- `:hover`: Elevação sutil (translateY(-1px), shadow-sm)
- `:active`: Press feedback (translateY(0))
- `:focus-visible`: Outline de precisão (vermelho medição)
- `[data-loading="true"]`: Spinner + label oculta

### **1.5 Sistema de Formulário (M7: Acessibilidade Precisiva)**
```html
<div class="aura-form" data-precision="high">
  <div class="aura-form__group">
    <label for="name" class="aura-form__label">
      <span class="aura-form__label-text">Nome completo</span>
      <span class="aura-form__label-hint">(ex: João Silva)</span>
    </label>
    
    <div class="aura-form__field">
      <input 
        type="text" 
        id="name" 
        class="aura-form__input"
        data-validate="required|min:2"
        aria-describedby="name-hint"
      />
      
      <!-- Feedback de validação (E⁺/E⁻) -->
      <div class="aura-form__feedback" id="name-hint">
        <span class="aura-form__feedback-valid" data-state="valid">
          ✓ Formato válido
        </span>
        <span class="aura-form__feedback-invalid" data-state="invalid">
          ✗ Mínimo 2 caracteres
        </span>
      </div>
    </div>
  </div>
</div>
```

**Componentes de formulário**:
1. `aura-form__select`: Select com estilo técnico
2. `aura-form__textarea`: Para mensagens longas
3. `aura-form__checkbox`: Precisão booleana
4. `aura-form__radio`: Seleção única precisa

### **1.6 Sistema de Modal/Dialog (Ψ: Foco Preciso)**
```html
<dialog class="aura-modal" id="project-detail">
  <div class="aura-modal__container">
    <!-- Header com título e close -->
    <div class="aura-modal__header">
      <h2 class="aura-modal__title">Detalhe do Projeto</h2>
      <button class="aura-modal__close" aria-label="Fechar">
        <svg class="aura-modal__close-icon">×</svg>
      </button>
    </div>
    
    <!-- Conteúdo com scroll próprio -->
    <div class="aura-modal__content">
      <!-- Conteúdo injetado dinamicamente -->
    </div>
    
    <!-- Footer com ações -->
    <div class="aura-modal__footer">
      <button class="aura-btn aura-btn--secondary" data-action="prev">
        ← Anterior
      </button>
      <button class="aura-btn aura-btn--primary" data-action="next">
        Próximo →
      </button>
    </div>
  </div>
</dialog>
```

### **1.7 Sistema de Loading States (Ψ: Processo Visível)**
```html
<!-- Spinner de precisão -->
<div class="aura-loader" data-type="spinner" data-precision="high">
  <div class="aura-loader__circle"></div>
  <span class="aura-loader__label">Calibrando...</span>
</div>

<!-- Skeleton loading (densidade mantida) -->
<div class="aura-skeleton" data-density="1.5">
  <div class="aura-skeleton__header"></div>
  <div class="aura-skeleton__body">
    <div class="aura-skeleton__line" style="--width: 80%;"></div>
    <div class="aura-skeleton__line" style="--width: 60%;"></div>
    <div class="aura-skeleton__line" style="--width: 90%;"></div>
  </div>
  <div class="aura-skeleton__footer"></div>
</div>
```

### **1.8 Sistema de Tooltips (Ψ: Informação Just-in-Time)**
```html
<button class="aura-tooltip-trigger" aria-describedby="tooltip-1">
  <span>Token de espaçamento</span>
</button>

<div class="aura-tooltip" id="tooltip-1" role="tooltip">
  <div class="aura-tooltip__content">
    <strong>var(--space-4):</strong> 2rem (32px)<br>
    Uso: Espaçamento entre seções principais<br>
    Razão: Base 8px × 4
  </div>
  <div class="aura-tooltip__arrow"></div>
</div>
```

---

## **2. COMPONENTES Ψ-ÚNICOS (ESPECÍFICOS POR PÁGINA)**

### **2.1 Página 1: Portal - Componentes Únicos**

**Hero com Diagrama Auto-Organizador**:
```html
<section class="portal-hero" data-observador="O1">
  <div class="portal-hero__diagram" id="aura-diagram">
    <!-- SVG gerado via JS com nós e conexões -->
    <svg class="portal-hero__diagram-svg" viewBox="0 0 800 400">
      <path class="portal-hero__diagram-path" d="M..." />
      <g class="portal-hero__diagram-nodes">
        <!-- 7 nodes correspondendo às páginas -->
        <circle class="portal-hero__diagram-node" data-node="home" cx="100" cy="200" />
        <!-- ... -->
      </g>
    </svg>
  </div>
  
  <div class="portal-hero__content">
    <h1 class="portal-hero__title">
      <span class="portal-hero__title-line">Complexidade</span>
      <span class="portal-hero__title-line portal-hero__title-line--highlight">
        pode ser domada
      </span>
    </h1>
    
    <p class="portal-hero__subtitle">
      Método Ψ-TSOC para transformar caos em clareza
    </p>
    
    <!-- Scroll indicator animado -->
    <div class="portal-hero__scroll-indicator">
      <span class="portal-hero__scroll-text">Explorar sistema</span>
      <div class="portal-hero__scroll-line">
        <div class="portal-hero__scroll-progress"></div>
      </div>
    </div>
  </div>
</section>
```

**Seção "Processo em 5 Atos"** (Preview da Página 2):
```html
<section class="portal-process-preview">
  <header class="portal-process-preview__header">
    <h2 class="portal-process-preview__title">
      <span class="portal-process-preview__title-number">5</span>
      <span class="portal-process-preview__title-text">atos do método</span>
    </h2>
  </header>
  
  <div class="portal-process-preview__stages">
    <!-- Cada estágio tem hover que expande -->
    <div class="portal-process-preview__stage" data-stage="discover">
      <div class="portal-process-preview__stage-header">
        <span class="portal-process-preview__stage-number">01</span>
        <h3 class="portal-process-preview__stage-title">Descobrir</h3>
      </div>
      <div class="portal-process-preview__stage-content">
        <p>Mapeamento epistemológico do problema</p>
        <ul class="portal-process-preview__stage-tools">
          <li>Diagramas de fluxo</li>
          <li>Entrevistas estruturadas</li>
        </ul>
      </div>
    </div>
    <!-- ... mais 4 estágios -->
  </div>
</section>
```

### **2.2 Página 2: Processo Exposto - Componentes Únicos**

**Timeline Vertical Interativa**:
```html
<div class="process-timeline" data-observador="O2">
  <!-- Timeline track -->
  <div class="process-timeline__track">
    <div class="process-timeline__progress"></div>
  </div>
  
  <!-- Timeline items (5) -->
  <article class="process-timeline__item" data-stage="1" data-status="active">
    <header class="process-timeline__item-header">
      <div class="process-timeline__item-marker">
        <span class="process-timeline__item-number">01</span>
      </div>
      <h3 class="process-timeline__item-title">Descobrir</h3>
      <button class="process-timeline__item-toggle" aria-expanded="true">
        <svg class="process-timeline__item-toggle-icon">▼</svg>
      </button>
    </header>
    
    <div class="process-timeline__item-content">
      <!-- Conteúdo expansível -->
      <div class="process-timeline__item-description">
        <p>Análise ontológica do problema...</p>
      </div>
      
      <!-- Artefatos deste estágio -->
      <div class="process-timeline__item-artifacts">
        <figure class="process-timeline__artifact">
          <img src="/artifacts/stage1-diagram.jpg" alt="" />
          <figcaption>Mapa epistemológico inicial</figcaption>
        </figure>
        <!-- Mais artefatos -->
      </div>
      
      <!-- Ferramentas usadas -->
      <div class="process-timeline__item-tools">
        <h4>Ferramentas Ψ</h4>
        <ul class="process-timeline__tools-list">
          <li>Miro para mapeamento</li>
          <li>Whimsical para diagramas</li>
        </ul>
      </div>
    </div>
  </article>
  <!-- ... mais 4 itens -->
</div>
```

### **2.3 Página 3: Projetos - Componentes Únicos**

**Sistema de Filtro por Complexidade**:
```html
<div class="projects-filter" data-observador="O3">
  <div class="projects-filter__header">
    <h2 class="projects-filter__title">Projetos por densidade de complexidade</h2>
    
    <!-- Slider de densidade -->
    <div class="projects-filter__density-slider">
      <label class="projects-filter__slider-label">
        <span>Densidade:</span>
        <span class="projects-filter__slider-value" data-value="1.5">1.5</span>
      </label>
      <input 
        type="range" 
        class="projects-filter__slider"
        min="0.5" 
        max="2" 
        step="0.1" 
        value="1.5"
        aria-label="Filtrar por densidade de complexidade"
      />
    </div>
  </div>
  
  <!-- Grid de projetos com densidade adaptativa -->
  <div class="projects-grid" data-density="1.5">
    <!-- Projetos serão injetados aqui -->
  </div>
</div>
```

**Componente Before/After Slider** (para detalhes de projeto):
```html
<div class="project-comparison" data-project="token-system">
  <div class="project-comparison__container">
    <!-- Imagem "antes" -->
    <div class="project-comparison__before">
      <img src="/projects/token-system-before.jpg" alt="Sistema anterior: tokens inconsistentes" />
      <div class="project-comparison__label">Antes</div>
    </div>
    
    <!-- Imagem "depois" -->
    <div class="project-comparison__after">
      <img src="/projects/token-system-after.jpg" alt="Sistema Ψ: tokens calibrados" />
      <div class="project-comparison__label">Depois</div>
    </div>
    
    <!-- Slider handle -->
    <div class="project-comparison__slider">
      <div class="project-comparison__slider-handle">
        <svg class="project-comparison__slider-icon">↔</svg>
      </div>
      <div class="project-comparison__slider-line"></div>
    </div>
  </div>
</div>
```

### **2.4 Página 4: Ferramentas - Componentes Únicos**

**Grid de Ferramentas Categorizado**:
```html
<div class="tools-grid" data-categorization="epistemic">
  <!-- Categoria: Análise -->
  <section class="tools-category" data-category="analysis">
    <header class="tools-category__header">
      <h2 class="tools-category__title">
        <span class="tools-category__icon">🔍</span>
        Análise Epistemológica
      </h2>
      <p class="tools-category__description">
        Ferramentas para desmontar complexidade
      </p>
    </header>
    
    <div class="tools-category__grid">
      <!-- Tool card especializado -->
      <article class="tool-card" data-tool="miro">
        <div class="tool-card__icon">M</div>
        <div class="tool-card__content">
          <h3 class="tool-card__title">Miro</h3>
          <p class="tool-card__description">
            Para mapeamento de relações complexas
          </p>
          <div class="tool-card__meta">
            <span class="tool-card__meta-item">Uso: Diagramas de fluxo</span>
            <span class="tool-card__meta-item">Precisão: Alta</span>
          </div>
        </div>
      </article>
      <!-- Mais ferramentas -->
    </div>
  </section>
  <!-- Mais categorias -->
</div>
```

### **2.5 Página 5: Princípios - Componentes Únicos**

**Sistema de Princípios com Exemplos Visuais**:
```html
<div class="principles-system">
  <!-- Princípio 1 -->
  <article class="principle" data-principle="clarity-over-style">
    <div class="principle__header">
      <div class="principle__number">01</div>
      <h2 class="principle__title">
        Clareza <em class="principle__title-emphasis">sobre</em> Estilo
      </h2>
    </div>
    
    <div class="principle__content">
      <div class="principle__statement">
        <p>Cada elemento visual deve servir à compreensão, não à estética.</p>
      </div>
      
      <!-- Exemplo visual comparativo -->
      <div class="principle__example">
        <div class="principle__example-bad">
          <h3>Estilo sem clareza</h3>
          <div class="principle__example-visual">
            <!-- Elemento sobre-estilizado -->
            <button class="example-bad-button">
              <span>Clique aqui</span>
              <span class="example-bad-button__sparkle">✨</span>
            </button>
          </div>
          <p class="principle__example-critique">
            Ornamentação distrai da função.
          </p>
        </div>
        
        <div class="principle__example-good">
          <h3>Clareza com estilo adequado</h3>
          <div class="principle__example-visual">
            <!-- Elemento claro -->
            <button class="example-good-button">
              Enviar mensagem
            </button>
          </div>
          <p class="principle__example-critique">
            Função clara, forma adequada.
          </p>
        </div>
      </div>
      
      <!-- Aplicação em projetos -->
      <div class="principle__application">
        <h3>Aplicado em:</h3>
        <ul class="principle__application-list">
          <li><a href="/projetos/token-system">Sistema de Tokens</a></li>
          <li><a href="/projetos/navigation">Navegação Principal</a></li>
        </ul>
      </div>
    </div>
  </article>
  <!-- Mais princípios -->
</div>
```

### **2.6 Página 6: Sobre - Componentes Únicos**

**Timeline de Experiência Ψ**:
```html
<div class="about-timeline">
  <!-- Cada fase da carreira -->
  <div class="about-timeline__phase" data-phase="foundation">
    <div class="about-timeline__phase-header">
      <div class="about-timeline__phase-years">2015-2017</div>
      <h3 class="about-timeline__phase-title">Fundação Epistemológica</h3>
    </div>
    
    <div class="about-timeline__phase-content">
      <div class="about-timeline__phase-description">
        <p>Estudos em sistemas complexos e design de informação.</p>
      </div>
      
      <!-- Aprendizados-chave -->
      <div class="about-timeline__phase-learnings">
        <h4>Ψ-Insights</h4>
        <ul class="about-timeline__learnings-list">
          <li>Complexidade pode ser mapeada, não apenas reduzida</li>
          <li>Sistemas emergem de regras simples aplicadas consistentemente</li>
        </ul>
      </div>
      
      <!-- Referências desta fase -->
      <div class="about-timeline__phase-references">
        <h4>Referências Ψ</h4>
        <div class="about-timeline__references-grid">
          <div class="about-timeline__reference">
            <cite>"Thinking in Systems"</cite>
            <span>Donella Meadows</span>
          </div>
          <!-- Mais referências -->
        </div>
      </div>
    </div>
  </div>
  <!-- Mais fases -->
</div>
```

### **2.7 Página 7: Contato - Componentes Únicos**

**Sistema de Calendário Integrado**:
```html
<div class="contact-scheduler" data-precision="high">
  <header class="contact-scheduler__header">
    <h2 class="contact-scheduler__title">
      Agende uma conversa precisa
    </h2>
    <p class="contact-scheduler__description">
      Escolha um slot de 30, 45 ou 60 minutos
    </p>
  </header>
  
  <div class="contact-scheduler__calendar">
    <!-- Calendário será injetado via Cal.com -->
    <div class="contact-scheduler__calendar-placeholder">
      <div class="contact-scheduler__loading">
        <div class="aura-loader" data-type="spinner"></div>
        <p>Carregando disponibilidade...</p>
      </div>
    </div>
  </div>
  
  <!-- Detalhes do agendamento -->
  <div class="contact-scheduler__details">
    <div class="contact-scheduler__detail">
      <h3>Preparação Ψ</h3>
      <p>Antes da conversa, prepare:</p>
      <ul class="contact-scheduler__prep-list">
        <li>Contexto do problema (1-2 parágrafos)</li>
        <li>Objetivos claros de conversão</li>
        <li>Exemplos do estado atual (se aplicável)</li>
      </ul>
    </div>
    
    <div class="contact-scheduler__detail">
      <h3>Pós-conversa</h3>
      <p>Você receberá:</p>
      <ul class="contact-scheduler__outcomes-list">
        <li>Resumo da conversa (Ψ-Analysis)</li>
        <li>Próximos passos recomendados</li>
        <li>Referências relevantes</li>
      </ul>
    </div>
  </div>
</div>
```

---

## **3. Ψ-ANÁLISE DE RECURSIVIDADE**

### **3.1 Padrões de Repetição Detectados**
```
Componentes repetitivos (σ_rep = 0.8+):
- Header, Footer, Cards, Botões, Formulários
- Modais, Loaders, Tooltips
- Grid systems, Containers

Componentes únicos (σ_uni = 1.0):
- Hero com diagrama (P1)
- Timeline interativa (P2)
- Slider before/after (P3)
- Grid categorizado (P4)
- Sistema de princípios (P5)
- Timeline de experiência (P6)
- Calendário integrado (P7)
```

### **3.2 Regras de Composição Ψ**

**Para componentes repetitivos**:
```css
/* Regra: Sempre usar variáveis de design system */
.aura-component {
  --component-spacing: var(--space-4);
  --component-border: var(--border-width) solid var(--border-subtle);
  --component-transition: all var(--duration-200) var(--ease-out);
}

/* Regra: Estados sempre explícitos */
.aura-component[data-state="loading"],
.aura-component[data-state="error"],
.aura-component[data-state="success"] {
  /* Estados específicos */
}
```

**Para componentes únicos**:
```css
/* Regra: Nomenclatura específica por página */
.page-unique-component {
  /* Estilos que não vazam para outros componentes */
  isolation: isolate;
}

/* Regra: Animações específicas permitidas */
@keyframes unique-to-this-page {
  /* Apenas aqui */
}
```

### **3.3 Mapa de Dependências Component-Level**
```
Header (repetitivo)
  ├── Logo
  ├── Navigation
  └── ProgressIndicator

Portal-Hero (único)
  ├── DiagramSVG
  ├── TitleAnimation
  └── ScrollIndicator

Process-Timeline (único)
  ├── TimelineTrack
  ├── ExpandableItem
  └── ArtifactGallery
```

---

## **4. Ψ-IMPLEMENTAÇÃO POR PRIORIDADE**

### **Fase 1: Componentes Repetitivos Essenciais** (Semana 1-2)
1. `aura-header` e `aura-footer`
2. `aura-container` (grid system)
3. `aura-card` base + variações
4. `aura-btn` base + states
5. `aura-form` básico

### **Fase 2: Componentes de Suporte** (Semana 2-3)
1. `aura-modal` system
2. `aura-loader` states
3. `aura-tooltip` system
4. `aura-skeleton` loading

### **Fase 3: Componentes Únicos por Página** (Semana 3-4)
1. Página 1: `portal-hero`, `portal-process-preview`
2. Página 2: `process-timeline`
3. Página 3: `projects-filter`, `project-comparison`
4. Página 4: `tools-grid`
5. Página 5: `principles-system`
6. Página 6: `about-timeline`
7. Página 7: `contact-scheduler`

### **Fase 4: Ψ-Integração** (Semana 5)
1. Conectar componentes com observador TSOC
2. Implementar ciclo DERIVA entre componentes
3. Testar coerência cross-component
4. Otimizar performance de composição

---

## **5. Ψ-TESTES DE COERÊNCIA COMPONENT-LEVEL**

### **Teste 1: Densidade Consistente**
```javascript
// Todos os cards devem ter densidade entre 1.3 e 1.7
test('cards maintain ideal density', () => {
  const allCards = document.querySelectorAll('.aura-card');
  allCards.forEach(card => {
    const density = calculateVisualDensity(card);
    expect(density).toBeGreaterThanOrEqual(1.3);
    expect(density).toBeLessThanOrEqual(1.7);
  });
});
```

### **Teste 2: Precisão de Alinhamento**
```javascript
// Todos os elementos devem estar no grid de 8px
test('all components respect 8px grid', () => {
  const allElements = document.querySelectorAll('*');
  allElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    expect(rect.left % 8).toBe(0);
    expect(rect.top % 8).toBe(0);
    expect(rect.width % 8).toBe(0);
    expect(rect.height % 8).toBe(0);
  });
});
```

### **Teste 3: Estados Ψ Consistentes**
```javascript
// Todos os componentes devem ter estados E⁺, E⁻, Ø bem definidos
test('components have proper Ψ-states', () => {
  const components = {
    'aura-btn': ['default', 'hover', 'active', 'loading', 'disabled'],
    'aura-card': ['default', 'hover', 'selected', 'loading'],
    'aura-form-input': ['default', 'focus', 'valid', 'invalid', 'disabled']
  };
  
  Object.entries(components).forEach(([component, expectedStates]) => {
    const instance = document.querySelector(component);
    expectedStates.forEach(state => {
      expect(instance.hasAttribute(`data-state-${state}`)).toBe(true);
    });
  });
});
```

---

## **PRÓXIMO: Ψ-IMPLEMENTAÇÃO DOS COMPONENTES REPETITIVOS**

Com esta análise completa, podemos começar a implementar os componentes repetitivos primeiro. 

**Próximo comando sugerido**: `"implemente o componente aura-header com todos os estados Ψ e motion conforme especificado"`

Isso iniciará a construção concreta do sistema, garantindo que cada componente siga os princípios Ψ-TSOC desde o início.