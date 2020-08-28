const width = 100,
    perfData = window.performance.timing, 
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime / 1000) % 60) * 100,
    loadingProgress = document.querySelector('.loading__progress'),
    loading = document.querySelector('#loading'),
    loadingHeading = document.querySelector('#loading h1'),
    body = document.querySelector('body');

const startProgress = 0,
    endProgress = 100,
    durataion = time;

const animateValue = (startProgress, endProgress, duration) => {
    let range = endProgress - startProgress,
        currentProgress = startProgress,
        increment = endProgress > startProgress ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
        currentProgress += increment;
        loadingProgress.style.width = `${currentProgress}%`;
        loadingHeading.innerHTML = `${currentProgress}%`;
        if (currentProgress > 50) loading.classList.add('loading-label-animation');
        if (currentProgress === endProgress) {
            clearInterval(timer);
            body.classList.add('loaded');
        }
    }, stepTime);
}

animateValue(startProgress, endProgress, durataion);

setTimeout(() => {
    document
        .querySelector('#loading')
        .classList
        .add('fade-out');
}, time);