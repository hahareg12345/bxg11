/**
 * 课时信息列表 模块
 * Author:Wilbert
 *   Date:2017/10/24
 */
define([
    "jquery",
    "text!tpls/courseTimeListTpl.html",
    "art"
],function($,courseTimeListTpl,art){

    return function(id){

        $.ajax({
            url:"/api/course/lesson",
            type:"get",
            data:{
                cs_id:id
            },
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);

                //编译模板
                var courseTimeList=art.render(courseTimeListTpl,res.result);

                //把编译之后的内容放到页面中
                $(".main").html(courseTimeList);
            }
        })


    }
})