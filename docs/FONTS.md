# 🔤 Sistema de Fontes

## Helvetica Neue

Este projeto utiliza a família tipográfica **Helvetica Neue** como fonte principal, com 5 variantes de peso implementadas via `@font-face`.

---

## 📦 Arquivos de Fonte

Localizados em: `/assets/fonts/`

| Arquivo | Peso CSS | Uso |
|---------|----------|-----|
| `HelveticaNeueThin.otf` | 100 | Textos muito leves, números grandes |
| `HelveticaNeueLight.otf` | 300 | **Texto padrão do corpo (body)** ✨ |
| `HelveticaNeueRoman.otf` | 400 | Texto padrão alternativo |
| `HelveticaNeueMedium.otf` | 500 | Links, labels, destaque médio |
| `HelveticaNeueBold.otf` | 700 | Títulos (h1-h6), botões, ênfase forte |

---

## 💻 Implementação Técnica

### @font-face

As fontes foram declaradas no início do `style.css`:

```css
@font-face {
  font-family: 'Helvetica Neue';
  src: url('/assets/fonts/HelveticaNeueThin.otf') format('opentype');
  font-weight: 100;
  font-style: normal;
  font-display: swap;
}

/* ... demais variantes ... */
```

### font-display: swap

O valor `swap` foi utilizado para garantir melhor performance:
- O texto é exibido imediatamente com fonte fallback
- A fonte customizada substitui assim que carregar
- Evita FOIT (Flash of Invisible Text)

---

## 🎨 Aplicação no CSS

### Font Stack

```css
body {
  font-family: 'Helvetica Neue', -apple-system, BlinkMacSystemFont, 
               'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 
               sans-serif;
  font-size: 1rem; /* 16px */
  font-weight: 300; /* Light - peso padrão ✨ */
}
```

### Títulos

```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 700; /* Bold */
}
```

---

## 🛠️ Classes Utilitárias

Classes CSS disponíveis para controle de peso da fonte:

```html
<p class="font-thin">Texto muito leve (100)</p>
<p class="font-light">Texto leve (300) - padrão ✨</p>
<p class="font-normal">Texto normal (400)</p>
<p class="font-medium">Texto médio (500)</p>
<p class="font-bold">Texto negrito (700)</p>
```

```css
.font-thin { font-weight: 100; }
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-bold { font-weight: 700; }
```

---

## 📋 Guia de Uso

### Quando usar cada peso:

#### Thin (100)
- ❌ **NÃO recomendado** para textos pequenos (< 18px)
- ✅ Números grandes em dashboards
- ✅ Textos decorativos de grande tamanho
- ✅ Elementos visuais específicos

#### Light (300) - ⭐ Padrão
- ✅ **Todo o conteúdo de texto padrão**
- ✅ Parágrafos e descrições
- ✅ Listas e conteúdo do corpo
- ✅ Textos longos com boa legibilidade

#### Roman (400)
- ✅ Alternativa para mais destaque
- ✅ Textos que precisam maior peso visual
- ✅ Conteúdo destacado sem usar Medium

#### Medium (500)
- ✅ Links de navegação
- ✅ Labels de formulário
- ✅ Texto em botões secundários
- ✅ Subtítulos e destaques médios

#### Bold (700)
- ✅ Todos os headings (h1-h6)
- ✅ Botões primários
- ✅ Textos de destaque forte
- ✅ Call-to-actions

---

## 🌐 Fallback Fonts

Caso a Helvetica Neue não carregue, o navegador usará fontes nesta ordem:

1. `-apple-system` → Fonte do sistema Apple (San Francisco)
2. `BlinkMacSystemFont` → Fonte do Chrome no macOS
3. `Segoe UI` → Fonte do Windows
4. `Roboto` → Fonte do Android
5. `Oxygen` → Fonte do KDE/Linux
6. `Ubuntu` → Fonte do Ubuntu
7. `Cantarell` → Fonte do GNOME
8. `sans-serif` → Fonte sans-serif genérica do sistema

---

## 📦 Formatos de Fonte

### Por que OTF?

- ✅ **OpenType Font** suporta mais recursos tipográficos
- ✅ Melhor qualidade de renderização
- ✅ Suporte universal em navegadores modernos
- ✅ Arquivo único para web e desktop

### Compatibilidade

| Navegador | Suporte OTF |
|-----------|-------------|
| Chrome | ✅ Sim |
| Firefox | ✅ Sim |
| Safari | ✅ Sim |
| Edge | ✅ Sim |
| Opera | ✅ Sim |

---

## ⚡ Performance

### Otimizações implementadas:

1. **font-display: swap** → Evita texto invisível
2. **Fallback stack robusto** → Fonte similar enquanto carrega
3. **Formato OTF otimizado** → Tamanho de arquivo razoável

### Dicas adicionais:

Se precisar melhorar ainda mais a performance:

```css
/* Preload de fontes críticas */
<link rel="preload" href="/assets/fonts/HelveticaNeueRoman.otf" as="font" type="font/otf" crossorigin>
<link rel="preload" href="/assets/fonts/HelveticaNeueBold.otf" as="font" type="font/otf" crossorigin>
```

Adicione no `<head>` do `default.html` se necessário.

---

## 🔧 Manutenção

### Adicionar novos pesos

Se precisar adicionar mais variantes (ex: Light, Black, Italic):

1. Adicione o arquivo `.otf` em `/assets/fonts/`
2. Crie novo `@font-face` no `style.css`:

```css
@font-face {
  font-family: 'Helvetica Neue';
  src: url('/assets/fonts/HelveticaNeueLight.otf') format('opentype');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
```

3. Crie classe utilitária se necessário:

```css
.font-light { font-weight: 300; }
```

---

## 📝 Checklist de Implementação

- [x] Fontes adicionadas em `/assets/fonts/`
- [x] `@font-face` declarado no CSS
- [x] `font-family` configurado no body
- [x] Títulos usando Bold (700)
- [x] Classes utilitárias criadas
- [x] `font-display: swap` para performance
- [x] Fallback stack configurado
- [x] Documentação criada

---

## 🎯 Exemplo Completo

```html
<div class="hero">
  <h1>Peterson Ramos</h1> <!-- Bold 700 -->
  <p class="font-medium">Desenvolvedor Full Stack</p> <!-- Medium 500 -->
  <p>Criando soluções digitais incríveis.</p> <!-- Roman 400 -->
  <small class="font-thin">Desde 2020</small> <!-- Thin 100 -->
</div>
```

---

**Fonte implementada com sucesso! 🎉**

