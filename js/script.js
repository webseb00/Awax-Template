var mobileButton = document.querySelector('.mobile');
var navigation = document.querySelector('.nav');
var overlay = document.querySelector('.overlay');
var burgerMenu = document.querySelector('.mobile');


function showMenu() {
	if(navigation.classList.contains('visible')) {
		navigation.classList.remove('visible');
		overlay.classList.remove('dark');
		burgerMenu.classList.remove('active');
	} else {
		navigation.classList.add('visible');
		overlay.classList.add('dark');
		burgerMenu.classList.add('active');
	}
}

mobileButton.addEventListener('click', showMenu);