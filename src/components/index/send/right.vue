<template>
    <div class="pd_right right">
        <div id="pr_main"></div>
    </div>
</template>
<script>

    import $ from "jquery";
    import echarts from 'echarts';

    export default {
        methods: {
            drawBarChart() {
                //获取数据
                this.$http.get("static/json/originalCountAndRate.json")
                        .then((data)=>{
                            getEcharts(data.data.data);
                        });
                function getEcharts(obj){
                    var cDate=[],OriginalCount=[],ReprintCount=[],OriginalRate=[];
                    $.each(obj,function (index,item) {
                        cDate.push(item.cdate.slice(-5));
                        OriginalCount.push(item.OriginalCount);
                        OriginalRate.push(item.originalrate.replace(/%$/,""));
                        ReprintCount.push(item.ReprintCount);
                    });

                    var el = document.getElementById('pr_main');
                    if(el){
                        // 基于准备好的dom，初始化echarts实例
                        var myChart = echarts.init(el);
                        myChart.resize();

                        // 指定图表的配置项和数据
                        var color=['#BF9463', '#ff503f', '#66b7f0'];
                        var option = {
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
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '11%',
                                top:"10%",
                                containLabel: true,
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
                                    max: 25000,
                                    interval: 5000,
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
                                    max: 30,
                                    interval: 5,
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
                            dataZoom: [
                                {
                                    show: true,
                                    start: 0,
                                    end: 50,
                                    height: 15,
                                    textStyle: {
                                        color: "#fff"
                                    }
                                },
                                {
                                    type: 'inside',
                                    start: 0,
                                    end: 50,
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
                        myChart.setOption(option);

                    }
                }
            }
        },
        mounted() {
            this.drawBarChart();
        },
    }
</script>
<style scoped>
    .pd_right{
        width: 8.43rem;
        height: 4.5rem;
        background: rgba(67, 61, 54, 0.4);
        border-radius: 0.02rem;
    }
    .pd_right #pr_main{
        z-index: 100;
        width: 100%;
        height: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
    }
</style>