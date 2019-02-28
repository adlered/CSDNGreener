// ==UserScript==
// @name         (持续更新)CSDN页面浮窗广告完全过滤净化(自动展开|让你专注于文章|不影响功能使用)
// @namespace    https://github.com/AdlerED
// @version      1.0.0
var version = "1.0.0";
// @description  CSDN页面浮窗广告完全过滤净化 By Adler
// @author       Adler
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://code.jquery.com/jquery-1.11.0.min.js
// @note         19-02-26 1.0.0 初版发布
// ==/UserScript==

(function() {
    console.log("欢迎, 正在执行CSDN净化插件! PoweredBy Adler WeChat: 1101635162");
    var count = 0;
    if (count == 0){
        console.log("正在进行第一次Kill操作......");
        killAll();
    }

    //赚零钱改为GitChat(仅运行一次)
    //var gitChat = $("body").find(".gitChat").eq(0).html();
    var gitChat = document.getElementsByClassName("gitChat");
    //console.log(gitChat);
    gitChat[0].remove();
    try {
       //gitChat = gitChat.replace("赚零钱", "GitChat");
    } catch(err) {}
    //$("body").find(".gitChat").eq(0).html(gitChat);
    //gitChat[0].outerHTML = gitChat;
    //主页右侧的今日推荐
    var rightBox = document.getElementsByClassName("right_box");
    //rightBox[0].remove();
    //setTimeout(function (){
    //    rightBox[0].remove();
    //    rightBox[1].remove();
    //}, 1000)
    //干掉右侧栏，并让左侧栏填充屏幕
    $("main").css("width", "100%");
    $("aside").remove();
    //展开所有内容
    document.getElementById("btn-readmore").click();

    var starting = setInterval(function(){
        count++;
        if (count > 50) {
            console.log("净化已完成! 请享受绿色的CSDN~");
            $("#green").html("已净化");
            clearInterval(starting);
        } else {
            if (count == 5) {
                //将猜你在追置顶(观看历史)
                console.log("正在置顶观看历史......");
                var today = $(".qy-focus-today").prop("outerHTML");
                $(".qy-focus-today").remove();
                $("#block-CZ").after(today);
                $(".qy-index-content").prepend(history);
                //所有页脚添加本插件信息
                $(".footer-copyright").append("<br>CSDN净化插件V" + version + "成功执行完毕 By Adler WeChat: 1101635162");
                $("#AR_copyright").append("<br>CSDN净化插件V" + version + "成功执行完毕 By Adler WeChat: 1101635162");
                //插件菜单
                var menuHead = '<div class="func-item func-like-v1" onclick="javascript:alert(\'CSDN净化插件V' + version + '已成功加载!\\n如有问题请联系WeChat: 1101635162\');"><div rseat="80521_function_like" class="func-inner"><span class="func-name" id="green">净化中...</span></div></div>';
                $(".qy-flash-func").append(menuHead);
                $("#green").html("净化10%");
            }
            //进度条
            if (count == 10)$("#green").html("净化20%");if (count == 15)$("#green").html("净化30%");if (count == 20)$("#green").html("净化40%");if (count == 25)$("#green").html("净化50%");if (count == 30)$("#green").html("净化60%");if (count == 35)$("#green").html("净化70%");if (count == 40)$("#green").html("净化80%");if (count == 45)$("#green").html("净化90%");
            console.log("正在干掉遗漏的浮窗(不会影响性能, 请无视该消息)......");
            killAll();
        }
    }, 100);
    //由于部分交互非即时打开, 所以一直循环
    setInterval(function(){
        //主页中间的广告
        $(".J_adv").remove();
        //主页有新的内容横条
        $(".feed-fix-box").remove();
    }, 500);
})();

function killAll() {
    //核心代码
    //CLASSES
    var classList = new Array(
        // ****** 主页 *****
        //头部广告
        "banner-ad-box",
        //右侧广告
        "slide-outer",
        //顶栏无用选项
        //APP
        "app-btn",
        //VIP
        "vip-caise",
        //右侧浮窗(客服、客户端二维码)
        "csdn-side-toolbar",
        //右侧详情
        "persion_article",
        //顶部轮播
        "carousel",
        // ****** 文章页 ******
        //快来写博客吧
        "blog_tip_box",
        //推荐关注用户
        "blog-expert-recommend-box",
        //右侧工具栏
        "tool-box",
        //右下角VIP
        "meau-gotop-box",
        //广告
        "mediav_ad",
        "pulllog-box",
        "recommend-ad-box",
        "box-shadow",
        "type_hot_word",
        // ****** 下载 ******
        "fixed_dl",
        "indexSuperise",
    );

    //IDS
    var idList = new Array(
        // ****** 文章页 ******
        //广告
        "asideFooter",
        "ad-div",
    );

    for(var i = 0; i < classList.length; i++) {
        var tempName = classList[i];
        $("." + tempName).remove();
    }

    for(var j = 0; j < idList.length; j++) {
        var tempID = idList[j];
        $("#" + tempID).remove();
    }
}