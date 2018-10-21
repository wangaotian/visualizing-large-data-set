<template>
    <div class="press_left bg2 left" id="PressLeft"></div>
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
                this.$http.get('static/json/analysis.json')
                        .then((data)=>{
                            getEchartsrt(data.data.data[1]);
                        });
                function getEchartsrt(obj){
                    var xDate=[],totallist=[],originalylist=[],republishedlist=[];
                    $.each(obj.totallist,function (index,item) {
                        totallist.push(item.count);
                    });
                    $.each(obj.originalylist,function (index,item) {
                        originalylist.push(item.count);
                    });
                    $.each(obj.republishedlist,function (index,item) {
                        xDate.push(item.time);
                        republishedlist.push(item.count);
                    });
                    var el = document.getElementById('PressLeft');
                    if(el){
                        var myChart = echarts.init(el);
                        var option = {
                            tooltip : {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'line',
                                    label: {
                                        backgroundColor: '#6a7985'
                                    }
                                }
                            },
                            legend: {
                                top:"20",
                                data: [
                                    {
                                        name: '发稿量',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#fff'
                                        }
                                    },
                                    {
                                        name: '原创量',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#fff'
                                        }
                                    },
                                    {
                                        name: '转载量',
                                        textStyle: {
                                            fontSize: 12,
                                            fontWeight: 'bolder',
                                            color: '#fff'
                                        }
                                    }
                                ]
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    axisTick: {
                                        show: true,
                                        alignWithLabel: true,
                                        inside: true,
                                        length: 3,
                                        lineStyle: {
                                            color: 'rgba(187,166,149,0.3)',
                                            width: 3,
                                        }
                                    },
                                    axisLabel: {//标签设置
                                        color:"#fff",
                                        interval: 2,//间隔显示
                                    },
                                    boundaryGap : false,
                                    axisLine: {
                                        show: true,
                                        lineStyle: {
                                            color: 'rgba(187,166,149,0.3)',
                                        }
                                    },
                                    data : xDate,
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value',
                                    axisLabel:{
                                        color:"#fff"
                                    },
                                    splitLine: {//Y轴横线
                                        show: false,
                                        lineStyle: {
                                            color: 'rgba(170,152,136,0.3)',
                                            type: 'solid',
                                            width: 1
                                        }
                                    },
                                    axisLine: {//Y轴竖线
                                        show: false,
                                        lineStyle: {
                                            color: '#fff'
                                        }
                                    },
                                    axisTick: {
                                        show: false
                                    },
                                }
                            ],
                            series : [
                                {
                                    name:'发稿量',
                                    hoverAnimation :true,  //（开启当前拐点标志的动画效果）
                                    smooth:true,
                                    symbolSize: 5,
                                    showSymbol: false,
                                    type:'line',
                                    itemStyle:{
                                        normal:{
                                            color: '#685233',
                                        }
                                    },
                                    areaStyle: {
                                        color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#685233' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: 'transparent' // 100% 处的颜色
                                            }],
                                            globalCoord: false // 缺省为 false
                                        }
                                    },
                                    data:totallist
                                },
                                {
                                    name:'原创量',
                                    hoverAnimation :true,  //（开启当前拐点标志的动画效果）
                                    smooth:true,
                                    symbolSize: 5,
                                    showSymbol: false,
                                    type:'line',
                                    itemStyle: {
                                        normal: {
                                            color: '#927496'
                                        }
                                    },
                                    areaStyle: {
                                        color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#927496' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: 'transparent' // 100% 处的颜色
                                            }],
                                            globalCoord: false // 缺省为 false
                                        }
                                    },
                                    data:originalylist
                                },
                                {
                                    name:'转载量',
                                    hoverAnimation :true,  //（开启当前拐点标志的动画效果）
                                    smooth:true,
                                    symbolSize: 5,
                                    showSymbol: false,
                                    type:'line',
                                    itemStyle: {
                                        normal: {
                                            color: '#609bc5'
                                        }
                                    },
                                    areaStyle: {
                                        color: {
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#60a3d2' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: 'transparent' // 100% 处的颜色
                                            }],
                                            globalCoord: false // 缺省为 false
                                        }
                                    },
                                    data:republishedlist
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
    .press_left{
        width: 8.3rem;
        height: 100%;
        padding: 0.25rem;
    }
</style>