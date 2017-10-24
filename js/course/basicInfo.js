/**
 * 课程基本信息模块
 * Author:Wilbert
 *   Date:2017/10/24
 */
define([
    "jquery",
    "text!tpls/courseBasicInfoTpl.html",
    "art"
], function ($, courseBasicInfoTpl, art) {

    //1、在课程列表中正确的获取cs_id的值
    //2、把cs_id的值传入到当前函数中
    //3、在当前函数中通过形参接收该id值
    //4、之后把id值作为ajax请求的参数传入到服务器中
    //5、之后就可以正确的获取到服务器返回的数据
    return function (id) {

        $.ajax({
            url: "/api/course/basic",
            type: "get",
            data: {
                cs_id: id
            },
            success: function (res) {
                if (res.code != 200) throw new Error(res.msg);

                //成功获取了数据
                var courseBasicInfo = art.render(courseBasicInfoTpl, res.result)

                //把编译之后的内容放到页面中
                $(".main").html(courseBasicInfo);

            }
        })


    }
})