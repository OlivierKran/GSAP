gsap.to(".box", {
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
    ease: "elastic.out(1,0.3)",
});

gsap.set(".circle4", {
    x: 1240, 
    backgroundColor: 'pink',
    duration: 50,
});