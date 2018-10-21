<template>
    <div class="relList" id="re_main"></div>
</template>
<script>
    import $ from "jquery";
    import echarts from 'echarts';
    export default{
        data(){
            return{
                dt:[]
            }
        },
        methods: {
            drawBarChart() {
                //获取数据
                this.$http.get("static/json/newReprintedAnalysis.json")
                        .then((da)=>{
                            this.dt = da.data.data;
                            console.log(da.data)
                            var cDate=[],OriginalCount=[],ReprintCount=[],OriginalRate=[];
                            $.each(this.dt,function (index,item) {
                                cDate.push(item.webname);
                                OriginalCount.push(item.sourceReprintCount);
                                ReprintCount.push(item.unsourceReprintCount);
                                OriginalRate.push(item.specificationReprintrate.replace(/%$/,""));
                            });

                            var el = document.getElementById('re_main');
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
                                                name: '稿源单位',
                                                textStyle: {
                                                    fontSize: 12,
                                                    fontWeight: 'bolder',
                                                    color: '#fff'
                                                },
                                                itemStyle:{
                                                    barBorderRadius:30,
                                                    color:"rgb(76,156,210)",
                                                }
                                            },
                                            {
                                                name: '非稿源单位',
                                                textStyle: {
                                                    fontSize: 12,
                                                    fontWeight: 'bolder',
                                                    color: '#999',
                                                },
                                                itemStyle:{
                                                    barBorderRadius:30,
                                                    color:"rgb(152,114,152)",
                                                }
                                            },
                                            {
                                                name: '规范转载率(%)',
                                                textStyle: {
                                                    fontSize: 12,
                                                    fontWeight: 'bolder',
                                                    color: '#999'
                                                },
                                                itemStyle:{
                                                    barBorderRadius:30,
                                                    color:"rgb(190,144,90)",
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
                                            max: 150000,
                                            interval: 30000,
                                            position:"left",
                                            axisLine:{
                                                show:true,
                                                lineStyle: {
                                                    color: 'rgba(170,152,136,0.3)'
                                                }
                                            },
                                            splitLine: {//Y轴横线
                                                show: false,
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
                                            max: 100,
                                            interval: 20,
                                            position:"right",
                                            axisLine:{
                                                show:true,
                                                lineStyle: {
                                                    color: 'rgba(170,152,136,0.3)'
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
                                            name: '稿源单位',
                                            type: 'bar',
                                            barWidth:"14",
                                            stack:"sum",
                                            itemStyle:{
                                                color:"rgb(76,156,210)",
                                                barBorderRadius: 25
                                            },
                                            data: OriginalCount
                                        },
                                        {
                                            name: '非稿源单位',
                                            type: 'bar',
                                            barWidth:"14",
                                            stack:"sum",
                                            itemStyle:{
                                                color:"rgb(152,114,152)",
                                                barBorderRadius: 25
                                            },
                                            data: ReprintCount
                                        },
                                        {
                                            name: '规范转载率(%)',
                                            yAxisIndex: 1,
                                            type: 'line',
                                            smooth:true,
                                            itemStyle:{
                                                color:"rgb(190,144,90)",
                                            },
                                            data: OriginalRate
                                        }
                                    ]
                                };

                                // 使用刚指定的配置项和数据显示图表。
                                myChart.setOption(option);
                            }
                })
            }
        },
        mounted(){
            this.drawBarChart();
        }
    }
</script>
<style scoped>
    .relList{
        width: 100%;
        height: 100%;
        padding: 0.25rem;
        margin-left: 0.1rem;
        box-sizing: border-box;
    }
</style>