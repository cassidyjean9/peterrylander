console.log("working")


$("#page-wrap").wrapInner("<table cellspacing='30'><tr>");
$(".post").wrap("<td></td>");
$("body").on('scroll', function(event, delta) {
  this.scrollLeft -= delta * 30;
  event.preventDefault();
});


var cv = document.getElementById("cv");
var contact = document.getElementById("contact");
var header = document.getElementById("header");
  

document.addEventListener('click', function (event) {

        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches('#cv-button')) return;
    
        // Don't follow the link
        event.preventDefault();
    
        // Log the clicked element in the console
        console.log(event.target);

        //scroll to cv
        cv.scrollIntoView({behavior: "smooth"})
    ;
}, false);

document.addEventListener('click', function (event) {

        // If the clicked element doesn't have the right selector, bail
        if (!event.target.matches('#contact-button')) return;
    
        // Don't follow the link
        event.preventDefault();
    
        // Log the clicked element in the console
        console.log(event.target);

        //scroll to cv
        contact.scrollIntoView({behavior: "smooth"})
    ;
}, false);

document.addEventListener('click', function (event) {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches('#home-button')) return;

  // Don't follow the link
  event.preventDefault();

  // Log the clicked element in the console
  console.log(event.target);

  //scroll to cv
  header.scrollIntoView({behavior: "smooth"})
;
}, false);