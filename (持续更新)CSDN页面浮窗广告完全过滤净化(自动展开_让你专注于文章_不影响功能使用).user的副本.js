// ==UserScript==
// @name         (持续更新)CSDN页面浮窗广告完全过滤净化(净化复制内容|自动展开|让你专注于文章|不影响功能使用)
// @namespace    https://github.com/AdlerED
// @version      1.1.5
var version = "1.1.5";
// @description  轻量级TamperMonkey插件：CSDN页面浮窗广告完全过滤净化 By Adler
// @author       Adler
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://code.jquery.com/jquery-1.11.0.min.js
// @note         19-06-04 1.1.5 1. 优化了论坛体验 2.美化、优化代码结构
// @note         19-06-04 1.1.4 感谢GitHub朋友“iamsunxing”的反馈，增加了论坛广告匹配规则
// @note         19-06-03 1.1.3 感谢GitHub朋友“wangwei135”的反馈，去除了评论区上方的广告
// @note         19-05-27 1.1.2 感谢油叉用户“夏伟杰”的反馈，修复了富文本编辑器无法使用的问题
// @note         19-05-25 1.1.0 1. 修复了主页广告的问题 2. 论坛自动展开 3. 论坛广告消除
// @note         19-05-25 1.0.9 感谢油叉用户“渣渣不准说话”的反馈，修复了收藏按钮消失的问题
// @note         19-03-01 1.0.3 添加页面选择性过滤规则
// @note         19-03-01 1.0.2 增加了净化剪贴板功能
// @note         19-03-01 1.0.1 修复了排版问题, 优化了代码结构
// @note         19-02-26 1.0.0 初版发布
// ==/UserScript==

(function() {
	var currentURL = window.location.href;
	console.log("你正在访问 " + currentURL + " , 正在为你匹配过滤规则......");
	var article = /article/;
	var postedit = /postedit/;
	console.log("欢迎, 正在执行CSDN净化插件! Powered By Adler WeChat: 1101635162");
	var count = 0;
	if (count == 0) {
		console.log("正在进行第一次Kill操作......");
		killAll();
	}

	//赚零钱改为GitChat(仅运行一次)
	var gitChat = document.getElementsByClassName("gitChat");
	gitChat[0].remove();
	//主页右侧的今日推荐
	var rightBox = document.getElementsByClassName("right_box");
	//rightBox[0].remove();
	//setTimeout(function (){
	//    rightBox[0].remove();
	//    rightBox[1].remove();
	//}, 1000)
	//干掉右侧栏，并让左侧栏填充屏幕
	if (article.test(currentURL)) {
		$("main").css("width", "100%");
		$("aside").remove();
        //去除评论区上面的广告
		$("div#dmp_ad_58").remove();
	}
	//展开所有内容，包括评论
	try {
		$("#btn-readmore").click();
        $("#btnMoreComment").click();
	} catch (err) {}
	//去除剪贴板劫持
	try {
		csdn.copyright.init("", "", "");
	} catch (err) {}

	var starting = setInterval(function() {
		count++;
		if (count > 50) {
			console.log("净化已完成! 请享受绿色的CSDN~");
			$("#green").html("已净化");
			clearInterval(starting);
		} else {
			if (count >= 10 && count <= 40) {
				//论坛自动展开
				$(".js_show_topic").click();
			}
			//进度条
			console.log("正在干掉遗漏的浮窗(不会影响性能, 请无视该消息)......");
			killAll();
		}
	}, 100);

	//由于部分交互非即时打开, 所以一直循环
	setInterval(function() {
		//主页中间的广告
		$(".J_adv").remove();
		//主页有新的内容横条
		$(".feed-fix-box").remove();
		//主页广告iframe
		if (currentURL == "https://www.csdn.net/") {
            $("iframe").remove();
		}
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
	//右侧工具栏（注释原因：收藏消失）
	//"tool-box",
	//右下角VIP
	"meau-gotop-box",
	//广告
	"mediav_ad", "pulllog-box", "recommend-ad-box", "box-shadow", "type_hot_word", "fourth_column",
	//高分辨率时右侧文章推荐
	"right-item",
	// ****** 下载 ******
	"fixed_dl", "indexSuperise",
	// ****** 论坛 ******
	//推荐广告
	//底部相关文章里面的广告
	"bbs_feed_ad_box", 'recommend-ad-box',
	//底部相关文字里面的热词提示
	'type_hot_word',
	//底部相关文章
	'recommend-box',
	//底部蓝色flex属性的广告栏+登录注册框
	'pulllog-box',
	//猜你喜欢（我不喜欢）
	"personalized-recommend-box",
	//发帖减半提示
	"totast-box", );

	//IDS
	var idList = new Array(
	// ****** 文章页 ******
	//广告
	"asideFooter", "ad-div", "479", "480",
    // ****** 论坛 ******
    //底部推荐
    "post_feed_wrap", );

	for (var i = 0; i < classList.length; i++) {
		var tempName = classList[i];
		$("." + tempName).remove();
	}

	for (var j = 0; j < idList.length; j++) {
		var tempID = idList[j];
		$("#" + tempID).remove();
	}
}
