var listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(function(listItem) {
    // Create a new button element
    var newButton = document.createElement('button');
    newButton.className = 'btn btn-primary btn-sm float-right js-button';
    newButton.textContent = 'edit';

    // Append the new button after the existing delete button
    var deleteButton = listItem.querySelector('.delete');
    listItem.appendChild(newButton);
});
var form=document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter=document.getElementById('filter');

form.addEventListener('submit',addelement);
itemList.addEventListener('click',removeElement);
filter.addEventListener('keyup',filterelement)

function addelement(e){
    e.preventDefault();
//adding element to the item
    var input=document.getElementById('item').value;
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(input));
  //adding a delete button
    var deletebutton=document.createElement('button');
    deletebutton.className='btn btn-danger btn-sm float-right delete'
    deletebutton.appendChild(document.createTextNode('X'));
    li.append(deletebutton);
    var editButton = document.createElement('button');
    editButton.className = 'btn btn-primary btn-sm float-right edit';
    editButton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editButton);
    itemList.appendChild(li);
//adding an edit button
        
}
function removeElement(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}
function filterelement(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }