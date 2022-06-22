var mysearch = document.querySelector('.mysearch');
var mylist = document.querySelectorAll('.store_items');


mysearch.addEventListener('keyup', e => {
    e.preventDefault();
    searchfilter = e.target.value.toLowerCase().trim()
    mylist.forEach((elem) => {
        // console.log(elem.textContent)
        // console.log(searchfilter);

        if (elem.textContent.toLowerCase().includes(searchfilter)) {
            elem.style.display = 'block';
        }
        else {
            elem.style.display = 'none';
        }

        // if(elem.dataset.myname.includes(searchfilter)){
        //     elem.style.display = 'block';
        // }
        // else{
        //     elem.style.display = 'none';
        // }
    })
})


// let mylist = document.querySelectorAll('.store_items');
// let mysearch = document.querySelector('.mysearch');
// mysearch.addEventListener('keyup', e => {
//     mylist.forEach(elem => {

//         // console.log(elem.getAttribute('name'))
//         console.log(e.target.value)
//         console.log(e.target.name)
//     })


// })




function selectbuttons(buttons) {
    buttons.forEach(elem => {
        elem.addEventListener('click', event => {
            event.preventDefault();
            // console.log(event.target.textContent.toLowerCase())
            mylist.forEach(list => {
                if (list.classList.contains(event.target.dataset.filter) || event.target.dataset.filter == 'all') {
                    list.style.display = 'block';
                }
                else {
                    list.style.display = 'none';
                }
            })
            // res = mylist.filter(me => me.classList.contains('doughnut'))
            // console.log(res);
            // if(elem.textContent.includes)
            // console.log(elem.textContent)
        })
    })
}

buttons = document.querySelectorAll('.btn')
selectbuttons(buttons)


// to create a popup on the store items in the center of the screen.
// function openpopup() {
//     img_list = Array.from(document.querySelectorAll('.item'));
//     let fluid = document.querySelector('.fluid_container')
//     let mypopimg = document.querySelector('.mypopimg');
//     // console.log(img_list.indexOf(img_list[3]));

//     img_list.forEach(item => {
//         item.addEventListener('click', event => {

//             mypopimg.src = event.target.src;
//             fluid.classList.add('show');
//             // console.log(e.target.img)
//             console.log('its happening from start')

//             //activating forward and backward buttons.
//             curr_index = img_list.indexOf(item)
//             let imgclass_list = document.querySelectorAll('.itemimgclass');
//             let left_button = document.querySelector('.fa-caret-left');

//             left_button.addEventListener('click', btnevent => {
//                 console.log(btnevent.target)
//                 curr_index--;
//                 if (curr_index < 0) {
//                     curr_index = imgclass_list.length - 1;
//                     console.log('else index', curr_index);
//                     // mypopimg.src = imgclass_list[curr_index].src;

//                 }

//                 console.log('my current index', curr_index)
//                 mypopimg.src = imgclass_list[curr_index].src;
//                 // console.log('index after reduced', curr_index)


//                 // console.log(img_list.indexOf(item))
//             })

//         })
//     })
//     closepopup();
// }


function mypopup(){
    // console.time('mytime'); to count the time start
    let store_items = document.querySelectorAll('.store_items');
    let store_images = document.querySelectorAll('.itemimgclass');
    let fluid_container = document.querySelector('.fluid_container');
    let mypopimg = document.querySelector('.mypopimg');

    let img_array = [];
    store_images.forEach(item =>{
        img_array.push(item.src);
    })
     
    //to popup the image of the stored items after clicking on it.
    store_items.forEach(item =>{
        item.addEventListener('click', event=>{
            mypopimg.src = event.target.src;
            fluid_container.classList.add('show');
            counter = img_array.indexOf(event.target.src);
        })
    })

  
    let buttons = document.querySelectorAll('.pop_btn');
    buttons.forEach(button=>{
        button.addEventListener('click', e=>{
            if(e.target.classList.contains('fa-caret-left')){
                if(counter>0){
                    // index = counter-1;
                    counter--;
                    mypopimg.src = img_array[counter];
                    // counter = index;
                }
                else{
                    counter = store_images.length-1;
                    mypopimg.src = img_array[counter]; 
                }
            }
            // for the right button
            if(e.target.classList.contains('fa-caret-right')){
                if(counter < store_images.length-1){
                    // index = counter+1;
                    counter++;
                    mypopimg.src = img_array[counter];
                    // counter = index;
                }
                else{
                    counter = 0;
                    mypopimg.src = img_array[counter]; 
                }
            }
         
        })
    })
    closepopup();
    // console.timeEnd('mytime') to count the time
}
mypopup();



function closepopup() {
    let close_button = document.querySelector('.close_btn');
    let fluid = document.querySelector('.fluid_container')
    close_button.addEventListener('click', event => {
        fluid.classList.remove('show');
        // fluid.style.display = 'none';
        // window.location.reload(true);
    })

}

// openpopup()
// closepopup()


// function click_buttons() {
//     let mybuttons = document.querySelector('.pop_btn');
//     let myimages = document.querySelectorAll('.itemimg')
//     mybuttons.forEach(button => {
//         button.addEventListener('click', event => {
//             myimages
//         })
//     })
// }