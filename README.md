# 博学谷管理系统

## 博学谷项目是一个单页应用
+ SPA：single page application
+ 这样的网站存在一个典型的缺点：不利于SEO；因为这样的缺点，所以SPA主要应用于企业级项目中，或者一些对SEO没特殊要求的项目中
    - 企业级项目：客户群体是面向企业员工、企业客户；并不是面向大众

    - SEO：搜索引擎优化
        - 搜索引擎是通过网络爬虫找到你的网站，而爬虫不会执行任何js代码，所以通过ajax请求获取到的数据都无法得知

    - 商城后台/内容管理系统(CMS)

## 搭建网站的目录结构
1. css/
2. js/
    teacher/
        list.js
        add.js
        edit.js
    course/
    category/
    chart/
    common/         存放一些通用的模块/工具类模块
    lib/            存放一些第三方的纯js库
        jquery.js
        echarts.js
        template-web.js
3. assets/          存放一些第三方的，混合组件(js/css/font/flash文件等)
        bootstrap/
        日期控件
        上传控件
4. tpls/            存放一些模板文件
        添加讲师模板
        讲师列表模板
        编辑讲师模板
5. index.html       项目的首页(用requireJS构建出来的)
6. login.html       登录页(用传统方式实现的)