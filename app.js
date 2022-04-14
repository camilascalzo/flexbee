gsap.registerPlugin(ScrollTrigger);


// gsap.from("#hero-img", {duration:1.5, opacity: 0, scale: 0.3, ease:"back"});

let duration = .5;
let box;

gsap.to("#box1", {
    scrollTrigger: {
        trigger: "#box1",
        start: "top center",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.9, 0.7, false)",
    x: 0
});
gsap.to("#box2", {
    scrollTrigger: {
        trigger: "#box2",
        start: "top center",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});

gsap.to("#box3", {
    scrollTrigger: {
        trigger: "#box3",
        start: "top center",
        //markers: true,
        toggleActions: "play none none none"
    },
    duration: duration,
    ease: "slow(0.7, 0.7, false)",
    x: 0
});