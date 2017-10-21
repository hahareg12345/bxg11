/**
 * 分类列表模块
 * Author:Wilbert
 *   Date:2017/10/21
 */
define([
    "jquery",
    "text!tpls/categoryListTpl.html",
    "art"
],function($,categoryListTpl,art){


    return function(){

        $.ajax({
            url:"/api/category",
            type:"get",
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);

                //成功的获取了数据-->编译模板
                var categoryList=art.render(categoryListTpl,res);

                //把编译成功之后的结果放到页面中
                $(".main").html(categoryList);
            }
        })


    }
})