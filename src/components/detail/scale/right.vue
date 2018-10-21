<template>
    <div class="sd_right right" id="sd_right"></div>
</template>
<script>
    import echarts from 'echarts';
    import $ from "jquery";
    export default{
        data(){
            return{

            }
        },
        methods: {
            drawBarChart() {
                //获取数据
                this.$http.get("static/json//top10Republished.json")
                        .then((data)=>{
                            getEchartsrt(data.data.data);
                        });
                function getEchartsrt(obj){
                    var cDate=[],count=[];
                    $.each(obj,function (index,item) {
                        cDate.push(item.webname);
                        count.push(item.count);
                    });
                    var el = document.getElementById('sd_right');
                    if(el){
                        var myChart = echarts.init(el);
                        var option = {
                            title: {
                                left: 'center',
                                top:10,
                                text: '综合网站TOP10转载媒体',
                                textStyle:{
                                    color:"#fff",
                                    fontSize:'14px'
                                },
                            },
                            tooltip: {
                                trigger:"axis",
                                axisPointer: {
                                    type: "shadow"
                                }
                            },
                            xAxis: {
                                data: cDate,
                                axisLabel:{
                                    rotate:45,
                                    color:"#fff"
                                },
                                axisTick: {
                                    show: false,
                                } ,
                                axisLine:{
                                    show:true,
                                    lineStyle: {
                                        color: '#9d9e9f'
                                    }
                                },
                            },
                            yAxis: [
                                {
                                    type:"value",
                                    position:"left",
                                    axisLine:{
                                        show:true,
                                        lineStyle: {
                                            color: '#9d9e9f'
                                        }
                                    },
                                    axisTick: {
                                        show: false,
                                    },
                                    splitLine: {//Y轴横线
                                        show: false,
                                    },
                                    axisLabel:{
                                        formatter:"{value}",
                                        color:"#fff"
                                    }
                                }
                            ],
                            series: [
                                {
                                    name: '被转载量',
                                    type: 'bar',
                                    barWidth:"14",
                                    stack:"sum",
                                    itemStyle:{
                                        color:"rgba(255,80,63,1)",
                                        barBorderRadius: 25
                                    },
                                    data: count
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
    .sd_right{
        width: 60%;
        height: 4rem;
        margin-top: 0.02rem;
        margin-bottom: 0.3rem;
        margin-left: 0.1rem;
        background: rgba(67, 61, 54, 0.4);
        border-radius: 0.03rem;
    }
</style>