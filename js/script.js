// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// CTA Button Actions
const ctaButtons = document.querySelectorAll('.cta-button.primary');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('Get Started') || this.textContent.includes('Start Free Trial')) {
            handleGetStarted();
        } else if (this.textContent.includes('Watch Demo')) {
            handleWatchDemo();
        }
    });
});

function handleGetStarted() {
    alert('Welcome to ARchitect! Redirecting to signup...');
    // In production, redirect to signup page
    // window.location.href = '/signup';
}

function handleWatchDemo() {
    alert('Opening demo video...');
    // In production, open a modal with video
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards and other elements
document.querySelectorAll('.feature-card, .process-step, .use-case-card, .pricing-card').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add transition to navbar
navbar.style.transition = 'transform 0.3s ease-out';

// Pricing card selection
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    const button = card.querySelector('.cta-button');
    if (button) {
        button.addEventListener('click', () => {
            pricingCards.forEach(c => c.style.border = 'none');
            card.style.border = '2px solid var(--primary-color)';
        });
    }
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer p:first-child');
if (footerText) {
    footerText.textContent = `© ${currentYear} ARchitect. All rights reserved.`;
}