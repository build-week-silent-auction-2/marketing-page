

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








