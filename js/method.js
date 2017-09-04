getHeader("method")

var scope = {
    menu: [
        {name:'科目训练营',to:"kemu"},
        {name:'经验提分团',to:"jingyan"},
        {name:'心理疏导室',to:"xinli"},
        {name:'家长必修课',to:"jiazhang"}
    ],
    videolist:[
        {type: "kemu",list: [
            {name: "程明皓",img:"程明皓  套用公式就能写出满分作文.jpg",code:"二维码",v_name:"套用“公式”就能写出满分作文",link:"http://t.cn/RCwYwb7"},
            {name: "张云翼",img:"张云翼  没有最强大脑一样玩转生物.jpg",code:"二维码",v_name:"没有最强大脑一样玩转生物",link:"http://t.cn/RCwjijM"},
            {name: "姓名",img:"海报图片",code:"二维码",v_name:"视频描述",link:"hSFAq1V4H"},

        ]},
        {type: "jingyan",list: [
            {name: "姓名",img:"海报图片",code:"二维码",v_name:"视频描述",link:"hSFAq1V4H"},

        ]},
        {type: "xinli",list: [
            {name: "姓名",img:"海报图片",code:"二维码",v_name:"视频描述",link:"hSFAq1V4H"},

        ]},
        {type: "jiazhang",list: [
            {name: "姓名",img:"海报图片",code:"二维码",v_name:"视频描述",link:"hSFAq1V4H"},

        ]},
    ]
}

// 加载目录
var show_menu = function () {
    var menu = "";
    var to_div = "";
    $.each(scope.menu,function (i, v) {
        menu += '<li class="menu" data-to="'+ v.to +'"><span class="cir">'+ v.name +'</span></li>';

        to_div += '<div id="'+ v.to +'" class="to-div hide"></div>';
    })
    $("#menu-ul").html(menu);
    $(".right-cont").html(to_div);

    var first = $(".menu").eq(0);
    first.addClass("active");

    $("#" + first.data("to")).removeClass("hide");
}
show_menu();


$(function () {
    $(".menu.active").next().css({"padding":"16px 0 25px"});

    var show_videos = function () {
        var isPc = $(window).width() <= 768 ? false : true;
        console.log("pc:"+isPc);

        $.each(scope.videolist, function (i, v) {
            var id = v.type, list = v.list;
            var html = "";

            // 某一个板块
            $.each(list, function (j, t) {
                var link_a = "", code_html = "";
                if(isPc){
                    link_a = '<a class="play-icon" href="javascript:void(0);"><img src="../resource/major/play_btn_04.png"></a>';
                    code_html = '<div class="cover">\n' +
                        '                        <div class="code-box">\n' +
                        '                            <img class="lazy code-img" data-original="../resource/method/videopic/'+ t.code +'">\n' +
                        '                            <span class="info">扫码即可播放</span>\n' +
                        '                        </div>\n' +
                        '                    </div>'
                }else{
                    link_a = '<a class="play-icon" href="'+ t.link +'"><img src="../resource/major/play_btn_04.png"></a>';
                    code_html = ""
                }

                html += '<div class="video">\n' +
                    '                <div class="img-box">\n' +
                    '                    <img class="lazy video-img" data-original="../resource/method/videopic/'+ t.img +'">\n' +
                    link_a + code_html +
                    '                </div>\n' +
                    '                <p class="video-info">'+ t.name + "—" + t.v_name +'</p>\n' +
                    '            </div>'
            })

            $("#"+ id ).html(html);
            $($(".video-img")[0]).attr("id","firstBox")
        })

    }

    var bind_event = function () {

        $(".menu").on("click",function () {
            $(this).siblings().removeClass("active").css({"padding":"25px 0"});
            $(this).addClass("active").css({"padding":"25px 0 34px"});
            $(this).next(".menu").css({"padding":"16px 0 25px"})

            //回顶
            $("body").animate({scrollTop: $(".right-cont").offset().top - 80 }, {duration: 500,easing: "swing"});

            var id = $(this).data("to");
            $("#"+ id).removeClass("hide").siblings().addClass("hide")
            lazy();
        })

        window.addEventListener("resize",function () {
            var img = $("#firstBox");
            if(img.attr("src")){
                var v_height = img.height();
                $(".img-box").css({'height': v_height});
            }
        })
    }

    var isLoaded = false;
    var in_id = setInterval(function () {
        console.log(isLoaded)
        if(isLoaded){
            clearInterval(in_id);
        }
        var img = $("#firstBox");
        if(img.attr("src")){
            isLoaded = true;
            var v_height = img.height();
            console.log(v_height)
            $(".img-box").css({'height': v_height});
        }
    },100) // lazy图片灰色背景是正方形。。。

    show_videos();
    bind_event();
    getFooter();
    lazy();
})


