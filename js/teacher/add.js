/**
 * 添加讲师模块
 * Author:Wilbert
 *   Date:2017/10/18
 */
define([
    "jquery",
    "text!tpls/teacherAddTpl.html",

],function($,teacherAddTpl){

    return function(){

        var $html=$(teacherAddTpl);

        $html.on("hidden.bs.modal",function(){
            //移除模态框容器
            $(this).remove();       //也可以使用：$html.remove();

        }).appendTo("body").modal();
    }
})