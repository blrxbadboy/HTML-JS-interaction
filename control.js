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



var input = document.getElementById("city");
var Btn = document.getElementById("addBtn");
var list = document.getElementById("list");


Btn.onclick = function() {
var Name=input.value.trim()
    if(Name === "") {
        alert ("Please enter a city name!")}
        else{
            list.innerHTML += "<ul><li>" + Name
        }


}
var items = document.querySelectorAll("li");

items.forEach(function(li) {
    li.onclick=function() {
        li.remove()
    }
})

