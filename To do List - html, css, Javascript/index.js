
let main_array = [];

let inp_id = document.getElementById('submit');
inp_id.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit_button").click();
        
    }
});

function myfunction(){
    var key = 0;
    let object = {};

    let inp = document.getElementById('submit').value;
    if(inp !== ''){

        const para = document.createElement('p');
        para.setAttribute('id', key);
        para.style.fontSize = '20px';
        
        const node = document.createTextNode(inp);
        const tag_inp = document.createElement('input');
        tag_inp.setAttribute('type','checkbox');
        tag_inp.setAttribute('id', "inp_"+key);
        

        tag_inp.style.width = '20px';
        tag_inp.style.height = '20px';
        tag_inp.style.paddingLeft = '15px';

        para.appendChild(tag_inp);
        para.appendChild(node);
        
        const element = document.getElementById('todolist_container');
        element.appendChild(para);
        

        const all_inp = document.querySelectorAll('#submit');
        all_inp.forEach(input => {
            input.value = '';
        });
        
        object[key] = inp;
        key = key+1;
        main_array.push(object);
        console.log(main_array);

    }else{
        console.log('Empty string can not take as input ');
        let greeting = document.querySelector('.msg');
        let pp = document.createElement('p');
        pp.innerHTML = '**Empty string cannot input!**'
        greeting.appendChild(pp);
        setTimeout(function(){
            pp.parentNode.removeChild(pp);
           },2000);
    }
}



function delete_item(){
    var keys = Object.keys(object);
    console.log("Keys = ", keys);
    var val = Object.values(object);
    console.log("Values = ", val);


    for(let key in keys){
        console.log("Print from delete item function: ", object);
        console.log("Key from delete function for loop = ", key);
        var ck = document.getElementById(`inp_${keys[key]}`);
        console.log("checked = ", ck.checked);
        if(ck.checked === true){
            // let id = document.getElementById('del');
            // id.innerHTML = object[`${key}`] + " has deleted!";
            
            let data = document.createTextNode(object[`${keys[key]}`]);
            console.log("data = ", data);
            let p2 = document.createElement('p');
            // p2.setAttribute('id',key);
            p2.appendChild(data);
            let pos = document.getElementById('del-item');
            pos.appendChild(p2);
            // setTimeout(pos, 2000);

            //try to set timed out method, when time is end, message will be disappered. 
            function new_method(){
                const nw = document.getElementById('new-del');
                nw.innerHTML = data.value;
            }

            setTimeout(new_method, 3000);
            
            console.log("Key type = ", typeof key);
            delete object[key];
            document.getElementById(`${keys[key]}`).remove();

        }else{
            console.log("Something error occurred");
        }
    }
    console.log(object);
}


function show_data(){
    var k = Object.keys(object);    //Collect keys of object
    console.log(k);

    var v = Object.values(object);
    console.log(v);

    for(let key in k){
        console.log(`${key} : `,object[key]);
    }
}