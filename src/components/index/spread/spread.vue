<template>
    <section class="sectionOne">
        <h5 class="hn font18 colorY">传播力抽数分析</h5>
        <div class="sec_list clear">
            <header class="sec_hd clear">
                <span class="left">传播力排行榜</span>
                <span class="left"></span>
                <span class="sp left"></span>
                <span class="ph font13 colorY left">PC传播排行</span>
                <span class="sp left"></span>
                <span class="ph font13 left">微博传播排行</span>
                <span class="sp left"></span>
                <span class="font13 left">微信传播排行</span>
            </header>
            <div class="sec_con clear">
                <ul>
                    <li>
                        <span class="ranking">排名</span>
                        <span class="webName">网站名称</span>
                        <span class="exponent">传播力指数</span>
                        <span class="issued ">发稿量</span>
                        <span class="original">原创量</span>
                        <span class="reprint">被转载量</span>
                        <span class="percentage">原创率</span>
                        <span class="uv">UV量</span>
                        <span class="pv">PV量</span>
                        <span class="browse">平均浏览数</span>
                        <span class="webType">网站类型</span>
                    </li>
                </ul>
                <ul class="ulLists">
                    <router-link :to="{path:'/index/detail'}"
                                 tag="li"
                                 :main="item.wid"
                                 v-for="(item,index) in data"
                                 
                                 :key="index"
                    >
                        <span class="ranking">{{item.number}}</span>
                        <span class="webName">{{item.webname}}</span>
                        <span class="exponent">{{item.pcvagility}}</span>
                        <span class="issued ">{{item.totalcount}}</span>
                        <span class="original">{{item.originalycount}}</span>
                        <span class="reprint">{{item.bzcount}}</span>
                        <span class="percentage">{{item.rate}}</span>
                        <span class="uv">{{item.uv}}</span>
                        <span class="pv">{{item.pv}}</span>
                        <span class="browse">{{item.at}}</span>
                        <span class="webType">{{item.typename}}</span>
                    </router-link>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    
    export default{
        data(){
            return{
                data:[],
            }
        },
        methods:{
            getList(){
                this.$http.get("static/json/vagilityRankList.json")
                        .then((data)=>{
                    this.data=data.data.content;
                });
            },
            
        },
        mounted(){
            this.getList();
        },
    }
</script>

<style secpod>
    h5{
        margin-bottom: 0.1rem;
    }
    .sec_list{
        width: 12.78rem;
        border-radius: 0.03rem;
    }
    .sec_hd{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        margin-bottom: 0.02rem;
        background: rgba(66, 61, 55, 0.7);
        border-radius: 0.03rem;
    }
    .sec_hd span:nth-child(2){
        width: 1px;
        height: 0.23rem;
        margin: 0.135rem 0.17rem;
        background-color: #f2c483;
    }
    .sec_hd span.sp{
        width: 0.27rem;
        height: 0.27rem;
        margin: 0.115rem 0;
        margin-right: 0.05rem;
    }
    .sec_hd span.ph{
        margin-right: 0.38rem;
    }
    .sec_hd span:nth-child(3){
        background: url("../../../../static/img/r_07.png") no-repeat;
        background-size: 0.27rem;
    }
    .sec_hd span:nth-child(5){
        background: url("../../../../static/img/icon-sina.png") no-repeat;
        background-size: 0.27rem;
    }
    .sec_hd span:nth-child(7){
        background: url("../../../../static/img/icon-weChat.png") no-repeat;
        background-size: 0.27rem;
    }
    .sec_con{
        width: 100%;
        /*height: 5.58rem;*/
        background: rgba(67, 61, 54, 0.4);
        padding: 0.24rem 0.25rem;
        box-sizing: border-box;
    }
    .sec_con ul li{
        width: 100%;
        border-bottom: 1px solid rgba(200, 183, 166, 0.25);
        height: 0.39rem;
        line-height: 0.39rem;
        color: #fff;
        font-size: 0.12rem;
        cursor: pointer;
    }
    .sec_con ul:first-child li{
        height: 0.43rem;
        line-height: 0.43rem;
        background: rgba(191, 148, 99, 0.15) !important;
        border-top-left-radius: 0.05rem;
        border-top-right-radius: 0.05rem;
        cursor: default;
    }
    .sec_con ul li::after{
        content: '';
        display: block;
        overflow: hidden;
        clear: both;
    }
    .sec_con ul li span{
        float: left;
        text-align: center;
        color: #fff;
        height: 0.39rem;
        line-height: 0.39rem;
    }
    .ranking{width: 0.7rem;}
    .webName{width: 1.75rem;}
    .exponent{width: 1rem;}
    .issued{width: 0.9rem;}
    .original{width: 1.2rem}
    .reprint{width: 0.85rem}
    .percentage{width: 1.15rem}
    .uv{width: 0.8rem}
    .pv{width: 1.3rem}
    .browse{width: 1rem}
    .webType{width: 1.48rem}
    .sec_con ul.ulLists li:nth-child(2n){
        background: rgba(255, 255, 255, 0.05);
    }
    .sec_con ul.ulLists li span.webName,.sec_con ul.ulLists li span.exponent{
        color:#dcb176;
    }
</style>