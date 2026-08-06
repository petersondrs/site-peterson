# 🚀 Deploy no GitHub Pages

Este documento contém instruções detalhadas para fazer deploy do site no GitHub Pages usando GitHub Actions.

## 📋 Pré-requisitos

- Conta no GitHub
- Repositório criado no GitHub
- Git instalado localmente

## 🔧 Configuração Inicial

### 1. Site de Usuário/Organização

Se você quer que seu site seja `https://seu-usuario.github.io`:

1. Crie um repositório com o nome `seu-usuario.github.io`
2. Mantenha o `_config.yml` como está:
   ```yaml
   baseurl: ""
   url: ""
   ```
3. Faça push para a branch `main`

### 2. Site de Projeto

Se você quer que seu site seja `https://seu-usuario.github.io/nome-do-projeto`:

1. Crie um repositório com qualquer nome (ex: `meu-portfolio`)
2. Ajuste o `_config.yml`:
   ```yaml
   baseurl: "/nome-do-projeto"  # Use o nome do repositório
   url: "https://seu-usuario.github.io"
   ```
3. Faça push para a branch `main` ou `dev`

## 🚀 Deploy Automático

O projeto já está configurado com GitHub Actions para fazer deploy automático.

### Passo a Passo:

1. **Clone o repositório** (se ainda não tiver):
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. **Faça push do código:**
   ```bash
   git add .
   git commit -m "Preparando para GitHub Pages"
   git push origin main
   ```

3. **Configure o GitHub Pages:**
   - Vá até seu repositório no GitHub
   - Clique em **Settings** > **Pages**
   - Em **Source**, selecione **GitHub Actions**
   - Salve as configurações

4. **Acompanhe o deploy:**
   - Vá em **Actions** no seu repositório
   - Você verá o workflow "Deploy Jekyll to GitHub Pages" executando
   - Aguarde alguns minutos até o deploy ser concluído

5. **Acesse seu site:**
   - Site de usuário: `https://seu-usuario.github.io`
   - Site de projeto: `https://seu-usuario.github.io/nome-do-projeto/`

## 🔄 Deploy Automático em Push

O workflow está configurado para fazer deploy automaticamente sempre que você fizer push nas branches:
- `main`
- `dev`

Para fazer deploy manual:
1. Vá em **Actions** no seu repositório
2. Selecione o workflow "Deploy Jekyll to GitHub Pages"
3. Clique em **Run workflow**

## 🌐 Domínio Personalizado (Opcional)

> **⚠️ IMPORTANTE:** O arquivo `CNAME` só é necessário se você tem um domínio personalizado. Se você não tem um domínio próprio, pode pular esta seção - o site funcionará normalmente com `seu-usuario.github.io`.

Para usar um domínio personalizado (ex: `meusite.com`):

1. **Crie o arquivo `CNAME`** na raiz do projeto:
   - Crie um arquivo chamado `CNAME` (sem extensão)
   - Dentro do arquivo, coloque apenas seu domínio em uma linha:
     ```
     meusite.com
     ```
     ou para www:
     ```
     www.meusite.com
     ```
   - **Importante:** Não use `http://` ou `https://`, apenas o domínio

2. **Faça commit e push do arquivo:**
   ```bash
   git add CNAME
   git commit -m "Adiciona domínio personalizado"
   git push origin main
   ```

3. **Verifique o domínio no GitHub (NOVO - OBRIGATÓRIO):**
   - Acesse: https://github.com/settings/pages_verified_domains
   - Clique em **Add a verified domain** ou acesse diretamente: https://github.com/settings/pages_verified_domains/petersonramos.com.br
   - O GitHub mostrará instruções para criar um registro TXT de verificação
   - Você verá algo como:
     - **Hostname:** `_github-pages-challenge-petersondrs.petersonramos.com.br`
     - **Valor TXT:** `66feceb2e3e22e0b0440fca12ea5ca` (o valor será único para você)
   
   **Configure o registro TXT no DNS:**
   - Acesse o painel de DNS do seu provedor de domínio
   - Crie um registro TXT:
     - Tipo: `TXT`
     - Nome/Hostname: `_github-pages-challenge-petersondrs` (ou o hostname completo mostrado pelo GitHub)
     - Valor: O código fornecido pelo GitHub (ex: `66feceb2e3e22e0b0440fca12ea5ca`)
   - Aguarde a propagação do DNS (pode levar alguns minutos a algumas horas)
   - Volte ao GitHub e clique em **Verify**
   - Após a verificação bem-sucedida, você poderá usar o domínio

4. **Configure os registros DNS para apontar o domínio:**
   - Após verificar o domínio, configure os registros DNS para apontar para o GitHub Pages:
     
     **Opção 1 - Registros A (recomendado):**
     - Tipo: `A`
     - Nome: `@` ou deixe em branco
     - Valor: `185.199.108.153`
     - Adicione mais 3 registros A com os valores:
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     
     **Opção 2 - Registro CNAME:**
     - Tipo: `CNAME`
     - Nome: `@` ou `www`
     - Valor: `petersondrs.github.io` (ou o nome do seu repositório)

5. **Configure no GitHub Pages:**
   - Vá em **Settings** > **Pages** no seu repositório
   - Em **Custom domain**, digite seu domínio: `petersonramos.com.br`
   - Marque **Enforce HTTPS** (pode levar alguns minutos para estar disponível)
   - Aguarde a propagação do DNS (pode levar até 48 horas, mas geralmente é mais rápido)

6. **Verifique se está funcionando:**
   - Após a propagação do DNS, acesse seu domínio
   - O GitHub mostrará um check verde em **Settings > Pages** quando estiver configurado corretamente
   - O domínio deve aparecer como "Verified" em https://github.com/settings/pages_verified_domains

## 🐛 Solução de Problemas

### Build falha

1. Verifique os logs em **Actions** > selecione o workflow falhou > veja os erros
2. Verifique se o Ruby e as gems estão corretas no `Gemfile`
3. Verifique se todos os arquivos necessários estão commitados

### Site não atualiza

1. Aguarde alguns minutos - o deploy pode demorar
2. Verifique se o deploy foi concluído com sucesso em **Actions**
3. Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
4. Verifique a branch configurada em **Settings** > **Pages**

### Erro 404

1. Verifique se o `baseurl` no `_config.yml` está correto
2. Verifique se o site está sendo publicado da branch correta
3. Verifique se os arquivos de layout e assets estão corretos

### Assets não carregam

1. Verifique se os caminhos usam `relative_url` nos layouts
2. Verifique se o `baseurl` está configurado corretamente
3. Verifique se os arquivos estão na pasta `assets/`

## 📝 Notas Importantes

- O workflow usa Ruby 3.3 e Jekyll 4.3.0
- O deploy é feito automaticamente em push para `main` ou `dev`
- O site é construído na pasta `_site/` e então publicado
- Arquivos na pasta `_site/` não devem ser commitados (já está no `.gitignore`)

## 🔗 Links Úteis

- [Documentação GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Actions para Jekyll](https://jekyllrb.com/docs/continuous-integration/github-actions/)
- [Documentação Jekyll](https://jekyllrb.com/docs/)

