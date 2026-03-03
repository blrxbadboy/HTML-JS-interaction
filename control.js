console.log(document.getElementsByTagName('div'));
console.log(document.getElementsByClassName('box'));
console.log(document.getElementById('list'));


var list = document.getElementById("list")
var items = document.querySelectorAll("li")

items.forEach(function(li) {
    li.textContent += " Hello World"
});


var pa=document.getElementById("pp");
pa.style.color = "blue";
pa.style.fontSize = "20px";
pa.style.fontWeight = "bold";

var img = document.getElementById("image");
img.style.height = "300px"

var cities = ['San Francisco', 'Cairo', 'Tokyo', 'Nairobi'];



