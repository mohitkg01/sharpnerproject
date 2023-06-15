
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="new";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);



// getelementby id
//var headerTitle=document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent="hello";
// headerTitle.innerText="goodbye"; 
//headerTitle.innerHTML='<h3>hello</h3>';
// var header=document.getElementById('main-header');
// header.style.borderBottom='solid 3px black';
// var title=document.getElementById('main');
// title.style.fontWeight='bold';
// title.style.color='green';


// getelement by class
//var items=document.getElementsByClassName('list-group-item'); 
// console.log(items); 
// console.log(items[1]);
// items[1].textContent="hello 2";
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='red';

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='grey';
// }
//items[2].style.backgroundColor='green';

//for(var i=0;i<items.length;i++){
//    items[i].style.fontWeight='bold'; }


//Get elements by tag name
// var li=document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent="hello2";
// // li[1].style.fontWeight='bold';
// // li[1].style.backgroundColor='yellow';
// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='yellow';
// }


//getelement by  class name
// var items=document.getElementsByClassName('list-group-item');
// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='grey';
// }

// // Querey selector
// var header=document.querySelector('#main-header');
// //console.log(header);
// header.style.borderBottom='solid 4px blue';

// var input=document.querySelector('input');
// input.value='Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="hello";

// var item=document.querySelector('.list-group-item');
// item.style.color='yellow';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color="red";

//  var scndItem=document.querySelector('.list-group-item:nth-child(2)');
//  scndItem.style.backgroundColor="green";
//  var thrdItem=document.querySelector('.list-group-item:nth-child(3)');
//  thrdItem.style.visibility='hidden';

//querySelector All
// var title=document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent='hello';

// var scdchild=document.querySelectorAll('li');
// scdchild[1].style.color='green';
// var odd=document.querySelectorAll('li:nth-child(odd)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="red";
// }

//Transversing the DOM
var itemList=document.querySelector('#items');
//parent node 
//console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='blue';
// console.log(itemList.parentNode.parentNode);

//parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='green';
// console.log(itemList.parentElement.parentElement);

//Child node
//console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor='pink'; 

// //first child
// console.log(itemList.firstChild);

//first child element
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='yellow';

//lastchild
// console.log(itemList.lastChild);
// last child element
//itemList.lastElementChild.textContent='hiiiiii';

//nextSibling
// console.log(itemList.nextSibling);
// //next Element sibling
// console.log(itemList.nextElementSibling);

//previous sibling
// console.log(itemList.previousSibling);
//previous Element sibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='blue';


////create  Elemnet

//create a div
var newDiv=document.createElement('div');
//Add class name
newDiv.className= 'hello';
//add id 
newDiv.id= 'hello21';

//add Attribute
newDiv.setAttribute('title', 'hello mohit');

// create text node
var newDivText=document.createTextNode('Hello');
// add text to div
newDiv.appendChild(newDivText);
//inserting 
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

//console.log(newDiv);
newDiv.style.fontSize='40px';

container.insertBefore(newDiv, h1);
///////////////////////////////////
var newli=document.createElement('ul');
newli.className='list-group-item';
var newliText=document.createTextNode('Hello');
newli.appendChild(newliText);
var item=document.querySelector('div .list-group');
var li=document.querySelector('div li');

item.insertBefore(newli, li);

// console.log(newli)