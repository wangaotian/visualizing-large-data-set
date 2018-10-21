<template>
    <div>
        <div class="h bg1">信息总览</div>
        <div v-for="item in data">
            <div class="pcCon bg2 clear">
                <span class="wName font13 left">网站名称</span>
                <p class="wP colorY left">{{item.webname}}</p>
                <span class="wName font13 left">网站类型</span>
                <p class="wP colorY left">{{item.webtype}}</p>
            </div>
            <div class="pcCon2 pcCon bg2 clear">
                <span class="wName font13 left">日均UV量</span>
                <p class="wP colorY left">{{item.uv}}</p>
                <span class="wName font13 left">日均PV量</span>
                <p class="wP colorY left">{{item.pv}}</p>
            </div>
        </div>
        <div class="pcBot clear">
            <div class="botL left">
                <div class="h bg1">发稿总量</div>
                <div class="zNum bg2 clear">
                    <div>
                        <span class="font13">总计</span>
                        <p class="colorY font18">{{dataNum0.totalcount}}</p>
                    </div>
                    <div>
                        <span class="mouse rel font13"
                              @mouseover="show1=true"
                              @mouseout="show1=false"
                        >昨日
                            <i>?</i>
                            <p v-show="show1" class="zT abs font13 colorY">取值为当前时间的前一天</p>
                        </span>
                        <p class="colorY font18">{{dataNum0.yestertotalcount}}</p>
                    </div>
                    <div>
                        <span class="font13">环比</span>
                        <p class="colorY font18"
                           :class="{colorRed:parseInt(dataNum0.totalrate)>0}"
                        >{{dataNum0.totalrate}}</p>
                    </div>
                    <div>
                        <span class="font13">环比</span>
                        <p class="colorY font18"
                           :class="{colorRed:parseInt(dataNum0.yestertotalrate)>0}"
                        >{{dataNum0.yestertotalrate}}</p>
                    </div>
                </div>
            </div>
            <div class="botL right">
                <div class="h bg1">原创总量</div>
                <div class="zNum bg2 clear">
                    <div>
                        <span class="font13">总计</span>
                        <p class="colorY font18">{{dataNum1.originalycount}}</p>
                    </div>
                    <div>
                        <span class="mouse rel font13"
                              @mouseover="show2=true"
                              @mouseout="show2=false"
                        >昨日
                            <i>?</i>
                            <p v-show="show2" class="zT abs font13 colorY">取值为当前时间的前一天</p>
                        </span>
                        <p class="colorY font18">{{dataNum1.yesteroriginalycount}}</p>
                    </div>
                    <div>
                        <span class="font13">环比</span>
                        <p class="colorY font18"
                           :class="{colorRed:parseInt(dataNum1.originalyrate)>0}"
                        >{{dataNum1.originalyrate}}</p>
                    </div>
                    <div>
                        <span class="font13">环比</span>
                        <p class="colorY font18"
                           :class="{colorRed:parseInt(dataNum1.yesteroriginalyrate)>0}"
                        >{{dataNum1.yesteroriginalyrate}}</p>
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
                data:[],
                dataNum0:[],
                dataNum1:[],
                show1:false,
                show2:false
            }
        },

        mounted(){
            this.getData1();
            this.getData2();
        },
        methods:{
            getData1(){
                this.$http.get("static/json/totalSequential.json").then((data)=>{
                    this.dataNum0 = data.data.data[0];
                    this.dataNum1 = data.data.data[1];
                });
            },
            getData2(){
                this.$http.get("static/json/overview.json").then((data)=>{
                    this.data=data.data.data;
                });
            },
            
        },
       
    }
</script>

<style secpod>
    .pcCon{
        margin-top: 0.02rem;
        width: 100%;
        border-bottom: 1px solid rgba(203, 182, 164, 0.25);
    }
    .pcCon2{
        margin-top: 0;
        border-bottom: none;
    }
    .wName,.wP{
        height: 0.75rem;
        line-height: 0.75rem;
        text-align: center;
    }
    .wName{
        width: 1.19rem;
        border-right: 1px solid rgba(203, 182, 164, 0.25);
    }
    .wP{
        width: 1.58rem;
        color: #ebc58c;
        font-size: .16rem;
        border-right: 1px solid rgba(203, 182, 164, 0.25);
    }
    .wP:last-child{
        border-right: none;
    }
    .pcBot{
        width: 100%;
        margin-top: 0.16rem;
    }
    .botL{
        width: 2.74rem;
    }
    .zNum{
        margin-top: 0.02rem;
    }
    .zNum div{
        margin: 0 0 0 0.32rem;
        width: 1.05rem;
        height: 0.73rem;
        padding-top: 0.12rem;
        float: left;
    }
    .colorRed{
        color:red;
    }
    .zNum div span{
        height: 0.18rem;
        line-height: 0.18rem;
    }
    .zNum div span i{
        width: 0.16rem;
        height: 0.16rem;
        line-height: 0.18rem;
        border-radius: 50%;
        background: #b2885a;
        color:black;
        font-weight: bold;
        text-align: center;
    }
    .zNum div span p.zT{
        width: 1.1rem;
        height: 0.44rem;
        padding: 0.05rem;
        background: rgba(34,30,22,.9);
        border: 1px solid #c59c69;
        border-radius: .05rem;
        position: absolute;
        bottom: 0.2rem;
        left: -0.1rem;
        text-align: center;
    }
</style>