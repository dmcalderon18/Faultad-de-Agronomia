// JavaScript para el carrusel de imágenes
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;
    const interval = 3000; // 3 segundos

    function showNextItem() {
        items[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % itemCount;
        items[currentIndex].classList.add('active');
    }

    setInterval(showNextItem, interval);
});

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators .dot');
    const itemCount = items.length; const interval = 3000; // 3 segundos
    
    function showNextItem() {
        items[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % itemCount;
        items[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    function currentSlide(index) {
        items[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');
        currentIndex = index;
        items[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }
    
    setInterval(showNextItem, interval);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => currentSlide(index));
    });
});
