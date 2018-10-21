<template>
    <div class="brLeft left bg2">
        <div>
            <p class="font18 colorY">{{numZ===null?' ':numZ}}</p>
            <p class="font18">被转载指数</p>
        </div>
        <ul>
            <li class="clear">
                <span class="imgX left">
                    <i class="x1"></i>影响媒体
                </span>
                <span class="pBox colorY right font13">
                    <p>{{numJ===null?'_':numJ}}</p>家
                </span>
            </li>
            <li class="clear">
                <span class="imgX left">
                    <i class="x2"></i>影响地域
                </span>
                <span class="pBox2 colorY right font13">
                    <p>{{numC===null?'_':numC}}</p>家 <br>
                    <span>({{numS===null?'_':numS}}个省份)</span>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                numZ:'',
                numJ:'',
                numC:'',
                numS:'',
            }
        },
        methods:{
            getData() {
                this.$http.get('static/json/articleCover.json')
                        .then((data) => {
                            this.numZ=data.data.data[0].bereprintedvagility;
                            this.numJ=data.data.data[0].mediacount;
                            this.numC=data.data.data[0].areacount;
                            this.numS=data.data.data[0].provincecount;
                        });
            }
        },
        mounted(){
            this.getData();
        }
    }
</script>

<style secpod>
    .brLeft{
        width: 3.1rem;
        height: 4.19rem;
    }
    .brLeft div{
        width: 100%;
        height: 2.77rem;
        background: url(../../../../static/img/br_bg_03.png);
        background-size: 3.1rem 2.77rem;
    }
    .brLeft div p{
        text-align: center;
    }
    .brLeft div p:first-child{
        padding-top: 1.1rem;
    }
    .brLeft div p:last-child{
        padding-top: 1.1rem;
    }
    .brLeft ul li{
        height: 0.7rem;
        border-top: 1px solid hsla(28,27%,72%,.25);
    }
    .imgX{
        width: 1.5rem;
        line-height: 0.7rem;
        font-size: 0.14rem;
        text-align: center;
        border-right: 1px solid hsla(28,27%,72%,.25);
    }
    .imgX i{
        width: 0.19rem;
        height: 0.14rem;
    }
    .imgX i.x1{
        background: url("../../../../static/img/br_xbg_03.png") no-repeat;
        background-size: 0.19rem 0.14rem;
    }
    .imgX i.x2{
        background: url("../../../../static/img/br_xbg_06.png") no-repeat;
        background-size: 0.19rem 0.14rem;
    }
    .pBox{
        width: 1.58rem;
        line-height: 0.7rem;
        text-align: center;
    }
    .pBox p{
        display: inline-block;
        font-size: 0.2rem;
    }
    .pBox2{
        width: 1.58rem;
        text-align: center;
    }
    .pBox2 p{
        padding-top: 0.08rem;
        display: inline-block;
        font-size: 0.2rem;
    }
    .pBox span{
        display: block;
    }
</style>