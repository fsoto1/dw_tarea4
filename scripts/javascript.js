$(document).ready(function(){
    $("#font_size_more").click(function(){
        $(".container p").css('font-size',parseInt($(".container p").css("font-size"))+1+'px');
    });
    $("#font_size_less").click(function(){
        $(".container p").css('font-size',parseInt($(".container p").css("font-size"))-1+'px');
    });
    $('#font_family').change(function(){
    	$(".container").css("font-family",$('option:selected').text());
	});
	$('#bgcolor').change(function(){
    	$("body").css("background",$('#bgcolor').val());
	});
});