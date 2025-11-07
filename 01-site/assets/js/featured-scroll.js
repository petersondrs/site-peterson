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

    // Opacidade começa a aumentar quando o topo da seção entra na viewport
    const opacityStartThreshold = sectionTop;

    // Opacidade atinge 100% quando percorreu metade do wrapper (60vh de scroll)
    // Isso garante que a opacidade complete antes do final da section
    const opacityEndThreshold = sectionTop + (wrapperHeight * 0.5); // 50% de 120vh = 60vh

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

