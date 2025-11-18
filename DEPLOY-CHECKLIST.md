# ✅ Checklist de Deploy - GitHub Pages

## Status Atual
- ✅ Workflow do GitHub Actions criado
- ✅ Arquivo CNAME criado (petersonramos.com.br)
- ✅ _config.yml configurado com domínio personalizado
- ✅ Branch main configurada no GitHub Pages Settings

## Próximos Passos

### 1. Fazer Merge/Push para a branch main

Você está na branch `dev`. Você precisa fazer push dos arquivos para a branch `main`:

**Opção A - Se você quer fazer merge da dev para main:**
```bash
# Certifique-se de que está tudo commitado na dev
git status

# Mude para a branch main
git checkout main

# Faça merge da dev na main
git merge dev

# Faça push para o GitHub
git push origin main
```

**Opção B - Se você quer fazer push direto da dev:**
```bash
# Certifique-se de que está tudo commitado
git status

# Faça push da branch dev
git push origin dev
```

**Opção C - Se você quer fazer commit dos novos arquivos na main:**
```bash
# Mude para a branch main
git checkout main

# Adicione os arquivos novos
git add .github/workflows/jekyll-gh-pages.yml
git add CNAME
git add _config.yml
git add .gitignore
git add README.md
git add GITHUB-PAGES.md

# Faça commit
git commit -m "Prepara projeto para GitHub Pages com domínio personalizado"

# Faça push
git push origin main
```

### 2. Verificar o Workflow no GitHub

1. Vá até seu repositório no GitHub
2. Clique na aba **Actions**
3. Você deve ver o workflow "Deploy Jekyll to GitHub Pages" executando
4. Aguarde alguns minutos até o build e deploy serem concluídos
5. Verifique se há algum erro (se houver, clique no workflow para ver os detalhes)

### 3. Verificar o Deploy

Após o workflow concluir com sucesso:

1. Vá em **Settings** > **Pages** no seu repositório
2. Verifique se está mostrando:
   - **Source**: GitHub Actions
   - **Status**: Deploy concluído
   - **Custom domain**: petersonramos.com.br (se já configurou)

### 4. Configurar o DNS (Se ainda não fez)

No painel de DNS do seu provedor de domínio (`petersonramos.com.br`):

**Adicione 4 registros A:**
- Tipo: `A`
- Nome: `@` (ou raiz)
- Valores:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**OU um registro CNAME:**
- Tipo: `CNAME`
- Nome: `@`
- Valor: `petersondrs.github.io` (ou o nome do seu repositório)

### 5. Configurar Domínio no GitHub

1. Vá em **Settings** > **Pages**
2. Em **Custom domain**, digite: `petersonramos.com.br`
3. Marque **Enforce HTTPS**
4. Aguarde alguns minutos para o GitHub verificar o DNS

### 6. Testar o Site

- **Temporariamente** (enquanto DNS propaga): `https://petersondrs.github.io/nome-do-repositorio/`
- **Após DNS propagar**: `https://petersonramos.com.br`

### 7. Verificar Status Final

O GitHub mostrará um check verde em **Settings > Pages** quando:
- ✅ O DNS estiver configurado corretamente
- ✅ O domínio estiver apontando para o GitHub Pages
- ✅ O certificado SSL estiver ativo

## 🐛 Problemas Comuns

### Workflow não executa
- Verifique se você fez push para a branch `main` ou `dev`
- Verifique se o arquivo `.github/workflows/jekyll-gh-pages.yml` está na branch

### Build falha
- Verifique os logs em **Actions** > selecione o workflow > veja os erros
- Verifique se o `Gemfile` está correto
- Verifique se todos os arquivos necessários estão commitados

### Domínio não funciona
- Aguarde a propagação do DNS (pode levar até 48h)
- Verifique se os registros DNS estão corretos
- Verifique se o arquivo `CNAME` está na branch `main`
- Verifique se o domínio está configurado em **Settings > Pages**

### Site não atualiza
- Aguarde alguns minutos após o push
- Limpe o cache do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
- Verifique se o deploy foi concluído em **Actions**

## ✅ Checklist Final

- [ ] Arquivos commitados e push feito para `main`
- [ ] Workflow executado com sucesso em **Actions**
- [ ] Deploy concluído em **Settings > Pages**
- [ ] DNS configurado no provedor de domínio
- [ ] Domínio configurado em **Settings > Pages**
- [ ] Site acessível via domínio personalizado
- [ ] HTTPS funcionando (certificado SSL ativo)

---

**Pronto!** Seu site estará no ar em alguns minutos após completar estes passos! 🚀

