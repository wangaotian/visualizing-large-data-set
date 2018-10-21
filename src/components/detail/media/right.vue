<template>
    <div class="dyBox right bg2">
        <div class="tabBox">
            <ul class="tabs after">
                <li :class="{red:show1}"
                    @click="show1=true,show2=false">省份</li>
                <li  :class="{red:show2}"
                     @click="show2=true,show1=false"
                >城市</li>
            </ul>
        </div>
        <div class="cityNum clear" v-show="show1"></div>
        <div class="chinaCity clear" v-show="show2">
            <div id="left" class="left"
                 style="width: 6rem;height: 4.4rem;"
            ></div>
            <div id="right" class="right"
                 style="width: 2.5rem;height: 4.4rem;"
            ></div>
        </div>
    </div>
</template>
<script>
    import  echarts  from 'echarts';
    import china from '../../../../static/js/china';
    import $ from "jquery";
    export default {
        data(){
            return{
                show1:true,
                show2:false
            }
        },
        methods:{
            GetOver(){
                this.$http.get('static/json/getareaspreadbyproviceandcity.json')
                        .then((data)=>{
                            chartData(data.data.data);
                });
                function chartData(obj){
                    var provenceInfo=[];
                    var max=0;
                    $.each(obj,function(index,item){
                        provenceInfo.push({name:item.name,value:item.count});
                        if (item.count>max) {
                            max = item.count;
                        }
                        // console.log(provenceInfo);
                    });
                    // 基于准备好的dom，初始化echarts实例

                    var el1=document.getElementsByClassName('cityNum')[0];
                    if(el1){
                        var myChart = echarts.init(el1);
                        myChart.resize();
                        // 指定图表的配置项和数据
                        var option={
                            tooltip:{
                                trigger:'item',
                                formatter:function(p){
                                    for(var i = 0;i<provenceInfo.length;i++){
                                        if(p.name == provenceInfo[i].name)return p.name + '<br/>转载量:' + '  ' + p.value;    //悬浮框里面的值
                                    }
                                    if(!p){
                                        return '{b} <br/> -';
                                    }
                                }
                            },
                            visualMap: {
                                min: 0,
                                max: max,
                                left: '10%',
                                bottom: '1%',
                                text: ['高','低'],           // 文本，默认为数值文本
                                calculable: true,
                                color: ["#7b5e3d", "#d8ac73"],
                                textStyle: {
                                    color: "#fefefe"
                                }
                            },
                            series: [
                                {
                                    name: '地域',
                                    type: 'map',
                                    mapType: 'china',
                                    roam: false,
                                    label: {
                                        normal: {
                                            show: false
                                        },
                                        emphasis: {
                                            show: false
                                        }
                                    },
                                    data:provenceInfo,
                                    zoom: 1.2
                                }
                            ]
                        };
                        myChart.setOption(option);
                    }
                }
            },
            GetData(){
                this.$http.get('static/json/getareaspreadbyproviceandcity.json')
                        .then((data)=>{
                            chartCity(data.data.data);
                            chartChina(data.data.data);
                });
                function chartCity(obj){
                    var cityData=[];
                    var geoCoordMap={};
                    $.each(obj,function(index,item){
                        cityData.push({name:item.name,value:item.count});
                        var newData=[];
                        if(item.longitude&&item.latitude){
                            newData.push(item.longitude,item.latitude);
                            geoCoordMap[item.name] = newData;
                        }
                        // console.log(newData)
                    });
                    var convertData = function (data) {
                        var res = [];
                        for (var i = 0; i < data.length; i++) {
                            var geoCoord = geoCoordMap[data[i].name];
                            if (geoCoord) {
                                res.push({
                                    name: data[i].name,
                                    value: geoCoord.concat(data[i].value)
                                });
                            }
                        }
                        return res;
                    };
                    var el2 = document.getElementById('left');
                    if(el2){
                        // 基于准备好的dom，初始化echarts实例
                        var myChart = echarts.init(el2);
                        myChart.resize();
                        // 指定图表的配置项和数据
                        var option = {
                            // backgroundColor:"#402b0d",
                            tooltip : {
                                trigger: 'item',
                                formatter: function (p) {
                                    return p.name + ' : ' + p.value[2];
                                }
                            },
                            geo: {
                                map: 'china',
                                label:{
                                    emphasis:{
                                        show: false
                                    }
                                },
                                roam:true,
                                itemStyle:{
                                    normal:{
                                        areaColor: '#4c3d2a',//地图本身的颜色
                                        borderColor: '#111'
                                    },
                                    emphasis:{
                                        areaColor: '#cad'//鼠标移动上去显示的颜色
                                    }
                                },
                                zoom:1.2
                            },
                            series : [
                                {
                                    name: '城市 ',
                                    type: 'scatter',
                                    coordinateSystem: 'geo',
                                    data: convertData(cityData),
                                    symbolSize: 8,
                                    itemStyle: {
                                        normal: {
                                            color: '#ffff00',
                                            opacity: 1
                                        }
                                    }
                                },
                                {
                                    name: '城市',
                                    type: 'effectScatter',
                                    coordinateSystem: 'geo',
                                    data: convertData(cityData.sort(function (a, b) {
                                        return b.value - a.value;
                                    }).slice(0, 10)),
                                    symbolSize: 15,
                                    itemStyle: {
                                        normal: {
                                            color: '#ffff00',
                                            opacity: 1
                                        }
                                    },
                                    showEffectOn: 'render',
                                    rippleEffect: {
                                        brushType: 'stroke'
                                    },
                                    hoverAnimation: true,
                                    zlevel: 1
                                }
                            ]
                        };
                        myChart.setOption(option);
                    }
                }
                function chartChina(obj) {
                    var ct=[],ctd=[];
                    for (var i = 0; i <obj.length; i++) {
                        ct.push(obj[i].name);
                        ctd.push(obj[i].count);
                    }
                    ct = ct.reverse();
                    ctd = ctd.reverse();
                    var el3 = document.getElementById('right');
                    if(el3){
                        var myChart2s = echarts.init(el3);
                        myChart2s.resize();
                        var option1s={
                            // backgroundColor:"#402b0d",
                            title: {
                                text: 'Top 10:',
                                top:24,
                                textStyle: {
                                    color: "#ffffff",
                                    fontSize: 13,
                                    fontWeight: "normal"
                                }
                            },
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            grid: {
                                left: '1.5%',
                                right: '8%',
                                top: '10%',
                                containLabel: true
                            },
                            xAxis: {
                                show: false,
                                type: 'value',
                                boundaryGap: [0, 0.01],
                                position: "top",
                                scale: true,
                                axisLabel: {
                                    color: "#ffca2a",
                                    width:10
                                },
                                splitNumber: 4,
                                splitLine: {
                                    show: false
                                },
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                }
                            },
                            yAxis: {
                                type: 'category',
                                data: ct,
                                axisLine: {
                                    show: false
                                },
                                axisTick: {
                                    show: false
                                },
                                axisLabel: {
                                    color:"#fff",
                                    fontSize: 13
                                }
                            },
                            series: [
                                {
                                    name: '城市',
                                    type: 'bar',
                                    data: ctd,
                                    barWidth: 10,   //柱子的宽度
                                    itemStyle: {
                                        color: "#ae8961",
                                        fontSize: 13,
                                        barBorderRadius: 5
                                    }
                                },

                            ]
                        };
                        myChart2s.setOption(option1s);
                    }
                }
            }
        },
        mounted(){
            this.GetOver();
            this.GetData();
        },
        
        
    }
</script>
<style scope>
    .dyBox{
        width: 9.06rem;
        height: 5.4rem;
        padding: 0.2rem;
    }
    .tabBox{height: .5rem;}
    .cityNum{height:4.3rem;}
    .chinaCity{height:4.3rem;}
    .tabs{margin-left: .2rem;}
    .tabs>li{
        width: .6rem;height: .3rem;
        text-align: center;
        line-height: .3rem;
        margin-top: .15rem;
        color: #d2b07d;
        border: 1px solid #d2b07d;
        float: left;
        font-size: .14rem;
    }
    .tabs>li.red{
        color: white;
        border: 1px solid #ea3323;
        background: #ea3323;
    }
</style>