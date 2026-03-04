// Hamburger Menu Logic
        const menu = document.querySelector('#mobile-menu');
        const menuLinks = document.querySelector('.nav-links');

        menu.addEventListener('click', () => {
            menuLinks.classList.toggle('active');
            
            // Basic animation for hamburger bars
            const bars = document.querySelectorAll('.bar');
            bars[0].style.transform = menuLinks.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : '';
            bars[1].style.opacity = menuLinks.classList.contains('active') ? '0' : '1';
            bars[2].style.transform = menuLinks.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : '';
        });

        // Close menu if clicking outside
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuLinks.contains(e.target)) {
                menuLinks.classList.remove('active');
            }
        });