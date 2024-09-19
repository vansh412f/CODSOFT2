function ifShowUser(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showElements() {
    const fade = document.querySelectorAll('.transition');
    fade.forEach((el) => {
        if (ifShowUser(el)) {
            el.classList.add('show');
        }
    });
}
window.addEventListener('scroll', showElements);
window.addEventListener('load', showElements);