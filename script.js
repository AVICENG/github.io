document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопку по ID и по классу для надежности
    const menuToggle = document.getElementById('mobileMenuBtn') || document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobileNav') || document.querySelector('.hw-nav');

    if (!menuToggle || !mobileNav) {
        console.error("Критическая ошибка: Элементы мобильного меню не найдены в HTML разметке!");
        return;
    }

    // Блокируем клики на саму панель навигации, чтобы меню не закрывалось при нажатии на ссылки
    mobileNav.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Переключение меню по клику на гамбургер
    menuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        // Переключаем классы активности
        menuToggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        console.log("Состояние меню изменено. Текущие классы навигации:", mobileNav.className);
    });

    // Закрытие меню при клике в любое другое место экрана
    document.addEventListener('click', () => {
        if (mobileNav.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileNav.classList.remove('active');
            console.log("Меню автоматически закрыто кликом по экрану.");
        }
    });
});
