document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    
    elementsToAnimate.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * (index + 1));
    });
});