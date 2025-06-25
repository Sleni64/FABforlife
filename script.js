const mylocal = ["bstreet", "acataco", "celestinos", "unwindkitchenandbar", "strongwater"]


const mydrinks = ["projecttea", "mondoscoffeehouse", "thebobastop", "dutchbros", "starbucks"]


const myfastfood = ["wingstop", "tacobell", "canes", "jerseymikes", "pandaexpress"]


let slideIndex = 0;
showSlides();


function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }


    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); //change image every 2 seconds
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
    section.scrollIntoView({ behavior: "smooth" });
}




//animate booms
anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 300 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 1000
  });

  // animate the title
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });