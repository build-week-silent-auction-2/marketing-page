let panel = $('.panels');
let item = $('.items');
let amount = $('.amt');
let det = $('.details');
let imgArr = [];
$('.main').on("scroll", function (event) {
    console.log("scrolling")

    $('#navbar').css("display", "none");

})

let flag = false;
amount.attr('value', '$0.00');


item.on('click', function (e) {
    if (flag === true) {
        $('.details').toggle();
        flag = false;
    }
    if ($('.details').has('img').length) { //check to see if there is an image displayed 
        $(".details img:last-child").remove(); //if so then remove it first
    } else {
        appendMe($(this)); //grab the clicked image off to appendMe() function

        function appendMe(x) { //creates a clone of the image to fill the large image holder
            det.toggle('slow');
            let th = $(x);
            let cl = th.clone(true);
            console.log("here " + " " + x)
            $('.details').append(cl);
            flag = true;
        }
    }
});
event.stopPropagation();
det.on('click', function (e) { //removes the large image 


    $(".details img:last-child").remove();
    det.toggle('slow');
})


$('.item').hover(tooltip(event));

function tooltip(event) {
    $(".items").tooltip({
        position: {
            my: "left top",
            at: "left bottom"
        },
        open: function (event, ui) {
            ui.tooltip.animate({
                top: ui.tooltip.position().top + 10
            }, "slow");
        }
    });

};
