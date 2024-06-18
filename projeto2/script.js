document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow');
    const message = document.querySelector('.message');

    arrow.addEventListener('animationend', () => {
        message.style.opacity = 1;
    });
});