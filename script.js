const mylocal = ["bstreet","acataco","celestinos","unwindkitchenandbar","strongwater"]


const mydrinks = ["projecttea","mondoscoffeehouse","thebobastop","dutchbros","starbucks"]


const myfastfood = ["wingstop","tacobell","canes","jersymikes","pandaexpress"]


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


//random drinks
document.getElementById("randomdemo").innerHTML=mydrinks[Math.floor(Math.random()*mydrinks.length)];






function scrollToSection(sectionId) {
   const section = document.getElementById(sectionId);
   section.scrollIntoView({behavior:"smooth"});
}



