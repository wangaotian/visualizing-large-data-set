<template>
    <div class="pd_left left">
        <div class="pc">
            PC发稿量占比：<span>47.95%</span>
        </div>
        <div v-for="(item,index) in dt" :key="index">
            <div class="fglBox clear">
                <div class="fgl left">
                    <p class="fw">累计发稿量</p>
                    <span>{{item.presscount}}</span>
                </div>
                <div class="fgl right">
                    <p class="fw">昨日发稿量</p>
                    <span>{{item.yPresscount}}</span>
                </div>
            </div>
            <div class="yclBox clear">
                <div class="ycl left clear">
                    <span>原创量：</span>
                    <span>{{item.originalCount}}</span>
                </div>
                <div class="ycl right clear">
                    <span>原创量：</span>
                    <span>{{item.yOriginalCount}}</span>
                </div>
            </div>
            <div class="zzlBox clear">
                <div class="zzl left clear">
                    <span>转载量：</span>
                    <span>{{item.reprintCount}}</span>
                </div>
                <div class="zzl right clear">
                    <span>转载量：</span>
                    <span>{{item.yReprintCount}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                dt: ''
            }
        },
        mounted(){
            this.getData();
        },
        methods: {
            getData(){
                this.$http.get("static/json/contributionsAnalysis.json")
                        .then((data)=> {
                             this.dt=data.data.data;
                        });
            }
        },
    }
</script>
<style scoped>
    .pd_left{
        background: rgba(67, 61, 54, 0.4);
        border-radius: 0.02rem;
        width: 4.3rem;
        height: 4.5rem;
        box-sizing: border-box;
    }
    .pc{
        margin-top: 0.78rem;
        font-size: 0.15rem;
        font-weight: bold;
        color: #fff;
        padding-left: 0.92rem;
    }
    .pc span{
        font-size: 0.38rem;
        font-weight: normal;
        color: #ebc58c;
    }
    .fglBox,.yclBox,.zzlBox{
        margin: 0 auto;
    }
    .fglBox{
        padding-top: 0.6rem;
        width: 3.57rem;
    }
    .fgl{
        text-align: center;
    }
    .fgl span{
        width: 1.51rem;
        height: 0.27rem;
        line-height: 0.27rem;
        color:#b49063;
        border: 1px solid #b49063;
        border-radius: 0.05rem;
        box-sizing: border-box;
    }
    .yclBox,.zzlBox{
        width: 3.83rem;
    }
    .yclBox{
        padding-top: 0.51rem;
    }
    .zzlBox{
        padding-top: 0.16rem;
    }
    .ycl,.zzl{
        height: 0.26rem;
        line-height: 0.26rem;
    }
    .ycl span:last-child,.zzl span:last-child{
        width:1.13rem;
        text-align: center;
        color: #211c17;
        background-color: #c09463;
        font-weight: bold;
        border-radius: 0.04rem;
    }
</style>