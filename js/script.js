gsap.registerPlugin(ScrollTrigger)


// the first animation for header
gsap.timeline({
    delay: 1
})
.fromTo(".header__hello__part > h1",
    {
        yPercent: "+=120"
    },
    {
        yPercent: 0,
        duration: .7,
        ease: "power4.out"
    }
)
.fromTo(".header__you__part > h1",
    {
        yPercent: "-=120"
    },
    {
        yPercent: 0,
        duration: .4,
        ease: "power4.out"
    }
)
.fromTo(".page__prag", 
    {
        x: -30,
        opacity: 0
    },
    {
        x: 0,
        duration: .6,
        ease: "power4.out",
        opacity: 1
    }
)

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


// animation for sections
let projectsData = gsap.utils.toArray(".projects .project__data__container");
projectsData.forEach((element) => {
    let dataMembers = element.querySelectorAll("h3, h2, p");

    gsap.set(dataMembers, {opacity: 0, y: 30})
    gsap.set(element, {scale: 0})

    gsap.timeline({
        scrollTrigger:{
            trigger: element,
            start: "0% 80%",
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

// animation for footer
gsap.fromTo(".footer__links",
    {
        y: -30,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        stagger: .2,
        ease: "power4.in",
        scrollTrigger: {
            trigger: "#footer",
            start: "0% 80%",
            toggleActions: "play complete complete reverse",
            markers: true
        }
    }
)