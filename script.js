// Получаем видео по ID
const video = document.getElementById('video1');

// Проверяем, существует ли видео
if (video) {
    // Когда видео заканчивается, начинаем его заново
    video.addEventListener('ended', function () {
        video.currentTime = 0; // Перемещаем на начало
        video.play(); // И продолжаем проигрывать
    });

    // Проверяем, можно ли воспроизвести видео
    video.play().catch(error => {
        console.error('Ошибка при попытке воспроизвести видео:', error);
    });
} else {
    console.error('Видео с ID "video1" не найдено.');
}
