const header = document.getElementById('header'),
      hed1 = document.getElementsByTagName('h1'),
      hed2 = document.getElementsByTagName('h2'),
      intro = document.getElementsByClassName('intro'),
      firstItem = document.getElementsByClassName('list')[0].firstElementChild,
      secondItem = document.getElementsByClassName('list')[0].children[1],
      img = document.getElementsByTagName('img'),
      lastItem = document.getElementsByClassName('list')[0].lastElementChild,
      tl = new TimelineLite();


(function animantiStart() {
  tl
    .from(hed1,1,{autoAlpha: 0, ease: Power1.easeOut})
    .from(hed2,1,{autoAlpha: 0, ease: Power1.easeOut}, "-= 0.5")
    .from(intro,1,{autoAlpha: 0, ease: Power1.easeOut}, "-= 0.5")
    .from(img,1,{autoAlpha: 0, ease: Power1.easeOut}, "-= 0.5")
    .from(firstItem ,1,{x: 40, autoAlpha: 0, ease: Power1.easeOut}, "-= 0.5")
    .from(secondItem ,1,{x: 40, autoAlpha: 0, ease: Power1.easeOut}, "-= 0.5")
    .from(lastItem,1,{x: 30, autoAlpha: 0, ease: Power1.easeOut}, "-= 0.5");


  // TweenMax.from(hed2,1,{autoAlpha: 0, delay: 1});
})();
