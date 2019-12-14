var list = document.getElementById("my-list");
var headline = document.getElementById("my-headline");
var listItems = document.getElementById("my-list").getElementsByTagName("li");

list.addEventListener("click", activateItem);

function activateItem(x) {
    if (x.target.nodeName == "LI") {
        headline.innerHTML = x.target.innerHTML;
    for (i = 0; i < x.target.parentNode.children.length; i++) {
        x.target.parentNode.children[i].classList.remove("cl");
    }
    x.target.classList.add("cl");
    }
}

function addYourItem() {
    var somethingNew = prompt("Enter a new item");
      document.getElementById("item").innerHTML = list.innerHTML += somethingNew + "<hr>";
    
    
  }