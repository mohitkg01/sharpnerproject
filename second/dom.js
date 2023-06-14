
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
var items=document.getElementsByClassName('list-group-item');
for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='grey';
}