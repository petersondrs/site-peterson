// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = menuToggle.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar')) {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
      }
    });
  }
  
  // Dropdown menu toggle
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.getElementById('contatoDropdown');
  
  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('active');
      
      // Close other dropdowns if any
      document.querySelectorAll('.dropdown').forEach(function(item) {
        if (item !== dropdown) {
          item.classList.remove('active');
        }
      });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(function(item) {
          item.classList.remove('active');
        });
      }
    });
    
    // Prevent dropdown from closing when clicking inside
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Contact Popover
  const contactTrigger = document.getElementById('contato-trigger');
  const contactPopover = document.getElementById('contact-popover');
  
  if (contactTrigger && contactPopover) {
    console.log('Contact popover initialized');
    
    // Function to position popover under the Contato link
    function positionPopover() {
      const triggerRect = contactTrigger.getBoundingClientRect();
      const parentRect = contactTrigger.closest('.hero-content-center').getBoundingClientRect();
      const popoverArrow = contactPopover.querySelector('.popover-arrow');
      
      // Calculate the center of the trigger relative to the parent
      const triggerCenter = triggerRect.left + (triggerRect.width / 2) - parentRect.left;
      
      // Check if mobile
      const isMobile = window.innerWidth <= 768;
      
      if (!isMobile) {
        // Desktop: posiciona normalmente
        contactPopover.style.left = triggerCenter + 'px';
      } else {
        // Mobile: centraliza mais e ajusta a seta
        contactPopover.style.left = '50%';
        contactPopover.style.transform = 'translateX(-50%)';
        
        // Posiciona a seta abaixo do botão Contato
        if (popoverArrow) {
          const arrowPosition = triggerCenter;
          popoverArrow.style.left = arrowPosition + 'px';
        }
      }
    }
    
    // Position on load
    positionPopover();
    
    // Reposition on window resize
    window.addEventListener('resize', positionPopover);
    
    contactTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      positionPopover(); // Reposition when opening
      contactPopover.classList.toggle('show');
      console.log('Popover toggled. Show class:', contactPopover.classList.contains('show'));
    });
    
    // Close popover when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('#contact-popover') && !event.target.closest('#contato-trigger')) {
        contactPopover.classList.remove('show');
      }
    });
    
    // Prevent popover from closing when clicking inside
    contactPopover.addEventListener('click', function(e) {
      e.stopPropagation();
    });
    
    // Close popover when pressing Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && contactPopover.classList.contains('show')) {
        contactPopover.classList.remove('show');
      }
    });
  }
  
  // Smooth scrolling for anchor links (excluding contact trigger)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && this.id !== 'contato-trigger') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // ========================================
  // Navbar Scroll Effect with Throttle
  // ========================================
  const header = document.querySelector('.site-header');
  
  if (header) {
    let isThrottled = false;
    const throttleDelay = 100; // 100ms throttle
    
    function handleScroll() {
      if (isThrottled) return;
      
      isThrottled = true;
      
      setTimeout(() => {
        const scrollY = window.scrollY;
        
        // Adiciona ou remove a classe 'scrolled' baseado na posição do scroll
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        isThrottled = false;
      }, throttleDelay);
    }
    
    // Adiciona o listener de scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Executa uma vez no carregamento para verificar a posição inicial
    handleScroll();
  }
  
  // ========================================
  // Ripple Effect on Click
  // ========================================
  
  // Ripple effect on click for interactive elements
  function createRipple(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    this.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  // Add ripple to interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btn, .btn-default, .project-card');
  interactiveElements.forEach(element => {
    // Ensure element has position relative
    const position = window.getComputedStyle(element).position;
    if (position === 'static') {
      element.style.position = 'relative';
    }
    element.style.overflow = 'hidden';
    
    element.addEventListener('click', createRipple);
  });

  // ========================================
  // Auto-scroll Carousel (no controls)
  // ========================================
  const carousels = document.querySelectorAll('.carousel-viewport[data-autoplay="true"]');
  carousels.forEach(view => {
    const track = view.querySelector('.carousel-track');
    if (!track) return;
    
    const direction = (view.getAttribute('data-direction') || 'rtl').toLowerCase(); // rtl or ltr
    const speedPxPerSec = 300; // velocidade de transição entre slides
    const slideDelay = 5000; // 5 segundos de pausa em cada slide
    let currentSlideIndex = 0;
    let position = 0;
    let targetPosition = 0;
    let isMoving = false;
    let isPaused = false;
    let pauseTimeout = null;
    let rafId;

    // Calcula a largura de um slide (incluindo gap)
    function getSlideWidth() {
      const firstSlide = track.querySelector('.carousel-slide');
      if (!firstSlide) return 0;
      const gap = parseInt(getComputedStyle(track).gap) || 48; // 3rem = 48px
      return firstSlide.offsetWidth + gap;
    }

    // Calcula a posição de um slide específico para centralizá-lo no viewport
    function getSlidePosition(index) {
      const slides = track.querySelectorAll('.carousel-slide');
      if (index >= slides.length || slides.length === 0) return 0;
      
      const gap = parseInt(getComputedStyle(track).gap) || 48;
      
      // Calcula a posição acumulada do slide (quanto o track precisa se deslocar)
      let pos = 0;
      
      // Para RTL (direita para esquerda), calculamos quanto devemos mover para a esquerda
      // Cada slide após o primeiro requer movimento negativo (para a esquerda)
      for (let i = 0; i < index; i++) {
        if (slides[i]) {
          pos -= (slides[i].offsetWidth + gap); // Negativo = move para esquerda
        }
      }
      
      return pos;
    }

    // Calcula o número total de slides
    function getTotalSlides() {
      return track.querySelectorAll('.carousel-slide').length;
    }

    // Move para o próximo slide
    function moveToNextSlide() {
      const totalSlides = getTotalSlides();
      if (totalSlides === 0) return;

      // Avança para o próximo slide
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      targetPosition = getSlidePosition(currentSlideIndex);
      isMoving = true;

      // Limpa timeout anterior se existir
      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
        pauseTimeout = null;
      }
    }

    function step(timestamp) {
      // Sempre continua o loop, mesmo quando pausado ou parado
      rafId = requestAnimationFrame(step);

      if (isPaused) {
        return;
      }

      if (isMoving) {
        // Está se movendo para o próximo slide
        const increment = (speedPxPerSec / 60); // px por frame (~60fps)
        const diff = targetPosition - position;
        const absDiff = Math.abs(diff);

        if (absDiff < increment) {
          // Chegou na posição alvo
          position = targetPosition;
          isMoving = false;
          
          // Pausa por 5 segundos antes de mover para o próximo
          pauseTimeout = setTimeout(() => {
            moveToNextSlide();
          }, slideDelay);
        } else {
          // Continua se movendo em direção ao alvo
          const moveIncrement = increment * Math.sign(diff);
          position += moveIncrement;
        }
      }

      // Sempre aplica o transform, mesmo quando parado (mantém posição)
      track.style.transform = `translateX(${position}px)`;
    }

    // Inicia na primeira posição (slide 0)
    position = 0;
    targetPosition = 0;
    track.style.transform = `translateX(0px)`;
    
    // Debug: Mostra informações dos slides
    console.log('Total de slides:', getTotalSlides());
    const slides = track.querySelectorAll('.carousel-slide');
    slides.forEach((slide, i) => {
      console.log(`Slide ${i}: largura = ${slide.offsetWidth}px, posição = ${getSlidePosition(i)}px`);
    });
    
    // Inicia o loop de animação imediatamente
    rafId = requestAnimationFrame(step);
    
    // Pausa inicial de 5 segundos antes de mover para o próximo slide
    pauseTimeout = setTimeout(() => {
      moveToNextSlide();
    }, slideDelay);

    // Pausa ao passar o mouse (desktop)
    view.addEventListener('mouseenter', () => {
      isPaused = true;
      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
        pauseTimeout = null;
      }
    });
    
    view.addEventListener('mouseleave', () => {
      isPaused = false;
      // Retoma a partir do slide atual
      if (!isMoving && !pauseTimeout) {
        pauseTimeout = setTimeout(() => {
          moveToNextSlide();
        }, slideDelay);
      }
      // Garante que o loop está rodando
      if (!rafId) {
        rafId = requestAnimationFrame(step);
      }
    });

    // Reajuste ao redimensionar
    window.addEventListener('resize', () => {
      // Recalcula a posição atual baseada no índice
      position = getSlidePosition(currentSlideIndex);
      targetPosition = position;
      track.style.transform = `translateX(${position}px)`;
    });
  });
});

