import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#goya.artist-section');
const welcomeSection = document.querySelector('#goya .artist-section__welcome');
const sectionWrapper = document.querySelector('#goya .artist-section__wrapper');
const sectionInfo = document.querySelector('#goya .artist-section__info');
const goyaInfo1 = document.querySelectorAll('#goya-info-1');
const goyaInfo2 = document.querySelectorAll('#goya-info-2');
const goyaInfo3 = document.querySelectorAll('#goya-info-3');
const goyaInfo4 = document.querySelectorAll('#goya-info-4');
const goyaInfo5 = document.querySelectorAll('#goya-info-5');
const goyaInfo6 = document.querySelectorAll('#goya-info-6');
const goyaInfo7 = document.querySelectorAll('#goya-info-7');
const goyaImage1 = document.querySelectorAll('#goya-image-1');
const goyaImage2 = document.querySelectorAll('#goya-image-2');
const goyaImage3 = document.querySelectorAll('#goya-image-3');
const goyaImage4 = document.querySelectorAll('#goya-image-4');
const goyaImage5 = document.querySelectorAll('#goya-image-5');
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
// Improve Quality
  .to(welcomeSection, 1, { z: perspective })
  .fromTo(sectionInfo, 1, { opacity: 0 }, { opacity: 1 })
  .addLabel('show_info_1')
  .addPause(3)
  .to(goyaInfo1, 1, { opacity: 0, display: 'none' })
  .fromTo(goyaInfo2, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(goyaInfo2, 1, { opacity: 0, display: 'none' })
  .fromTo(goyaInfo3, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(goyaInfo3, 1, { opacity: 0, display: 'none' })
  .fromTo(goyaInfo4, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addLabel('show_info_4')
  .addPause(3)
  .to(goyaInfo4, 1, { opacity: 0, display: 'none' })
  .fromTo(goyaInfo5, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(goyaInfo5, 1, { opacity: 0, display: 'none' })
  .fromTo(goyaInfo6, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(goyaInfo6, 1, { opacity: 0, display: 'none' })
  .fromTo(goyaInfo7, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
  .addPause(3)
  .to(goyaImage1, 8, { y: 30 }, 'show_info_1')
  .to(goyaImage2, 8, { y: 15 }, 'show_info_1')
  .to(goyaImage3, 8, { y: 10 }, 'show_info_1')
  .to(goyaImage4, 8, { scale: 1.005, z: 10 }, 'show_info_1')
  .to(goyaImage5, 8, { scale: 1.005 }, 'show_info_1');
