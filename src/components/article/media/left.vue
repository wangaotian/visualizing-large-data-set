<template>
    <div class="dy_lefe left clear bg2" id="dy_lefe"></div>
</template>
<script>
    import  echarts  from 'echarts';
    import $ from "jquery";
    export default{
        data(){
            return{
            }
        },
        methods: {
            drawBarChart() {
                //获取数据
                this.$http.get("static/json/getareaspread.json")
                        .then(data=>{
                            getEchartstr(data.data);
                        });
                function getEchartstr(data){
                    // 基于准备好的dom，初始化echarts实例
                    var el=document.getElementById('dy_lefe');
                    if(el){
                        var myChart = echarts.init(el);
                        myChart.resize();
                        var firstcity='',secondcity='',other='';
                        $.each(data,function (index,value) {
                            firstcity=value.firstcity;
                            secondcity=value.secondcity;
                            other=value.other;
                        });
                        // 指定图表的配置项和数据
                        var option = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: {c} ({d}%)",
                            },
                            label:{
                                show:"true",
                            },
                            color:['rgb(255,88,69)','rgb(133,230,240)','rgb(255,216,154)'],
                            legend: {
                                top:350,
                                orient: 'vertical',
                                x: 'center',
                                data:[
                                    {
                                        name:'一线城市',

                                    },
                                    {
                                        name:'二线城市',
                                    },
                                    {
                                        name:'三线城市及其他',
                                    }
                                ],
                                textStyle: {
                                    fontSize: '18',
                                    color:"#fff"
                                }
                            },
                            series: [
                                {
                                    type: 'pie', //类型 pie表示饼图
                                    center : ['50%', '35%'],
                                    selectedMode: 'single',
                                    radius: ['55%', '70%'],
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontSize: '14',
                                                fontWeight: 'bold',
                                                color:"#fff"
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: { show: false } ,
                                    },
                                    data: [
                                        {value: firstcity, name: '一线城市'},
                                        {value: secondcity, name: '二线城市'},
                                        {value: other, name: '三线城市及其他'}
                                    ]
                                }
                            ]
                        };
                        // 使用刚指定的配置项和数据显示图表。
                        myChart.setOption(option);
                    }
                }
            },
        },
        mounted(){
            this.drawBarChart();
        },
       
    }
</script>
<style scoped>
    .dy_lefe{
        width: 3.6rem;
        height: 5.4rem;
        margin-right: .12rem;
        margin-bottom: 1rem;
    }
</style>