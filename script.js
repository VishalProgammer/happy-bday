gsap.registerPlugin(ScrollTrigger);

gsap.from(".header", {
    y: -100,
    duration: 1,
    ease: "bounce.out"
});

const introTl = gsap.timeline();

introTl.to(".con1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
})
.from(".img-wrapper", {
    scale: 0,
    rotation: 360,
    duration: 0.8,
    ease: "back.out(1.7)"
}, "-=0.5") 
.from(".intro-text h1", {
    opacity: 0,
    x: -50,
    duration: 0.6
}, "-=0.5")
.from(".intro-text p", {
    opacity: 0,
    x: -50,
    duration: 0.6
}, "-=0.3");

const sections = document.querySelectorAll(".container:not(.con1)");

sections.forEach((section) => {
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%", 
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    });
    
    const listItems = section.querySelectorAll("li");
    gsap.from(listItems, {
        scrollTrigger: {
            trigger: section,
            start: "top 75%"
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1, 
        ease: "power1.out"
    });
});

gsap.to(".footer h3", {
    scale: 1.1,
    duration: 0.8,
    repeat: -1, 
    yoyo: true, 
    ease: "sine.inOut"
});