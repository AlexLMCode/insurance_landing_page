const navSlide = () => {
	const burger = document.querySelector('.hamburger--menu');
	const nav = document.querySelector('.navigation');

	burger.addEventListener('click', () => {
		nav.classList.toggle('navigation-active');
	});
};

navSlide();
