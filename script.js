var change=document.querySelector('#items');
//parentelement
change.parentElement.style.backgroundColor="orange";
//lastelementchild
change.lastElementChild.style.backgroundColor="#ffa07a";
//lastchild
console.log(change.lastChild);
//firstelementchild
change.firstElementChild.style.backgroundColor="#ffa07a";
//firstchild
console.log(change.firstChild);
//nextsibling
console.log(change.nextSibling);
// //nextelementsibling
console.log(change.nextElementSibling);
// previoussibling
console.log(change.previousSibling);
// previouselementsibling
change.previousElementSibling.style.backgroundColor="#f94d00";
// createelement
var newDiv = document.createElement('div');
newDiv.className="class";
newDiv.id="id";
// setAttribute
newDiv.setAttribute('title','helloDiv');
// createtesxtnode
var newdiv=document.createTextNode("helloDiv");
newDiv.append(newdiv)
// appendchild
var container=document.querySelector('.container')
var h1=document.querySelector(' h1')
container.insertBefore(newDiv,h1);