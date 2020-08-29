const width = 100;
const perfData = window.performance.timing;
const EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
const time = parseInt((EstimatedTime / 1000) % 60) * 100;
const loadingProgress = document.querySelector('.loading__progress');
const loading = document.querySelector('#loading');
const loadingHeading = document.querySelector('#loading h1');
const body = document.querySelector('body');

const startProgress = 0;
const endProgress = 100;
const durataion = time;

const animateValue = (startProgress, endProgress, duration) => {
  const range = endProgress - startProgress;
  let currentProgress = startProgress;
  const increment = endProgress > startProgress ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));

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
};

animateValue(startProgress, endProgress, durataion);

setTimeout(() => {
  document
    .querySelector('#loading')
    .classList
    .add('fade-out');
}, time);
