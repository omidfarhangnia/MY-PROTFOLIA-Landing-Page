gsap.registerPlugin(ScrollTrigger)

// scripts for changing the bg of header in scrolling
gsap.to(".header", {
    background: "rgb(70, 70, 70)",
    scrollTrigger: {
        trigger: ".header",
        start: "0% 0%",
        end: "100% 0%",
        scrub: .5
    }
})

// scripts for changing the color of text and their position in scrolling
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