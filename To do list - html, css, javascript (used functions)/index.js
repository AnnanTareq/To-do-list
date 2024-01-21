let inp = document.querySelector('.input-div');
let checkBox = document.querySelector('.list ul li input[type=checkbox]');

let compList = document.querySelector('.comp-list ul');
// let child = compList.children;
// let cl = Array.from(child);
// console.log('clllll = ', cl);
// console.log(checkBox);

let btn = document.getElementById('btn');
// btn.onclick = addTask();
btn.onclick = function() {
    // let dv = document.querySelector('.list');
    let val = inp.childNodes[1].value;
    console.log(val);
    if (val === '') {
        window.alert('Empty string is not acceptable!');
        return;
    }
    let li = document.createElement('li');
    
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.setAttribute('onchange','checkItem()') ;
    check.className = 'check box 1';
    
    li.appendChild(check);
   let txt = document.createElement('p');
   txt.innerText = val;
   li.appendChild(txt);

    let cr = document.querySelector('.inc-list ul');
    cr.style.display = 'flex';
    cr.style.flexDirection = 'column';
    console.log('cr = ',cr);
    // cr.appendChild(check);
    cr.appendChild(li);

    inp.childNodes[1].value = '';
}


let checkItem = function(){
    let chk = document.querySelectorAll('.inc-list ul li');
    console.log('chk = ', chk);
    chk.forEach((e)=>{
        // console.log("e = ",e.childNodes[0]);
        if(e.childNodes[0].checked === true){
            delItem(e);
            addToCompletedList(e);
        }
        
    });
    // chk.childNodes
}

let delItem = function(item) {
    item.remove();
}

let addToCompletedList = function(p){
    let btn = document.createElement('button');
    btn.setAttribute('onclick','deleteCompleteTask();');
    btn.innerText = 'Delete';
    // compList.style.borderTop = '1px solid black';
    let li = document.createElement('li');
    li.style.borderTop = '1px solid black';
    li.style.borderBottom = '1px solid black';

    li.appendChild(p.childNodes[1]);
    li.appendChild(btn);
    compList.appendChild(li);

    console.log('Completed list ==== ', compList)
    // compList.appendChild(btn);
}

let deleteCompleteTask = function(){
    // window.alert('working!');

    let ul = compList.children;
    console.log(ul);
    let ch = Array.from(ul);
    console.log('children = ',ch);

    ch.forEach((e)=>{
        e.children[1].addEventListener('click',()=>{
            e.remove();
            // console.log('from delete complete task = ' ,e.childNodes[0].innerText);
            // window.alert(`event listener working!`);
        })
        
        // console.log();

        // if(e.children[1].onclick === true){
        //     console.log(e);
        //     window.alert('working!');
        // }
    });
}


// let comp_task = document.querySelector('.comp-list ul').children;
// console.log('Completed task = ' , comp_task);
// console.log(compList);




// cl.forEach((e)=>{
//     if (e.children[1].onclick) {
//         window.alert('working!');
//     }
// });