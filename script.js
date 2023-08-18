var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var elements=document.getElementsByClassName('title');
for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontWeight = "bold";
    elements[i].style.color="green";
}