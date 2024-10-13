// アコーディオン
$('.faq__list').each(function() {
    var $faqSection = $(this);
    $faqSection.find('.faq__list--question').next().hide();
    $faqSection.find('.faq__list--question').click(function() {
        $faqSection.find('.faq__list--question').not(this).next().slideUp();
        $faqSection.find('.faq__list--question').not(this).removeClass('active').find('i').removeClass('fa-minus').addClass('fa-plus');
        $(this).next().slideToggle();
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        }
    });
});

