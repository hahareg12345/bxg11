/**
 * 讲师列表模块
 * Author:Wilbert
 *   Date:2017/10/18
 */
define([
    "jquery",
    //用requireJS官方提供的text查看读取模板内容
    //text插件的路径 !  模板文件的路径(不能省略.html后缀名)
    "text!tpls/teacherListTpl.html",

    //arttemplate模板引擎
    "art",

    //"show"      //js/show     错误的写法

    //查看讲师模块
    "teacher/show",      //相当于："./show"

    //添加讲师
    "teacher/add",

    //编辑讲师
    "teacher/edit",

    //注销-启用讲师
    "teacher/status"
], function ($, teacherListTpl, art, teacherShow, teacherAdd, teacherEdit,teacherStatus) {

    return function () {




        //完成渲染讲师列表的功能？
        //-->把整个页面拼接出来？
        //  -->也就是把页面结构+页面数据整合在一起
        //      -->1、页面结构：模板引擎
        //      -->2、数据：ajax请求

        $('.main').html(teacherListTpl);

        $.ajax({
            url: "/api/teacher",
            type: "get",
            success: function (res) {
                // if(res.code!=200){
                //     console.log(res.msg);
                // }else{
                //     //请求成功
                // }

                // //优化后：
                // if(res.code!=200){
                //     console.log(res.msg);
                //     return;
                // }

                //优化2：
                if (res.code != 200)   return console.log(res.msg);


                //请求成功：最大的好处：减少了{}的嵌套
                var result = res.result;

                //把数据编译到模板中-->获取到真实的内容
                var html = art.render(teacherListTpl, {
                    r: result
                });

                //将事件绑定在这个新创建的特定的panel中
                var $panel = $(html);         //$("<input/>").appendTo("body")
                $panel
                    //查看讲师
                    .on("click", ".btn-show", function () {
                        //通过适当的方式获取该行对应的讲师id
                        var tc_id = $(this).parent().attr("tc_id");

                        teacherShow(tc_id);


                    })
                    //添加讲师
                    .on("click", ".btn-add", function () {
                        //添加讲师：
                        teacherAdd();

                    })
                    //编辑讲师
                    .on("click", ".btn-edit", function () {
                        //编辑讲师：

                        var tc_id = $(this).parent().attr("tc_id");
                        teacherEdit(tc_id);

                    })

                    //注销/启用讲师
                    .on("click",".btn-status",function(){

                        var $btn=$(this);

                        //a、获取页面中的数据
                        var tc_id=$(this).parent().attr("tc_id");
                        var tc_status=$(this).parent().attr("tc_status");

                        //b、把数据传到模块中处理
                        teacherStatus(tc_id,tc_status,function(status){
                            //这个形参status就接受了callback的实参

                            //把修改页面数据的过程放在这个位置

                            //要修改的其实用户最初点击注销-启用按钮所在的那一行数据

                            //a、修改状态列文本
                            $btn.parent().siblings(".tc-status").text(
                                status==0?"启用":"注销"
                            );
                            //b、修改按钮的文本
                            $btn.text(status==0?"注销":"启用");

                            //c、同步修改tc_status属性值
                            $btn.parent().attr("tc_status",status);

                        });
                    });

                //把真实的内容放到页面中
                $(".main").html($panel);

            }
        })
    }

})