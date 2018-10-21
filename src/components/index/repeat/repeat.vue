<template>
    <section class="sectionOne">
        <h5 class="hn font18 colorY">转载量分析</h5>
        <div class="8sec_list clear">
            <div class="rl_hd left clear">
                <span class="left">主要网站转载"稿源单位"/"非稿源单位"稿件数量及占比分析</span>
            </div>
            <div class="rc_hd rl_hd right clear">
                <span class="left">"稿源单位"/"非稿源单位"被转载占比分析</span>
            </div>
        </div>
        <div class="sec_list clear">
            <div class="re_left left">
                <left></left>
            </div>
            <div class="re_right right">
                <right></right>
            </div>
        </div>

        
    </section>
</template>

<script>
    import left from "./left.vue"
    import right from "./right.vue"

    export default{
        components:{
           left,
           right
        },
    }
</script>

<style secpod>
    .rl_hd,.rc_hd{
        height: 0.5rem;
        line-height: 0.5rem;
        padding-left: 0.27rem;
        margin-bottom: 0.02rem;
        background: rgba(66, 61, 55, 0.7);
        border-radius: 0.03rem;
    }
    .rl_hd,.re_left{
        width: 8.26rem;
    }
    .rc_hd,.re_right{
        width: 4.42rem;
    }
    .re_left,.re_right{
        background: rgba(67, 61, 54, 0.4);
        height: 4.9rem;
        border-radius: 0.02rem;
    }
    .rl_hd a.ck{
        text-decoration:underline;
        margin-right: 0.3rem;
    }
    .alertBox{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        display: none;
    }
    .alertC{
        margin: 0.8rem auto;
        width: 10rem;
        height: 6rem;
        border-radius: 0.05rem;
        background: #fff;
    }
    .alert_top{
        height: 0.4rem;
        line-height: 0.4rem;
        color: #775a39;
        border-bottom: 1px solid #816A4D;
        padding-left: 0.27rem;
    }
    .alert_tl{
        font-size: 0.2rem;
        font-weight: bold;
    }
    .close{
        font-size: 0.22rem;
        line-height: 0.4rem;
        color: #745935;
        margin: 0 0.1rem 0 0.25rem;
    }
    .alertC p{
        text-align: right;
        padding-right: 0.2rem;
        color:black;
    }
    .alert_bottom ul{
        float: left;
        margin-bottom: 0.2rem;
        height: 2.5rem;
    }
    .alert_bottom ul li{
        width: 3rem;
        margin-left: 0.33rem;
        color:black;
    }
    .alert_bottom ul li.liFist{
        width: 1rem;
        height: 0.3rem;
        line-height: 0.32rem;
        background: #B2885A;
        color: #fff;
        text-align: center;
        margin-bottom: 0.2rem;
    }
    .website{
        width: 1rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: right;
        overflow: hidden;
    }
    .colorP{
        -webkit-appearance: none;
        width: 1.65rem;
        height: 0.1rem;
        margin: 0.05rem 0 0 0.15rem;
        border-radius: 0.05rem;
        background: #EDE2D7;
    }
    .colorP span{
        height: 100%;
        border-radius: 0.05rem;
        background: #d49300;
    }
</style>