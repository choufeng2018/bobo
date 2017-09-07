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
            {name: "程明皓",img:"chengminghaozuowen.jpg",code:"chengminghaozuowencode.jpg",v_name:"套用“公式”就能写出满分作文",link:"http://t.cn/RCwYwb7"},
            {name: "张云翼",img:"zhangyunyishengwu.jpg",code:"zhangyunyishengwucode.jpg",v_name:"没有最强大脑一样玩转生物",link:"http://t.cn/RCwjijM"},
            {name: "毛艺霖",img:"maoyiling.jpg",code:"maoyilingcode.jpg",v_name:"原来英语不是一门知识",link:"http://t.cn/RC2pWV4"},
            {name: "刘相宜",img:"liuxiangyi.jpg",code:"liuxiangyic.jpg",v_name:"文科生如何把数学变成理科优势",link:"http://t.cn/RC2W8TI"},
            {name: "朱远航",img:"zhuyuanhangwen.jpg",code:"zhuyuanhangwenc.jpg",v_name:"三步搞定文言文",link:"http://t.cn/RC2lRBZ"},
            {name: "钟鑫雅",img:"zhongxinya.jpg",code:"zhongxinyac.jpg",v_name:"“整理”的智慧——病句篇",link:"http://t.cn/RC2j7VN"},
            {name: "赵波",img:"zhaobo.jpg",code:"zhaoboc.jpg",v_name:"物理学习不用怕",link:"http://t.cn/RC2jRWZ"},
            {name: "王艺璇",img:"wangyixuan.jpg",code:"wangyixuanc.jpg",v_name:"写好英语作文so easy",link:"http://t.cn/RC28isV"},
            {name: "陈苏娅",img:"chensuyayuwen.jpg",code:"chensuyayuwenc.jpg",v_name:"语文学习方法漫谈",link:"http://t.cn/RCLLUvc"},
        ]},
        {type: "jingyan",list: [
            {name: "张云翼",img:"zhangyunyixuexi.jpg",code:"zhangyunyixuexic.jpg",v_name:"学习中怎样做有条理、有自制？",link:"http://t.cn/R6K67AP"},
            {name: "金梦颖",img:"jinmengyin.jpg",code:"jinmengyinc.jpg",v_name:"如何用诗词装点自己的文章",link:"http://t.cn/RCWN6gK"},
            {name: "朱远航",img:"zhuyuanhangwenzhang.jpg",code:"zhuyuanhangwenzhangc.jpg",v_name:"教你如何妙手著文章",link:"http://t.cn/RC2ligU"},
            {name: "张云启",img:"zhangyunqiqingchu.jpg",code:"zhangyunqiqingchuc.jpg",v_name:"高三真正的战斗之看的清楚",link:"http://t.cn/RC2Hwfx"},
            {name: "张云启",img:"zhangyunqimingbai.jpg",code:"zhangyunqimingbaic.jpg",v_name:"高三真正的战斗之学的明白",link:"http://t.cn/RC2TYb4"},
            {name: "张云启",img:"zhangyunqiqilai.jpg",code:"zhangyunqiqilaic.jpg",v_name:"高三真正的战斗之站的起来",link:"http://t.cn/RC2TPrn"},
            {name: "张良",img:"zhangliang.jpg",code:"zhangliangc.jpg",v_name:"WBS工作分解结构",link:"http://t.cn/RC2H0ob"},
            {name: "徐婧",img:"xujingbubugao.jpg",code:"xujingbubugaoc.jpg",v_name:"学会这两招，数学成绩步步高",link:"http://t.cn/RC2HDxq"},
            {name: "彭晴熙",img:"pengqingxi.jpg",code:"pengqingxic.jpg",v_name:"时间管理之如何事半功倍",link:"http://t.cn/RC2RgXP"},
            {name: "郭若峰",img:"guoruofengmingxiao.jpg",code:"guoruofengmingxiaoc1.jpg",v_name:"清华博士：教你如何上名校（1）",link:"http://t.cn/RC2mOwb"},
            {name: "郭若峰",img:"guoruofengmingxiao.jpg",code:"guoruofengmingxiaoc2.jpg",v_name:"清华博士：教你如何上名校（2）",link:"http://t.cn/RC2myKe"},
            {name: "郭若峰",img:"guoruofengmingxiao.jpg",code:"guoruofengmingxiaoc3.jpg",v_name:"清华博士：教你如何上名校（3）",link:"http://t.cn/RC2nCvd"},
            {name: "程明皓",img:"chengminghaoweilai.jpg",code:"chengminghaoweilaic.jpg",v_name:"进行自我分析，明确未来方向",link:"http://t.cn/RC2uouk"},
            {name: "张云翼",img:"zhangyunyijiaqi.jpg",code:"zhangyunyijiaqic.jpg",v_name:"原来假期可以这么过",link:"http://t.cn/RC2kz5L"},
            {name: "陈苏娅",img:"chensuyamalasong.jpg",code:"chensuyamalasongc.jpg",v_name:"马拉松的最后一年",link:"http://t.cn/RC2FCZL"},
            {name: "陈苏娅",img:"chensuyaxiguan.jpg",code:"chensuyaxiguanc.jpg",v_name:"原来学霸都有这样的好习惯！",link:"http://t.cn/RC2s9HA"},
            {name: "袁崇霖",img:"yuanchonglin.jpg",code:"yuanchonglinc.jpg",v_name:"一个番茄，两倍效率",link:"http://t.cn/RCLATts"},
            {name: "郭若峰",img:"guoruofengyingshi.jpg",code:"guoruofengyingshic.jpg",v_name:"清华博士：数学如何学习及应试",link:"http://t.cn/RCL2c0p"},
            {name: "徐婧",img:"xujingyingdui.jpg",code:"xujingyingduic.jpg",v_name:"高考临近，考生应该如何应对",link:"http://t.cn/RCLLHT1"},
            {name: "曾恒",img:"zenghengnixi.jpg",code:"zenghengnixic.jpg",v_name:"从差生到优等生我是怎么做到的",link:"http://t.cn/RCLU9Vl"},
        ]},
        {type: "xinli",list: [
            {name: "李爽",img:"lishuangpaobu.jpg",code:"lishuangpaobuc.jpg",v_name:"跑步故事，解决你所有心理难题",link:"http://t.cn/RC20osZ"},
            {name: "刘书岑",img:"liushuceng.jpg",code:"liushucengc.jpg",v_name:"早恋应当如何应对",link:"http://t.cn/RC2EGky"},
            {name: "张云启",img:"zhangyunqitan.jpg",code:"zhangyunqitanc.jpg",v_name:"高三恋爱，谈还是不谈",link:"http://t.cn/RC2Ywgi"},
            {name: "朱远航",img:"zhuyuanhanghaizi.jpg",code:"zhuyuanhanghaizic.jpg",v_name:"孩子中学必修课：学做一个理性人",link:"http://t.cn/RC2O8sV"},
            {name: "王君",img:"wangjun.jpg",code:"wangjunc.jpg",v_name:"给嘲笑一记响亮的耳光",link:"http://t.cn/RCZXsAd"},
            {name: "徐婧",img:"xujingxintai.jpg",code:"xujingxintaic.jpg",v_name:"平时的学习心态",link:"http://t.cn/RC28wI1"},
            {name: "陈苏娅",img:"chensuyafumu.jpg",code:"chensuyafumuc.jpg",v_name:"父母对孩子的影响有多大",link:"http://t.cn/RJeIPbr"},
            {name: "李爽",img:"lishuangyinxiang.jpg",code:"lishuangyinxiangc.jpg",v_name:"清华印象",link:"http://t.cn/RC2EkiZ"},
            {name: "李爽",img:"lishuangqishi.jpg",code:"lishuangqishic.jpg",v_name:"美国的教育方式给我的启发",link:"http://t.cn/RCLyIqy"},
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

    var first_preview = '<div class="video">\n' +
        '                <div class="img-box">\n' +
        '                    <img  id="firstBox" class="video-img" src="../resource/method/videopic/chengminghaozuowen.jpg">\n' +
        '                    <a class="play-icon" href="javascript:void(0);"><img class="play_ico_btn" src="../resource/major/play_btn_04.png"></a>\n' +
        '                    <div class="cover hide">\n' +
        '                        <div class="code-box">\n' +
        '                            <img class="lazy code-img" src="../resource/method/videopic/chengminghaozuowencode.jpg">\n' +
        '                            <span class="info">扫码即可播放</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <p class="video-info">地质学 - 上知天文，下知地理</p>\n' +
        '            </div>'

    $("#" + first.data("to")).removeClass("hide").html(first_preview);
}
show_menu();


$(function () {
    $(".menu.active").next().css({"padding":"16px 0 25px"});

    var show_videos = function () {
        var isPc = $(window).width() <= 768 ? false : true;
        // console.log("pc:"+isPc);

        $.each(scope.videolist, function (i, v) {
            var id = v.type, list = v.list;
            var html = "";

            // 某一个板块
            $.each(list, function (j, t) {
                var link_a = "", code_html = "";
                if(isPc){
                    link_a = '<a class="play-icon" href="javascript:void(0);"><img class="play_ico_btn" src="../resource/major/play_btn_04.png"></a>';
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
        })
        $(".img-box").css({'height': scope.vheight + 'px'});
        lazy();
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
                var v_height = scope.vheight = img.height();
                $(".img-box").css({'height': v_height +'px'});
            }
        })

        // $(".play-icon").on("click",function (e) {
        $(document).on("click",".play-icon",function (e) {
            e.stopPropagation();
            var cover = $(this).next(".cover");
            if(cover){
                console.log(scope.vheight)
                cover.css({"height": scope.vheight+"px"})
            }
            $(".right-cont").find(".video").addClass("sys")
            $(this).parent().parent().removeClass("sys")
            $(this).parentsUntil(".right-cont").find(".sys .cover").css({"height": 0})
        })

        $(document).on("click",".container",function (e) {
            e.stopPropagation();
            $(".right-cont").find(".video").addClass("sys").find(".cover").css({"height": 0})
        })
    }

    var get_firstbox = function () {
        var isLoaded = false;
        var first = document.getElementById("firstBox");
        var in_id = setInterval(function () {
            // console.log(isLoaded)


            if(first.complete){
                var img = $("#firstBox");
                isLoaded = true;
                scope.vheight = img.height();
                console.log(scope.vheight)
                show_videos();

                if(isLoaded){
                    clearInterval(in_id);
                }
            }
        },100) // lazy图片灰色背景是正方形。。。

    }

    get_firstbox();
    getFooter();
    bind_event();
})


