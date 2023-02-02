gsap.registerPlugin(ScrollTrigger)

gsap.to(".header", {
    background: "rgb(70, 70, 70)",
    scrollTrigger: {
        trigger: ".header",
        start: "0% 0%",
        end: "100% 0%",
        scrub: .5
    }
})


gsap.to(".data__container, .arrow__container", {
    y: "80vh",
    color: "rgb(51, 51, 51)",
    scrollTrigger: {
        trigger: ".header",
        start: "0% 0%",
        end: "100% 0%",
        scrub: .5,
    }
})