// Smooth Scroll
var scroll = new SmoothScroll('.navbar a[href*="#"]', {
	speed: 800
});








// active menu scroll
$(document).ready(function() {
		$('a[href*=#]').bind('click', function(e) {
				e.preventDefault(); // prevent hard jump, the default behavior

				var target = $(this).attr("href"); // Set the target as variable

				// perform animated scrolling by getting top-position of target-element and set it as scroll target
				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target; //attach the hash (#jumptarget) to the pageurl
				});

				return false;
		});
});







$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

		// Show/hide menu on scroll
		//if (scrollDistance >= 850) {
		//		$('nav').fadeIn("fast");
		//} else {
		//		$('nav').fadeOut("fast");
		//}
	
		// Assign active class to nav links while scolling
		$('section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navbar a.active').removeClass('active');
						$('.navbar a').eq(i).addClass('active');
				}
		});
}).scroll();







//hamburger menu interaction
var hamburger = document.getElementById('burger_menu')
var navbar = document.getElementById('navbar')
var home = document.getElementById('link_home')
var falha = document.getElementById('link_falha')
var choque = document.getElementById('link_choque')
var oupm = document.getElementById('link_oupm')
var jorel = document.getElementById('link_jorel')
var loja = document.getElementById('link_loja')
var contato = document.getElementById('link_contato')


hamburger.addEventListener('click', () => {
	navbar.classList.toggle('open')
	hamburger.classList.toggle('spin')
})

home.addEventListener('click', () => {
	navbar.classList.toggle('open')
	hamburger.classList.toggle('spin')
})

choque.addEventListener('click', () => {
	hamburger.classList.toggle('spin')
	navbar.classList.toggle('open')
})

falha.addEventListener('click', () => {
	hamburger.classList.toggle('spin')
	navbar.classList.toggle('open')
})

oupm.addEventListener('click', () => {
	hamburger.classList.toggle('spin')
	navbar.classList.toggle('open')
})

jorel.addEventListener('click', () => {
	hamburger.classList.toggle('spin')
	navbar.classList.toggle('open')
})

loja.addEventListener('click', () => {
	hamburger.classList.toggle('spin')
	navbar.classList.toggle('open')
})

contato.addEventListener('click', () => {
	hamburger.classList.toggle('spin')
	navbar.classList.toggle('open')
})




















