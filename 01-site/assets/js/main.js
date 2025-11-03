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
      
      // Calculate the center of the trigger relative to the parent
      const triggerCenter = triggerRect.left + (triggerRect.width / 2) - parentRect.left;
      
      // Set the left position
      contactPopover.style.left = triggerCenter + 'px';
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
  
  // Add scroll-based header shadow
  const header = document.querySelector('.site-header');
  
  if (header) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
      } else {
        header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
      }
      
      lastScroll = currentScroll;
    });
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
});

