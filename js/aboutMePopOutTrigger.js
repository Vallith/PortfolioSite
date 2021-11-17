
let topLeft;
let bottomLeft;
let middleRight;

let leftArrowBody;
let leftArrowHead;

let rightArrowBody;
let rightArrowHead;

let elements = [];

var AboutPopOutSetup = function() {

    console.log("Running AboutPopOutSetup...");
    topLeft = document.getElementsByClassName("topLeftPopOut")[0];
    bottomLeft = document.getElementsByClassName("bottomLeftPopOut")[0];
    middleRight = document.getElementsByClassName("middleRightPopOut")[0];

    leftArrowBody = document.getElementsByClassName("arrowBody")[0];
    leftArrowHead = document.getElementsByClassName("arrowHead")[0];

    rightArrowBody = document.getElementsByClassName("arrowBody")[1];
    rightArrowHead = document.getElementsByClassName("arrowHead")[1];

    elements = [topLeft, bottomLeft, middleRight, leftArrowBody, leftArrowHead, rightArrowBody, rightArrowHead];

    ObserveElement("aboutMeTextBackground", elements, 0.1);

}
