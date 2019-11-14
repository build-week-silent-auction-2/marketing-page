

let panel = $('.panels');
let item = $('.items');
let amount= $('.amt');
let det = $('.details');


amount.attr('value','$');


item.on('click',function(){
    // css('width', '40vw', 'height', '40vh','position','absolute');
    // $(this).parent().toggleClass('details');
    // $(this).toggleClass('details');
    $('.details').toggle('slow');
})

det.on('click',function(){
    $('.details').toggle('slow');
})



