document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        // Открытие и закрытие меню по клику на гамбургер
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Защищаем ссылки от немедленного сворачивания меню
        mobileNav.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        // Закрываем меню, если кликнули мимо него
        document.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
        });
    }
});
