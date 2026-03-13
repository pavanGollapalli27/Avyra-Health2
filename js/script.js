// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close menu when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
    });
});

// Add animation class to menu when it appears
const style = document.createElement('style');
style.textContent = `
    .nav-menu.active {
        animation: slideDownMenu 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    @keyframes slideDownMenu {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullName = contactForm.querySelector('input[name="fullName"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        
        if (fullName && email && message) {
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all required fields');
        }
    });
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered animation delays
            const delay = index * 0.1;
            entry.target.style.animationDelay = delay + 's';
            entry.target.classList.add('animate-in-view');
        }
    });
}, observerOptions);

// Observe all animated elements
const elementsToAnimate = document.querySelectorAll(
    '.card, .wellness-card, .supplement-card, .product-item, .news-card, ' +
    '.category-card, .article-card, .circle-card, .designed-image img, ' +
    '.video-container, .products-hero-left, .products-info-left'
);

elementsToAnimate.forEach(el => {
    observer.observe(el);
});

// Add CSS animations for observed elements
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .animate-in-view {
        animation: fadeInUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    }
`;
document.head.appendChild(animationStyle);

// ===== PAGE LOAD ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Animate navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.animation = 'slideInDown 0.6s ease-out';
    }

    // Animate hero section
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease-out';
    }

    // Stagger animate nav links
    navLinks.forEach((link, index) => {
        link.style.animation = `fadeInDown 0.6s ease-out ${index * 0.1}s both`;
    });

    // Animate main sections
    const sections = document.querySelectorAll(
        '.video-section, .designed-section, .wellness-section, ' +
        '.vision-mission, .products-hero, .contact-section, ' +
        '.newsletter-section, .news-section'
    );
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.animation = `fadeInUp 0.7s ease-out ${0.2 + index * 0.1}s both`;
    });
});

// ===== PARALLAX SCROLL EFFECT =====
const parallaxElements = document.querySelectorAll('.hero-image, [data-parallax]');
window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        const elementOffset = element.offsetTop;
        const distance = scrollPosition - elementOffset;
        
        if (distance > -window.innerHeight && distance < window.innerHeight) {
            element.style.transform = `translateY(${distance * 0.5}px)`;
        }
    });
}, { passive: true });

// ===== SMOOTH SCROLL ENHANCEMENT =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== ADD HOVER RIPPLE EFFECT TO BUTTONS =====
const buttons = document.querySelectorAll('.btn, .btn-subscribe');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.5)';
        ripple.style.animation = `ripple-animation 0.6s ease-out`;
        ripple.style.pointerEvents = 'none';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-animation {
        from {
            width: 0;
            height: 0;
            opacity: 1;
        }
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===== ADD SCROLL ANIMATION TO LINKS =====
const allLinks = document.querySelectorAll('a');
allLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
});

// ===== FORM INPUT ANIMATIONS =====
const formInputs = document.querySelectorAll('input, textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.transition = 'all 0.3s ease';
        this.parentElement.style.transition = 'all 0.3s ease';
    });
});

// ===== COUNTER ANIMATION FOR STATS (if any) =====
const animateCounters = () => {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                counterObserver.unobserve(counter);
            }
        });

        counterObserver.observe(counter);
    });
};

document.addEventListener('DOMContentLoaded', animateCounters);