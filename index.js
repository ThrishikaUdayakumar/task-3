var myform=document.getElementById('my-form');
var name=document.getElementById('fname');
var email=document.getElementById('email');
var phone=document.getElementById('phone');
submit.addEventListener('click',submitoperation);
function submitoperation(e){
    e.preventDefault();
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value}${email.value}${phone.value}`))
    var userList = document.getElementById("users") // Get the user list element
    userList.appendChild(li);
    name.value='';
    email.value='';
    phone.value='';
}