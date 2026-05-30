document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Sticky Navbar Background on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 13, 18, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(13, 13, 18, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add scroll animations to elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.glass-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
