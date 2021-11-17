
let leftAside1;
let rightAside1;

var WorksPopOutSetup = function() {
    console.log("Running WorksPopOutSetup...");
    leftAside1 = document.getElementsByClassName("leftAside")[0];
    rightAside1 = document.getElementsByClassName("rightAside")[0];


    ObserveElement("leftAside", [leftAside1], 0.05);
    ObserveElement("rightAside", [rightAside1], 0.05);
}