<template>
    <section class="sectionNum9">
        <h5 class="hn font18 colorY">文章被转载分析</h5>
        <header class="h bg1">
            <span class="numFGF colorY right">非规范被转载总量：{{this.num}}</span>
        </header>
        <div class="arBox bg2 rel">
            <div class="noData">暂无数据</div>
            <div class="chartDom">
                <div class="domBox">
                    <div style="height: 0.01rem; width: 3.8rem; min-width: 11.5rem; border-bottom: 0.01rem solid rgb(116, 116, 116); position: absolute; left: 0rem; bottom: 0.2rem;">
                        <span style="width: 0px; height: 0.04rem; position: absolute; left: 0.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 0.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 0.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 0.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 0.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 0.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0.05rem; height: 0.05rem; position: absolute; left: 0.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70); border-radius: 50%; background-color: rgb(173, 146, 112); margin-left: -0.03rem; margin-bottom: -0.02rem; z-index: 4;"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 0.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 0.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 1.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 2.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0.05rem; height: 0.05rem; position: absolute; left: 3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70); border-radius: 50%; background-color: rgb(173, 146, 112); margin-left: -0.03rem; margin-bottom: -0.02rem; z-index: 4;"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 3.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 4.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0.05rem; height: 0.05rem; position: absolute; left: 5.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70); border-radius: 50%; background-color: rgb(173, 146, 112); margin-left: -0.03rem; margin-bottom: -0.02rem; z-index: 4;"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 5.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 6.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0.05rem; height: 0.05rem; position: absolute; left: 7.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70); border-radius: 50%; background-color: rgb(173, 146, 112); margin-left: -0.03rem; margin-bottom: -0.02rem; z-index: 4;"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 7.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 8.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 9.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0.05rem; height: 0.05rem; position: absolute; left: 9.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70); border-radius: 50%; background-color: rgb(173, 146, 112); margin-left: -0.03rem; margin-bottom: -0.02rem; z-index: 4;"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.6rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.7rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.8rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 10.9rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 11rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 11.1rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 11.2rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 11.3rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 11.4rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span><span style="width: 0px; height: 0.04rem; position: absolute; left: 11.5rem; bottom: 0px; border-left: 0.01rem solid rgb(93, 83, 70);"></span></div>
                    <div class="chartData">
                        <div class="times">{{this.toTime}}</div>
                        <div  class="chartShow"
                              v-for="(item,index) in list"
                              :style="{bottom:0.2+index*0.6 +'rem'}"
                        >{{item.webName}}({{item.webTime}})</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import echarts from 'echarts';
    import $ from "jquery";
    export default {
        data(){
            return{
                num:"",
                list:"",
                toTime:""
            }
        },
        methods:{
            getData(){
                this.$http.get("static/json/articleReproduceAnalysis.json")
                        .then((data)=>{
                    console.log(data.data);
                            if(data.data.data.length==0){
                                $(".noData").css("display","block");
                                $(".chartDom").css("display","none");
                            }else{
                                this.list=data.data.data[0].list;
                                this.toTime=data.data.data[0].time;
                                this.num=data.data.data[0].list.length>6?6:data.data.data[0].list.length;
                                $(".noData").css("display","none");
                                $(".chartDom").css("display","block");
                            }
                });
            }
        },
        mounted(){
            this.getData();
        }
    }


</script>
<style scoped>
    .sectionNum9{
        width: 12.78rem;
        margin-top: 0.4rem;
    }
    .numFGF{
        padding-right: 0.25rem;
    }
    .arBox{
        height: 5.5rem;
        margin-top: 0.02rem;
    }
    .noData{
        padding: 0.3rem;
    }
    .chartDom{
        width: 11.5rem;
        height: 4rem;
        position: absolute;
        left: 0.5rem;
        top: 0.7rem;
        overflow: hidden;
    }
    .domBox{
        position: absolute;
        bottom: 0.1rem;
        width: 3.8rem;
        height: 2.8rem;
    }
    .chartData{
        position: absolute;
        bottom: 0.2rem;
        left: 0.7rem;
        min-height: 3.5rem;
        width: 0;
        border-left: 0.01rem solid rgb(96, 87, 73);
        height: 2.8rem;
    }
    .times{
        position: absolute;
        bottom: -0.2rem;
        left: -0.36rem;
        width: 1.5rem;
        height: 0.14rem;
        line-height: 0.14rem;
        color: rgb(255, 255, 255);
        font-size: 0.12rem;
        z-index: 5;
    }
    .chartShow{
        position: absolute;
        left: 0;
        width: 2rem;
        height: 0.5rem;
        border-radius: 0.25rem;
        background-color: rgb(172, 137, 97);
        line-height: 0.5rem;
        color: rgb(0, 0, 0);
        font-size: 0.14rem;
        text-align: center;
    }
</style>