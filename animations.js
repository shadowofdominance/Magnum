document.addEventListener("DOMContentLoaded", function() {
    const slideElements = document.querySelectorAll('.slide-in');

    function handleScroll() {
        slideElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                element.classList.add('slide-in-visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case elements are already in view on load
});
