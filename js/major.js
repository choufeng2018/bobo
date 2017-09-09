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
            {name: "唐定耀",img:"tangdingyao_duiwai.jpg",code:"tangdingyaoduiwai.jpeg",major:"汉语言国际教育",v_name:"汉语言国际教育专业",link:"https://st.h5.xiaoe-tech.com/st/1SFAq1V4H"},
            {name: "刘安妮",img:"liuanniu_guoxue.png",code:'liuanniuguoxue.jpeg',major:"国学",v_name:"临风鉴月说国学",link:"https://st.h5.xiaoe-tech.com/st/0WkgYw8AH"},
            {name: "杨慧玲",img:"yanghuilin_guanggao.png",code:'yanghuilinguanggao.jpeg',major:"广告学",v_name:"脑洞学，欢迎您",link:"https://st.h5.xiaoe-tech.com/st/7I96T27lM"},
            {name: "陈苏娅",img:"chensuya_xinwen.jpg",code:'chensuyaxinwen.jpeg',major:"新闻学",v_name:"不要总是想着搞个大新闻",link:"https://st.h5.xiaoe-tech.com/st/0Gk17auE9"},
            {name: "吴雨蔚",img:"wuyuwei_chuanbo.jpg",code:'wuyuweichuanbo.jpeg',major:"传播学",v_name:"搞个大新闻传播",link:"https://st.h5.xiaoe-tech.com/st/0Z5ci9HJV"},
            {name: "李孝严",img:"lixiaoyan_fayu.png",code:'lixiaoyanfayu.jpeg',major:"法语",v_name:"最后一课",link:"https://st.h5.xiaoe-tech.com/st/5dWrfwgxA"},
            {name: "朱文豪",img:"zhuwenhao_ala.jpg",code:'zhuwenhao_ala.jpeg',major:"阿拉伯语",v_name:"魅力阿拉伯语",link:"https://st.h5.xiaoe-tech.com/st/2FTBphXDw"},
            {name: "赵倩",img:"zhaoqian_yinyu.jpg",code:'zhaoqian_yinyu.jpeg',major:"英语（高翻）",v_name:"听说时薪能上千",link:"https://st.h5.xiaoe-tech.com/st/8D9ccveqA"},
            {name: "刘珈豪",img:"liujiahao_eyu.png",code:'liujiahao_eyu.jpeg',major:"俄语",v_name:"小语种专业是火还是坑",link:"https://st.h5.xiaoe-tech.com/st/1Xq4swL6G"},
            {name: "付朋",img:"fupeng_riyu.png",code:'fupeng_riyu.jpeg',major:"日语",v_name:"不想当“胖翻译”的“二次元”不是好“肥宅”",link:"https://st.h5.xiaoe-tech.com/st/4XwSchJg6"},
            {name: "杨男",img:"yangnanyinyu.png",code:'yangnanyinyu.jpeg',major:"英语",v_name:"英语厉害不难学",link:"https://st.h5.xiaoe-tech.com/st/6H0RB3GaK"},
            {name: "周晋",img:"zhoujingguanggao.jpg",code:'zhoujingguanggao.jpeg',major:"广告学",v_name:"无广告，不八卦",link:"https://st.h5.xiaoe-tech.com/st/0FS9CDkh4"},
            {name: "高敏",img:"gaomingyuanfang.jpg",code:'gaomingyuanfang.jpeg',major:"汉语言文学",v_name:"诗与远方",link:"https://st.h5.xiaoe-tech.com/st/2Xqh2IoXN"},
            {name: "孙瑀蔓",img:"sunyunman.jpg",code:'sunyunmanxiaoshuo.jpg',major:"中文系",v_name:"学中文不止看小说",link:"https://st.h5.xiaoe-tech.com/st/0CMt2hKX6"},
            {name: "梁鑫蕊",img:"liangxinruikaogu.png",code:'liangxinruikaogu.jpeg',major:"考古学",v_name:"盗墓笔记不会这样写",link:"https://st.h5.xiaoe-tech.com/st/0eMFzT3ZG"},
            {name: "孟瑶玥",img:"mengyueyao.jpg",code:'mengyueyaoyinyu.jpg',major:"商务英语",v_name:"商务+英语=无限可能",link:"https://st.h5.xiaoe-tech.com/st/8Oqs2bUCT"},
            {name: "张颖奇",img:"zhangyinqixibanya.jpg",code:'zhangyinqixibanya.jpeg',major:"西班牙语",v_name:"西班牙语",link:"https://st.h5.xiaoe-tech.com/st/76IJlSpxQ"},

        ]},
        {type: "lixue",list: [
            {name: "宋佳颐",img:"songjiayishengwu.jpg",code:"songjiayishengwu.jpeg",major:"生物技术",v_name:"破译生命密码",link:"https://st.h5.xiaoe-tech.com/st/9TGaTBWGL"},
            {name: "鹿飞宇",img:"lufeiyuxinli.jpg",code:'lufeiyuxinli.jpeg',major:"心理学",v_name:"懂心理，更懂你",link:"https://st.h5.xiaoe-tech.com/st/2sdiLSCT9"},
            {name: "沙梦吟",img:"sahmengyinshengwu.png",code:'sahmengyinshengwu.jpeg',major:"生物科学",v_name:"生有万物，万物皆深",link:"https://st.h5.xiaoe-tech.com/st/8mGHAsqB0"},
            {name: "周序力",img:"zhouxuli.jpg",code:'zhouxuli.jpeg',major:"生态学",v_name:"与大自然零距离",link:"https://st.h5.xiaoe-tech.com/st/4wtOt5J1h"},
            {name: "孙静茹",img:"sunjingruai.png",code:'sunjingruai.jpeg',major:"生物科学",v_name:"爱到生物深处",link:"https://st.h5.xiaoe-tech.com/st/1eUiA2Ddh"},
            {name: "崔舜铫",img:"cuishunzhao.jpg",code:'cuishunzhao.jpeg',major:"地质学",v_name:"与地球共舞",link:"https://st.h5.xiaoe-tech.com/st/3tl3kL9Gu"},
            {name: "傅煜铭",img:"fuyimingdiqiu.jpg",code:'fuyimingdiqiu.jpeg',major:"地球物理",v_name:"聆听地球的动脉",link:"https://st.h5.xiaoe-tech.com/st/9ynLTVD31"},
            {name: "寇焜照",img:"koukunzhao.jpg",code:'koukunzhaofei.jpg',major:"化学专业",v_name:"伴随着兴趣与理想飞翔",link:"https://st.h5.xiaoe-tech.com/st/2OpxCBydd"},

        ]},
        {type: "jingji",list: [
            {name: "赵航",img:"zhaohangjinrong.png",code:'zhaohangjinrong.jpeg',major:"金融学",v_name:"金融学专业介绍",link:"https://st.h5.xiaoe-tech.com/st/3MGGoQs5a"},
            {name: "王子娇",img:"wangzijiao.png",code:'wangzijiao.jpeg',major:"贸易经济",v_name:"贸易经济的前世今生",link:"https://st.h5.xiaoe-tech.com/st/7kzQP32BD"},
            {name: "张雨佳",img:"zhangyujiamaoyi.png",code:'zhangyujiamaoyi.jpeg',major:"国际经济与贸易",v_name:"国际范，贸易通",link:"https://st.h5.xiaoe-tech.com/st/5UupkNNJk"},
            {name: "刘一鉴",img:"liuyijianweifen.jpg",code:'liuyijianweifen.jpeg',major:"应用数学",v_name:"微分天下人生几何",link:"https://st.h5.xiaoe-tech.com/st/9Wf8zUtgA"},
            {name: "梁煊",img:"lianxuan.jpg",code:'lianxuancaizheng.jpg',major:"财政学",v_name:"聚国民之财，理天下之政",link:"https://st.h5.xiaoe-tech.com/st/6KXXum4CG"},
            {name: "杨千帆",img:"yangqianfan.jpg",code:'yangqianfan.jpeg',major:"金融工程",v_name:"金融理念与工程思维的火花",link:"https://st.h5.xiaoe-tech.com/st/2B18SMXmR"},
            {name: "张皓璁",img:"zhanghaocong.jpg",code:'zhanghaocong.jpeg',major:"会计学",v_name:"一张报表，三生三世",link:"https://st.h5.xiaoe-tech.com/st/6QSLMk6ou"},
            {name: "周仕君",img:"zhoushijun.jpg",code:'zhoushijun.jpeg',major:"统计学",v_name:"黄金行业的敲门砖",link:"https://st.h5.xiaoe-tech.com/st/2nAaEI7h6"},
            {name: "王行健",img:"wangxingjian.jpg",code:'wangxingjian.jpeg',major:"金融数学",v_name:"学数学有“钱”途吗",link:"https://st.h5.xiaoe-tech.com/st/0xQvKpOSD"},
            {name: "靳扬",img:"jinyang.png",code:'jinyang.jpeg',major:"经济学",v_name:"经天纬地，济世救民",link:"https://st.h5.xiaoe-tech.com/st/04e9HTzw9"},
            {name: "臧嘉雯",img:"zangjiawen.png",code:'zangjiawen.jpeg',major:"经济学",v_name:"财经黄埔之“经世济民”",link:"https://st.h5.xiaoe-tech.com/st/5cj97Ckup"},
            {name: "孙舟",img:"sunzhou.jpg",code:'sunzhou.jpeg',major:"精算",v_name:"传说中年薪百万的行业",link:"https://st.h5.xiaoe-tech.com/st/3rp69qAkN"},
        ]},
        {type: "jiaoyu",list: [
            {name: "王梦倩",img:"wangmengqian.png",code:'wangmengqian.jpeg',major:"教育技术",v_name:"视频描述",link:"https://st.h5.xiaoe-tech.com/st/2O47xab7v"},
            {name: "郑旭滢",img:"zhenxuyin.jpg",code:'zhenxuyin.jpeg',major:"教育学专业",v_name:"崇教爱生，求真育人",link:"https://st.h5.xiaoe-tech.com/st/5lnt2Rt2g"},
            {name: "瞿志林",img:"boxueduxing.png",code:'boxueduxing.jpeg',major:"学前教育",v_name:"正蒙慈幼，博学笃行",link:"https://st.h5.xiaoe-tech.com/st/1OoibNbKh"},
        ]},
        {type: "guanli",list: [
            {name: "唐子玉",img:"tangziyu.png",code:'tangziyu.jpeg',major:"人力资源管理",v_name:"职场摆渡人",link:"https://st.h5.xiaoe-tech.com/st/0JovL3uJs"},
            {name: "何志灿",img:"hezhican.png",code:'hezhican.jpeg',major:"土地资源管理",v_name:"别拿土地爷不当神仙",link:"https://st.h5.xiaoe-tech.com/st/5EVUbOqAR"},
            {name: "张博",img:"zhangbo.jpg",code:'zhangbo.jpeg',major:"信息管理与信息系统",v_name:"信管，我想说爱你很容易",link:"https://st.h5.xiaoe-tech.com/st/1nMz1hncG"},
            {name: "沈阳",img:"shenyang.jpg",code:'shenyang.jpeg',major:"工程管理",v_name:"一线建筑师的故事",link:"https://st.h5.xiaoe-tech.com/st/0nZrPuB2D"},
            {name: "谷明",img:"guming.jpg",code:'guming.jpeg',major:"信息管理",v_name:"太祖也曾以此图生",link:"https://st.h5.xiaoe-tech.com/st/0fLdIql5M"},
            {name: "袁路斯",img:"yuanlusi.png",code:'yuanlusi.jpeg',major:"财务管理",v_name:"纸醉金迷之外",link:"https://st.h5.xiaoe-tech.com/st/2BIDuZaYQ"},
            {name: "覃红晔",img:"tanhonghua.jpg",code:'tanhonghua.jpeg',major:"信用管理",v_name:"信用管理专业",link:"https://st.h5.xiaoe-tech.com/st/4O284wPxH"},
            {name: "邱飞旸",img:"qiufeiyang.jpg",code:'qiufeiyanggong.jpg',major:"工业工程",v_name:"优化一切的工业工程",link:"https://st.h5.xiaoe-tech.com/st/9iOH4ucth"},
            {name: "杨周霖",img:"yangzhoulin.jpg",code:'yangzhoulin.jpeg',major:"艺术管理",v_name:"艺术也能管理",link:"https://st.h5.xiaoe-tech.com/st/2ioLgGsid"},
            {name: "马瑞敏",img:"maruiming.jpg",code:'maruiming.jpeg',major:"市场营销",v_name:"The combination of art and science",link:"https://st.h5.xiaoe-tech.com/st/134XI8DZI"},
            {name: "高子纹",img:"gaoziwen.jpg",code:'gaoziwen.jpeg',major:"旅游管理",v_name:"世界那么大，旅你的游管他呢",link:"https://st.h5.xiaoe-tech.com/st/9TeZG93J9"},
            {name: "李尔斯",img:"李尔斯+劳动与社会保障+你的社保由我来守护.jpg",code:'李尔斯—你的“社保”，由我来守护.jpeg',major:"劳动与社会保障",v_name:"你的“社保”，由我来守护",link:"https://st.h5.xiaoe-tech.com/st/0BO544WJH"},
            {name: "陆俊肖",img:"lunjunxiao.jpg",code:'lunjunxiao.jpeg',major:"农村与区域发展",v_name:"农林经济管理",link:"https://st.h5.xiaoe-tech.com/st/1WG24oaSc"},
        ]},
        {type: "yixue",list: [
            {name: "赵晶",img:"zhaojin.png",code:'zhaojin.jpeg',major:"药学",v_name:"今天你吃药了吗？",link:"https://st.h5.xiaoe-tech.com/st/2iw0RXNai"},
            {name: "靳奕舟",img:"jinyizhou.jpg",code:'jinyizhou.jpeg',major:"口腔医学",v_name:"我不仅是个拔牙匠",link:"https://st.h5.xiaoe-tech.com/st/8VVgb1ICz"},
            {name: "杨海南",img:"yanghainan.jpg",code:'yanghainan.jpeg',major:"临床医学",v_name:"天使在身边",link:"https://st.h5.xiaoe-tech.com/st/4eMGWgzVz"},
            {name: "王婵娟",img:"wangchanjuan.png",code:'wangchanjuan.jpg',major:"医学检验",v_name:"一叶落知天下秋",link:"https://st.h5.xiaoe-tech.com/st/1enmLKo7g"},
        ]},
        {type: "nongxue",list: [
            {name: "钱逸凡",img:"qianyifan.jpg",code:'qianyifan.jpeg',major:"动物科学",v_name:"爱上一匹野马，我的家里也有草原",link:"https://st.h5.xiaoe-tech.com/st/8kBgYRPuh"},
            {name: "鲁航",img:"luhang.png",code:'luhang.jpeg',major:"园艺",v_name:"不想富过许鲜的瓜农不是好园丁",link:"https://st.h5.xiaoe-tech.com/st/8nhQGLrah"},
            {name: "孙圣",img:"sunsheng.png",code:'sunsheng.jpeg',major:"林学",v_name:"森林之歌",link:"https://st.h5.xiaoe-tech.com/st/6fTnQdczT"},
            {name: "凯婧",img:"凯婧+植物保护+植物医生.png",code:'凯婧—植物医生.jpeg',major:"植物保护",v_name:"植物医生",link:"https://st.h5.xiaoe-tech.com/st/0v9127aLa"},
        ]},
        {type: "gongxue",list: [
            {name: "李爽",img:"lishaung.png",code:'lishaung.jpeg',major:"自动化",v_name:"“控制”之美",link:"https://st.h5.xiaoe-tech.com/st/5LuF6FAac"},
            {name: "张云翼",img:"zhangyunyi.png",code:'zhangyunyi.jpeg',major:"土木工程",v_name:"土木工程专业介绍",link:"https://st.h5.xiaoe-tech.com/st/2ImjJAW7c"},
            {name: "王怡汀",img:"wangyiting.jpg",code:'wangyiting.jpeg',major:"食品工程",v_name:"民以食为天",link:"https://st.h5.xiaoe-tech.com/st/8COXEiO9W"},
            {name: "王海森",img:"wanghaisen.png",code:'wanghaisen.jpeg',major:"石油工程",v_name:"石油工程那些事",link:"https://st.h5.xiaoe-tech.com/st/6JI786fn2"},
            {name: "赵晨贺",img:"zhaochenhe.jpg",code:'zhaochenhe.jpeg',major:"数字媒体技术",v_name:"拥抱后时代科技",link:"https://st.h5.xiaoe-tech.com/st/8XvfWATnL"},
            {name: "陈子健",img:"chenzijian.png",code:'chenzijian.jpeg',major:"专业",v_name:"视频描述",link:"https://st.h5.xiaoe-tech.com/st/96vA90vz8"},
            {name: "宋萌",img:"songmeng.png",code:'songmeng.jpeg',major:"城市规划",v_name:"真的不是你想象中的“城管”",link:"https://st.h5.xiaoe-tech.com/st/8jqzyVcF1"},
            {name: "李诗尧",img:"lishiyao.jpg",code:'lishiyao.jpeg',major:"飞行器设计与工程",v_name:"飞行器设计与工程",link:"https://st.h5.xiaoe-tech.com/st/28ZLItLaL"},
            {name: "任小康",img:"renxiaokang.jpg",code:'renxiaokang.jpeg',major:"高分子材料",v_name:"一个聚沙成塔的故事",link:"https://st.h5.xiaoe-tech.com/st/1oqSQTj3s"},
            {name: "韩勤",img:"hanqing.png",code:'hanqing.jpeg',major:"软件工程",v_name:"以梦为马，为时代添砖加瓦",link:"https://st.h5.xiaoe-tech.com/st/7O892EJJL"},
            {name: "陆星宇",img:"lunxingyu.jpg",code:'lunxingyu.jpeg',major:"飞行器动力工程",v_name:"重返地球",link:"https://st.h5.xiaoe-tech.com/st/8GgDsnoql"},
            {name: "郭转转",img:"guozhuanzhuan.jpg",code:'guozhuanzhuan.jpeg',major:"计算机科学与技术",v_name:"程序猿诞生记",link:"https://st.h5.xiaoe-tech.com/st/1xw939bjV"},
            {name: "徐冲越",img:"xuchongyue.png",code:'xuchongyue.jpeg',major:"地下水科学与工程",v_name:"你会到野外来看我吗",link:"https://st.h5.xiaoe-tech.com/st/0wIMYCzX8"},
            {name: "彭冲",img:"pengchong.png",code:'pengchong.jpeg',major:"新能源与器件",v_name:"破解能源危机与环境问题的钥匙",link:"https://st.h5.xiaoe-tech.com/st/6ReegjqJO"},
            {name: "栗嘉琪",img:"lijiaqi.png",code:'lijiaqi.jpeg',major:"车辆工程",v_name:"当汽车遇见艺术",link:"https://st.h5.xiaoe-tech.com/st/2OvocbWez"},
            {name: "刘平泽",img:"liupinze.png",code:'liupinze.jpeg',major:"冶金",v_name:"钢铁是怎样炼成的",link:"https://st.h5.xiaoe-tech.com/st/41QvALHMN"},
            {name: "邵熠",img:"shaoye.png",code:'shaoye.jpg',major:"通信工程",v_name:"信传千里，通达天下",link:"https://st.h5.xiaoe-tech.com/st/04e9HTzw9"},
            {name: "高劲洋",img:"gaojingyang.jpg",code:'gaojingyang.jpeg',major:"土木工程",v_name:"万丈高楼平地",link:"https://st.h5.xiaoe-tech.com/st/1Rk0043co"},
            {name: "曹敏",img:"caoming.jpg",code:'caoming.jpeg',major:"地理信息系统",v_name:"上知天文，下知地理",link:"https://st.h5.xiaoe-tech.com/st/4pTIZcZ3n"},
            {name: "王艺婷",img:"wangyitingxinxi.jpg",code:'wangyitingxinxi.jpeg',major:"信息工程",v_name:"信息是什么？可以吃吗",link:"https://st.h5.xiaoe-tech.com/st/8gM3HvqJP"},
            {name: "赵梓序",img:"zhaozixu.png",code:'zhaozixu.jpeg',major:"电子信息工程",v_name:"“E”往情深",link:"https://st.h5.xiaoe-tech.com/st/2hJIadelH"},
            {name: "苏少杰",img:"sushaojie.png",code:'sushaojie.jpeg',major:"微电子专业",v_name:"行电子电路 攀科技雄风",link:"https://st.h5.xiaoe-tech.com/st/36l60AOPN"},
            {name: "杨小花",img:"yangxiaohua.png",code:'yangxiaohua.jpeg',major:"葡萄酒",v_name:"你一定很能喝吧",link:"https://st.h5.xiaoe-tech.com/st/1jFHszFMB"},
            {name: "唐守华",img:"tangshouhua.jpg",code:'tangshouhua.jpeg',major:"机械工程",v_name:"名为机械却不机械的机械学",link:"https://st.h5.xiaoe-tech.com/st/2ymMp4Tld"},
        ]},
        {type: "faxue",list: [
            {name: "徐婧",img:"xujing.png",code:'xujing.jpeg',major:"法学",v_name:"开门！违宪审查",link:"https://st.h5.xiaoe-tech.com/st/7Z7w37JyQ"},
            {name: "王璨",img:"wangcan.jpg",code:'wangcan.jpeg',major:"国际事务与国际关系",v_name:"煮酒论天下",link:"https://st.h5.xiaoe-tech.com/st/58q22KmAv"},
            {name: "曹心慧",img:"caoxinhui.png",code:'caoxinhui.jpeg',major:"国际政治",v_name:"进可千里屠龙，退可牛鼎烹鸡",link:"https://st.h5.xiaoe-tech.com/st/2v9HKI2i4"},
            {name: "梅玲",img:"meilin.jpg",code:'meilin.jpeg',major:"社会学",v_name:"社会学是什么",link:"https://st.h5.xiaoe-tech.com/st/2XOgulnKt"},
            {name: "薛苗",img:"xuemiao.jpg",code:'xuemiao.jpeg',major:"社会工作",v_name:"社会工作",link:"https://st.h5.xiaoe-tech.com/st/6KQUVI4wF"},
        ]},
        {type: "lishi",list: [
            {name: "刘相宜",img:"liuxiangyi.jpg",code:'liuxiangyi.jpeg',major:"历史学",v_name:"历史的尽头总是情歌",link:"https://st.h5.xiaoe-tech.com/st/2yWqUwuSS"},
        ]},
        {type: "yishu",list: [
            {name: "高培厚",img:"gaopeihou.jpg",code:'gaopeihou.jpeg',major:"戏剧影视文学",v_name:"我的脑子全是洞",link:"https://st.h5.xiaoe-tech.com/st/4V3oqpBBj"},
            {name: "刘婉莹",img:"liuwanying.png",code:'liuwanying.jpeg',major:"广播影视编导",v_name:"不是所有人都吃得了“艺术”这婉饭",link:"https://st.h5.xiaoe-tech.com/st/0FUaJHMW5"},
            {name: "陈晓琦",img:"chenxiaoqi.jpg",code:'chenxiaoqi.jpeg',major:"纤维艺术设计",v_name:"仙境之外",link:"https://st.h5.xiaoe-tech.com/st/8cy9BDFCK"},
        ]},
        {type: "zhexue",list: [
            {name: "陈静仪",img:"chenjingyi.jpg",code:'chenjingyi.jpeg',major:"哲学",v_name:"哲学，一个疑问句",link:"https://st.h5.xiaoe-tech.com/st/20mMBFoQ"},
            {name: "薛雨洁",img:"xueyujie.jpg",code:'xueyujie.jpeg',major:"伦理学",v_name:"人伦与道理",link:"https://st.h5.xiaoe-tech.com/st/1faWrDea0"},
            // {name: "姓名",img:"封面图片",code:'二维码',major:"专业",v_name:"视频描述",link:"h7I96T27lM"},
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

    var first_preview = '<div class="video">\n' +
        '                <div class="img-box">\n' +
        '                    <img  id="firstBox" class="video-img" src="../resource/major/tangdingyao_duiwai.jpg">\n' +
        '                    <a class="play-icon" href="javascript:void(0);"><img class="play_ico_btn" src="../resource/major/play_btn_04.png"></a>\n' +
        '                    <div class="cover hide">\n' +
        '                        <div class="code-box">\n' +
        '                            <img class="lazy code-img" src="../resource/major/tangdingyaoduiwai.jpeg">\n' +
        '                            <span class="info">扫码即可播放</span>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <p class="video-info">汉语言国际教育 - 汉语言国际教育专业</p>\n' +
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
                    '                <p class="video-info">'+ t.name + "—" + t.v_name +'</p>\n' +
                    '            </div>'
            })

            $("#"+ id ).html(html);
        })
        $(".img-box").css({'height': scope.vheight + 'px'});
        $(".video-img").css({'height': scope.vheight + 'px'});
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
                // console.log(scope.vheight)
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
    getFixed();
})