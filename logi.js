// 1st navbar-item hover functions created
function showDropdown1() {
  var dropdown1 = document.getElementById("about");
  dropdown1.style.display = "block";
}
function hideDropdown1() {
  var dropdown = document.getElementById("about");
  dropdown.style.display = "none";
}


//  2nd navbar-item hover
  function showDropdown2() {
    var dropdown = document.getElementById("innovation");
    dropdown.style.display = "block";
}

function hideDropdown2() {
    var dropdown = document.getElementById("innovation");
    dropdown.style.display = "none";
}


//  3nd navbar-item hover
function showDropdown3() {
  var dropdown = document.getElementById("sustainability");
  dropdown.style.display = "block";
}

function hideDropdown3() {
  var dropdown = document.getElementById("sustainability");
  dropdown.style.display = "none";
}




var imageBlock = document.getElementById("myImageBlock");
imageBlock.addEventListener("mouseover", hideDropdown1);
imageBlock.addEventListener("mouseover", hideDropdown2);
imageBlock.addEventListener("mouseover", hideDropdown3);



var first = document.getElementById("about1");
first.addEventListener("mouseover",hideDropdown2);
first.addEventListener("mouseover", hideDropdown3);

var second = document.getElementById("innovation1");
second.addEventListener("mouseover", hideDropdown1 );
second.addEventListener("mouseover",hideDropdown3);

var third = document.getElementById("sustainability1");
third.addEventListener("mouseover", hideDropdown1 );
third.addEventListener("mouseover",hideDropdown2);

var fourth= document.getElementById("newsroom1");
fourth.addEventListener("mouseover", hideDropdown1);
fourth.addEventListener("mouseover", hideDropdown2);
fourth.addEventListener("mouseover", hideDropdown3);

var fifth=document.getElementById("careers1");
fifth.addEventListener("mouseover",hideDropdown1);
fifth.addEventListener("mouseover",hideDropdown2);
fifth.addEventListener("mouseover",hideDropdown3);

