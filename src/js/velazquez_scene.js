import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#velazquez.artist-section'),
    welcomeSection = document.querySelector('#velazquez .artist-section__welcome'),
    sectionWrapper = document.querySelector('#velazquez .artist-section__wrapper'),
    sectionInfo = document.querySelector('#velazquez .artist-section__info'),
    velazquezInfo_1 = document.querySelectorAll('#velazquez-info-1'),
    velazquezInfo_2 = document.querySelectorAll('#velazquez-info-2'),
    velazquezInfo_3 = document.querySelectorAll('#velazquez-info-3'),
    velazquezInfo_4 = document.querySelectorAll('#velazquez-info-4'),
    velazquezInfo_5 = document.querySelectorAll('#velazquez-info-5'),
    velazquezInfo_6 = document.querySelectorAll('#velazquez-info-6'),
    velazquezInfo_7 = document.querySelectorAll('#velazquez-info-7'),
    velazquezImage_2 = document.querySelectorAll('#velazquez-image-2'),
    velazquezImage_3 = document.querySelectorAll('#velazquez-image-3'),
    velazquezImage_4 = document.querySelectorAll('#velazquez-image-4'),
    velazquezImage_5 = document.querySelectorAll('#velazquez-image-5'),
    velazquezImage_6 = document.querySelectorAll('#velazquez-image-6'),
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
.to(velazquezInfo_1, 1, {opacity: 0, display: 'none'})
.fromTo(velazquezInfo_2, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(velazquezInfo_2, 1, {opacity: 0, display: 'none'})
.fromTo(velazquezInfo_3, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(velazquezInfo_3, 1, {opacity: 0, display: 'none'})
.fromTo(velazquezInfo_4, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addLabel('show_info_4')
.addPause(3)
.to(velazquezInfo_4, 1, {opacity: 0, display: 'none'})
.fromTo(velazquezInfo_5, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(velazquezInfo_5, 1, {opacity: 0, display: 'none'})
.fromTo(velazquezInfo_6, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(velazquezInfo_6, 1, {opacity: 0, display: 'none'})
.fromTo(velazquezInfo_7, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(velazquezImage_3, 10, {y: -8}, 'show_info_1')
.to(velazquezImage_4, 10, {y: -5}, 'show_info_1')
.to(velazquezImage_5, 10, {y: -8}, 'show_info_1')
.to(velazquezImage_6, 10, {y: -10}, 'show_info_1');
