# Documentação de Botões

## Classe Padrão: `.btn-default`

A classe `.btn-default` é o padrão de botões do projeto. Ela foi criada para proporcionar uma experiência visual consistente em todo o site.

## Características

### Estilo Visual
- **Padding:** 0.75rem 1.25rem
- **Border-radius:** 8px
- **Cor do texto:** #120309 (padrão) ou customizável conforme contexto
- **Background:** Transparente (padrão) ou customizável conforme contexto
- **Borda:** 1px solid transparent (padrão)
- **Ícone:** Cor #00AEEF (azul primário)

### Efeitos Interativos

#### Hover (Mouse Over)
- Background muda para `rgba(0, 174, 239, 0.1)` (azul claro transparente)
- Borda muda para `rgba(0, 174, 239, 0.2)`
- Botão sobe 2px (`transform: translateY(-2px)`)
- Ícone aumenta 10% (`transform: scale(1.1)`)

#### Click (Active)
- Botão volta à posição original (`transform: translateY(0)`)
- **Efeito Ripple:** Animação de onda azul que se expande do ponto de clique
  - Duração: 0.6s
  - Cor: Gradiente radial de `rgba(0, 174, 239, 0.4)` para transparente

## Estrutura HTML

### Botão com Ícone FontAwesome
```html
<a href="#" class="btn-default">
  <i class="fab fa-linkedin"></i>
  <span>LinkedIn</span>
</a>
```

### Botão com Ícone SVG
```html
<a href="#" class="btn-default">
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="..."/>
  </svg>
  <span>E-Mail</span>
</a>
```

## Variações por Contexto

### Página Sobre (about.md)
Botões com fundo transparente e texto escuro:
```css
background-color: transparent;
color: #120309;
```

### Popover de Contato (index.md)
Botões com fundo escuro e texto claro:
```css
background-color: rgba(255, 255, 255, 0.05);
color: #FFF;
border: 1px solid rgba(255, 255, 255, 0.1);
```

## Onde é Usado

1. **Página Sobre** (`about.md`)
   - LinkedIn
   - E-Mail
   - WhatsApp
   - Link para Projetos

2. **Popover de Contato** (Hero da home - `index.md`)
   - E-Mail
   - WhatsApp

3. **Páginas de Portfolio** (`_layouts/portfolio-item.html`)
   - Ver demo
   - Ver código

## JavaScript

O efeito de ripple é aplicado automaticamente pela função `createRipple()` no arquivo `assets/js/main.js`:

```javascript
const interactiveElements = document.querySelectorAll('a, button, .btn, .btn-default, .project-card');
interactiveElements.forEach(element => {
  element.addEventListener('click', createRipple);
});
```

## Classes Legacy

As classes `.btn`, `.btn-primary`, `.btn-secondary` ainda existem no CSS para compatibilidade com páginas antigas, mas **não devem ser usadas em novos desenvolvimentos**.

**Para todos os novos botões, sempre utilize a classe `.btn-default`.**

## Responsividade

### Mobile (max-width: 768px)
- **Font-size:** 0.9375rem (15px)
- **Padding:** 0.675rem 1.125rem
- **Ícones:** 1.125rem (18px)

### Popover no Mobile
- **Font-size:** 14px
- **Padding:** 0.875rem 1.5rem

## Acessibilidade

- Botões mantêm contraste adequado de cores
- Elementos interativos com `cursor: pointer`
- Transições suaves para melhor feedback visual
- Área de toque adequada para dispositivos móveis
