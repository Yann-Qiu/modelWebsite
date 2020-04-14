$(document).ready(function($) {
	var mySwiper = new Swiper ('.swiper-container',{
		breakpoints: { 
		    320: {  //当屏幕宽度大于等于320
		      	slidesPerView: 1,
		      	spaceBetween: 30,
				slidesPerGroup : 1,
		    },
		    768: {  //当屏幕宽度大于等于768 
		      	slidesPerView: 2,
		      	spaceBetween: 30,
				slidesPerGroup : 1,
		    },
		    1280: {  //当屏幕宽度大于等于1280
		      	slidesPerView: 3,
		      	spaceBetween: 30,
				slidesPerGroup : 1,			
		    }
		},
		autoplay: {
			dalay: 300
		},
		loop: true,
		pagination: {
		    el: '.swiper-pagination',
		    clickable: true
		},
	})
});