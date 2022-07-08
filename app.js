gsap.registerPlugin(ScrollTrigger);


// gsap.from("#hero-img", {duration:1.5, opacity: 0, scale: 0.3, ease:"back"});

let duration = 2;
let box;

gsap.to("#box1", {
    scrollTrigger: {
        trigger: "#main-wrapper",
        start: "top 30%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.9, 0.7, false)",
    x: 0
});
gsap.to("#box2", {
    scrollTrigger: {
        trigger: "#box1",
        start: "top 60%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box3", {
    scrollTrigger: {
        trigger: "#box2",
        start: "top 50%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box4", {
    scrollTrigger: {
        trigger: "#box2",
        start: "top 40%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box5", {
    scrollTrigger: {
        trigger: "#main-wrapper",
        start: "top 40%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box6", {
    scrollTrigger: {
        trigger: "#box5",
        start: "top 60%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box7", {
    scrollTrigger: {
        trigger: "#box6",
        start: "top 60%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box8", {
    scrollTrigger: {
        trigger: "#box6",
        start: "top 50%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box9", {
    scrollTrigger: {
        trigger: "#main-wrapper",
        start: "top 40%",
       // markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});


gsap.to("#box10", {
    scrollTrigger: {
        trigger: "#box9",
        start: "top 60%",
       // markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});
gsap.to("#box11", {
    scrollTrigger: {
        trigger: "#box10",
        start: "top 60%",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});