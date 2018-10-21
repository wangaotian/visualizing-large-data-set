<template>
    <section class="sectionNum8">
        <h5 class="hn font18 colorY">文章传播路径分析</h5>
        <header class="h bg1">
            <span class="numGF colorY right">规范被转载总量：{{this.num}}</span>
        </header>
        <div class="asBox bg2">
            <div id="AS"></div>
        </div>
    </section>
</template>
<script>
    import echarts from 'echarts';
    import $ from "jquery";
    export default {
        data(){
            return{
                num:""
            }
        },
        methods:{
            getData(){
                var el = document.getElementById('AS');
                if(el){
                    var myChart = echarts.init(el);
                    myChart.showLoading();
                    $.get("static/json/travelPath.json").then((data)=>{
                        console.log(data)
                        if(data.children.length==0){
                            this.num="0";
                        }
                        this.num = data.children.length;
                        myChart.hideLoading();
                        echarts.util.each(data.children, function (datum, index) {
                            index % 2 === 0 && (datum.collapsed = true);
                        });
                        var option = {
                            tooltip: {
                                trigger: 'item',
                                triggerOn: 'mousemove'
                            },
                            series: [
                                {
                                    type: 'tree',
                                    data: [data],
                                    top: '1%',
                                    left: '10%',
                                    bottom: '1%',
                                    right: '20%',
                                    symbolSize: 10,
                                    label: {
                                        normal: {
                                            position: 'left',
                                            verticalAlign: 'middle',
                                            align: 'right',
                                            color: '#ebc58c',
                                            fontSize: 14
                                        }
                                    },
                                    leaves: {
                                        label: {
                                            normal: {
                                                position: 'right',
                                                verticalAlign: 'middle',
                                                align: 'right'
                                            }
                                        }
                                    },

                                    expandAndCollapse: true,
                                    animationDuration: 550,
                                    animationDurationUpdate: 750
                                }
                            ]
                        };
                        myChart.setOption(option);
                    })
                }
            }
        },
        mounted(){
            this.getData();
        }
    }
    $(function () {
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
<style scoped>
.sectionNum8{
    width: 12.78rem;
    margin-top: 0.4rem;
}
.numGF{
    padding-right: 0.25rem;
}
.asBox{
    height: 6.1rem;
    margin-top: 0.02rem;
    padding: 0.25rem;
}
#AS{
    width: 100%;
    height: 100%;
}
</style>