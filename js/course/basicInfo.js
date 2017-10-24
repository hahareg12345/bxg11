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
                var courseBasicInfo = art.render(courseBasicInfoTpl, res.result);

                var $courseBasicInfo=$(courseBasicInfo);

                $courseBasicInfo
                    .on("change",".select-top",function(){
                    //获取该下拉框的值
                    var v=$(this).val();

                    //根据v的值从而到服务器中获取该分类下面的分类数据(子级分类)
                    $.ajax({
                        url:"/api/category/child",
                        type:"get",
                        data:{
                            cg_id:v
                        },
                        success:function (res) {
                            if(res.code!=200) throw new Error(res.msg);

                            //成功获取了子级分类数据
                            //-->把这些子级分类数据放到第二个下拉框中
                            var str="";

                            res.result.forEach(function(v){
                                //将每一个数据拼接成一个大的字符串(每一个option标签)
                                var s="<option value='{{id}}'>{{name}}</option>";

                                //将里面的占位符替换为真实的数据
                                s=s.replace("{{id}}",v.cg_id).replace("{{name}}",v.cg_name);

                                //把真实的标签内容拼接到str中
                                str+=s;
                            });

                            //把拼接后的内容换到第二个下拉框中
                            $courseBasicInfo.find(".select-child").html(str);
                        }
                    })

                })

                    //提交表单
                    .on("submit","form",function(e){
                        e.preventDefault();

                        var formData=$(this).serialize();

                        $.ajax({
                            url:"/api/course/update/basic",
                            type:"post",
                            data:formData,
                            success:function(res){
                                if(res.code!=200) throw new Error(res.msg);

                                //刷新课程列表页面
                                $(".list-group a[v=course]").trigger("click");

                            }
                        })
                    })

                //把编译之后的内容放到页面中
                $(".main").html($courseBasicInfo);

            }
        })


    }
})