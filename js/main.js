/*Global $,alert,console*/
$(function(){
    'use strict';
   
  
//Adjust Header Height
var myHeader=$(".header"),
    mySlider=$('.bxslider');
    
    myHeader.height($(window).height());
    //console.log($(window).height());
$(window).resize(function(){
    //console.log($(window).height());
    myHeader.height($(window).height());
    mySlider.each(function(){
   
    $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) /2);
});
});

//Links Active Class
$('.links li a').click(function(){
    $(this).parent() .addClass('active').siblings().removeClass('active');
}); 

//Adjust Bxslider List Item In The Center
mySlider.each(function(){
   
    $(this).css('paddingTop',($(window).height() - $('.bxslider li').height()) /2);
});
    
//Trigger Bx-Slider
 mySlider.bxSlider({
     pager:false
 }); 
   
//Smooth Scroll
$('.links li a').click(function(){ 
    $('html , body').animate({
        scrollTop: $('#' + $(this).data('val')).offset().top
    },1000);
});    
    
//Our auto slider code
(function autoSlider(){
    $('.slider .active').each(function(){
       if(!$(this).is(':last-child')){
    $(this).delay(3000).fadeOut(1000,function(){
        $(this).removeClass('active').next().addClass('active').fadeIn();
        autoSlider();
    });
           }else{
               $(this).delay(3000).fadeOut(1000,function(){
                   $(this).removeClass('active');
                   $('.slider div').eq(0).addClass('active').fadeIn();
                   autoSlider();
               });
           }  
    });
   
}());

//Trigger Mixitup
$('#Container').mixItUp();

$('.shuffle li').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
});
    
//Trigger NiceScroll

$('html').niceScroll({
    cursorcolor:'#1abc9c',
    cursorwidth:'10px',
    cursorborder:'1px solid #1abc9c',
    cursorborderradius:0
});    
    
});
