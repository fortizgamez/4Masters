import { gsap } from 'gsap';

const openSections = document.querySelectorAll('.artist-section__info--open');
const collapsedSections = document.querySelectorAll('.artist-section__info--collapsed');
let infoActivate = true;

const tl = gsap.timeline({ paused: true, reversed: true })
  .fromTo(openSections, { display: 'block', opacity: 1 }, { duration: 0.5, display: 'none', opacity: 0 })
  .fromTo(collapsedSections, { display: 'none', opacity: 0 }, { duration: 0.5, display: 'inline-block', opacity: 1 });

const infoLinkOnClick = (e) => {
  infoActivate = !infoActivate;
  e.preventDefault();
  if (!infoActivate) tl.play();
  else tl.reverse();
};

document
  .querySelectorAll('.artist-section__info-link')
  .forEach((elem) => elem.addEventListener('click', infoLinkOnClick));
