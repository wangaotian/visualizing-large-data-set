<template>
    <div class="brRight left">
        <header class="h bg1">
            <span class="lN left">被转载量走势</span>
            <span class="rN colorY right">直接被转载总量：{{sum===0?'-':sum}}</span>
        </header>
        <div class="brBottom bg2">
            <div id="beNum"></div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    import echarts from 'echarts';

    export default{
        data(){
            return{
                sum:0
            }
        },
        methods:{
            getData(){
                this.$http.get('static/json/bereproduceAnalysis.json')
                        .then((data)=>{
                            for(var i=0;i<data.data.data.length;i++){
                                this.sum+=data.data.data[i].count;
                            }
                            getEchartsrt(data.data.data);
                        });
                function getEchartsrt(obj) {
                    var cDate=[],count=[];
                    $.each(obj,function (index,item) {
                        cDate.push(item.time);
                        count.push(item.count);
                    });
                    var el = document.getElementById('beNum');
                    if(el){
                        var myChart = echarts.init(el);
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
                                    color: [ '#604b2f','#604b2f']
                                }
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
                                    stack: '总量',
                                    areaStyle: {normal: {
                                        color:{
                                            type: 'linear',
                                            x: 0,
                                            y: 0,
                                            x2: 0,
                                            y2: 1,
                                            colorStops: [{
                                                offset: 0, color: '#604b2f' // 0% 处的颜色
                                            }, {
                                                offset: 1, color: '#231f17' // 100% 处的颜色
                                            }],
                                            globalCoord: false // 缺省为 false
                                        }
                                    }},
                                    itemStyle: {
                                        color:'#604b2f'
                                    },
                                    // lineStyle: {
                                    //     color:'#604b2f'
                                    // },
                                    data:count,
                                    // smooth:true,
                                    // symbol:'none',
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
        }
    }
</script>
<style secpod>
    .brRight{
        width: 9.56rem;
        height: 4.19rem;
        margin-left: 0.12rem;
    }
    .lN{
        font-size: 0.16rem;
    }
    .rN{
        padding-right: 0.25rem;
        font-size: 0.15rem;
    }
    .brBottom{
        margin-top: 0.02rem;
        height: 3.66rem;
    }
    #beNum{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        color: rgba(189, 151, 106, 0);
    }
</style>