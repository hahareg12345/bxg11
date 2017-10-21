/**
 * 分类列表模块
 * Author:Wilbert
 *   Date:2017/10/21
 */
define([
    "jquery",
    "text!tpls/categoryListTpl.html",       //模板文件
    "art",           //模板引擎
    "./add"         //"category/add"  添加分类
], function ($, categoryListTpl, art,categoryAdd) {


    return function () {

        $.ajax({
            url: "/api/category",
            type: "get",
            success: function (res) {
                if (res.code != 200) throw new Error(res.msg);

                //成功的获取了数据-->编译模板
                var categoryList = art.render(categoryListTpl, res);

                var $categoryList = $(categoryList);

                $categoryList
                    //添加分类
                    .on("click", ".btn-add", function () {
                        categoryAdd();
                    })

                //把编译成功之后的结果放到页面中
                $(".main").html($categoryList);
            }
        })


    }
})