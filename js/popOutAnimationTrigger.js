
let topLeft;
let bottomLeft;
let middleRight;

let leftArrowBody;
let leftArrowHead;

let rightArrowBody;
let rightArrowHead;

var PopOutSetup = function() {

    console.log("Running Setup...");
    topLeft = document.getElementsByClassName("topLeftPopOut")[0];
    bottomLeft = document.getElementsByClassName("bottomLeftPopOut")[0];
    middleRight = document.getElementsByClassName("middleRightPopOut")[0];

    leftArrowBody = document.getElementsByClassName("arrowBody")[0];
    leftArrowHead = document.getElementsByClassName("arrowHead")[0];

    rightArrowBody = document.getElementsByClassName("arrowBody")[1];
    rightArrowHead = document.getElementsByClassName("arrowHead")[1];

    ObserveElement("aboutMeTextBackground")

}

function TriggerAnimation() {

    /* Animations are paused by default via css */
    topLeft.style.animationPlayState = "running";
    bottomLeft.style.animationPlayState = "running";
    middleRight.style.animationPlayState = "running";

    leftArrowBody.style.animationPlayState = "running";
    leftArrowHead.style.animationPlayState = "running";

    rightArrowBody.style.animationPlayState = "running";
    rightArrowHead.style.animationPlayState = "running";

}

function ObserveElement(elementName) {
    /* Gets the element which should trigger an event */
    const el = document.getElementsByClassName(elementName)[0];

    /* Creates an observer */
    const observer = new window.IntersectionObserver(([entry]) => {
        /* If the observer is intersecting the element element passed in, trigger */
        if (entry.isIntersecting) {
            console.log('ENTER')
            TriggerAnimation();
            return
        }
        console.log('LEAVE')
    }, {
        root: null,
        threshold: 0.1, // set offset 0.1 means trigger if at least 10% of element in viewport
    })

    observer.observe(el);
}