import { gsap } from 'gsap';
import getLoadingProgress from './utils';

const loading = document.querySelector('#loading');
const loadingProgress = document.querySelector('#loading__progress');
const body = document.querySelector('body');

const handleOnProgressChange = (progress) => {
  loadingProgress.innerHTML = `${progress}%`;
};

const handleOnLoad = () => {
  gsap.timeline()
    .to(loading, 1, { autoAlpha: 0 })
    .set(body, { overflow: 'auto' }, '-=1');
};

getLoadingProgress(handleOnProgressChange, handleOnLoad);
