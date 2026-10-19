/* ============================================
   Clínica Salud+ - Main JS
   ============================================ */

(function () {
    'use strict';

    // ============================================
    // 1. Navbar scroll effect
    // ============================================
    const navbar = document.querySelector('.navbar');
    const hasTransparentHero = navbar && navbar.classList.contains('hero-transparent');

    function handleNavbarScroll() {
        if (!navbar) return;
        if (window.scrollY > 80) {
            navbar.classList.add('navbar-scrolled');
            if (hasTransparentHero) navbar.classList.remove('hero-transparent');
        } else {
            navbar.classList.remove('navbar-scrolled');
            if (hasTransparentHero) navbar.classList.add('hero-transparent');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // ============================================
    // 2. Set active nav link based on current page
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        if (
            (currentPage === '' || currentPage === 'index.html') && href === 'index.html'
        ) {
            link.classList.add('active');
        } else if (href !== 'index.html' && currentPage.includes(href.replace('.html', ''))) {
            link.classList.add('active');
        }
    });

    // ============================================
    // 3. Scroll Reveal with IntersectionObserver
    // ============================================
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('reveal-active'));
    }

    // ============================================
    // 4. Animated counters
    // ============================================
    const counters = document.querySelectorAll('[data-counter]');

    function animateCounter(el) {
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const duration = 1800;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = Math.floor(eased * target);
            el.textContent = value.toLocaleString('es-CL');

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target.toLocaleString('es-CL');
            }
        }

        requestAnimationFrame(update);
    }

    if ('IntersectionObserver' in window && counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });

        counters.forEach(c => counterObserver.observe(c));
    }

    // ============================================
    // 5. Contact form validation
    // ============================================
    const contactForm = document.querySelector('#contactForm');

    if (contactForm) {
        const messageBox = contactForm.querySelector('.form-message');

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (!contactForm.checkValidity()) {
                contactForm.classList.add('was-validated');
                if (messageBox) {
                    messageBox.className = 'form-message error';
                    messageBox.textContent = 'Por favor, completa todos los campos requeridos correctamente.';
                }
                return;
            }

            // Mock submission success
            contactForm.classList.remove('was-validated');
            if (messageBox) {
                messageBox.className = 'form-message success';
                messageBox.innerHTML = '<i class="bi bi-check-circle-fill me-2"></i>¡Gracias! Hemos recibido tu solicitud. Te contactaremos en menos de 24 horas.';
            }
            contactForm.reset();

            // Auto-hide success message
            setTimeout(() => {
                if (messageBox) messageBox.className = 'form-message';
            }, 6000);
        });

        // Real-time validation feedback
        contactForm.querySelectorAll('.form-control, .form-select').forEach(field => {
            field.addEventListener('input', function () {
                if (contactForm.classList.contains('was-validated')) {
                    if (field.checkValidity()) {
                        field.classList.remove('is-invalid');
                        field.classList.add('is-valid');
                    } else {
                        field.classList.remove('is-valid');
                        field.classList.add('is-invalid');
                    }
                }
            });
        });
    }

    // ============================================
    // 6. Back to top button
    // ============================================
    const backToTopBtn = document.querySelector('.back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // 7. Smooth scroll for anchor links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = this.getAttribute('href');
            if (target === '#' || target.length < 2) return;
            const el = document.querySelector(target);
            if (el) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPos = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });

    // ============================================
    // 8. Auto-update copyright year
    // ============================================
    const yearEl = document.querySelector('[data-current-year]');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ============================================
    // 9. Close mobile menu on link click
    // ============================================
    const navCollapse = document.querySelector('.navbar-collapse');
    if (navCollapse) {
        navCollapse.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
                    const toggler = document.querySelector('.navbar-toggler');
                    if (toggler) toggler.click();
                }
            });
        });
    }

})();
