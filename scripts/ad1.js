$(document).ready(function() {

    alert("jQuery active");

    $("#img1").mouseover(function() {
        $("#img1").attr('src','img/test.png');
    });

    $("#img1").mouseout(function() {
        $("#img1").attr('src','img/ad_AX_plain.jpg');
    });

})

