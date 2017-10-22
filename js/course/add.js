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

        var $courseAdd=$(courseAddTpl)
            .on("submit","form",function(e){
                e.preventDefault();

                //获取表单数据
                var formData=$(this).serialize();

                //发送ajax请求
                $.ajax({
                    url:"/api/course/create",
                    type:"post",
                    data:formData,
                    success:function(res){
                        if(res.code!=200) throw new Error(res.msg);

                        //隐藏模态框
                        $courseAdd.modal("hide");

                        //刷新课程列表-->模拟点击课程管理按钮
                        $(".list-group a[v=course]").trigger("click");

                    }
                })

            })
            .myModal();
    }
})