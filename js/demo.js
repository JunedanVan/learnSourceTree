/**
 * Created by Administrator on 2017/2/7.
 */
window.onload=function(){
    //�����ʽ������
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
    //��ȡ��ͼ��������
    var box=document.getElementById("slide");
    //��ȡul
    var ul=myTool.getFirElement(box);
    //��ȡ��ͷ����
    var arr=document.getElementById("arrow");
    //��ȡ�Ҽ�ͷ
    var arrR=document.getElementById("arrRight");
    //��ȡ���ͷ
    var arrL=document.getElementById("arrLeft");
    //���Ŀ�������Ƿ����ú�
    var flag;
    function configCss(){
        //��ÿ��li�����������ʽ
        for(var i = 0; i < ul.children.length; i++) {
            //��һ���ص���Ϊ����������Ŀ������ֵ���ú���֮��ִ�лص�
            myTool.animate_a(ul.children[i],config[i],function(){
                //����Ŀ�����Զ����ú���
                flag=true;
            });
        }
    }
    configCss();
    //���������ʾ��ͷ
    box.onmouseover=function(){
        arr.style.opacity=1;
    }
    //����Ƴ����ؼ�ͷ
    box.onmouseout=function(){
        arr.style.opacity=0;
    }
    //�����Ǵ����ʽ�����飬ͼƬ����
    //������ͷ,������������(�����һ����ȥ��һ��)
    arrL.onclick=function(){
        //���Ŀ�����Զ����ú���,����ִ���������
        if(flag){
            //���������µ�Ŀ�����ԣ��رս�����
            flag=false;
            var last=config.pop();
            config.unshift(last);
            configCss();
        }
    }
    //�ȽϺ���⣺����Ҽ�ͷ,������������(����һ����ȥ���һ��)
    arrR.onclick=function(){
        //���Ŀ�����Զ����ú���,����ִ���������
        if(flag) {
            //���������µ�Ŀ�����ԣ��رս�����
            flag=false;
            var last = config.shift();
            config.push(last);
            configCss();
        }
    }
}