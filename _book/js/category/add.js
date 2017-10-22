/**
 * 添加分类模块
 * Author:Wilbert
 *   Date:2017/10/21
 */
define([
    "jquery",
    "text!tpls/categoryAddTpl.html",
    "art"
],function($,categoryAddTpl,art){


    return function(){

        $.ajax({
            url:"/api/category/top",
            type:"get",
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);

                //将顶级分类的数据提前预置到数据中
                res.result.unshift({  cg_id:0,cg_name:"顶级分类" });

                //把数据编译到模板中
                var categoryAdd=art.render(categoryAddTpl,res);

                //把编译成功之后的内容放到页面中
                var $categoryAdd=$(categoryAdd)
                    .on("submit","form",function(e){
                        e.preventDefault();

                        //获取表单数据
                        var formData=$(this).serialize();

                        //发送ajax请求
                        $.ajax({
                            url:"/api/category/add",
                            type:"post",
                            data:formData,
                            success:function(res){
                                if(res.code!=200) throw new Error(res.msg);

                                //关闭模态框-->隐藏模态框
                                $categoryAdd.modal("hide");

                                //模拟点击课程分类按钮-->从而实现刷新分类列表
                                $(".list-group a[v=category]").trigger("click");
                            }
                        })
                    })
                    .myModal();
            }
        })



    }
})