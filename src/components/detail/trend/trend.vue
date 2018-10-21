<template>
    <section class="sectionN1 sectionOne">
        <h5 class="font18 colorY">PC传播力指数走势</h5>
        <div class="trans kg bg2" id="trans"></div>
    </section>
</template>
<script>
    import echarts from 'echarts';
    import $ from "jquery";
    export default{
        data(){
            return{
            }
        },
        methods:{
            getData(){
                this.$http.get('static/json/vagilityExponentTrend.json')
                        .then((data)=>{
                            getEchartsrt(data.data.data)
                        });
                function getEchartsrt(obj){
                    var cDate=[],count=[];
                    $.each(obj,function (index,item) {
                        cDate.push(item.time);
                        count.push(item.count);
                    });
                    var el = document.getElementById('trans');
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
                                max:400,
                                dimension: 1,
                                inRange: {
                                    color: [ '#2f271c','#d63c2f']
                                }
                            },
                            legend: {
                                top:'15',
                                data:[
                                    {
                                        name:'传播力指数',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#fff'
                                        },
                                        itemStyle:{
                                            barBorderRadius:30,
                                            color:"rgb(76,156,210)"
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
                                    name:'传播力指数',
                                    type:'line',
                                    stack: '总量',
                                    areaStyle: {normal: {}},
                                    data:count,
                                    smooth:true,
                                    symbol:'none'
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
    .sectionN1{
        height: 4.51rem;
    }
    .trans{
        height: 4rem;
        padding: 0.25rem;
        box-sizing: border-box;
    }
</style>