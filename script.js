/* =========================================================
   EL JARDÍN SECRETO
   JavaScript + GSAP + Canvas
========================================================= */


/* =========================================================
   ELEMENTOS
========================================================= */

const intro =
    document.getElementById("intro");

const garden =
    document.getElementById("garden");

const enterButton =
    document.getElementById("enterGarden");

const messageButton =
    document.getElementById("messageButton");

const letterOverlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");

const canvas =
    document.getElementById("particlesCanvas");

const ctx =
    canvas.getContext("2d");

const petalsContainer =
    document.getElementById("petals");


/* =========================================================
   ELEMENTOS DE LA CASITA
========================================================= */

const houseLight =
    document.getElementById("houseLight");

const houseMessage =
    document.getElementById("houseMessage");


/* =========================================================
   ENTRAR AL JARDÍN
========================================================= */

enterButton.addEventListener("click", () => {

    const gardenMusic = document.getElementById("gardenMusic");

    gardenMusic.volume = 0.4;
    gardenMusic.play();

    const timeline =
        gsap.timeline();

    timeline

        .to(".intro-content", {

            opacity: 0,

            y: -30,

            duration: .7,

            ease: "power2.in"

        })

        .to(".intro-flower", {

            opacity: 0,

            scale: 1.15,

            duration: .6

        }, "<")

        .to(intro, {

            opacity: 0,

            duration: 1,

            ease: "power2.inOut",

            onComplete: () => {

                intro.style.display =
                    "none";

                gsap.to(garden, {

                    opacity: 1,

                    duration: 1.2,

                    ease: "power2.out"

                });

                startGardenAnimations();

            }

        });

});


/* =========================================================
   INICIAR ANIMACIONES
========================================================= */

function startGardenAnimations() {

    animateClouds();

    animateFlowers();

    animateButterflies();

    animateBees();

    animateAnimals();

    startParticles();

    startFallingPetals();

}


/* =========================================================
   NUBES
========================================================= */

function animateClouds() {

    gsap.to(".cloud-1", {

        x: 90,

        duration: 18,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    gsap.to(".cloud-2", {

        x: -100,

        duration: 23,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    gsap.to(".cloud-3", {

        x: 70,

        duration: 20,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

}


/* =========================================================
   FLORES
========================================================= */

function animateFlowers() {

    gsap.to(".sunflower", {

        rotation: 2,

        duration: 2.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        stagger: {
            each: .3
        }

    });

    gsap.to(".blue-tulip", {

        rotation: 2,

        duration: 3,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        stagger: {
            each: .4
        }

    });

    gsap.to(".gerbera", {

        rotation: -2,

        duration: 2.8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        stagger: {
            each: .3
        }

    });

}


/* =========================================================
   MARIPOSAS
========================================================= */

function animateButterflies() {

    gsap.to(".butterfly-1", {

        x: 65,

        y: -35,

        rotation: 4,

        duration: 4.8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    gsap.to(".butterfly-2", {

        x: -55,

        y: 35,

        rotation: -4,

        duration: 5.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: .8

    });

    gsap.to(".butterfly-3", {

        x: 45,

        y: -25,

        rotation: 4,

        duration: 6.2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1.5

    });

}


/* =========================================================
   ABEJAS
========================================================= */

function animateBees() {

    gsap.to(".bee-1", {

        x: 70,

        y: -30,

        rotation: 8,

        duration: 3.2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    gsap.to(".bee-2", {

        x: -60,

        y: 35,

        rotation: -8,

        duration: 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1

    });

}


/* =========================================================
   ANIMALES
========================================================= */

function animateAnimals() {

    gsap.to(".turtle-1", {

        x: 25,

        duration: 5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    gsap.to(".turtle-2", {

        x: -20,

        duration: 6,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1

    });

    gsap.to(".turtle-3", {

        x: 18,

        duration: 5.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: .5

    });

    gsap.to(".frog-1", {

        y: -7,

        duration: 1.8,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    gsap.to(".frog-2", {

        y: -6,

        duration: 2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: .5

    });

    gsap.to(".lizard-1", {

        x: 15,

        duration: 4,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });

    gsap.to(".lizard-2", {

        x: -15,

        duration: 4.5,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut",

        delay: 1

    });

}


/* =========================================================
   HOVER FLORES
========================================================= */

document
    .querySelectorAll(
        ".sunflower, .blue-tulip, .gerbera"
    )
    .forEach(flower => {

        flower.addEventListener(
            "mouseenter",
            () => {

                gsap.to(flower, {

                    scale: "+=0.12",

                    duration: .3,

                    ease: "back.out(2)"

                });

            }
        );

        flower.addEventListener(
            "mouseleave",
            () => {

                gsap.to(flower, {

                    scale: "-=0.12",

                    duration: .3,

                    ease: "power2.out"

                });

            }
        );

    });


/* =========================================================
   TORTUGAS
========================================================= */

document
    .querySelectorAll(".turtle")
    .forEach(turtle => {

        turtle.addEventListener(
            "click",
            () => {

                gsap.fromTo(

                    turtle,

                    {
                        scale: 1
                    },

                    {
                        scale: 1.15,

                        duration: .2,

                        yoyo: true,

                        repeat: 1,

                        ease: "power2.out"

                    }

                );

                createRipple(turtle);

            }
        );

    });


function createRipple(element) {

    const ripple =
        document.createElement("div");

    ripple.style.position =
        "absolute";

    ripple.style.width =
        "10px";

    ripple.style.height =
        "10px";

    ripple.style.border =
        "2px solid rgba(255,255,255,.7)";

    ripple.style.borderRadius =
        "50%";

    ripple.style.pointerEvents =
        "none";

    const rect =
        element.getBoundingClientRect();

    ripple.style.left =
        rect.left +
        rect.width / 2 +
        "px";

    ripple.style.top =
        rect.top +
        rect.height / 2 +
        "px";

    document.body.appendChild(
        ripple
    );

    gsap.to(ripple, {

        width: 80,

        height: 80,

        x: -35,

        y: -35,

        opacity: 0,

        duration: .8,

        onComplete: () => {

            ripple.remove();

        }

    });

}



/* =========================================================
   CANVAS
========================================================= */

let particles = [];


function resizeCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}

resizeCanvas();


window.addEventListener(
    "resize",
    resizeCanvas
);


function createParticle() {

    return {

        x:
            Math.random() *
            canvas.width,

        y:
            canvas.height *
            (.2 + Math.random() * .75),

        size:
            Math.random() * 2 + .5,

        speedX:
            (Math.random() - .5) * .25,

        speedY:
            -(Math.random() * .25 + .05),

        opacity:
            Math.random() * .5 + .2

    };

}


function startParticles() {

    particles = [];

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        particles.push(
            createParticle()
        );

    }

    animateParticles();

}


function animateParticles() {

    ctx.clearRect(

        0,
        0,
        canvas.width,
        canvas.height

    );

    particles.forEach(
        particle => {

            particle.x +=
                particle.speedX;

            particle.y +=
                particle.speedY;

            if (particle.y < 0) {

                particle.y =
                    canvas.height *
                    (.4 + Math.random() * .6);

                particle.x =
                    Math.random() *
                    canvas.width;

            }

            ctx.beginPath();

            ctx.arc(

                particle.x,

                particle.y,

                particle.size,

                0,

                Math.PI * 2

            );

            ctx.fillStyle =
                `rgba(255,245,170,${particle.opacity})`;

            ctx.fill();

        }
    );

    requestAnimationFrame(
        animateParticles
    );

}


/* =========================================================
   CARTA
========================================================= */

messageButton.addEventListener(
    "click",
    () => {

        letterOverlay.style.visibility =
            "visible";

        gsap.to(
            letterOverlay,
            {

                opacity: 1,

                duration: .5

            }
        );

        gsap.to(
            ".letter",
            {

                scale: 1,

                rotation: 0,

                duration: .7,

                ease: "back.out(1.5)"

            }
        );

    }
);


closeLetter.addEventListener(
    "click",
    closeLetterFunction
);


letterOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            letterOverlay
        ) {

            closeLetterFunction();

        }

    }
);


function closeLetterFunction() {

    gsap.to(
        ".letter",
        {

            scale: .8,

            rotation: -2,

            duration: .35,

            ease: "power2.in"

        }
    );

    gsap.to(
        letterOverlay,
        {

            opacity: 0,

            duration: .35,

            onComplete: () => {

                letterOverlay.style.visibility =
                    "hidden";

            }

        }
    );

}


/* =========================================================
   ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (

            event.key === "Escape" &&

            letterOverlay.style.visibility ===
            "visible"

        ) {

            closeLetterFunction();

        }

    }
);


/* =========================================================
   PÉTALOS
========================================================= */

function startFallingPetals() {

    setInterval(
        () => {

            createFallingPetal();

        },
        900
    );

}


function createFallingPetal() {

    const petal =
        document.createElement("div");

    petal.className =
        "petal-falling";

    petal.style.left =
        Math.random() * 100 + "%";

    petal.style.animationDuration =
        5 + Math.random() * 5 + "s";

    petal.style.opacity =
        .4 + Math.random() * .5;

    petal.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    petalsContainer.appendChild(
        petal
    );

    setTimeout(
        () => {

            petal.remove();

        },
        11000
    );

}


/* =========================================================
   PARALLAX
========================================================= */

document.addEventListener(
    "mousemove",
    event => {

        if (
            !garden ||
            getComputedStyle(garden).opacity === "0"
        ) {

            return;

        }

        const x =
            event.clientX /
            window.innerWidth -
            .5;

        const y =
            event.clientY /
            window.innerHeight -
            .5;

        gsap.to(
            ".mountains",
            {

                x: x * 8,

                y: y * 4,

                duration: 1.5,

                ease: "power2.out",

                overwrite: "auto"

            }
        );

        gsap.to(
            ".cloud",
            {

                x: x * 15,

                duration: 2,

                ease: "power2.out",

                overwrite: "auto"

            }
        );

    }
);


/* =========================================================
   EVITAR SCROLL
========================================================= */

document.addEventListener(
    "wheel",
    event => {

        event.preventDefault();

    },
    {
        passive: false
    }
);
