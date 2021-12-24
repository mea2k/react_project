export const Menus = [
    {
        name: 'Главная',
        link: '/',
        location: ''
    }, {
        name: 'ДЗ1 - компоненты',
        link: '/shop',
        location: 'shop',
        submenu: [
            {
                name: '1.1 - Интернет-магазин',
                link: '/shop',
                location: 'shop'
            }, {
                name: '1.2* - Календарь',
                link: '/calendar',
                location: 'calendar'
            }],
    }, {
        name: 'ДЗ2 - События и состояния',
        link: '/portfolio',
        location: 'portfolio',
        submenu: [
            {
                name: '2.1 - Фильтр (портфолио)',
                link: '/portfolio',
                location: 'portfolio'
            }, {
                name: '2.2 - Отображение товаров',
                link: '/store',
                location: 'store'
            }, {
                name: '2.3* - Выпадающее меню',
                link: '/dropdown',
                location: 'dropdown'
            }]
    }, {
        name: 'ДЗ3 - Props',
        link: '/stars',
        location: 'stars',
        submenu: [
            {
                name: '3.1 - Рейтинг фильмов',
                link: '/stars',
                location: 'stars'
            }, {
                name: '3.2 - Список приложений',
                link: '/applications',
                location: 'applications'
            }, {
                name: '3.3 - История сообщений',
                link: '/history',
                location: 'history'
            }]
   }
];
