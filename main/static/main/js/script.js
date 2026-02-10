const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');
        
mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
});