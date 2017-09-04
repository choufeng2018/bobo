getHeader("major")

var scope = {
    menu: [
        {name:'文学',to:"wenxue"},
        {name:'理学',to:"lixue"},
        {name:'经济学',to:"jingji"},
        {name:'教育学',to:"jiaoyu"},
        {name:'管理学',to:"guanli"},
        {name:'医学',to:"yixue"},
        {name:'农学',to:"nongxue"},
        {name:'工学',to:"gongxue"},
        {name:'法学',to:"faxue"},
        {name:'历史学',to:"lishi"},
        {name:'艺术学',to:"yishu"},
        {name:'哲学',to:"zhexue"}
    ],
    videolist:[
        {type: "wenxue",list: [
            {name: "唐定耀",img:"唐定耀+对外汉语专业.jpg",code:"唐定耀—汉语国际教育专业.jpeg",major:"汉语言国际教育",v_name:"汉语言国际教育专业",link:"https://st.h5.xiaoe-tech.com/st/1SFAq1V4H"},
            {name: "刘安妮",img:"刘安妮+国学+临风鉴月说国学.png",code:'刘安妮—临风鉴月说国学.jpeg',major:"国学",v_name:"临风鉴月说国学",link:"https://st.h5.xiaoe-tech.com/st/0WkgYw8AH"},
            {name: "杨慧玲",img:"杨慧玲+广告学+脑同学欢迎您.png",code:'杨慧玲—脑洞学，欢迎你.jpeg',major:"广告学",v_name:"脑洞学，欢迎您",link:"https://st.h5.xiaoe-tech.com/st/7I96T27lM"},
            {name: "陈苏娅",img:"陈苏娅+新闻学+不要总是想着搞个大新闻.jpg",code:'陈苏娅—不要总是想着搞个大新闻.jpeg',major:"新闻学",v_name:"不要总是想着搞个大新闻",link:"https://st.h5.xiaoe-tech.com/st/0Gk17auE9"},
            {name: "吴雨蔚",img:"吴雨蔚+传播学+搞个大新闻传播.jpg",code:'吴雨蔚—搞个大新闻传播.jpeg',major:"传播学",v_name:"搞个大新闻传播",link:"https://st.h5.xiaoe-tech.com/st/0Z5ci9HJV"},
            {name: "李孝严",img:"李孝严+法语+最后一课.png",code:'李孝严—最后一课.jpeg',major:"法语",v_name:"最后一课",link:"https://st.h5.xiaoe-tech.com/st/5dWrfwgxA"},
            {name: "朱文豪",img:"朱文豪+阿拉伯语+魅力阿拉伯语.jpg",code:'朱文豪-魅力阿拉伯语.jpeg',major:"阿拉伯语",v_name:"魅力阿拉伯语",link:"https://st.h5.xiaoe-tech.com/st/2FTBphXDw"},
            {name: "赵倩",img:"赵倩+英语（高翻）+听说时薪能上千.jpg",code:'赵倩—听说时薪能上千.jpeg',major:"英语（高翻）",v_name:"听说时薪能上千",link:"https://st.h5.xiaoe-tech.com/st/8D9ccveqA"},
            {name: "刘珈豪",img:"刘珈豪+俄语+小语种是火还是坑.png",code:'刘珈豪—小语种专业是火还是坑.jpeg',major:"俄语",v_name:"小语种专业是火还是坑",link:"https://st.h5.xiaoe-tech.com/st/1Xq4swL6G"},
            {name: "付朋",img:"付朋+日语+不想当“胖翻译”的“二次元”不是好“肥宅”.png",code:'付朋—不想当“胖翻译”的“二次元”不是好“肥宅”.jpeg',major:"日语",v_name:"不想当“胖翻译”的“二次元”不是好“肥宅”",link:"https://st.h5.xiaoe-tech.com/st/4XwSchJg6"},
            {name: "杨男",img:"杨男+英语+英国历史不难学.png",code:'杨男—英语历史不难学.jpeg',major:"英语",v_name:"英语厉害不难学",link:"https://st.h5.xiaoe-tech.com/st/6H0RB3GaK"},
            {name: "周晋",img:"周晋+广告学+无广告，不八卦.jpg",code:'周晋—无广告，不八卦.jpeg',major:"广告学",v_name:"无广告，不八卦",link:"https://st.h5.xiaoe-tech.com/st/0FS9CDkh4"},
            {name: "高敏",img:"高敏+汉语言文学+诗和远方.jpg",code:'高敏—诗与远方.jpeg',major:"汉语言文学",v_name:"诗与远方",link:"https://st.h5.xiaoe-tech.com/st/2Xqh2IoXN"},
            // {name: "孙瑀蔓",img:"封面图片",code:'二维码',major:"中文系",v_name:"学中文不止看小说",link:"https://st.h5.xiaoe-tech.com/st/0CMt2hKX6"},
            {name: "梁鑫蕊",img:"梁鑫蕊+考古学+盗墓笔记不会这样写.png",code:'梁鑫蕊—盗墓笔记不会这样写.jpeg',major:"考古学",v_name:"盗墓笔记不会这样写",link:"https://st.h5.xiaoe-tech.com/st/0eMFzT3ZG"},
            // {name: "孟瑶玥",img:"商务英语",code:'二维码',major:"商务英语",v_name:"商务+英语=无限可能",link:"https://st.h5.xiaoe-tech.com/st/8Oqs2bUCT"},
            {name: "张颖奇",img:"张颖奇+西班牙语专业.jpg",code:'张颖奇—西班牙语.jpeg',major:"西班牙语",v_name:"西班牙语",link:"https://st.h5.xiaoe-tech.com/st/76IJlSpxQ"},

        ]},
        {type: "lixue",list: [
            {name: "宋佳颐",img:"宋佳颐+生物技术+破译生命密码.jpg",code:"宋佳颐—破译生命密码.jpeg",major:"生物技术",v_name:"破译生命密码",link:"https://st.h5.xiaoe-tech.com/st/9TGaTBWGL"},
            {name: "鹿飞宇",img:"鹿飞宇+心理学+懂心理，更懂你.jpg",code:'鹿飞宇—懂心理，更懂你.jpeg',major:"心理学",v_name:"懂心理，更懂你",link:"https://st.h5.xiaoe-tech.com/st/2sdiLSCT9"},
            {name: "沙梦吟",img:"沙梦吟+生物科学+生有万物，万物皆深.png",code:'沙梦吟—生有万物，万物皆深.jpeg',major:"生物科学",v_name:"生有万物，万物皆深",link:"https://st.h5.xiaoe-tech.com/st/8mGHAsqB0"},
            {name: "周序力",img:"周序力+生态学+与大自然零距离.jpg",code:'周序力—与大自然零距离.jpeg',major:"生态学",v_name:"与大自然零距离",link:"https://st.h5.xiaoe-tech.com/st/4wtOt5J1h"},
            {name: "孙静茹",img:"孙静茹+生物科学+爱到生物深处.png",code:'孙静茹—爱到生物深处.jpeg',major:"生物科学",v_name:"爱到生物深处",link:"https://st.h5.xiaoe-tech.com/st/1eUiA2Ddh"},
            {name: "崔舜铫",img:"崔舜铫+地质学+与地球共舞.jpg",code:'崔舜铫—与地球共舞.jpeg',major:"地质学",v_name:"与地球共舞",link:"https://st.h5.xiaoe-tech.com/st/3tl3kL9Gu"},
            {name: "傅煜铭",img:"傅煜铭+地球物理+聆听地球的动脉.jpg",code:'傅熠铭—聆听世界的动脉.jpeg',major:"地球物理",v_name:"聆听地球的动脉",link:"https://st.h5.xiaoe-tech.com/st/9ynLTVD31"},
            // {name: "寇焜照",img:"封面图片",code:'二维码',major:"化学专业",v_name:"伴随着兴趣与理想飞翔",link:"https://st.h5.xiaoe-tech.com/st/2OpxCBydd"},

        ]},
        {type: "jingji",list: [
            {name: "赵航",img:"赵航  金融学.png",code:'赵航—金融学专业介绍.jpeg',major:"金融学",v_name:"金融学专业介绍",link:"https://st.h5.xiaoe-tech.com/st/3MGGoQs5a"},
            {name: "王子娇",img:"王子娇+贸易经济+贸易经济的前世今生.png",code:'王子娇—贸易经济的前世今生.jpeg',major:"贸易经济",v_name:"贸易经济的前世今生",link:"https://st.h5.xiaoe-tech.com/st/7kzQP32BD"},
            {name: "张雨佳",img:"张雨佳 + 国际经济与贸易+国际范，贸易通.png",code:'张雨佳—国际范，贸易通.jpeg',major:"国际经济与贸易",v_name:"国际范，贸易通",link:"https://st.h5.xiaoe-tech.com/st/5UupkNNJk"},
            {name: "刘一鉴",img:"刘一鉴+数学与应用数学+微分天下，人生几何.jpg",code:'刘一鉴—微分天下人生几何.jpeg',major:"应用数学",v_name:"微分天下人生几何",link:"https://st.h5.xiaoe-tech.com/st/9Wf8zUtgA"},
            // {name: "梁煊",img:"封面图片",code:'二维码',major:"财政学",v_name:"聚国民之财，理天下之政",link:"https://st.h5.xiaoe-tech.com/st/6KXXum4CG"},
            {name: "杨千帆",img:"杨千帆+金融工程+金融理念与工程思维的花火.jpg",code:'杨千帆—金融理念与工程思维的火花.jpeg',major:"金融工程",v_name:"金融理念与工程思维的火花",link:"https://st.h5.xiaoe-tech.com/st/2B18SMXmR"},
            {name: "张皓璁",img:"张皓璁 +会计+一张报表三生三世.jpg",code:'张皓璁— 一张报表三生三世.jpeg',major:"会计学",v_name:"一张报表，三生三世",link:"https://st.h5.xiaoe-tech.com/st/6QSLMk6ou"},
            {name: "周仕君",img:"周仕君+统计学+黄金行业的敲门砖.jpg",code:'周仕君—黄金行业的敲门砖.jpeg',major:"统计学",v_name:"黄金行业的敲门砖",link:"https://st.h5.xiaoe-tech.com/st/2nAaEI7h6"},
            {name: "王行健",img:"王行健+金融数学+学数学有前途吗.jpg",code:'王行健—学数学有“钱”途吗.jpeg',major:"金融数学",v_name:"学数学有“钱”途吗",link:"https://st.h5.xiaoe-tech.com/st/0xQvKpOSD"},
            {name: "靳扬",img:"靳扬+经济学+经天纬地，济世救民.png",code:'靳扬—经天纬地，济世救民.jpeg',major:"经济学",v_name:"经天纬地，济世救民",link:"https://st.h5.xiaoe-tech.com/st/04e9HTzw9"},
            {name: "臧嘉雯",img:"臧嘉雯+经济学+财经黄埔之“经世济民”.png",code:'臧嘉雯—财经黄埔之“经世济民”.jpeg',major:"经济学",v_name:"财经黄埔之“经世济民”",link:"https://st.h5.xiaoe-tech.com/st/5cj97Ckup"},
            {name: "姓名",img:"封面图片",code:'二维码',major:"专业",v_name:"视频描述",link:"https7I96T27lM"},

        ]},
        // {type: "jiaoyu",list: []},
        // {type: "guanli",list: []},
        // {type: "yixue",list: []},
        // {type: "nongxue",list: []},
        // {type: "gongxue",list: []},
        // {type: "faxue",list: []},
        // {type: "lishi",list: []},
        // {type: "yishu",list: []},
        // {type: "zhexue",list: []},
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

// 加载目录第一栏？加快显示速度




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
                    '                <p class="video-info">'+ t.major + " —— " + t.v_name +'</p>\n' +
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
        // if(img.attr("src"))
        var first = document.getElementById("firstBox")
        if(first.complete){
            isLoaded = true;
            var v_height = img.height();
            // console.log(v_height)
            $(".img-box").css({'height': v_height});

            // var video_height = img.parent().parent().height();
            // console.log(video_height)
            // $(".video").css("height",video_height)
        }
    },100) // lazy图片灰色背景是正方形。。。


    show_videos();
    bind_event();
    getFooter();
    lazy();




})
window.onload = function () {
    console.log("hahahahah")
}