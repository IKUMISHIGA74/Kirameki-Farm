// スライダー
const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true 
    },
    loop: true,
    spaceBetween: 10
});