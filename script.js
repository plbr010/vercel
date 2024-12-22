let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-images img');
    currentIndex += step;
    
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    
    const newTransformValue = `-${currentIndex * 100}%`;
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue})`;
}

const targetDate = new Date('2024-05-19T16:16:00');

function updateCountdown() {
    const now = new Date();
    const timeRemaining = now - targetDate;

    const years = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeRemaining % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('years').innerText = years < 10 ? '0' + years : years;
    document.getElementById('months').innerText = months < 10 ? '0' + months : months;
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
