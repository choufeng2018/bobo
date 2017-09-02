$(function() {

    $("img.lazy").lazyload({effect: "fadeIn"});

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
        if(link.hasClass("show")){
            link.slideUp(400).removeClass("show");
            return;
        }
        link.slideDown(400).addClass("show")

    })
}


var getFooter = function (ismap) {
    var foot = '';
    var map = '<div class="map">\n' +
        '                    <a href="http://ditu.amap.com/place/B0FFG717BZ" target="_blank"><img src="resource/index/index_png_24_08.png"></a>\n' +
        '                </div>'

    foot = '<div class="foot">\n' +
        '                    <form class="ft-form" action="#" method="post" onsubmit="return false;">\n' +
        '                        <label>体验课程</label>\n' +
        '                        <input class="ft-input" type="text" name="name" value="姓名">\n' +
        '                        <input class="ft-input" type="text" name="phone" value="手机号">\n' +
        '                        <input class="submit" type="submit" value="立即预约">\n' +
        '                    </form>\n' +
        '                    <div class="copy">\n' +
        '                        <p>版权所有&copy;学霸播播 北京历说教育科技有限公司&nbsp;&nbsp;京ICP备16056024号-1</p>\n' +
        '                        <p>技术支持：<a href="http://www.qiniuniu.com/" target="_blank">企牛牛</a></p>\n' +
        '                    </div>\n' +
        '                </div>'

    if(ismap){
        foot = map + foot;
    }
    $("footer").html(foot)
}