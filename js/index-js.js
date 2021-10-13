// Calling the navigation file
$(function(){
    $("#navigation").load("navigation.html");
});
// Calling the footer file
$(function(){
    $("#footer").load("footer.html");
});
// Visible - invisible header
$(function(){
    var scroll = $(document).scrollTop();
    var navHeight = $('.nav-area').outerHeight();

    $(window).scroll(function(){

        var scrolled = $(document).scrollTop();

        if(scrolled > navHeight){
            $('.nav-area').addClass('animate');
        }else{
            $('.nav-area').removeClass('animate');
        }

        if(scrolled > scroll){
            $('.nav-area').removeClass('sticky');
        }else{
            $('.nav-area').addClass('sticky');
        }
        scroll = $(document).scrollTop();
    });
});