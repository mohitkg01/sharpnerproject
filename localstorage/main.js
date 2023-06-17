const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
userList.addEventListener('click',removeIt);




function onSubmit(e){
    e.preventDefault();
    if(nameInput==='' || emailInput===''){
        msg.innerHTML='please enter all field';
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        ));
       
        //Adding delete btn
        var name=JSON.stringify(nameInput.value);
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn btn-danger btn-sm float-right delete';

        deleteBtn.appendChild(document.createTextNode('delete'));
        li.appendChild(deleteBtn);

        // Adding edit btn
        var editBtn=document.createElement('button');
        editBtn.className='btn btn-danger btn-sm float-right edit';

        editBtn.appendChild(document.createTextNode('edit'));
        li.appendChild(editBtn);
        userList.appendChild(li);
        editBtn.addEventListener('click',editItem);
        //Adding local storage
       
        
        localStorage.setItem(name,`name:${nameInput.value}  email:${emailInput.value}`);
        nameInput.value='';
        emailInput.value='';
    }
   
 
    
}


//Remove items
function removeIt(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            var name=JSON.stringify(li.firstChild.textContent.split(':')[0].trim());
            console.log(name);
            userList.removeChild(li);
            localStorage.removeItem(name);
        }
   }
}

function editItem(e){
    var li=e.target.parentElement;
    var name=JSON.stringify(li.firstChild.textContent.split(':')[0].trim());
    var email=li.firstChild.textContent.split(':')[1].trim();
    
    //set the value
    var n=JSON.parse(name);
    nameInput.value=n;
    emailInput.value=email;
    //removing the user
    userList.removeChild(li);
    //remove the user from local storage
    localStorage.removeItem(name);
  
}