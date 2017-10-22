/**
 * 编辑分类模块
 * Author:Wilbert
 *   Date:2017/10/22
 */
define([
    "jquery",
    "text!tpls/categoryEditTpl.html",
    "art"
],function($,categoryEditTpl,art){


    return function(id){

        $.ajax({
            url:"/api/category/edit",
            type:"get",
            data:{cg_id:id},
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);

                //把顶级分类数据预置到数组中
                res.result.top.unshift({cg_id:0,cg_name:"顶级分类"});

                //成功的获取了数据-->把数据编译到模板中
                var categoryEdit=art.render(categoryEditTpl,res.result);


                //把编译成功的内容添加到页面中，并且以模态框形式呈现出来
                $(categoryEdit).myModal();
            }
        })



    }
})