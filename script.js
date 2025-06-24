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



