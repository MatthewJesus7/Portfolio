src/
├── app/
│   ├── page.tsx                          # Página 1: Portal
│   ├── layout.tsx                        # Layout raiz Ψ
│   ├── processo/page.tsx                 # Página 2
│   ├── projetos/page.tsx                 # Página 3
│   ├── ferramentas/page.tsx              # Página 4
│   ├── principios/page.tsx               # Página 5
│   ├── sobre/page.tsx                    # Página 6
│   ├── contato/page.tsx                  # Página 7
│   └── components/
│       ├── ui/                           # Componentes Ψ-repetitivos
│       │   ├── AuraHeader/
│       │   ├── AuraFooter/
│       │   ├── AuraCard/
│       │   ├── AuraButton/
│       │   └── ...
│       └── sections/                     # Componentes Ψ-únicos
│           ├── PortalHero/
│           ├── PortalProcessPreview/
│           └── ...
├── styles/
│   ├── globals.css                       # Base Ψ
│   ├── tokens.css                        # Sistema de tokens
│   └── animations.css                    # Animações Ψ
└── lib/
    ├── aura-system/                      # Lógica Ψ
    └── utils/