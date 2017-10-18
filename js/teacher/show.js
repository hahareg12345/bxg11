/**
 * 查看讲师
 * Author:Wilbert
 *   Date:2017/10/18
 */
define([
    "jquery",
    "text!tpls/teacherShowTpl.html",     //查看讲师的模板
    "art"
],function($,teacherShowTpl,art){

    return function(id){

        $.ajax({
            url:"/api/teacher/view",
            type:"get",
            data:{
                tc_id:id
            },
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);

                //a、正常的获取了数据
                //b、把数据编译到模板中
                var html=art.render(teacherShowTpl,res.result);

                //c、把编译好的内容放到页面中，并且以模态框的形式呈现

                //备注：$html接受了右侧表达式的返回值，而因为右侧表达式实现了链式编程，所以右侧表达式的返回值也是模态框的容器
                var $html=$(html).on("hidden.bs.modal",function(){
                    //备注：bootstrap中给模态框绑定hidden.bs.modal事件，该事件会在模态框隐藏之后触发

                    //将本模态框的容器从页面中移除
                    //$(this).remove();

                    $html.remove();

                }).appendTo("body").modal();

            }
        })
    }
})