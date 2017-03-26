/**
 * Created by Administrator on 2017/2/7.
 */
window.onload=function(){
    //存放样式的数组
    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            "width": 600,
            "top": 70,
            "left": 600,
            "opacity": 0.8,
            "zIndex": 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];
    //获取放图的里层盒子
    var box=document.getElementById("slide");
    //获取ul
    var ul=myTool.getFirElement(box);
    //获取箭头盒子
    var arr=document.getElementById("arrow");
    //获取右箭头
    var arrR=document.getElementById("arrRight");
    //获取左箭头
    var arrL=document.getElementById("arrLeft");
    //标记目标属性是否都设置好
    var flag;
    function configCss(){
        //给每个li配置数组的样式
        for(var i = 0; i < ul.children.length; i++) {
            //加一个回调作为节流阀，当目标属性值设置好了之后执行回调
            myTool.animate_a(ul.children[i],config[i],function(){
                //假设目标属性都设置好了
                flag=true;
            });
        }
    }
    configCss();
    //鼠标移入显示箭头
    box.onmouseover=function(){
        arr.style.opacity=1;
    }
    //鼠标移出隐藏箭头
    box.onmouseout=function(){
        arr.style.opacity=0;
    }
    //动的是存放样式的数组，图片不动
    //点击左箭头,对这个数组操作(减最后一个扔去第一个)
    arrL.onclick=function(){
        //如果目标属性都设置好了,可以执行下面代码
        if(flag){
            //重新设置新的目标属性，关闭节流阀
            flag=false;
            var last=config.pop();
            config.unshift(last);
            configCss();
        }
    }
    //比较好理解：点击右箭头,对这个数组操作(减第一个扔去最后一个)
    arrR.onclick=function(){
        //如果目标属性都设置好了,可以执行下面代码
        if(flag) {
            //重新设置新的目标属性，关闭节流阀
            flag=false;
            var last = config.shift();
            config.push(last);
            configCss();
        }
    }
}