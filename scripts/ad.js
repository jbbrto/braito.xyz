$(document).ready(function() {

    alert("jQuery active");

    $("img-ad").mouseover(function() {
        $("img-ad").attr('src','img/test.png');
    });

    $("img-ad").mouseout(function() {
        $("img-ad").attr('src','img/ad_AX_plain.jpg');
    });

});

