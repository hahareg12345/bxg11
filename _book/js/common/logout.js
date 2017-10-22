/**
 * 退出登录模块
 * Author:Wilbert
 *   Date:2017/10/21
 */
define([
    "jquery"
],function($){


    return function(){

        //实现退出登录的功能
        $(".link-logout").on("click",function(e){
            //a、阻止页面跳转
            e.preventDefault();

            //b、向服务器发送请求，告知服务器我要退出登录
            $.ajax({
                url:"/api/logout",
                type:"post",
                success:function(res){
                    if(res.code!=200) throw new Error(res.msg);

                    //c、移除cookie
                    $.removeCookie("userInfo");

                    //d、跳转到登录页
                    location.href="login.html";

                }
            })

        })
    }
})