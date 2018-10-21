<template>
    <div class="pcBox rel">
        <p>PC传播力指数</p>
        <div class="pcNum abs" id="pcNum"></div>
        <div class="y1 abs">
        </div>
        <div class="aBox abs" >
            <a class="clk font13" href="#"
               @click="postShow"
            >查看详情<span>&nbsp;></span></a>
        </div>
    </div>
</template>
<script>
    import $ from "jquery";
    import echarts from 'echarts';

    export default{
        data(){
            return{
                show:true
            }
        },
        methods:{
            getData(){
                this.$http.get("static/json/vagilityExponent.json")
                        .then(data=>{
                            getCharts(data.data.data[0].vagilitycount);
                        });
                function getCharts(obj){
                    var dom = document.getElementById("pcNum");
                    if(dom){
                        var myChart = echarts.init(dom);
                        var option = {
                            tooltip : {
                                formatter: "{a} <br/>{c} {b}"
                            },
                            toolbox: {
                                show: false,
                                feature: {
                                    restore: {show: false},
                                    saveAsImage: {show: false}
                                }
                            },
                            series: [
                                {
                                    type: 'gauge',
                                    min: 0,
                                    max: 1000,
                                    splitNumber: 10,
                                    axisLine: {
                                        lineStyle: {
                                            width: 0,
                                            shadowColor : '#fff',
                                            color: [[0.2, '#f2c483'],[0.8, '#f2c483'],[1, '#f2c483']]
                                        }
                                    },
                                    axisTick: {
                                        length: 5,
                                        lineStyle: {
                                            color: '#f2c483',
                                            width:5
                                        }
                                    },
                                    splitLine: {
                                        width:100,
                                        length: 10,
                                        lineStyle: {
                                            color: '#f2c483',
                                            width:5
                                        }
                                    },
                                    axisLabel: {
                                        color: '#fff',
                                        fontSize:14,
                                        textShadowColor: '#fff'
                                    },
                                    pointer: {
                                        width:2,
                                        shadowColor : '#f2c483',
                                        shadowBlur: 5
                                    },
                                    detail: {formatter:'{value}'},
                                    data: [{value: 0}]
                                }
                            ]
                        };
                        var time = setInterval(function () {
                            option.series[0].data[0].value = obj;
                            myChart.setOption(option, true);
                            clearInterval(time);
                        },2000);
                        if (option && typeof option === "object") {
                            myChart.setOption(option, true);
                        }
                    }
                }
            },
            postShow(){
                this.$store.commit("showTK",this.show);
            }
        },
        mounted(){
            this.getData();
        },
    }
</script>

<style secpod>
    .pcBox{
        width: 100%;
        height: 100%;
    }
    .pcBox p{
        margin-top: 0.34rem;
        color: #fff;
    }
    .pcNum{
        top: -0.15rem;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20;
    }
    .aBox{
        width: 100%;
        top:3.2rem;
        z-index: 30;
    }
    .aBox a.clk{
        color: #fff;
        cursor: pointer;
        text-decoration:underline;
    }
    .y1{
        width: 2.34rem;
        height: 2.34rem;
        top:0.775rem;
        left: 0.92rem;
        z-index: 10;
        border-radius: 50%;
        background: url("../../../../static/img/bg3y_03.png") no-repeat;
        background-size: 2.34rem 2.34rem;
    }
</style>