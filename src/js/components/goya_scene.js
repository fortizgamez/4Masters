import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector('#goya.artist-section'),
    welcomeSection = document.querySelector('#goya .artist-section__welcome'),
    sectionWrapper = document.querySelector('#goya .artist-section__wrapper'),
    sectionInfo = document.querySelector('#goya .artist-section__info'),
    goyaInfo_1 = document.querySelectorAll('#goya-info-1'),
    goyaInfo_2 = document.querySelectorAll('#goya-info-2'),
    goyaInfo_3 = document.querySelectorAll('#goya-info-3'),
    goyaInfo_4 = document.querySelectorAll('#goya-info-4'),
    goyaInfo_5 = document.querySelectorAll('#goya-info-5'),
    goyaInfo_6 = document.querySelectorAll('#goya-info-6'),
    goyaInfo_7 = document.querySelectorAll('#goya-info-7'),
    goyaImage_1 = document.querySelectorAll('#goya-image-1'),
    goyaImage_2 = document.querySelectorAll('#goya-image-2'),
    goyaImage_3 = document.querySelectorAll('#goya-image-3'),
    goyaImage_4 = document.querySelectorAll('#goya-image-4'),
    goyaImage_5 = document.querySelectorAll('#goya-image-5'),    
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
.to(welcomeSection, 1, {z: perspective})
.fromTo(sectionInfo, 1, {opacity: 0}, {opacity: 1})
.addLabel('show_info_1')
.addPause(3)
.to(goyaInfo_1, 1, {opacity: 0, display: 'none'})
.fromTo(goyaInfo_2, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(goyaInfo_2, 1, {opacity: 0, display: 'none'})
.fromTo(goyaInfo_3, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(goyaInfo_3, 1, {opacity: 0, display: 'none'})
.fromTo(goyaInfo_4, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addLabel('show_info_4')
.addPause(3)
.to(goyaInfo_4, 1, {opacity: 0, display: 'none'})
.fromTo(goyaInfo_5, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(goyaInfo_5, 1, {opacity: 0, display: 'none'})
.fromTo(goyaInfo_6, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(goyaInfo_6, 1, {opacity: 0, display: 'none'})
.fromTo(goyaInfo_7, 1, {opacity: 0}, {opacity: 1, display: 'block'})
.addPause(3)
.to(goyaImage_1, 8, {y: 30}, 'show_info_1')
.to(goyaImage_2, 8, {y: 15}, 'show_info_1')
.to(goyaImage_3, 8, {y: 10}, 'show_info_1')
.to(goyaImage_4, 8, {scale: 1.005, z: 10}, 'show_info_1')
.to(goyaImage_5, 8, {scale: 1.005}, 'show_info_1');
