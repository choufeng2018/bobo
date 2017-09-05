getHeader();

var scope = {
    height: $(window).height(),
    width: $(window).width()
}

// 检测设备屏幕 调整首屏轮播
if(scope.width <= 768){
    var mbanner = ["mbanner_1.jpg","mbanner_2.jpg","mbanner_3.jpg"];
    var html = ""
    $.each(mbanner,function (i, v) {
        html += '<div class="swiper-slide">\n' +
            '                            <div class="cover">\n' +
            '                                <img src="resource/index/'+ v +'">\n' +
            '                            </div>\n' +
            '                        </div>'
    })

    $(".swiper-carousel .swiper-wrapper").html(html);
}

var swiper = new Swiper('.swiper-all', {
    pagination: '.all-page',
    paginationClickable: true,
    direction : 'vertical',
    hashnav:true,
    hashnavWatchState:true,
    lazyLoading : true,
    replaceState:true,
    roundLengths : true,
    speed:600,
    mousewheelControl: true,
    keyboardControl : true,
    // slidesOffsetAfter : 200, // 设置最后一屏留空
    onScroll: function (swiper) {

    },
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        lazy();
    }
    ,onTransitionEnd: function(swiper){
        if(swiper.progress==1){
            swiper.activeIndex=swiper.slides.length-1
        }
    }
});
var carouselSwiper = new Swiper('.swiper-carousel', {
    autoplay: 5000,//可选选项，自动滑动
    autoplayDisableOnInteraction : false,
    pagination: '.carousel-page',
    paginationClickable :true,
    paginationType : 'bullets',
    keyboardControl : true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    loop: true,
    onSlideChangeEnd: function () {
        lazy();
    }
});



$(function () {
    $(".lazy").lazyload({effect: "fadeIn"});
    var init_page = function () {
        scope.height = $(window).height();
        scope.width = $(window).width();

        $(".cover").find("img").css({height: scope.height});

        $(".play-box").css({"margin-top": (scope.height - 480)/2 +"px"})
        if(scope.width <= 1366){
            $(".play-box").css({"margin-top": (scope.height - 400)/2 +"px"})
        }
        if(scope.width <= 768){
            $(".play-box").css({"margin-top": "20px"})
        }
    }

    var xueba_slide_init = function () {
        var xueba_list = [
            {list: [
                {id:1,img: "group_1.1.jpg",name:"张云翼",intro: "清华大学 土木工程专业",detail:""},
                {id:2,img: "group_1.2.jpg",name:"徐婧",intro: "北京大学  法学专业",detail:""},
                {id:3,img: "group_1.3.jpg",name:"王子娇",intro: "中国人民大学  贸易经济专业",detail:""},
                {id:4,img: "group_1.4.jpg",name:"沙梦吟",intro: "南开大学  生物科学专业",detail:""}
            ]},
            {list: [
                {id:1,img: "group_2.1.jpg",name:"邱飞旸",intro: "清华大学 工业工程专业",detail:""},
                {id:2,img: "group_2.2.jpg",name:"王怡汀",intro: "中国农业大学  食品工程专业",detail:""},
                {id:3,img: "group_2.3.jpg",name:"鹿飞宇",intro: "北京师范大学 心理学专业",detail:""},
                {id:4,img: "group_2.4.jpg",name:"唐子玉",intro: "中国人民大学  人力资源专业",detail:""}
            ]},
            {list: [
                {id:1,img: "group_3.1.jpg",name:"王君",intro: "中国人民大学  金融学专业",detail:""},
                {id:2,img: "group_3.2.jpg",name:"朱文豪",intro: "对外经贸大学 阿拉伯语专业",detail:""},
                {id:3,img: "group_3.3.jpg",name:"郭转转",intro: "北京大学  计算机科学与技术专业",detail:""},
                {id:4,img: "group_3.4.jpg",name:"邵熠",intro: "北京邮电大学 通讯工程专业",detail:""}
            ]}
        ];
        var html = "";
        $.each(xueba_list,function (i, v) {

            var item_html = "";
            var xueba_html = "";

            $.each(v.list,function (j, t) {
                xueba_html += '<div class="xueba">\n' +
                    '                                <div class="lazy-box">\n' +
                    '                                    <img class="lazy" data-original="resource/index/'+ t.img +'">\n' +
                    '                                    <div class="detail">'+ t.detail +'</div>\n' +
                    '                                </div>\n' +
                    '                                <p class="name">'+ t.name +'</p>\n' +
                    '                                <p class="intro">'+ t.intro +'</p>\n' +
                    '                            </div>'
            })

            item_html += '<div class="swiper-slide">'+ xueba_html +'</div>';
            html += item_html;
        });
        $(".four-swiper .swiper-wrapper").html(html)

        var xuebaSlide = new Swiper('.four-swiper', {
            // autoplay: 5000,//可选选项，自动滑动
            autoplayDisableOnInteraction : false,
            pagination: '.slide4-page',
            paginationClickable :true,
            paginationType : 'bullets',
            keyboardControl : true,
            loop: true,
            onSlideChangeEnd: function () {
                lazy();
            }
        });
    }

    var show_video = function (config) {
        $(".video-box").fadeIn(400)

        // var v = document.getElementById(config.id)
        // v.play();

        $("."+config.id).find("video").get(0).play();
    }
    var pause = function () {
        // var v1 = document.getElementById("my-video-1");
        // var v2 = document.getElementById("my-video-2");
        //
        // v1.pause();
        // v2.pause();

        $(".box-1").find("video").get(0).pause();
        $(".box-2").find("video").get(0).pause();
    }


    var bind_event = function () {
        $(".two-left-slide .li-1").on("click mouseover",function () {
            $(".v-li-1").removeClass("hide");
            $(".v-li-2").addClass("hide");

        })
        $(".two-left-slide .li-2").on("click mouseover",function () {
            $(".v-li-2").removeClass("hide");
            $(".v-li-1").addClass("hide");

        })

        $(".v-li-1").on("click",function () {
            $(".box-1").css("display","inline-block")
            $(".box-2").css("display","none")

            show_video({id:"box-1"});

        })

        $(".v-li-2").on("click",function () {
            $(".box-2").css("display","inline-block")
            $(".box-1").css("display","none")

            show_video({id:"box-2"});

        })


        // 关闭
        $(".close").on("click",function () {
            $(".video-box").fadeOut(400)
            pause();
        })
    }

    window.addEventListener("resize" ,function () {
        init_page();
    })

    init_page();
    xueba_slide_init();
    bind_event();
    lazy();
    getFooter(true);
})