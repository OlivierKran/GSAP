gsap.to("#box1", {
    x: 500,
    y: -200,
    duration: 5,
    rotate: 360,
    backgroundColor: "#004b73",
    repeat: 1,
    yoyo: true,
    ease: "bounce.out"
});

gsap.to(".circle", {
    x: 540,
    backgroundColor: 'blue',
    duration: 20,
});

gsap.from(".circle2", {
    x: 540,
    backgroundColor: 'purple',
    duration: 10,
    ease: "power1.inOut",
});

gsap.fromTo(".circle3", {
    y: 100,
    x: 800,
    backgroundColor: 'orange',
    duration: 20,
}, {
    y: -540,
    backgroundColor: 'red',
    duration: 5,
    repeat: 2,
    yoyo: true,
    ease: "SlowMo.inOut",
});

gsap.set(".circle4", {
    x: 1240,
    backgroundColor: 'pink',
    duration: 50,
});

gsap.to(".box", {
    duration: 1,
    rotation: 360,
    opacity: 1,
    delay: 0.5,
    stagger: 0.1, // stagger in from the left with a 0.1 second gap in between animations
    ease: "sine.out"
});

gsap.to(".box", {
    duration: 1,
    rotation: 360,
    opacity: 1,
    delay: 0.5,
    stagger: 0.1, // stagger in from the left with a 0.1 second gap in between animations
    ease: "sine.out"
});

document.querySelectorAll(".box").forEach((box, index) => {
    box.addEventListener("click", () => {
        gsap.to(".box", {
            duration: 0.5,
            opacity: 0,
            y: -100,
            stagger: {
                from: index, // stagger in from the clicked element's index
                amount: 1 // spread the entire stagger out over 1 second
            },
            ease: "back.in",
            overwrite: "auto"
        });
    });
});
