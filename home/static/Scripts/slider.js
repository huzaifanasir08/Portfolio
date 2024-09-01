let currentIndex = 0;
const projectElements = document.querySelectorAll('.project');
const totalProjects = projectElements.length;
const indicators = document.querySelectorAll('.indicator');

function showProject(index) {
    // Remove the active class from the current project and indicator
    projectElements[currentIndex].classList.remove('show');
    indicators[currentIndex].classList.remove('active');
    // Update the current index
    currentIndex = index;
    
    // Add the active class to the new project and indicator
    projectElements[currentIndex].classList.add('show');
    indicators[currentIndex].classList.add('active');
}

function showNextProject() {
    const nextIndex = (currentIndex + 1) % totalProjects;
    showProject(nextIndex);
}

function showPrevProject() {
    const prevIndex = (currentIndex - 1 + totalProjects) % totalProjects;
    showProject(prevIndex);
}

// Initial active class setup
showProject(currentIndex);

// Set up the interval to call the function every 3 seconds
let projectInterval = setInterval(showNextProject, 3000); // Change project every 3 seconds



indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(projectInterval); // Clear the interval to stop automatic sliding
        showProject(index);
        projectInterval = setInterval(showNextProject, 3000); // Restart automatic sliding
    });
});
