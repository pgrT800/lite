// "use strict"

// window.onload = function(){
//     const paralax = document.querySelector('.paralax');

//     if(paralax){
//         const speed = 0.05;

//         let positionX = 0, positionY =0;
//         let Xprocent = 0, Yprocent = 0;

//         function setMouseParalaxStyle(){
//             const distX = Xprocent - positionX;
//             const distY = Yprocent - positionY;

//             positionX = positionX + (distX * speed);
//             positionY = positionY + (distY * speed);

//             paralax.style.cssText = 'transform: translate($(positionX / forparalax)%,$(positionY / forparalax)%);';

//             requestAnimationFrame(setMouseParalaxStyle);
//         }
//         setMouseParalaxStyle();

//         paralax.addEventListener('mousemove',function(e){
//             const paralaxWidth = paralax.offsetWidth;
//             const paralaxHight = paralax.offsetHight;

//             const coordX = e.pageX - paralaxWidth / 2;
//             const coordY = e.pageY - paralaxHight / 2;

//             Xprocent = coordX / paralaxWidth * 100;
//             Yprocent = coordY / paralaxHight * 100;

//         });
//     }

// }

// let offset = 0; //смещение от левого края
// const sliderline = document.querySelector('.slider-line');

// document.querySelector('.next').addEventListener('click', function(){
//     offset = offset + 700;
//     sliderline.style.left = offset + 'px';
// });
import Swiper from './package/swiper-element';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

var swiper = new swiper(".mySwiper",{
 spaceBetween:30,
 navigation:{
    nextEL:"swiper-button-next",
    prevEL:".swiper-button-prev",
 },
 pagination:{
    el:".swiper-pagination",
 },
 mousewhell:true,
 keyboard:true,
});