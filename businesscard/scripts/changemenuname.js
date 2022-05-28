  window.addEventListener("scroll", function() {
  var elementTarget = document.getElementsByClassName("content");
  console.error(elementTarget)
  var current_order = 0;
  for (i = 0; i < elementTarget.length; i++) {
        if (window.scrollY > (elementTarget[i].offsetTop + elementTarget[i].offsetHeight)) {
        if (elementTarget[i].style.order > current_order) {
        current_order = elementTarget[i].style.order;
        }}
  console.error(current_order)
  console.error(idList[current_order])
  document.getElementById("menupointer").innerHTML = idList[current_order]
});