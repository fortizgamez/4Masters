import createjs from 'preload-js';
import { gsap } from 'gsap';
import setProgress from './progress-circle';
import { isLargeScreen } from './utils';

import velazquezImageSmall from '../img/the-triumph-of-bacchus.jpg';
import velazquezWelcome from '../img/velazquez_black.min.svg';
import velazquezImage1 from '../img/the-triumph-of-bacchus-background.png';
import velazquezImage2 from '../img/the-triumph-of-bacchus-main-character.png';
import velazquezImage3 from '../img/the-triumph-of-bacchus-man2.png';
import velazquezImage4 from '../img/the-triumph-of-bacchus-baccus-and-man.png';
import velazquezImage5 from '../img/the-triumph-of-bacchus-man1.png';
import velazquezImage6 from '../img/the-triumph-of-bacchus-tree.png';
import goyaImageSmall from '../img/the-third-of-may-1808.jpg';
import goyaWelcome from '../img/goya_black.min.svg';
import goyaImage1 from '../img/the-third-of-may-1808-sky.png';
import goyaImage2 from '../img/the-third-of-may-1808-cathedral.png';
import goyaImage3 from '../img/the-third-of-may-1808-medow.png';
import goyaImage4 from '../img/the-third-of-may-1808-crowd.png';
import goyaImage5 from '../img/the-third-of-may-1808-main-characters.png';
import picassoImageSmall from '../img/guernica.jpg';
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
import daliImageSmall from '../img/the-persistance-of-memory.jpg';
import daliWelcome from '../img/dali_black.min.svg';
import daliImage1 from '../img/the-persistance-of-memory-sky.png';
import daliImage2 from '../img/the-persistance-of-memory-sea-and-mountains.png';
import daliImage3 from '../img/the-persistance-of-memory-mainland.png';
import daliImage4 from '../img/the-persistance-of-memory-rock.png';

const loading = document.querySelector('#loading');
const loadingProgress = document.querySelector('#loading__progress');
const body = document.querySelector('body');
const queue = new createjs.LoadQueue(false);
const imageMap = new Map();

const buildArtistImageMap = (artist, welcomeImg, smallImg, imgs) => {
  imageMap.set(`#${artist} .artist-section__welcome`, welcomeImg);
  if (!isLargeScreen()) {
    imageMap.set(`#${artist}-image-small`, smallImg);
  } else {
    imgs.forEach((img, index) => {
      imageMap.set(`#${artist}-image-${index + 1}`, img);
    });
  }
};

buildArtistImageMap('velazquez',
  velazquezWelcome,
  velazquezImageSmall,
  [
    velazquezImage1,
    velazquezImage2,
    velazquezImage3,
    velazquezImage4,
    velazquezImage5,
    velazquezImage6,
  ]);

buildArtistImageMap('goya',
  goyaWelcome,
  goyaImageSmall,
  [
    goyaImage1,
    goyaImage2,
    goyaImage3,
    goyaImage4,
    goyaImage5,
  ]);

buildArtistImageMap('picasso',
  picassoWelcome,
  picassoImageSmall,
  [
    picassoImage1,
    picassoImage2,
    picassoImage3,
    picassoImage4,
    picassoImage5,
    picassoImage6,
    picassoImage7,
    picassoImage8,
    picassoImage9,
    picassoImage10,
    picassoImage11,
  ]);

buildArtistImageMap('dali',
  daliWelcome,
  daliImageSmall,
  [
    daliImage1,
    daliImage2,
    daliImage3,
    daliImage4,
  ]);

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
