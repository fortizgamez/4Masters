// Utils
const getLoadingProgress = (onProgressChange, onPageLoad) => {
  const { loadEventEnd, navigationStart } = window.performance.timing;
  const estimatedTime = -(loadEventEnd - navigationStart);
  const time = parseInt((estimatedTime / 1000) % 60, 10) * 100;
  let currentProgress = 0;
  const stepTime = Math.abs(Math.floor(time / 100));

  const timer = setInterval(() => {
    currentProgress += 1;
    onProgressChange(currentProgress);
    if (currentProgress === 100) {
      if (onPageLoad) onPageLoad();
      clearInterval(timer);
    }
  }, stepTime);
};

export default getLoadingProgress;
