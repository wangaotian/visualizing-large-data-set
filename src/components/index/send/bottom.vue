<template>
    <div class="bottomBox clear">
        <div id="pb_main"></div>
    </div>
</template>
<script>
    import $ from "jquery";
    import echarts from 'echarts';

    export default {
        methods: {
           
            drawBarChart1() {
                //获取数据
                this.$http.get("static/json/PCTopAnalysis.json")
                        .then((data)=>{
                            getEchartsrt(data.data.data[0].PCPressCountWeb);
                });
                function getEchartsrt(obj){
                    var cDate=[], OriginalCount=[],ReprintCount=[],OriginalRate=[];
                    $.each(obj,function (index,item) {
                        cDate.push(item.WebName);
                        OriginalCount.push(item.OriginalCount);
                        OriginalRate.push(item.originalrate.replace(/%$/,""));
                        ReprintCount.push(item.ReprintCount);
                    });

                    var el = document.getElementById('pb_main');
                    if(el){
                        // 基于准备好的dom，初始化echarts实例
                        var myCharts = echarts.init(el);
                        myCharts.resize();

                        // 指定图表的配置项和数据
                        var color=['#BF9463', '#ff503f', '#66b7f0'];
                        var options = {
                            title: {
                                textStyle:{
                                    color:"#fff"
                                }
                            },
                            tooltip: {
                                trigger:"axis",
                                axisPointer: {
                                    type: "shadow"
                                },
                            },
                            legend: {
                                textStyle:{
                                    color:"#fff"
                                },
                                //                            top:'10',
                                data: [
                                    {
                                        name: '转载量',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#999',
                                        },
                                        itemStyle:{
                                            barBorderRadius:30,
                                            color:"#BE9462",
                                        }
                                    },
                                    {
                                        name: '原创量',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#999'
                                        },
                                        itemStyle:{
                                            barBorderRadius:30,
                                            color:"#fb523d",
                                            smooth:0.2
                                        }
                                    },
                                    {
                                        name: '原创率(%)',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#999'
                                        },
                                        itemStyle:{
                                            barBorderRadius:30,
                                            color:"#0bbbff",
                                        },
                                    }
                                ]
                            },
                            xAxis: {
                                data: cDate,
                                axisLabel:{
                                    rotate:45,
                                    color:"#fff"
                                },
                                axisTick: {
                                    show: true,
                                    alignWithLabel: true,
                                    length: 5,
                                    lineStyle: {
                                        color: '#D8B58A',
                                        type: 'solid',
                                        width: 1
                                    }
                                }

                            },
                            yAxis: [
                                {
                                    type:"value",
                                    min: 0,
                                    max: 120000,
                                    interval: 20000,
                                    position:"left",
                                    axisLine:{
                                        show:false,
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
                                    axisLabel:{
                                        formatter:"{value}",
                                        color:"#fff"
                                    },
                                    axisTick: {
                                        show: true,
                                        length: 5,
                                        lineStyle: {
                                            color: '#D8B58A',
                                            type: 'solid',
                                            width: 1
                                        }
                                    }
                                },
                                {
                                    type:"value",
                                    min: 0,
                                    max: 60,
                                    interval: 10,
                                    position:"right",
                                    axisLine:{
                                        show:false,
                                        lineStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel:{
                                        formatter:"{value}",
                                        color:"#fff"
                                    },
                                    axisTick: {
                                        show: true,
                                        length: 5,
                                        lineStyle: {
                                            color: '#D8B58A',
                                            type: 'solid',
                                            width: 1
                                        }
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '转载量',
                                    type: 'bar',
                                    barWidth:"14",
                                    stack:"sum",
                                    itemStyle:{
                                        color:color[0],
                                        barBorderRadius: 25
                                    },
                                    data: ReprintCount
                                },
                                {
                                    name: '原创量',
                                    type: 'bar',
                                    barWidth:"14",
                                    stack:"sum",
                                    itemStyle:{
                                        color:color[1],
                                        barBorderRadius: 25
                                    },
                                    data: OriginalCount
                                },
                                {
                                    name: '原创率(%)',
                                    yAxisIndex: 1,
                                    type: 'line',
                                    itemStyle:{
                                        color:color[2]
                                    },
                                    smooth:true,
                                    data: OriginalRate
                                }
                            ]
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        myCharts.setOption(options);
                    }
                }
            },
        },
        mounted() {
            this.drawBarChart1();
        },
    }
</script>
<style scoped>
    .bottomBox{
        width: 100%;
        height: 4.3rem;
        box-sizing: border-box;
    }
    #pb_main{
        width: 100%;
        height: 100%;
        border-radius: 0.02rem;
        float: left;
        padding: 0.25rem 0;
        background: rgba(67, 61, 54, 0.4);
    }
   
</style>