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


let projectsData = gsap.utils.toArray(".projects .project__data__container");

projectsData.forEach((element) => {
    let dataMembers = element.querySelectorAll("h3, h2, p");

    gsap.set(dataMembers, {opacity: 0, y: 30})
    gsap.set(element, {scale: 0})

    gsap.timeline({
        scrollTrigger:{
            trigger: element,
            start: "0% 60%",
            toggleActions: "play complete complete reverse"
        }
    })
    .to(element, {
        scale: 1,
        duration: .8,
        ease: "elastic.out(1, 1)",
    })
    .to(dataMembers, {
        opacity: 1,
        y: 0,
        stagger: .2
    })
})