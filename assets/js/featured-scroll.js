/* assets/js/featured-scroll.js */
/* Efeito de Fade-in com Delay quando Section está Centralizada */

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.project-featured-section');
  
  if (!sections.length) return;

  sections.forEach(section => {
    const textElement = section.querySelector('.content-fixed');
    if (!textElement) return;

    let fadeTimeout = null;
    let isVisible = false;

    // Intersection Observer para detectar quando a section está visível/centralizada
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          console.log('Section visible:', entry.isIntersecting, '| Ratio:', entry.intersectionRatio.toFixed(2));
          
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            // Section está visível (50% ou mais na viewport)
            
            if (!isVisible) {
              console.log('✅ Section centralizada! Iniciando fade-in após 0.5s...');
              
              // Limpa timeout anterior se existir
              if (fadeTimeout) clearTimeout(fadeTimeout);
              
              // Aguarda 0.5s e faz fade in
              fadeTimeout = setTimeout(() => {
                textElement.style.transition = 'opacity 0.8s ease-in-out';
                textElement.style.opacity = '1';
                isVisible = true;
                console.log('✨ Fade in completo! Opacity: 100%');
              }, 100); // 0.5 segundos de delay
            }
          } else {
            // Section saiu da viewport
            if (isVisible) {
              console.log('❌ Section saiu. Fazendo fade out...');
              
              // Limpa timeout se ainda não executou
              if (fadeTimeout) clearTimeout(fadeTimeout);
              
              // Fade out rápido
              textElement.style.transition = 'opacity 0s ease-out';
              textElement.style.opacity = '0';
              isVisible = false;
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1], // Detecta vários pontos de visibilidade
        rootMargin: '0px' // Considera exatamente a viewport
      }
    );

    // Observa a section
    observer.observe(section);
  });
});

