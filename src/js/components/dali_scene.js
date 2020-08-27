import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#dali.artist-section'),
    welcomeSection = document.querySelector('#dali .artist-section__welcome'),
    sectionWrapper = document.querySelector('#dali .artist-section__wrapper'),
    sectionInfo = document.querySelector('#dali .artist-section__info'),
    daliInfo_1 = document.querySelectorAll('#dali-info-1'),
    daliInfo_2 = document.querySelectorAll('#dali-info-2'),
    daliInfo_3 = document.querySelectorAll('#dali-info-3'),
    daliInfo_4 = document.querySelectorAll('#dali-info-4'),
    daliInfo_5 = document.querySelectorAll('#dali-info-5'),
    daliInfo_6 = document.querySelectorAll('#dali-info-6'),
    daliInfo_7 = document.querySelectorAll('#dali-info-7'),
    daliImage_1 = document.querySelectorAll('#dali-image-1'),
    daliImage_2 = document.querySelectorAll('#dali-image-2'),
    daliImage_3 = document.querySelectorAll('#dali-image-3'),
    daliImage_4 = document.querySelectorAll('#dali-image-4'),
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
.to(daliInfo_1, 1, {opacity: 0, display: 'none'})
.fromTo(daliInfo_2, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(daliInfo_2, 1, {opacity: 0, display: 'none'})
.fromTo(daliInfo_3, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(daliInfo_3, 1, {opacity: 0, display: 'none'})
.fromTo(daliInfo_4, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addLabel('show_info_4')
.addPause(3)
.to(daliInfo_4, 1, {opacity: 0, display: 'none'})
.fromTo(daliInfo_5, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(daliInfo_5, 1, {opacity: 0, display: 'none'})
.fromTo(daliInfo_6, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(daliInfo_6, 1, {opacity: 0, display: 'none'})
.fromTo(daliInfo_7, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(daliImage_2, 10, {y: -30}, 'show_info_1')
.to(daliImage_3, 10, {y: -10}, 'show_info_1')
.to(daliImage_4, 10, {y: -5}, 'show_info_1');
