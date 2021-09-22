$(function () {
	$('.slider__box').slick({
		// prevArrow:'<button type="button" class="slick-prev"></button>',
		prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/slider-prints/arrow-prev.svg" alt="">',
		nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/slider-prints/arrow-next.svg" alt="">',
		responsive: [
			{
				breakpoint: 481,
				settings: {
					arrows: false
				}
			}
		]
	});

	$('.menu-btn').on('click', function () {
		$('.menu__list').toggleClass('active');
	});
});

// menu
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');

})


//==== Затемнение __====
$(".toggle").click(function () {
	$("header").toggleClass("overlay");
	$(".showcase").toggleClass("overlay");
})


//==== Закрытие меню при клике на link в мобильной версии====
$('.menu__top-link').click(function () {
	$('.toggle').removeClass('active');
	$('.menu').removeClass('active');
	$("header").removeClass('overlay');
	$('.showcase').removeClass('overlay');
	// $(".menuToggle").removeClassList('active');
})


// block show more

let data = Array.from(document.querySelectorAll('.cases-list .cases-list__item')),
	step = 3,
	item = 0;

data.slice(step).forEach(e => e.style.display = 'none');
item += step;

document.querySelector('#more').addEventListener('click', function (e) {
	let tmp = data.slice(item, item + step);
	tmp.forEach(e => e.style.display = 'flex');
	item += step;

	if (tmp.length < 5)
		this.remove();
});

// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
	buttons: [
		"slideShow",
		"thumbs",
		"zoom",
		"fullScreen",
		"share",
		"close"
	],
	loop: false,
	protect: true
});

//  Get the modal
var modal = document.getElementById("myModal");
var menuburger = document.getElementById("myBurger");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
img.onclick = function () {
	modal.style.display = "block";
	menuburger.style.display = "none";
	modalImg.src = this.src;
	//   captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("spec-modal-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}