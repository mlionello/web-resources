var current_id = "home";
const idList = ["home", "cv", "pubblications", "projects", "sum", "contacts", "news"];

function slideout(slideLeft, slide) {
    
    removeAll(slide);
    if (slideLeft){
        slide.classList.add('slideoutR');
    } 
    else {
        slide.classList.add('slideoutL');
    }
    }


function slidein(slideLeft, slide){
    removeAll(slide);
    if (slideLeft){
        slide.classList.add('slideinL');
    } 
    else {
        slide.classList.add('slideinR');
    }
    console.log('slide in after adding: ', slide, slide.classList);
    }

function removeAll(slide){
    var cls = slide.classList;
    slide.classList.remove(cls);
}

function turnpage( target_id) {
    if (document.getElementById(target_id).style.order == document.getElementById(current_id).style.order){
        return;
    }
    
    /*if (false and target_id=='home'){
        removeAll(document.getElementById(current_id));
        document.getElementById(current_id).classList.add('slideout');
        current_id = document.getElementById(target_id);
        removeAll(current_id);
        document.getElementById(current_id).classList.add('slideinHome');
        return;
    }*/
    
    var oldnav = document.getElementById('nav'+current_id);
    oldnav.classList.remove('navopen');
    var newnav = document.getElementById('nav'+target_id);
    newnav.classList.add('navopen');
    
    var slideLeft = document.getElementById(target_id).style.order < document.getElementById(current_id).style.order;
    slideout(slideLeft, document.getElementById(current_id));
    slidein(slideLeft, document.getElementById(target_id));
    current_id = target_id;
    
    $("html, body").animate({ scrollTop: 0 }, "slow");
    }

window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navlist").style.textAlign = "left";
    document.getElementById("navbar").style.paddingTop = "0";
    document.getElementById("navbar").style.paddingBottom = "5px";
    var x = document.getElementsByClassName("icons");
    for (i = 0; i < x.length; i++) {
         x[i].style.marginTop = "0";
         x[i].style.marginRight = "10px";}
    } else {
    document.getElementById("navlist").style.textAlign = "center";
    document.getElementById("navbar").style.paddingTop = "50px";
    document.getElementById("navbar").style.paddingBottom = "15px";
    var x = document.getElementsByClassName("icons");
    for (i = 0; i < x.length; i++) {
         x[i].style.marginTop = "10px";
         x[i].style.marginRight = "30px";
    	 } 
    }
}