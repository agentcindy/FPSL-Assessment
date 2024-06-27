// Question 3: Optimize the following GSAP animation for better performance:

import { gsap } from 'gsap';

function animateElements() {
  const elements = document.querySelectorAll('.animate-me');

  elements.forEach((el, index) => {
    gsap.to(el, {
      duration: 1,
      x: 100,
      y: 50,
      rotation: 360,
      scale: 1.5,
      opacity: 0.5,
      stagger: 0.01, // staggering bc looks like were annimating multiple elements since were looping through an array of elements
      ease: 'power2.inOut',
      delay: index * 0.1
    });
  });
}

animateElements();