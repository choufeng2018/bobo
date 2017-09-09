$(function() {
    var com_width = $(window).width();
    $("head").append('<link rel="icon" href="../resource/index/ico.png">')
    $("img.lazy").lazyload({effect: "fadeIn"});

    setTimeout(function () {
        window.addEventListener("scroll",function () {
            var scroll_y = window.scrollY,
                doc_h = document.documentElement.offsetHeight,
                win_h = $(window).height();
            // console.log(doc_h - win_h)
            // console.log(scroll_y)
            if(scroll_y  == doc_h - win_h){
                $(".form-box").animate({"bottom":"70px"})

                if(com_width > 768){
                    $(".fix-box").animate({"bottom":"180px"})
                }else{
                    $(".fix-box").animate({"bottom":"225px"})
                }

            }else{
                $(".form-box").css({"bottom":"0px"})
                if(com_width > 768){
                    $(".fix-box").css({"bottom":"110px"})
                }else{
                    $(".fix-box").css({"bottom":"20px"})
                }
            }
        })
    },400)

    $(document).on("click",".edit-a",function () {
        window.scrollY = document.documentElement.clientHeight
    })

});

var lazy = function () {
    $("img.lazy").lazyload({effect: "fadeIn"});
}

var getHeader = function (page) {
    page = page || 'index';
    var li_list = "";

    if(page == "index"){
        li_list = '<li class="index"><a href="index.html">首页</a><span>/</span></li>\n' +
        '                <li class="daka"><a href="pages/daka.html">学神大咖</a><span>/</span></li>\n' +
        '                <li class="major"><a href="pages/major.html">专业介绍</a><span>/</span></li>\n' +
        '                <li class="method"><a href="pages/method.html">学习方法</a><span>/</span></li>\n' +
        '                <li class="about"><a href="pages/about.html">关于我们</a><span>/</span></li>\n'
    }else{
        li_list = '<li class="index"><a href="../index.html">首页</a><span>/</span></li>\n' +
            '                <li class="daka"><a href="daka.html">学神大咖</a><span>/</span></li>\n' +
            '                <li class="major"><a href="major.html">专业介绍</a><span>/</span></li>\n' +
            '                <li class="method"><a href="method.html">学习方法</a><span>/</span></li>\n' +
            '                <li class="about"><a href="about.html">关于我们</a><span>/</span></li>\n'
    }

    var head = '<div class="head bb-width">\n' +
        '        <div class="logo-box">\n' +
        '            <a href="index.html"></a>\n' +
        '        </div>\n' +
        '        <div class="link-box">\n' +
        '            <ul>\n' +
                        li_list +
        '                <li><p href="javascript:void(0);">400-920-7568</p></li>\n' +
        '            </ul>\n' +
        '        </div>\n' +
        '    </div>'

    var btn = '<span class="menu-btn"></span>'

    $("header").html(btn + head);
    $("."+page).addClass("current");

    $(".menu-btn").on("click",function () {
        var link = $(".link-box");
        // link.css("margin-top","-2px")
        if(link.hasClass("show")){
            link.slideUp(400).removeClass("show");
            return;
        }
        link.slideDown(400).addClass("show")

    })
}


var getFooter = function (ismap) {

    var isAbout = location.pathname.indexOf("about") <= -1 ? false : true;
    var isIndex = location.pathname.indexOf("index") <= -1 ? false : true;
    var map_path = 'resource/index/index_png_24_08.png',
        qiniuniu = '../resource/index/qiniuniu.png',
        fix_form_1 = '<div class="form-box">',
        fix_form_2 = '</div>';
    if(isAbout){
        map_path = '../resource/index/index_png_24_08.png'
    }

    if(isIndex){
        qiniuniu = 'resource/index/qiniuniu.png';
        fix_form_1 = '';
        fix_form_2 = '';
    }

    var foot = '';
    var map = '<div class="map">\n' +
        '                    <a href="http://ditu.amap.com/place/B0FFG717BZ" target="_blank"><img class="lazy" src="'+ map_path +'"></a>\n' +
        '                </div>'

    foot = '<div class="foot" id="foot">\n' + fix_form_1 +
        '                    <form class="ft-form" action="../email.php" method="post" onsubmit="return check_form();">\n' +
        '                        <label>体验课程</label>\n' +
        '                        <input id="ft-name" class="ft-input" type="text" name="name" placeholder="姓名">\n' +
        '                        <input id="ft-phone" class="ft-input" type="text" name="phone" placeholder="手机号">\n' +
        '                        <input class="submit" type="submit" value="立即预约">\n' +
        '                    </form>\n' + fix_form_2 +
        '                    <div class="copy">\n' +
        '                        <p>版权所有&copy;学霸播播 北京历说教育科技有限公司</p>\n' +
        '                        <p>京ICP备16056024号-1</p>\n' +
        '                        <p>技术支持：<a href="http://www.qiniuniu.com/" target="_blank"><img style="vertical-align: middle" src="'+ qiniuniu +'"></a></p>\n' +
        '                    </div>\n' +
        '                </div>'

    if(ismap){
        foot = map + foot;
    }
    $("footer").html(foot);
}

function check_form() {
    var bl = true;

    var o_name = $("#ft-name"), o_phone = $("#ft-phone");
    if(o_name.val() == ""){
        o_name.css("border-color","#d35858");
        bl = false;
    }else{
        o_name.css("border-color","white");
    }
    if(o_phone.val() == ""){
        o_phone.css("border-color","#d35858");
        bl = false;
    }else{
        o_phone.css("border-color","white");
    }
    return bl;
}


var getFixed = function () {
    var fix = '<div class="fix-box">\n' +
        '    <a class="fix-a" href="tel:400-920-7568">\n' +
        '    <div class="f-b phone-box">\n' +
        '        <span class="f-ic ic-p"></span>\n' +
        '        <span class="f-txt tp">400-920-7568</span>\n' +
        '    </div>\n' +
        '    </a>\n' +
        '    <a class="fix-a edit-a" href="#foot">\n' +
        '        <div class="f-b edit-box">\n' +
        '            <span class="f-ic ic-e"></span>\n' +
        '            <span class="f-txt tb">立即预约</span>\n' +
        '        </div>\n' +
        '    </a>\n' +
        '    <a class="fix-a" href="#">\n' +
        '    <div class="f-b back-box">\n' +
        '        <span class="f-ic ic-b"></span>\n' +
        '        <span class="f-txt tb">返回顶部</span>\n' +
        '    </div>\n' +
        '    </a>\n' +
        '</div>';
    $("body").append($(fix))
}
