import createjs from 'preload-js';
import { gsap } from 'gsap';
import setProgress from './progress-circle';
import velazquezWelcome from '../img/velazquez_black.min.svg';
import velazquezImage1 from '../img/the-triumph-of-bacchus-background.png';
import velazquezImage2 from '../img/the-triumph-of-bacchus-main-character.png';
import velazquezImage3 from '../img/the-triumph-of-bacchus-man2.png';
import velazquezImage4 from '../img/the-triumph-of-bacchus-baccus-and-man.png';
import velazquezImage5 from '../img/the-triumph-of-bacchus-man1.png';
import velazquezImage6 from '../img/the-triumph-of-bacchus-tree.png';
/* import goyaWelcome from '../img/goya_black.min.svg';
import goyaImage1 from '../img/the-third-of-may-1808-sky.png';
import goyaImage2 from '../img/the-third-of-may-1808-cathedral.png';
import goyaImage3 from '../img/the-third-of-may-1808-medow.png';
import goyaImage4 from '../img/the-third-of-may-1808-crowd.png';
import goyaImage5 from '../img/the-third-of-may-1808-main-characters.png';
import picassoWelcome from '../img/picasso_black.min.svg';
import picassoImage1 from '../img/guernica-background.png';
import picassoImage2 from '../img/guernica-bull.png';
import picassoImage3 from '../img/guernica-horse-body.png';
import picassoImage4 from '../img/guernica-horse-head.png';
import picassoImage5 from '../img/guernica-arm.png';
import picassoImage6 from '../img/guernica-victim-1.png';
import picassoImage7 from '../img/guernica-victim-2.png';
import picassoImage8 from '../img/guernica-victim-3-body.png';
import picassoImage9 from '../img/guernica-victim-3-head.png';
import picassoImage10 from '../img/guernica-victim-4-arm.png';
import picassoImage11 from '../img/guernica-victim-4-head.png';
import daliWelcome from '../img/dali_black.min.svg';
import daliImage1 from '../img/the-persistance-of-memory-sky.png';
import daliImage2 from '../img/the-persistance-of-memory-sea-and-mountains.png';
import daliImage3 from '../img/the-persistance-of-memory-mainland.png';
import daliImage4 from '../img/the-persistance-of-memory-rock.png'; */

const loading = document.querySelector('#loading');
const loadingProgress = document.querySelector('#loading__progress');
const body = document.querySelector('body');
const queue = new createjs.LoadQueue(false);
const imageMap = new Map()
  .set('#velazquez .artist-section__welcome', velazquezWelcome)
  .set('#velazquez-image-1', velazquezImage1)
  .set('#velazquez-image-2', velazquezImage2)
  .set('#velazquez-image-3', velazquezImage3)
  .set('#velazquez-image-4', velazquezImage4)
  .set('#velazquez-image-5', velazquezImage5)
  .set('#velazquez-image-6', velazquezImage6);
  /* .set('#goya .artist-section__welcome', goyaWelcome)
  .set('#goya-image-1', goyaImage1)
  .set('#goya-image-2', goyaImage2)
  .set('#goya-image-3', goyaImage3)
  .set('#goya-image-4', goyaImage4)
  .set('#goya-image-5', goyaImage5)
  .set('#picasso .artist-section__welcome', picassoWelcome)
  .set('#picasso-image-1', picassoImage1)
  .set('#picasso-image-2', picassoImage2)
  .set('#picasso-image-3', picassoImage3)
  .set('#picasso-image-4', picassoImage4)
  .set('#picasso-image-5', picassoImage5)
  .set('#picasso-image-6', picassoImage6)
  .set('#picasso-image-7', picassoImage7)
  .set('#picasso-image-8', picassoImage8)
  .set('#picasso-image-9', picassoImage9)
  .set('#picasso-image-10', picassoImage10)
  .set('#picasso-image-11', picassoImage11)
  .set('#dali .artist-section__welcome', daliWelcome)
  .set('#dali-image-1', daliImage1)
  .set('#dali-image-2', daliImage2)
  .set('#dali-image-3', daliImage3)
  .set('#dali-image-4', daliImage4) */

const buildManifiest = () => {
  const manifest = [];
  imageMap.forEach((src, id) => {
    manifest.push({ id, src });
  });
  return manifest;
};

const handleOnProgressChange = (progress) => {
  loadingProgress.innerHTML = `${progress}%`;
  setProgress(progress);
};

const handleOnLoad = () => {
  imageMap.forEach((src, id) => {
    const imgSource = queue.getItem(id).src;
    document.querySelector(id).style.backgroundImage = `url(${imgSource})`;
  });

  gsap.timeline()
    .to(loading, 1, { autoAlpha: 0 })
    .set(body, { overflow: 'auto' }, '-=1');
};

queue.on('complete', handleOnLoad);
queue.on('progress', (e) => handleOnProgressChange(Math.floor(e.progress * 100)));
const manifest = buildManifiest();
queue.loadManifest(manifest);
