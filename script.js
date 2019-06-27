$("#news").click(function(){
    $("body").empty();
})

$("")

function myFunction() {
var myElement = $('.mission');

$(window).on('scroll', function () {
    var st = $(this).scrollTop();
    myElement.css({
        'opacity': 1 - st / 600
    });
});
}
