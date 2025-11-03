---
layout: home
title: Home
---

<section class="hero-fullscreen" aria-label="Seção de apresentação">
  <div class="hero-content-center">
    <h1 class="hero-title">
      <span class="hero-profession" aria-label="Profissão">Senior Product Designer & Project Manager</span>
      <span class="hero-name" aria-label="Nome">Peterson Ramos</span>
    </h1>
    <nav class="hero-nav" aria-label="Navegação principal">
      <a href="#trabalhos">Trabalhos</a>
      <span class="nav-separator">|</span>
      <a href="#" id="contato-trigger">Contato</a>
      <span class="nav-separator">|</span>
      <a href="/sobre/">Sobre</a>
    </nav>

    <!-- Popover de Contato -->
    <div id="contact-popover" class="contact-popover">
      <div class="popover-arrow"></div>
      <div class="contact-buttons">
        <a href="mailto:{{ site.email }}" class="btn-default">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M310.7 64c-4.3 9.8-6.7 20.6-6.7 32l-69.5 0c32.6 26.4 53.5 66.8 53.5 112l0 208c0 11.7-3.1 22.6-8.6 32L512 448c17.7 0 32-14.3 32-32l0-192c0-22.5-5.8-43.7-16-62.1 0-.6 0-1.3 0-1.9l0-50.3c29.6 29 48 69.5 48 114.3l0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 208C0 128.5 64.5 64 144 64l166.7 0zM144 96C82.1 96 32 146.1 32 208l0 208c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-208c0-61.9-50.1-112-112-112zM80 240c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm272 0l0-144c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16zm96-80l0-64-64 0 0 64 64 0z"/></svg>
          <span>E-Mail</span>
        </a>
        <a href="https://wa.me/{{ site.whatsapp_number }}" target="_blank" class="btn-default">
          <i class="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  </div>
</section>

<section id="trabalhos" class="project-featured-section">
  <div class="container">
    <article class="project-featured">
      <!-- Coluna Esquerda: Imagem -->
      <div class="project-featured-image-column">
        <img src="/assets/images/portfolio/firjan-sesi-cidadania-contra-fome/splash-screen.jpg" alt="Firjan SESI Cidadania Contra a Fome">
      </div>

      <!-- Coluna Direita: Conteúdo -->
      <div class="project-featured-content-column">
        <header>
          <h2>Firjan SESI Cidadania Contra a Fome</h2>
          <p class="project-subtitle">Plataforma de mobilização social durante a pandemia</p>
        </header>

        <div class="project-description">
          <p>Este é, sem dúvida, o projeto do qual mais me orgulho. Em 4 meses, no auge da pandemia, transformamos uma ideia em uma plataforma digital que ajudou 36 mil pessoas e arrecadou R$ 750 mil para famílias em situação de vulnerabilidade.</p>
        </div>

        <!-- Seção de Impacto -->
        <div class="project-impact">
          <h3>IMPACTO</h3>
          <div class="impact-grid">
            <div class="impact-item">
              <h4>36 mil</h4>
              <p>PESSOAS AJUDADAS</p>
            </div>
            <div class="impact-item">
              <h4>R$ 750 mil</h4>
              <p>ARRECADADOS</p>
            </div>
            <div class="impact-item">
              <h4>9 mil</h4>
              <p>CESTAS BÁSICAS</p>
            </div>
            <div class="impact-item">
              <h4>51.900</h4>
              <p>ITENS DISTRIBUÍDOS</p>
            </div>
          </div>
        </div>

        <div class="project-cta">
          <h6>Veja o case completo sobre como gestão de projeto e design geraram impacto social.</h6>
          <a href="/portfolio/sesi-cidadania-contra-fome" class="btn-default">
            <span>Visualizar projeto</span>
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 64c-140.8 0-229.3 128-256 192 26.7 64 115.2 192 256 192 140.8 0 229.3-128 256-192-26.7-64-115.2-192-256-192zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 352c53 0 96-43 96-96 0-43.3-28.7-79.9-68.1-91.9 2.7 8.8 4.1 18.2 4.1 27.9 0 53-43 96-96 96-9.7 0-19.1-1.4-27.9-4.1 11.9 39.4 48.6 68.1 91.9 68.1zM160.2 263.8c-.2-2.6-.2-5.2-.2-7.8 0-12.2 1.7-23.9 4.9-35 .3-.9 .5-1.8 .8-2.7 12.4-40.4 44.3-72.2 84.7-84.7 11.9-3.7 24.6-5.6 37.7-5.6 2.5 0 5 .1 7.4 .2l.4 0c67.1 4 120.2 59.7 120.2 127.8 0 70.7-57.3 128-128 128-68.1 0-123.8-53.2-127.8-120.2zm32.1-16.1c9.3 5.3 20.1 8.4 31.6 8.4 35.3 0 64-28.7 64-64 0-11.5-3-22.3-8.4-31.6-46.4 4-83.3 40.9-87.3 87.3z"/></svg>
          </a>
        </div>
      </div>
    </article>
  </div>
</section>
