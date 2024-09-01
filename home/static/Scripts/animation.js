const elements = document.querySelectorAll('.top-down, .right-in, .top-right-in, .right-fade-z, .right-fade-o, .right-fade-t, .fade, .top-left-in, .project-card, .block');
const options = {
	root: null, // Use the viewport as the root
	rootMargin: "0px",
	threshold: 0.2 // Trigger when 10% of the progress bar is visible
};
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate');
		}
	})
},{
	threshold: 0.07
});

for (let i = 0; i < elements.length; i++) {
	const el = elements[i];

	observer.observe(el);
}