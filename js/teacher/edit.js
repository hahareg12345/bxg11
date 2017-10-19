/**
 * 编辑讲师模块
 * Author:Wilbert
 *   Date:2017/10/19
 */
define([
    "jquery",
    "text!tpls/teacherEditTpl.html"
],function($,teacherEditTpl){


    return function(){

        var $teacherEdit=$(teacherEditTpl).on("hidden.bs.modal",function(){
            //在模态框隐藏之后，移除模态框容器
            $teacherEdit.remove();

        }).appendTo("body").modal();
    }
})