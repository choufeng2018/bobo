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
    }
    ,onTransitionEnd: function(swiper){
        if(swiper.progress==1){
            swiper.activeIndex=swiper.slides.length-1
        }
    }


});