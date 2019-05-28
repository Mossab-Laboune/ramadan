/*global $, alert, console*/

$(function (){
    'use strict';

    //Adjuste Header Height

    var myHeader = $('.header');

    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());
        });
    

    //Links Add Active Class

    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    //Smoth Scroll To Div

    $('.links li a').click(function () {
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top

        }, 1000);
    });

    //Trigger MixItUp

    var mixer = mixitup('#container');
    var mixer = mixitup('#container', {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });

    //Adjuste Shuffle Links
    $('.shuffle li').click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Trigger NiceScroll
    $('html').niceScroll({
        cursorcolor: '#037365',
        cursorwidth: '10px',
        cursorborder: '1px solid #037365',
        cursorborderradius: '0px'
    });
    // Add Scroll Top Button


    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });





}); 
