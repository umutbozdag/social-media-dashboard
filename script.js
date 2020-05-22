const themeToggle = document.querySelectorAll('#checkbox');
const body = document.querySelectorAll('body');

themeToggle[0].addEventListener('change', (e) => {
    const { checked } = e.target;
    if(checked) {
        body[0].classList.add('theme-dark');
    } else {
        body[0].classList.remove('theme-dark');
    }
});