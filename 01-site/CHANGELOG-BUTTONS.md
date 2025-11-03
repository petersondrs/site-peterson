# Changelog - Padronização de Botões

**Data:** 03 de Novembro de 2025

## Objetivo

Padronizar todos os botões do projeto para usar a classe `.btn-default`, garantindo consistência visual e de comportamento em todo o site.

## Alterações Realizadas

### 1. Arquivos HTML/Markdown Atualizados

#### `index.md` (Home Page)
- **Popover de Contato:**
  - Substituído `.btn .btn-primary` → `.btn-default`
  - Substituído `.btn .btn-secondary` → `.btn-default`
  - Atualizado `.btn-icon` → `.icon` (para consistência)
  - Ajustado estrutura de `<span>` para incluir textos

#### `_layouts/portfolio-item.html`
- **Links de Portfolio:**
  - Substituído `.btn .btn-primary` → `.btn-default`
  - Substituído `.btn .btn-secondary` → `.btn-default`
  - Envolvido textos em `<span>` tags para melhor estrutura

### 2. Arquivo CSS Atualizado (`assets/css/style.css`)

#### Novo: Estilos para `.btn-default` no Popover
```css
.contact-popover .contact-buttons .btn-default {
  width: 100%;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  color: #FFF;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-popover .contact-buttons .btn-default:hover {
  background-color: rgba(0, 174, 239, 0.1);
  border-color: #00AEEF;
  color: #FFF;
  box-shadow: 0 4px 12px rgba(0, 174, 239, 0.2);
}
```

#### Atualizado: Hero CTA
- Substituído `.hero-cta .btn` → `.hero-cta .btn-default`

#### Removido: Estilos duplicados
- Removido estilos específicos de `.contact-buttons .btn` (agora usa `.btn-default`)
- Removido estilos de `.btn-primary` e `.btn-secondary` em `.contact-buttons`

#### Atualizado: CSS Responsivo (Mobile)
- Substituído `.contact-popover .contact-buttons .btn` → `.btn-default`

#### Marcado: Classes Legacy
- Adicionado comentário nas classes `.btn`, `.btn-primary`, `.btn-secondary`:
  - "Legacy Button Styles - Mantidos para compatibilidade com páginas antigas"
  - "Nota: Para novos botões, sempre utilize a classe .btn-default"

### 3. JavaScript (`assets/js/main.js`)
- **Efeito Ripple:** Já configurado para aplicar em `.btn-default` (linha 185)
- Nenhuma alteração necessária

### 4. Documentação Criada

#### `BUTTONS.md`
- Documentação completa da classe `.btn-default`
- Estrutura HTML recomendada
- Guia de estilos e efeitos
- Exemplos de uso
- Diretrizes de responsividade
- Notas de acessibilidade

## Estado Atual dos Botões

### ✅ Usando `.btn-default`
1. Página Sobre (`about.md`)
   - LinkedIn
   - E-Mail
   - WhatsApp
   - Link para Projetos

2. Home - Popover de Contato (`index.md`)
   - E-Mail
   - WhatsApp

3. Páginas de Portfolio (`_layouts/portfolio-item.html`)
   - Ver demo
   - Ver código

### ⚠️ Mantido com classe específica
- `.btn-view-project` (botão "Visualizar projeto" nos cards da home)
  - Mantido por ter design específico para o contexto

### 📦 Classes Legacy (não usar em novos desenvolvimentos)
- `.btn`
- `.btn-primary`
- `.btn-secondary`

## Efeitos Padronizados

### Hover
- Background: `rgba(0, 174, 239, 0.1)`
- Border: `rgba(0, 174, 239, 0.2)`
- Transform: `translateY(-2px)`
- Ícone: `scale(1.1)`

### Click (Active)
- Transform: `translateY(0)`
- **Efeito Ripple:** Onda azul expandindo do ponto de clique (0.6s)

## Responsividade

### Desktop
- Font-size: 1rem (16px)
- Padding: 0.75rem 1.25rem
- Ícones: 1.25rem (20px)

### Mobile (≤768px)
- Font-size: 0.9375rem (15px)
- Padding: 0.675rem 1.125rem
- Ícones: 1.125rem (18px)

### Popover Mobile
- Font-size: 14px
- Padding: 0.875rem 1.5rem

## Compatibilidade

- ✅ Classes legacy mantidas para compatibilidade
- ✅ Efeito ripple aplicado automaticamente
- ✅ Responsivo para todos os tamanhos de tela
- ✅ Acessibilidade mantida

## Próximos Passos Recomendados

1. ✅ Testar visualmente todos os botões em diferentes contextos
2. ✅ Verificar comportamento em dispositivos móveis
3. ⏳ Considerar migrar `.btn-view-project` para usar `.btn-default` com variação (opcional)
4. ⏳ Identificar e atualizar qualquer página legacy que ainda use `.btn` (se houver)

## Notas Importantes

- **SEMPRE use `.btn-default` para novos botões**
- Classes legacy (`.btn`, `.btn-primary`, `.btn-secondary`) só devem ser usadas para manter compatibilidade com código antigo
- O efeito ripple é aplicado automaticamente via JavaScript
- Os ícones devem sempre usar a classe `.icon` (para SVG) ou classe do FontAwesome

