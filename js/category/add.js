/**
 * 添加分类模块
 * Author:Wilbert
 *   Date:2017/10/21
 */
define([
    "jquery",
    "text!tpls/categoryAddTpl.html"
],function($,categoryAddTpl){


    return function(){

        var $categoryAdd=$(categoryAddTpl).myModal();


        // var $categoryAdd=$(categoryAddTpl).on("hidden.bs.modal",function(){
        //     //移除模态框容器
        //     $categoryAdd.remove();
        //
        // }).appendTo("body").modal();
    }
})