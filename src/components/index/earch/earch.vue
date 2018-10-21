<template>
    <section class="sectionLast">
        <h5 class="hn font18 colorY">热词分析</h5>
        <div id="wordsBox">
            <div class="words">
                <canvas width="800px" height="600px" id="canvas">
                    <div id="tags"></div>
                </canvas>
            </div>
        </div>
    </section>
</template>

<script>
    import $ from "jquery";
    import echarts from 'echarts';
    export default{
        data(){
            return{
            }
        }
    }
    $(function () {
        var hotWorldData = ["海洋强国", "文化强国", "美丽中国", "三个自信", "核心价值观新常态",
            "习大大", "点穴式”外交", "民主生活会", "纪念日", "深改小组", "国安委", "京津冀一体化",
            "媒体融合", "主体责任", "异地交流任职", "“断崖式”降级", "你懂的。博客,微信", "马航",
            "网恋", "蓝牙技术", "大数据", "转基因食品", "电子商务", "网购", "数字化战场", "宽带",
            "高速信息网", "人工智能", "网络犯罪", "申请注册域名", "基因重组", "地球同步卫星",
            "造血干细胞", "液晶显示", "局域网", "套餐服务", "短信服务", "海洋强国", "文化强国",
            "美丽中国", "三个自信", "核心价值观新常态", "习大大", "点穴式”外交", "民主生活会",
            "纪念日", "深改小组", "国安委", "京津冀一体化", "媒体融合", "主体责任", "异地交流任职",
            "“断崖式”降级", "你懂的。博客,微信", "马航", "网恋", "蓝牙技术", "大数据",
            "转基因食品", "电子商务", "网购", "数字化战场", "宽带", "高速信息网", "人工智能",
            "网络犯罪", "申请注册域名", "基因重组", "地球同步卫星", "造血干细胞", "液晶显示",
            "局域网", "套餐服务", "短信服务"];
        var html='';
        for(var i=0;i<hotWorldData.length;i++){
            html+='<a href="javascript:;">'+hotWorldData[i]+'</a>';
        }
        $("#tags").html(html);
        try {
            TagCanvas.Start('canvas','tags',{
                textColour:'#fff',//字体颜色
                outlineColour:'#ebc58c',//边框颜色值
                dragControl:true,//拖拽控制
                decel:0.8,//鼠标离开画布时的减速率
                maxSpeed:0.01,//最大速度
                initial:[-0.2,0],//动画帧之间的间隔，以毫秒为单位
                zoomMax:1,//最大变焦值
                zoomMin:0.5//最小变焦值
            })
        }catch(err){

        }
    })
</script>

<style>
    .sectionOne{
        width: 12.78rem;
        margin-top: 0.5rem;
    }
    .sectionLast{
        margin-bottom: 1rem;
        margin-top: 1rem;
        
    }
    #wordsBox{
        width: 100%;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
        z-index: 1;
        padding: 0 !important;
        background: url("../../../../static/img/p_beiji.jpg");
    }
    
    #canvas{
        margin: 0 auto;
    }
    .words{
        overflow: hidden;
        text-align: center;
        background: transparent;
    }
</style>