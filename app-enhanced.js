// Load config from localStorage or use default
function getConfig() {
    const saved = localStorage.getItem('kingsmokeConfig');
    return saved ? JSON.parse(saved) : CONFIG;
}

// Initialize page with config data
function initializeApp() {
    const config = getConfig();

    // Update page title
    document.title = config.seo.title;
    document.getElementById('pageTitle').textContent = config.seo.title;

    // Update navigation
    document.getElementById('navBrand').textContent = config.business.name;

    // Update hero section
    document.getElementById('heroTitle').textContent = `Welcome to ${config.business.name} & Vapors`;
    document.getElementById('heroSubtitle').textContent = config.business.tagline;

    // Update about section
    document.getElementById('aboutBusinessName').textContent = config.business.name;
    document.getElementById('aboutDescription').textContent = config.business.description;
    
    const aboutList = document.getElementById('aboutList');
    aboutList.innerHTML = config.about.highlights
        .map(highlight => `<li>${highlight}</li>`)
        .join('');

    // Update footer
    document.getElementById('footerDescription').textContent = config.business.description;
    document.getElementById('yearSpan').textContent = config.business.year;

    // Load products
    loadProducts(config);
    loadServices(config);
    loadTestimonials(config);
    loadContactInfo(config);
    loadSocialLinks(config);

    // Apply custom colors
    applyCustomColors(config);
}

// Load products
function loadProducts(config) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = config.products
        .map(product => `
            <div class="product-card">
                <div class="product-icon">${product.icon}</div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <button class="view-btn">View Collection</button>
            </div>
        `)
        .join('');
}

// Load services
function loadServices(config) {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = config.services
        .map(service => `
            <div class="service-card">
                <i class="fas ${service.icon}"></i>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `)
        .join('');
}

// Load testimonials with carousel
function loadTestimonials(config) {
    const track = document.getElementById('testimonialsTrack');
    track.innerHTML = config.testimonials
        .map(testimonial => `
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">${testimonial.image}</div>
                    <div>
                        <div class="testimonial-name">${testimonial.name}</div>
                        <div class="stars">${'⭐'.repeat(testimonial.rating)}</div>
                    </div>
                </div>
                <p class="testimonial-text">"${testimonial.text}"</p>
            </div>
        `)
        .join('');
}

// Load contact info
function loadContactInfo(config) {
    const infoContainer = document.getElementById('contactInfo');
    infoContainer.innerHTML = `
        <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <h3>Address</h3>
                <p>${config.contact.fullAddress}</p>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-phone"></i>
            <div>
                <h3>Phone</h3>
                <p>${config.contact.phone}</p>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-envelope"></i>
            <div>
                <h3>Email</h3>
                <p>${config.contact.email}</p>
            </div>
        </div>
        <div class="info-item">
            <i class="fas fa-clock"></i>
            <div>
                <h3>Hours</h3>
                <p>
                    Mon-Thu: ${config.hours.monday}<br>
                    Fri-Sat: ${config.hours.friday}<br>
                    Sun: ${config.hours.sunday}
                </p>
            </div>
        </div>
    `;
}

// Load social links
function loadSocialLinks(config) {
    const socialContainer = document.getElementById('socialLinks');
    const platforms = [
        { name: 'facebook', icon: 'fab fa-facebook-f', url: config.social.facebook },
        { name: 'instagram', icon: 'fab fa-instagram', url: config.social.instagram },
        { name: 'twitter', icon: 'fab fa-twitter', url: config.social.twitter },
        { name: 'tiktok', icon: 'fab fa-tiktok', url: config.social.tiktok }
    ];
    
    socialContainer.innerHTML = platforms
        .map(platform => `<a href="${platform.url}" target="_blank"><i class="${platform.icon}"></i></a>`)
        .join('');
}

// Apply custom colors
function applyCustomColors(config) {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', config.colors.primary);
    root.style.setProperty('--secondary-color', config.colors.secondary);
    root.style.setProperty('--accent-color', config.colors.accent);
    root.style.setProperty('--text-color', config.colors.text);
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scrolling for testimonials
function scrollTestimonials(direction) {
    const track = document.getElementById('testimonialsTrack');
    const scrollAmount = 400;
    if (direction === 'left') {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = this.children[0].value;
        const email = this.children[1].value;
        const subject = this.children[2].value;
        const message = this.children[3].value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill out all fields');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email');
            return;
        }
        
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
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
window.addEventListener('load', () => {
    document.querySelectorAll('.product-card, .service-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', initializeApp);

// Re-initialize when returning from admin panel
window.addEventListener('pageshow', () => {
    initializeApp();
});
