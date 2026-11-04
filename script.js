document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const hwNav = document.querySelector('.hw-nav');

    if (menuToggle && hwNav) {
        menuToggle.addEventListener('click', () => {
            // Переключаем анимацию гамбургера (крестик)
            menuToggle.classList.toggle('active');
            // Показываем/скрываем выезжающую мобильную шторку меню
            hwNav.classList.toggle('active');
        });

        // Закрываем меню при клике на любую ссылку внутри мобильной навигации
        const navLinks = hwNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                hwNav.classList.remove('active');
            });
        });
    }

