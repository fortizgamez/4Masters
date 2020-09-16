import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import buldAllScreenTimelines from './timelines';
import { isLargeScreen } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#velazquez.artist-section');
const welcomeSection = document.querySelector('#velazquez .artist-section__welcome');
const sectionInfo = document.querySelector('#velazquez .artist-section__info');
const velazquezInfo1 = document.querySelectorAll('#velazquez-info-1');
const velazquezInfo2 = document.querySelectorAll('#velazquez-info-2');
const velazquezInfo3 = document.querySelectorAll('#velazquez-info-3');
const velazquezInfo4 = document.querySelectorAll('#velazquez-info-4');
const velazquezInfo5 = document.querySelectorAll('#velazquez-info-5');
const velazquezInfo6 = document.querySelectorAll('#velazquez-info-6');
const velazquezInfo7 = document.querySelectorAll('#velazquez-info-7');

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
    .to(welcomeSection, 1, { z: 1000, backdropFilter: 'grayscale(0%) brightness(1)' })
    .fromTo(welcomeSection,
      { backdropFilter: 'grayscale(100%) brightness(3)' },
      { backdropFilter: 'grayscale(0%) brightness(1)' }, 'welcome_effect')
    .fromTo(sectionInfo, 1, { opacity: 0 }, { opacity: 1 })
    .addLabel('show_info_1')
    .addPause(3)
    .to(velazquezInfo1, 1, { opacity: 0, display: 'none' })
    .fromTo(velazquezInfo2, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(velazquezInfo2, 1, { opacity: 0, display: 'none' })
    .fromTo(velazquezInfo3, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(velazquezInfo3, 1, { opacity: 0, display: 'none' })
    .fromTo(velazquezInfo4, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addLabel('show_info_4')
    .addPause(3)
    .to(velazquezInfo4, 1, { opacity: 0, display: 'none' })
    .fromTo(velazquezInfo5, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(velazquezInfo5, 1, { opacity: 0, display: 'none' })
    .fromTo(velazquezInfo6, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(velazquezInfo6, 1, { opacity: 0, display: 'none' })
    .fromTo(velazquezInfo7, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3);
};

if (isLargeScreen()) largeScreenTimeline();
else {
  buldAllScreenTimelines(section,
    welcomeSection,
    sectionInfo,
    velazquezInfo1,
    velazquezInfo2,
    velazquezInfo3,
    velazquezInfo4,
    velazquezInfo5,
    velazquezInfo6,
    velazquezInfo7);
}
