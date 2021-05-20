$(function () {
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        $("#body").css("background-position", "0 " + parseInt(-y / 5) + "px");

        if ($(this).scrollTop() > $(this).height()) {
            $("#scroll_to_top").fadeIn();
        } else {
            $("#scroll_to_top").fadeOut();
        };
    });

    // 「TOPに戻る」ボタンがクリックされた時の動きを指定
    $("#scroll_to_top").click(function () {
        // ページの一番上までスクロール
        $('body, html').animate({ scrollTop: 0 }, 300, 'linear');
    })


});


