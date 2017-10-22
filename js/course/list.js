/**
 * 课程列表模块
 * Author:Wilbert
 *   Date:2017/10/22
 */
define([
    "jquery",
    "text!tpls/courseListTpl.html"
],function($,courseListTpl){

    return function(){


        $(".main").html(courseListTpl);
    }
})