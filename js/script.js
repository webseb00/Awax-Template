var navigation = document.querySelector('.nav'),
	burgerMenu = document.querySelector('.mobile'),
	scrollBtn = document.querySelector('.scroll-btn'),
	navList = document.querySelector('.nav__list');

// SHOW MENU ON CLICK

function showMenu() {
	navigation.classList.toggle('visible');
	burgerMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', showMenu);

// SCROLL PAGE TO THE TOP

function animateScroll() {
	if(window.scrollY > 0) {
		window.scrollBy(0, -100);
		setTimeout(animateScroll, 25);
	} 
}

scrollBtn.addEventListener('click', function(e) {
	e.preventDefault();
	animateScroll();
});

