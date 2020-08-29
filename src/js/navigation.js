import { gsap } from 'gsap';
import startAndReverse from './gsap-helpers';

const line1 = document.querySelector('#line-1');
const line2 = document.querySelector('#line-2');
const line3 = document.querySelector('#line-3');
const hamburguerMenu = document.querySelector('#nav__hamburguer-menu');
const menu = document.querySelector('#nav__menu');

const tl = gsap.timeline({ paused: true, reversed: true })
  .addLabel('init')
  .to(line1, 0.5, { attr: { y2: 28 } })
  .to(line2, 0.5, { opacity: 0 }, 'init')
  .to(line3, 0.5, { attr: { y2: 2 } }, 'init')
  .to(menu, 0.6, { autoAlpha: 1 }, 'init')
  .set(menu, { zIndex: 10 });

startAndReverse(hamburguerMenu, 'click', tl);
