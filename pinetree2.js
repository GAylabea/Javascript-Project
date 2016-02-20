var button = document.getElementById("btn");
var xmasTree = document.getElementById("xmasTree")
xmasTree.style.fontFamily="courier"

button.addEventListener("click", getValue); 

function checkValue() {
  if (!tree.height || !tree.character) {
    alert("Please enter an amount for each!"); 
    } else {
      buildTree();
    }
}

function getValue() {
  tree.height = document.getElementById("height").value;
  tree.character = document.getElementById("character").value;
  checkValue();
}

var tree = {}

function buildTree() {
  var growTree = "";
  var treeWidth = (2*tree.height) - 1; 
  for (var i = 0; i < tree.height; i++) {
      var characterWidth = (i*2)+1;
      var spaceWidth = (treeWidth - characterWidth) / 2; 
      for (var k = 0; k < spaceWidth; k++) {
      growTree += "&nbsp;"
  }
      for (var j = 0; j < characterWidth; j++ ) {
      growTree += tree.character
    }
      growTree += "<p>"
  }
xmasTree.innerHTML=growTree;
}
