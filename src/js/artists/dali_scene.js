import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#dali.artist-section');
const welcomeSection = document.querySelector('#dali .artist-section__welcome');
const sectionWrapper = document.querySelector('#dali .artist-section__wrapper');
const sectionInfo = document.querySelector('#dali .artist-section__info');
const imgFrame = document.querySelector('#dali .artist-section__img-frame');
const daliInfo1 = document.querySelectorAll('#dali-info-1');
const daliInfo2 = document.querySelectorAll('#dali-info-2');
const daliInfo3 = document.querySelectorAll('#dali-info-3');
const daliInfo4 = document.querySelectorAll('#dali-info-4');
const daliInfo5 = document.querySelectorAll('#dali-info-5');
const daliInfo6 = document.querySelectorAll('#dali-info-6');
const daliInfo7 = document.querySelectorAll('#dali-info-7');
// const daliImage1 = document.querySelectorAll('#dali-image-1');
// const daliImage2 = document.querySelectorAll('#dali-image-2');
const daliImage3 = document.querySelectorAll('#dali-image-3');
const daliImage4 = document.querySelectorAll('#dali-image-4');
const perspective = 1000;

gsap.timeline({
  scrollTrigger: {
    trigger: section,
    start: 'top top',
    end: '+=10000',
    pin: true,
    anticipatePin: 1,
    // markers: true,
    scrub: 1,
  },
})
  .set(sectionWrapper, { css: { transformPerspective: perspective, transformStyle: 'preserve-3d' } })
  .addLabel('welcome_effect')
  .to(welcomeSection, 1, { css: { z: perspective } })
  .fromTo(imgFrame, { filter: 'grayscale(100%) brightness(3)' }, { duration: 1, filter: 'grayscale(0) brightness(1)' }, 'welcome_effect-=0.3')
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
  .to(daliImage3, 10, { z: -500 }, 'show_info_1')
  .to(daliImage4, 10, { z: -500 }, 'show_info_1');
