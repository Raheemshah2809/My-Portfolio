
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(DrawSVGPlugin);

function circle1() {
	let t = gsap.timeline();
  t.to(".circle1", {
    delay: 0.1,
    duration: 0.4,
    ease: "power3.in",
    opacity: 1,
    cy: 255
  })
  .to(".circle1", {
    duration: 0.5,
    //ease: "power2.out",
    cy: 243,
    repeat: 2, 
    repeatDelay: 0.075,
    yoyo: true,
  })

	return t;
}

function circle2() {
  let t = gsap.timeline();
  t.to(".circle2", {
    delay: 0.2,
    duration: 0.35,
    ease: "power3.in",
    opacity: 1,
    cy: 267
  })
  .to(".circle2", {
    duration: 0.45,
    //ease: "power2.out",
    cy: 243,
    repeat: 2, 
    repeatDelay: 0.175, 
    yoyo: true
  })

  return t;
}

function circle3() {
  let t = gsap.timeline();
  t.to(".circle3", {
    delay: 0.3,
    duration: 0.3,
    ease: "power3.in",
    opacity: 1,
    cy: 279
  })
  .to(".circle3", {
    duration: 0.4,
    //ease: "power2.out",
    cy: 243,
    repeat: 2, 
    repeatDelay: 0.275, 
    yoyo: true
  })

  return t;
}

gsap.set(".tick", {
  visibility:"visible"
});

let master = gsap.timeline({ 
  paused: true, 
  repeat: -1, 
  repeatDelay: 0.5
}); 

master.set(".tick", {
    drawSVG: "0% 0%"
  })
  .to("#main-circle", {
    duration: 0.5, 
    motionPath: {
      path: "#path1",
      align: "#path1",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
    }
  })
  .add(circle1())
  .add(circle2(), "-=2.075")
  .add(circle3(), "-=2.175")
  .to(".circle3", {
    duration: 0.1,
    opacity: 0
  })
  .to(".circle2", {
    duration: 0.1,
    opacity: 0
  })
  .to(".circle1", {
    duration: 0.1,
    opacity: 0
  })
  .to("#main-circle", {
    duration: 0.2, 
    opacity: 0,
    motionPath: {
      path: "#path2",
      align: "#path2",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
    }
  })
  .to(".tick", {
    duration: 0.3,
    drawSVG: "100%",
    stagger: .1
  })
  .set(".pink-tick", {
    drawSVG: "0% 0%"
  })
  .to(".white-tick", {
    duration: 0.15,
    drawSVG: "50% 100%"
  })
  .to(".white-tick", {
    duration: 0.15,
    drawSVG: "100% 100%"
  })
  .set("#main-circle", {
    opacity: 1
  })
  .to("#main-circle", {
    duration: 0.15, 
    motionPath: {
      path: "#path3",
      align: "#path3",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
    }
  })
  .to("#main-circle", {
    duration: 0.5, 
    ease: "power3.in",
    motionPath: {
      path: "#path4",
      align: "#path4",
      alignOrigin: [0.5, 0.5],
      autoRotate: true
    }
})

master.play();


