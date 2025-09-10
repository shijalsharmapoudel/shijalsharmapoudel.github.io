/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/


/* Link active work */ 


/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 32,
    loop: true,
    speed: 800,
    slideToClickedSlide: true,
    allowTouchMove: true,
    preventClicks: false,
    preventClicksPropagation: false,
    touchRatio: 1.5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        scale: 0.85,
        slideShadows: false,
    },
    on: {
        click: function(swiper, event) {
            const clickedSlide = event.target.closest('.swiper-slide');
            if (clickedSlide) {
                const index = [...swiper.slides].indexOf(clickedSlide);
                if (index !== swiper.activeIndex) {
                    swiper.slideTo(index);
                }
            }
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    spaceBetween: 30,
    coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 100,
        modifier: 1.5,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        click: function(swiper, event) {
            const clickedSlide = event.target.closest('.swiper-slide');
            if (clickedSlide) {
                const index = parseInt(clickedSlide.getAttribute('data-swiper-slide-index'));
                if (!isNaN(index)) {
                    swiper.slideTo(index);
                }
            }
        }
    }
});


/*=============== CERTIFICATION TOGGLE ===============*/
const certificationItems = document.querySelectorAll('.certification__item')

certificationItems.forEach((item) => {
    const header = item.querySelector('.certification__header')
    
    header.addEventListener('click', () => {
        const openItem = document.querySelector('.certification__open')
        
        toggleItem(item)
        
        if(openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const content = item.querySelector('.certification__details')
    
    if(item.classList.contains('certification__open')) {
        content.style.height = '0'
        item.classList.remove('certification__open')
    } else {
        content.style.height = content.scrollHeight + 'px'
        item.classList.add('certification__open')
    }
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
