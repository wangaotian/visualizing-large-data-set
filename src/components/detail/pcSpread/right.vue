<template>
    <div>
        <div class="h bg1">PC端传播力排行</div>
        <div class="pcCon bg2 clear">
            <span class="wName2 wName font13 left clear"><i class="wi1 left"></i>全网PC排行</span>
            <p class="wP2 wP colorY left clear">{{dataPH.rank}} <i></i></p>
        </div>
        <div class="pcCon2 pcCon bg2 clear">
            <span class="wName2 wName font13 left clear"><i class="wi2 left"></i>同网站类型排行</span>
            <p class="wP2 wP colorY left clear">{{dataPH.webtyperank}} <i></i></p>
        </div>
        <div class="pcBot clear">
            <div class="botL left">
                <div class="h bg1">被转载总量</div>
                <div class="zNum bg2 clear">
                    <div>
                        <span class="font13">总计</span>
                        <p class="colorY font18">{{dataNum2.republishedcount}}</p>
                    </div>
                    <div>
                        <span class="rel font13"
                              @mouseover="show3=true"
                              @mouseout="show3=false"
                        >昨日
                            <i>?</i>
                            <p v-show="show3" class="zT abs font13 colorY">取值为当前时间的前一天</p>
                        </span>
                        <p class="colorY font18">{{dataNum2.yesterrepublishedcount}}</p>
                    </div>
                    <div>
                        <span class="font13">环比</span>
                        <p class="colorY font18"
                           :class="{colorRed:parseInt(dataNum2.republishedrate)>0}"
                        >{{dataNum2.republishedrate}}</p>
                    </div>
                    <div>
                        <span class="font13">环比</span>
                        <p class="colorY font18"
                           :class="{colorRed:parseInt(dataNum2.yesterrepublishedrate)>0}"
                        >{{dataNum2.yesterrepublishedrate}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                dataPH:[],
                dataNum2:[],
                show3:false
            }
        },
        mounted(){
            this.getData1();
            this.getData2();
        },
        methods:{
            getData1(){
                this.$http.get("static/json/totalSequential.json")
                        .then((data)=>{
                            this.dataNum2 = data.data.data[2];
                        });
            },
            getData2(){
                this.$http.get("static/json/vagilityExponentRank.json")
                        .then((data)=>{
                            this.dataPH=data.data.data[0];
                        });
            }
        },
    }
</script>

<style secpod>
    .wName2{
        width: 1.92rem;
        text-align: left;
    }
    .wi1{
        width: 0.23rem;
        height: 0.23rem;
        margin: 0.25rem 0.2rem 0 0.3rem;
        background: url("../../../../static/img/jlx_03.png") no-repeat;
        background-size: .23rem .23rem;
    }
    .wi2{
        width: 0.23rem;
        height: 0.19rem;
        margin: 0.27rem 0.2rem 0 0.3rem;
        background: url("../../../../static/img/jlx_10.png") no-repeat;
        background-size: 0.23rem 0.19rem;
    }
    .wP2{
        width: 0.82rem;
    }
    .wP2 i{
        float: right;
        width: 0.1rem;
        height: 0.13rem;
        background: url("../../../../static/img/jlx_06.png") no-repeat;
        background-size: 0.1rem 0.13rem;
        margin-right: 0.2rem;
        margin-top: 0.29rem;
    }
    .colorRed{
        color:red;
    }
</style>