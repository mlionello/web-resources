var current_id = "home";

function slideout(slideLeft, slide) {
    console.log('slide out before removing: ', slide.classList);
    removeAll(slide);
    console.log('slide out after removing: ', slide.classList);
    if (slideLeft){
        slide.classList.add('slideoutR');
    } 
    else {
        slide.classList.add('slideoutR');
    }
    console.log('slide out after adding: ', slide.classList);
    }


function slidein(slideLeft, slide){
    console.log('slide in before removing: ', slide.classList);
    removeAll(slide);
    console.log('slide in after removing: ', slide.classList);
    if (slideLeft){
        slide.classList.add('slideinR');
    } 
    else {
        slide.classList.add('slideinR');
    }
    console.log('slide in after adding: ', slide.classList);
    }

function removeAll(slide){
    var cls = slide.classList;
    slide.classList.remove(cls);
}

function turnpage( target_id) {
    if (document.getElementById(target_id).style.order == document.getElementById(current_id).style.order){
        return;
    }
    
    var slideLeft = document.getElementById(target_id).style.order < document.getElementById(current_id).style.order;
    slideout(slideLeft, document.getElementById(current_id));
    slidein(slideLeft, document.getElementById(target_id));
    current_id = target_id;
    document.getElementById('asd').innerHTML = document.getElementById(current_id).classList;
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