document.addEventListener('DOMContentLoaded', () => {
    const headerElement = document.querySelector('header');
    
    if (headerElement) {
        // Проверяем, находится ли текущая страница в подпапке "/p/"
        const inSubDir = window.location.pathname.includes('/p/');
        
        // Если мы в папке "p", то к главной нужно подняться наверх (../), а остальные файлы в этой же папке
        const homePath = inSubDir ? '../index.html' : 'index.html';
        const eqPath   = inSubDir ? 'equipment.html' : 'p/equipment.html';
        const objPath  = inSubDir ? 'objects.html' : 'p/objects.html';
        const contPath = inSubDir ? 'contacts.html' : 'p/contacts.html';

        // Вставляем HTML шапки
        headerElement.innerHTML = `
            <div class="hw-logo">
                <a href="${homePath}">
                    <svg class="hw-logo-svg" viewBox="0 0 130 46" xmlns="http://w3.org" style="height: 46px !important;">
                        <g transform="translate(2, 6)">
                            <path d="M 19.5,23.5 L 19.5,14 C 19.5,10.5 16,8.5 11,8.5 C 6,8.5 2,10.5 2,14 C 2,17.5 6,23.5 11,23.5 L 19.5,23.5" fill="none" stroke="#de1e26" stroke-width="4.3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 26.5,9 L 36.5,23.5 L 46.5,9" fill="none" stroke="#0b0f19" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M 54.5,9 L 54.5,23.5" fill="none" stroke="#0b0f19" stroke-width="4.2" stroke-linecap="round"/>
                            <path d="M 74,9 C 66,9 62,12 62,16.25 C 62,20.5 66,23.5 74,23.5" fill="none" stroke="#0b0f19" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
                            <g transform="translate(79, 1.5)">
                                <path d="M 2,13 L 2,2 M 2,2 L 9,2 C 12,2 13.5,4 13.5,6 C 13.5,8 12,10 9,10 L 2,10" fill="none" stroke="#0b0f19" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M 17,13 L 17,2 M 17,2 L 23.5,2 C 26.5,2 28,3.5 28,5.5 C 28,7.5 26.5,9 23.5,9 L 17,9 M 23,9 L 28,13" fill="none" stroke="#0b0f19" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <rect x="33" y="2" width="10" height="11" rx="4" fill="none" stroke="#de1e26" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </g>
                        <g transform="translate(2, 0)">
                            <text class="hw-logo-text-sub" x="2" y="42.5" font-family="'Inter', sans-serif" font-weight="700" font-size="6.3" fill="#767676" letter-spacing="0.48">ПРОФЕССИОНАЛЬНЫЕ РЕШЕНИЯ</text>
                        </g>
                    </svg>
                </a>
            </div>
            
            <button class="menu-toggle" id="mobileMenuBtn" aria-label="Открыть меню">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav class="hw-nav" id="mobileNav">
                <ul>
                    <li><a href="${homePath}">Главная</a></li>
                    <li><a href="${eqPath}">Оборудование</a></li>
                    <li><a href="${objPath}">Объекты</a></li>
                    <li><a href="${contPath}">Контакты</a></li>
                </ul>
            </nav>
        `;

        // Логика работы мобильного меню
        const menuButton = document.getElementById('mobileMenuBtn');
        const navigationPanel = document.getElementById('mobileNav');

        if (menuButton && navigationPanel) {
            menuButton.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                menuButton.classList.toggle('active');
                navigationPanel.classList.toggle('active');
            });

            navigationPanel.addEventListener('click', (event) => {
                event.stopPropagation();
            });

            document.addEventListener('click', () => {
                menuButton.classList.remove('active');
                navigationPanel.classList.remove('active');
            });
        }
    }
});
