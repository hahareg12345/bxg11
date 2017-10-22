/**
 * 添加课程模块
 * Author:Wilbert
 *   Date:2017/10/22
 */
define([
    "jquery",
    "text!tpls/courseAddTpl.html"
], function ($,courseAddTpl) {

    return function () {

        $(courseAddTpl).myModal();
    }
})