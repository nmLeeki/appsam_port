$(() => {
    $('.play_button').on('click', function () {
        console.log('asd');
        gsap.to('.main_box', {
            duration: 1,
            width: 1000,
            height: 300,
            x: 500,
            y: 500,
            autoAlpha: 0.6,
            backgroundColor: 'green',
        });
    });
    $('#play_button').on('click', function () {
        let tl = gsap.timeline();
        tl.to('.main_box', { duration: 1, x: 400 })
            .to('.main_box2', { duration: 1, y: 400 })
            .to('.main_box2', { duration: 1, y: 450 })
            .to('.main_box2', { duration: 1, y: 500 })
            .to('.main_box2', { duration: 1, y: Infinity });
    });
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.gsap_box',
            pin: true,
            strart: 'center center',
            markers: true,
            end: '+=20',
            scrub: 1,
        },
    });

    //동영상 스크롤 트리거 연결
    const canvas = $('canvas')[0];
    const ctx = canvas.getContext('2d');
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    $(window).resize(resizeCanvas);
    resizeCanvas();
    const imageCount = 121;
    const image = [];
    for (let i = 0; i < imageCount; i++) {
        const img = new Image();
        img.src = `./images/${i}.jpg`;
        image.push(img);
    }
    image[0].onLoad = () => {
        ctx.drawImage(image[0], 0, 0, canvas.width, canvas.height);
    };
    let canvasTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: 'canvas',
            pin: true,
            strart: 'center center',
            markers: true,
            end: '+=5000',
            scrub: 1,
            onToggle: (self) => console.log('toggled, isActive:', self.isActive),
            onUpdate: (self) => {
                const imageNumber = Math.floor(self.progress * (imageCount - 1));
                ctx.drawImage(image[imageNumber], 0, 0, canvas.width, canvas.height);
            },
            onRefresh: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
            onScrubComplete: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
        },
    });
});
