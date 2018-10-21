<template>
   <div id="content">
        <div class="tab">
            <ul>
                <li :class="{show:index==nowIndex}"
                    v-for="(item,index) in arr"
                    :key="index"
                >
                    <div></div>
                    <p>{{item}}</p>
                </li>
            </ul>
        </div>
        <div class="list">
            <div class="head">
                <TimeSelect></TimeSelect>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
   </div>
</template>

<script>
    import TimeSelect from './index/timeSelect.vue'


    export default{
        data(){
            return{
                arr:["中央","行业","地方","城市"],
                index:0,
                nowIndex:0
            }
        },
        components:{
            TimeSelect,
        },
    }
</script>

<style secpod>
    #content{
        
        width:99%;
    }
    .tab{
        float: left;
        width: 1.16rem;
        height: 100%;
        background-color: rgba(48, 48, 47, 0.61);
    }
    .tab>ul{
        width: 1.16rem;
        padding: 0 0.065rem;
        opacity: 0.8;
    }
    .tab>ul>li{
        width: 1.03rem;
        height: 1.1rem;
        position: relative;
        font-size: 0.15rem;
        text-align: center;
        padding: 0.65rem 0.035rem 0 0.035rem;
        border-bottom: 0.02rem solid #272524;
        box-sizing: border-box;
    }
    .tab>ul>li:last-child{
        border: none;
    }
    .tab>ul>li:nth-child(1){
        background: url("../../static/img/li_bg_02.png") no-repeat;
        background-size: 1.03rem 1.1rem;
    }
    .tab>ul>li:nth-child(2){
        background: url("../../static/img/li_bg_04.png") no-repeat;
        background-size: 1.03rem 1.1rem;
    }
    .tab>ul>li:nth-child(3){
        background: url("../../static/img/li_bg_05.png") no-repeat;
        background-size: 1.03rem 1.1rem;
    }
    .tab>ul>li:nth-child(4){
        background: url("../../static/img/li_bg_06.png") no-repeat;
        background-size: 1.03rem 1.1rem;
    }
    .tab>ul>li>div{
        position: absolute;
        top: 0;
        left: -0.065rem;
        width: 1.16rem;
        height: 1.1rem;
        border-left: 0.05rem solid #f9b160;
        display: none;
    }
    .tab>ul>li:nth-child(1) div{
        background: url("../../static/img/li_bg_02_2.png") no-repeat;
        background-size: 1.03rem 1.1rem;
        background-position: 1px -1px;
        background-color: rgba(249, 177, 96, 0.1);
    }
    .tab>ul>li:nth-child(2) div{
        background: url("../../static/img/li_bg_04_2.png") no-repeat;
        background-size: 1.03rem 1.1rem;
        background-position: 1px 1px;
        background-color: rgba(249, 177, 96, 0.1);

    }
    .tab>ul>li:nth-child(3) div{
        background: url("../../static/img/li_bg_05_2.png") no-repeat;
        background-size: 1.03rem 1.1rem;
        background-position: 1px 1px;
        background-color: rgba(249, 177, 96, 0.1);
    }
    .tab>ul>li:nth-child(4) div{
        background: url("../../static/img/li_bg_06_2.png") no-repeat;
        background-size: 1.03rem 1.1rem;
        background-position: 1px 1px;
        background-color: rgba(249, 177, 96, 0.1);
    }
    .tab>ul>li.show{
        background: none;
        border: none;
    }
    .tab>ul>li.show div{
        display: block;
    }
    .tab>ul>li.show p{
        color: #b79463;
    }


/* 右边内容 */
    .list{
        float: right;
        width: 12.8rem;
        padding-right: 0.5rem;
    }
    .head{
        height: 0.26rem;
        padding-top: 0.47rem;
        margin-bottom: 0.7rem;
    }
</style>