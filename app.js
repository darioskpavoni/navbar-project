// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


// Selectors
const navBtn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// Event listeners
navBtn.addEventListener('click',function(){
    // toggling the class which gives height to the links (therefore making them visible)
    links.classList.toggle('show-links');
})
// Functions
