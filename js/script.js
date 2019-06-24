var navigation = document.querySelector('.nav');
var burgerMenu = document.querySelector('.mobile');


function showMenu() {
	navigation.classList.toggle('visible');
	burgerMenu.classList.toggle('active');
}

burgerMenu.addEventListener('click', showMenu);