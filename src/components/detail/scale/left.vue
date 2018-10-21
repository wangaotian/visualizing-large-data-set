<template>
    <div class="sd_left left" id="sdl_main"></div>
</template>
<script>
    import $ from "jquery";
    import echarts from 'echarts';
    export default{
        data(){
            return{

            }
        },
        methods:{
            getId(){
                this.$http.get('static/json/webWasRepublished.json')
                        .then((data)=>{
//                            console.log(data.data.data);
                            getEchartsrts(data.data.data);
                        });
                function getEchartsrts(obj){
                    var webtypename=[],wasrepublished=[],data=[];
                    $.each(obj,function (index,item) {
                        webtypename.push(item.webtypename);
                        wasrepublished.push(item.wasrepublished);
                        data.push({
                            value:item.wasrepublished,
                            name:item.webtypename
                        })
                    });
                    var el = document.getElementById('sdl_main');
                    if(el){
                        var myChart = echarts.init(el);
                        var option = {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{b}: {c} ({d}%)",
                                data:webtypename
                            },
                            color:['rgb(255,255,101)','rgb(255,211,72)','rgb(242,94,91)','rgb(133,230,240)'],
                            series: [
                                {
                                    type:'pie',
                                    selectedMode: 'single',
                                    radius: ['45%', '50%'],
                                    label: {
                                        normal: {
                                            position: 'inner'
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: false
                                        }
                                    },
                                },
                                {
                                    type:'pie',
                                    radius: ['45%', '55%'],
                                    label: {
                                        normal: {
                                            formatter: '{b|{b}：} {per|{d}%}  ',
                                            borderWidth: 1,
                                            rich: {}
                                        }
                                    },
                                    data:data
                                }
                            ]
                        };
                        myChart.setOption(option);
                    }
                }
            }
        },
        mounted(){
            this.getId();
        },
    }
</script>
<style scoped>
    .sd_left{
        width: 39%;
        height: 4rem;
        margin-top: 0.02rem;
        margin-bottom: 0.3rem;
        background: rgba(67, 61, 54, 0.4);
        clear: both;
        border-radius: 0.03rem;
    }
</style>