/**
 * 注销-启用讲师模块
 * Author:Wilbert
 *   Date:2017/10/19
 */
define([
    "jquery"
],function($){


    /**
     * @param callback 回调函数
     */
    return function(id,status,callback){

        //a、修改服务器中的数据
        $.ajax({
            url:"/api/teacher/handle",
            type:"post",
            data:{
                tc_id:id,
                tc_status:status
            },
            success:function(res){

                if(res.code!=200) throw new Error(res.msg);

                //获取到最新的状态值
                var status=res.result.tc_status;

                //将最新的状态值呈现在页面中
                //-->按照功能的划分，status.js文件的职责已经做完了，而呈现最新数据这个功能应该交给list.js来去实现 (单一职责原则)

                //-->其实就是要把status这个数据传递到list.js文件中

                callback(status);


            }
        })
    }
})