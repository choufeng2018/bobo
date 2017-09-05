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
            {name: "孙舟",img:"孙舟+精算+精算：传说中年薪百万的行业.jpg",code:'孙舟—传说中年薪百万的行业.jpeg',major:"精算",v_name:"传说中年薪百万的行业",link:"https://st.h5.xiaoe-tech.com/st/3rp69qAkN"},
        ]},
        {type: "jiaoyu",list: [
            {name: "王梦倩",img:"王梦倩+教育技术+教育技术：少有人走的路.png",code:'王梦倩—教育专业_少有人走的路.jpeg',major:"教育技术",v_name:"视频描述",link:"https://st.h5.xiaoe-tech.com/st/2O47xab7v"},
            {name: "郑旭滢",img:"郑旭滢+教育学+崇教爱生，求真育人.jpg",code:'郑旭滢—崇教爱生，求真育人.jpeg',major:"教育学专业",v_name:"崇教爱生，求真育人",link:"https://st.h5.xiaoe-tech.com/st/5lnt2Rt2g"},
            {name: "瞿志林",img:"瞿志林  + 学前教育+正蒙慈幼，博学笃行.png",code:'翟志林 —正蒙慈幼，博学笃行.jpeg',major:"学前教育",v_name:"正蒙慈幼，博学笃行",link:"https://st.h5.xiaoe-tech.com/st/1OoibNbKh"},
        ]},
        {type: "guanli",list: [
            {name: "唐子玉",img:"唐子玉+人力资源管理+职场摆渡人-走进HR.png",code:'唐子玉—职场摆渡人.jpeg',major:"人力资源管理",v_name:"职场摆渡人",link:"https://st.h5.xiaoe-tech.com/st/0JovL3uJs"},
            {name: "何志灿",img:"何志灿+土地资源管理+别拿土地爷不当神仙.png",code:'何志灿—别拿土地爷不当神仙.jpeg',major:"土地资源管理",v_name:"别拿土地爷不当神仙",link:"https://st.h5.xiaoe-tech.com/st/5EVUbOqAR"},
            {name: "张博",img:"张博 + 信息管理与信息系统+信管，想说爱你很容易.jpg",code:'张博—信管，我想说爱你很容易.jpeg',major:"信息管理与信息系统",v_name:"信管，我想说爱你很容易",link:"https://st.h5.xiaoe-tech.com/st/1nMz1hncG"},
            {name: "沈阳",img:"沈阳+工程管理+一线建筑师的故事.jpg",code:'沈阳—  一线建筑师的故事.jpeg',major:"工程管理",v_name:"一线建筑师的故事",link:"https://st.h5.xiaoe-tech.com/st/0nZrPuB2D"},
            {name: "谷明",img:"谷明+信息管理+太祖也曾以此图生.jpg",code:'谷明—太祖也曾以此图生.jpeg',major:"信息管理",v_name:"太祖也曾以此图生",link:"https://st.h5.xiaoe-tech.com/st/0fLdIql5M"},
            {name: "袁路斯",img:"袁路斯+财务管理+纸醉金迷之外.png",code:'袁路斯—纸醉金迷之外.jpeg',major:"财务管理",v_name:"纸醉金迷之外",link:"https://st.h5.xiaoe-tech.com/st/2BIDuZaYQ"},
            {name: "覃红晔",img:"覃红晔+信用管理.jpg",code:'覃红晔—信用管理专业.jpeg',major:"信用管理",v_name:"信用管理专业",link:"https://st.h5.xiaoe-tech.com/st/4O284wPxH"},
            // {name: "邱飞旸",img:"封面图片",code:'二维码',major:"工业工程",v_name:"优化一切的工业工程",link:"https://st.h5.xiaoe-tech.com/st/9iOH4ucth"},
            {name: "杨周霖",img:"杨周霖+艺术管理+艺术也能管理.jpg",code:'杨周霖—艺术也能管理.jpeg',major:"艺术管理",v_name:"艺术也能管理",link:"https://st.h5.xiaoe-tech.com/st/2ioLgGsid"},
            {name: "马瑞敏",img:"马瑞敏+市场营销+The Combination of Art and Science.jpg",code:'马瑞敏—The combination of art and science.jpeg',major:"市场营销",v_name:"The combination of art and science",link:"https://st.h5.xiaoe-tech.com/st/134XI8DZI"},
            {name: "高子纹",img:"高子纹+旅游管理+世界那么大，旅你的游管他呢.jpg",code:'高子纹—世界那么大，旅你的游管他呢.jpeg',major:"旅游管理",v_name:"世界那么大，旅你的游管他呢",link:"https://st.h5.xiaoe-tech.com/st/9TeZG93J9"},
            {name: "李尔斯",img:"李尔斯+劳动与社会保障+你的社保由我来守护.jpg",code:'李尔斯—你的“社保”，由我来守护.jpeg',major:"劳动与社会保障",v_name:"你的“社保”，由我来守护",link:"https://st.h5.xiaoe-tech.com/st/0BO544WJH"},
            {name: "陆俊肖",img:"陆俊肖+农林经济管理专业.jpg",code:'陆俊肖—农林经济管理.jpeg',major:"农村与区域发展",v_name:"农林经济管理",link:"https://st.h5.xiaoe-tech.com/st/1WG24oaSc"},
        ]},
        {type: "yixue",list: [
            {name: "赵晶",img:"赵晶+药学+今天你吃药了吗.png",code:'赵晶—今天你吃药了吗.jpeg',major:"药学",v_name:"今天你吃药了吗？",link:"https://st.h5.xiaoe-tech.com/st/2iw0RXNai"},
            {name: "靳奕舟",img:"靳奕舟+口腔医学+我不仅是个拔牙匠.jpg",code:'靳奕舟—我不仅是个拔牙匠.jpeg',major:"口腔医学",v_name:"我不仅是个拔牙匠",link:"https://st.h5.xiaoe-tech.com/st/8VVgb1ICz"},
            {name: "杨海南",img:"杨海南+临床医学+天使在身边.jpg",code:'杨海南—天使在身边.jpeg',major:"临床医学",v_name:"天使在身边",link:"https://st.h5.xiaoe-tech.com/st/4eMGWgzVz"},
            // {name: "王婵娟",img:"王婵娟+医学检验+一叶落知天下秋.png",code:'二维码',major:"医学检验",v_name:"一叶落知天下秋",link:"https://st.h5.xiaoe-tech.com/st/1enmLKo7g"},
        ]},
        {type: "nongxue",list: [
            {name: "钱逸凡",img:"钱逸凡+动物科学+爱上一匹野马，我的家里也有草原.jpg",code:'钱逸凡—爱上一匹野马，我的家里也有草原.jpeg',major:"动物科学",v_name:"爱上一匹野马，我的家里也有草原",link:"https://st.h5.xiaoe-tech.com/st/8kBgYRPuh"},
            {name: "鲁航",img:"鲁航+园艺+不想富过许鲜的瓜农不是好园丁.png",code:'鲁航—不想当富过许鲜的瓜农不是好园丁.jpeg',major:"园艺",v_name:"不想富过许鲜的瓜农不是好园丁",link:"https://st.h5.xiaoe-tech.com/st/8nhQGLrah"},
            {name: "孙圣",img:"孙圣+林学专业+森林之歌.png",code:'孙圣—森林之歌.jpeg',major:"林学",v_name:"森林之歌",link:"https://st.h5.xiaoe-tech.com/st/6fTnQdczT"},
            {name: "凯婧",img:"凯婧+植物保护+植物医生.png",code:'凯婧—植物医生.jpeg',major:"植物保护",v_name:"植物医生",link:"https://st.h5.xiaoe-tech.com/st/0v9127aLa"},
        ]},
        {type: "gongxue",list: [
            {name: "李爽",img:"李爽+自动化+“控制”之美.png",code:'李爽-控制之美.jpeg',major:"自动化",v_name:"“控制”之美",link:"https://st.h5.xiaoe-tech.com/st/5LuF6FAac"},
            {name: "张云翼",img:"张云翼+土木工程专业介绍.png",code:'张云翼—土木工程.jpeg',major:"土木工程",v_name:"土木工程专业介绍",link:"https://st.h5.xiaoe-tech.com/st/2ImjJAW7c"},
            {name: "王怡汀",img:"王怡汀+食品工程+民以食为天.jpg",code:'王怡汀—民以食为天.jpeg',major:"食品工程",v_name:"民以食为天",link:"https://st.h5.xiaoe-tech.com/st/8COXEiO9W"},
            {name: "王海森",img:"王海森+石油工程+石油工程那些事.png",code:'王海森—石油工程那些事.jpeg',major:"石油工程",v_name:"石油工程那些事",link:"https://st.h5.xiaoe-tech.com/st/6JI786fn2"},
            {name: "赵晨贺",img:"赵晨贺+数字媒体技术+拥抱后时代科技.jpg",code:'赵晨贺—拥抱后时代科技.jpeg',major:"数字媒体技术",v_name:"拥抱后时代科技",link:"https://st.h5.xiaoe-tech.com/st/8XvfWATnL"},
            {name: "陈子健",img:"陈子健+安全工程专业+安全工程.png",code:'陈子健—安全工程.jpeg',major:"专业",v_name:"视频描述",link:"https://st.h5.xiaoe-tech.com/st/96vA90vz8"},
            {name: "宋萌",img:"宋萌+城市规划+真不是你想象中的“城管”.png",code:'宋萌—真的不是你想象中的“城管”.jpeg',major:"城市规划",v_name:"真的不是你想象中的“城管”",link:"https://st.h5.xiaoe-tech.com/st/8jqzyVcF1"},
            {name: "李诗尧",img:"李诗尧+飞行器设计与工程专业+飞行器设计与工程.jpg",code:'李诗尧—飞行器设计与工程.jpeg',major:"飞行器设计与工程",v_name:"飞行器设计与工程",link:"https://st.h5.xiaoe-tech.com/st/28ZLItLaL"},
            {name: "任小康",img:"任小康+高分子材料与工程+一个聚沙成塔的故事.jpg",code:'任小康—  一个聚沙成塔的故事.jpeg',major:"高分子材料",v_name:"一个聚沙成塔的故事",link:"https://st.h5.xiaoe-tech.com/st/1oqSQTj3s"},
            {name: "韩勤",img:"韩勤+软件工程+以梦为马，为时代添砖加瓦.png",code:'韩勤—以梦为马，为时代添砖加瓦.jpeg',major:"软件工程",v_name:"以梦为马，为时代添砖加瓦",link:"https://st.h5.xiaoe-tech.com/st/7O892EJJL"},
            {name: "陆星宇",img:"陆星宇+飞行器动力工程+重返地球.jpg",code:'陆星宇—重返地球.jpeg',major:"飞行器动力工程",v_name:"重返地球",link:"https://st.h5.xiaoe-tech.com/st/8GgDsnoql"},
            {name: "郭转转",img:"郭转转+计算机科学与技术+程序猿诞生记.jpg",code:'郭转转—程序猿诞生记.jpeg',major:"计算机科学与技术",v_name:"程序猿诞生记",link:"https://st.h5.xiaoe-tech.com/st/1xw939bjV"},
            {name: "徐冲越",img:"徐冲越+地下水科学与工程+你会到野外来看我吗？.png",code:'徐冲越—你会到野外来看我吗.jpeg',major:"地下水科学与工程",v_name:"你会到野外来看我吗",link:"https://st.h5.xiaoe-tech.com/st/0wIMYCzX8"},
            {name: "彭冲",img:"彭冲+新能源材料与器件+破解新能源危机与环境问题的钥匙.png",code:'彭冲—破解能源危机与环境问题的钥匙.jpeg',major:"新能源与器件",v_name:"破解能源危机与环境问题的钥匙",link:"https://st.h5.xiaoe-tech.com/st/6ReegjqJO"},
            {name: "栗嘉琪",img:"栗嘉琪+车辆工程+当汽车遇见艺术.png",code:'栗嘉琪—当汽车遇见艺术.jpeg',major:"车辆工程",v_name:"当汽车遇见艺术",link:"https://st.h5.xiaoe-tech.com/st/2OvocbWez"},
            {name: "刘平泽",img:"刘平泽+冶金工程专业+钢铁是怎样炼成的.png",code:'刘平泽—钢铁是怎样炼成的.jpeg',major:"冶金",v_name:"钢铁是怎样炼成的",link:"https://st.h5.xiaoe-tech.com/st/41QvALHMN"},
            // {name: "邵熠",img:"邵熠  +通信工程+信传千里，通达天下.png",code:'二维码',major:"通信工程",v_name:"信传千里，通达天下",link:"https://st.h5.xiaoe-tech.com/st/04e9HTzw9"},
            {name: "高劲洋",img:"高劲洋+土木工程+万丈高楼平地起.jpg",code:'高劲洋—万丈高楼平地.jpeg',major:"土木工程",v_name:"万丈高楼平地",link:"https://st.h5.xiaoe-tech.com/st/1Rk0043co"},
            {name: "曹敏",img:"曹敏+地理信息+上知天文，下知地理.jpg",code:'曹敏—上知天文，下知地理.jpeg',major:"地理信息系统",v_name:"上知天文，下知地理",link:"https://st.h5.xiaoe-tech.com/st/4pTIZcZ3n"},
            {name: "王艺婷",img:"王艺婷+信息工程+信息是什么可以吃吗？.jpg",code:'王艺婷—信息是什么？可以吃吗.jpeg',major:"信息工程",v_name:"信息是什么？可以吃吗",link:"https://st.h5.xiaoe-tech.com/st/8gM3HvqJP"},
            {name: "赵梓序",img:"赵梓序+电子信息工程+“e”往情深.png",code:'赵梓序—“E_往情深.jpeg',major:"电子信息工程",v_name:"“E”往情深",link:"https://st.h5.xiaoe-tech.com/st/2hJIadelH"},
            {name: "苏少杰",img:"苏少杰+微电子+行电子电路 攀科技高峰.png",code:'苏少杰—行电子电路，攀科技雄风.jpeg',major:"微电子专业",v_name:"行电子电路 攀科技雄风",link:"https://st.h5.xiaoe-tech.com/st/36l60AOPN"},
            {name: "杨小花",img:"杨小花+葡萄与葡萄酒专业+你一定很能喝吧.png",code:'杨小花—你一定很能喝吧.jpeg',major:"葡萄酒",v_name:"你一定很能喝吧",link:"https://st.h5.xiaoe-tech.com/st/1jFHszFMB"},
            {name: "唐守华",img:"唐守华+机械工程+名为机械却不机械的机械系.jpg",code:'唐守华—名为机械却不机械的机械学.jpeg',major:"机械工程",v_name:"名为机械却不机械的机械学",link:"https://st.h5.xiaoe-tech.com/st/2ymMp4Tld"},
        ]},
        {type: "faxue",list: [
            {name: "徐婧",img:"徐婧+法学+开门！违宪审查.png",code:'徐婧—开门！违宪审查.jpeg',major:"法学",v_name:"开门！违宪审查",link:"https://st.h5.xiaoe-tech.com/st/7Z7w37JyQ"},
            {name: "王璨",img:"王璨+国际事务与国际关系+煮酒论天下.jpg",code:'王璨—煮酒论天下.jpeg',major:"国际事务与国际关系",v_name:"煮酒论天下",link:"https://st.h5.xiaoe-tech.com/st/58q22KmAv"},
            {name: "曹心慧",img:"曹心慧+国际政治+进可千里屠牛，退可牛鼎烹鸡.png",code:'曹心慧—进可千里屠龙，退可牛鼎烹鸡.jpeg',major:"国际政治",v_name:"进可千里屠龙，退可牛鼎烹鸡",link:"https://st.h5.xiaoe-tech.com/st/2v9HKI2i4"},
            {name: "梅玲",img:"梅玲+社会学+社会学是什么.jpg",code:'梅玲—社会学是什么.jpeg',major:"社会学",v_name:"社会学是什么",link:"https://st.h5.xiaoe-tech.com/st/2XOgulnKt"},
            {name: "薛苗",img:"薛苗+社会工作+社会工作专业介绍.jpg",code:'薛苗—社会工作.jpeg',major:"社会工作",v_name:"社会工作",link:"https://st.h5.xiaoe-tech.com/st/6KQUVI4wF"},
        ]},
        {type: "lishi",list: [
            {name: "刘相宜",img:"刘相宜+历史学+历史的尽头总是情歌.jpg",code:'刘相宜—历史的尽头总是情歌.jpeg',major:"历史学",v_name:"历史的尽头总是情歌",link:"https://st.h5.xiaoe-tech.com/st/2yWqUwuSS"},
        ]},
        {type: "yishu",list: [
            {name: "高培厚",img:"高培厚+戏剧与影视文学+我的脑子全是洞.jpg",code:'高培厚—我的脑子全是洞.jpeg',major:"戏剧影视文学",v_name:"我的脑子全是洞",link:"https://st.h5.xiaoe-tech.com/st/4V3oqpBBj"},
            {name: "刘婉莹",img:"刘婉莹+广播影视编导+不是所有人都吃得了“艺术”这碗饭.png",code:'刘婉莹—不是所有人都吃的了“艺术”这碗饭.jpeg',major:"广播影视编导",v_name:"不是所有人都吃得了“艺术”这婉饭",link:"https://st.h5.xiaoe-tech.com/st/0FUaJHMW5"},
            {name: "陈晓琦",img:"陈晓琦+纤维技术设计+纤境之外.jpg",code:'陈晓琦—仙境之外.jpeg',major:"纤维艺术设计",v_name:"仙境之外",link:"https://st.h5.xiaoe-tech.com/st/8cy9BDFCK"},
        ]},
        {type: "zhexue",list: [
            {name: "陈静仪",img:"陈静仪+哲学+哲学，一个疑问句.jpg",code:'陈静仪—哲学.jpeg',major:"哲学",v_name:"哲学，一个疑问句",link:"https://st.h5.xiaoe-tech.com/st/20mMBFoQ"},
            {name: "薛雨洁",img:"薛雨洁+伦理学+人伦与道理.jpg",code:'薛雨洁—人伦与道理.jpeg',major:"伦理学",v_name:"人伦与道理",link:"https://st.h5.xiaoe-tech.com/st/1faWrDea0"},
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
                    '                <p class="video-info">'+ t.major + " — " + t.v_name +'</p>\n' +
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
        // if(img.attr("src"))
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
window.onload = function () {
    console.log("hahahahah")
}