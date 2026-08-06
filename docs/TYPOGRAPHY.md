# 📐 Sistema Tipográfico

## Escala de Tamanhos (rem)

Este projeto utiliza **rem** como unidade principal para todos os tamanhos de fonte, garantindo acessibilidade e escalabilidade.

**Base:** `1rem = 16px` (padrão do navegador)

---

## 📏 Escala Completa

| Tamanho | rem | px | Uso |
|---------|-----|----|-----|
| **XS** | 0.75rem | 12px | Ícones pequenos, legendas |
| **SM** | 0.875rem | 14px | Badges, tags, labels |
| **Base** | 1rem | 16px | **Texto padrão do corpo** ✨ |
| **MD** | 1.125rem | 18px | Texto destacado, subtítulos |
| **LG** | 1.25rem | 20px | Logo, h5 |
| **XL** | 1.5rem | 24px | h4, hero subtitle |
| **2XL** | 2rem | 32px | h3 |
| **3XL** | 2.5rem | 40px | h2, section headers |
| **4XL** | 3rem | 48px | h1 |
| **5XL** | 3.5rem | 56px | Hero title |

---

## 🎯 Aplicações Específicas

### Tipografia Padrão

```css
body {
  font-size: 1rem; /* 16px - BASE */
  font-weight: 300; /* Light ✨ - peso padrão */
  line-height: 1.6;
}
```

**✅ Configurado com Light (300)** - peso ideal para leitura, elegante e legível.

### Hierarquia de Títulos

```css
h1 { font-size: 3rem; }      /* 48px */
h2 { font-size: 2.5rem; }    /* 40px */
h3 { font-size: 2rem; }      /* 32px */
h4 { font-size: 1.5rem; }    /* 24px */
h5 { font-size: 1.25rem; }   /* 20px */
h6 { font-size: 1rem; }      /* 16px */
```

Todos os títulos usam `font-weight: 700` (Bold)

### Hero Section

```css
.hero-title {
  font-size: 3.5rem; /* 56px */
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem; /* 24px */
  font-weight: 500;
}

.hero-description {
  font-size: 1.125rem; /* 18px */
  font-weight: 100;
}
```

### Componentes

#### Project Cards
```css
.project-info h3 {
  font-size: 1.5rem; /* 24px */
  font-weight: 700;
}

.project-subtitle {
  font-size: 0.9375rem; /* 15px */
  font-weight: 100;
  font-style: italic;
}

.project-description {
  font-size: 1rem; /* 16px */
  font-weight: 100;
}
```

#### Badges & Tags
```css
.tech-badge {
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
}
```

#### Navigation
```css
.nav-menu a {
  font-size: 1rem; /* 16px */
  font-weight: 500;
}

.logo h1 {
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
}
```

---

## 🎨 Pesos de Fonte Disponíveis

| Nome | Weight | Arquivo | Uso Recomendado |
|------|--------|---------|-----------------|
| **Thin** | 100 | HelveticaNeueThin.otf | Números grandes, decoração |
| **Light** ⭐ | 300 | HelveticaNeueLight.otf | **Texto padrão do corpo** |
| **Roman** | 400 | HelveticaNeueRoman.otf | Alternativa para mais destaque |
| **Medium** | 500 | HelveticaNeueMedium.otf | Links, labels, destaque médio |
| **Bold** | 700 | HelveticaNeueBold.otf | Títulos, botões, ênfase |

### Classes Utilitárias

```html
<p class="font-thin">Texto muito leve (100)</p>
<p class="font-light">Texto leve (300) ← padrão ✨</p>
<p class="font-normal">Texto normal (400)</p>
<p class="font-medium">Texto médio (500)</p>
<p class="font-bold">Texto negrito (700)</p>
```

---

## 📱 Responsividade

### Desktop (> 768px)
Usa a escala completa conforme definida

### Mobile (≤ 768px)

```css
h1 { font-size: 2rem; }      /* 32px - reduzido de 48px */
h2 { font-size: 1.5rem; }    /* 24px - reduzido de 40px */

.hero-title {
  font-size: 2.5rem;         /* 40px - reduzido de 56px */
}

.hero-subtitle {
  font-size: 1.25rem;        /* 20px - reduzido de 24px */
}

.hero-description {
  font-size: 1rem;           /* 16px - reduzido de 18px */
}
```

---

## ✅ Boas Práticas

### 1. Sempre use rem
```css
/* ✅ CORRETO */
font-size: 1.5rem;

/* ❌ EVITAR */
font-size: 24px;
font-size: 1.5em; /* em é relativo ao pai, pode causar problemas */
```

### 2. Adicione comentários com o valor em px
```css
/* ✅ CORRETO - facilita compreensão */
font-size: 1.5rem; /* 24px */

/* ⚠️ OK, mas menos claro */
font-size: 1.5rem;
```

### 3. Mantenha a escala consistente
Use valores da tabela de escala ao invés de valores arbitrários

```css
/* ✅ CORRETO */
font-size: 1.125rem; /* 18px - valor da escala */

/* ❌ EVITAR */
font-size: 1.234rem; /* valor arbitrário */
```

### 4. Considere a legibilidade
- Thin (100) pode ser difícil de ler em textos pequenos
- Use Roman (400) ou Medium (500) para corpo de texto longo
- Reserve Thin (100) para textos grandes e impactantes

---

## 🔄 Alterando o Peso Padrão

O projeto está configurado com **Light (300)** como peso padrão. Se quiser alterar:

### Para mais destaque (Roman):
```css
body {
  font-size: 1rem;
  font-weight: 400; /* Roman - mais peso visual */
  line-height: 1.6;
}
```

### Para ainda mais destaque (Medium):
```css
body {
  font-size: 1rem;
  font-weight: 500; /* Medium - bem destacado */
  line-height: 1.6;
}
```

### Para texto ultra-leve (Thin):
```css
body {
  font-size: 1rem;
  font-weight: 100; /* Thin - muito delicado */
  line-height: 1.6;
}
```

**Recomendação:** Mantenha Light (300) para o melhor equilíbrio entre elegância e legibilidade. ✨

---

## 📊 Hierarquia Visual

### Importância Decrescente

```
Hero Title (3.5rem/700) ← MAIOR IMPACTO
    ↓
h1 (3rem/700)
    ↓
h2 (2.5rem/700)
    ↓
h3 (2rem/700)
    ↓
Texto destacado (1.125rem/500)
    ↓
Corpo do texto (1rem/300) ← PADRÃO ✨
    ↓
Badges/Tags (0.875rem/500)
    ↓
Legendas (0.75rem/300) ← MENOR
```

---

## 🎯 Line Height (Altura de Linha)

```css
/* Padrão do body */
body {
  line-height: 1.6; /* 160% - ótimo para leitura */
}

/* Títulos */
h1, h2, h3, h4, h5, h6 {
  line-height: 1.3; /* 130% - mais compacto */
}

/* Texto destacado */
.hero-description {
  line-height: 1.8; /* 180% - mais espaçado */
}
```

**Regra geral:**
- Títulos: `1.2 - 1.3`
- Corpo de texto: `1.6 - 1.8`
- Textos curtos (botões, labels): `1 - 1.2`

---

## 🧮 Calculadora rem → px

```
rem × 16 = px

Exemplos:
1rem × 16 = 16px
1.5rem × 16 = 24px
2rem × 16 = 32px
0.875rem × 16 = 14px
```

---

## 📝 Checklist

- [x] Base tipográfica: 1rem (16px)
- [x] Escala definida e documentada
- [x] Todos os tamanhos em rem
- [x] Comentários com valores em px
- [x] 4 pesos de fonte configurados
- [x] Classes utilitárias criadas
- [x] Responsividade implementada
- [x] Line-height otimizado

---

## 🎨 Exemplo Completo

```html
<article class="project-card">
  <h3>Título do Projeto</h3>
  <!-- 1.5rem/700 (24px/Bold) -->
  
  <p class="project-subtitle">Aplicação Web Moderna</p>
  <!-- 0.9375rem/300 (15px/Light) italic -->
  
  <p class="project-description">
    Esta é uma descrição completa do projeto que utiliza
    o tamanho padrão de fonte do corpo do texto.
  </p>
  <!-- 1rem/300 (16px/Light) ← Padrão do body ✨ -->
  
  <div class="project-tech">
    <span class="tech-badge">React</span>
    <span class="tech-badge">Node.js</span>
    <!-- 0.875rem/500 (14px/Medium) -->
  </div>
  
  <a href="#" class="project-link font-medium">
    Ver detalhes →
  </a>
  <!-- 1rem/500 (16px/Medium) -->
</article>
```

---

**Sistema tipográfico configurado! 🎉**

*Configurado com Light (300) - o equilíbrio perfeito entre elegância e legibilidade! ✨*

