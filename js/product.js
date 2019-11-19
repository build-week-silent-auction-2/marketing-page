let panel = $('.panels');
let item = $('.items');
let amount = $('.amt');
let det = $('.details');
let imgArr = [];

amount.attr('value', '$0.00');


item.on('click', function (e) {
    if ($('.details').has('img').length) {//check to see if there is an image displayed 
        $(".details img:last-child").remove();//if so then remove it first
    } else {
        appendMe($(this));//grab the clicked image off to appendMe() function

        function appendMe(x) {//creates a clone of the image to fill the large image holder
            det.toggle('slow');
            let th = $(x);
            let cl = th.clone(true);
            console.log("here " + " " + x)
            $('.details').append(cl);
        }
    }
});

det.on('click', function (e) {//removes the large image 
    e.preventDefault();
    $(".details img:last-child").remove();
    det.toggle('slow');
})


// let tooltips = document.querySelectorAll('.tooltip');

// window.onmousemove = function (e) {
//     let x = (e.clientX + 20) + 'px',
//         y = (e.clientY + 20) + 'px';
//     for (let i = 0; i < tooltips.length; i++) {
//         tooltips[i].style.top = y;
//         tooltips[i].style.left = x;
//     }
// };
