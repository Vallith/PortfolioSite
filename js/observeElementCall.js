
var ObserveElement = function (elementName, triggers, threshold) {
    /* Gets the element which should trigger an event */
    const el = document.getElementsByClassName(elementName)[0];

    /* Creates an observer */
    const observer = new window.IntersectionObserver(([entry]) => {
        /* If the observer is intersecting the element element passed in, trigger */
        if (entry.isIntersecting) {
            console.log('ENTER')
            TriggerAnimation(triggers);
            return
        }
        console.log('LEAVE')
    }, {
        root: null,
        threshold: threshold, // set offset 0.1 means trigger if at least 10% of element in viewport
    })

    observer.observe(el);
}

var TriggerAnimation = function(elementList) {
    elementList.forEach(el => {
        el.style.animationPlayState = "running";
    })
}