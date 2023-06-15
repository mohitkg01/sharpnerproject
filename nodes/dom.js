var form =document.getElementById('addForm');
var itemList=document.getElementById('items');

// form Event Listner
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
// Edit Button


//Add item
function addItem(e){
    e.preventDefault();

//Get input value
var newItem=document.getElementById('ite').value; 

// create new Li elemnet
var li=document.createElement('li');
// add class
li.className='list-group-item';
//console.log(li);
//Add text node with input value
li.appendChild(document.createTextNode(newItem));
///create delete button element
var deleteBtn=document.createElement('button');
// create Edit btn
var editbtn=document.createElement('button');
editbtn.className='btn btn-sm float-right edit';
editbtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editbtn);

//Add class to del btn
deleteBtn.className='btn btn-danger btn-sm float-right delete';
//append text node
deleteBtn.appendChild(document.createTextNode('X'));
//Append btn to li
li.appendChild(deleteBtn);

//append li to list
itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
   }
}