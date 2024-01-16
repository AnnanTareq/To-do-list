function setBody() {

    document.body.style.backgroundColor = '#6a5acd';

    let container = document.createElement('div');
    container.className = 'input_div';

    container.style.width = '600px';
    container.style.height = 'auto';
    container.style.marginLeft = 'auto';
    container.style.marginRight = 'auto';

    document.body.appendChild(container);

    let container_box = document.createElement('div');
    container_box.className = 'box';
    container_box.style.overflowY = 'auto';
    container_box.style.overflowX = 'none';
    container_box.style.backgroundColor = '#cece98';

    let container_input = document.createElement('div');
    container_input.className = 'input_option';
    container_input.style.margin = '20px';
    container_input.style.display = 'flex';
    container_input.style.justifyContent = 'center';
    container_input.style.alignItems = 'center';
    container_input.style.flexDirection = 'column';
    container_input.style.rowGap = '20px';

    let header = document.createElement('h1');
    let header_txt = document.createTextNode('To-do-list: ');
    header.appendChild(header_txt);

    header.style.textAlign = 'center';
    header.style.backgroundColor = 'white';

    container_box.style.width = '500px';
    container_box.style.height = '450px';
    container_box.style.border = '2px solid black';
    container_box.style.marginLeft = 'auto';
    container_box.style.marginRight = 'auto';

    container.appendChild(header);
    container.appendChild(container_box);
    container.appendChild(container_input);



    let input_box = document.createElement('input');
    input_box.style.width = '200px';
    input_box.style.height = '50px';
    input_box.style.borderRadius = '10px';
    input_box.placeholder = 'Enter your text here : ';
    input_box.style.fontSize = '25px';
    input_box.style.paddingLeft = '20px';
    input_box.style.paddingRight = '20px';
    input_box.className = 'input_box';
    container_input.appendChild(input_box);

    let submit_button = document.createElement('button');
    submit_button.className = 'submit_button';
    submit_button.style.width = '95px';
    submit_button.style.height = '50px';
    submit_button.style.backgroundColor = 'purple';
    submit_button.style.borderRadius = '5px';
    submit_button.style.color = 'white';
    submit_button.style.fontSize = '25px';

    submit_button.onclick = submit_items;



    // let sb = ;


    let submit_button_txt = document.createTextNode('Submit');
    submit_button.appendChild(submit_button_txt);

    container_input.appendChild(submit_button);


    let delete_button = document.createElement('button');
    delete_button.className = 'delete_button';
    delete_button.style.width = '80px';
    delete_button.style.height = '40px';
    delete_button.style.borderRadius = '5px';
    delete_button.style.border = 'none';
    delete_button.style.backgroundColor = 'orange';
    delete_button.style.fontWeight = '500';
    delete_button.style.color = 'white';
    delete_button.textContent = 'Delete Item(s)';

    delete_button.onclick = delete_items;

    container_input.appendChild(delete_button);

}


function submit_items() {
    //collect input value from input
    let para_txt = document.querySelector('.input_box').value;
    if (para_txt !== '') {
        let check_box_div = document.createElement('div');
        check_box_div.className = 'check_box_div';
        check_box_div.style.paddingTop = '10px';
        check_box_div.style.paddingBottom = '10px';
        check_box_div.style.borderTop = '1px solid black';
        check_box_div.style.borderBottom = '1px solid black';
        check_box_div.style.margin = '10px';
        check_box_div.style.display = 'flex';
        check_box_div.style.flexDirection = 'row';
        check_box_div.style.justifyContent = 'space-between';
        check_box_div.style.paddingLeft = '15px';
        check_box_div.style.paddingRight = '15px';

        //creating checkbox as a input type
        let check_box = document.createElement('input');
        check_box.setAttribute('type', 'checkbox');
        check_box.style.height = '45px';
        check_box.style.width = '45px';

        let para = document.createElement('p');
        para.className = 'para';
        // console.log("Para text = ",para_txt, typeof(para_txt));
        // let para_txt = document.createTextNode('this is paragraph!');
        para.append(para_txt);
        // para.appendChild(check_box);
        check_box_div.appendChild(check_box);
        check_box_div.appendChild(para);
        let container_box = document.querySelector('.box');
        container_box.appendChild(check_box_div);

        let inp_box_val = document.querySelector('.input_box');
        inp_box_val.value = '';
        // alert('auto call!');    
    } else {
        console.log('Empty string can not take as input! ');
    }

}

function delete_items() {
    console.log('delete items function got called!');

    let node_list = document.getElementsByClassName('check_box_div');
    // console.log(node.length);

    let node = Array.from(node_list);
    // node
    // let n_0 = node[0].childNodes;
    // console.log(n_0[0].checked);
    // console.log(node[0].childNodes);

    for (let i = 0; i < node.length; i++) {
        let ch = node[i].childNodes;
        console.log('ch = ',ch);
        if (ch[0].checked === true) {
            console.log('This is true and removed!', i);
            // ch.
            console.log('parent element = ', ch.parentElement);
            console.log('node = ', node[i]);
            const nd = node[i];
            nd.parentNode.removeChild(nd);
            show_delete_items(nd);
        }
    }
}

function show_delete_items(it) {
    // console.log('item = ', it, it[0], it[1], 'length = ', it.length);
    // console.log(typeof (it));
    // console.log(it.childNodes);
    // let del_div_check = document.querySelector('.del_div');
    // console.log(del_div_check);
    if (document.getElementsByClassName('del_div').length === 0) {


        let del_div = document.createElement('div');
        del_div.className = 'del_div';
        del_div.style.backgroundColor = '#37cf37';
        del_div.style.width = '400px';
        del_div.style.height = 'auto';
        del_div.style.margin = 'auto';
        del_div.style.padding = '10px';

        let main_container = document.body;
        main_container.appendChild(del_div);
    }
    let new_div = document.createElement('div');
    new_div.className = 'inner_div';
    // new_div.
    // new_div.style.display = 'flex';
    // new_div.style.textAlign = 'center';
    // new_div.innerHTML= 'hi';
    // let len = item.length;
    // for (let i = 0; i < len; i++) {
    //     const element = item[i];
    //     console.log(i,' = ', element.value);
    //     // new_div.appendChild(element);
    // }

    // new_div.appendChild(it[0]);
    // new_div.appendChild(it[1]);
    let ch_0 = it.childNodes;
    it.removeChild(ch_0[0]);
    new_div.appendChild(it);
    // new_div.appendChild(it.childNodes[1]);
    // new_div.insertAdjacentHTML(it);
    console.dir(it);

    let del_div_check = document.querySelector('.del_div');
    del_div_check.appendChild(new_div);




}



setBody();