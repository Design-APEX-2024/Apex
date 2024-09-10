document.addEventListener('DOMContentLoaded', () => {
    const membersSection = document.querySelector('.members');
    const soundDiv = document.querySelector('.sound');
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                soundDiv.style.bottom = '10%';
            } else {
                soundDiv.style.bottom = '2%';
            }
        });
    };
    const observer = new IntersectionObserver(observerCallback, {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1
    });
    if (membersSection) {
        observer.observe(membersSection);
    } else {
        console.error('Members section not found');
    }
});
