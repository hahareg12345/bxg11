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
    "art"
],function($,teacherListTpl,art){

    return function(){




        //完成渲染讲师列表的功能？
        //-->把整个页面拼接出来？
        //  -->也就是把页面结构+页面数据整合在一起
        //      -->1、页面结构：模板引擎
        //      -->2、数据：ajax请求

        $('.main').html(teacherListTpl);

        $.ajax({
            url:"/api/teacher",
            type:"get",
            success:function(res){
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
                if(res.code!=200)   return console.log(res.msg);


                //请求成功：最大的好处：减少了{}的嵌套
                var result=res.result;

                //把数据编译到模板中-->获取到真实的内容
                var html=art.render(teacherListTpl,{
                    r:result
                });

                //把真实的内容放到页面中
                $(".main").html(html);
            }
        })
    }

})