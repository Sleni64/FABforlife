const mylocal = ["bstreet", "acataco", "celestinos", "unwindkitchenandbar", "strongwater"]


const mydrinks = ["projecttea", "mondoscoffeehouse", "thebobastop", "dutchbros", "starbucks"]


const myfastfood = ["wingstop", "tacobell", "canes", "jerseymikes", "pandaexpress"]


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
document.getElementById("randomlocal").innerHTML = mylocal[Math.floor(Math.random() * mylocal.length)];


//random drinks
document.getElementById("randomdrinks").innerHTML = mydrinks[Math.floor(Math.random() * mydrinks.length)];


//random chiain
document.getElementById("randomfastfood").innerHTML = myfastfood[Math.floor(Math.random() * myfastfood)];




function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}



