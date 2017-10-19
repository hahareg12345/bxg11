/**
 * 添加讲师模块
 * Author:Wilbert
 *   Date:2017/10/18
 */
define([
    "jquery",
    "text!tpls/teacherAddTpl.html",

],function($,teacherAddTpl){

    return function(){

        var $html=$(teacherAddTpl);

        $html.on("hidden.bs.modal",function(){
            //移除模态框容器
            $(this).remove();       //也可以使用：$html.remove();

        }).on("submit","form",function(e){

            //阻止页面刷新
            e.preventDefault();

            //获取表单数据
            var formData=$(this).serialize();       //表单都应该具有指定的name属性

            //ajax提交
            $.ajax({
                url:"/api/teacher/add",
                type:"post",
                data:formData,
                success:function(res){
                    if(res.code!=200) throw new Error(res.msg);

                    //隐藏模态框
                    $html.modal("hide");


                    //模拟点击讲师管理按钮，实现刷新讲师列表
                    $(".list-group a[v=teacher]").trigger("click");


                }
            })

        }).appendTo("body").modal();
    }
})