<template>
    <section class="sectionOne">
        <h5 class="hn font18 colorY">被转载量分析</h5>
        <div class="sec_list clear">
            <div class="rel_hd rl_hd left clear">
                <span class="left">主要网站被转载量分析</span>
            </div>
            <div class="rec_hd rc_hd right clear">
                <span class="left">被转载量TOP媒体分析</span>
            </div>
        </div>
        <div class="sec_list clear">
            <div class="rep_left rp_left left">
                <RepLeft></RepLeft>
            </div>
            <div class="rep_right rp_right rel right">
                <RepRight></RepRight>
            </div>
        </div>
    </section>
</template>

<script>
    import RepLeft from "./left.vue"
    import RepRight from "./right.vue"

    export default{
        components:{
            RepLeft,
            RepRight
        },
    }

</script>

<style secpod>
    .rel_hd,.rep_left{
        width: 7.27rem;
    }
    .rec_hd,.rep_right{
        width: 5.4rem;
    }
    .rep_left,.rep_right{
        height: 4.9rem;
        background: rgba(67, 61, 54, 0.4);
    }
</style>