getHeader("method")

var scope = {
    menu: [
        {name:'科目训练营',to:"kemu"},
        {name:'经验提分团',to:"jingyan"},
        {name:'心理疏导室',to:"xinli"},
        // {name:'家长必修课',to:"jiazhang"}
    ],
    videolist:[
        {type: "kemu",list: [
            {name: "程明皓",img:"程明皓  套用公式就能写出满分作文.jpg",code:"程明皓 套用“公式”就能得出满分作文.jpg",v_name:"套用“公式”就能写出满分作文",link:"http://t.cn/RCwYwb7"},
            {name: "张云翼",img:"张云翼  没有最强大脑一样玩转生物.jpg",code:"张云翼 没有最强大脑一样玩转生物.jpg",v_name:"没有最强大脑一样玩转生物",link:"http://t.cn/RCwjijM"},
            {name: "毛艺霖",img:"毛艺霖  原来英语不是一门知识.jpg",code:"毛艺霖  原来英语不是一门知识 (2).jpg",v_name:"原来英语不是一门知识",link:"http://t.cn/RC2pWV4"},
            {name: "刘相宜",img:"刘相宜  文科生如何把数学变成优势学科.jpg",code:"刘相宜  文科生如何把数学变成优势学科 (2).jpg",v_name:"文科生如何把数学变成理科优势",link:"http://t.cn/RC2W8TI"},
            {name: "朱远航",img:"朱远航  三步搞定文言文.jpg",code:"朱远航  三步搞定文言文 (2).jpg",v_name:"三步搞定文言文",link:"http://t.cn/RC2lRBZ"},
            {name: "钟鑫雅",img:"钟鑫雅  整理的智慧——病句篇.jpg",code:"钟鑫雅  “整理”的智慧—病句篇.jpg",v_name:"“整理”的智慧——病句篇",link:"http://t.cn/RC2j7VN"},
            {name: "赵波",img:"赵波  物理学习不用怕.jpg",code:"赵波  物理学习不用怕 (2).jpg",v_name:"物理学习不用怕",link:"http://t.cn/RC2jRWZ"},
            {name: "王艺璇",img:"王艺璇 写好英语作文so easy.jpg",code:"王艺璇  写好英语作文so easy.jpg",v_name:"写好英语作文so easy",link:"http://t.cn/RC28isV"},
            {name: "陈苏娅",img:"陈苏娅  语文学习方法漫谈.jpg",code:"陈苏娅  语文学习方法漫谈 (2).jpg",v_name:"语文学习方法漫谈",link:"http://t.cn/RCLLUvc"},
        ]},
        {type: "jingyan",list: [
            {name: "张云翼",img:"张云翼 学习中怎样做到有条理、有自制.jpg",code:"张云翼  学习中怎样做到有条理有自制.jpg",v_name:"学习中怎样做有条理、有自制？",link:"http://t.cn/R6K67AP"},
            {name: "金梦颖",img:"金梦颖 如何用诗词装点自己的文章.jpg",code:"金梦颖 如何用诗词装点自己的文章 (2).jpg",v_name:"如何用诗词装点自己的文章",link:"http://t.cn/RCWN6gK"},
            {name: "朱远航",img:"朱远航  如何才能妙手著文章.jpg",code:"朱远航  教你如何妙手著文章.jpg",v_name:"教你如何妙手著文章",link:"http://t.cn/RC2ligU"},
            {name: "张云启",img:"张云启  高三真正的战斗之看的清楚.jpg",code:"张云启  高三真正的战斗之看的明白.jpg",v_name:"高三真正的战斗之看的清楚",link:"http://t.cn/RC2Hwfx"},
            {name: "张云启",img:"张云启  高三真正的战斗之学的明白.jpg",code:"张云启  高三真正的战斗之学的明白 (2).jpg",v_name:"高三真正的战斗之学的明白",link:"http://t.cn/RC2TYb4"},
            {name: "张云启",img:"张云启  高三真正的战斗之站的起来.jpg",code:"张云启  高三真正的战斗之站的起来 (2).jpg",v_name:"高三真正的战斗之站的起来",link:"http://t.cn/RC2TPrn"},
            {name: "张良",img:"张良 WBS工作分解结构.jpg",code:"张良  WBS工作分解结构.jpg",v_name:"WBS工作分解结构",link:"http://t.cn/RC2H0ob"},
            {name: "徐婧",img:"徐婧  学会这两招数学成绩步步高.jpg",code:"徐婧  学会这两招，数学成绩步步高.jpg",v_name:"学会这两招，数学成绩步步高",link:"http://t.cn/RC2HDxq"},
            {name: "彭晴熙",img:"彭晴熙.jpg",code:"彭晴熙  时间管理之如何事半功倍.jpg",v_name:"时间管理之如何事半功倍",link:"http://t.cn/RC2RgXP"},
            {name: "郭若峰",img:"郭若峰  清华博士：教你怎样才能上名校.jpg",code:"郭若峰  清华博士教你如何上名校（1）.jpg",v_name:"清华博士：教你如何上名校（1）",link:"http://t.cn/RC2mOwb"},
            {name: "郭若峰",img:"郭若峰  清华博士：教你怎样才能上名校.jpg",code:"郭若峰  清华博士教你如何上名校（2）.jpg",v_name:"清华博士：教你如何上名校（2）",link:"http://t.cn/RC2myKe"},
            {name: "郭若峰",img:"郭若峰  清华博士：教你怎样才能上名校.jpg",code:"郭若峰  清华博士教你如何上名校（3）.jpg",v_name:"清华博士：教你如何上名校（3）",link:"http://t.cn/RC2nCvd"},
            {name: "程明皓",img:"程明皓  进行自我分析，明确未来方向.jpg",code:"程明皓  如何进行自我分析，明确未来方向.jpg",v_name:"进行自我分析，明确未来方向",link:"http://t.cn/RC2uouk"},
            {name: "张云翼",img:"张云翼  原来假期可以这么过.jpg",code:"张云翼  原来假期可以这么过 (2).jpg",v_name:"原来假期可以这么过",link:"http://t.cn/RC2kz5L"},
            {name: "陈苏娅",img:"陈苏娅  马拉松最后一年.jpg",code:"陈苏娅  马拉松的最后一年.jpg",v_name:"马拉松的最后一年",link:"http://t.cn/RC2FCZL"},
            {name: "陈苏娅",img:"陈苏娅  原来学霸都有这些好习惯.jpg",code:"陈苏娅  原来学霸都有这样的好习惯.jpg",v_name:"原来学霸都有这样的好习惯！",link:"http://t.cn/RC2s9HA"},
            {name: "袁崇霖",img:"袁崇霖  一个番茄，两倍效率.jpg",code:"袁崇霖  一个番茄，两倍效率 (2).jpg",v_name:"一个番茄，两倍效率",link:"http://t.cn/RCLATts"},
            {name: "郭若峰",img:"郭若峰  清华博士：数学如何学习及应试.jpg",code:"郭若峰  数学如何学习及应试.jpg",v_name:"清华博士：数学如何学习及应试",link:"http://t.cn/RCL2c0p"},
            {name: "徐婧",img:"徐婧  高考临近考生应该如何应对.jpg",code:"徐婧  高考临近考生应当如何应对.jpg",v_name:"高考临近，考生应该如何应对",link:"http://t.cn/RCLLHT1"},
            {name: "曾恒",img:"曾恒  从学渣到学霸的完美逆袭我是怎么做到的.jpg",code:"曾恒  从差生到优等生我是怎么做到的.jpg",v_name:"从差生到优等生我是怎么做到的",link:"http://t.cn/RCLU9Vl"},
        ]},
        {type: "xinli",list: [
            {name: "李爽",img:"李爽  跑步故事解决你心理所有难题.jpg",code:"李爽  跑步故事解决孩子所有心理难题.jpg",v_name:"跑步故事，解决你所有心理难题",link:"http://t.cn/RC20osZ"},
            {name: "刘书岑",img:"刘书岑  早恋应该如何应对.jpg",code:"刘书岑 早恋应当如何应对.jpg",v_name:"早恋应当如何应对",link:"http://t.cn/RC2EGky"},
            {name: "张云启",img:"张云启  高三恋爱，谈还是不谈.jpg",code:"张云启  高三恋爱，谈还是不谈 (2).jpg",v_name:"高三恋爱，谈还是不谈",link:"http://t.cn/RC2Ywgi"},
            {name: "朱远航",img:"朱远航  孩子中学必修课，学做一个理性的人.jpg",code:"朱远航  孩子中学必修课：学做一个理性的人.jpg",v_name:"孩子中学必修课：学做一个理性人",link:"http://t.cn/RC2O8sV"},
            {name: "王君",img:"王君 给嘲笑一记响亮的耳光.jpg",code:"王君 给嘲笑一记响亮的耳光 (2).jpg",v_name:"给嘲笑一记响亮的耳光",link:"http://t.cn/RCZXsAd"},
            {name: "徐婧",img:"徐婧  平时的学习心态.jpg",code:"徐婧  平时的学习心态 (2).jpg",v_name:"平时的学习心态",link:"http://t.cn/RC28wI1"},
            {name: "陈苏娅",img:"陈苏娅  父母对我的影响有多大.jpg",code:"陈苏娅  父母对孩子的影响有多大.jpg",v_name:"父母对孩子的影响有多大",link:"http://t.cn/RJeIPbr"},
            {name: "李爽",img:"李爽 清华印象.jpg",code:"李爽  清华印象.jpg",v_name:"清华印象",link:"http://t.cn/RC2EkiZ"},
            {name: "李爽",img:"李爽 美国的教育方式给我的启示.jpg",code:"李爽  美国教育给我的启发.jpg",v_name:"美国的教育方式给我的启发",link:"http://t.cn/RCLyIqy"},
        ]},
        // {type: "jiazhang",list: [
        //     {name: "姓名",img:"海报图片",code:"二维码",v_name:"视频描述",link:"hSFAq1V4H"},
        //
        // ]},
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
        // console.log(isLoaded)
        if(isLoaded){
            clearInterval(in_id);
        }
        var img = $("#firstBox");
        var first = document.getElementById("firstBox")
        if(first.complete){
            isLoaded = true;
            var v_height = img.height();
            // console.log(v_height)
            $(".img-box").css({'height': v_height});
        }
    },100) // lazy图片灰色背景是正方形。。。

    show_videos();
    bind_event();
    getFooter();
    lazy();
})


