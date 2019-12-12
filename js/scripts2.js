var elements = document.getElementsByClassName("child");

for (var i = 0; i < elements.length; i++) {
 elements[i].onclick = function() {
  // Remove Class From Sibling

  var el = elements[0];

  while (el) {
   if (el.tagName === "DIV") {
    // Remove Class

    el.classList.remove("bak");
   }
   // Pass to the new sibling

   el = el.nextSibling;
  }

  this.classList.add("bak");
 };
}
