<template>
    <div class="s_right right bg2" id="leBox"></div>
</template>
<script>
    import echarts from 'echarts';
    import $ from "jquery";
    export default {
        data(){
            return{

            }
        },
        mounted(){
            this.getSerct();
        },
        methods:{
            getSerct(){
                this.$http.get("static/json/analysis.json")
                        .then((data)=>{
                            goToVel(data.body.data[0]);
                        });
                function goToVel(obj) {
                    var el = document.getElementById("leBox");
                    if(el){
                        var myChart1t = echarts.init(el);
                        var republishedcount=obj.republishedcount,originalycount=obj.originalycount,totalcount=obj.totalcount;
                        //最大温度数据单独出来定义，方便环形总数的修改
                        var total = 50000;
                        var optionBar={
                            tooltip: {
                                show: true,
                                trigger: 'item',
                                formatter: function(params, ticket, callback) {//第一个参数数据集、第二个参数是异步回调标志、第三个参数是异步回调
                                    return params.seriesName + ": " + params.value ;//系列名称：数据值
                                }
                            },
                            series: [
                                {
                                    name: '发稿总量',
                                    center : ['50%', '56%'],
                                    type: 'pie',
                                    clockWise: false, //顺时加载
                                    hoverAnimation: false, //鼠标移入变大
                                    radius: [112,132],
                                    label: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    itemStyle:{
                                        color:"#D8B58A"
                                    },
                                    data: [{
                                        value: totalcount,
                                        itemStyle: {
                                            normal: {
                                                color:"#D8B58A"
                                            }
                                        }
                                    },
                                        {
                                            value: total-totalcount,
                                            itemStyle: {
                                                normal: {
                                                    color: 'transparent'
                                                }
                                            }
                                        }]
                                },
                                {
                                    name: '原创总量',
                                    type: 'pie',
                                    center : ['50%', '56%'],
                                    clockWise: false, //顺时加载
                                    hoverAnimation: false, //鼠标移入变大
                                    radius: [92, 112],
                                    label: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    itemStyle:{
                                        color:'rgb(146,116,150)'
                                    },
                                    data: [{
                                        value: originalycount,
                                        itemStyle: {
                                            normal: {
                                                color: 'rgb(146,116,150)'
                                            }
                                        }
                                    },
                                        {
                                            value: total-originalycount,
                                            itemStyle: {
                                                normal: {
                                                    color: 'transparent'
                                                }
                                            }
                                        }]
                                },
                                {
                                    name: '转载总量',
                                    type: 'pie',
                                    center : ['50%', '56%'],
                                    clockWise: false, //顺时加载
                                    hoverAnimation: false, //鼠标移入变大
                                    radius: [72, 92],
                                    label: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                    itemStyle:{
                                        color: '#609bc5'
                                    },
                                    data: [{
                                        value:republishedcount,
                                        itemStyle: {
                                            normal: {
                                                color: '#609bc5'
                                            }
                                        }
                                    },
                                        {
                                            value: total-republishedcount,
                                            itemStyle: {
                                                normal: {
                                                    color: 'transparent'
                                                }
                                            }
                                        }]
                                }],
                            legend: {
                                orient: 'horizontal', //列表的横纵排列样式
                                color: '#fff',
                                inactiveColor: '#fff', //图例关闭时的颜色
                                x: 'center',
                                y: "5%",
                                data: ["发稿总量","原创总量","转载总量"],
                                itemGap: 40,       //图例之间的距离
                                itemWidth: 15,     //每个图例标识宽度
                                itemHeight: 15,    //图例标识的高度
                                textStyle: {       //图例标识旁边的文字的样式
                                    color: '#fff',
                                    fontSize: '12'
                                }
                            }
                        };
                        myChart1t.setOption(optionBar);
                    }
                }
            }
        },
    }
</script>
<style scoped>
    .s_right{
        width: 4.38rem;
        height: 100%;
        padding: 0.25rem;
        box-sizing: border-box;
    }
</style>