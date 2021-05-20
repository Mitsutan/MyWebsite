$(function () {
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        $('#body').css('background-position', '0 ' + parseInt(-y / 5) + 'px');
    });
});