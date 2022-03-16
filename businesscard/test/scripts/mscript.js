var current_id = "home";
const idList = ["home", "cv",  "projects", "publications", "sum", "contacts", "news"];

let touchstartX = 0
let touchendX = 0

const slider = document.getElementById('mmain')

/*slider.addEventListener('touchstart', e => {
    console.error('touched')
  touchstartX = e.changedTouches[0].screenX
})

slider.addEventListener('touchend', e => { 
        console.error('left')

  touchendX = e.changedTouches[0].screenX;
  if (touchendX-touchstartX>10) {
    turnpage(idList[idList.lastIndexOf(current_id)+1]);}
    if (touchendX-touchstartX<-10) {
    turnpage(idList[Math.max(idList.lastIndexOf(current_id)-1,0)]);}
})
*/

function showmmenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 

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
    
    window.scrollTo(0, 0);
    
    //$("html, body").animate({ scrollTop: 0 }, "slow");
    }


window.onscroll = function(ev) {scrollFunction(ev)};


function scrollFunction(ev) {
    
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
    /*if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        turnpage(idList[idList.lastIndexOf(current_id)+1]);
         window.scrollTo(0, 0);
				disableScroll();
				setTimeout(function (){
  			enableScroll();
         }, 400);
         }*/
    
}


function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);

}