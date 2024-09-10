function delayNavigation(link, delay = 800) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute('href');
        setTimeout(() => {
            window.location.href = href;
        }, delay);
    });
}
document.querySelectorAll('.delayed-link').forEach(link => {
    delayNavigation(link);
});
