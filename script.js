const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")
    videocon.addEventListener("mouseenter", function () {
        // playbtn.style.opacity=1
        // playbtn.style.scale=1
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })
    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x + 20,
            top: dets.y + 500,
        })
    })
}
videoconAnimation()

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.4
    })
    gsap.from("#page1 h1", {
        scale: 0.9,
        opacity: 0,
        delay: 0.3,
    })




}
loadingAnimation()

document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
    })
})
// document.querySelector("#child1").addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%, -50%) scale(1)'
//     })
// })
// document.querySelector("#child1").addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         transform: 'translate(-50%, -50%) scale(0)'
//     })
// })
function cursorAnimation() {
    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(1)'
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(0)'
            })
        })
    })
}
cursorAnimation()
function navVisibility() {
    document.querySelector("#page3").addEventListener('mouseenter', function () {
        gsap.to("#nav", {
            opacity: 0,
        })
    })
    document.querySelector("#page4").addEventListener('mouseenter', function () {
        gsap.to("#nav", {
            opacity: 0,
        })
    })
    document.querySelector("#page3").addEventListener('mouseleave', function () {
        gsap.to("#nav", {
            opacity: 1,
        })
    })
}
navVisibility()

// document.querySelector("#video-container").addEventListener('mouseenter', function () {
//     gsap.to("#logoImg", {
//         transform: 'translate(0)',
//         duration: 0.1,
//         opacity: 1,
//     })
// })
// document.querySelector("#video-container").addEventListener('mouseenter', function () {
//     gsap.to("#logoImg", {
//         transform: 'translate(0)',
//         duration: 0.1,
//         opacity: 0,
//     })
// })

function blockVisiblity() {

    document.querySelector("#dets1").addEventListener("mouseenter", function () {
        gsap.to("#block1", {
            opacity: 1,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
        gsap.to("#dets1", {
            opacity: 0,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
    })
    document.querySelector("#elem1").addEventListener("mouseleave", function () {
        gsap.to("#block1", {
            opacity: 0,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
        gsap.to("#dets1", {
            opacity: 1,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
    })


    document.querySelector("#dets2").addEventListener("mouseenter", function () {
        gsap.to("#block2", {
            opacity: 1,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
        gsap.to("#dets2", {
            opacity: 0,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
    })
    document.querySelector("#elem2").addEventListener("mouseleave", function () {
        gsap.to("#block2", {
            opacity: 0,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
        gsap.to("#dets2", {
            opacity: 1,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
    })



    document.querySelector("#dets3").addEventListener("mouseenter", function () {
        gsap.to("#block3", {
            opacity: 1,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
        gsap.to("#dets3", {
            opacity: 0,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
    })
    document.querySelector("#elem3").addEventListener("mouseleave", function () {
        gsap.to("#block3", {
            opacity: 0,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
        gsap.to("#dets3", {
            opacity: 1,
            // transform: 'translate(-50%, -50%) scale(1)'
        })
    })

}

blockVisiblity()

