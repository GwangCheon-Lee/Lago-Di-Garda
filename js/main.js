$(function () {
    $(window).scroll(function () {
        let user_height = $(document).scrollTop();
        let html_height = $(window).height();
        if (user_height > 60) {
            $(".con1_left h2").animate({ left: 0, opacity: 1 }, 1500);
            $(".con1_left p").animate({ right: 0, opacity: 1 }, 1500);
            $(".con1_left h3").animate({ left: 0, opacity: 1 }, 1500);
        }
        if (user_height > 2500) {
            $(".con2_text h3").animate({ left: 0, opacity: 1 }, 1500);
            $(".con2_text p").animate({ left: 0, opacity: 1 }, 1500);
            $(".con2_text span").animate({ left: 0, opacity: 1 }, 1500);
        }
        if (user_height > 1255) {
            $(".rooms_box").animate({ left: "50%", opacity: "1" }, 1500);
        }
        if (user_height > 2000 && $(window).width() < 1200) {
            $(".con2_text h3").animate({ left: 0, opacity: 1 }, 1500);
            $(".con2_text p").animate({ left: 0, opacity: 1 }, 1500);
            $(".con2_text span").animate({ left: 0, opacity: 1 }, 1500);
        }
    });
    $("body").on("mousewheel", function (e) {
        var wheel = e.originalEvent.wheelDelta;
        var sHeight = $(document).scrollTop();
        if (wheel > 0) {
            // 스크롤 올렸을 때
            if (sHeight < 100) {
                $(".menu").slideDown();
            }
        } else {
            // 스크롤 내렸을 때
            if (sHeight >= 100) {
                $(".menu").slideUp();
                $(".menu a").css("color", "#fff");
                $("polygon").css("fill", "#fff");
                $("path").css("fill", "#fff");
                $(".pc_menu")
                    .stop()
                    .animate({ top: "-35%" }, 1000, function () {
                        $(".pc_menu").css("display", "none");
                    });
                pc_menu_toggle = 0;
            }
        }
    });
    // 스크롤 이벤트
    let pc_menu_toggle = 0;
    $(".menu a").on("click", function () {
        pc_menu_toggle++;
        if (pc_menu_toggle == 1) {
            $(".pc_menu").css("display", "flex");
            $(".menu a").css("color", "#000");
            $("polygon").css("fill", "#000");
            $("path").css("fill", "#000");
            $(".pc_menu").stop().animate({ top: "0" }, 500);
        } else {
            $(".menu a").css("color", "#fff");
            $("polygon").css("fill", "#fff");
            $("path").css("fill", "#fff");
            $(".pc_menu")
                .stop()
                .animate({ top: "-35%" }, 1000, function () {
                    $(".pc_menu").css("display", "none");
                });
            pc_menu_toggle = 0;
        }
    });
    // pc메뉴 | 스크롤함수
    set_size();
    $(window).resize(function () {
        set_size();
    });
    function set_size() {
        if (innerWidth < 640) {
            pc_menu_toggle = 0;
            $(".pc_menu").css("display", "none");
            $(".pc_menu").css("top", "-35%");
            $(".menu li:nth-child(4) svg").css("margin-right", "40%");
            $("polygon").css("fill", "#fff");
            $("path").css("fill", "#fff");
            // PC화면에서 모바일 화면으로 줄였을때 변수 및 CSS 초기화
        } else {
            $(".right").css("right", "-80%");
            $(".left").css("right", "-120%");
            $(" .m_menu_box ul > li").eq(0).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(1).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(2).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(3).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(4).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(5).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(6).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(7).css("right", "-100%");
            $(" .m_menu_box ul > li").eq(8).css("right", "-100%");
            if ($(".pc_menu").css("display") == "flex") {
                $(".menu li a").css("color", "#000");
            } else {
                $(".menu li a").css("color", "#fff");
            }
            $(".menu li:nth-child(4) svg").css("margin-right", "0%");
            $(".m_menu_box").css("display", "none");
        }
    }

    $(".hamburger_box").on("click", function () {
        $(".m_menu_box").css("display", "flex");
        $(".m_menu_box .right").animate({ right: 0 }, 500, function () {
            $(" .m_menu_box ul > li").eq(0).animate({ right: 0 }, 600);
            $(" .m_menu_box ul > li").eq(1).animate({ right: 0 }, 700);
            $(" .m_menu_box ul > li").eq(2).animate({ right: 0 }, 800);
            $(" .m_menu_box ul > li").eq(3).animate({ right: 0 }, 900);
            $(" .m_menu_box ul > li").eq(4).animate({ right: 0 }, 1000);
            $(" .m_menu_box ul > li").eq(5).animate({ right: 0 }, 1100);
            $(" .m_menu_box ul > li").eq(6).animate({ right: 0 }, 1200);
            $(" .m_menu_box ul > li").eq(7).animate({ right: 0 }, 1300);
            $(" .m_menu_box ul > li").eq(8).animate({ right: 0 }, 1400);
        });
        $(".m_menu_box .left").animate({ right: 0 }, 800);
    });
    // 컨텐츠를 오른쪽으로 밀어놨기때문에 그 컨텐츠를 다시 가져와야함.
    $(".m_menu_box .left").click(function () {
        $(" .m_menu_box ul > li").eq(0).animate({ right: "-100%" }, 600);
        $(" .m_menu_box ul > li").eq(1).animate({ right: "-100%" }, 700);
        $(" .m_menu_box ul > li").eq(2).animate({ right: "-100%" }, 800);
        $(" .m_menu_box ul > li").eq(3).animate({ right: "-100%" }, 900);
        $(" .m_menu_box ul > li").eq(4).animate({ right: "-100%" }, 1000);
        $(" .m_menu_box ul > li").eq(5).animate({ right: "-100%" }, 1100);
        $(" .m_menu_box ul > li").eq(8).animate({ right: "-100%" }, 1400);
        $(" .m_menu_box ul > li").eq(7).animate({ right: "-100%" }, 1300);
        $(" .m_menu_box ul > li")
            .eq(6)
            .animate({ right: "-100%" }, 1200, function () {
                $(".m_menu_box .right").animate({ right: "-80%" }, 300);
                $(".m_menu_box .left").animate({ right: "-120%" }, 400, function () {
                    $(".m_menu_box").css("display", "none");
                });
            });
    });
    // 메뉴 애니메이션
    $(".right_arrow").on("click", function () {
        right_arrow();
    });
    $(".left_arrow").on("click", function () {
        left_arrow();
    });
    $(".dot > div:first").on("click", function () {
        left_arrow();
    });
    $(".dot > div:last").on("click", function () {
        right_arrow();
    });

    function right_arrow() {
        $(".con1_right_warp").stop().animate({ left: "-100%" }, 1200, "easeOutCirc");
        $(".con1_right2 > p").stop().animate({ left: "0%", opacity: 1 }, 1200);
        $(".con1_right1 > p").stop().animate({ right: "30%", opacity: 0 }, 1200);
        $(".dot2").css("background", "black");
        $(".dot1").css("background", "#fff");
    }

    function left_arrow() {
        $(".con1_right_warp").stop().animate({ left: "0%" }, 1200, "easeOutCirc");
        $(".con1_right2 > p").stop().animate({ left: "30%", opacity: 0 }, 1200);
        $(".con1_right1 > p").stop().animate({ right: "0%", opacity: 1 }, 1200);
        $(".dot1").css("background", "black");
        $(".dot2").css("background", "#fff");
    }
    left_arrow();
    // content1_right_box_arrow 클릭했을때
    $(".popup_images").on("click", function (e) {
        $(".popup").css("display", "block");
        $(".popup_box img").attr("src", $(this).attr("src"));
    });
    $(".popup").on("click", function () {
        $(".popup").css("display", "none");
    });
    let chatToggle = 0;
    $(".chat1").click(function () {
        chat();
    });
    $(".chat2").click(function () {
        chat();
    });

    function chat() {
        chatToggle++;
        if (chatToggle == 1) {
            $(".chat").css("width", "300px");
            $(".chatting").css("display", "block");
        } else {
            $(".chat").css("width", "200px");
            $(".chatting").css("display", "none");
            chatToggle = 0;
        }
    }
    $(".input_box input").keyup(function (e) {
        if (e.keyCode == 13) {
            if ($(".input_box input").val() !== "") {
                let nowDate = String(new Date());
                console.log();
                let userTxt = $(".input_box input").val();
                $(".input_box input").val("");
                $(".chatting_box ul").append(
                    "<li class='guest'>" +
                        "<span>" +
                        nowDate.substr(10, 14) +
                        "</span>" +
                        "<p>" +
                        userTxt +
                        "</p>" +
                        "</li>"
                );
                $(".chatting_box ul").scrollTop($(".chatting_box ul").outerHeight() * 999);
            }
        }
    });
    function ajax() {
        $.ajax({
            url: "data/data.json",
            dataType: "JSON",
            success: function (data) {
                for (i in data) {
                    if (data[i].id == "guest") {
                        $(".chatting_box ul").append(
                            "<li class='guest'>" +
                                "<span>" +
                                data[i].time +
                                "</span>" +
                                "<p>" +
                                data[i].text +
                                "</p>" +
                                "</li>"
                        );
                    } else {
                        $(".chatting_box ul").append(
                            "<li class='counselor'>" +
                                "<p>" +
                                data[i].text +
                                "</p>" +
                                "<span>" +
                                data[i].time +
                                "</span>" +
                                "</li>"
                        );
                    }
                }
            },
        });
    }
    ajax();
});
