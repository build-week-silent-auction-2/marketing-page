

let panel = $('.panels');
let item = $('.items');
let amount= $('.amt');
let det = $('.details');
let imgArr =[];

amount.attr('value','$');


item.on('click',function(){
    let eleParent = $(this).parent();
    // eleParent.addClass('.details').css('display','block');
    // let clicked = $(this);
    // let detClone = $('.details').clone(true);
    // console.log(clicked + " " + detClone);
    // $('.details').toggle('slow');
    // detClone.append(clicked);
    
})

det.on('click',function(){
    $('.details').toggle('slow');
})



