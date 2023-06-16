const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);


function onSubmit(e){
    e.preventDefault();
    if(nameInput==='' || emailInput===''){
        msg.innerHTML='please enter all field';
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`
        ));
        userList.appendChild(li);
        var name=JSON.stringify(nameInput.value);
        var email=JSON.stringify(emailInput.value);
        
        localStorage.setItem(name,nameInput.value);
        localStorage.setItem(email,emailInput.value);
        
        nameInput.vale='';
        emailInput.value='';
    }
    // var name=JSON.stringify(nameInput.value);
    // console.log(name);
}
