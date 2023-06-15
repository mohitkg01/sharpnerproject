var form =document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');

// form Event Listner
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
// Filter Event
filter.addEventListener('keyup',filterItems);


//Add item
function addItem(e){
    e.preventDefault();

//Get input value
var newItem=document.getElementById('ite').value; 
var descItem=document.getElementById('item').value; 

// create new Li elemnet
var li=document.createElement('li');
// add class
li.className='list-group-item';
//console.log(li);
//Add text node with input value
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(" "+descItem));
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

//filter Items

function filterItems(e){
    //converting to lower case
    var text=e.target.value.toLowerCase();
    //get lis
     var items=itemList.getElementsByTagName('li');
     //Coverting to an array
     Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) !=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
     });
}