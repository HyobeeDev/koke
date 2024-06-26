// 2022 hot
// let main = document.querySelector('.main_visual img')
// let tab = document.querySelectorAll('.tab_imgs div img')

// for(let i=0; i<tab.length; i++) {
//     tab[i].onclick = changeSrc

//     function changeSrc() {
//         let selectTab = this.src
//         main.setAttribute('src', selectTab)
//     }
// }






// 2022 main_visual
new Swiper('.main_visual .swiper', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  navigation: {
    prevEl: '.main_visual .swiper-button-prev',
    nextEl: '.main_visual .swiper-button-next'
  }
})



// 모든 섹션들 나타나기
const bestScrollUp = document.querySelector('.best')
const newScrollUp = document.querySelector('.new')
const hotScrollUp = document.querySelector('.hot')
const reviewScrollUp = document.querySelector('.review')

window.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    gsap.to(bestScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(bestScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // best

window.addEventListener('scroll', () => {
  if(window.scrollY > 1350){
    gsap.to(newScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(newScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // new

window.addEventListener('scroll', () => {
  if(window.scrollY > 2800){
    gsap.to(hotScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(hotScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // hot

window.addEventListener('scroll', () => {
  if(window.scrollY > 4800){
    gsap.to(reviewScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(reviewScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // review



// best ==> 차후에 js로 바꾸기
$(function () {

	let $menuLabels = $('.teb__labels li a'); 
	$menuLabels.on('click', function(e) {
		e.preventDefault();
		$menuLabels.removeClass('best_teb_active');
		$(this).addClass('best_teb_active');

		$('.item').fadeOut(100);
		$(this.hash).delay(100).fadeIn();
	});

});


// 2022 hot - 
const thumbSwiper = document.querySelector(".hot_swiper_thumbs");

var thumb_swiper = new Swiper(".hot_swiper_thumbs", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var main_swiper = new Swiper(".hot_swiper", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".hot .swiper-button-next",
    prevEl: ".hot .swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSwiper.swiper
  }
});

// 2022 hot - all__roasterys
new Swiper('.all__roasterys .swiper', {
  slidesPerView: '5',
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 1000
  },
  navigation: {
    prevEl: '.all__roasterys .swiper-button-prev',
    nextEl: '.all__roasterys .swiper-button-next'
  }
})



// 2022 hot - review
new Swiper('.review .swiper', {
  slidesPerView: '4',
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".review .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: '.review .swiper-button-prev',
    nextEl: '.review .swiper-button-next'
  }
})
