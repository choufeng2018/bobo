
var scope = {
    height: $(window).height(),
    width: $(window).width()
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

    }

    var xueba_slide_init = function () {
        var xueba_list = [
            {list: [
                {id:1,img: "group_1.1.jpeg",name:"张云翼",intro: "清华大学 土木工程专业",detail:""},
                {id:2,img: "group_1.2.jpeg",name:"徐婧",intro: "北京大学  法学专业",detail:""},
                {id:3,img: "group_1.3.jpg",name:"王子娇",intro: "中国人民大学  贸易经济专业",detail:""},
                {id:4,img: "group_1.4.jpg",name:"沙梦吟",intro: "南开大学  生物科学专业",detail:""}
            ]},
            {list: [
                {id:1,img: "group_2.1.jpeg",name:"邱飞旸",intro: "清华大学 工业工程专业",detail:""},
                {id:2,img: "group_2.2.jpg",name:"王怡汀",intro: "中国农业大学  食品工程专业",detail:""},
                {id:3,img: "group_2.3.jpg",name:"鹿飞宇",intro: "北京师范大学 心理学专业",detail:""},
                {id:4,img: "group_2.4.jpeg",name:"唐子玉",intro: "中国人民大学  人力资源专业",detail:""}
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

    var bind_event = function () {
        $(".two-left-slide .li-1").on("click mouseover",function () {
            $(".v-li-1").removeClass("hide");
            $(".v-li-2").addClass("hide");
        })
        $(".two-left-slide .li-2").on("click mouseover",function () {
            $(".v-li-2").removeClass("hide");
            $(".v-li-1").addClass("hide");
        })
    }

    window.addEventListener("resize" ,function () {
        init_page();
    })

    init_page();
    xueba_slide_init();
    bind_event();
    lazy();
})