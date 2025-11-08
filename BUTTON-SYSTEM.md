# 🎨 Sistema de Botões - Documentação

## 📋 Visão Geral

Sistema unificado de botões baseado em uma classe `.btn` com modificadores. Todos os botões compartilham estilos base e comportamentos comuns.

---

## 🏗️ Estrutura

### Classe Base: `.btn`

A classe `.btn` contém todos os estilos comuns:
- Display: `inline-flex`
- Alinhamento centralizado de conteúdo
- Gap para ícones: `0.5rem`
- Padding padrão: `0.75rem 1.25rem`
- Border radius: `0.25rem`
- Transições suaves
- Hover e Active states

---

## 🎯 Modificadores de Estilo

### `.btn-primary`
**Uso:** Call-to-action principal, ações importantes  
**Aparência:** Fundo sólido com cor primária (#00AEEF)  
**Texto:** Branco

```html
<a href="#" class="btn btn-primary">Enviar</a>
```

### `.btn-secondary`
**Uso:** Ações secundárias  
**Aparência:** Fundo cinza claro  
**Texto:** Cor do texto padrão

```html
<button class="btn btn-secondary">Cancelar</button>
```

### `.btn-outline`
**Uso:** Ações alternativas, opções secundárias  
**Aparência:** Borda colorida, fundo transparente  
**Hover:** Inverte cores (fundo preenchido)

```html
<a href="#" class="btn btn-outline">Saiba Mais</a>
```

### `.btn-ghost`
**Uso:** Ações sutis, navegação  
**Aparência:** Completamente transparente  
**Hover:** Fundo cinza muito sutil

```html
<button class="btn btn-ghost">Detalhes</button>
```

### `.btn-default`
**Uso:** Botão padrão transparente (similar ao ghost)  
**Aparência:** Transparente com ícones em azul

```html
<a href="#" class="btn btn-default">
  <i class="fas fa-envelope"></i>
  <span>E-mail</span>
</a>
```

---

## 📏 Tamanhos

### `.btn-sm` - Pequeno
- Padding: `0.5rem 1rem`
- Font-size: `0.875rem`
- Ícones: `1rem`

### Padrão (sem modificador)
- Padding: `0.75rem 1.25rem`
- Font-size: `1rem`
- Ícones: `1.25rem`

### `.btn-lg` - Grande
- Padding: `1rem 2rem`
- Font-size: `1.125rem`
- Ícones: `1.5rem`

**Exemplo:**
```html
<button class="btn btn-primary btn-sm">Pequeno</button>
<button class="btn btn-primary">Médio</button>
<button class="btn btn-primary btn-lg">Grande</button>
```

---

## 🛠️ Utilitários

### `.btn-block`
Botão com largura total (100%)

```html
<button class="btn btn-primary btn-block">Inscrever-se</button>
```

### `.btn-icon`
Botão apenas com ícone (sem texto)

```html
<button class="btn btn-icon btn-primary">
  <i class="fas fa-search"></i>
</button>
```

### `.disabled`
Estado desabilitado

```html
<button class="btn btn-primary disabled">Desabilitado</button>
```

### `.loading`
Estado de carregamento (com spinner animado)

```html
<button class="btn btn-primary loading">Carregando...</button>
```

---

## 🎨 Variações Especiais

### `.btn-view-project`
Botão específico para visualização de projetos

```html
<a href="#" class="btn btn-view-project">
  <i class="fas fa-eye"></i>
  <span>Visualizar projeto</span>
</a>
```

### `.btn-highlight` (Alias)
Alias para `.btn-primary` (mantido para compatibilidade)

### `.btn-hilght` (Legacy)
Classe antiga mantida para compatibilidade com páginas existentes

---

## 💡 Ícones

### Com Font Awesome
```html
<a href="#" class="btn btn-primary">
  <i class="fab fa-whatsapp"></i>
  <span>WhatsApp</span>
</a>
```

### Com SVG
```html
<a href="#" class="btn btn-default">
  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path fill="currentColor" d="..."/>
  </svg>
  <span>E-mail</span>
</a>
```

**Notas sobre ícones:**
- Ícones herdam a cor do botão automaticamente
- Ícones SVG devem ter a classe `.icon`
- Ícones têm animação de escala no hover (scale 1.1)
- Use `flex-shrink: 0` para evitar que encolham

---

## 📱 Responsividade

### Desktop (> 768px)
Tamanhos padrão conforme especificado

### Mobile (< 768px)
Ajustes automáticos:
- Font-size: `0.9375rem` (15px)
- Padding reduzido: `0.675rem 1.125rem`
- Ícones: `1.125rem`

---

## 🎯 Contextos Especiais

### Contact Popover
Botões dentro do popover de contato têm estilos personalizados:
- Fundo semi-transparente branco
- Largura total
- Ícones em azul

```html
<div class="contact-popover">
  <div class="contact-buttons">
    <a href="#" class="btn btn-default">
      <i class="fas fa-envelope"></i>
      <span>E-Mail</span>
    </a>
  </div>
</div>
```

### Text Color Inverse (Fundos Escuros)
Em seções com `.text-color-inverse`:
- Botões têm fundo semi-transparente branco
- Texto e ícones em branco

```html
<section class="project-featured-section text-color-inverse">
  <a href="#" class="btn btn-default">Visualizar</a>
</section>
```

---

## 🔧 Tokens CSS

Variáveis disponíveis para customização:

```css
--btn-padding-y-min: 0.625rem;  /* 10px */
--btn-padding-y-max: 1rem;      /* 16px */
--btn-padding-x-min: 1.5rem;    /* 24px */
--btn-padding-x-max: 2rem;      /* 32px */
--btn-fluid-scale: 1vw;
```

---

## ✅ Boas Práticas

1. **Sempre use `.btn` como classe base**
   ```html
   <!-- ✅ Correto -->
   <button class="btn btn-primary">Clique</button>
   
   <!-- ❌ Incorreto -->
   <button class="btn-primary">Clique</button>
   ```

2. **Combine modificadores de forma lógica**
   ```html
   <!-- ✅ Correto -->
   <button class="btn btn-primary btn-lg">Grande CTA</button>
   
   <!-- ❌ Evite múltiplos modificadores de estilo -->
   <button class="btn btn-primary btn-outline">Confuso</button>
   ```

3. **Use elementos semânticos apropriados**
   - `<button>` para ações
   - `<a>` para navegação

4. **Sempre inclua texto descritivo com ícones**
   ```html
   <!-- ✅ Acessível -->
   <button class="btn btn-primary">
     <i class="fas fa-save"></i>
     <span>Salvar</span>
   </button>
   
   <!-- ✅ Ou use btn-icon com aria-label -->
   <button class="btn btn-icon btn-primary" aria-label="Buscar">
     <i class="fas fa-search"></i>
   </button>
   ```

---

## 📊 Tabela de Referência Rápida

| Classe | Estilo | Background | Cor | Border | Uso |
|--------|--------|------------|-----|--------|-----|
| `.btn-primary` | Sólido | #00AEEF | Branco | Sólida | CTA Principal |
| `.btn-secondary` | Sólido | Cinza | Escuro | Sólida | Ação secundária |
| `.btn-outline` | Outline | Transparente | Primária | Primária | Alternativa |
| `.btn-ghost` | Ghost | Transparente | Escuro | Transparente | Sutil |
| `.btn-default` | Default | Transparente | Escuro | Transparente | Padrão |

---

## 🧪 Arquivo de Teste

Para visualizar todos os botões em ação, abra:
```
button-examples.html
```

Este arquivo contém exemplos visuais de todas as variações, tamanhos e estados disponíveis.

---

## 📝 Changelog

### v2.0 (Atual)
- ✅ Sistema unificado com classe `.btn` base
- ✅ Modificadores padronizados
- ✅ Suporte completo a ícones (Font Awesome e SVG)
- ✅ Estados de loading e disabled
- ✅ Responsividade aprimorada
- ✅ Documentação completa

### v1.0 (Legacy)
- Classes individuais: `.btn-default`, `.btn-hilght`, `.btn-view-project`
- Mantidas para compatibilidade

---

## 🤝 Contribuindo

Ao adicionar novos estilos de botão:

1. Use a classe `.btn` como base
2. Crie modificadores específicos
3. Documente o uso e exemplos
4. Adicione ao arquivo `button-examples.html`
5. Teste em mobile e desktop
6. Considere estados (hover, active, disabled, loading)

---

## 📞 Suporte

Para dúvidas ou sugestões sobre o sistema de botões, consulte:
- `assets/css/style.css` (linhas 128-420)
- `button-examples.html` (exemplos visuais)
- Esta documentação

---

**Última atualização:** Novembro 2025

