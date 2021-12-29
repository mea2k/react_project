export const Menus = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
        name: 'ДЗ3 - Props',
        link: '/stars',
        location: 'stars',
        submenu: [
            {
                name: '3.1 - Рейтинг фильмов',
                link: '/stars',
                location: 'stars'
            }, {
                name: '3.2 - Список предложений',
                link: '/listing',
                location: 'listing'
            }, {
                name: '3.3* - История сообщений',
                link: '/chat',
                location: 'chat'
            }]
    }, {
        id: 4,
        name: 'ДЗ4 - Формы',
        link: '/colors',
        location: 'colors',
        submenu: [
            {
                name: '4.1 - Конвертор цвета',
                link: '/colors',
                location: 'colors'
            }, {
                name: '4.2 - Учет тренировок',
                link: '/training',
                location: 'training'
            }, {
                name: '4.3* - Менеджер фото',
                link: '/photos',
                location: 'photos'
            }]
    }
];
