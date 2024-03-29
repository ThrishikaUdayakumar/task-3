var myform = document.getElementById('my-form');
var name = document.getElementById('fname');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var userList = document.getElementById('users');

myform.addEventListener('submit', submitoperation);

function submitoperation(e) {
    e.preventDefault();
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(`${name.value} ${email.value} ${phone.value}`));

    var editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm float-right js-button edit';
    editButton.textContent = 'edit';
    li.appendChild(editButton);
    
    var newButton = document.createElement('button');
    newButton.className = 'btn btn-primary btn-sm float-right js-button delete';
    newButton.textContent = 'delete';
    li.appendChild(newButton);

    userList.appendChild(li);

    name.value = '';
    email.value = '';
    phone.value = '';
    
}

// Use event delegation for the delete function
userList.addEventListener('click', function(e) {
    if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        var textContent = li.firstChild.textContent.trim();
        var values = textContent.split(' ');

        name.value = values[0];
        email.value = values[1];
        phone.value = values[2];
        userList.removeChild(li); // Remove the old entry for editing
    } else if (e.target.classList.contains('delete')) {
        if (confirm('Sure?')) {
            var li = e.target.parentElement;
            userList.removeChild(li);
        }
    }
});
