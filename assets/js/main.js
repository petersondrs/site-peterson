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
    const slideDelay = 5000; // 5 segundos de pausa em cada slide
    const anticipationAmount = 50; // pixels para mover na direção oposta (anticipation)
    const anticipationDuration = 200; // duração da antecipação em ms
    const transitionDuration = 600; // duração da transição principal em ms
    let currentSlideIndex = 0;
    let position = 0;
    let targetPosition = 0;
    let startPosition = 0;
    let isMoving = false;
    let isPaused = false;
    let pauseTimeout = null;
    let rafId;
    let animationStartTime = 0;
    let animationPhase = 'idle'; // 'idle', 'anticipation', 'transition'

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

    // Função de easing para movimento suave com aceleração
    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }
    
    // Função de easing para antecipação
    function easeInQuad(t) {
      return t * t;
    }

    // Move para o próximo slide
    function moveToNextSlide() {
      const totalSlides = getTotalSlides();
      if (totalSlides === 0) return;

      // Avança para o próximo slide
      currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
      targetPosition = getSlidePosition(currentSlideIndex);
      startPosition = position;
      isMoving = true;
      animationPhase = 'anticipation';
      animationStartTime = performance.now();

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
        const elapsed = timestamp - animationStartTime;
        
        if (animationPhase === 'anticipation') {
          // Fase 1: Antecipação - move levemente na direção oposta
          const progress = Math.min(elapsed / anticipationDuration, 1);
          const easedProgress = easeInQuad(progress);
          
          // Move na direção oposta (para a direita se está indo para esquerda)
          position = startPosition + (anticipationAmount * easedProgress);
          
          if (progress >= 1) {
            // Terminou a antecipação, começa a transição principal
            animationPhase = 'transition';
            animationStartTime = timestamp;
            startPosition = position; // Atualiza a posição inicial para a transição
          }
        } else if (animationPhase === 'transition') {
          // Fase 2: Transição principal - move rapidamente para o destino
          const progress = Math.min(elapsed / transitionDuration, 1);
          const easedProgress = easeOutQuart(progress);
          
          // Move do ponto de antecipação até o destino
          position = startPosition + (targetPosition - startPosition) * easedProgress;
          
          if (progress >= 1) {
            // Chegou no destino
            position = targetPosition;
            isMoving = false;
            animationPhase = 'idle';
            
            // Pausa por 5 segundos antes de mover para o próximo
            pauseTimeout = setTimeout(() => {
              moveToNextSlide();
            }, slideDelay);
          }
        }
      }

      // Sempre aplica o transform, mesmo quando parado (mantém posição)
      track.style.transform = `translateX(${position}px)`;
    }

    // Inicia na primeira posição (slide 0)
    position = 0;
    targetPosition = 0;
    track.style.transform = `translateX(0px)`;
    
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

  // ========================================
  // Gallery Modal
  // ========================================
  const galleryModal = document.getElementById('gallery-modal');
  const galleryModalImage = document.getElementById('gallery-modal-image');
  const galleryModalCounter = document.getElementById('gallery-modal-counter');
  const galleryModalClose = galleryModal?.querySelector('.gallery-modal-close');
  const galleryModalPrev = galleryModal?.querySelector('.gallery-modal-prev');
  const galleryModalNext = galleryModal?.querySelector('.gallery-modal-next');
  const galleryModalOverlay = galleryModal?.querySelector('.gallery-modal-overlay');

  if (galleryModal) {
    // Coleta todas as imagens da galeria
    const galleryImages = Array.from(document.querySelectorAll('.gallery-image[data-gallery="true"]'));
    let currentImageIndex = 0;

    // Função para atualizar a imagem no modal
    function updateModalImage(index) {
      if (galleryImages.length === 0) return;
      
      currentImageIndex = index;
      const image = galleryImages[currentImageIndex];
      const src = image.getAttribute('src');
      const alt = image.getAttribute('alt') || '';
      
      // Atualiza a imagem
      galleryModalImage.src = src;
      galleryModalImage.alt = alt;
      
      // Atualiza o contador
      if (galleryModalCounter) {
        galleryModalCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
      }
      
      // Atualiza estado dos botões
      if (galleryModalPrev) {
        galleryModalPrev.disabled = currentImageIndex === 0;
      }
      if (galleryModalNext) {
        galleryModalNext.disabled = currentImageIndex === galleryImages.length - 1;
      }
    }

    // Função para abrir o modal
    function openModal(index) {
      if (galleryImages.length === 0) return;
      
      updateModalImage(index);
      galleryModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // Previne scroll do body
      
      // Foca no botão de fechar para acessibilidade
      if (galleryModalClose) {
        galleryModalClose.focus();
      }
    }

    // Função para fechar o modal
    function closeModal() {
      galleryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // Restaura scroll do body
    }

    // Função para ir para próxima imagem
    function nextImage() {
      if (currentImageIndex < galleryImages.length - 1) {
        updateModalImage(currentImageIndex + 1);
      }
    }

    // Função para ir para imagem anterior
    function prevImage() {
      if (currentImageIndex > 0) {
        updateModalImage(currentImageIndex - 1);
      }
    }

    // Adiciona event listeners nas imagens
    galleryImages.forEach((image, index) => {
      image.addEventListener('click', () => {
        openModal(index);
      });
    });

    // Event listeners do modal
    if (galleryModalClose) {
      galleryModalClose.addEventListener('click', closeModal);
    }

    if (galleryModalOverlay) {
      galleryModalOverlay.addEventListener('click', closeModal);
    }

    if (galleryModalPrev) {
      galleryModalPrev.addEventListener('click', prevImage);
    }

    if (galleryModalNext) {
      galleryModalNext.addEventListener('click', nextImage);
    }

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
      if (galleryModal.getAttribute('aria-hidden') === 'false') {
        switch (e.key) {
          case 'Escape':
            closeModal();
            break;
          case 'ArrowLeft':
            e.preventDefault();
            prevImage();
            break;
          case 'ArrowRight':
            e.preventDefault();
            nextImage();
            break;
        }
      }
    });

    // Previne que cliques na imagem fechem o modal
    if (galleryModalImage) {
      galleryModalImage.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    }
  }
});

