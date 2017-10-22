/**
 * 入口文件
 * Author:Wilbert
 *   Date:2017/10/16
 */
require.config({
    //基础路径
    baseUrl: "js",

    paths: {
        //配置一些常用的第三方模块路径(不能有后缀，有了后缀会报错)
        jquery: "lib/jquery-2.1.4",
        bootstrap: "../assets/bootstrap/js/bootstrap",
        //arttemplate模板引擎
        art:"lib/template-web",

        //requirejs官方提供的加载html文件的插件
        text:"lib/text",

        //配置一些文件夹路径
        tpls: "../tpls",

        //配置日期控件的2个文件路径
        datetime:"../assets/bootstrap-datetimepicker/js/bootstrap-datetimepicker",
        datetimeLang:"../assets/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN",

        //配置jquery.cookie插件路径
        cookie:"lib/jquery.cookie",

        upload:"../assets/uploadify/jquery.uploadify"
    },
    shim: {
        //bootstrap将会在jquery整个文件读取完毕之后再去执行
        bootstrap: {
            deps: ["jquery"]
        },
        //要读取语言包，必须首先读取主文件
        datetimeLang:{
            deps:["datetime"]
        },
        upload:{
            deps:["jquery"]
        }

    }
});

//入口模块
require([
    "jquery",
    "teacher/list",
    "common/logout",
    "common/checkLogin",
    "category/list",        //分类列表
    "course/list",          //课程列表
    "course/add",           //添加课程
    "bootstrap",
    //导入日期控件的主文件
    "datetime",
    "datetimeLang",
    "cookie",
    "common/myModal",        //自定义的模态框组件
    "upload"

], function ($,teacherList,commonLogout,commonCheckLogin,categoryList,courseList,courseAdd) {

    //进入到验证用户是否登录模块  并且绑定 用户头像+用户名
    commonCheckLogin();
    


    //实现菜单切换
    $(".list-group").on("click", "a", function () {
        //根据菜单的内容决定要加载什么样的内容

        //a、获取v属性的值
        var value = $(this).attr("v");

        // if (value == "teacher") {
        //
        // } else if (value == "course") {
        //     $(".main").html("课程管理");
        // }else if(value=="addcourse"){
        //     $(".main").html("添加课程");
        // }


        switch(value){
            case "teacher":
                teacherList();

                break;
            case "course":
                courseList();

                break;
            case "addcourse":
                courseAdd();
                
                
                break;
            case "category":
                // $(".main").html("课程分类");

                categoryList();


                break;
            case "chart":
                $(".main").html("图表统计");
                break;
        }

        //改变按钮的背景
        $(this).addClass("active").siblings().removeClass("active");
    });

    //让浏览器默认点击讲师管理按钮        -->模拟点击讲师管理按钮
    $(".list-group a[v=teacher]").trigger("click");
    
    


    //退出登录模块
    commonLogout();

})