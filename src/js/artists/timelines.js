import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const buldAllScreenTimelines = (
  section,
  welcomeSection,
  sectionInfo,
  artistInfo1,
  artistInfo2,
  artistInfo3,
  artistInfo4,
  artistInfo5,
  artistInfo6,
  artistInfo7,
) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=10000',
      pin: true,
      anticipatePin: 2,
      scrub: 2,
    },
  })
    .addLabel('welcome_effect')
    .to(welcomeSection, 1, { z: 1000 })
    .fromTo(welcomeSection,
      { backdropFilter: 'grayscale(100%) brightness(3)' },
      { backdropFilter: 'grayscale(0%) brightness(1)' }, 'welcome_effect-=-0.3')
    .fromTo(sectionInfo, 1, { opacity: 0 }, { opacity: 1 })
    .addLabel('show_info_1')
    .addPause(3)
    .to(artistInfo1, 1, { opacity: 0, display: 'none' })
    .addLabel('show_info_2')
    .fromTo(artistInfo2, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(artistInfo2, 1, { opacity: 0, display: 'none' })
    .addLabel('show_info_3')
    .fromTo(artistInfo3, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(artistInfo3, 1, { opacity: 0, display: 'none' })
    .addLabel('show_info_4')
    .fromTo(artistInfo4, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(artistInfo4, 1, { opacity: 0, display: 'none' })
    .addLabel('show_info_5')
    .fromTo(artistInfo5, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(artistInfo5, 1, { opacity: 0, display: 'none' })
    .addLabel('show_info_6')
    .fromTo(artistInfo6, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3)
    .to(artistInfo6, 1, { opacity: 0, display: 'none' })
    .addLabel('show_info_7')
    .fromTo(artistInfo7, 1, { opacity: 0 }, { opacity: 1, display: 'block' })
    .addPause(3);
};

export default buldAllScreenTimelines;
