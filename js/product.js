
<<<<<<< HEAD

let panel = $('.panels');
let item = $('.items');
let amount= $('.amt');
let det = $('.details');
let imgArr =[];

amount.attr('value','$0.00');

 
item.on('click',function(){
    if($('.details').has('img').length){
    $(".details img:last-child").remove();}
    else{
appendMe($(this));
function appendMe(x){
    det.toggle('slow');
    let th = $(x);
    let cl = th.clone(true);
    console.log("here " + " "+x)
    $('.details').append(cl);
}
}});

det.on('click',function(e){
    $(".details img:last-child").remove();
    det.toggle('slow');
})



=======
>>>>>>> 78d9794df6b26a30f12697af0718a89b074799f8

let panel = $('.panels');
let item = $('.items');
let amount= $('.amt');
let det = $('.details');
let imgArr =[];

amount.attr('value','$0.00');


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



