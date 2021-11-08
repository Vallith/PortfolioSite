
window.onload = Setup;

let body;
let myWorks;

function Setup()
{
    console.log("Running Page Animation Setup")
    body = document.getElementsByTagName("body")[0];
    myWorks = document.getElementsByClassName("worksBackground")[0];

    myWorks.addEventListener("click", function () { fadeOutToPage("works") }, false)
}

function fadeOutToPage(pageName)
{
    body.style.animation = "fadeOutAnimation 0.3s ease-in"
    body.style.animationFillMode = "forwards";

    if (!pageName.includes(".html"))
    {
        pageName += ".html"
    }

    setTimeout(function () { window.location.href = pageName; }, 300);
}