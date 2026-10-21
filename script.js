document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    // Проверяем, существуют ли элементы на странице, чтобы избежать ошибок в консоли
    if (menuToggle && mobileNav) {
        
        // 1. Открытие / Закрытие меню при клике на сам гамбургер
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Остановка всплытия (главное исправление)
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // 2. Изолируем клики внутри выпадающего меню
        // Это не даст меню закрыться раньше времени, пока браузер совершает переход по ссылке
        mobileNav.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        // 3. Закрытие меню при клике на любую пустую область экрана вокруг него
        document.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }
});

