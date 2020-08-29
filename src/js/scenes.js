// import {gsap} from 'gsap';
// import {ScrollTrigger} from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

import { gsap } from 'gsap';
import startAndReverse from './gsap-helpers';

const infoLinkOnClick = (e) => {
  e.preventDefault();
  const { currentTarget } = e;
  const lines = currentTarget.querySelectorAll('line');
  const tl = gsap.timeline({ paused: true, reversed: true })
    .addLabel('init')
    .to(lines[0], 0.5, { attr: { x2: 0, y2: 20 } }, 'init')
    .to(lines[1], 0.5, { attr: { x1: 20 } }, 'init');
  startAndReverse(currentTarget, 'click', tl);
  // info-link__line-1
};

document
  .querySelectorAll('.artist-section__info-link')
  .forEach((elem) => elem.addEventListener('click', infoLinkOnClick));

/*
const buildArtistTimeline = artist => {
    const section = document.querySelector(`#${artist}.artist-section`),
        welcomeSection = document.querySelector(`#${artist} .artist-section__welcome`),
        sectionWrapper = document.querySelector(`#${artist} .artist-section__wrapper`),
        sectionInfo = document.querySelector(`#${artist} .artist-section__info`),
        infoArr = document.querySelectorAll(`#${artist} .artist-section__info p`),
        perspective = 1000;

    const aTl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=15000',
            pin: true,
            // anticipatePin: 1,
            // markers: true,
            scrub: 1
        }
    });

    /*
    const buildInfoTl = s_p => {
        return gsap.timeline()
        .to(infoArr[s_p], 1, {opacity: 1, display: 'block'})
        .addPause(2)
        .to(infoArr[s_p], 1, {opacity: 0, display: 'none'})
    };
    */

// TODO: Improve this code
// El valor aparece bruscamente
/* return aTl
        .set(sectionWrapper, {css:{
          transformPerspective: perspective, transformStyle: 'preserve-3d'
        }})
        // Improve Quality
        .to(welcomeSection, 1, {css: {z: perspective}})
        .fromTo(sectionInfo, 1, {opacity: 0}, {opacity: 1})
        .addPause(3)
        .to(infoArr[0], 1, {opacity: 0, display: 'none'})
        .fromTo(infoArr[1], 1, {opacity: 0}, {opacity: 1, display: 'block'})
        .addPause(3)
        .to(infoArr[1], 1, {opacity: 0, display: 'none'})
        .fromTo(infoArr[2], 1, {opacity: 0}, {opacity: 1, display: 'block'})
        .addPause(3)
        .to(infoArr[2], 1, {opacity: 0, display: 'none'})
        .fromTo(infoArr[3], 1, {opacity: 0}, {opacity: 1, display: 'block'})
        .addPause(3)
        .to(infoArr[3], 1, {opacity: 0, display: 'none'})
        .fromTo(infoArr[4], 1, {opacity: 0}, {opacity: 1, display: 'block'})
        .addPause(3)
        .to(infoArr[4], 1, {opacity: 0, display: 'none'})
        .fromTo(infoArr[5], 1, {opacity: 0}, {opacity: 1, display: 'block'})
        .addPause(3)
        .to(infoArr[5], 1, {opacity: 0, display: 'none'})
        .fromTo(infoArr[6], 1, {opacity: 0}, {opacity: 1, display: 'block'})
        .addPause(3);
};

gsap.timeline()
    .add(buildArtistTimeline('velazquez'))
    .add(buildArtistTimeline('goya'))
    .add(buildArtistTimeline('picasso'))
    .add(buildArtistTimeline('dali'));
*/
