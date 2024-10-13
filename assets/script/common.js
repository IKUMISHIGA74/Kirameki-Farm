// ハンバーガーメニュー
$(function () {
    function handleMenu() {
        if ($(window).width() <= 767) {
            $('#js-hamburger-menu, .navigation__link').on('click', function () {
                $('.navigation').slideToggle(500);
                $('.hamburger-menu').toggleClass('hamburger-menu--open');
            });
        } else {
            $('#js-hamburger-menu, .navigation__link').off('click');
        }
    }

    handleMenu();

    $(window).resize(function () {
        handleMenu();
    });
});
