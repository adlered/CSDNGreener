// ==UserScript==
// @name         (持续更新)CSDN页面浮窗广告完全过滤净化(自动展开|让你专注于文章|不影响功能使用)
// @namespace    https://github.com/AdlerED
// @version      1.0.1
var version = "1.0.1";
// @description  CSDN页面浮窗广告完全过滤净化 By Adler
// @author       Adler
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://code.jquery.com/jquery-1.11.0.min.js
// @note         19-03-01 1.0.1 修复了排版问题, 优化了代码结构
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
    try {
    document.getElementById("btn-readmore").click();
    } catch (err) {}

    var starting = setInterval(function(){
        count++;
        if (count > 50) {
            console.log("净化已完成! 请享受绿色的CSDN~");
            $("#green").html("已净化");
            clearInterval(starting);
        } else {
            if (count == 5) {
                //预留
            }
            //进度条
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
        "fourth_column",
        //高分辨率时右侧文章推荐
        "right-item",
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
        "479",
        "480",
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
