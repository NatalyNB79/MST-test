const video = document.getElementById('video1');

// Когда видео заканчивается, начинаем его заново
video.addEventListener('ended', function () {
    video.currentTime = 0; // Перемещаем на начало
    video.play(); // И продолжаем проигрывать
});

// Запуск видео
video.play();
