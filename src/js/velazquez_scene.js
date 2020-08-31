import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#velazquez.artist-section');
const welcomeSection = document.querySelector('#velazquez .artist-section__welcome');
const sectionWrapper = document.querySelector('#velazquez .artist-section__wrapper');
const sectionInfo = document.querySelector('#velazquez .artist-section__info');
const velazquezInfo1 = document.querySelectorAll('#velazquez-info-1');
const velazquezInfo2 = document.querySelectorAll('#velazquez-info-2');
const velazquezInfo3 = document.querySelectorAll('#velazquez-info-3');
const velazquezInfo4 = document.querySelectorAll('#velazquez-info-4');
const velazquezInfo5 = document.querySelectorAll('#velazquez-info-5');
const velazquezInfo6 = document.querySelectorAll('#velazquez-info-6');
const velazquezInfo7 = document.querySelectorAll('#velazquez-info-7');
const velazquezImage1 = document.querySelectorAll('#velazquez-image-1');
const velazquezImage2 = document.querySelectorAll('#velazquez-image-2');
const velazquezImage3 = document.querySelectorAll('#velazquez-image-3');
const velazquezImage4 = document.querySelectorAll('#velazquez-image-4');
const velazquezImage5 = document.querySelectorAll('#velazquez-image-5');
const velazquezImage6 = document.querySelectorAll('#velazquez-image-6');
const perspective = 1000;

gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: 'top top',
    end: '+=10000',
    pin: true,
    // anticipatePin: 5,
    // markers: true,
    scrub: 1,
  },
})
  .set(sectionWrapper, { css: { transformPerspective: perspective, transformStyle: 'preserve-3d' } })
// Improve Quality
  .to(welcomeSection, 1, { css: { z: perspective } })
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
  .addPause(3)
  .fromTo(velazquezImage1, { filter: 'blur(4px)' }, { duration: 10, filter: 'blur(2px)' }, 'show_info_1')
  .fromTo(velazquezImage2, { filter: 'blur(1px)' }, { duration: 10, filter: 'blur(1px)' }, 'show_info_1')
  .fromTo(velazquezImage3, { filter: 'blur(3px)' }, { duration: 10, filter: 'blur(0px)' }, 'show_info_1')
  .fromTo(velazquezImage4, { filter: 'blur(1px)' }, { duration: 10, filter: 'blur(0px)' }, 'show_info_1')
  .fromTo(velazquezImage5, { filter: 'blur(3px)' }, { duration: 10, filter: 'blur(1px)' }, 'show_info_1')
  .fromTo(velazquezImage6, { filter: 'blur(3px)' }, { duration: 10, filter: 'blur(2px)' }, 'show_info_1');
