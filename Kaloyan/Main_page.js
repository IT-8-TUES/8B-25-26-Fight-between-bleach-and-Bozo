const musicButtons = document.querySelectorAll('.musicButton');
const aboutButton = document.querySelector('.aboutButton');

function addHoverListenerCard(element) {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hoveredCard');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('hoveredCard');
    });
}

function addHoverListenerButton(element) {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hoveredButton');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('hoveredButton');
    });
}

musicButtons.forEach(button => addHoverListenerButton(button));
