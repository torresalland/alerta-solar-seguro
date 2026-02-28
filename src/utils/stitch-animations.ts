/**
 * Google Stitch Principles:
 * Microinterações não invasivas. Este script procura elementos estruturais
 * (como seções, titles, cards) e injeta classes dinamicamente para Scroll Reveal
 * sem modificar a árvore React do usuário.
 */

export const initStitchAnimations = () => {
    // Verificar prefers-reduced-motion para garantir acessibilidade
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // 1. Scroll Reveal (Intersection Observer)
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1,
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('stitch-visible');
                observer.unobserve(entry.target); // Anima uma única vez para não distrair
            }
        });
    }, revealOptions);

    // Seleção Inteligente de Alvos (Non-invasive targeting)
    // Alvos principais para receber fade-up suave
    const targets = document.querySelectorAll(`
    main section h1, 
    main section h2, 
    main section h3, 
    main section p:not(.faq-content p), 
    main section img, 
    main section .shadow-premium,
    main section .shadow-lg,
    main section .faq-item,
    footer h2,
    footer a.cta-gradient
  `);

    targets.forEach((el, index) => {
        // Adiciona classe base de hide
        el.classList.add('stitch-reveal');
        // Adiciona delay variável sutil em cascata para elementos muito próximos
        (el as HTMLElement).style.transitionDelay = `${(index % 3) * 100}ms`;
        revealObserver.observe(el);
    });

    // 2. Navbar Scroll Effect (Feedback Visual)
    const header = document.querySelector('header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                header.classList.add('stitch-scrolled');
            } else {
                header.classList.remove('stitch-scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Inicializar chamando uma vez
        handleScroll();
    }
};
