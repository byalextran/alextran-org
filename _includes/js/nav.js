(function() {
	const navWrapper = document.querySelector('.nav-wrapper');
	const navToggle = document.querySelector('.nav-toggle');
	const navMenu = document.querySelector('.nav-menu');

	if (!navWrapper || !navToggle || !navMenu) return;

	function checkNavOverflow() {
		navWrapper.removeAttribute('data-collapsed');
		navMenu.removeAttribute('data-visible');
		navToggle.setAttribute('aria-expanded', 'false');

		void navMenu.offsetWidth;

		const firstLink = navMenu.querySelector('a');
		const lastLink = navMenu.querySelector('a:last-child');

		if (firstLink && lastLink) {
			const firstRect = firstLink.getBoundingClientRect();
			const lastRect = lastLink.getBoundingClientRect();
			const isWrapping = Math.abs(firstRect.top - lastRect.top) > 5;

			const menuRect = navMenu.getBoundingClientRect();
			const wrapperRect = navWrapper.getBoundingClientRect();
			const isOverflowing = menuRect.width > wrapperRect.width;

			if (isWrapping || isOverflowing) {
				navWrapper.setAttribute('data-collapsed', 'true');
			}
		}
	}

	navToggle.addEventListener('click', () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true';
		navToggle.setAttribute('aria-expanded', !expanded);
		navMenu.setAttribute('data-visible', !expanded);
	});

	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
			navToggle.setAttribute('aria-expanded', 'false');
			navMenu.setAttribute('data-visible', 'false');
			navToggle.focus();
		}
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.nav-wrapper') && navToggle.getAttribute('aria-expanded') === 'true') {
			navToggle.setAttribute('aria-expanded', 'false');
			navMenu.setAttribute('data-visible', 'false');
		}
	});

	const resizeObserver = new ResizeObserver(() => checkNavOverflow());
	resizeObserver.observe(navWrapper);
	checkNavOverflow();
})();
