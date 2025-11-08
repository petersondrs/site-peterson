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

    // Com Scroll Snapping: quando a section está centralizada,
    // o scroll está em: sectionTop (mas a section está no meio da tela)
    
    // FADE IN: Aparece conforme rola do hero para a section
    const fadeInStart = sectionTop - (viewportHeight * 0.3); // 30% antes
    const fadeInEnd = sectionTop + (viewportHeight * 0.01); // 10% dentro = opacity 100%
    
    // FADE OUT: Some quando passa do centro
    const fadeOutStart = sectionTop + (viewportHeight * 0.6); // 60% dentro
    const fadeOutEnd = sectionTop + viewportHeight; // Fim da section = opacity 0%

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
    
    // Debug melhorado no console
    const { fadeInStart: fis, fadeInEnd: fie, fadeOutStart: fos, fadeOutEnd: foe } = calculateTriggers();
    console.log({
      scroll: Math.round(scrollPosition),
      sectionTop: Math.round(section.offsetTop),
      fadeInStart: Math.round(fis),
      fadeInEnd: Math.round(fie),
      fadeOutStart: Math.round(fos),
      fadeOutEnd: Math.round(foe),
      opacity: (opacity * 100).toFixed(1) + '%',
      phase: opacity === 0 ? 'invisível' : opacity < 1 ? 'transição' : 'visível'
    });
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

