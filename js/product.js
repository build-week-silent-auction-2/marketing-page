
$(document).ready(function () {
    if (!$.browser.webkit) {
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    }
});



function open(){
    $('.slide').hide("fade",200);
$('#cover').show( "slide", { direction: "up"  }, 500 );
contain.show( "slide", { direction: "up"  }, 500 );
    arr.forEach(function (el) {
        el.hide( "slide", { direction: "down"  }, 500 );
    });

    let clicked = $(this);
    for(let i =0; i < 4; i++){

        if(clicked.data("match") === arr[i].data("match")){
            arr[i].show( "slide", { direction: "up"  }, 500 );
        }
   }}
