<template>
    <section class="sectionN4 sectionOne">
        <h5 class="font18 colorY">被转载分析</h5>
        <div class="boxPro kg">
            <header class="h bg1">被转载量走势</header>
            <div class="bePro bg2" id="bePro"></div>
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
        },
        methods:{
            getData(){
                this.$http.get('static/json/wasRepublishedAnalysis.json')
                        .then((data)=>{
                            getEchartsrts(data.data.data);
                        });
                function getEchartsrts(obj){
                    var cDate=[],count=[];
                    $.each(obj,function (index,item) {
                        cDate.push(item.time);
                        count.push(item.count);
                    });
                    var el = document.getElementById('bePro');
                    if(el){
                        var myChart = echarts.init(el);
                        myChart.resize();
                        var option = {
                            tooltip : {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'cross',
                                    label: {
                                        backgroundColor: '#6a7985'
                                    }
                                }
                            },
                            visualMap: {
                                show: false,
                                min: 0,
                                max:5000,
                                dimension: 1,
                                inRange: {
                                    color: [ '#2f271c','rgb(191,144,89)']
                                }
                            },
                            legend: {
                                top:'15',
                                data:[
                                    {
                                        name:'被转载量',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#fff'
                                        },
                                        itemStyle:{
                                            barBorderRadius:30,
                                            color:"rgb(191,144,89)"
                                        }
                                    }
                                ]
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '6%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    boundaryGap : false,
                                    data :cDate,
                                    axisLabel: {
                                        textStyle: {
                                            show: true,
                                            color: '#fff'
                                        }
                                    },
                                    axisTick: {
                                        show: true,
                                        alignWithLabel: true,
                                        inside: true,
                                        length: 5,
                                        lineStyle: {
                                            color: '#fff',
                                            width: 2,
                                        }
                                    },
                                    axisLine:{
                                        show: false,
                                        lineStyle:{
                                            color:'#ccc'
                                        }
                                    }
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value',
                                    axisLabel: {
                                        show: true,
                                        textStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    axisLine: {//Y轴竖线
                                        show: false,
                                        lineStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    splitLine: {//Y轴横线
                                        show: true,
                                        lineStyle: {
                                            color: 'rgba(170,152,136,0.3)',
                                            type: 'solid',
                                            width: 1
                                        }
                                    },
                                    axisTick: {            // 坐标轴小标记
                                        show: true,       // 属性show控制显示与否，默认不显示
                                        interval: 'auto',
                                        inside : false,    // 控制小标记是否在grid里
                                        length :5,         // 属性length控制线长
                                        lineStyle: {       // 属性lineStyle控制线条样式
                                            color: 'rgb(123,104,80)',
                                            width: 5
                                        }
                                    }
                                }
                            ],
                            series : [
                                {
                                    name:'被转载量',
                                    type:'line',
                                    hoverAnimation :true,  //（开启当前拐点标志的动画效果）
                                    smooth:true,
                                    symbolSize: 5,
                                    showSymbol: false,
                                    areaStyle: {normal: {}},
                                    data:count,
                                    itemStyle:{
                                        barBorderRadius:30,
                                        color:"rgb(191,144,89)"
                                    }
                                }
                            ]
                        };
                        myChart.setOption(option);
                    }
                }
            }
        },
        mounted(){
            this.getData();
        },
    }
</script>
<style scoped>
    .sectionN4{
        height: 5.65rem;
    }
    .bePro{
        width: 100%;
        height: 4.8rem;
        padding: 0.25rem;
        margin-top: 0.02rem;
        box-sizing: border-box;
    }
</style>