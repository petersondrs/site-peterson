---
layout: portfolio-item
title: "Plataforma Digital de Educação"
subtitle: "Sistema completo de gestão de aprendizagem online"
description: "Liderei o design e gerenciamento de projeto de uma plataforma educacional completa, conectando mais de 50 mil alunos a cursos e conteúdos de qualidade durante o período de ensino remoto.\n\nTrabalhei na experiência do usuário, interface administrativa, portal do aluno e sistema de avaliações, garantindo uma experiência intuitiva e acessível para todos os perfis de usuários."
tech:
  - UX/UI Design
  - Design System
  - Project Management
  - User Research
image: /assets/images/portfolio/projeto-2.png
demo_url: https://apps.apple.com/exemplo
github_url: https://github.com/seu-usuario/app-mobile
stats:
  - value: "50 mil+"
    label: "alunos ativos"
  - value: "1.200"
    label: "cursos disponíveis"
  - value: "95%"
    label: "satisfação dos usuários"
  - value: "500 mil"
    label: "aulas assistidas"
---

## Visão Geral

Um aplicativo mobile multiplataforma desenvolvido para iOS e Android, focado em ajudar profissionais a gerenciarem suas tarefas e projetos de forma eficiente.

### Principais funcionalidades

- ✅ Gestão de tarefas com prioridades
- 📅 Calendário integrado
- 🏷️ Tags e categorias personalizáveis
- 🔔 Notificações push inteligentes
- 📊 Relatórios de produtividade
- 🌙 Modo escuro
- 📱 Sincronização entre dispositivos
- 🔒 Autenticação segura

## Arquitetura

O app foi construído seguindo princípios de Clean Architecture:

### Camadas

1. **Presentation Layer**: Componentes React Native
2. **Domain Layer**: Lógica de negócio e use cases
3. **Data Layer**: Integração com Firebase e armazenamento local

### Estado global

Utilizamos Redux Toolkit para gerenciamento de estado, com:
- Slices para cada domínio da aplicação
- Redux Persist para persistência offline
- RTK Query para cache de dados

## Performance

Implementamos diversas otimizações:

- **Lazy loading** de componentes
- **Virtualização** de listas longas
- **Memoização** de componentes pesados
- **Imagens otimizadas** com cache
- **Bundle splitting** para reduzir tamanho inicial

### Métricas

- Tempo de inicialização: < 2 segundos
- Tamanho do bundle: 8MB (iOS), 12MB (Android)
- Consumo de bateria: Otimizado para < 5% por hora de uso ativo

## Design

O design foi criado seguindo os princípios de Material Design e Human Interface Guidelines:

- Interface minimalista e intuitiva
- Animações fluidas (60 FPS)
- Temas claro e escuro
- Acessibilidade (WCAG 2.1 nível AA)

## Testes

Cobertura de testes de 85%:

- **Unit tests**: Jest
- **Integration tests**: React Testing Library
- **E2E tests**: Detox
- **Performance tests**: Lighthouse

## Lançamento

O app foi lançado em:

- ✅ App Store (iOS)
- ✅ Google Play Store (Android)

### Resultados pós-lançamento

- 10.000+ downloads nos primeiros 3 meses
- Avaliação média: 4.7/5 estrelas
- Taxa de retenção (30 dias): 65%
- NPS Score: 72

## Próximos passos

Funcionalidades planejadas para as próximas versões:

- [ ] Colaboração em equipe
- [ ] Integração com calendários externos (Google, Outlook)
- [ ] Widget para tela inicial
- [ ] Suporte a Apple Watch e Wear OS
- [ ] Modo offline completo

---

*Lançado em setembro de 2024*

