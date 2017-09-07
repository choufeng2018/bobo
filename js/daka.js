getHeader("daka");

var scope = {
    // 专业学霸
    list_l:[
        {name:'曹敏',college:'中国地质大学',major:'地理信息系统',intro:'一个勤奋而努力的陕西女孩',img:'caoming.png'},
        {name:'曹心慧',college:'中国人民大学',major:'国际政治',intro:'中国人民大学世界经济研究生',img:'caoxinhui.png'},
        {name:'陈静仪',college:'北京大学',major:'哲学与宗教学专业',intro:'爱爱考爱阅读',img:'chenjingyi.png'},
        {name:'陈苏娅',college:'清华大学',major:'新闻与传播学院',intro:'文学、国标、摄影都是最爱',img:'chensuya.png'},
        {name:'陈晓琦',college:'清华大学',major:'纤维艺术设计',intro:'本科专业和综合学分均班级第一',img:'chenxiaoqi.png'},
        {name:'陈子健',college:'中国地质大学',major:'构造地质学',intro:'喜欢探险的地质男',img:'chenzijian.png'},
        {name:'崔舜铫',college:'中国地质大学',major:'地质学',intro:'21岁的硕士，多次获得国家奖学金',img:'cuishunzhao.png'},
        {name:'付朋',college:'中国人民大学',major:'日语',intro:'理科生的文科蜕变',img:'fupeng.png'},
        {name:'傅煜铭',college:'中国地质大学',major:'地球物理专业',intro:'北京市优秀毕业生',img:'fuyiming.png'},
        {name:'高劲洋',college:'清华大学',major:'土木工程',intro:'清华大学土木工程系免试推荐博士生',img:'gaojingyang.png'},
        {name:'高敏',college:'青年政治学院',major:'汉语言文学',intro:'非典型“山东姑娘”，典型“山东考霸”',img:'gaoming.png'},
        {name:'高培厚',college:'解放军艺术学院',major:'文学系',intro:'北京林业大学研究生',img:'gaopeihou.png'},
        {name:'高子纹',college:'北京第二外国语学院',major:'旅游管理',intro:'优秀学生干部',img:'gaoziwen.png'},
        {name:'谷明',college:'北京大学',major:'信息管理专业',intro:'博士在读',img:'guming.png'},
        {name:'郭转转',college:'北京大学',major:'计算机科学与技术',intro:'四年连续获得奖学金和三好学生',img:'guozhuanzhuan.png'},
        {name:'韩勤',college:'北京理工大学',major:'软件工程',intro:'“优秀班干部”',img:'hanqing.png'},
        {name:'何志灿',college:'中国人民大学',major:'土地资源管理专业',intro:'大学期间图书借阅量累计800+，读书笔记300+',img:'hezhican.png'},
        {name:'侯瑞祥',college:'南昌大学',major:'材料物理',intro:'发明专利九项，参加学术会议五次',img:'houruixiang.png'},
        {name:'靳扬',college:'厦门大学',major:'经济学',intro:'善于用方法论攻克高中学习中的知识点，属于勤奋型学生',img:'jinyang.png'},
        {name:'靳奕舟',college:'四川大学',major:'口腔医学',intro:'现北京大学研究生一年级',img:'jinyizhou.png'},
        {name:'凯婧',college:'中国农业大学',major:'植物保护',intro:'保送南京大学生物学院攻读研究生',img:'kaijing.png'},
        {name:'寇焜照',college:'北京大学',major:'化学专业',intro:'痴迷于实验的理科男',img:'koukunzhao.png'},
        {name:'李尔斯',college:'武汉大学',major:'劳动与社会保障学',intro:'大学时荣获“学霸”与“社团达人”称号',img:'liersi.png'},
        {name:'李诗尧',college:'北京航空航天大学',major:'飞行器设计与工程',intro:'从小有一颗飞行的梦想',img:'lishiyao.png'},
        {name:'李爽',college:'清华大学',major:'自动化专业',intro:'高考理综河南省状元，康奈尔大学交换生',img:'lishuang.png'},
        {name:'李孝严',college:'北京大学',major:'法语专业',intro:'享受法语中的浪漫',img:'lixiaoyan.png'},
        {name:'栗嘉琪',college:'清华大学',major:'车辆工程',intro:'连续三年获得清华大学优秀奖',img:'lijiaqi.png'},
        {name:'梁鑫蕊',college:'北京大学',major:'考古学',intro:'生活中的小可爱，考古中的女汉子',img:'liangxinrui.png'},
        {name:'梁煊',college:'厦门大学',major:'财政学',intro:'专业第三的成绩保送至中国人民大学财政金融学院硕博连读',img:'laingxuan.jpg'},
        {name:'刘安妮',college:'中国人民大学',major:'国学',intro:'GPA年级第一',img:'liuanni.png'},
        {name:'刘珈豪',college:'中国人民大学',major:'俄语',intro:'爱语言、爱运动',img:'liujiahao.png'},
        {name:'刘平泽',college:'北京科技大学',major:'冶金专业',intro:'爱好运动、音乐、文学',img:'liupingze.png'},
        {name:'刘婉莹',college:'中国传媒大学',major:'广播影视编导',intro:'荣获国家奖学金、研究生一等奖学金。中国传媒大学研究生，先后在国家新闻出版广电总局、凤凰卫视、湖南广播电视台等地实习。',img:'liuwanying.png'},
        {name:'刘相宜',college:'北京大学',major:'历史学专业',intro:'阅史书行天下',img:'liuxiangyi.png'},
        {name:'刘一鉴',college:'上海财经大学',major:'数学与应用数学',intro:'一个喜欢文科的理科生',img:'liuyijian.png'},
        {name:'鲁航',college:'中国农业大学',major:'园艺',intro:'国内首个校内真人图书馆联合创始人',img:'luhang.png'},
        {name:'陆俊肖',college:'中国人民大学',major:'农村区域经济与管理',intro:'有着北方豪爽的南方姑娘',img:'lujunxiao.png'},
        {name:'鹿飞宇',college:'北京师范大学',major:'心理学',intro:'心理学部,交响乐团团长，用心理学解读人生',img:'lufeiyu.png'},
        {name:'马瑞敏',college:'北京大学',major:'市场营销',intro:'高中阶段曾从年级800名到第11名',img:'maruiming.png'},
        {name:'马智玲',college:'中国人民大学',major:'哲学',intro:'北京大学法律系读硕士',img:'mazhiling.png'},
        {name:'梅玲',college:'北京大学',major:'社会学',intro:'2013年高考全国卷数学满分',img:'meiling.png'},
        {name:'孟瑶玥',college:'上海财经大学',major:'生态学',intro:'长期保持专业第一的成绩',img:'mengyueyao.jpg'},
        {name:'彭冲',college:'中南大学',major:'新能源与器件',intro:'北京理工大学研究生',img:'pengchong.png'},
        {name:'钱逸凡',college:'中国农业大学',major:'动物科学专业',intro:'中国农业大学红十字会会长',img:'qianyifan.png'},
        {name:'邱飞旸',college:'清华大学',major:'工业工程',intro:'高中时一个月从年级300到年级第7',img:'qiufeiyang.jpg'},
        {name:'任小康',college:'四川大学',major:'高分子材料科学与工程',intro:'现中科院研究生一年级',img:'renxiaokang.png'},
        {name:'沙梦吟',college:'南开大学',major:'生物科学',intro:'连续两年国家奖学金获得者',img:'shamengyin.png'},
        {name:'邵熠',college:'北京邮电大学',major:'通信工程',intro:'擅长演讲，热爱旅行和交朋友',img:'shaoye.png'},
        {name:'沈阳',college:'清华大学',major:'工程管理专业',intro:'物理竞赛保送清华',img:'shenyang.png'},
        {name:'宋佳颐',college:'南开大学',major:'生命技术专业',intro:'音乐旅游都是最爱',img:'songjiayi.png'},
        {name:'宋萌',college:'北京大学',major:'城市规划',intro:'不折不扣的超级学霸,高考摘得市理科状元',img:'songmeng.png'},
        {name:'苏少杰',college:'北京邮电大学',major:'微电子',intro:'专业第2的成绩保送清华大学微纳电子学系攻读博士',img:'sushaojie.png'},
        {name:'孙静茹',college:'南京农业大学',major:'生物科学',intro:'曾南非德班国际气候大会与会候选人',img:'sunjingru.png'},
        {name:'孙圣',college:'山东林业大学',major:'林学',intro:'登山、跑步、旅游、积极乐观向上',img:'sunsheng.png'},
        {name:'孙瑀蔓',college:'北京大学',major:'中文',intro:'曾作为中国学生代表参加美国西点军校领导力论坛',img:'sunyunman.jpg'},
        {name:'孙舟',college:'中国人民大学',major:'精算学',intro:'从芬兰交换归来，喜欢极光、大自然美景、画画、户外运动',img:'sunzhou.png'},
        {name:'覃红晔',college:'中国人民大学',major:'信用管理',intro:'以皮毛的态度热爱各种非主业',img:'tanhouhua.png'},
        {name:'唐定耀',college:'北京语言大学',major:'对外汉语专业',intro:'北京语言大学校级“优秀团员”“三好学生”',img:'tangdingyao.png'},
        {name:'唐守华',college:'清华大学',major:'机械工程及自动化专业',intro:'爱阅读的工科生',img:'tangshouhau.png'},
        {name:'唐子玉',college:'中国人民大学',major:'人力资源管理',intro:'喜欢交朋友，欢迎来谈天说地，聊人生聊理想',img:'tangziyu.png'},
        {name:'王璨',college:'北京语言大学',major:'国际事务与国际关系',intro:'大三时被评为雅思口语最年轻讲师',img:'wangcan.jpg'},
        {name:'王婵娟',college:'中南大学',major:'医学检验',intro:'2016年保研至北京大学第三临床医学院',img:'wangchanjuan.png'},
        {name:'王海森',college:'中国石油大学',major:'石油工程专业',intro:'时间管理高手',img:'wanghaisen.png'},
        {name:'王行健',college:'中央财经大学',major:'金融数学',intro:'金融学与金融数学双学位',img:'wangxingjian.png'},
        {name:'王梦倩',college:'首都师范大学',major:'教育技术',intro:'爱好摄影、非虚构写作',img:'wangmengqian.png'},
        {name:'王怡汀',college:'中国农业大学',major:'食品工程专业',intro:'集篮球健将、摄影师、私教、美食家于一身',img:'wangyiting.png'},
        {name:'王艺婷',college:'北京邮电大学',major:'信息工程专业',intro:'热爱与“美”有关的一切',img:'wangyitin.png'},
        {name:'王子娇',college:'中国人民大学',major:'经贸学',intro:'热爱公益和户外运动',img:'wangzijiao.png'},
        {name:'吴雨蔚',college:'中国人民大学',major:'传媒经济学专业',intro:'踏遍万水千山，美食美景与爱不可辜负',img:'wuyuwei.png'},
        {name:'徐冲越',college:'中国地质大学',major:'地下水科学与工程',intro:'2016年北京市优秀毕业生',img:'xuchongyue.png'},
        {name:'徐婧',college:'北京大学',major:'法学专业',intro:'热爱看话剧、演话剧',img:'xujin.png'},
        {name:'薛苗',college:'北京科技大学',major:'社会工作专业',intro:'年年奖学金获得者',img:'xuemiao.png'},
        {name:'薛雨洁',college:'中国人民大学',major:'伦理学专业',intro:'现本校研究生二年级',img:'xueyujie.png'},
        {name:'杨海南',college:'北京大学医学部',major:'临床医学',intro:'目标明确，富有激情的医学学子',img:'yanghainan.png'},
        {name:'杨慧玲',college:'中国传媒大学',major:'广告学',intro:'好奇心与胃口都曾试图装下整个宇宙',img:'yanghuilin.png'},
        {name:'杨男',college:'中国农业大学',major:'英语',intro:'我是英语死忠粉一枚',img:'yangnan.png'},
        {name:'杨千帆',college:'清华大学五道口金融学院',major:'金融工程',intro:'专业排名第一，获得宝钢优秀学生奖学金',img:'yangqianfan.png'},
        {name:'杨小花',college:'中国农业大学',major:'葡萄与葡萄酒工程',intro:'杨小花是我的别名',img:'yangxioahua.png'},
        {name:'杨周霖',college:'中国人民大学',major:'艺术管理专业',intro:'高考时拿下人大、清华美院和中央美术学院的offer',img:'yangzhoulin.png'},
        {name:'袁路斯',college:'中国人民大学',major:'财务管理学',intro:'非典型江南妹子,闲不下来的经管女',img:'yuanlusi.png'},
        {name:'臧嘉雯',college:'中央财经大学',major:'经济学',intro:'中央财经大学双学位优秀毕业论文',img:'zangjiawen.png'},
        {name:'翟志林',college:'北京师范大学',major:'学前教育',intro:'保送至清华大学教育研究院攻读硕士',img:'zhaizhilin.png'},
        {name:'张博',college:'中国人民大学',major:'信息管理与信息系统',intro:'副修数学与应用数学',img:'zhangbo.png'},
        {name:'张宸嘉',college:'中国地质大学',major:'资源勘查工程专业',intro:'现本校研究生一年级',img:'zhangchenjia.png'},
        {name:'张皓璁',college:'清华大学',major:'会计学',intro:'曾赴海外交换，喜爱游泳、读书',img:'zhanghaocong.png'},
        {name:'张颖奇',college:'对外经济贸易大学',major:'西班牙语专业',intro:'曾获西班牙语排名专业第一',img:'zhangyinqi.png'},
        {name:'张雨佳',college:'天津科技大学',major:'国际经济与贸易',intro:'本科毕业综合排名专业第一，曾获国家奖学金',img:'zhangyujia.png'},
        {name:'张云翼',college:'清华大学',major:'土木工程专业',intro:'唱歌好听的23岁的直博生',img:'zhangyunyi.png'},
        {name:'赵晨贺',college:'中国传媒大学',major:'数字媒体技术专业',intro:'热爱媒体的技术男',img:'zhaohechen.png'},
        {name:'赵航',college:'南开大学',major:'金融学',intro:'金融科班出身，对媒体行业有着同样的热忱',img:'zhaohang.png'},
        {name:'赵晶',college:'四川大学',major:'药学',intro:'跳舞、游泳、摄影都是最爱',img:'zhaojin.png'},
        {name:'赵倩',college:'大连外国语大学',major:'英语（高翻）',intro:'本科四年专业成绩名列年级第一',img:'zhaoqian.png'},
        {name:'赵梓序',college:'北京航空航天大学',major:'电子信息工程',intro:'保送本校读研',img:'zhaozixu.png'},
        {name:'郑旭滢',college:'北京师范大学',major:'教育学',intro:'2013年辽宁省营口市文科高考状元',img:'zhenxuyin.png'},
        {name:'周晋',college:'北京大学',major:'广告学',intro:'广告学、经济学双学位',img:'zhoujing.png'},
        {name:'周仕君',college:'厦门大学',major:'统计学',intro:'研究生保送进入中国人民大学',img:'zhoushijun.png'},
        {name:'周序力',college:'四川大学',major:'生态学',intro:'爱憎分明的逗比少年',img:'zhouxuli.png'},
        {name:'朱文豪',college:'对外经贸大学',major:'阿拉伯语',intro:'学语言的理科生',img:'zhuwenhao.png'}
    ],
    // 方法学霸
    list_r:[
        {name:'曾恒',college:'中国人民大学',major:'法学院',intro:'高中就读辽宁省顶尖中学-东北育才',img:'zengheng.png'},
        {name:'陈苏娅',college:'清华大学',major:'新闻与传播学院',intro:'学霸班班长',img:'chengsuya.png'},
        {name:'程明皓',college:'北京大学',major:'哲学专业',intro:'自主招生加分200分',img:'chengminhao.png'},
        {name:'郭若峰',college:'清华大学',major:'自动化系博士',intro:'曾辅导过7位自主招生学员，均被清北录取',img:'guoruofeng.png'},
        {name:'金梦颖',college:'北京大学',major:'临床医学本博连读',intro:'最文艺的医学生',img:'jinmengyin.png'},
        {name:'李爽',college:'清华大学',major:'自动化',intro:'高考理综河南省状元',img:'lishuang.png'},
        {name:'刘书岑',college:'中国青年政治学院',major:'新闻学',intro:'知心姐姐',img:'lishuceng.png'},
        {name:'刘相宜',college:'北京大学',major:'历史学',intro:'阅史书行天下',img:'liuxiangyi.png'},
        {name:'彭晴熙',college:'中国政法大学',major:'法学、思想政治教育',intro:'擅长读书，绘画',img:'pengqingxi.png'},
        {name:'王君',college:'中国人民大学',major:'金融学专业',intro:'年级700名到年级第一的逆袭女神',img:'wangjun.png'},
        {name:'徐婧',college:'北京大学',major:'法学专业',intro:'高考分数684',img:'xujing.png'},
        {name:'袁崇霖',college:'清华大学',major:'法学专业',intro:'擅长时间管理',img:'yuanchonglin.png'},
        {name:'张良',college:'北京大学',major:'新闻与传播',intro:'学院男神',img:'zhangliang.png'},
        {name:'张云启',college:'北京大学',major:'哲学系',intro:'京剧、书法，钢琴，声乐样样精通',img:'zhangyunqi.png'},
        {name:'张云翼',college:'清华大学',major:'土木工程专业',intro:'日语、法语、英语熟练掌握',img:'zhangyunyi.png'},
        {name:'赵波',college:'中国农业大学',major:'电气工程及自动化',intro:'一个暑期提升50分',img:'zhaobo.png'},
        {name:'钟鑫雅',college:'北京大学法学院',major:'法学',intro:'四川省2015高考文科第十三名',img:'zhongxingya.png'},
        {name:'朱远航',college:'北京大学',major:'哲学',intro:'河南省2014高考文科第五名',img:'zhuyuanhang.png'}
    ]
}


$(function () {
    var img_minheight = function () {
        var width = $(".img-border").width();
        $(".img-border").css({"min-height": width});
    }
    var bind_event = function () {
        $(".tb-l").on("click",function () {
            $(this).addClass("active")
            $(".tb-r").removeClass("active");

            $(".tb-l-box").removeClass("hide")
            $(".tb-r-box").addClass("hide")
        })

        $(".tb-r").on("click",function () {
            $(this).addClass("active")
            $(".tb-l").removeClass("active");

            $(".tb-l-box").addClass("hide")
            $(".tb-r-box").removeClass("hide")
            lazy();
        })
    }

    var show_list = function () {
        var zhuanye_list = '', fangfa_list = '';

        $.each(scope.list_l, function (i, v) {
            zhuanye_list += '<div class="list-item">\n' +
                '                    <div class="img-box">\n' +
                '                        <div class="img-border">\n' +
                '                            <img class="lazy" data-original="../resource/daka/zhuanye/'+ v.img +'">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <p class="name">'+ v.name +'</p>\n' +
                '                    <p class="txt">学校：'+ v.college +'</p>\n' +
                '                    <p class="txt">专业：'+ v.major +'</p>\n' +
                '                    <p class="txt intro">个人介绍：'+ v.intro +'</p>\n' +
                '                </div>'
        })
        $(".tb-l-box").html(zhuanye_list);

        $.each(scope.list_r, function (i, v) {
            fangfa_list += '<div class="list-item">\n' +
                '                    <div class="img-box">\n' +
                '                        <div class="img-border">\n' +
                '                            <img class="lazy" data-original="../resource/daka/fangfa/'+ v.img +'">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                    <p class="name">'+ v.name +'</p>\n' +
                '                    <p class="txt">学校：'+ v.college +'</p>\n' +
                '                    <p class="txt">专业：'+ v.major +'</p>\n' +
                '                    <p class="txt intro">个人介绍：'+ v.intro +'</p>\n' +
                '                </div>'
        })

        $(".tb-r-box").html(fangfa_list);
        lazy();
        img_minheight();
    }


    show_list();
    bind_event();
    getFooter();
})