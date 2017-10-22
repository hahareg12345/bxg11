/**
 * 这里是文档注释
 * Author:Wilbert
 *   Date:2017/10/21
 */
define([
    "jquery"
],function($){

    return function(){

        //获取用户登录的信息
        var userInfoStr=$.cookie("userInfo"); //sessionStorage.getItem("userInfo");     //'{ "tc_avatar":"...","tc_name":"..." }'

        //如果没有数据，就认为没有登录过，而该项目必须要登录才能访问，所以就跳转到登录页面
        if(!userInfoStr)    return location.href="login.html";



        var userInfo=JSON.parse(userInfoStr);

        //将数据放到页面中
        $(".profile img").attr("src",userInfo.tc_avatar);
        $(".profile .text-username").text(userInfo.tc_name);
    }
})