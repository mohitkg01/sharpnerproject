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
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn btn-danger btn-sm float-right delete';

        deleteBtn.appendChild(document.createTextNode('delete'));
        li.appendChild(deleteBtn);
        userList.appendChild(li);
        //Adding local storage
       
        
        localStorage.setItem(name,`name:${nameInput.value}  email:${emailInput.value}`);
        nameInput.value='';
        emailInput.value='';
    }
   
 
    
}
 var name=JSON.stringify(nameInput.value);

//Remove items
function removeIt(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            userList.removeChild(li);
            localStorage.removeItem(name);
        }
   }
}

  

