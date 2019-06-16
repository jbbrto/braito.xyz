$(document).ready(function() {

    // console.log("jQuery active");

    // Query if mobile device
    if ($(window).width()<768){

        // Change text for mobile touch devices
        $("#item-text").html("<b>Touch and hold the 'Google Dummy Ad' in order to reveal your very own personalized ad.</b>");

        // Mobile touch-hold
        $("#ad").bind('touchstart', function(){
            $("#ad").attr('src', 'img/redbull_Large_skyscraper_300x600.png');
            console.log("touchstart");
        });
        $("#ad").bind('touchend', function(){
            $("#ad").attr('src', 'img/ad_Large_skyscraper_300x600.png');
            console.log("touchend");
        });


    } else {

        <!-- jQuery Library einlesen -->
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";

        $("#ad").mouseover(function () {
            $("#ad").attr('src', 'img/redbull_Large_skyscraper_300x600.png');
        });

        $("#ad").mouseout(function () {
            $("#ad").attr('src', 'img/ad_Large_skyscraper_300x600.png');
        });

    }





});

