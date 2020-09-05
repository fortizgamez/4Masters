import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import buldAllScreenTimelines from './timelines';
import { isLargeScreen } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#dali.artist-section');
const welcomeSection = document.querySelector('#dali .artist-section__welcome');
const sectionInfo = document.querySelector('#dali .artist-section__info');
const daliImgs = document.querySelectorAll('#dali .artist-section__img');
const daliInfo1 = document.querySelectorAll('#dali-info-1');
const daliInfo2 = document.querySelectorAll('#dali-info-2');
const daliInfo3 = document.querySelectorAll('#dali-info-3');
const daliInfo4 = document.querySelectorAll('#dali-info-4');
const daliInfo5 = document.querySelectorAll('#dali-info-5');
const daliInfo6 = document.querySelectorAll('#dali-info-6');
const daliInfo7 = document.querySelectorAll('#dali-info-7');
const daliImageSmall = document.querySelectorAll('#dali-image-small');
const daliImage2 = document.querySelectorAll('#dali-image-2');
const daliImage3 = document.querySelectorAll('#dali-image-3');
const daliImage4 = document.querySelectorAll('#dali-image-4');

const largeScreenTimeline = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=10000',
      pin: true,
      anticipatePin: 1,
      scrub: 0.5,
    },
  })
    .addLabel('welcome_effect')
    .to(welcomeSection, 1, { css: { z: 1000 } })
    .fromTo(daliImgs,
      { filter: 'grayscale(100%) brightness(3)' },
      { duration: 1, filter: 'grayscale(0) brightness(1)' },
      'welcome_effect-=0.3')
    .fromTo(sectionInfo, 1, { opacity: 0 }, { opacity: 1 })
    .addLabel('show_info_1')
    .addPause(3)
    .to(daliInfo1, 1, { opacity: 0, display: 'none' })
    .fromTo(daliInfo2, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(daliInfo2, 1, { opacity: 0, display: 'none' })
    .fromTo(daliInfo3, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(daliInfo3, 1, { opacity: 0, display: 'none' })
    .fromTo(daliInfo4, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addLabel('show_info_4')
    .addPause(3)
    .to(daliInfo4, 1, { opacity: 0, display: 'none' })
    .fromTo(daliInfo5, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(daliInfo5, 1, { opacity: 0, display: 'none' })
    .fromTo(daliInfo6, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(daliInfo6, 1, { opacity: 0, display: 'none' })
    .fromTo(daliInfo7, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .fromTo(daliImgs,
      { backgroundPosition: '0% 10%' },
      { duration: 10, backgroundPosition: '50% 40%' },
      'show_info_1')
    .from(daliImage2, 10, { z: -600 }, 'show_info_1')
    .from(daliImage3, 10, { y: -100, z: -560 }, 'show_info_1')
    .from(daliImage4, 10, { y: -100, z: -560 }, 'show_info_1');
};

if (isLargeScreen()) largeScreenTimeline();
else {
  buldAllScreenTimelines(section,
    welcomeSection,
    buldAllScreenTimelines(section,
      welcomeSection,
      daliImgs,
      daliImageSmall,
      daliInfo1,
      daliInfo2,
      daliInfo3,
      daliInfo4,
      daliInfo5,
      daliInfo6,
      daliInfo7));
}
