import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#picasso.artist-section'),
    welcomeSection = document.querySelector('#picasso .artist-section__welcome'),
    sectionWrapper = document.querySelector('#picasso .artist-section__wrapper'),
    sectionInfo = document.querySelector('#picasso .artist-section__info'),
    picassoInfo_1 = document.querySelectorAll('#picasso-info-1'),
    picassoInfo_2 = document.querySelectorAll('#picasso-info-2'),
    picassoInfo_3 = document.querySelectorAll('#picasso-info-3'),
    picassoInfo_4 = document.querySelectorAll('#picasso-info-4'),
    picassoInfo_5 = document.querySelectorAll('#picasso-info-5'),
    picassoInfo_6 = document.querySelectorAll('#picasso-info-6'),
    picassoInfo_7 = document.querySelectorAll('#picasso-info-7'),
    picassoImage_1 = document.querySelectorAll('#picasso-image-1'),
    picassoImage_2 = document.querySelectorAll('#picasso-image-2'),
    picassoImage_3 = document.querySelectorAll('#picasso-image-3'),
    picassoImage_4 = document.querySelectorAll('#picasso-image-4'),
    picassoImage_5 = document.querySelectorAll('#picasso-image-5'),
    picassoImage_6 = document.querySelectorAll('#picasso-image-6'),
    picassoImage_7 = document.querySelectorAll('#picasso-image-7'),
    picassoImage_8 = document.querySelectorAll('#picasso-image-8'),
    picassoImage_9 = document.querySelectorAll('#picasso-image-9'),
    picassoImage_10 = document.querySelectorAll('#picasso-image-10'),
    picassoImage_11 = document.querySelectorAll('#picasso-image-11'),
    perspective = 1000; 

gsap.timeline({
    scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=15000',
        pin: true,
        anticipatePin: 1,
        // markers: true,
        scrub: 1            
    }
})
.set(sectionWrapper, {css:{transformPerspective: perspective, transformStyle: 'preserve-3d'}})
// Improve Quality
.to(welcomeSection, 1, {css: {z: perspective}})
.fromTo(sectionInfo, 1, {opacity: 0}, {opacity: 1})
.addLabel('show_info_1')
.addPause(3)
.to(picassoInfo_1, 1, {opacity: 0, display: 'none'})
.fromTo(picassoInfo_2, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(picassoInfo_2, 1, {opacity: 0, display: 'none'})
.fromTo(picassoInfo_3, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(picassoInfo_3, 1, {opacity: 0, display: 'none'})
.fromTo(picassoInfo_4, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addLabel('show_info_4')
.addPause(3)
.to(picassoInfo_4, 1, {opacity: 0, display: 'none'})
.fromTo(picassoInfo_5, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(picassoInfo_5, 1, {opacity: 0, display: 'none'})
.fromTo(picassoInfo_6, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(picassoInfo_6, 1, {opacity: 0, display: 'none'})
.fromTo(picassoInfo_7, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(picassoImage_1, 10, {y: -15}, 'show_info_1')
.to(picassoImage_2, 10, {y: -10}, 'show_info_1')
.to(picassoImage_3, 10, {y: -8}, 'show_info_1')
.to(picassoImage_4, 10, {y: -6}, 'show_info_1')
.to(picassoImage_5, 10, {y: -20}, 'show_info_1')
.to(picassoImage_6, 10, {y: -11, scale: 1.015}, 'show_info_1')
.to(picassoImage_7, 10, {y: -2}, 'show_info_1')
.to(picassoImage_8, 10, {y: -20, scale: 1.015}, 'show_info_1')
.to(picassoImage_9, 10, {y: -20, scale: 1.015}, 'show_info_1')
.to(picassoImage_10, 10, {y: -10, scale: 1.015}, 'show_info_1')
.to(picassoImage_11, 10, {x: -30, y: -18, scale: 1.05}, 'show_info_1');
