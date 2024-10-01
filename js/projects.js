document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));

    // Group project cards into rows of three
    for (let i = 0; i < projectCards.length; i += 3) {
        const row = document.createElement('div');
        row.classList.add('project-row');

        // Slice the projectCards array to create a row
        const cardsToDisplay = projectCards.slice(i, i + 3);
        cardsToDisplay.forEach(card => {
            row.appendChild(card);
        });

        projectsContainer.appendChild(row);
    }
});