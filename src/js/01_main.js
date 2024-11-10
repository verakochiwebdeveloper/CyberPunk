document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#my-slider', {
        type       : 'loop',
        perPage    : 1,
        autoplay   : true,
        interval   : 3000, // Интервал авто-пролистывания в миллисекундах
        pagination : false, // Отключение точек
        arrows     : false, // Отключение стрелок
        breakpoints: {
            1024: {
                perPage: 1, // Для разрешения 1024px
            },
            320: {
                perPage: 1, // Для разрешения 320px
            },
        },
    });

    splide.mount();
});
