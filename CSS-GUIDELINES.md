# 📐 Diretrizes CSS do Projeto

## 🎯 Princípio Fundamental

> **Sempre que possível, evite unidades fixas (px). Priorize unidades flexíveis e escaláveis.**

---

## ✅ Unidades Recomendadas

### 1. **rem** (Root Em) - PREFERENCIAL

**Quando usar:** Para quase tudo (fontes, espaçamentos, tamanhos)

```css
/* ✅ CORRETO */
font-size: 1rem;        /* 16px */
padding: 2rem;          /* 32px */
margin: 1.5rem;         /* 24px */
width: 20rem;           /* 320px */
gap: 1rem;
border-radius: 0.5rem;  /* 8px */
```

**Por quê?**
- Respeita preferências de acessibilidade do usuário
- Escala com o zoom do navegador
- Base: 1rem = 16px (padrão do navegador)
- Fácil de calcular: valor ÷ 16 = rem

**Conversão rápida:**
```
8px   = 0.5rem
12px  = 0.75rem
14px  = 0.875rem
16px  = 1rem
18px  = 1.125rem
20px  = 1.25rem
24px  = 1.5rem
32px  = 2rem
40px  = 2.5rem
48px  = 3rem
56px  = 3.5rem
64px  = 4rem
```

---

### 2. **em** (Relative Em)

**Quando usar:** Valores que devem escalar com o elemento pai

```css
/* ✅ CORRETO - ícone que escala com o texto */
.btn i {
  font-size: 1.2em; /* 20% maior que o texto do botão */
  margin-right: 0.5em;
}
```

**⚠️ Cuidado:** `em` é relativo ao elemento pai, pode causar efeito cascata

---

### 3. **%** (Porcentagem)

**Quando usar:** Larguras, alturas relativas ao container

```css
/* ✅ CORRETO */
.container {
  width: 100%;
  max-width: 75rem; /* 1200px */
}

.column {
  width: 50%;
}
```

---

### 4. **vw, vh** (Viewport Width/Height)

**Quando usar:** Elementos que devem ocupar uma porção da tela

```css
/* ✅ CORRETO */
.hero {
  min-height: 100vh;
  width: 100vw;
}

.fullscreen-section {
  height: 100svh; /* Safe area viewport height - mobile friendly */
}
```

**Variantes modernas:**
- `svh` (Small Viewport Height) - sem barras de UI mobile
- `lvh` (Large Viewport Height) - com barras de UI mobile
- `dvh` (Dynamic Viewport Height) - se adapta

---

### 5. **ch** (Character Width)

**Quando usar:** Largura de texto legível

```css
/* ✅ CORRETO - limita linha a ~60 caracteres */
.text-content {
  max-width: 65ch;
}
```

---

### 6. **clamp()** - Valores Fluidos

**Quando usar:** Tamanhos que escalam entre limites

```css
/* ✅ CORRETO - tipografia fluida */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  /* min: 2rem, ideal: 5vw, max: 4rem */
}

.container {
  padding: clamp(1rem, 3vw, 3rem);
}
```

---

## ❌ Evitar: px (Pixels)

### Exceções onde px é aceitável:

```css
/* ✅ OK - bordas de 1px ficam nítidas */
border: 1px solid #ccc;
border-bottom: 2px solid var(--primary-color);

/* ✅ OK - sombras precisas */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* ✅ OK - imagens de tamanho fixo conhecido */
.icon-small {
  width: 16px;
  height: 16px;
}

/* ✅ OK - precisão em SVG viewBox */
viewBox="0 0 512 512"
```

### ❌ Evitar px para:

```css
/* ❌ ERRADO */
font-size: 16px;      /* Use: 1rem */
padding: 20px;        /* Use: 1.25rem */
margin: 24px;         /* Use: 1.5rem */
width: 320px;         /* Use: 20rem ou % */
height: 500px;        /* Use: 31.25rem ou vh */
gap: 16px;            /* Use: 1rem */
border-radius: 8px;   /* Use: 0.5rem */
```

---

## 🎨 Padrões de Espaçamento

### Escala de Espaçamento (baseada em rem)

```css
:root {
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
}

/* Uso */
.card {
  padding: var(--spacing-lg);
  gap: var(--spacing-md);
}
```

---

## 📏 Padrões de Tamanho

### Tipografia

```css
/* Sempre em rem */
h1 { font-size: 3rem; }      /* 48px */
h2 { font-size: 2.5rem; }    /* 40px */
h3 { font-size: 2rem; }      /* 32px */
h4 { font-size: 1.5rem; }    /* 24px */
h5 { font-size: 1.25rem; }   /* 20px */
h6 { font-size: 1rem; }      /* 16px */
body { font-size: 1rem; }    /* 16px */
small { font-size: 0.875rem; } /* 14px */
```

### Containers

```css
/* Use rem ou % */
.container {
  max-width: 75rem;    /* 1200px */
  width: 100%;
  padding: 0 1.25rem;  /* 20px */
}

.section {
  padding: 4rem 0;     /* 64px vertical */
}
```

### Componentes

```css
/* Prefira rem */
.btn {
  padding: 0.75rem 1.5rem;  /* 12px 24px */
  border-radius: 0.5rem;    /* 8px */
  font-size: 1rem;          /* 16px */
}

.card {
  padding: 1.5rem;          /* 24px */
  border-radius: 0.75rem;   /* 12px */
  gap: 1rem;                /* 16px */
}
```

---

## 🔄 Conversão de px para rem

### Fórmula

```
rem = px ÷ 16
```

### Exemplos

```css
/* Antes (px) */
padding: 24px 32px;
margin-bottom: 16px;
font-size: 18px;

/* Depois (rem) */
padding: 1.5rem 2rem;
margin-bottom: 1rem;
font-size: 1.125rem;
```

### Ferramenta útil

Adicione comentários com valores em px para referência:

```css
font-size: 1.125rem;  /* 18px */
padding: 1.5rem;      /* 24px */
gap: 2rem;            /* 32px */
```

---

## 📱 Responsividade

### Media Queries - Use em ou rem

```css
/* ✅ CORRETO - em/rem */
@media (max-width: 48em) {      /* 768px */
  .container {
    padding: 1rem;
  }
}

@media (min-width: 64rem) {     /* 1024px */
  h1 {
    font-size: 4rem;
  }
}

/* ❌ EVITAR - px */
@media (max-width: 768px) {
  /* ... */
}
```

**Por quê?** Media queries em rem/em respeitam zoom do navegador.

---

## 🎯 Checklist de Revisão

Antes de commitar CSS, verifique:

- [ ] Fontes estão em `rem`?
- [ ] Espaçamentos (padding/margin) estão em `rem`?
- [ ] Larguras/alturas flexíveis usam `%`, `rem`, `vh/vw`?
- [ ] Border-radius em `rem`?
- [ ] Gaps em `rem`?
- [ ] Bordas de 1-2px podem continuar em `px`?
- [ ] Media queries em `em` ou `rem`?
- [ ] Comentários com valores em px onde útil?

---

## 🛠️ Ferramentas de Migração

### Script de conversão (futuro)

```bash
# Converter px para rem no CSS
# Exemplo: sed 's/\([0-9]\+\)px/\1rem/g'
```

### VS Code Snippet

```json
{
  "rem from px": {
    "prefix": "pxrem",
    "body": [
      "${1}rem /* ${2:${1*16}}px */"
    ]
  }
}
```

---

## 📊 Status Atual do Projeto

**CSS atual:** ~105 ocorrências de `px` ainda no código

**Ação:** Migração gradual para `rem` conforme edições

---

## 📚 Referências

- [MDN: CSS Values and Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Web.dev: Responsive Design](https://web.dev/responsive-web-design-basics/)
- [A11y: Accessible Typography](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)

---

## 💡 Por Que Esse Padrão?

### ✅ Acessibilidade
- Usuários podem aumentar tamanho de fonte do navegador
- Respeita preferências de acessibilidade
- Melhor experiência para pessoas com baixa visão

### ✅ Manutenibilidade
- Mudanças no `font-size` do root afetam todo o site
- Escala consistente e previsível
- Mais fácil de manter proporções

### ✅ Responsividade
- Adapta melhor a diferentes tamanhos de tela
- Menos breakpoints necessários
- Layout mais fluido

### ✅ Performance
- Recalculos mais eficientes pelo navegador
- Menos sobrescritas de estilos
- CSS mais limpo e organizado

---

**Lembre-se:** `rem` é seu melhor amigo! 🚀

*Última atualização: 2025-11-05*

