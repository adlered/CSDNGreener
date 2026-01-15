// ==UserScript==
// @author       AdlerED
// @copyright    2020, adlered https://stackoverflow.wiki
// @icon         https://csdnimg.cn/public/favicon.ico
// @homepageURL  https://github.com/adlered/CSDNGreener
// @supportURL   https://github.com/adlered/CSDNGreener/issues/new?assignees=adlered&labels=help+wanted&template=ISSUE_TEMPLATE.md&title=
// @contributionURL https://doc.stackoverflow.wiki/web/#/21?page_id=138
// @name         最强的老牌脚本CSDNGreener：CSDN广告完全过滤、人性化脚本优化
// @namespace    https://github.com/adlered
// @version      5.0.0
// @description  全新5.0版本！模块化重构+AI智能模式+HD高分辨率版式|智能自适应布局，完美适配各种分辨率|1920px+屏幕体验更佳|实时预览配置，修改立即生效|无需登录CSDN，获得比会员更佳的体验|免登录复制|全面净化广告|防外链重定向|沉浸阅读体验
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://s4.zstatic.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @require      https://s4.zstatic.net/ajax/libs/nprogress/0.2.0/nprogress.min.js
// @require      https://s4.zstatic.net/ajax/libs/clipboard.js/2.0.11/clipboard.min.js
// @updateURL    https://github.com/adlered/CSDNGreener/raw/master/csdngreener_openuserjs.user.js
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @license      AGPL-3.0-or-later
// @note         26-01-15 5.0.0 新增：模块化重构+新增HD版式+实时预览功能+AI智能模式（基于CSDN官方CSS断点优化），自适应居中布局，默认推荐使用
// @note         25-09-03 4.2.6 修复无法正常使用的问题，更新jslib
// @note         25-08-04 4.2.5 更新免登录复制
// @note         24-07-18 4.2.4 描述更改
// @note         24-03-28 4.2.3 标题更改
// @note         23-12-21 4.2.2 修复了一些已知问题
// @note         23-12-16 4.2.1 文章页牛皮癣优化
// @note         23-12-15 4.2.0 优化顶栏显示内容，修复了若干由于CSDN前端变化导致优化失效的问题
// @note         23-05-25 4.1.9 再次修复免登录复制无法使用的问题
// @note         23-05-11 4.1.8 强杀变异型登录框弹出（不影响自己点击登录使用）
// @note         23-05-10 4.1.7 增强免登录复制功能
// @note         23-04-11 4.1.6 去广告更新
// @note         23-04-06 4.1.5 新增: 跳过 CSDN 的 link 页面
// @note         23-04-04 4.1.4 增加ads标识
// @note         23-03-30 4.1.3 移除统计代码，登录问题相关优化（只屏蔽一次）
// @note         23-02-03 4.1.2 修复了无法登录的问题（评论不登录无法加载暂无解决方案，我们在持续努力中）
// @note         22-05-30 4.1.1 功能修复，广告屏蔽
// @note         22-01-18 4.1.0 代码折叠适配
// @note         22-01-05 4.0.9 更新广告
// @note         21-12-12 4.0.8 屏蔽学生认证
// @note         21-10-21 4.0.7 屏蔽红包雨
// @note         21-09-24 4.0.6 修复登录弹窗无法彻底去除的问题
// @note         21-09-20 4.0.5 增加自定义背景功能
// @note         21-09-13 4.0.4 增加一个没有收钱的广告（在设置里，不影响体验）
// @note         21-09-01 4.0.3 增加用户使用情况统计模块
// @note         21-08-25 4.0.2 修复右侧置顶栏按钮消失的问题
// @note         21-08-21 4.0.1 去除右侧悬浮栏，优化脚本
// @note         21-08-20 4.0.0 全新4.0发布！UI美化，代码优化，兼容Firefox，更多排版模式
// @note         21-08-20 3.5.7 修复无法完整复制、保存csdn的网页会跳转首页的问题
// @note         21-08-19 3.5.6 自动隐藏底栏功能改为始终隐藏底栏
// @note         21-08-18 3.5.5 修复无法选择复制的问题
// @note         21-06-17 3.5.4 去除右侧红包悬浮窗
// @note         21-04-18 3.5.3 增加显示小店的设定
// @note         21-03-13 3.5.2 去主页广告，去文章页面推荐内容Title
// @note         21-03-01 3.5.1 修改文案
// @note         21-02-06 3.5.0 修复上传资源界面标签选择消失的问题
// @note         21-01-17 3.4.9 删除文章页和论坛广告，暂时停用右侧栏滚动功能（CSDN限制）
// @note         21-01-15 3.4.8 保存按钮优化，修复显示创作中心按钮功能失效的问题
// @note         21-01-15 3.4.7 改进脚本细节，增加广告屏蔽能力，修复绿化按钮错位的问题
// @note         20-12-25 3.4.6 主页部分嵌入式广告删除
// @note         20-12-18 3.4.5 修复绿化设定按钮排版不正确的问题
// @note         20-12-15 3.4.4 修复了某些子页显示不正常的问题
// @note         20-10-23 3.4.3 适应新版CSDN，去除主页和登录页广告，以及登录提示，并移除底部信息
// @note         20-10-20 3.4.2 删除右侧广告
// @note         20-09-26 3.4.1 修改排版设定，修复登录框弹出的问题
// @note         20-09-24 3.4.0 紧急修复由于CSDN前端样式修改导致设定开关丢失的问题
// @note         20-08-27 3.3.9 紧急修复由于CSDN前端样式修改导致脚本失效的问题
// @note         20-08-26 3.3.8 合法脚本提示
// @note         20-07-20 3.3.7 修复菜单栏在创作中心显示异常的问题
// @note         20-07-18 3.3.6 工具箱按钮优化
// @note         20-07-05 3.3.5 评论复制功能交互优化
// @note         20-07-04 3.3.4 修复右侧栏消失的问题
// @note         20-07-03 3.3.3 新增复制评论功能！删除顶部广告
// @note         20-06-28 3.3.2 提示修改
// @note         20-06-27 3.3.1 弹窗提示逻辑修改为仅提示一次。
// @note         20-06-27 3.3.0 网站标题新消息提醒去除
// @note         20-06-24 3.2.9 控制台文字可以点击了，修改自动版式描述语义
// @note         20-06-24 3.2.8 屏幕尺寸选择，控制台版式修改，若干问题修复
// @note         20-06-23 3.2.7 右侧栏滚动条显示方式优化
// @note         20-06-23 3.2.6 文章居中模式可选
// @note         20-06-22 3.2.5 右侧没有可显示内容时，文章居中
// @note         20-06-22 3.2.4 文章居中
// @note         20-06-22 3.2.3 右侧栏加入滚动条，脚本主页URL修改，下载页和主页广告去除
// @note         20-06-22 3.2.2 Dark Reader兼容模式，自动隐藏顶栏优化，热门文章和最新评论卡片布局调整
// @note         20-06-21 3.2.1 脚本迁移版本迭代
// @note         20-06-21 3.1.9 增加自动隐藏底栏功能
// @note         20-06-21 3.1.8 增加自动隐藏顶栏功能，修复选项窗口被点赞长条挡住的Bug，选项窗口布局修改
// @note         20-06-20 3.1.7 设置窗口大小固定，增加打赏入口
// @note         20-06-19 3.1.6 显示推荐内容按钮回归，新布局紧急修复
// @note         20-06-18 3.1.5 自定义功能更新
// @note         20-06-16 3.1.4 支持大部分功能模块化显示
// @note         20-06-14 3.1.3 绿化设定优化
// @note         20-06-14 3.1.2 ISSUE模板调整Support URL
// @note         20-06-14 3.1.1 增加搜博主文章模块
// @note         20-06-13 3.1.0 修复设置过期的问题
// @note         20-06-12 3.0.9 标题回滚
// @note         20-06-12 3.0.8 主页广告删除，绿化设置仅显示在文章页面，删除页脚，顶部优化，若干细节优化
// @note         20-06-11 3.0.7 增加官方QQ交流群，增加关闭强制白色主题功能
// @note         20-06-11 3.0.6 用户名片功能优化
// @note         20-06-11 3.0.5 优化加载速度
// @note         20-06-10 3.0.4 修复设置界面遮挡的问题，显示博主头像
// @note         20-06-09 3.0.3 默认设定修改
// @note         20-06-09 3.0.2 修复推荐内容按钮刷新不生效的问题，增加工具箱提示框
// @note         20-06-08 3.0.1 设置中心推出！增加浏览效果选项 && Green Book Icon Update
// @note         20-06-08 3.0.0 设置中心推出！增加浏览效果选项
// @note         20-06-07 2.4.2 设置解耦，下个版本搞配置中心
// @note         20-06-06 2.4.1 修复文章内容消失的问题
// @note         20-06-04 2.4.0 修复推荐按钮错位的问题
// @note         20-06-04 2.3.9 窄屏适配优化
// @note         20-06-04 2.3.8 黑夜模式出现问题，紧急回档到 2.3.6
// @note         20-06-03 2.3.7 感谢 @AlexLWT 增加黑暗模式
// @note         20-06-02 2.3.6 AdsByGoogle 删除
// @note         20-05-25 2.3.5 感谢 @RyanIPO 修复 Cannot read property 'replace' of undefined 报错的问题
// @note         20-05-24 2.3.4 修复免登录复制功能
// @note         20-05-22 2.3.3 Logo与背景同步
// @note         20-05-22 2.3.2 深度删除背景
// @note         20-05-20 2.3.1 通过require使用NProgress
// @note         20-05-20 2.3.0 显示推荐内容按钮样式内置，剔除CDN
// @note         20-05-17 2.2.9 进度条样式更新，时间延时优化
// @note         20-05-17 2.2.8 更新脚本描述，展开评论的所有回复，删除创作中心按钮，加载进度条
// @note         20-05-17 2.2.7 更新脚本描述
// @note         20-05-16 2.2.6 修复第一次点击显示推荐内容无反应的问题
// @note         20-05-16 2.2.5 删除抢沙发角标，修改显示推荐内容按钮样式
// @note         20-05-16 2.2.4 感谢来自GitHub的朋友“HeronZhang”的Issue建议，删除所有博客花里胡哨的背景，主页分类中广告清除，CSS样式控制宽度适配代码优化
// @note         20-05-16 2.2.3 感谢来自GitHub的朋友“RetiredWorld”的代码贡献，使用CSS来控制样式，而不是JS，增大灵活性。
// @note         20-05-13 2.2.2 屏蔽您的缩放不是100%的提示
// @note         20-04-29 2.2.1 感谢大家的支持，增加目录显示，自动判断是否存在目录调整页面宽度，屏蔽新增广告，欢迎大家体验并提出意见！
// @note         20-04-15 2.2.0 一些广告被其他插件屏蔽导致的异常无视之
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
var version = "5.0.0";
var currentURL = window.location.href;
if (currentURL.indexOf("?") !== -1) {
    currentURL = currentURL.substring(0, currentURL.indexOf("?"));
}

var windowTop = 0;
var startTimeMilli = Date.now();
var stopTimeMilli = 0;
// 配置控制类
class Config {
    get(key, value) {
        var cookie = $.cookie(key);
        if (cookie == undefined) {
            new Config().set(key, value);
            console.debug("Renew key: " + key + " : " + value);
            return value;
        }
        console.debug("Read key: " + key + " : " + cookie);
        if (cookie === "true") { return true; }
        if (cookie === "false") { return false; }
        return cookie;
    }

    getS(key, value) {
        var cookie = $.cookie(key);
        if (cookie == undefined) {
            new Config().set(key, value);
            console.debug("Renew key: " + key + " : " + value);
            return value;
        }
        console.debug("Read key: " + key + " : " + cookie);
        return cookie;
    }

    set(setKey, setValue) {
        $.cookie(setKey, setValue, {
            path: '/',
            expires: 365
        });
        console.debug("Key set: " + setKey + " : " + setValue);
    }

    listenButton(element, listenKey, trueAction, falseAction) {
        $(element).click(function () {
            let status = new Config().get(listenKey, true);
            console.debug("Status: " + status);
            if (status === "true" || status) {
                console.debug("Key set: " + listenKey + " :: " + false);
                new Config().set(listenKey, false);
            } else {
                console.debug("Key set: " + listenKey + " :: " + true);
                new Config().set(listenKey, true);
            }
        });
    }

    listenButtonAndAction(element, listenKey, trueAction, falseAction) {
        $(element).click(function () {
            let status = new Config().get(listenKey, true);
            console.debug("Status: " + status);
            if (status === "true" || status) {
                console.debug("Key set: " + listenKey + " :: " + false);
                new Config().set(listenKey, false);
                falseAction();
            } else {
                console.debug("Key set: " + listenKey + " :: " + true);
                new Config().set(listenKey, true);
                trueAction();
            }
        });
    }
}

var progress = 0;
class Progress {
    init() {
        progress = 0;
        NProgress.start();
        $("#greenerProgress").text("绿化中...");
        $(".toolbar-search").hide();
    }

    setProgress(p) {
        progress = p;
        $("#greenerProgress").text(progress + "%");
        NProgress.set(progress / 100);
        console.log(progress + "%");
    }

    incProgress(p) {
        progress = progress + p;
        progress = progress > 100 ? 100 : progress;
        $("#greenerProgress").text(progress + "%");
        NProgress.set(progress / 100);
        console.log(progress + "%");
    }

    done() {
        progress = 100;
        NProgress.done();
        $("#greenerProgress").html(protect_svg + ' CSDNGreener 正在守护您的浏览体验');
        setTimeout(function() {
            $("#greenerProgress").fadeOut(500);
            setTimeout(function() {
                $(".toolbar-search").fadeIn(500);
                if (!isFirefox()) {
                    // 提示
                    let tipsCookie = GM_getValue("showTip", true);
                    if (tipsCookie) {
                        showTips();
                    }
                    GM_setValue("showTip", false);
                }
            }, 500);
        }, 1500);
    }
}
var progressor = new Progress();

// ============================================
// 5.0.0 新增核心类 - 模块化架构
// ============================================

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 日志工具
const Logger = {
    prefix: '[CSDNGreener]',
    log: function(msg) {
        console.log(this.prefix, msg);
    },
    debug: function(msg) {
        console.debug(this.prefix, msg);
    },
    warn: function(msg) {
        console.warn(this.prefix, msg);
    },
    error: function(msg) {
        console.error(this.prefix, msg);
    }
};

// 1. ConfigManager - 配置管理器（使用GM_setValue/GM_getValue）
class ConfigManager {
    constructor() {
        this.storageKey = 'csdngreener_config_v5';
        this.defaultConfig = {
            version: '5.0.0',
            layout: 'ai', // ai | sm | md | lg | fo | hd (ai为智能默认模式)
            display: {
                recommend: false,
                shop: false,
                whiteTheme: false,
                autoResize: true,
            },
            toolbar: {
                autoHide: false,
                showWrite: true,
            },
            sidebar: {
                authorCard: false,
                searchBlog: false,
                newArticle: false,
                hotArticle: false,
                newComments: false,
                category: false,
                recommendArticle: false,
                archive: false,
                content: true,
            },
            bottomBar: {
                alwaysHide: true,
            },
            custom: {
                backgroundImage: '',
            },
        };
    }

    // 获取单个配置
    get(key) {
        const config = this.getAll();
        return key ? this._getNestedValue(config, key) : config;
    }

    // 获取所有配置
    getAll() {
        try {
            const stored = GM_getValue(this.storageKey, null);
            if (!stored) {
                Logger.log('初始化默认配置');
                this.setAll(this.defaultConfig);
                return this.defaultConfig;
            }
            const config = JSON.parse(stored);
            // 合并默认配置（处理新增字段）
            return this._mergeConfig(this.defaultConfig, config);
        } catch (e) {
            Logger.error('读取配置失败: ' + e.message);
            return this.defaultConfig;
        }
    }

    // 设置单个配置
    set(key, value) {
        const config = this.getAll();
        this._setNestedValue(config, key, value);
        this.setAll(config);
    }

    // 设置所有配置
    setAll(config) {
        try {
            GM_setValue(this.storageKey, JSON.stringify(config));
            Logger.debug('配置已保存');
        } catch (e) {
            Logger.error('保存配置失败: ' + e.message);
        }
    }

    // 导出配置为JSON字符串
    export() {
        return JSON.stringify(this.getAll(), null, 2);
    }

    // 从JSON字符串导入配置
    import(jsonString) {
        try {
            const config = JSON.parse(jsonString);
            this.setAll(config);
            Logger.log('配置导入成功');
            return true;
        } catch (e) {
            Logger.error('配置导入失败: ' + e.message);
            return false;
        }
    }

    // 重置为默认配置
    reset() {
        this.setAll(this.defaultConfig);
        Logger.log('配置已重置');
    }

    // 辅助方法：获取嵌套值
    _getNestedValue(obj, path) {
        const keys = path.split('.');
        let value = obj;
        for (let key of keys) {
            value = value?.[key];
        }
        return value;
    }

    // 辅助方法：设置嵌套值
    _setNestedValue(obj, path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        let target = obj;
        for (let key of keys) {
            if (!(key in target)) {
                target[key] = {};
            }
            target = target[key];
        }
        target[lastKey] = value;
    }

    // 辅助方法：合并配置
    _mergeConfig(defaultConfig, userConfig) {
        const merged = JSON.parse(JSON.stringify(defaultConfig));
        const merge = (target, source) => {
            for (let key in source) {
                if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
                    if (!target[key]) target[key] = {};
                    merge(target[key], source[key]);
                } else {
                    target[key] = source[key];
                }
            }
        };
        merge(merged, userConfig);
        return merged;
    }
}

// 2. StyleManager - 样式管理器（改进版，支持真正的移除和替换）
class StyleManager {
    constructor() {
        this.injectedStyles = new Map();
        this.stylePrefix = 'csdngreener-style';
    }

    // 注入样式
    inject(id, cssString, replace = false) {
        const styleId = `${this.stylePrefix}-${id}`;

        // 检查是否已存在
        const existingStyle = document.getElementById(styleId);
        if (existingStyle && !replace) {
            return; // 已存在且不替换
        }

        // 移除旧样式
        if (existingStyle) {
            existingStyle.remove();
            Logger.debug(`移除旧样式: ${id}`);
        }

        // 创建新的style标签
        const styleElement = document.createElement('style');
        styleElement.id = styleId;
        styleElement.textContent = cssString;
        document.head.appendChild(styleElement);

        this.injectedStyles.set(id, styleElement);
        Logger.debug(`样式已注入: ${id}`);
    }

    // 移除样式
    remove(id) {
        const styleElement = this.injectedStyles.get(id);
        if (styleElement && styleElement.parentNode) {
            styleElement.remove();
            this.injectedStyles.delete(id);
            Logger.debug(`样式已移除: ${id}`);
        }
    }

    // 清空所有样式
    clear() {
        this.injectedStyles.forEach((styleElement, id) => {
            if (styleElement && styleElement.parentNode) {
                styleElement.remove();
            }
        });
        this.injectedStyles.clear();
        Logger.debug('所有样式已清空');
    }
}

// 3. LayoutEngine - 布局引擎
class LayoutEngine {
    constructor(configManager, styleManager) {
        this.config = configManager;
        this.style = styleManager;
        this.currentLayout = null;
        this.layouts = {}; // 将在后续初始化版式类
    }

    // 注册版式
    registerLayout(name, layoutInstance) {
        this.layouts[name] = layoutInstance;
        Logger.debug(`版式已注册: ${name}`);
    }

    // 应用版式
    apply(layoutType) {
        const layout = this.layouts[layoutType];
        if (!layout) {
            Logger.error(`未知版式: ${layoutType}`);
            return false;
        }

        Logger.log(`应用版式: ${layoutType}`);

        // 清除当前版式
        if (this.currentLayout) {
            this.currentLayout.cleanup();
        }

        // 应用新版式
        layout.apply(this.style);
        this.currentLayout = layout;

        // 保存配置
        this.config.set('layout', layoutType);

        return true;
    }

    // 获取当前版式
    getCurrent() {
        return this.currentLayout;
    }

    // 获取当前版式名称
    getCurrentName() {
        const currentConfig = this.config.get('layout');
        return currentConfig || 'sm';
    }
}

// 初始化核心实例
const configManager = new ConfigManager();
const styleManager = new StyleManager();
const layoutEngine = new LayoutEngine(configManager, styleManager);

// 暴露到window供全局访问（用于设置面板）
// 使用 unsafeWindow 确保页面脚本可以访问
if (typeof unsafeWindow !== 'undefined') {
    unsafeWindow.layoutEngine = layoutEngine;
    unsafeWindow.configManager = configManager;
} else {
    window.layoutEngine = layoutEngine;
    window.configManager = configManager;
}

Logger.log('核心类初始化完成 V' + version);

// ============================================
// 5.0.0 核心类结束
// ============================================

// ============================================
// CSS样式常量定义
// ============================================

// 基础样式
const BASE_STYLES = {
    // 进度条样式
    nprogress: `
        #nprogress {
            pointer-events: none;
        }
        #nprogress .bar {
            background: #f44444;
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
        }
        #nprogress .peg {
            display: block;
            position: absolute;
            right: 0;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #f44444, 0 0 5px #f44444;
            opacity: 1;
            -webkit-transform: rotate(3deg) translate(0, -4px);
            -ms-transform: rotate(3deg) translate(0, -4px);
            transform: rotate(3deg) translate(0, -4px);
        }
        #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
        }
        #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;
            border: solid 2px transparent;
            border-top-color: #f44444;
            border-left-color: #f44444;
            border-radius: 50%;
            -webkit-animation: nprogress-spinner .4s linear infinite;
            animation: nprogress-spinner .4s linear infinite;
        }
        .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
        }
        .nprogress-custom-parent #nprogress .bar,
        .nprogress-custom-parent #nprogress .spinner {
            position: absolute;
        }
        @-webkit-keyframes nprogress-spinner {
            0% { -webkit-transform: rotate(0); }
            100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
            0% { transform: rotate(0); }
            100% { transform: rotate(360deg); }
        }
    `,

    // 设置窗口样式 - 现代化冷色毛玻璃设计
    modal: `
        .black_overlay {
            position: fixed;
            inset: 0;
            display: none;
            background: radial-gradient(circle at 25% 20%, rgba(59, 130, 246, 0.15), transparent 50%),
                        radial-gradient(circle at 75% 80%, rgba(14, 165, 233, 0.12), transparent 50%),
                        rgba(15, 23, 42, 0.75);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            z-index: 1001;
            animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translate(-50%, -45%) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }

        .white_content {
            display: none;
            position: fixed;
            z-index: 9999 !important;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 750px;
            max-width: 92vw;
            max-height: 90vh;
            padding: 0;
            border: 1px solid rgba(148, 163, 184, 0.15);
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25),
                        0 0 0 1px rgba(59, 130, 246, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.5);
            overflow: hidden;
            animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .white_content .configContainer {
            padding: 32px 24px 90px 24px;
            overflow-y: auto;
            max-height: calc(90vh - 140px);
            background: linear-gradient(180deg,
                rgba(240, 249, 255, 0.4) 0%,
                rgba(224, 242, 254, 0.2) 100%);
        }

        .config-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
        }

        @media screen and (max-width: 768px) {
            .config-grid {
                grid-template-columns: 1fr;
            }
        }

        .white_content .configContainer::-webkit-scrollbar {
            width: 8px;
        }

        .white_content .configContainer::-webkit-scrollbar-track {
            background: rgba(226, 232, 240, 0.3);
            border-radius: 4px;
            margin: 8px 0;
        }

        .white_content .configContainer::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #60a5fa 0%, #3b82f6 100%);
            border-radius: 4px;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .white_content .configContainer::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #3b82f6 0%, #2563eb 100%);
        }

        .config-header {
            background: linear-gradient(135deg,
                #0ea5e9 0%,
                #3b82f6 50%,
                #6366f1 100%);
            color: #ffffff;
            padding: 28px 28px 24px 28px;
            border-radius: 20px 20px 0 0;
            margin: 0;
            position: relative;
            overflow: hidden;
        }

        .config-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
            pointer-events: none;
        }

        .config-header .title {
            font-size: 24px;
            font-weight: 700;
            margin: 0 0 6px 0;
            color: #ffffff !important;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            position: relative;
            z-index: 1;
        }

        .config-header p {
            margin: 0;
            font-size: 13px;
            color: rgba(255, 255, 255, 0.9);
            position: relative;
            z-index: 1;
        }

        .config-header a {
            color: #ffffff !important;
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
            transition: border-color 0.2s;
        }

        .config-header a:hover {
            border-bottom-color: #ffffff;
        }

        .config-footer {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top,
                rgba(248, 250, 252, 0.98) 0%,
                rgba(248, 250, 252, 0.95) 100%);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 18px 28px;
            display: flex;
            justify-content: flex-end;
            gap: 12px;
            border-top: 1px solid rgba(226, 232, 240, 0.6);
            z-index: 100;
        }

        .config-section {
            margin-bottom: 18px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border-radius: 14px;
            border: 1px solid rgba(203, 213, 225, 0.5);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05),
                        inset 0 1px 0 rgba(255, 255, 255, 0.6);
            transition: all 0.3s;
        }

        .config-section:hover {
            border-color: rgba(147, 197, 253, 0.6);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1),
                        inset 0 1px 0 rgba(255, 255, 255, 0.8);
        }

        .config-section .bold {
            font-size: 16px;
            font-weight: 700;
            background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 14px;
            display: block;
            letter-spacing: 0.3px;
        }

        .config-section p {
            margin: 0 0 10px 0;
            line-height: 1.5;
            color: #475569;
            font-size: 13px;
        }

        .config-section label {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            margin: 4px 0;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 14px;
            color: #334155;
            line-height: 1.4;
            border-radius: 8px;
            position: relative;
        }

        .config-section label:hover {
            background: rgba(59, 130, 246, 0.08);
            color: #1e40af;
            transform: translateX(4px);
        }

        .config-section input[type="checkbox"],
        .config-section input[type="radio"] {
            margin-right: 12px;
            cursor: pointer;
            width: 18px;
            height: 18px;
            flex-shrink: 0;
            accent-color: #3b82f6;
        }

        .config-section input[type="text"],
        .config-section input[type="file"] {
            width: 100%;
            padding: 10px 14px;
            border: 1px solid rgba(203, 213, 225, 0.8);
            border-radius: 10px;
            font-size: 14px;
            transition: all 0.3s;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        .config-section input[type="text"]:focus {
            outline: none;
            border-color: #3b82f6;
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1),
                        0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .giveMeOneStar:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5) !important;
        }
    `,

    // 提示条样式
    tips: `
        .tripscon {
            padding: 10px;
        }
    `,

    toggleButton: `
        #toggle-button {
            display: none;
        }
        .button-label {
            position: relative;
            display: inline-block;
            width: 82px;
            background-color: #ccc;
            border: 1px solid #ccc;
            border-radius: 30px;
            cursor: pointer;
        }
        .circle {
            position: absolute;
            top: 0;
            left: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #fff;
        }
        .button-label .text {
            line-height: 30px;
            font-size: 18px;
            -webkit-user-select: none;
            user-select: none;
        }
        .on {
            color: #fff;
            display: none;
            text-indent: 10px;
        }
        .off {
            color: #fff;
            display: inline-block;
            text-indent: 53px;
        }
        .button-label .circle {
            left: 0;
            transition: all .3s;
        }
        #toggle-button:checked + label.button-label .circle {
            left: 50px;
        }
        #toggle-button:checked + label.button-label .on {
            display: inline-block;
        }
        #toggle-button:checked + label.button-label .off {
            display: none;
        }
        #toggle-button:checked + label.button-label {
            background-color: #78d690;
        }
    `,

    // 保存按钮样式 - 白绿配色版
    saveButton: `
        .saveButton {
            background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
            border: none;
            color: #fff;
            padding: 9px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 6px rgba(34, 197, 94, 0.25);
        }
        .saveButton:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.35);
            background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
        }
        .saveButton:active {
            transform: translateY(0);
        }
        .saveButton.cancel {
            background: #9ca3af;
            box-shadow: 0 2px 6px rgba(107, 114, 128, 0.2);
        }
        .saveButton.cancel:hover {
            background: #6b7280;
            box-shadow: 0 4px 12px rgba(107, 114, 128, 0.3);
        }
        .saveButton.danger {
            background: #ef4444;
            box-shadow: 0 2px 6px rgba(239, 68, 68, 0.25);
        }
        .saveButton.danger:hover {
            background: #dc2626;
            box-shadow: 0 4px 12px rgba(239, 68, 68, 0.35);
        }
    `,

    // Star样式
    star: `
        .giveMeOneStar:hover {
            color: #FF69B4;
        }
    `,

    // 设置窗口文字样式（Firefox）
    configTextFirefox: `
        .configContainer label {
            font-size: 15px;
        }
        .configContainer p {
            font-size: 15px;
        }
        .giveMeOneStar {
            font-size: 15px;
        }
        .configContainer .title {
            font-size: 20px;
        }
        .configContainer .bold {
            font-weight: bold;
            margin-bottom: 5px;
        }
    `,

    // 设置窗口文字样式（Chrome）
    configTextChrome: `
        .configContainer label {
            font-size: 12px;
        }
        .configContainer p {
            font-size: 12px;
        }
        .giveMeOneStar {
            font-size: 15px;
        }
        .configContainer .title {
            font-size: 20px;
        }
        .configContainer .bold {
            font-weight: bold;
            margin-bottom: 5px;
        }
    `
};

// 注入基础样式
styleManager.inject('nprogress', BASE_STYLES.nprogress);
styleManager.inject('modal', BASE_STYLES.modal);
styleManager.inject('tips', BASE_STYLES.tips);
styleManager.inject('toggle-button', BASE_STYLES.toggleButton);
styleManager.inject('save-button', BASE_STYLES.saveButton);
styleManager.inject('star', BASE_STYLES.star);

// 根据浏览器类型注入配置文字样式
if (isFirefox()) {
    styleManager.inject('config-text', BASE_STYLES.configTextFirefox);
} else {
    styleManager.inject('config-text', BASE_STYLES.configTextChrome);
}

Logger.log('基础样式已注入');

// ============================================
// CSS样式常量结束
// ============================================

// ============================================
// 广告清理系统 - AdCleaner
// ============================================

// 广告选择器配置 - 按功能分类
const AD_SELECTORS = {
    // 头部和导航栏
    header: [
        ".vip-caise",               // VIP按钮
        "#writeGuide",              // 写作引导
        ".adsbygoogle",             // 谷歌广告
        ".appControl",              // 悬浮二维码
        ".advert-bg",               // 顶部广告背景
        ".toolbar-advert",          // 工具栏横幅广告
        ".toolbar-notice-bubble",   // 顶部通知气泡
        ".icon-fire"                // 搜索框fire emoji
    ],

    // 右侧栏广告
    sidebar: [
        "#addAdBox",                    // 右侧广告盒子
        ".recommend-top-adbox",         // 右侧顶部广告
        ".indexSuperise",               // 右侧广告
        "#6527",                        // 右侧栏广告ID
        "#recommendAdBox",              // 推荐广告盒子
        ".programmer1Box",              // 右侧四个广告
        ".programmer2Box",
        ".programmer3Box",
        ".programmer4Box",
        ".blog-expert-recommend-box",   // 推荐关注用户
        ".recommend-recommend-box",     // 推荐内容广告
        ".meau-gotop-box",              // 右下角VIP
        ".to-reward",                   // 右侧打赏按钮
        ".sidetool-writeguide-box",     // 右侧toolbar创作提示
        '.option-box[data-type="guide"],.option-box[data-type="cs"],.option-box[data-type="app"],.csdn-common-logo-advert', // 右侧悬浮栏按钮（保留gotop）
        ".sidecolumn-deepseek",         // DeepSeek广告
        ".option-box.sidecolumn.sidecolumn-deepseek", // DeepSeek广告选项盒子
        ".gitcode-qc-right-box.aside-box" // GitCode广告盒子
    ],

    // 文章内容区广告
    article: [
        ".blog_tip_box",                // 快来写博客吧
        ".mediav_ad",                   // mediav广告
        ".recommend-ad-box",            // 推荐广告
        ".box-shadow",                  // 阴影广告
        ".type_hot_word",               // 热词提示
        ".fourth_column",               // 第四栏
        "#asideFooter",                 // 侧边栏底部
        "#ad-div",                      // 广告div
        "#479", "#480",                 // 广告ID
        "div#dmp_ad_58",                // 评论区广告
        ".postTime",                    // 打赏（文章底部）
        ".reward-user-box",             // 打赏用户盒子
        ".t0",                          // 课程推荐
        ".shareSuggest",                // 分享海报
        ".template-box",                // 底部主题
        ".comment-sofa-flag",           // 抢沙发角标
        ".triplet-prompt",              // 点赞气泡
        ".recommend-tit-mod",           // 推荐内容标题
        ".tool-active-list",            // 底栏"觉得还不错"
        "#treeSkill",                   // 文章底部archive推荐
        "#recommendNps"                 // 推荐问卷调查
    ],

    // 底部广告
    footer: [
        ".blog-footer-bottom",          // 底部信息
        ".bottom-pub-footer",           // 页脚
        "#post_feed_wrap",              // 底部推荐（BBS）
        ".bbs_feed_ad_box"              // 底部相关文章广告（BBS）
    ],

    // 弹窗和浮层（注意：不删除真正的登录框，保留给用户主动登录使用）
    modal: [
        "#csdn-redpack",                    // 红包雨
        ".passport-login-tip-container",    // 登录后权益提示
        ".csdn-redpack-lottery-btn-box",    // 红包提醒
        ".csdn-highschool-window",          // 学生认证
        ".leftPop",                         // 缩放提示
        ".totast-box",                      // 发帖减半提示（BBS）
        ".fouce_close_btn"                  // 学院弹出广告（需点击）
    ],

    // 主页专用
    homepage: [
        ".banner-ad-box",               // 头部广告
        "#kp_box_211",                  // 嵌入广告
        ".slide-outer",                 // 右侧广告
        ".persion_article",             // 右侧详情
        ".el-carousel__container",      // 广告轮播
        "#floor-ad_64",                 // CSDN工具广告
        ".J_adv",                       // 主页中间广告（动态）
        ".feed-fix-box",                // 主页新内容横条（动态）
        ".feed_company"                 // 右侧推荐（需parent.remove）
    ],

    // 博客主页专用
    blogHome: [
        ".mb8",                         // 左侧广告
        "#kp_box_503",                  // 左侧广告ID
        "#kp_box_214"                   // 左侧广告ID
    ],

    // 论坛BBS专用
    bbs: [
        ".post_recommend",              // 评论嵌入小广告
        ".personalized-recommend-box",  // 猜你喜欢
        ".ad_top",                      // 顶部广告
        ".ad_1"                         // 右侧广告
    ],

    // 下载页专用
    download: [
        ".fixed_dl",                    // 固定下载框
        "indexSuperise",                // 注意：这里原代码没有.或#前缀
        ".content_recom"                // 右侧推荐
    ],

    // 登录页专用
    login: [
        ".main-tu"                      // 登录界面大图广告
    ],

    // Cloud页面专用
    cloud: [
        "#kp_box_118"                   // cloud.csdn.net头部广告
    ]
};

// 广告清理类
class AdCleaner {
    constructor() {
        this.selectors = [];            // 当前页面待清理选择器
        this.cleanInterval = null;      // 清理定时器
        this.loopIntervals = [];        // 持续清理定时器数组
        Logger.log('AdCleaner 已初始化');
    }

    /**
     * 清空选择器列表
     */
    clear() {
        this.selectors = [];
        Logger.debug('AdCleaner: 选择器列表已清空');
    }

    /**
     * 添加单个选择器
     * @param {string} selector - CSS选择器
     */
    add(selector) {
        if (selector && typeof selector === 'string') {
            this.selectors.push(selector);
        }
    }

    /**
     * 添加多个选择器（从预定义分类）
     * @param {string|Array} category - 分类名称或选择器数组
     */
    addCategory(category) {
        if (typeof category === 'string' && AD_SELECTORS[category]) {
            this.selectors.push(...AD_SELECTORS[category]);
            Logger.debug(`AdCleaner: 已添加 ${category} 分类，共 ${AD_SELECTORS[category].length} 个选择器`);
        } else if (Array.isArray(category)) {
            this.selectors.push(...category);
        }
    }

    /**
     * 批量添加多个分类
     * @param {Array<string>} categories - 分类名称数组
     */
    addCategories(categories) {
        categories.forEach(cat => this.addCategory(cat));
    }

    /**
     * 执行清理 - 定时重复清理times次
     * @param {number} times - 重复次数，默认10次
     * @param {number} interval - 间隔时间（毫秒），默认100ms
     */
    clean(times = 10, interval = 100) {
        if (this.selectors.length === 0) {
            Logger.warn('AdCleaner: 没有选择器需要清理');
            return;
        }

        let count = 0;
        this.cleanInterval = setInterval(() => {
            count++;
            if (count >= times) {
                clearInterval(this.cleanInterval);
                Logger.log(`AdCleaner: 清理完成，共清理 ${times} 次，移除 ${this.selectors.length} 种广告`);
            }

            // 执行清理
            this.selectors.forEach(selector => {
                try {
                    $(selector).remove();
                } catch (e) {
                    // 忽略无效选择器错误
                }
            });
        }, interval);

        // 增加进度条
        if (window.progressor && typeof progressor.incProgress === 'function') {
            progressor.incProgress(10);
        }
    }

    /**
     * 启动持续清理（针对动态加载的广告）
     * @param {number} type - 清理类型
     *   1: 主页动态广告
     *   2: 文章页动态广告
     *   3: 通用动态广告（登录框、红包雨等）
     */
    startContinuousCleaning(type) {
        const interval = setInterval(() => {
            if (type === 1) {
                // 主页中间的广告
                $(".J_adv").remove();
                // 主页有新的内容横条
                $(".feed-fix-box").remove();
                // 主页广告 iframe
                if (currentURL === "https://www.csdn.net/") {
                    $("iframe").remove();
                }
                // 删除 CSDN 官方在主页的文章（大多是广告）
                $("li.clearfix").each(function(_index, ele) {
                    var banned = /csdn<\/a>/;
                    var aMark = $(ele).find(".name").html();
                    if (banned.test(aMark)) {
                        $(ele).remove();
                    }
                });
                // 主页广告 - data-type='ad'
                $("li").each(function() {
                    let self = $(this);
                    let dataType = self.attr('data-type');
                    if (dataType === 'ad') {
                        self.remove();
                    }
                });
                // 主页广告 - 教育和营销链接
                $("li > div > div > h2 > a[href*='https://edu.csdn.net']").parent().parent().parent().parent().remove();
                $("li > div > div > h2 > a[href*='https://marketing.csdn.net']").parent().parent().parent().parent().remove();
                // 官方脚本横幅
                $(".toolbar-advert").remove();

            } else if (type === 2) {
                // 评论查看更多展开监听
                $("div.comment-list-box").css("max-height", "none");
                // 屏蔽您的缩放不是100%的提示
                $('.leftPop').remove();
                // 官方脚本横幅
                $(".toolbar-advert").remove();

            } else if (type === 3) {
                // 循环删除登录提示框（前15秒屏蔽自动弹窗，之后允许用户主动登录）
                if ($($(".passport-login-container")[0]).length === 1 && !window.deletedLogin) {
                    let passInterval = setInterval(function() {
                        $('.passport-login-container').hide();
                        console.log("hide login container");
                    }, 10);
                    setTimeout(function() {
                        clearInterval(passInterval);
                        setTimeout(function() {
                            $("#passportbox").find("img").click();
                        }, 500);
                    }, 15000);
                    window.deletedLogin = true;
                }
                // 红包雨
                $("#csdn-redpack").remove();
            }
        }, 500);

        this.loopIntervals.push(interval);
        Logger.debug(`AdCleaner: 启动持续清理，类型=${type}`);
    }

    /**
     * 停止所有持续清理
     */
    stopContinuousCleaning() {
        this.loopIntervals.forEach(interval => clearInterval(interval));
        this.loopIntervals = [];
        Logger.log('AdCleaner: 已停止所有持续清理');
    }
}

// 创建全局广告清理器实例
const adCleaner = new AdCleaner();

// ============================================
// 复制增强系统 - CopyEnhancer
// ============================================

class CopyEnhancer {
    constructor() {
        Logger.log('CopyEnhancer 已初始化');
    }

    /**
     * 启用免登录复制功能
     */
    enableFreeLoginCopy() {
        // 移除登录要求class
        $(".hljs-button").removeClass("signin");
        $(".hljs-button").addClass("{2}");

        // 修改按钮提示文字
        $(".hljs-button").attr("data-title", "免登录复制");

        // 修改点击事件，显示复制成功提示
        $(".hljs-button").attr("onclick",
            "$(this).attr('data-title', '复制成功');setTimeout(function(){$('.hljs-button').attr('data-title', '免登录复制');},3500);");

        // 解除content_views的copy事件绑定
        $("#content_views").unbind("copy");

        Logger.debug('CopyEnhancer: 免登录复制已启用');
    }

    /**
     * 去除剪贴板劫持
     */
    removeClipboardHijacking() {
        // 恢复code元素的原生复制功能
        $("code").attr("onclick", "mdcp.copyCode(event)");

        try {
            // 复制时保留原文格式
            // 参考：https://greasyfork.org/en/scripts/390502-csdnremovecopyright/code
            Object.defineProperty(window, "articleType", {
                value: 0,
                writable: false,
                configurable: false
            });
        } catch (err) {
            Logger.warn('CopyEnhancer: 无法设置articleType属性');
        }

        // 初始化CSDN版权信息为空
        if (typeof csdn !== 'undefined' && csdn.copyright && typeof csdn.copyright.init === 'function') {
            csdn.copyright.init("", "", "");
        }

        Logger.debug('CopyEnhancer: 剪贴板劫持已移除');
    }

    /**
     * 增强代码复制功能
     * 为hljs-button按钮添加直接复制功能（使用GM_setClipboard）
     */
    enhanceCodeCopy() {
        $(".hljs-button").click(function() {
            var code = $(this).closest('.opt-box').siblings('code').text();
            GM_setClipboard(code);
        });

        Logger.debug('CopyEnhancer: 代码复制功能已增强');
    }

    /**
     * 修复复制限制
     * 允许选择和复制代码
     */
    fixCopyRestrictions() {
        $("code").css("user-select", "auto");
        $("#content_views").css("user-select", "auto");
        $("pre").css("user-select", "auto");

        Logger.debug('CopyEnhancer: 复制限制已修复');
    }

    /**
     * 应用所有复制增强功能
     * @param {Object} options - 可选配置
     *   - freeLoginCopy: 是否启用免登录复制（默认true）
     *   - removeHijacking: 是否移除剪贴板劫持（默认true）
     *   - enhanceCode: 是否增强代码复制（默认true）
     *   - fixRestrictions: 是否修复复制限制（默认true）
     */
    applyAll(options = {}) {
        const defaultOptions = {
            freeLoginCopy: true,
            removeHijacking: true,
            enhanceCode: true,
            fixRestrictions: true
        };

        const opts = { ...defaultOptions, ...options };

        if (opts.freeLoginCopy) {
            this.enableFreeLoginCopy();
        }

        if (opts.removeHijacking) {
            this.removeClipboardHijacking();
        }

        if (opts.enhanceCode) {
            this.enhanceCodeCopy();
        }

        if (opts.fixRestrictions) {
            this.fixCopyRestrictions();
        }

        Logger.log('CopyEnhancer: 所有复制增强功能已应用');
    }
}

// 创建全局复制增强器实例
const copyEnhancer = new CopyEnhancer();

// ============================================
// 版式系统 - Layout Classes
// ============================================

// 版式基类
class BaseLayout {
    constructor() {
        this.name = 'base';
        this.breakpoint = null;
    }

    apply(styleManager) {
        const css = this.getCSS();
        styleManager.inject(`layout-${this.name}`, css, true);
        this.applyDOM();
        Logger.log(`应用版式: ${this.name}`);
    }

    cleanup() {
        // 通用清理：移除所有可能的inline style
        $('.recommend-right').css('display', '');
        $('#rightAside').css('display', '');
        $('.container').css('width', '').css('margin', '');
        $('.container > main').css('width', '');
        $('#mainBox').css('width', '');
        $('.main_father').removeClass('justify-content-center');
    }

    getCSS() {
        return ''; // 子类实现
    }

    applyDOM() {
        // 子类实现DOM操作
    }
}

// 1. SmallLayout - 平铺模式（<1200px）
class SmallLayout extends BaseLayout {
    constructor() {
        super();
        this.name = 'sm';
        this.breakpoint = 1200;
    }

    getCSS() {
        return `
            /* CSDNGreener - SmallLayout 平铺模式 */
            .main_father {
                justify-content: flex-start !important;
            }

            main {
                width: auto !important;
                max-width: 90vw !important;
                float: none !important;
            }

            #mainBox {
                width: 100% !important;
            }

            main article img {
                margin: 0 auto;
                max-width: 100%;
                object-fit: cover;
            }

            .recommend-right {
                width: 100% !important;
                margin-top: 20px;
            }

            @media screen and (max-width: 768px) {
                main {
                    max-width: 100vw !important;
                    padding: 0 10px;
                }
            }
        `;
    }

    applyDOM() {
        $('.main_father').removeClass('justify-content-center');
        $('#mainBox').css('width', '100%');
    }
}

// 2. MediumLayout - 适应模式（1200-1380px）
class MediumLayout extends BaseLayout {
    constructor() {
        super();
        this.name = 'md';
        this.breakpoint = 1380;
    }

    getCSS() {
        return `
            /* CSDNGreener - MediumLayout 适应模式 */
            .main_father {
                justify-content: flex-start !important;
            }

            .container {
                max-width: 1200px !important;
                margin: 0 auto;
            }

            main {
                width: 768px !important;
            }

            .recommend-right {
                width: 300px !important;
                max-height: calc(100vh - 80px) !important;
                overflow-y: auto !important;
                overflow-x: hidden !important;
                position: sticky !important;
                top: 70px !important;
            }

            .recommend-right aside,
            .recommend-right .aside-box {
                max-height: none !important;
                overflow: visible !important;
            }

            .recommend-right::-webkit-scrollbar {
                width: 6px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.2) !important;
                border-radius: 3px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb:hover {
                background-color: rgba(0, 0, 0, 0.4) !important;
            }

            .recommend-right::-webkit-scrollbar-track {
                background: transparent !important;
            }

            #content_views {
                width: 100% !important;
            }
        `;
    }

    applyDOM() {
        $('.main_father').removeClass('justify-content-center');
    }
}

// 3. LargeLayout - 居中模式（1380-1550px）
class LargeLayout extends BaseLayout {
    constructor() {
        super();
        this.name = 'lg';
        this.breakpoint = 1550;
    }

    getCSS() {
        return `
            /* CSDNGreener - LargeLayout 居中模式 */
            .main_father {
                justify-content: center !important;
            }

            .container {
                max-width: 1318px !important;
                margin: 0 auto !important;
            }

            main {
                width: 1010px !important;
            }

            .recommend-right {
                width: 300px !important;
                max-height: calc(100vh - 80px) !important;
                overflow-y: auto !important;
                overflow-x: hidden !important;
                position: sticky !important;
                top: 70px !important;
            }

            .recommend-right aside,
            .recommend-right .aside-box {
                max-height: none !important;
                overflow: visible !important;
            }

            .recommend-right::-webkit-scrollbar {
                width: 6px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.2) !important;
                border-radius: 3px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb:hover {
                background-color: rgba(0, 0, 0, 0.4) !important;
            }

            .recommend-right::-webkit-scrollbar-track {
                background: transparent !important;
            }
        `;
    }

    applyDOM() {
        $('.container').css('margin', '0 auto');
    }
}

// 4. FocusLayout - 沉浸模式（无侧边栏，任意分辨率）
class FocusLayout extends BaseLayout {
    constructor() {
        super();
        this.name = 'fo';
        this.breakpoint = null;
    }

    getCSS() {
        return `
            /* CSDNGreener - FocusLayout 沉浸模式 */
            .recommend-right,
            #rightAside {
                display: none !important;
            }

            .container {
                width: 100% !important;
                max-width: 1400px !important;
                margin: 0 auto !important;
            }

            .container > main {
                width: 100% !important;
                max-width: 1200px !important;
                margin: 0 auto !important;
            }

            #article_content,
            #content_views {
                max-width: 900px !important;
                margin: 0 auto !important;
            }
        `;
    }

    applyDOM() {
        // 清空inline style，让CSS接管
        $('.recommend-right').css('display', '');
        $('#rightAside').css('display', '');
        $('.container').css('width', '');
        $('.container > main').css('width', '');
    }
}

// 5. HDLayout - 高分辨率模式（1920px+，新增⭐）
class HDLayout extends BaseLayout {
    constructor() {
        super();
        this.name = 'hd';
        this.breakpoint = 1920;
    }

    getCSS() {
        return `
            /* CSDNGreener - HDLayout 高分辨率模式（新增） */
            .main_father {
                justify-content: center !important;
            }

            .container {
                max-width: 1600px !important;
                margin: 0 auto !important;
                display: flex !important;
                justify-content: space-between !important;
            }

            main {
                width: 1200px !important;
                flex: 0 0 1200px !important;
            }

            .recommend-right {
                width: 380px !important;
                flex: 0 0 380px !important;
                max-height: calc(100vh - 80px) !important;
                overflow-y: auto !important;
                overflow-x: hidden !important;
                position: sticky !important;
                top: 70px !important;
            }

            .recommend-right aside,
            .recommend-right .aside-box {
                max-height: none !important;
                overflow: visible !important;
            }

            .recommend-right::-webkit-scrollbar {
                width: 6px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.2) !important;
                border-radius: 3px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb:hover {
                background-color: rgba(0, 0, 0, 0.4) !important;
            }

            .recommend-right::-webkit-scrollbar-track {
                background: transparent !important;
            }

            #article_content,
            #content_views {
                max-width: 100% !important;
            }

            pre {
                max-width: 100% !important;
            }

            main article img {
                max-width: 100% !important;
                height: auto !important;
            }

            .recommend-right .aside-box {
                width: 100% !important;
            }

            /* 4K优化 (2560px+) */
            @media screen and (min-width: 2560px) {
                .container {
                    max-width: 2000px !important;
                }

                main {
                    width: 1500px !important;
                    flex: 0 0 1500px !important;
                }

                .recommend-right {
                    width: 480px !important;
                    flex: 0 0 480px !important;
                }
            }
        `;
    }

    applyDOM() {
        // 确保侧边栏存在
        if (!$('#rightAside').length && $('.recommend-right').length === 0) {
            $('#mainBox').after(
                '<div class="recommend-right align-items-stretch clearfix" id="rightAside">' +
                '<aside class="recommend-right_aside">' +
                '<div id="recommend-right" style="width: 100%;"></div>' +
                '</aside></div>'
            );
        }
        $('.recommend-right').show();
    }

    cleanup() {
        // 清理时不移除侧边栏，保持兼容
    }
}

// 6. AILayout - 智能模式（全新默认模式⭐⭐⭐，基于CSDN官方CSS断点优化）
class AILayout extends BaseLayout {
    constructor() {
        super();
        this.name = 'ai';
        this.breakpoint = null; // 自适应所有分辨率
    }

    getCSS() {
        return `
            /* CSDNGreener - AILayout 智能模式（基于CSDN官方CSS断点优化） */

            /* 核心布局 - 内容始终居中，侧边栏和谐展示 */
            .main_father {
                display: flex !important;
                justify-content: center !important;
                align-items: flex-start !important;
                padding: 8px 12px 0 12px !important;
            }

            .container {
                display: flex !important;
                justify-content: center !important;
                align-items: flex-start !important;
                gap: 20px !important;
                margin: 0 auto !important;
            }

            main {
                flex-shrink: 1 !important;
                flex-grow: 0 !important;
                min-width: 0 !important;
            }

            .recommend-right,
            #rightAside {
                flex-shrink: 0 !important;
                flex-grow: 0 !important;
                display: block !important;
                float: none !important;
                margin-left: 0 !important;
                max-height: calc(100vh - 80px) !important;
                overflow-y: auto !important;
                overflow-x: hidden !important;
                position: sticky !important;
                top: 70px !important;
            }

            /* 确保侧边栏内部子元素不阻止滚动 */
            .recommend-right aside,
            .recommend-right_aside,
            #rightAside aside {
                max-height: none !important;
                overflow: visible !important;
            }

            .recommend-right .aside-box,
            #rightAside .aside-box {
                max-height: none !important;
                height: auto !important;
            }

            /* 优化侧边栏滚动条样式 */
            .recommend-right::-webkit-scrollbar,
            #rightAside::-webkit-scrollbar {
                width: 6px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb,
            #rightAside::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 0, 0.2) !important;
                border-radius: 3px !important;
            }

            .recommend-right::-webkit-scrollbar-thumb:hover,
            #rightAside::-webkit-scrollbar-thumb:hover {
                background-color: rgba(0, 0, 0, 0.4) !important;
            }

            .recommend-right::-webkit-scrollbar-track,
            #rightAside::-webkit-scrollbar-track {
                background: transparent !important;
            }

            #article_content,
            #content_views {
                max-width: 100% !important;
            }

            main article img {
                max-width: 100% !important;
                height: auto !important;
            }

            .recommend-right .aside-box {
                width: 100% !important;
            }

            /* 小屏幕 (< 1320px) - 基于CSDN官方断点 */
            @media screen and (max-width: 1319px) {
                .container {
                    max-width: 1100px !important;
                    flex-direction: column !important;
                    align-items: center !important;
                }
                main {
                    width: 100% !important;
                    max-width: 780px !important;
                }
                .recommend-right,
                #rightAside {
                    width: 100% !important;
                    max-width: 780px !important;
                    margin-top: 16px !important;
                    position: static !important;
                    max-height: none !important;
                }
            }

            /* 中等屏幕 (1320px - 1379px) - 基于CSDN官方断点 */
            @media screen and (min-width: 1320px) and (max-width: 1379px) {
                .container {
                    max-width: 1260px !important;
                }
                main {
                    width: 920px !important;
                    flex: 0 0 920px !important;
                }
                .recommend-right,
                #rightAside {
                    width: 300px !important;
                    flex: 0 0 300px !important;
                }
            }

            /* 标准屏幕 (1380px - 1549px) - 基于CSDN官方断点 */
            @media screen and (min-width: 1380px) and (max-width: 1549px) {
                .container {
                    max-width: 1380px !important;
                }
                main {
                    width: 1040px !important;
                    flex: 0 0 1040px !important;
                }
                .recommend-right,
                #rightAside {
                    width: 300px !important;
                    flex: 0 0 300px !important;
                }
            }

            /* 大屏幕 (1550px - 1699px) - 基于CSDN官方断点 */
            @media screen and (min-width: 1550px) and (max-width: 1699px) {
                .container {
                    max-width: 1200px !important;
                }
                main {
                    width: 860px !important;
                    flex: 0 0 860px !important;
                }
                .recommend-right,
                #rightAside {
                    width: 300px !important;
                    flex: 0 0 300px !important;
                }
            }

            /* 超大屏幕 (1700px - 1919px) - 基于CSDN官方断点优化 */
            @media screen and (min-width: 1700px) and (max-width: 1919px) {
                .container {
                    max-width: 1400px !important;
                }
                main {
                    width: 1060px !important;
                    flex: 0 0 1060px !important;
                }
                .recommend-right,
                #rightAside {
                    width: 300px !important;
                    flex: 0 0 300px !important;
                }
            }

            /* 全高清屏幕 (1920px - 2559px) - HD优化 */
            @media screen and (min-width: 1920px) and (max-width: 2559px) {
                .container {
                    max-width: 1680px !important;
                }
                main {
                    width: 1320px !important;
                    flex: 0 0 1320px !important;
                }
                .recommend-right,
                #rightAside {
                    width: 320px !important;
                    flex: 0 0 320px !important;
                }
            }

            /* 4K屏幕 (>= 2560px) */
            @media screen and (min-width: 2560px) {
                .container {
                    max-width: 2100px !important;
                }
                main {
                    width: 1700px !important;
                    flex: 0 0 1700px !important;
                }
                .recommend-right,
                #rightAside {
                    width: 360px !important;
                    flex: 0 0 360px !important;
                }
            }
        `;
    }

    applyDOM() {
        // 确保侧边栏存在
        if (!$('#rightAside').length && $('.recommend-right').length === 0) {
            $('#mainBox').after(
                '<div class="recommend-right align-items-stretch clearfix" id="rightAside">' +
                '<aside class="recommend-right_aside">' +
                '<div id="recommend-right" style="width: 100%;"></div>' +
                '</aside></div>'
            );
        }
        $('.recommend-right').show();
        $('.container').css('margin', '0 auto');
    }

    cleanup() {
        // 清理时不移除侧边栏，保持兼容
    }
}

// 注册所有版式到LayoutEngine
layoutEngine.registerLayout('ai', new AILayout()); // 智能模式优先注册
layoutEngine.registerLayout('sm', new SmallLayout());
layoutEngine.registerLayout('md', new MediumLayout());
layoutEngine.registerLayout('lg', new LargeLayout());
layoutEngine.registerLayout('fo', new FocusLayout());
layoutEngine.registerLayout('hd', new HDLayout());

Logger.log('版式系统已初始化：ai（智能默认）, sm, md, lg, fo, hd');

// 应用默认版式或用户配置的版式 - 默认使用AI智能模式
const currentLayout = configManager.get('layout') || 'ai';
layoutEngine.apply(currentLayout);

// ============================================
// 版式系统结束
// ============================================

var star_svg_1 = '<svg t="1595083631685" class="icon" viewBox="0 0 1051 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2173" width="140" height="140"><path d="M525.837838 852.410811L199.264865 1001.859459l41.513513-357.016216L0 381.924324l351.481081-69.189189L525.837838 0l174.356757 312.735135L1051.675676 381.924324l-240.778379 262.918919 41.513514 357.016216z" fill="#FFD566" p-id="2174"></path></svg>';
var star_svg_2 = ' <svg t="1595083715312" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7848" width="140" height="140"><path d="M1014.001347 866.090236L810.23569 662.324579l145.497643-84.126599c11.377778-6.550842 17.92862-18.962963 16.894276-32.064647-1.034343-13.101684-9.309091-24.479461-21.376431-29.306397l-648.188552-258.585859c-12.756902-5.171717-27.23771-2.068687-36.891582 7.585186-9.653872 9.653872-12.756902 24.13468-7.585185 36.891582l258.585858 648.533333c4.826936 12.06734 16.204714 20.686869 29.306397 21.376431 13.101684 1.034343 25.513805-5.516498 32.064647-16.894276l84.126599-145.497643 203.765657 203.765657c6.550842 6.550842 15.17037 9.998653 24.13468 9.998653 8.96431 0 17.92862-3.447811 24.13468-9.998653l99.29697-99.29697c13.446465-13.446465 13.446465-35.167677 0-48.614141zM150.324579 102.055219c-13.446465-13.446465-35.167677-13.446465-48.26936 0-13.446465 13.446465-13.446465 35.167677 0 48.26936l76.196633 76.196633c6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653c13.446465-13.446465 13.446465-35.167677 0-48.26936L150.324579 102.055219zM176.183165 338.575084c0-18.962963-15.17037-34.133333-34.133333-34.133333H34.133333c-18.962963 0-34.133333 15.17037-34.133333 34.133333s15.17037 34.133333 34.133333 34.133334h107.571718c18.962963 0 34.478114-15.17037 34.478114-34.133334zM162.391919 444.422896l-76.196633 75.851851c-13.446465 13.446465-13.446465 35.167677 0 48.269361 6.550842 6.550842 15.515152 9.998653 24.13468 9.998653s17.583838-3.447811 24.13468-9.998653l76.196633-76.196633c13.446465-13.446465 13.446465-35.167677 0-48.269361-13.446465-13.101684-35.167677-13.101684-48.26936 0.344782zM338.575084 176.183165c18.962963 0 34.133333-15.17037 34.133334-34.133333V34.133333c0-18.962963-15.17037-34.133333-34.133334-34.133333s-34.133333 15.17037-34.133333 34.133333v107.571718c0 18.962963 15.17037 34.478114 34.133333 34.478114zM468.557576 220.659933c8.619529 0 17.583838-3.447811 24.13468-9.998654L568.888889 134.464646c13.446465-13.446465 13.446465-35.167677 0-48.26936-13.446465-13.446465-35.167677-13.446465-48.26936 0l-76.196633 76.196633c-13.446465 13.446465-13.446465 35.167677 0 48.26936 6.550842 6.550842 15.515152 9.998653 24.13468 9.998654z" fill="#2c2c2c" p-id="7849"></path></svg>';
var star_svg_3 = ' <svg t="1595083925438" class="icon" viewBox="0 0 1204 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4809" width="140" height="140"><path d="M1088.864348 618.13701a1555.009384 1555.009384 0 0 1-150.273004 167.137308c-52.881642 51.195212-107.931552 101.18583-163.643989 147.261521-33.849069 27.524955-60.229661 48.665566-76.190521 60.229661a162.981462 162.981462 0 0 1-191.891699 0c-15.539253-12.045932-42.160763-32.644476-76.190521-60.831957a2638.480754 2638.480754 0 0 1-164.366745-147.261521 1579.101249 1579.101249 0 0 1-150.273004-165.812257A468.104924 468.104924 0 0 1 0.152998 344.754579 315.543193 315.543193 0 0 1 109.048225 96.367457a399.443111 399.443111 0 0 1 493.883219-20.478084 398.660125 398.660125 0 0 1 493.883219 20.478084A315.482964 315.482964 0 0 1 1204.746215 343.309067a466.840101 466.840101 0 0 1-115.701178 274.647254z" fill="#FE4B83" p-id="4810"></path></svg>';
var star_svg_4 = ' <svg t="1595084089115" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8008" width="140" height="140"><path d="M512 46.545455C256 46.545455 46.545455 256 46.545455 512s209.454545 465.454545 465.454545 465.454545 465.454545-209.454545 465.454545-465.454545S768 46.545455 512 46.545455z m0 837.818181c-204.8 0-372.363636-167.563636-372.363636-372.363636s167.563636-372.363636 372.363636-372.363636 372.363636 167.563636 372.363636 372.363636-167.563636 372.363636-372.363636 372.363636z" fill="#00C5C5" p-id="8009"></path><path d="M656.290909 586.472727c-79.127273 69.818182-209.454545 69.818182-288.581818 0-18.618182-13.963636-41.890909-13.963636-60.509091 4.654546-13.963636 13.963636-13.963636 41.890909 4.654545 60.509091 55.854545 51.2 125.672727 74.472727 200.145455 74.472727s144.290909-27.927273 200.145455-74.472727c18.618182-13.963636 18.618182-41.890909 4.654545-60.509091s-41.890909-18.618182-60.509091-4.654546zM358.4 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-55.854545-51.2-55.854545c-27.927273 0-51.2 23.272727-51.2 51.2s23.272727 55.854545 51.2 55.854545zM665.6 460.8c27.927273 0 51.2-23.272727 51.2-51.2s-23.272727-51.2-51.2-51.2-51.2 23.272727-51.2 51.2 23.272727 51.2 51.2 51.2z" fill="#00C5C5" p-id="8010"></path></svg>';
var star_svg = star_svg_1 + star_svg_2 + star_svg_3 + star_svg_4;
var donate_svg = '<svg t="1592982508258" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4207" width="32" height="32"><path d="M664.48 234.432a32 32 0 0 0-45.248-0.8l-76.256 73.6-73.344-73.216a32 32 0 1 0-45.248 45.312l72.384 72.256h-49.28a32 32 0 0 0 0 64h63.776v32h-63.776a32 32 0 0 0 0 64h63.776v65.664a32 32 0 1 0 64 0v-65.664h64.288a32 32 0 1 0 0-64h-64.288v-32h64.288a32 32 0 1 0 0-64h-50.368l74.464-71.872a32.032 32.032 0 0 0 0.832-45.28z m275.2 503.552a9017.568 9017.568 0 0 0-141.664-56.736 368.512 368.512 0 0 0 97.568-248.608c0-202.912-165.12-368-368.064-368s-368 165.088-368 368c0 16.224 1.024 32.352 3.072 47.968 2.304 17.504 18.496 29.664 35.904 27.584a32 32 0 0 0 27.584-35.904 304.512 304.512 0 0 1-2.56-39.648c0-167.616 136.384-304 304-304 167.648 0 304.064 136.384 304.064 304a300.544 300.544 0 0 1-96.128 221.472c-0.768 0.736-1.088 1.76-1.824 2.528-42.848-15.936-79.328-28.48-93.76-30.656-24.896-3.904-48.672 7.616-63.104 28.896-12.032 17.792-15.072 38.816-8.096 56.256 4.288 10.656 20.512 32.896 39.776 57.28-46.432-0.064-117.312-6.336-192.832-35.488-31.264-12.064-69.44-52.64-103.136-88.416-47.968-50.976-93.28-99.104-142.56-99.104-18.336 0-35.744 6.848-50.336 19.776-18.24 16.224-35.136 48.32-12 109.248 42.624 112.16 208.544 285.12 341.728 285.12h478.144a32 32 0 0 0 32-32v-160a31.84 31.84 0 0 0-19.776-29.568z m-44.16 157.6h-445.12l-1.024 32v-32c-97.6 0-247.072-152.128-281.92-243.872-10.112-26.656-6.72-37.408-5.344-38.624 4.128-3.648 6.528-3.648 7.84-3.648 21.632 0 64.608 45.632 95.968 78.944 40.224 42.752 81.856 86.944 126.656 104.256 85.216 32.896 164.896 39.808 216.736 39.808 41.376 0 67.584-4.352 68.672-4.544a32 32 0 0 0 19.136-52.16c-27.008-32.096-58.592-71.808-67.296-85.344 0.288-0.576 0.512-1.024 0.352-1.152 22.848 3.488 162.432 57.952 265.28 99.84v106.496z" p-id="4208"></path></svg>';
var set_svg = '<svg t="1592982970375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10112" width="48" height="48"><path d="M256 102.4h512l256 256-512 563.2L0 358.4z" fill="#26CD63" p-id="10113"></path><path d="M256 102.4l256 256H0zM768 102.4l256 256H512zM512 921.6l204.8-563.2H307.2z" fill="#14A345" p-id="10114"></path></svg>';
var save_svg = '<svg t="1629448588351" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7849" width="200" height="200"><path d="M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m0 945.2C273.1 945.2 78.8 750.9 78.8 512S273.1 78.8 512 78.8 945.2 273.1 945.2 512 750.9 945.2 512 945.2z" p-id="7850" fill="#ffffff"></path><path d="M680.9 359.4L461 582.3 341.6 473.6c-16-14.6-41-13.4-55.6 2.6-14.7 16.1-13.5 41 2.6 55.6L436 666.1c7.5 6.8 17 10.2 26.5 10.2 10.2 0 20.3-3.9 28-11.7L737 414.7c15.3-15.5 15.1-40.4-0.4-55.7-15.5-15.2-40.5-15.1-55.7 0.4z" p-id="7851" fill="#ffffff"></path></svg>';
var settings_svg = '<svg t="1629433360462" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2870" width="200" height="200"><path d="M1006.438 17.548c-0.032 0-430.43-112.966-780.45 237.022-288.99 289.008-33.522 576.966-33.522 576.966s287.958 255.484 576.952-33.55C1119.436 448.012 1006.468 17.612 1006.438 17.548z" fill="#9ED36A" p-id="2871"></path><path d="M1006.438 17.548l-42.674-8.216c0.032 0.062 112.998 438.678-236.99 788.652-96.344 96.406-192.598 132.208-278.104 137.144 95.41 5.5 208-24.368 320.748-137.144C1119.436 448.012 1006.468 17.612 1006.438 17.548z" fill="#FFFFFF" opacity=".2" p-id="2872"></path><path d="M600.406 423.612c-8.308-8.34-21.836-8.34-30.148 0L6.4 987.426c-8.326 8.372-8.326 21.868 0 30.18 8.326 8.308 21.822 8.308 30.162 0L600.406 453.76c8.34-8.342 8.34-21.838 0-30.148z" fill="#8AC054" p-id="2873"></path></svg>';
var protect_svg = '<svg t="1629560538805" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3212" width="200" height="200"><path d="M800.3 205.1L534.8 116c-16-5.4-33.3-5.3-49.2 0.2l-264.5 92.3c-29.3 10-49 37.5-49.1 68.4l1.7 265.4c0.7 81 31.1 158.9 85.6 218.9 25 27.7 56.9 51.5 97.8 72.7l144 74.6c9 4.7 19.7 4.6 28.7-0.2L672.5 832c40.4-21.6 72.2-45.7 96.9-73.8 53.6-60.6 83-138.9 82.6-219.8l-1.7-265.6c-0.5-30.9-20.5-58.1-50-67.7z" fill="#07C160" p-id="3213"></path><path d="M474.1 652c-7.1 0-13.8-2.8-18.9-7.8l-151-151.1c-10.4-10.4-10.4-27.4 0-37.8s27.4-10.4 37.8 0l132.1 132.2 207.7-207.7c10.4-10.4 27.4-10.4 37.8 0 10.4 10.4 10.4 27.4 0 37.8L493 644.2c-5 5-11.8 7.8-18.9 7.8z" fill="#FFFFFF" p-id="3214"></path></svg>';

// jquery.showtips.js
(function(jQuery) {
	jQuery.fn.showTips = function(options,elem){
		var config = {
			skin:"trips",
			content:$(this).attr("tips")||"弹出类型的气泡提示！",  //气泡提示内容里面可以是HTML，默认显示自定义的提示内容
			width:"auto",  //默认为auto，可以写具体尺寸如：200
			alignTo:["right","center"],  //箭头方向
			color:["rgb(247, 206, 57)","#FFFEF4"],  //这里是提示层的风格，第一个参数为提示边框颜色，第二个参数为提示背景颜色
			type:"html",   //显示内容类型
			trigger:"click",    //默认为点击显示，show为初始化就显示，hover为经过显示，focus焦点显示，mouse跟随鼠标显示隐藏
			spacing:10,  //默认为箭头距离对象的尺寸
			customid:"",  //自定义ID
			isclose:false,   //是否显示关闭按钮
			success : null    //成功后的回调函数
		};
		var opts = jQuery.extend(config, options);
		return this.each(function(){
			var that = jQuery(this),tipBox,tipId,selfH,selfW,conId,docW, spa = opts.spacing, skin=opts.skin;
			var Mathrandom = Math.floor(Math.random() * 9999999);
            var pmr = (opts.customid=="") ? Mathrandom :opts.customid.replace(/[#.]/, "");
			var pointer=opts.alignTo.length===1 ? ''+opts.alignTo[0]+'' : ''+opts.alignTo[0]+'-'+opts.alignTo[1]+'';

			if(typeof elem == 'string') {
				if(elem =="show"){
					jQuery('#tip'+pmr).show();  jQuery("#con"+pmr).html(opts.content);
					showPosition(pointer,jQuery('#tip'+pmr));
					};
				if(elem =="hide"){jQuery('#tip'+pmr).hide()};
			};
			if(typeof elem == '' || typeof elem == undefined){return true};
			if(jQuery('#tip'+pmr).length==1){return false;}
			tipBox=jQuery('<div class="'+skin+' '+skin+'-'+pointer+'" id="tip'+pmr+'"><i></i><em></em><div class="'+skin+'con" id="con'+pmr+'"></div></div>').appendTo(document.body);
			tipId = jQuery("#tip"+pmr);
			conId = jQuery("#con"+pmr);

			var edgecolor='border-'+opts.alignTo[0]+'-color', tfi=tipId.find("i"), tfem=tipId.find("em"), tfiem=tipId.find("i,em");
			tipId.css({'position':'absolute',border:'1px solid','border-color':opts.color[0],'background-color':opts.color[1]});
			if(opts.alignTo[1]=='center'){ var offpos=50,percen="%"; }else{ var offpos=5,percen="px"; };
			tfiem.css({width:0,height:0,content:'','position':'absolute'})
			tfi.css({border:'8px solid transparent','z-index':5});
			tfem.css({border:'7px solid transparent','z-index':10});
			switch (pointer) {
				case 'top-center':
				case 'bottom-center':
				case 'top-left':
				case 'bottom-left':
					var poi="left";
					if(pointer=='top-center' || pointer=='bottom-center'){
						tfi.css({"margin-left":"-8px"});
						tfem.css({"margin-left":"-7px"});
					}
				    break;
				case 'left-center':
				case 'right-center':
				case 'left-top':
				case 'right-top':
					var poi="top";
					if(pointer=='left-center' || pointer=='right-center'){
						tfi.css({"margin-top":"-8px"});
						tfem.css({"margin-top":"-7px"});
					}
				    break;
				default:
					var poi="right";
				    break;
			};

			if(pointer=='follow'){
				tfi.css({'border-bottom-color':opts.color[0],left:''+offpos+percen+'',bottom:'100%'});
				tfem.css({'border-bottom-color':opts.color[1],left:''+(offpos+(opts.alignTo[1]=='center'?0:1))+percen+'',bottom:'100%'});
			}else{
				tfi.css(edgecolor,opts.color[0]).css(poi,''+offpos+percen+'');
				tfem.css(edgecolor,opts.color[1]).css(poi,''+(offpos+(opts.alignTo[1]=='center'?0:1))+percen+'');
				tfiem.css(opts.alignTo[0],'100%');
			};

			switch (opts.type) {
				case 'html':conId.html(opts.content); break;
				case 'id'  :
				    var tempid=jQuery(opts.content) ,wrap = document.createElement("div");
					if(tempid.css("display") == "none"){  tempid.css({display:"block"}); }
					conId.append(tempid);
				    break;
			};
			if(opts.isclose){
				jQuery('<span class="'+skin+'close" id="close'+pmr+'">&times;</span>').appendTo(tipId);
				tipId.find("#close"+pmr+"").on("click",function(){tipId.hide();});
			}

			if(typeof opts.width === 'string'){
				docW = parseInt(document.body.clientWidth*(opts.width.replace('%','')/100));
				(typeof opts.width == 'auto' || typeof opts.width == '') ? tipBox.css({width:'auto'}) : tipBox.css({width:docW});
				tipBox.height();
			}else{
				tipBox.width(opts.width).height();
			}
            function showPosition(pointer,cell){
				var selfH = that.outerHeight(true), selfW = that.outerWidth(true);
				var post=that.offset().top, posl=that.offset().left;
				var tipCell=(cell=="" || cell==undefined) ? tipId : cell;
			    var tipH=tipCell.outerHeight(true), tipW=tipCell.outerWidth(true);

				switch (pointer) {
					case 'top-left': tipCell.css({top:post-tipH-spa,left:posl}); break;
					case 'top-center': tipCell.css({top:post-tipH-spa,left:posl-(tipW/2)+(selfW/2)}); break;
					case 'top-right': tipCell.css({top:post-tipH-spa,left:posl-(tipW-selfW)}); break;
					case 'bottom-left': tipCell.css({top:post+selfH+spa,left:posl}); break;
					case 'bottom-center': tipCell.css({top:post+selfH+spa,left:posl-(tipW/2)+(selfW/2)}); break;
					case 'bottom-right': tipCell.css({top:post+selfH+spa,left:posl-(tipW-selfW)}); break;
					case 'left-top': tipCell.css({top:post,left:posl-tipW-spa}); break;
					case 'left-center': tipCell.css({top:post-(tipH/2)+(selfH/2),left:posl-tipW-spa}); break;
					case 'right-top': tipCell.css({top:post,left:posl+selfW+spa}); break;
					case 'right-center': tipCell.css({top:post-(tipH/2)+(selfH/2),left:posl+selfW+spa}); break;
					case 'follow': that.mousemove(function(e) { tipCell.css({top:e.pageY + 30,left:e.pageX - 6}); }); break;
				};
			}
			tipBox.hide();
			switch (opts.trigger){
				case 'show':showPosition(pointer);tipBox.show();break;
                case 'click':that.click(function(){showPosition(pointer);tipBox.show();});break;
				case 'hover':that.hover(function(){showPosition(pointer);tipBox.show(); tipBox.on("mouseover",function(){jQuery(this).show()}).on("mouseout",function(){jQuery(this).hide()})},function(){tipBox.hide();});break;
				case 'focus':that.focus(function(){showPosition(pointer);tipBox.show();});  that.blur(function(){tipBox.hide();});break;
				case 'mouse':that.hover(function(){showPosition(pointer);tipBox.show();},function(){tipBox.hide();});break;
			};
			setTimeout(function(){opts.success && opts.success();}, 1);
		});
	}
})(jQuery);

(function () {
    'use strict';

    l("CSDNGreener V" + version);
    if (isFirefox()) {
        console.log("您正在使用火狐浏览器，将使用兼容模式运行 CSDNGreener。");
    }
    progressor.init();

    // 绿化设定按钮点击事件
    let jss = "";
    jss += "<script>function showConfig() {";
    jss += "$(window).scrollTop(0);";
    jss += "$('.white_content').fadeIn(500);";
    jss += "$('body').css('overflow', 'hidden');";
    jss += "$('body').css('filter','blur(3px)');";
    jss += "$('body').css('pointer-events','none')";
    jss += "}</script>";
    $("body").append(jss);

    // 设置面板按钮点击事件
    let saveJss = "";
    // 保存配置（统一读取所有UI元素的值并保存到ConfigManager，然后刷新页面）
    saveJss += "<script>function saveConfig() {";
    saveJss += "try {";
    // 读取版式选择
    saveJss += "const selectedLayout = $('input[name=\"displayMode\"]:checked').val() || 'ai';";
    saveJss += "window.configManager.set('layout', selectedLayout);";
    // 读取通用设定
    saveJss += "window.configManager.set('display.recommend', $('#toggle-recommend-button').prop('checked'));";
    saveJss += "window.configManager.set('display.shop', $('#toggle-shop-button').prop('checked'));";
    saveJss += "window.configManager.set('display.whiteTheme', $('#toggle-whitetheme-button').prop('checked'));";
    saveJss += "window.configManager.set('display.autoResize', $('#toggle-autosize-button').prop('checked'));";
    saveJss += "window.configManager.set('toolbar.autoHide', $('#toggle-autohidetoolbar-button').prop('checked'));";
    saveJss += "window.configManager.set('bottomBar.alwaysHide', $('#toggle-autohidebottombar-button').prop('checked'));";
    saveJss += "window.configManager.set('toolbar.showWrite', $('#toggle-writeblog-button').prop('checked'));";
    // 读取右侧栏定制
    saveJss += "window.configManager.set('sidebar.authorCard', $('#toggle-authorcard-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.searchBlog', $('#toggle-searchblog-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.newArticle', $('#toggle-newarticle-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.hotArticle', $('#toggle-hotarticle-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.newComments', $('#toggle-newcomments-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.category', $('#toggle-kindperson-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.recommendArticle', $('#toggle-recommendarticle-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.archive', $('#toggle-archive-button').prop('checked'));";
    saveJss += "window.configManager.set('sidebar.content', $('#toggle-content-button').prop('checked'));";
    // 读取背景图（如果为空或只有空格，保存为空字符串，不设置背景）
    saveJss += "const bgImgValue = ($('#backgroundImgUrl').val() || '').trim();";
    saveJss += "window.configManager.set('custom.backgroundImage', bgImgValue);";
    saveJss += "} catch(err) { console.error('保存配置失败:', err); }";
    // 刷新页面
    saveJss += "location.reload();";
    saveJss += "}</script>";
    // 取消配置（直接关闭面板）
    saveJss += "<script>function cancelConfig() {";
    saveJss += "closeConfigPanel();";
    saveJss += "}</script>";
    // 关闭面板
    saveJss += "<script>function closeConfigPanel() {";
    saveJss += "$('#configContent').fadeOut(200);";
    saveJss += "$('body').css('overflow', '');";
    saveJss += "$('body').css('filter','');";
    saveJss += "$('body').css('pointer-events','')";
    saveJss += "}</script>";
    $("body").append(saveJss);

    setTimeout(function() {
        var blockURL = currentURL.split("/").length;
        var main = /(www\.csdn\.net\/)$/;
        var mainNav = /nav/;
        var article = /article/;
        var bbs = /bbs\.csdn\.net/;
        var blog = /blog\.csdn\.net/;
        var blog2 = /\/article\/list\//;
        var download = /download\.csdn\.net/;
        var login = /passport\.csdn\.net/;
        var zone = /me\.csdn\.net/;
        var other = /(www\.csdn\.net\/)/;
        var mp = /mp\.csdn\.net/;
        var article_month = /article\/month/;
        var link = /link\.csdn\.net/;
        var blink = /blink\.csdn\.net/;

        // 初始化广告清理器
        adCleaner.clear();

        // 添加通用头部广告
        adCleaner.addCategory('header');

        // 新通知小圆点（未登录才消掉）
        if ($(".userinfo a").text() === '登录/注册') {
            adCleaner.add("#msg-circle");
        }

        if (main.test(currentURL) || mainNav.test(currentURL)) {
            l("正在优化主页体验...");

            // 添加主页专用广告
            adCleaner.addCategory('homepage');

            // 特殊处理：需要parent().remove()的元素
            $(".feed_company").parent().remove();
            $('.toolbar-subMenu-box').find("[href='https://mall.csdn.net/vip']").parent().remove();

            // 执行清理
            adCleaner.clean(10);

            // 清理顶部导航栏，只保留"博客"和"社区"
            setTimeout(function() {
                $('.toolbar-menus.csdn-toolbar-fl > li').each(function() {
                    const $li = $(this);
                    const title = $li.attr('title') || '';
                    const text = $li.text().trim();

                    // 保留"博客"和"社区"，删除其他所有项
                    if (title.indexOf('阅读深度') === -1 &&
                        title.indexOf('DevPress') === -1 &&
                        text.indexOf('博客') === -1 &&
                        text.indexOf('社区') === -1) {
                        $li.remove();
                    }
                });
            }, 500);

            // 博客及主页优化
            common(9, 10);

            // 启动持续清理
            adCleaner.startContinuousCleaning(3); // 通用动态广告
            adCleaner.startContinuousCleaning(1); // 主页动态广告
        } else if ((blog.test(currentURL) && blockURL === 4) || blog2.test(currentURL)) {
            l("正在优化个人博客主页体验...");

            // 添加博客主页专用广告
            adCleaner.addCategories(['homepage', 'blogHome']);

            // 执行清理
            adCleaner.clean(10);

            // 启动持续清理
            adCleaner.startContinuousCleaning(3); // 通用动态广告
            adCleaner.startContinuousCleaning(1); // 主页动态广告
        } else if (article.test(currentURL) && !mp.test(currentURL) && !article_month.test(currentURL)) {
            l("正在优化阅读体验...");
            // 绿化设定
            if (isFirefox()) {
                setTimeout(function() {
                    $(".toolbar-container-middle").prepend("<div id='greenerProgress' style='text-align:right'></div>");
                    let htmlOf0 = '<div class="toolbar-btn csdn-toolbar-fl"><a id="greenerSettings" title="点击打开 CSDNGreener 绿化设定" href="javascript:void(0)" onclick="showConfig();">' + settings_svg + '</a></div>';
                    $(".toolbar-btns").prepend(htmlOf0);
                    if (isFirefox()) {
                        // 提示
                        let tipsCookie = GM_getValue("showTip", true);
                        if (tipsCookie) {
                            showTips();
                        }
                        GM_setValue("showTip", false);
                    }
                }, 3000);
            } else {
                $(".toolbar-container-middle").prepend("<div id='greenerProgress' style='text-align:right'></div>");
                let htmlOf0 = '<div class="toolbar-btn csdn-toolbar-fl"><a id="greenerSettings" title="点击打开 CSDNGreener 绿化设定" href="javascript:void(0)" onclick="showConfig();">' + settings_svg + '</a></div>';
                $(".toolbar-btns").prepend(htmlOf0);
            }

            // 添加文章页广告
            adCleaner.addCategories(['sidebar', 'article', 'footer', 'modal']);

            // 执行清理
            adCleaner.clean(10);
            setTimeout(function() {
               // 展开评论的所有回复
               $('.btn-read-reply').click();
               // 右侧toolbar 创作提示
               $(".sidetool-writeguide-box").remove();
            }, 1500);
            // 主动加入右侧栏
            if ($(".recommend-right").length === 0) {
                $("#mainBox").after('<div class="recommend-right  align-items-stretch clearfix" id="rightAside"><aside class="recommend-right_aside"><div id="recommend-right" style="height: 100%; position: fixed; top: 52px; overflow: scroll;"></div></aside></div>');
            }
            // 上栏按钮删除
            $(".toolbar-menus > li > a:contains('专栏课程')").parent().remove();
            $(".toolbar-menus > li > a:contains('插件')").parent().remove();
            $(".toolbar-menus > li > a:contains('认证')").parent().remove();

            // 应用复制增强功能（修复复制限制在这里直接应用）
            copyEnhancer.fixCopyRestrictions();

            // 图片混文字时，无法完整复制，图片不会被复制下来 https://github.com/adlered/CSDNGreener/issues/87
            //let el = $("main .blog-content-box")[0];
            //let elClone = el.cloneNode(true);
            //el.parentNode.replaceChild(elClone, el);
            // 保存csdn的网页再次打开会自动跳转到首页 https://github.com/adlered/CSDNGreener/issues/97
            $("[onerror]").remove();
            // CSDN重定向外链不能在新的窗口跳转 https://github.com/adlered/CSDNGreener/issues/80
            $("#article_content a[href]").attr("target", "_blank");
            // 搜索框优化
            //$("#toolbar-search-input").css("width", "calc(100% - 400px)");
            // 取消代码折叠
            $(".look-more-preCode").click();
            // 询问推荐是否有意义的问卷调查
            $("#recommendNps").remove();
            // 绿化设置
            common(6, 1);
            // 屏幕适配
            common(4, 1);
            // 评论
            common(1, 30);
            // 其它（包括复制增强）
            common(2, 20);
            // 顶部显示作者信息
            common(8, 1);
            // 博客及主页优化
            common(9, 10);

            // 启动持续清理
            adCleaner.startContinuousCleaning(2); // 文章页动态广告
            adCleaner.startContinuousCleaning(3); // 通用动态广告

        } else if (bbs.test(currentURL)) {
            l("正在优化论坛体验...");

            // 添加BBS论坛专用广告
            adCleaner.addCategories(['bbs', 'footer', 'modal']);

            // 执行清理
            adCleaner.clean(10);

            // 展开
            common(3, 50);

            // 启动持续清理
            adCleaner.startContinuousCleaning(3); // 通用动态广告

        } else if (download.test(currentURL)) {
            l("正在优化下载页体验...");

            // 添加下载页专用广告
            adCleaner.addCategory('download');

            // 执行清理
            adCleaner.clean(10);

            // 启动持续清理
            adCleaner.startContinuousCleaning(3); // 通用动态广告

        } else if (login.test(currentURL)) {
            l("正在优化登录页体验...");

            // 添加登录页专用广告
            adCleaner.addCategory('login');

            // 执行清理
            adCleaner.clean(10);

            // 启动持续清理
            adCleaner.startContinuousCleaning(3); // 通用动态广告

        } else if (zone.test(currentURL)) {
            l("正在优化个人空间体验...");

            // 执行清理（只清理通用头部广告）
            adCleaner.clean(10);

            common(7, 10);

            // 启动持续清理
            adCleaner.startContinuousCleaning(3); // 通用动态广告
        } else if (blink.test(currentURL)) {
            l("正在优化个人动态体验...");
        } else if (link.test(currentURL)) {
            // 跳过 CSDN 的 link 页面
            var url = new URL(window.location.href)
            var target = url.searchParams.get('target')
            window.location.href = target
        } else {
            l("哦豁，好偏门的页面，我来试着优化一下哦...");

            // 展开全文
            $('.readmore_btn').click();

            // 添加多种页面的广告
            adCleaner.addCategories(['homepage', 'sidebar', 'article', 'footer', 'blogHome', 'bbs', 'download', 'cloud']);

            // 特殊处理
            $(".feed_company").parent().remove();
            $(".fouce_close_btn").click();

            // 执行清理
            adCleaner.clean(10);
        }
        setTimeout(function() {
            progressor.done();
        }, 0);

        // 使用CopyEnhancer增强代码复制功能
        copyEnhancer.enhanceCodeCopy();

        stopTimeMilli = Date.now();
        l("优化完毕! 耗时 " + (stopTimeMilli - startTimeMilli) + "ms");
    }, 0);
})();

function l(log) {
    console.log("[CSDNGreener] " + log);
}

function e(error) {
    console.error("[CSDNGreener] " + error);
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
            try {
                document.getElementById("btnMoreComment").click();
            } catch (e) {}
            // 删除查看更多按钮
            $("#btnMoreComment").parent("div.opt-box").remove();
            // 展开内容
            $("div.comment-list-box").css("max-height", "none");
            // 隐藏登录遮罩层和登录框（使用hide而不是remove，保留给用户主动登录）
            $(".login-mark").hide();
            $(".login-box").hide();
        } else if (num === 2) {
            // 挡住评论的"出头推荐"
            if ($(".recommend-box").length > 1) {
                $(".recommend-box")[0].remove();
            }
            // 去除推广广告
            $("li[data-type='ad']").remove();

            // 使用CopyEnhancer模块应用所有复制增强功能
            copyEnhancer.applyAll();

            // 页头广告
            try {
                document.getElementsByClassName("column-advert-box")[0].style.display="none";
            } catch (e) {}
            // 自动检测是否有目录，如果没有则删除右边栏，文章居中
            if ($(".recommend-right_aside").html() && $(".recommend-right_aside").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            } else if ($(".recommend-right_aside").html() && $("#recommend-right").html().replace(/[\r\n]/g, "").replace(/(\s)/g, "") === "") {
                $("#rightAside").remove();
            }
            // 登录按钮文字太多，修改
            $("a").each(function() {
                if ($(this).attr('href') === 'https://passport.csdn.net/account/login') {
                    $(this).html('登入');
                }
            });
            // 顶栏广告
            $("li").each(function(){
                let self = $(this);
                let dataType = self.attr('data-sub-menu-type');
                if (dataType === 'vip') {
                    self.remove();
                }
                let dataTitle = self.attr('title');
                if (dataTitle === '高价值源码课程分享' || dataTitle === '系统学习·问答·比赛' || dataTitle === '简单高效优惠的云服务') {
                    self.remove();
                }
            });
            // 顶栏VIP选项
            $('.toolbar-subMenu-box').find("[href='https://mall.csdn.net/vip']").parent().remove();

            // 清理顶部导航栏，只保留"博客"和"社区"
            $('.toolbar-menus.csdn-toolbar-fl > li').each(function() {
                const $li = $(this);
                const title = $li.attr('title') || '';
                const text = $li.text().trim();

                // 保留"博客"和"社区"，删除其他所有项
                if (title.indexOf('阅读深度') === -1 &&
                    title.indexOf('DevPress') === -1 &&
                    text.indexOf('博客') === -1 &&
                    text.indexOf('社区') === -1) {
                    $li.remove();
                }
            });
        } else if (num == 3) {
            //论坛自动展开
            $(".js_show_topic").click();
        } else if (num == 4) {
            /** 配置控制 - 使用新的ConfigManager **/
            // 从新的ConfigManager读取当前版式
            const currentLayout = configManager.get('layout') || 'ai';

            // 设置单选框状态
            $("#scr-ai").prop("checked", currentLayout === 'ai');
            $("#scr-sm").prop("checked", currentLayout === 'sm');
            $("#scr-md").prop("checked", currentLayout === 'md');
            $("#scr-lg").prop("checked", currentLayout === 'lg');
            $("#scr-fo").prop("checked", currentLayout === 'fo');
            $("#scr-hd").prop("checked", currentLayout === 'hd');

            // 版式已在初始化时应用，这里不需要重复应用CSS
            // layoutEngine.apply() 已在脚本加载时执行

            // 屏幕尺寸单选监听 - 移除实时预览，只在点击保存时才应用
            // 版式单选按钮不需要额外的事件处理，点击时会自动改变checked状态
            // 统一在saveConfig()中读取并保存
            // 判断是否为登录状态
            if ($('.toolbar-btn-loginfun').text() === '登录') {
                    // 未登录删除无用按钮
                    $("a:contains('消息')").parent().parent()[0].remove();
                    $(".toolbar-btn-collect").remove();
                    $(".toolbar-btn-write").remove();
                    $(".toolbar-btn-mp").remove();
            }
            $("a:contains('会员12.12')").parent().remove();
            $(".toolbar-btn-vip").remove();
        } else if (num == 5) {
            // 隐藏登录遮罩层和登录框（使用hide而不是remove，保留给用户主动登录）
            $(".login-mark").hide();
            $(".login-box").hide();
        } else if (num == 6) {
            let did = false;
            let configHTML = '';

            // 新UI结构 - 标题头部
            configHTML += '<div class="configContainer">';
            configHTML += '<div class="config-header">';
            configHTML += '<p class="title">⚙️ CSDNGreener 设置面板</p>';
            configHTML += '<p style="margin: 5px 0 0 0; font-size: 13px; opacity: 0.9;">V' + version + ' | <a href="https://github.com/adlered/CSDNGreener" target="_blank" style="color: white;">GitHub</a> | <a href="//shang.qq.com/wpa/qunwpa?idkey=d7ad6ead3f57722e7f00a4281ae75dbac2132c5a8cf321992d57309037fcaf63" target="_blank" style="color: white;">QQ群:1042370453</a></p>';
            configHTML += '</div>';

            configHTML += '<div class="config-grid">';

            // 版式设置区域 - 第一行，上边直角
            configHTML += '<div class="config-section" style="border-radius: 0 0 14px 14px;">';
            configHTML += '<span class="bold">📐 屏幕版式适配</span>';
            configHTML += '<div style="display: grid; gap: 8px;">';
            configHTML += '<label style="color: #22c55e; font-weight: bold;"><input name="displayMode" type="radio" value="ai" id="scr-ai" /> ⭐⭐⭐ 智能模式 (推荐默认)</label>';
            configHTML += '<label><input name="displayMode" type="radio" value="sm" id="scr-sm" /> 平铺模式 (< 1200px)</label>';
            configHTML += '<label><input name="displayMode" type="radio" value="md" id="scr-md" /> 适应模式 (1200-1380px)</label>';
            configHTML += '<label><input name="displayMode" type="radio" value="lg" id="scr-lg" /> 居中模式 (1380-1550px)</label>';
            configHTML += '<label><input name="displayMode" type="radio" value="fo" id="scr-fo" /> 沉浸模式 (无侧栏)</label>';
            configHTML += '<label style="color: #ff6b35; font-weight: bold;"><input name="displayMode" type="radio" value="hd" id="scr-hd" /> ⭐ 高分辨率模式 (1920px+)</label>';
            configHTML += '</div>';
            configHTML += '</div>';

            // 通用设定 - 第一行，上边直角
            configHTML += '<div class="config-section" style="border-radius: 0 0 14px 14px;">';
            configHTML += '<span class="bold">🎨 通用设定</span>';
            configHTML += '<p style="margin-bottom: 10px; font-size: 13px;"><strong>自定义背景图：</strong></p>';
            configHTML += '<input type="text" id="backgroundImgUrl" placeholder="图片URL或Base64" style="border-radius: 4px; border: 1px solid #d1d5db; padding: 8px; width: 100%; margin-bottom: 8px; font-size: 13px;">';
            configHTML += '<input accept="image/*" id="upload_bg" type="file" style="margin-bottom: 15px; font-size: 12px;">';
            configHTML += '<label><input type="checkbox" id="toggle-recommend-button"> 显示推荐内容</label>';
            configHTML += '<label><input type="checkbox" id="toggle-shop-button"> 显示小店</label>';
            configHTML += '<label><input type="checkbox" id="toggle-whitetheme-button"> 白色主题 & Dark Reader兼容</label>';
            configHTML += '<label><input type="checkbox" id="toggle-autosize-button"> 宽度自动适应</label>';
            configHTML += '<label><input type="checkbox" id="toggle-autohidetoolbar-button"> 向下滚动自动隐藏顶栏</label>';
            configHTML += '<label><input type="checkbox" id="toggle-autohidebottombar-button"> 始终隐藏底栏</label>';
            configHTML += '<label><input type="checkbox" id="toggle-writeblog-button"> 显示发布按钮</label>';
            configHTML += '</div>';

            // 右侧栏定制 - 横向多列布局
            configHTML += '<div class="config-section">';
            configHTML += '<span class="bold">📌 右侧栏定制</span>';
            configHTML += '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px 15px; margin-top: 10px;">';
            configHTML += '<label><input type="checkbox" id="toggle-authorcard-button"> 显示作者名片</label>';
            configHTML += '<label><input type="checkbox" id="toggle-searchblog-button"> 显示搜博主文章</label>';
            configHTML += '<label><input type="checkbox" id="toggle-newarticle-button"> 显示最新文章</label>';
            configHTML += '<label><input type="checkbox" id="toggle-hotarticle-button"> 显示热门文章</label>';
            configHTML += '<label><input type="checkbox" id="toggle-newcomments-button"> 显示最新评论</label>';
            configHTML += '<label><input type="checkbox" id="toggle-kindperson-button"> 显示分类专栏</label>';
            configHTML += '<label><input type="checkbox" id="toggle-recommendarticle-button"> 显示推荐文章</label>';
            configHTML += '<label><input type="checkbox" id="toggle-archive-button"> 显示归档</label>';
            configHTML += '<label style="grid-column: 1 / -1;"><input type="checkbox" id="toggle-content-button"> 显示目录</label>';
            configHTML += '</div>';
            configHTML += '</div>';

            // 配置管理
            configHTML += '<div class="config-section" style="border-left-color: #8b5cf6;">';
            configHTML += '<span class="bold">💾 配置管理</span>';
            configHTML += '<p style="font-size: 12px; color: #6b7280; margin-bottom: 10px;">备份和恢复您的个性化设置</p>';
            configHTML += '<div style="display: flex; flex-direction: column; gap: 10px;">';
            configHTML += '<button id="exportConfigBtn" class="saveButton" style="width: 100%;">📥 导出配置</button>';
            configHTML += '<button id="importConfigBtn" class="saveButton" style="width: 100%;">📤 导入配置</button>';
            configHTML += '<button id="resetConfigBtn" class="saveButton danger" style="width: 100%;">🔄 重置配置</button>';
            configHTML += '</div>';
            configHTML += '<input type="file" id="importConfigFile" accept=".json" style="display: none;">';
            configHTML += '</div>';

            configHTML += '</div>';

            // 社区推广和支持作者 - 横向布局
            configHTML += '<div class="config-section" style="text-align: center;">';
            configHTML += '<div style="display: flex; gap: 20px; align-items: center; justify-content: center;">';

            // 摸鱼社区
            configHTML += '<div style="flex: 1; max-width: 45%;">';
            configHTML += '<p style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">💬 摸鱼社区</p>';
            configHTML += '<p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">欢迎加入作者建设的技术社区</p>';
            configHTML += '<a href="https://fishpi.cn" target="_blank"><img src="https://s2.loli.net/2022/01/05/1HpBZUraMcR8ist.png" style="width:100%; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);"/></a>';
            configHTML += '</div>';

            // 给个Star
            configHTML += '<div style="flex: 1; max-width: 45%;">';
            configHTML += '<p style="font-size: 16px; font-weight: bold; margin-bottom: 8px;">⭐ 支持作者</p>';
            configHTML += '<p style="font-size: 12px; color: #6b7280; margin-bottom: 12px;">您的支持是我们最大的动力</p>';
            configHTML += '<a href="https://github.com/adlered/CSDNGreener" target="_blank" class="giveMeOneStar" style="display: flex; align-items: center; justify-content: center; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white; text-decoration: none; font-size: 18px; font-weight: bold; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: all 0.3s;">' + star_svg_1 + ' <span style="margin-left: 10px;">在 GitHub 给个 Star</span></a>';
            configHTML += '</div>';

            configHTML += '</div>';
            configHTML += '<p style="font-size: 11px; color: #9ca3af; margin-top: 15px;">CSDNGreener 不提供会员破解功能，仅用于前端优化</p>';
            configHTML += '</div>';

            // 底部按钮栏
            configHTML += '<div class="config-footer">';
            configHTML += '<button class="saveButton cancel" onclick="cancelConfig();">取消</button>';
            configHTML += '<button class="saveButton" onclick="saveConfig();">💾 保存设置</button>';
            configHTML += '</div>';

            configHTML += '</div><div id="fade" class="black_overlay"></div>';

            // 绿化器设定
            $("body").after('<div id="configContent" class="white_content">' + configHTML);

            /** 配置控制 **/
            // 推荐内容
            $(".blog-content-box").append("<br><div class='blog-content-box' id='recommendSwitch' style='text-align: right;'></div>");
            $("#recommendSwitch:last").append('<input type="checkbox" id="toggle-button"> <label for="toggle-button" class="button-label"> <span class="circle"></span> <span class="text on">&nbsp;</span> <span class="text off">&nbsp;</span> </label>' +
                               '<p style="margin-top: 5px; font-size: 13px;">显示推荐内容</p>');
            let recommendValue = configManager.get("display.recommend");
            if (!recommendValue) {
                $(".recommend-box").hide();
            }
            if (recommendValue) {
                $("#toggle-recommend-button").prop("checked", true);
                $("#toggle-button").prop("checked", true);
            } else {
                $("#toggle-recommend-button").prop("checked", false);
                $("#toggle-button").prop("checked", false);
            }

            // 推荐内容按钮点击事件 - 切换显示并保存状态
            $("#toggle-button").off("change").on("change", function() {
                const isChecked = $(this).prop("checked");
                configManager.set("display.recommend", isChecked);
                if (isChecked) {
                    $(".recommend-box").fadeIn(300);
                } else {
                    $(".recommend-box").fadeOut(300);
                }
            });

            // 显示小店
            let shopValue = configManager.get('display.shop');
            if(!shopValue){
                $("#csdn-shop-window").hide();
                $("#csdn-shop-window-top").hide();
            }
            if (shopValue) {
                $("#toggle-shop-button").prop("checked", true);
            } else {
                $("#toggle-shop-button").prop("checked", false);
            }
            // 显示作者名片
            let authorCardValue = configManager.get("sidebar.authorCard");
            if (authorCardValue) {
                // 博主信息
                $('#recommend-right').append($('#asideProfile').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideProfile').attr("style", "margin-top: 8px; width: 300px;");
                }, 500);
            }
            if (authorCardValue) {
                $("#toggle-authorcard-button").prop("checked", true);
            } else {
                $("#toggle-authorcard-button").prop("checked", false);
            }

            // 强制白色主题
            let whiteThemeValue = configManager.get("display.whiteTheme");
            if (whiteThemeValue) {
                // 背景删除
                $('.main_father').attr('style', 'background-image: none !important; background-color: #f5f6f7; background: #f5f6f7;');
                $('[href^="https://csdnimg.cn/release/phoenix/template/themes_skin/"]').attr('href', 'https://csdnimg.cn/release/phoenix/template/themes_skin/skin-technology/skin-technology-6336549557.min.css');
                $('#csdn-toolbar').removeClass('csdn-toolbar-skin-black');
                $('.csdn-logo').attr('src', '//csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1');
                $('html').css('background-color', '#f5f6f7');
            }
            if (whiteThemeValue) {
                $("#toggle-whitetheme-button").prop("checked", true);
            } else {
                $("#toggle-whitetheme-button").prop("checked", false);
            }

            // 背景图
            let backgroundImage = configManager.get("custom.backgroundImage");
            if (backgroundImage !== "") {
                $("#backgroundImgUrl").val(backgroundImage);
                $(".main_father").attr('style', 'background-image:url(' + backgroundImage + ');background-attachment:fixed;background-size:100%;');
            }
            $("#upload_bg").on('change', function() {
                let file = $("#upload_bg")[0].files[0];
                let reader = new FileReader();
                reader.onloadend = function (e) {
                    let base64 = e.target.result;
                    $('#backgroundImgUrl').val(base64);
                    $('#backgroundImgUrl').change();
                }
                reader.readAsDataURL(file);
            });

            // 搜博主文章
            let searchBlogValue = configManager.get("sidebar.searchBlog");
            if(searchBlogValue) {
                $('#recommend-right').append($('#asideSearchArticle').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideSearchArticle').attr("style", "margin-top: 8px; width: 300px;");
                    var i = $("#search-blog-words")
                      , n = $(".btn-search-blog");
                    i.keyup(function(t) {
                        var n = t.keyCode;
                        if (13 == n) {
                            var e = encodeURIComponent(i.val());
                            if (e) {
                                var s = "//so.csdn.net/so/search/s.do?q=" + e + "&t=blog&u=" + username;
                                window.open(s)
                            }
                        }
                    });
                    n.on("click", function(t) {
                        var n = encodeURIComponent(i.val());
                        if (n) {
                            var e = "//so.csdn.net/so/search/s.do?q=" + n + "&t=blog&u=" + username;
                            window.open(e)
                        }
                        t.preventDefault()
                    });
                }, 500);
            }
            if (searchBlogValue) {
                $("#toggle-searchblog-button").prop("checked", true);
            } else {
                $("#toggle-searchblog-button").prop("checked", false);
            }

            // 最新文章
            let newArticleValue = configManager.get("sidebar.newArticle");
            if (newArticleValue) {
                $('#recommend-right').append($('#asideNewArticle').prop("outerHTML"));
                setTimeout(function() {
                    $('#asideNewArticle').attr("style", "margin-top: 8px; width: 300px;");
                }, 0);
            }
            if (newArticleValue) {
                $("#toggle-newarticle-button").prop("checked", true);
            } else {
                $("#toggle-newarticle-button").prop("checked", false);
            }

            // 热门文章
            let hotArticleValue = configManager.get("sidebar.hotArticle");
            if (hotArticleValue) {
                $('#recommend-right').append($("#asideHotArticle").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideHotArticle').attr("style", "margin-top: 8px; width: 300px;");
                    $('#asideHotArticle img').remove();
                }, 0);
            }
            if (hotArticleValue) {
                $("#toggle-hotarticle-button").prop("checked", true);
            } else {
                $("#toggle-hotarticle-button").prop("checked", false);
            }

            // 最新评论
            let newCommentsValue = configManager.get("sidebar.newComments");
            if (newCommentsValue) {
                $('#recommend-right').append($("#asideNewComments").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideNewComments').attr("style", "margin-top: 8px; width: 300px;");
                    $(".comment.ellipsis").attr("style", "max-height: none;");
                    $(".title.text-truncate").attr("style", "padding: 0");
                }, 0);
            }
            if (newCommentsValue) {
                $("#toggle-newcomments-button").prop("checked", true);
            } else {
                $("#toggle-newcomments-button").prop("checked", false);
            }

            // 分类专栏
            let categoryValue = configManager.get("sidebar.category");
            if (!categoryValue) {
                setTimeout(function() {
                    $('#asideCategory').remove();
                    $('.kind_person').remove();
                }, 0);
            } else {
                $('#recommend-right').append($("#asideCategory").prop("outerHTML"));
                if ($("#asideCategory").length > 0) {
                    $('.kind_person').remove();
                } else {
                    $('.kind_person').attr("style", "margin-top: 8px; width: 300px; height:255px;");
                }
                setTimeout(function() {
                    $('#asideCategory').attr("style", "margin-top: 8px; width: 300px; display:block !important;");
                    $("a.flexible-btn").click(function() {
                        $(this).parents('div.aside-box').removeClass('flexible-box');
                        $(this).parents("p.text-center").remove();
                    })
                }, 500);
            }
            if (categoryValue) {
                $("#toggle-kindperson-button").prop("checked", true);
            } else {
                $("#toggle-kindperson-button").prop("checked", false);
            }

            // 目录
            let contentValue = configManager.get("sidebar.content");
            if (!contentValue) {
                setTimeout(function() {
                    $('.align-items-stretch.group_item').parent().remove();
                }, 0);
            }
            if (contentValue) {
                $("#toggle-content-button").prop("checked", true);
            } else {
                $("#toggle-content-button").prop("checked", false);
            }

            // 推荐文章
            let recommendArticleValue = configManager.get("sidebar.recommendArticle");
            if (!recommendArticleValue) {
                setTimeout(function() {
                    $('.recommend-list-box').remove();
                }, 0);
            } else {
                setTimeout(function() {
                    $('.recommend-list-box').attr("style", "margin-top: 8px; width: 300px; height:255px;");
                }, 0);
            }
            if (recommendArticleValue) {
                $("#toggle-recommendarticle-button").prop("checked", true);
            } else {
                $("#toggle-recommendarticle-button").prop("checked", false);
            }

            // 归档
            let archiveValue = configManager.get("sidebar.archive");
            if (!archiveValue) {
                setTimeout(function() {
                    $('#asideArchive').remove();
                }, 0);
            } else {
                $('#recommend-right').append($("#asideArchive").prop("outerHTML"));
                setTimeout(function() {
                    $('#asideArchive').attr("style", "margin-top: 8px; width: 300px; display:block !important;");
                }, 500);
            }
            if (archiveValue) {
                $("#toggle-archive-button").prop("checked", true);
            } else {
                $("#toggle-archive-button").prop("checked", false);
            }

            // 自动靠左平铺
            let autoResizeValue = configManager.get("display.autoResize");
            if (autoResizeValue) {
                setInterval(function () {
                    // 文章宽度自适应
                    if (window.innerWidth < 1100) {
                        // 删除原有响应式样式
                        $(".main_father").removeClass("justify-content-center");
                        $("article").width(window.innerWidth - 150);
                        GM_addStyle(`
                        main{
                            width: auto!important;
                            float: none!important;
                            max-width: 90vw;
                        }
                        main article img{
                            margin: 0 auto;
                            max-width: 100%;
                            object-fit: cover;
                        }
                        `);
                        did = true;
                    } else {
                        if (did === true) {
                            $("article").removeAttr("style");
                            did = false;
                        }
                    }
                }, 500);
            }
            if (autoResizeValue) {
                $("#toggle-autosize-button").prop("checked", true);
            } else {
                $("#toggle-autosize-button").prop("checked", false);
            }

            // 自动隐藏顶栏
            let autoHideToolbarValue = configManager.get("toolbar.autoHide");
            if (autoHideToolbarValue) {
                $(window).scroll(function() {
                    if (document.documentElement.scrollTop > 100) {
                	    let scrollS = $(this).scrollTop();
                	    if (scrollS >= windowTop) {
                	    	$('#csdn-toolbar').slideUp(100);
                	    	windowTop = scrollS;
                	    } else {
                	    	$('#csdn-toolbar').slideDown(100);
                	    	windowTop = scrollS;
                	    }
                    }
                });
            }
            if (autoHideToolbarValue) {
                $("#toggle-autohidetoolbar-button").prop("checked", true);
            } else {
                $("#toggle-autohidetoolbar-button").prop("checked", false);
            }

            // 自动隐藏底栏
            let autoHideBottomBarValue = configManager.get("bottomBar.alwaysHide");
            if (autoHideBottomBarValue) {
                $("#toolBarBox .left-toolbox").css({
                	position: "relative",
                	left: "0px",
                	bottom: "0",
                	width: $("#toolBarBox").width() + "px"
                });
                $(window).scroll(function() {
                	$("#toolBarBox .left-toolbox").css({
                		position: "relative",
                		left: "0px",
                		bottom: "0",
                		width: $("#toolBarBox").width() + "px"
                	})
                });
            }
            if (autoHideBottomBarValue) {
                $("#toggle-autohidebottombar-button").prop("checked", true);
            } else {
                $("#toggle-autohidebottombar-button").prop("checked", false);
            }

            // 创作中心按钮
            let writeBlogValue = configManager.get("toolbar.showWrite");
            if (!writeBlogValue) {
                $(".toolbar-btn-write").remove();
            }
            if (writeBlogValue) {
                $("#toggle-writeblog-button").prop("checked", true);
            } else {
                $("#toggle-writeblog-button").prop("checked", false);
            }

            // 右侧滚动条
            /** setTimeout(function () {
                let rightSideHeight = 0;
                let pageHeight = $(window).height();
                rightSideHeight += getHeight($('.align-items-stretch.group_item').parent());
                rightSideHeight += getHeight($("#asideProfile"));
                rightSideHeight += getHeight($("#asideSearchArticle"));
                rightSideHeight += getHeight($("#asideNewArticle"));
                rightSideHeight += getHeight($("#asideHotArticle"));
                rightSideHeight += getHeight($("#asideNewComments"));
                rightSideHeight += getHeight($("#asideCategory"));
                rightSideHeight += getHeight($("#asideArchive"));
                console.debug("Right side total height: " + rightSideHeight);
                console.debug("Page height: " + pageHeight);
                if (rightSideHeight > pageHeight) {
                    $('#recommend-right').css("overflow", "scroll");
                }
            }, 1500); */

            // ==================== V5.0.0新增：配置导入/导出功能 ====================
            // 导出配置
            $("#exportConfigBtn").click(function() {
                try {
                    const configJSON = configManager.export();
                    const blob = new Blob([configJSON], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `csdngreener-config-${new Date().toISOString().slice(0,10)}.json`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                    alert('✅ 配置导出成功！');
                    Logger.log('配置已导出');
                } catch (err) {
                    alert('❌ 配置导出失败：' + err.message);
                    Logger.error('配置导出失败：' + err);
                }
            });

            // 导入配置
            $("#importConfigBtn").click(function() {
                $("#importConfigFile").click();
            });

            $("#importConfigFile").change(function(e) {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = function(event) {
                    try {
                        const jsonString = event.target.result;
                        configManager.import(jsonString);
                        alert('✅ 配置导入成功！页面将刷新以应用新配置。');
                        Logger.log('配置已导入');
                        setTimeout(function() {
                            location.reload();
                        }, 500);
                    } catch (err) {
                        alert('❌ 配置导入失败：' + err.message + '\n请确保选择的是有效的配置文件。');
                        Logger.error('配置导入失败：' + err);
                    }
                };
                reader.onerror = function() {
                    alert('❌ 文件读取失败，请重试。');
                };
                reader.readAsText(file);

                // 重置file input以允许重复导入同一文件
                $(this).val('');
            });

            // 重置配置
            $("#resetConfigBtn").click(function() {
                if (confirm('⚠️ 确定要重置所有配置吗？\n这将恢复到默认设置，无法撤销！')) {
                    try {
                        configManager.reset();
                        alert('✅ 配置已重置！页面将刷新。');
                        Logger.log('配置已重置');
                        setTimeout(function() {
                            location.reload();
                        }, 500);
                    } catch (err) {
                        alert('❌ 配置重置失败：' + err.message);
                        Logger.error('配置重置失败：' + err);
                    }
                }
            });
            // ==================== 配置导入/导出功能结束 ====================

        } else if (num === 7) {
            $(".me_r")[1].remove();
        } else if (num === 8) {
            /* $(".article-bar-top").append("<br>");
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
            } */
            $(".blog_container_aside").remove();
            $(".toolbox-left > .profile-attend").remove();

            // 标题消息提醒去除
            let title = document.title.replace(/^\(.*?\)/g, "");
            document.title = title;
            // 评论复制按钮
            $('.comment-box').prepend('<button class="comment-hidden-text" style="display:none">COPY BUTTON</button>');
            $('.new-opt-box.new-opt-box-bg').prepend('<a class="btn btn-report btn-copy" onclick="javascript:$(\'.comment-hidden-text\').attr(\'data-clipboard-text\',$(this).parent().parent().find(\'.new-comment\').text())">复制评论</a><span class="btn-bar"></span>');
            $('.btn-copy').click(function() {
                var clipboard = new ClipboardJS('.comment-hidden-text');
                clipboard.on('success', function(e) {
                    console.info('Action:', e.action);
                    console.info('Text:', e.text);
                    console.info('Trigger:', e.trigger);
                    e.clearSelection();
                    $('.btn-copy').html('成功');
                    setTimeout(function() {
                        $('.btn-copy').html('复制评论');
                    }, 1000);
                });
                clipboard.on('error', function(e) {
                    console.error('Action:', e.action);
                    console.error('Trigger:', e.trigger);
                    $('.btn-copy').html('失败，请手动复制');
                    setTimeout(function() {
                        $('.btn-copy').html('复制评论');
                    }, 1000);
                });
                $(".comment-hidden-text").click();
                clipboard.destroy();
            });
        } else if (num === 9) {
            // 删除CSDN LOGO悬浮后的二维码
            $(".toolbar-subMenu > img").parent().remove();
        }
    }, 100);
    progressor.incProgress(10);
}

function showTips() {
	var config = {
		content: "欢迎使用 CSDNGreener，绿化设定按钮在这里！<br><a onclick='javascript:$(\".trips\").remove();'>好的，以后不再提示我</a>",
		type: "html",
		alignTo: ["bottom", "right"],
		trigger: "show",
		isclose: false,
		color: ["#B2E281", "#B2E281"]
	};
	$("#greenerSettings").showTips(config);
}

function getHeight(element) {
    let outerHeight = element.outerHeight();
    if (outerHeight === null) {
        return 0;
    }
    return outerHeight;
}

function isFirefox() {
    return navigator.userAgent.indexOf("Firefox") > 0;
}
