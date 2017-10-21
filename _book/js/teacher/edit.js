/**
 * 编辑讲师模块
 * Author:Wilbert
 *   Date:2017/10/19
 */
define([
    "jquery",
    "text!tpls/teacherEditTpl.html",
    "art"
], function ($, teacherEditTpl, art) {


    return function (id) {
        $.ajax({
            url: "/api/teacher/edit",
            type: "get",
            data: {tc_id: id},
            success: function (res) {
                if (res.code != 200) throw new Error(res.msg);

                //成功的获取数据
                //-->编译模板
                var teacherEdit = art.render(teacherEditTpl, res.result);

                //-->把编译成功之后的内容放到页面中
                var $teacherEdit = $(teacherEdit)
                    .on("submit","form",function(e){
                        e.preventDefault();

                        //a、获取表单数据
                        var formData=$(this).serialize();
                        //b、进行ajax请求提交数据
                        $.ajax({
                            url:"/api/teacher/update",
                            type:"post",
                            data:formData,
                            success:function(res){
                                if(res.code!=200) throw new Error(res.msg);

                                //隐藏模态框
                                $teacherEdit.modal("hide");

                                //刷新讲师列表
                                $(".list-group a[v=teacher]").trigger("click");

                            }
                        })

                    })
                    .on("hidden.bs.modal", function () {
                        //在模态框隐藏之后，移除模态框容器
                        $teacherEdit.remove();

                    })
                    .appendTo("body").modal();
            }
        })


    }
})