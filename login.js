$(document ).ready(function() {
    $("#login").click(function(){
        $(".container-signup").css(
            "display","none"
        );
        $(".container-login").css(
            "display","block"
        );
    });
    $("#signup").click(function(){
        $(".container-login").css(
            "display","none"
        );
        $(".container-signup").css(
            "display","block"
        );
    });
});