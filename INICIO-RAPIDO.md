# 🚀 Início Rápido

Guia passo a passo para colocar seu site no ar em minutos!

## 📝 Checklist de Personalização

### ✅ Passo 1: Configurações Básicas

Abra `_config.yml` e atualize:

```yaml
title: Seu Nome Aqui
email: seu-email@exemplo.com
description: Uma breve descrição sobre você
github_username: seu-usuario-github
linkedin_username: seu-perfil-linkedin
whatsapp_number: 5511999999999  # Seu número com código do país
```

### ✅ Passo 2: Personalize a Home

Abra `index.md` e edite:

1. **Hero Title**: Mude "Peterson Ramos" para seu nome
2. **Hero Subtitle**: Sua função/especialidade (ex: "Desenvolvedor Mobile", "Designer UI/UX")
3. **Hero Description**: Breve descrição do que você faz
4. **Botões**: Mantenha ou ajuste os textos

### ✅ Passo 3: Complete sua Página Sobre

Abra `about.md` e preencha:

- [ ] Sua história profissional
- [ ] Experiência atual
- [ ] Stack tecnológico (adicione ou remova tecnologias)
- [ ] Formação acadêmica
- [ ] Certificações
- [ ] Interesses pessoais

### ✅ Passo 4: Adicione Seus Projetos

Você pode editar os exemplos ou criar novos.

**Para editar um exemplo:**
1. Abra `_portfolio/sesi-cidadania-contra-fome.md`
2. Atualize todas as informações
3. Adicione uma imagem em `assets/images/portfolio/`
4. Repita para outros projetos

**Para criar um novo projeto:**
1. Crie `_portfolio/meu-projeto.md`
2. Copie o template abaixo:

```yaml
---
layout: portfolio-item
title: "Nome do Seu Projeto"
subtitle: "Descrição curta"
description: "Descrição que aparece no card da home"
tech:
  - Tecnologia 1
  - Tecnologia 2
  - Tecnologia 3
image: /assets/images/portfolio/nome-imagem.png
demo_url: https://seu-projeto.com  # Opcional
github_url: https://github.com/usuario/projeto  # Opcional
---

## Sobre o projeto

Descreva seu projeto aqui...

### Funcionalidades

- Funcionalidade 1
- Funcionalidade 2

### Desafios e Soluções

Conte sobre os desafios que enfrentou...

### Resultados

Mostre os resultados alcançados...
```

### ✅ Passo 5: Adicione Imagens dos Projetos

1. Coloque suas imagens em `assets/images/portfolio/`
2. Recomendado: 
   - Formato: PNG ou JPG
   - Proporção: 16:9 ou 4:3
   - Tamanho: 1200x675px ou similar
   - Otimize antes (use TinyPNG.com)

### ✅ Passo 6: Personalize as Cores (Opcional)

Abra `assets/css/style.css` e encontre:

```css
:root {
  --primary-color: #2563eb;    /* Sua cor principal */
  --secondary-color: #1e40af;  /* Cor secundária */
  --text-color: #1f2937;       /* Cor do texto */
  --text-light: #6b7280;       /* Texto claro */
}
```

Ferramentas úteis para escolher cores:
- [Coolors.co](https://coolors.co)
- [Adobe Color](https://color.adobe.com)

## 🖥️ Testando Localmente

1. **Instale as dependências:**
```bash
bundle install
```

2. **Execute o servidor:**
```bash
bundle exec jekyll serve
```

3. **Abra no navegador:**
```
http://localhost:4000
```

4. **Teste tudo:**
   - [ ] Hero section está personalizado
   - [ ] Projetos aparecem corretamente
   - [ ] Links do menu funcionam
   - [ ] Dropdown de contato funciona
   - [ ] Página Sobre está completa
   - [ ] Links sociais funcionam
   - [ ] Site responsivo (teste em mobile)

## 🌐 Publicando no GitHub Pages

1. **Crie um repositório no GitHub**
   - Nome sugerido: `portfolio` ou `meu-site`

2. **Inicialize o Git (se ainda não fez):**
```bash
git init
```

3. **Adicione seus arquivos:**
```bash
git add .
git commit -m "Meu site pessoal"
```

4. **Conecte ao GitHub:**
```bash
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

5. **Ative o GitHub Pages:**
   - Vá no repositório no GitHub
   - Settings > Pages
   - Source: `main` branch, pasta `/` (root)
   - Save

6. **Aguarde alguns minutos** e acesse:
```
https://seu-usuario.github.io/seu-repositorio/
```

## ⚙️ Configuração de Domínio Próprio (Opcional)

Se você tem um domínio (ex: `seusite.com`):

1. **Crie arquivo `CNAME` na raiz:**
```
seusite.com
```

2. **Configure DNS do seu domínio:**
   - Tipo A:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Ou CNAME: `seu-usuario.github.io`

3. **Aguarde propagação do DNS** (até 48h)

## 📋 Próximos Passos

Depois que seu site estiver no ar:

- [ ] Compartilhe nas redes sociais
- [ ] Adicione ao LinkedIn
- [ ] Atualize seu README do GitHub
- [ ] Configure Google Analytics (opcional)
- [ ] Adicione mais projetos conforme desenvolve
- [ ] Mantenha atualizado

## 🆘 Problemas Comuns

### Erro ao instalar gems
```bash
bundle update
bundle install
```

### Site não atualiza
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

### Imagens não aparecem
- Verifique se o caminho está correto
- Use caminhos relativos: `/assets/images/...`
- Limpe e rebuilde o site

### Menu mobile não funciona
- Limpe o cache do navegador
- Verifique se o JavaScript está carregando
- Teste em modo anônimo

## 📞 Dúvidas?

- Consulte o `README.md` para documentação completa
- Verifique a [documentação do Jekyll](https://jekyllrb.com)
- Procure no [Stack Overflow](https://stackoverflow.com)

---

**Boa sorte com seu novo site! 🎉**

