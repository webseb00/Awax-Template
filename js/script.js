var navigation = document.querySelector('.nav');
var burgerMenu = document.querySelector('.mobile');


function showMenu() {
	navigation.classList.toggle('visible');
	burgerMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', showMenu);

var scrollBtn = document.querySelector('.scroll-btn');

function animateScroll() {
	if(window.scrollY > 0) {
		window.scrollBy(0, -20);
		setTimeout(animateScroll, 1);
	} 
}

scrollBtn.addEventListener('click', function(e) {
	e.preventDefault();
	animateScroll();

});