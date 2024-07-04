let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Parametros
let countItem = items.length;
let itemActive = 0;
// next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
// prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// Slider automatico
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)
function showSlider(){
    // Remover banner anterior
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Activar nuevo banner
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Refrescar Slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// Click Banners
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

var swiper = new Swiper(".news-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    },
    breakpoints: {
      400: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 6,
      },
    },
});

var swiper = new Swiper(".discount-slider", {
    loop:true,
    spaceBetween: 20,
    breakpoints: {
      400: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      1020: {
        slidesPerView: 6,
      },
    },
});