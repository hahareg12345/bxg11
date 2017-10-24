/**
 * 课程列表模块
 * Author:Wilbert
 *   Date:2017/10/22
 */
define([
    "jquery",
    "text!tpls/courseListTpl.html",
    "art",
    "course/image",          //"./image" 依赖课程图片模块   错误的写法："image"
    "course/basicInfo",      //"./basicInfo" 课程基本信息模块
    "courseTime/list"        //课时信息列表 模块
], function ($, courseListTpl, art, courseImage,courseBasicInfo,courseTimeList) {

    return function () {

        $.ajax({
            url: "/api/course",
            type: "get",
            success: function (res) {
                if (res.code != 200) throw new Error(res.msg);

                //把数据编译到模板中
                var courseList = art.render(courseListTpl, res);

                var $courseList = $(courseList);

                $courseList
                    .on("click", "a", function () {
                        //获取课程id
                        var id = $(this).parents(".media").attr("cs_id");

                        //把课程id传入课程图片模块
                        courseImage(id);
                    })
                    //课程基本信息
                    .on("click",".btn-basicinfo",function(){
                        var id=$(this).parents(".media").attr("cs_id");

                        courseBasicInfo(id);
                    })
                    .on("click",".btn-coursetime",function(){
                        var id=$(this).parents(".media").attr("cs_id");

                        courseTimeList(id);

                    })

                //把编译成功之后的数据放到页面中
                $(".main").html($courseList);

            }
        })


    }
})