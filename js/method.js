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
            {name: "唐定耀",img:"唐定耀+对外汉语专业.jpg",code:"唐定耀—汉语国际教育专业.jpeg",major:"汉语言国际教育",v_name:"汉语言国际教育专业",link:"https://st.h5.xiaoe-tech.com/st/1SFAq1V4H"},
            {name: "刘安妮",img:"刘安妮+国学+临风鉴月说国学.png",code:'刘安妮—临风鉴月说国学.jpeg',major:"国学",v_name:"临风鉴月说国学",link:"https://st.h5.xiaoe-tech.com/st/0WkgYw8AH"},
            {name: "杨慧玲",img:"杨慧玲+广告学+脑同学欢迎您.png",code:'杨慧玲—脑洞学，欢迎你.jpeg',major:"广告学",v_name:"脑洞学，欢迎您",link:"https://st.h5.xiaoe-tech.com/st/7I96T27lM"},

        ]},
        {type: "jingyan",list: [
            {name: "宋佳颐",img:"宋佳颐+生物技术+破译生命密码.jpg",code:"宋佳颐—破译生命密码.jpeg",major:"生物技术",v_name:"破译生命密码",link:"https://st.h5.xiaoe-tech.com/st/9TGaTBWGL"},
            {name: "宋佳颐",img:"宋佳颐生物技术破译生命密码jpg",code:"宋佳颐破译生命密码jpeg",major:"生物技术",v_name:"破译生命密码",link:"https"},
        ]},
        // {type: "lixue",list: []},
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
                        '                            <img class="lazy code-img" data-original="../resource/major/'+ t.code +'">\n' +
                        '                            <span class="info">扫码即可播放</span>\n' +
                        '                        </div>\n' +
                        '                    </div>'
                }else{
                    link_a = '<a class="play-icon" href="'+ t.link +'"><img src="../resource/major/play_btn_04.png"></a>';
                    code_html = ""
                }

                html += '<div class="video">\n' +
                    '                <div class="img-box">\n' +
                    '                    <img class="lazy video-img" data-original="../resource/major/'+ t.img +'">\n' +
                    link_a + code_html +
                    '                </div>\n' +
                    '                <p class="video-info">'+ t.major + "—" + t.v_name +'</p>\n' +
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

