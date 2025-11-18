# Site Pessoal - Peterson Ramos

Site pessoal desenvolvido com Jekyll em formato single-page, focado em portfólio profissional.

## 🎯 Características

- **Design Single Page**: Layout moderno com hero section e grid de projetos
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Menu Dropdown**: Sistema de contato integrado no menu (Email + WhatsApp)
- **Páginas de Projeto**: Cada projeto tem sua própria página de detalhes
- **Performance**: Site estático super rápido
- **SEO Otimizado**: Pronto para ser encontrado nos mecanismos de busca

## 🚀 Tecnologias

- **Jekyll** 4.3.0 - Gerador de sites estáticos
- **Ruby** - Linguagem base do Jekyll
- **Liquid** - Template engine
- **HTML/CSS/JavaScript** - Frontend moderno
- **Font Awesome** - Ícones

## 📋 Pré-requisitos

Você precisa ter instalado:

- Ruby (versão 2.5 ou superior)
- RubyGems
- GCC e Make

### Instalação do Ruby

**macOS:**
```bash
brew install ruby
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Linux/Ubuntu:**
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

## 🔧 Instalação e Execução

1. **Instale as dependências:**
```bash
bundle install
```

2. **Execute o servidor local:**
```bash
bundle exec jekyll serve
```

3. **Acesse o site:**
```
http://localhost:4000
```

### Modo de desenvolvimento com live reload
```bash
bundle exec jekyll serve --livereload
```

### Build para produção
```bash
bundle exec jekyll build
```
Os arquivos gerados estarão na pasta `_site/`.

## 📁 Estrutura do projeto

```
.
├── _config.yml              # Configurações do site
├── _layouts/                # Templates HTML
│   ├── default.html        # Layout base com menu e footer
│   ├── home.html           # Layout da home (single page)
│   ├── page.html           # Layout de páginas internas
│   └── portfolio-item.html # Layout de projetos individuais
├── _portfolio/              # Projetos do portfólio
│   ├── sesi-cidadania-contra-fome.md
│   └── projeto-exemplo-2.md
├── assets/
│   ├── css/style.css       # Estilos completos
│   ├── js/main.js          # JavaScript (menu, dropdown)
│   └── images/portfolio/   # Imagens dos projetos
├── index.md                 # Home (hero + projetos)
├── about.md                 # Página sobre você
├── Gemfile                  # Dependências Ruby
└── README.md                # Este arquivo
```

## ✨ Estrutura do Site

### Home (Single Page)
- **Hero Section**: Apresentação com título, subtítulo e call-to-actions
- **Projetos em Destaque**: Grid responsivo com todos os projetos
- Scroll suave para seções

### Menu de Navegação
- **Home**: Volta para o topo
- **Projetos**: Scroll para seção de projetos
- **Sobre**: Página dedicada
- **Contato** (Dropdown):
  - Email
  - WhatsApp

### Páginas de Projeto
Cada projeto tem sua própria página com:
- Imagem principal
- Descrição detalhada
- Tecnologias utilizadas
- Links para demo e código
- Botão para voltar ao portfólio

## ✏️ Personalizando

### 1. Configurações Gerais

Edite `_config.yml`:
```yaml
title: Seu Nome
email: seu@email.com
github_username: seu-usuario
linkedin_username: seu-perfil
whatsapp_number: 5511999999999  # Código país + DDD + número
```

### 2. Hero Section

Edite `index.md` para personalizar:
- Título e nome
- Subtítulo (sua função/especialidade)
- Descrição
- Textos dos botões

### 3. Sobre Você

Edite `about.md` com:
- Sua história profissional
- Stack tecnológico
- Formação e certificações
- Interesses pessoais

### 4. Cores do Tema

Edite `assets/css/style.css`:
```css
:root {
  --primary-color: #2563eb;    /* Azul principal */
  --secondary-color: #1e40af;  /* Azul escuro */
  --text-color: #1f2937;       /* Cinza escuro */
  --bg-color: #ffffff;         /* Branco */
}
```

### 5. Adicionar Novo Projeto

Crie um arquivo em `_portfolio/nome-do-projeto.md`:

```yaml
---
layout: portfolio-item
title: "Nome do Projeto"
subtitle: "Breve descrição"
description: "Resumo que aparece no card"
tech:
  - React
  - Node.js
  - PostgreSQL
image: /assets/images/portfolio/meu-projeto.png
demo_url: https://demo.com
github_url: https://github.com/usuario/projeto
---

## Descrição completa do projeto

Escreva aqui todos os detalhes, desafios, soluções e resultados.
```

## 🌐 Deploy

### GitHub Pages (Recomendado e Gratuito)

Este projeto já está configurado para fazer deploy automático no GitHub Pages usando GitHub Actions.

#### Passo a Passo:

1. **Crie um repositório no GitHub** (se ainda não tiver):
   - Site de usuário: `seu-usuario.github.io` (deploy direto na raiz)
   - Site de projeto: qualquer nome (deploy em `/nome-do-repositorio`)

2. **Configure o repositório** (se for site de projeto):
   - Edite `_config.yml`:
     ```yaml
     baseurl: "/nome-do-repositorio"  # Nome do seu repositório
     url: "https://seu-usuario.github.io"
     ```

3. **Faça push do código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

4. **Configure o GitHub Pages:**
   - Vá em **Settings > Pages** no seu repositório
   - Em **Source**, selecione **GitHub Actions**
   - O workflow `.github/workflows/jekyll-gh-pages.yml` fará o build e deploy automaticamente

5. **Aguarde o deploy:**
   - O deploy acontece automaticamente a cada push na branch `main` ou `dev`
   - Você pode acompanhar em **Actions** > **Deploy Jekyll to GitHub Pages**
   - O site estará disponível em poucos minutos em:
     - Site de usuário: `https://seu-usuario.github.io`
     - Site de projeto: `https://seu-usuario.github.io/nome-do-repositorio/`

**Para domínio personalizado (OPCIONAL):**
- Se você tem um domínio próprio (ex: `petersonramos.com.br`):
  1. Crie um arquivo `CNAME` na raiz do projeto
  2. Dentro do arquivo, coloque apenas seu domínio (uma linha): `petersonramos.com.br`
  3. Faça commit e push do arquivo
  4. Configure o DNS do seu domínio apontando para o GitHub Pages (veja `GITHUB-PAGES.md` para detalhes)
  5. No GitHub: **Settings > Pages** > adicione o domínio personalizado e marque **Enforce HTTPS**
- Se você NÃO tem um domínio personalizado, não precisa criar o arquivo `CNAME` - o site funcionará normalmente com `seu-usuario.github.io`

### Netlify

1. Conecte seu repositório ao Netlify
2. Configure:
   - Build command: `jekyll build`
   - Publish directory: `_site`
3. Deploy!

### Vercel

Similar ao Netlify, com detecção automática de Jekyll.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Desktop**: > 768px - Layout completo
- **Tablet**: 768px - Ajustes no grid
- **Mobile**: < 768px - Menu hamburger, stack vertical

## 🎨 Recursos Visuais

- **Animações suaves**: Hover effects e transições
- **Gradientes**: Hero section e destaques
- **Ícones**: Font Awesome 6
- **Cards interativos**: Projetos com hover effect
- **Dropdown animado**: Menu de contato

## 📧 Contato (WhatsApp)

Para configurar o link do WhatsApp:

1. Edite `_config.yml`
2. Altere `whatsapp_number` com o formato:
   ```
   Código do país + DDD + Número
   Exemplo: 5511999999999
   ```

## 🔌 Plugins Incluídos

- **jekyll-feed**: Gera feed RSS
- **jekyll-seo-tag**: Meta tags para SEO
- **jekyll-sitemap**: Gera sitemap.xml automaticamente

## 📄 Licença

Este projeto é de código aberto. Use como base para seu próprio site!

## 🆘 Suporte

Se encontrar algum problema:
1. Verifique se o Ruby está instalado: `ruby -v`
2. Verifique se as gems estão instaladas: `bundle install`
3. Limpe o cache: `bundle exec jekyll clean`
4. Rebuild: `bundle exec jekyll build`

---

**Desenvolvido com ❤️ usando Jekyll**
