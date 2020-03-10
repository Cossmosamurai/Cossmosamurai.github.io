
// Анимация кнопок
var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

// Анимаций для сайта
$(function () {

		$(window).scroll(function() {
	    $('.header').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.product_4').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.product_3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.product_5').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.product_6').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.product_7').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});

	$(window).scroll(function() {
	    $('.footer').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
});


// открытие по кнопке
$('.js-button_1').click(function initHandler () {
	$('.container').css('filter', 'blur(2px)');
	$('.js-overlay').fadeIn();
	$('.js-overlay').addClass('disabled');
});

$('.js-button_2, .js-button_3, .js-button_4, .js-button_5, .js-button_6, .js-button_7').click(function initHandler () {
	$('.container').css('filter', 'blur(2px)');
	$('.js-overlay_2').fadeIn();
	$('.js-overlay_2').addClass('disabled');
});


// Зфкрыть на крестик
$('.close').click(function() {
	$('.js-overlay, .js-overlay_2').fadeOut();
	$('.container').css('filter', 'none');
})


// Закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay, .js-overlay_2').fadeOut();
		$('.container').css('filter', 'none');
	}
});

// btnShowModal.onclick = e=>{
//   over.style.top = window.scrollY + 50 + 'px' // текущее положение скролла + отступ
//   over.classList.add('active') // показываем
// };

$(document).ready(function(){
	$('.slider').slick({
	
	});
});