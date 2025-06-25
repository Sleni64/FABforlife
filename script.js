const mylocal = ["bstreet","acataco","celestinos","unwindkitchenandbar","strongwater"]

const mydrinks = ["projecttea","mondoscoffeehouse","thebobastop","dutchbros","starbucks"]

const myfastfood = ["wingstop","tacobell","canes","jerseymikes","pandaexpress"]

const myacataco = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZZs8yXrA97zLB3RW5lSRSUgZKThIfEi6ovw&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzklXgZa4b2EbrTCj9RzK5AGQVInvQdN8JQQ&s","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQCwuccNSpZwAsn_w_gVIKXcCegz1heSUcw&s"]











let slideIndex1 = 0;
let slideIndex2 = 0;
//start slideshows
showSlides('slideshow1', slideIndex1);
showSlides('slideshow2', slideIndex2);

function showSlides(slideshowId, slideIndex) {
    let i;
    const slides = document.querySelectorAll(`#${slideshowId}.mySlides`);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display= "none" ; //hides all slides
    }
    slideIndex++; //increments index
    if (slideIndex > slides.length) {slideIndex = 1} //once slideindex passes last slide loops back to start

    slides[slideIndex-1].style.display = "block"; //displays current slide
    setTimeout(() => showSlides(slideshowId , slideIndex), 2000); //2000millisocons 2 seconds
}



function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += "active";
}

//random local
//document.getElementById("randomlocal").innerHTML=mylocal[Math.floor(Math.random()*mylocal.length)];

//random drinks
//document.getElementById("randomdrinks").innerHTML=mydrinks[Math.floor(Math.random()*mydrinks.length)];

//random chiain
//document.getElementById("randomfastfood").innerHTML=myfastfood[Math.floor(Math.random()*myfastfood)];


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({behavior:"smooth"});
}
