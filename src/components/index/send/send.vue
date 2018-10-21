<template>
    <div>
        <section class="sectionOne">
            <h5 class="font18 hn colorY">发稿量分析</h5>
            <div class="sec_list clear">
                <header class="sec_hd clear">
                    <span class="left">主要网站全网发稿量分析</span>
                    <span class="left"></span>
                    <span class="sp left"></span>
                    <span class="ph font13 colorY left">PC</span>
                    <span class="sp left"></span>
                    <span class="ph font13 left">微博</span>
                    <span class="sp left"></span>
                    <span class="font13 left">微信</span>
                </header>
                <div class="clear">
                    <Left></Left>
                    <Right></Right>
                </div>
            </div>
        </section>
        <section class="sectionOne">
            <div class="sec_list clear">
                <header class="sec_hd clear">
                    <span class="left">主要网站PC及两微分析</span>
                    <span class="left"></span>
                    <span class="sp left"></span>
                    <span class="ph font13 colorY left">PC</span>
                    <span class="sp left"></span>
                    <span class="ph font13 left">微博</span>
                    <span class="sp left"></span>
                    <span class="font13 left">微信</span>
                </header>
                <bottom></bottom>
            </div>
        </section>
    </div>
</template>

<script>
    import Left from "./left.vue"
    import Right from "./right.vue"
    import bottom from "./bottom.vue"

    export default{
        components:{
           Left,
           Right,
           bottom
        },
        
        
    }
</script>