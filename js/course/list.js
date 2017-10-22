/**
 * 课程列表模块
 * Author:Wilbert
 *   Date:2017/10/22
 */
define([
    "jquery",
    "text!tpls/courseListTpl.html",
    "art"
],function($,courseListTpl,art){

    return function(){

        $.ajax({
            url:"/api/course",
            type:"get",
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);

                //把数据编译到模板中
                var courseList=art.render(courseListTpl,res);

                //把编译成功之后的数据放到页面中
                $(".main").html(courseList);

            }
        })



    }
})