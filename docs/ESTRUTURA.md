# 📐 Estrutura do Site

## 🎯 Visão Geral

Este é um site **single-page** focado em portfólio profissional, com:
- Hero section impactante
- Grid de projetos na home
- Páginas individuais para cada projeto
- Página "Sobre" completa
- Menu com dropdown de contato (Email + WhatsApp)

---

## 📁 Arquivos e Pastas

### 🔧 Configuração

```
_config.yml          → Configurações globais do site
                       (título, email, redes sociais, plugins)

Gemfile              → Dependências Ruby/Jekyll
.gitignore           → Arquivos ignorados pelo Git
```

### 🎨 Layouts (`_layouts/`)

Templates HTML que definem a estrutura das páginas:

```
default.html         → Layout base (header, footer, menu)
                       Usado por todos os outros layouts

home.html            → Layout da página inicial
                       Herda de default.html

page.html            → Layout de páginas internas
                       Usado pela página "Sobre"

portfolio-item.html  → Layout de projetos individuais
                       Mostra detalhes completos do projeto
```

### 📄 Páginas Principais

```
index.md             → HOME (Single Page)
                       ├── Hero Section
                       │   ├── Título + Nome
                       │   ├── Subtítulo
                       │   ├── Descrição
                       │   └── Botões CTA
                       └── Grid de Projetos
                           └── Cards com links para detalhes

about.md             → SOBRE
                       ├── Apresentação
                       ├── Jornada profissional
                       ├── Stack tecnológico
                       ├── Formação
                       └── CTA de contato
```

### 💼 Portfólio (`_portfolio/`)

Cada arquivo = 1 projeto

```
_portfolio/
├── sesi-cidadania-contra-fome.md    → Firjan SESI Cidadania Contra a Fome
└── projeto-exemplo-2.md    → Projeto de exemplo 2

Estrutura de cada projeto:
├── Frontmatter (YAML)
│   ├── title: Nome do projeto
│   ├── subtitle: Descrição curta
│   ├── description: Para o card
│   ├── tech: [lista de tecnologias]
│   ├── image: Caminho da imagem
│   ├── demo_url: Link demo (opcional)
│   └── github_url: Link GitHub (opcional)
└── Conteúdo (Markdown)
    └── Descrição detalhada
```

### 🎨 Assets (`assets/`)

Arquivos estáticos (CSS, JS, Imagens):

```
assets/
├── css/
│   └── style.css           → Todos os estilos
│                             ├── Reset & Base
│                             ├── Header & Nav
│                             ├── Hero Section
│                             ├── Projects Grid
│                             ├── About Page
│                             ├── Forms & Buttons
│                             └── Responsive
│
├── js/
│   └── main.js             → JavaScript
│                             ├── Menu mobile
│                             ├── Dropdown contato
│                             └── Scroll suave
│
└── images/
    └── portfolio/          → Imagens dos projetos
        └── .gitkeep
```

### 📝 Documentação

```
README.md            → Documentação completa do projeto
INICIO-RAPIDO.md     → Guia passo a passo para começar
ESTRUTURA.md         → Este arquivo
```

---

## 🔄 Fluxo de Navegação

```
┌─────────────────────────────────────────────────┐
│                    HEADER                       │
│  Logo  │  Home  │  Projetos  │  Sobre  │ ⌄ Contato │
│                                           ├─ Email    │
│                                           └─ WhatsApp │
└─────────────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────┐
│                 HERO SECTION                    │
│         "Olá, eu sou [Seu Nome]"               │
│                                                 │
│        [Subtítulo profissional]                │
│                                                 │
│              Descrição breve                    │
│                                                 │
│    [Ver Projetos]  [Sobre Mim]                │
└─────────────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────┐
│            PROJETOS EM DESTAQUE                 │
│                                                 │
│  ┌────────┐  ┌────────┐  ┌────────┐           │
│  │Projeto │  │Projeto │  │Projeto │           │
│  │   1    │  │   2    │  │   3    │           │
│  │        │  │        │  │        │           │
│  │ [Ver]  │  │ [Ver]  │  │ [Ver]  │           │
│  └────────┘  └────────┘  └────────┘           │
│        │            │            │              │
│        ↓            ↓            ↓              │
│  ┌──────────────────────────────────┐          │
│  │   PÁGINA DE DETALHES DO PROJETO  │          │
│  │  - Imagem principal              │          │
│  │  - Descrição completa            │          │
│  │  - Tecnologias                   │          │
│  │  - Links (demo, código)          │          │
│  │  - [← Voltar ao portfólio]       │          │
│  └──────────────────────────────────┘          │
└─────────────────────────────────────────────────┘
```

---

## 🎯 Como Funciona o Jekyll

### Build Process

```
1. Jekyll lê _config.yml
   ↓
2. Processa arquivos Markdown
   ↓
3. Aplica layouts (Liquid templates)
   ↓
4. Gera HTML estático em _site/
   ↓
5. Copia assets (CSS, JS, imagens)
   ↓
6. Site pronto para deploy!
```

### Collections (Portfólio)

```
_portfolio/                    →  Pasta com projetos
├── projeto-1.md              →  Arquivo Markdown
└── projeto-2.md

                ↓ Jekyll processa ↓

_site/portfolio/              →  Pasta gerada
├── projeto-1.html           →  HTML gerado
└── projeto-2.html

Acesso:
/portfolio/projeto-1
/portfolio/projeto-2
```

---

## 🔧 Variáveis Importantes

### De `_config.yml`

```liquid
{{ site.title }}             → Título do site
{{ site.email }}             → Email
{{ site.github_username }}   → Username GitHub
{{ site.linkedin_username }} → Username LinkedIn
{{ site.whatsapp_number }}   → Número WhatsApp
```

### De páginas/posts

```liquid
{{ page.title }}             → Título da página
{{ page.url }}               → URL da página
{{ page.content }}           → Conteúdo da página
```

### Loops

```liquid
{% for project in site.portfolio %}
  {{ project.title }}
  {{ project.description }}
  {{ project.tech }}
{% endfor %}
```

---

## 📱 Responsividade

### Breakpoints

```css
Desktop:  > 768px  → Layout completo, grid de projetos
Tablet:   ≤ 768px  → Ajustes no grid
Mobile:   < 768px  → Menu hamburger, stack vertical
```

### Elementos Adaptativos

```
✓ Menu → Hamburger em mobile
✓ Hero → Altura e fonte ajustadas
✓ Grid de projetos → 3 colunas → 2 colunas → 1 coluna
✓ Botões → Full width em mobile
✓ Dropdown → Comportamento diferente em mobile
```

---

## 🎨 Customização Rápida

### Cores

Edite `assets/css/style.css`:

```css
:root {
  --primary-color: #2563eb;    ← Cor principal
  --secondary-color: #1e40af;  ← Cor secundária
  --text-color: #1f2937;       ← Texto
}
```

### Fontes

```css
body {
  font-family: -apple-system, ...;  ← Mude aqui
}
```

### Hero Gradient

```css
.hero {
  background: linear-gradient(...);  ← Personalize
}
```

---

## ✅ Checklist de Manutenção

### Ao adicionar novo projeto:
- [ ] Criar arquivo em `_portfolio/`
- [ ] Adicionar imagem em `assets/images/portfolio/`
- [ ] Preencher todos os campos do frontmatter
- [ ] Escrever descrição detalhada
- [ ] Testar links demo e GitHub
- [ ] Verificar responsividade

### Ao atualizar conteúdo:
- [ ] Editar arquivo correspondente
- [ ] Rebuild: `bundle exec jekyll build`
- [ ] Testar localmente
- [ ] Commit e push

### Deploy:
- [ ] `git add .`
- [ ] `git commit -m "mensagem"`
- [ ] `git push origin main`
- [ ] Aguardar GitHub Pages rebuild (1-2 min)

---

## 🆘 Debug

### Site não carrega no GitHub Pages?
1. Verifique Settings > Pages
2. Confirme que está usando branch `main`
3. Aguarde alguns minutos
4. Verifique Actions para erros de build

### Imagem não aparece?
- Use caminho absoluto: `/assets/images/...`
- Não use caminho relativo: `../assets/...`

### Menu mobile não abre?
- Limpe cache do navegador
- Verifique console JavaScript (F12)
- Confirme que `main.js` está carregando

---

**Happy coding! 🚀**

