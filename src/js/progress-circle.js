const circle = document.querySelector('#svg-circle-progress #bar');

const setProgress = (progress) => {
  const r = circle.getAttribute('r');
  const c = Math.PI * (r * 2);
  const pct = ((100 - progress) / 100) * c;
  circle.style.strokeDashoffset = pct;
};

export default setProgress;
