"use strict";

$(function () {
  $('.play_button').on('click', function () {
    console.log('asd');
    gsap.to('.main_box', {
      duration: 1,
      width: 1000,
      height: 300,
      x: 500,
      y: 500,
      autoAlpha: 0.6,
      backgroundColor: 'green'
    });
  });
  $('#play_button').on('click', function () {
    var tl = gsap.timeline();
    tl.to('.main_box', {
      duration: 1,
      x: 400
    }).to('.main_box2', {
      duration: 1,
      y: 400
    }).to('.main_box2', {
      duration: 1,
      y: 450
    }).to('.main_box2', {
      duration: 1,
      y: 500
    }).to('.main_box2', {
      duration: 1,
      y: Infinity
    });
  });
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.gsap_box',
      pin: true,
      strart: 'center center',
      markers: true,
      end: '+=20',
      scrub: 1
    }
  }); //동영상 스크롤 트리거 연결

  var canvas = $('canvas')[0];
  var ctx = canvas.getContext('2d');

  var resizeCanvas = function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  $(window).resize(resizeCanvas);
  resizeCanvas();
  var imageCount = 121;
  var image = [];

  for (var i = 0; i < imageCount; i++) {
    var img = new Image();
    img.src = "./images/".concat(i, ".jpg");
    image.push(img);
  }

  image[0].onLoad = function () {
    ctx.drawImage(image[0], 0, 0, canvas.width, canvas.height);
  };

  var canvasTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: 'canvas',
      pin: true,
      strart: 'center center',
      markers: true,
      end: '+=5000',
      scrub: 1,
      onToggle: function onToggle(self) {
        return console.log('toggled, isActive:', self.isActive);
      },
      onUpdate: function onUpdate(self) {
        var imageNumber = Math.floor(self.progress * (imageCount - 1));
        ctx.drawImage(image[imageNumber], 0, 0, canvas.width, canvas.height);
      },
      onRefresh: function onRefresh(_ref) {
        var progress = _ref.progress,
            direction = _ref.direction,
            isActive = _ref.isActive;
        return console.log(progress, direction, isActive);
      },
      onScrubComplete: function onScrubComplete(_ref2) {
        var progress = _ref2.progress,
            direction = _ref2.direction,
            isActive = _ref2.isActive;
        return console.log(progress, direction, isActive);
      }
    }
  });
});