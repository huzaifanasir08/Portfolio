document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.2 // Trigger when 10% of the progress bar is visible
    };

    function handleIntersect(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute("data-progress");
                progressBar.style.width = `${progress}%`;
                observer.unobserve(progressBar); // Stop observing once the animation is triggered
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersect, options);

    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});
