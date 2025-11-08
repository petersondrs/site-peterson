/* assets/js/featured-scroll.js */
/* Efeito de Fade-in com Scroll para Featured Project */

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.project-featured-section');
  const wrapper = document.querySelector('.content-sticky-wrapper');
  const textElement = document.querySelector('.content-fixed');

  if (!section || !wrapper || !textElement) return;

  function calculateTriggers() {
    // Calcula quando a seção principal entra na viewport
    const sectionTop = section.offsetTop;
    const viewportHeight = window.innerHeight;
    const wrapperHeight = wrapper.offsetHeight; // 120vh

    // Opacidade começa quando a seção está entrando na tela (meio viewport antes)
    const opacityStartThreshold = sectionTop - (viewportHeight * 0.5);

    // Opacidade atinge 100% após rolar 20% da viewport dentro da section
    // Ajustado para 120vh: opacidade completa rapidamente
    const opacityEndThreshold = sectionTop + (viewportHeight * 0.2);

    return { opacityStartThreshold, opacityEndThreshold };
  }

  function updateOpacity() {
    const scrollPosition = window.scrollY;
    const { opacityStartThreshold, opacityEndThreshold } = calculateTriggers();

    // Calcula a posição do scroll relativa à nossa janela de ativação
    const scrollProgress = (scrollPosition - opacityStartThreshold) / (opacityEndThreshold - opacityStartThreshold);

    // Mapeia o progresso para a opacidade (0 a 1)
    let opacity = Math.min(1, Math.max(0, scrollProgress));
    
    textElement.style.opacity = opacity;
    
    // Debug no console (remova após testar)
    if (opacity > 0 && opacity < 1) {
      console.log('Opacity:', (opacity * 100).toFixed(1) + '%', '| Scroll:', Math.round(scrollPosition));
    }
  }

  // Otimização: Adiciona um listener de scroll throttled/debounced
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateOpacity();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Recalcular em resize
  window.addEventListener('resize', updateOpacity);

  // Chama uma vez para definir o estado inicial correto
  updateOpacity();
});

