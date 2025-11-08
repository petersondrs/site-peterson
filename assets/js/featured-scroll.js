/* assets/js/featured-scroll.js */
/* Efeito de Fade-in com Scroll para Featured Project */

document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.project-featured-section');
  const wrapper = document.querySelector('.content-sticky-wrapper');
  const textElement = document.querySelector('.content-fixed');

  if (!section || !wrapper || !textElement) return;

  function calculateTriggers() {
    const sectionTop = section.offsetTop;
    const viewportHeight = window.innerHeight;
    const wrapperHeight = wrapper.offsetHeight; // 100vh

    // Ajustado para fade-out mais perceptível
    const fadeInStart = sectionTop; // Início da section
    const fadeInEnd = sectionTop + (wrapperHeight * 0.1); // 30% = opacity 100%
    const fadeOutStart = sectionTop + (wrapperHeight * 0.6); // 60% = começa fade-out
    const fadeOutEnd = sectionTop + (wrapperHeight * 0.9); // 90% = opacity 0

    return { fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd };
  }

  function updateOpacity() {
    const scrollPosition = window.scrollY;
    const { fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd } = calculateTriggers();
    
    let opacity = 0;

    if (scrollPosition < fadeInStart) {
      // Antes de começar
      opacity = 0;
    } else if (scrollPosition >= fadeInStart && scrollPosition <= fadeInEnd) {
      // FASE 1: FADE IN (0% → 100%)
      const fadeInProgress = (scrollPosition - fadeInStart) / (fadeInEnd - fadeInStart);
      opacity = fadeInProgress;
    } else if (scrollPosition > fadeInEnd && scrollPosition < fadeOutStart) {
      // FASE 2: TOTALMENTE VISÍVEL (100%)
      opacity = 1;
    } else if (scrollPosition >= fadeOutStart && scrollPosition <= fadeOutEnd) {
      // FASE 3: FADE OUT (100% → 0%)
      const fadeOutProgress = (scrollPosition - fadeOutStart) / (fadeOutEnd - fadeOutStart);
      opacity = 1 - fadeOutProgress; // Inverte: 1 → 0
    } else {
      // Depois de terminar
      opacity = 0;
    }

    // Garante limites
    opacity = Math.min(1, Math.max(0, opacity));
    
    textElement.style.opacity = opacity;
    
    // Debug no console
    if (opacity > 0) {
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

