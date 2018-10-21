<template>
    <div class="repLeft">
        <div class="mainr_l" id="mainr_l"></div>
    </div>
</template>
<script>
    import $ from "jquery";
    import echarts from 'echarts';
    export default{
        data(){
            return{
                web:[]
            }
        },
        methods: {
            drawBarChart() {
                this.web=[];
                //获取数据
                this.$http.get('static/json/beReprintedAnalysis.json')
                        .then(data=>{
                        $.each(data.body.data,(index,item)=>{
                            this.web.push({
                                "webid":item.webid,
                                "webname":item.webname
                            });
                        });
                            // this.$store.commit("arr",this.web);
                        getEchartsrt(data.body.data);
                });
                function getEchartsrt(obj){
                    var cDate=[],OriginalCount=[];
                    $.each(obj,function (index,item) {
                        cDate.push(item.webname);
                        OriginalCount.push(item.beReprintCount);
                    });

                    // 基于准备好的dom，初始化echarts实例
                    var el = document.getElementById('mainr_l');
                    if(el){
                        var myChart = echarts.init(el);
                        myChart.resize();
                        // 指定图表的配置项和数据
                        var color=['#BF9463', '#ff503f', '#66b7f0'];
                        var option = {
                            title: {
                                textStyle:{
                                    top:0,
                                    color:"#fff"
                                }
                            },
                            tooltip: {
                                trigger:"axis",
                                axisPointer: {
                                    type: "shadow"
                                },
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
                                    max: 18000,
                                    interval: 3000,
                                    position:"left",
                                    axisLine:{
                                        show:true,
                                        lineStyle: {
                                            color: 'rgba(170,152,136,0.3)'
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
                            ],
                            series: [
                                {
                                    name: '被转载量',
                                    type: 'bar',
                                    barWidth:"14",
                                    stack:"sum",
                                    itemStyle:{
                                        color:"rgb(172,137,97)",
                                        barBorderRadius: 25
                                    },
                                    data: OriginalCount
                                }
                            ]
                        };
                        myChart.setOption(option);
                    }
                }
            }
        },
        mounted(){
            this.drawBarChart();
        },
    }
</script>
<style scoped>
    .repLeft{
        width: 100%;
        height: 100%;
    }
    .mainr_l{
        width: 100%;
        height: 100%;
        border-radius: 0.02rem;
        box-sizing: border-box;
        padding: 0 0.25rem 0 0.45rem;
        margin-top: -0.3rem;
    }
</style>