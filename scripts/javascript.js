$(document).ready(function(){
    $("#font_size_more").click(function(){
    	tamaño = parseInt($(".container p").css("font-size"));
    	tamaño ++;
        $(".container p").css('font-size',tamaño+'px');
    });
    $("#font_size_less").click(function(){
    	tamaño = parseInt($(".container p").css("font-size"));
    	tamaño --;
        $(".container p").css('font-size',tamaño+'px');
    });
});