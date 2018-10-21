<template>
    <div class="rerBox rel">
        <div class="rer_main" id="main_bing"></div>
        <div v-for="(item,index) in dt">
            <div class="gy abs">
                <p>稿源单位</p>
                <span class="gyBox">{{item.sourcerate}}</span>
            </div>
            <div  class="fgy abs">
                <p>非稿源单位</p>
                <span class="gyBox zs">{{item.unsourcerate}}</span>
            </div>
        </div>
    </div>
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
                this.$http.get("static/json/newReprintedrate.json")
                        .then((data)=>{
                            this.dt=data.data.data;
                            getEchartstr(data.data.data);
                        });
                function getEchartstr(obj){
                            var el = document.getElementById('main_bing');
                    if(el){
                        // 基于准备好的dom，初始化echarts实例
                        var myChart = echarts.init(el);
                        myChart.resize();
                        var gy='';
                        var fgy='';
                        $.each(obj,function (index,value) {
                            fgy=value.unsource;
                            gy=value.source;
                        });
                        // 指定图表的配置项和数据
                        var option = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}  {c} ({d}%)"
                            },
                            legend: {
                                top:10,
                                x: 'center',//图例显示在中间
                                orient : 'horizontal',  //布局  纵向布局 图例标记居文字的左边 vertical则反之
                                width:200,      //图行例组件的宽度,默认自适应
                                itemWidth:10,  //图例标记的图形宽度
                                itemHeight:10, //图例标记的图形高度
                                data: ['稿源单位', '非稿源单位'],
                                textStyle:{    //图例文字的样式
                                    color:'white',  //文字颜色
                                    fontSize:12,    //文字大小
                                }
                            },
                            label:{
                                show:"true",
                            },
                            color:['#609bc5','#ae8fb4'],  //手动设置每个图例的颜色
                            series: [
                                {
                                    name: '',  //系列名称
                                    type: 'pie', //类型 pie表示饼图
                                    radius: ['55%', '65%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {
                                            show: false,
                                            position: 'center'
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontSize: '24',
                                                fontWeight: 'bold',
                                                color:"#fff"
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: { show: false }
                                    },
                                    data: [
                                        {value: gy, name: '稿源单位'},
                                        {value: fgy, name: '非稿源单位'}
                                    ]
                                }
                            ]
                        };
                        // 使用刚指定的配置项和数据显示图表。
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
    .rerBox{
        width: 100%;
        height: 100%;
    }
    .rer_main{
        height: 100%;
        padding: 0.15rem 0.25rem;
        box-sizing: border-box;
    }
    .gy,.fgy{
        text-align: center;
        bottom: 0.4rem;
    }
    .gy{
        left: 1rem;
    }
    .fgy{
        left: 2.47rem;
    }
    .gy p,.fgy p{
        font-size: 0.12rem;
        margin-bottom: 0.1rem;
    }
    .gyBox{
        font-size: 0.17rem;
        width: 1rem;
        height: 0.36rem;
        line-height: 0.36rem;
        border: 1px solid #6a5f54;
        text-align: center;
        color: #4b9cc9;
    }
    .zs{
        color: #987298;
    }
</style>