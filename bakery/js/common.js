$(document).ready(function() {

			var button = $('.menu-btn');
			var button_active = $('.menu-btn_active')
			var link = $('.navigation');
			var list = $('.topmenu');
			var nav = $('nav');
			var over = $('.site-overlay');

			button.click(function(){
				link.toggleClass('nav_mob');
				list.toggleClass('right_menu');
				nav.toggleClass('pushy');
			});
			over.click(function(){
				link.removeClass('nav_mob');
				list.removeClass('right_menu');
				nav.removeClass('pushy');
				button.removeClass('menu-btn_active');
			});
});

/*carousel*/
			
$(document).ready(function() {

			/*configuration*/
			var width = 110; //width of the image
			var count = 1; //count of the image

			var carousel = document.getElementById('carousel');
			var list = carousel.querySelector('ul');
			var listElems = carousel.querySelectorAll('li');

			var position = 0; //actual shift to left

			carousel.querySelector('.prev').onclick = function() {
				//shift to left
				position = Math.min(position + width * count, 0);
				list.style.marginLeft = position + 'px';
			};

			carousel.querySelector('.next').onclick = function() {
				//shift to right
				position = Math.max(position - width * count, -width * (listElems.length - count));
				list.style.marginLeft = position + 'px';
			};
});
new WOW().init();