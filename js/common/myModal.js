/**
 * myModal
 * Author:Wilbert
 *   Date:2017/10/21
 */
define([
    "jquery"
],function($){

    //开发一个基于jquery+bootstrap的模态框插件
    $.fn.extend({
        myModal:function(){
            this.on("hidden.bs.modal",function(){
                //移除模态框容器
                this.remove();

            }).appendTo("body").modal();


            //实现链式编程    -->执行完该方法之后，用户还可以再去调用其他的jquery操作方法
            return this;

        }
    });

    //$("body").myModal();
    //$("p").myModal();




    //关于jquery插件，分类2种类型
    //1、工具类插件：jquery.cookie.js  -->$.cookie  $.removeCookie     $.xxx
    //如果要开发一个工具类插件的话，就可以直接给$添加 属性or方法
    //                          也可以调用 $.extend(  {  a:function(){},b:function(){}  }  )
    //                                      -->相当于给$添加了a和b2个方法

    //2、DOM操作类插件：bootstrap.js   -->$(...).modal();
    //要想开发一个DOM操作类插件，可以直接给$.fn($.prototype)添加  "属性or方法"
    //                  也可以 $.fn.extend( {  f1:function(){},f2:function(){}  }  )
})