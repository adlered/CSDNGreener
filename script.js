// ==UserScript==
// @name         (持续更新)CSDN页面浮窗广告完全过滤净化(净化复制内容|自动展开|让你专注于文章|不影响功能使用)
// @namespace    https://github.com/AdlerED
// @version      2.1.9
// @description  ⚡️拥有数项独家功能的最强脚本，不服比一比⚡️|✔️CSDN体验秒杀AdBlock|✔️分辨率自适配，分屏不用滚动|✔️超级预优化|✔️独家超级免会员|✔️独家原创文章免登录展开|✔️独家推荐内容自由开关|✔️独家免登录复制|✔️独家防外链重定向|✔️独家论坛未登录自动展开文章、评论|✔️全面净化|✔️沉浸阅读|✔️净化剪贴板|✔️作者信息文章顶部展示
// @author       Adler
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js
// @note         20-03-30 2.1.9 干掉“记录你的创作历程”，干掉未登录情况下的角标提醒
// @note         20-03-13 2.1.8 窄屏适配加强
// @note         20-03-13 2.1.7 更新简介
// @note         20-03-12 2.1.6 宽度自适应（感谢来自GitHub的朋友LeonG7的建议）！修复剪贴板净化无效的问题。
// @note         20-03-04 2.1.5 适配AdGuard
// @note         20-02-27 2.1.4 优化免登录复制
// @note         20-02-25 2.1.3 免登录复制更新，现已可用
// @note         20-02-24 2.1.2 By Github@JalinWang 更改去除剪贴板劫持的方式，使得原文格式在复制时能够保留
// @note         20-02-22 2.1.1 紧急修复由于 CSDN 修改前端结构导致的文章错位
// @note         20-02-11 2.1.0 若干动画优化，视觉体验更流畅
// @note         20-02-06 2.0.9 武汉加油！修改推荐内容切换开关位置，减少违和感
// @note         20-01-17 2.0.8 去除右侧广告
// @note         20-01-17 2.0.7 感谢来自GitHub的朋友“gleans”的建议，去掉页头广告
// @note         19-12-12 2.0.6 感谢来自GitHub的朋友“yexuesong”的建议，将作者信息在文章顶部展示
// @note         19-10-30 2.0.5 美化隐藏按钮，增加点击动画
// @note         19-10-30 2.0.4 删除CSDN官方在主页推送的文章（大多是广告）
// @note         19-10-30 2.0.3 添加更多屏蔽脚本
// @note         19-10-30 2.0.0 祝自己生日快乐~完全重写CSDNGreener，统一使用JQuery，效率更高
// @note         19-10-27 1.5.2 删除分享海报提示&&感谢GitHub的朋友“CHN-STUDENT”的反馈，去除底部课程推荐
// @note         19-10-27 1.5.1 感谢来自GitHub的朋友“CHN-STUDENT”的细致复现反馈，去除了底部的课程推荐广告
// @note         19-10-04 1.5.0 移除了底部主题信息和打赏
// @note         19-09-10 1.4.9 感谢来自GitHub的朋友“programmerZe”的细致复现反馈，修复了评论区点击查看回复后，已经展开的评论会收起的问题
// @note         19-09-04 1.4.8 感谢来自GitHub的朋友“dwdcth”的细致复现反馈，现在查看原创文章不会无限弹登录窗口了，且加强了自动展开功能
// @note         19-08-20 1.4.7 感谢油叉用户“SupremeSir”的反馈，修复了右侧悬浮栏遮挡文章的问题
// @note         19-08-14 1.4.6 无语。刚更新的免登录复制，又改了。修复！
// @note         19-08-13 1.4.5 更新了独家功能：免登录复制
// @note         19-08-13 1.4.4 感谢来自GitHub的朋友“iamsunxing”的反馈，修复了顶部不贴边的问题
// @note         19-08-01 1.4.3 感谢油叉用户“ddddy”的反馈，去除了更多推广广告
// @note         19-07-30 1.4.2 感谢油叉用户“周义杰”的反馈，增加了防CSDN外链重定向的功能（CSDN臭流氓）
// @note         19-07-20 1.4.1 修复了推荐内容开关跨文章无效问题（忘了配置Cookie作用域）
// @note         19-07-19 1.4.0 1. 构架大更新 2. 感谢来自GitHub的朋友"lukemin"的反馈，加入了下方推荐内容是否隐藏开关（实用）
// @note         19-07-13 1.3.0 感谢来自GitHub的朋友“Holaplace”的反馈，修复了文章无法自动展开的问题（CSDN总改这个，令人头疼）
// @note         19-06-08 1.2.6 感谢油叉用户“DeskyAki”的反馈，修复了文章无法自动展开的问题
// @note         19-06-07 1.2.4 修复了登录后评论无法正常打开的问题
// @note         19-06-07 1.2.3 感谢油叉用户"永远的殿下"的反馈，在一上午的努力攻克下，终于实现了未登录展开评论的语句
// @note         19-06-05 1.2.0 修复了评论无法自动展开的BUG
// @note         19-06-04 1.1.9 修复了无法自动展开的BUG（自闭了）
// @note         19-06-04 1.1.6 CSDN太坏了，把“消息”按钮的Class设置成了“GitChat”，所以修复了“消息”按钮消失的问题
// @note         19-06-04 1.1.5 1. 优化了论坛体验 2.美化、优化代码结构
// @note         19-06-04 1.1.4 感谢来自GitHub的朋友“iamsunxing”的反馈，增加了论坛广告匹配规则
// @note         19-06-03 1.1.3 感谢来自GitHub的朋友“wangwei135”的反馈，去除了评论区上方的广告
// @note         19-05-27 1.1.2 感谢油叉用户“夏伟杰”的反馈，修复了富文本编辑器无法使用的问题
// @note         19-05-25 1.1.0 1. 修复了主页广告的问题 2. 论坛自动展开 3. 论坛广告消除
// @note         19-05-25 1.0.9 感谢油叉用户“渣渣不准说话”的反馈，修复了收藏按钮消失的问题
// @note         19-03-01 1.0.3 添加页面选择性过滤规则
// @note         19-03-01 1.0.2 增加了净化剪贴板功能
// @note         19-03-01 1.0.1 修复了排版问题, 优化了代码结构
// @note         19-02-26 1.0.0 初版发布
// ==/UserScript==
var version = "2.1.9";
var currentURL = window.location.href;
var list;

(function () {
    'use strict';

    l("CSDNGreener V" + version);
    var blockURL = currentURL.split("/").length;
    var main = /(www\.csdn\.net\/)$/;
    var article = /article/;
    var bbs = /bbs\.csdn\.net/;
    var blog = /blog\.csdn\.net/;
    var blog2 = /\/article\/list\//;
    var download = /download\.csdn\.net/;
    var login = /passport\.csdn\.net/;
    var zone = /me\.csdn\.net/;

    // 数组初始化
    list = [];
    // 头部分
    // APP
    put(".app-app");
    // VIP
    put(".vip-caise");
    // 记录你的成长历程（记个毛）
    put("#writeGuide");
    // 新通知小圆点（未登录才消掉）
    if ($(".userinfo a").text() === '登录/注册') {
        put("#msg-circle");
    }
    // Cookie
    common(6, 1);

    if (main.test(currentURL)) {
        l("正在优化主页体验...");
        // 常规
        // 头部广告
        put(".banner-ad-box");
        // 右侧广告
        put(".slide-outer");
        // 右侧浮窗
        put(".csdn-side-toolbar");
        // 右侧详情
        put(".persion_article");
        clean(10);
        common(5, 10);
        loop(1);
    } else if ((blog.test(currentURL) && blockURL === 4) || blog2.test(currentURL)) {
        l("正在优化个人博客主页体验...");
        // 常规
        // 左侧广告
        put(".mb8");
        put("#kp_box_503");
        clean(10);
        common(5, 10);
    } else if (article.test(currentURL)) {
        l("正在优化阅读体验...");
        // 常规
        // 右侧广告，放到第一个清除
        put(".recommend-right");
        // 快来写博客吧
        put(".blog_tip_box");
        // 推荐关注用户
        put(".blog-expert-recommend-box");
        // 右下角VIP
        put(".meau-gotop-box");
        // 广告
        put(".mediav_ad");
        put(".pulllog-box");
        put(".recommend-ad-box");
        put(".box-shadow");
        put(".type_hot_word");
        put(".fourth_column");
        // 高分辨率时右侧文章推荐
        put(".right-item");
        // 广告
        put("#asideFooter");
        put("#ad-div");
        put("#479");
        put("#480");
        // 打赏
        put(".postTime");
        // 课程推荐
        put(".t0");
        // 分享海报
        put(".shareSuggest");
        // 底部主题
        put(".template-box");
        // 评论区广告
        put("div#dmp_ad_58");
        // 打赏
        put(".reward-user-box");
        // 右侧打赏按钮
        put(".to-reward");
        // 推荐内容广告
        put(".recommend-recommend-box");
        // 右侧广告
        put(".indexSuperise");
        clean(10);
        // 填充
        common(4, 5);
        // 评论
        common(1, 30);
        // 其它
        common(2, 20);
        // 顶部显示作者信息
        common(8, 1);
        // 循环线程开始
        loop(2);
    } else if (bbs.test(currentURL)) {
        l("正在优化论坛体验...");
        // 常规
        // 评论嵌入小广告
        put(".post_recommend");
        // 底部推荐
        put("#post_feed_wrap");
        // 底部相关文章里面的广告
        put(".bbs_feed_ad_box");
        put(".recommend-ad-box");
        // 底部相关文字里面的热词提示
        put(".type_hot_word");
        // 底部蓝色flex属性的广告栏+登录注册框
        put(".pulllog-box");
        // 猜你喜欢
        put(".personalized-recommend-box");
        // 发帖减半提示
        put(".totast-box");
        // 顶部广告
        put(".recommend-right");
        // 顶部广告
        put(".ad_top");
        clean(10);
        // 展开
        common(3, 50);
        common(5, 10);
    } else if (download.test(currentURL)) {
        l("正在优化下载页体验...");
        // 常规
        put(".fixed_dl");
        put("indexSuperise");
        clean(10);
        common(5, 10);
    } else if (login.test(currentURL)) {
        l("正在优化登录页体验...");
        // 常规
        // 登录界面大图广告
        put(".main-tu");
        clean(10);
        common(5, 10);
    } else if (zone.test(currentURL)) {
        l("正在优化个人空间体验...");
        // 常规
        clean(10);
        common(7, 10);
        common(5, 10);
    } else {
        e("不受支持的页面!");
    }
    l("超级优化完毕。");
    l("如果觉得好用，来 https://greasyfork.org/zh-CN/scripts/378351 收藏脚本来支持我吧！");
    l("开源&&提建议：https://github.com/AdlerED/CSDNGreener");
    l("我的博客：https://www.stackoverflow.wiki/");
    l("我的微信：1101635162");
})();

function l(log) {
    console.log("[CSDNGreener] " + log);
}

function e(error) {
    console.error("[CSDNGreener] " + error);
}

function clear() {
    list = [];
}

function put(tag) {
    list.push(tag);
}

function clean(times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        /* for (var j = 0; j < list.length; j++) {
            $(list[j]).hide(1000);
        }
        setInterval(function () {
        for (var k = 0; k < list.length; k++) {
            $(list[k]).remove();
        }
        }, 1000); */
        for (var k = 0; k < list.length; k++) {
            $(list[k]).remove();
        }
    }, 100);
}

function loop(num) {
    var did = false;
    setInterval(function () {
        if (num === 1) {
            // 主页中间的广告
            $(".J_adv").remove();
            // 主页有新的内容横条
            $(".feed-fix-box").remove();
            // 主页广告 iframe
            if (currentURL == "https://www.csdn.net/") {
                $("iframe").remove();
            }
            // 删除 CSDN 官方在主页的文章（大多是广告）
            $("li.clearfix").each(function(index, ele) {
                var banned = /csdn<\/a>/;
                var aMark = $(ele).find(".name").html();
                if (banned.test(aMark)) {
                    $(ele).remove();
                }
            });
        } else if (num === 2) {
            // 评论查看更多展开监听
            $("div.comment-list-box").css("max-height", "none");
            // 文章宽度自适应
            if (window.innerWidth < 1100) {
                $("article").width(window.innerWidth - 150);
                did = true;
            } else {
                if (did === true) {
                    $("article").removeAttr("style");
                    did = false;
                }
            }
        }
    }, 500);
}

function common(num, times) {
    var loop = setInterval(function () {
        --times;
        if (times <= 0) {
            clearInterval(loop);
        }
        if (num === 1) {
            // 查看更多
            $(".btn-readmore").removeClass("no-login");
            $(".btn-readmore").addClass("fans-read-more");
            $(".btn-readmore").removeAttr("href");
            $(".btn-readmore").removeAttr("target");
            $(".btn-readmore").removeAttr("rel");
            $(".btn-readmore").click();
            // 已登录用户展开评论
            document.getElementById("btnMoreComment").click();
            // 删除查看更多按钮
            $("#btnMoreComment").parent("div.opt-box").remove();
            // 展开内容
            $("div.comment-list-box").css("max-height", "none");
            // 改回背景颜色
            $(".login-mark").remove();
            // 删除登录框
            $(".login-box").remove();
        } else if (num === 2) {
            // 挡住评论的“出头推荐”
            if ($(".recommend-box").length > 1) {
                $(".recommend-box")[0].remove();
            }
            // 去外链
            $("#content_views").off();
            // 去除推广广告
            $("li[data-type='ad']").remove();
            // 免登录复制
            $(".hljs-button").removeClass("signin");
            $(".hljs-button").addClass("{2}");
            $(".hljs-button").attr("data-title", "免登录复制");
            // 去除剪贴板劫持
            $("code").attr("onclick", "mdcp.copyCode(event)");
            try {
                // 复制时保留原文格式，参考 https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
                Object.defineProperty(window, "articleType", {
                    value: 0,
                    writable: false,
                    configurable: false
                });
            } catch (err) {
            }
            csdn.copyright.init("", "", "");
            // 页头广告
            document.getElementsByClassName("column-advert-box")[0].style.display="none";
        } else if (num == 3) {
            //论坛自动展开
            $(".js_show_topic").click();
        } else if (num == 4) {
            // 左侧栏填充屏幕
            $(".blog_container_aside").hide();
            var screenWidth = document.body.clientWidth;
            if (screenWidth <= 1500) {
                $("main").css("cssText", "width:96% !important;");
            } else {
                $("main").css("cssText", "width:100% !important;");
            }
            // 右侧栏靠右
            $(".tool-box").css("right", "0px");
            $(".csdn-side-toolbar").css("right", "0px");
        } else if (num == 5) {
            // 改回背景颜色
            $(".login-mark").remove();
            // 删除登录框
            $(".login-box").remove();
        } else if (num == 6) {
            // 推荐内容开关 cookie
            var removeCookie = $.cookie("remove");
            var remove;
            if (removeCookie == undefined) {
                $.cookie('remove', true, {
                    path: '/'
                });
                remove = true;
            }
            if (removeCookie == "true") {
                remove = true;
            } else {
                remove = false;
            }
            // 删除推荐内容（自定义）
            if (remove) {
                $(".recommend-box").hide();
            }
            // 推荐内容开关
            $(".blog-content-box").append("<br><div class='blog-content-box' id='switch'></div>");
            //$(".comment-edit-box").after("<center><font size='1px'><a href='https://greasyfork.org/zh-CN/scripts/378351'>CSDN Greener V" + version + "</a><br><a href='https://github.com/AdlerED'>By GitHub :: AdlerED</a></font></center>");
            if (remove) {
                $("#switch").append("<button class='hide-recommend-button'>显示推荐内容</button>");
            } else {
                $("#switch").append("<button class='hide-recommend-button'>隐藏推荐内容</button>");
            }
            renderHideButton();
            // 开关监听
            $(".hide-recommend-button").click(function () {
                if ($.cookie('remove') == "true") {
                    $.cookie('remove', false, {
                        path: '/'
                    });
                    $(".recommend-box").slideDown(2000);
                    $(".hide-recommend-button").html("隐藏推荐内容");
                } else {
                    $.cookie('remove', true, {
                        path: '/'
                    });
                    $(".recommend-box").slideUp(1000);
                    $(".hide-recommend-button").html("显示推荐内容");
                }
                renderHideButton();
            });
        } else if (num === 7) {
            $(".me_r")[1].remove();
        } else if (num === 8) {
            $(".article-bar-top").append("<br>");
            $(".article-bar-top").append($(".aside-box-footerClassify").children("dd").html());
            $("dl").each(function (index, element) {
            var key = $(this).children("dt");
            var value = $(this).children("dd").children("span");
            if (key.html().indexOf("原创") != -1) {
            	key = $(this).children("dt").children("a")
            	value = $(this).children("dd").children("a").children("span");
            	addInfo(key, value);
            } else
            if (value.html() != undefined) {
            	addInfo(key, value);
            }
            } );
            function addInfo(key, value) {
            	var bind = key.html() + "&nbsp;" + value.html() + "&nbsp;&nbsp;";
            	$(".article-bar-top").append(bind + " ");
            }
            $(".blog_container_aside").remove();
        }
    }, 100);
}

function renderHideButton() {
    $(".hide-recommend-button").css({
        "width": "270px",
        "height": "40px",
        "border-width": "0px",
        "border-radius": "3px",
        "background": "#F7F7F7",
        "cursor": "pointer",
        "outline": "none",
        "font-family": "Microsoft YaHei",
        "color": "rgba(15,15,15,0.6)",
        "font-size": "17px",
        "display": "block",
        "margin": "0 auto"
    });
    $(".hide-recommend-button").hover(
        function () {
            $(".hide-recommend-button").css("background", "#EEEEEE");
        }, function () {
            $(".hide-recommend-button").css("background", "#F7F7F7");
        }
    );
}
