<template>
    <section class="sectionOne">
        <h5 class="font18 colorY">转载媒体地域分析</h5>
        <div class="region kg clear">
            <Left></Left>
            <Right></Right>
        </div>
    </section>
</template>

<script>
    import Left from "./left.vue"
    import Right from "./right.vue"

    export default{
        
        components:{
            Left,Right
        }
    }
</script>

<style secpod>
    .sectionOne h5{
        height: 0.44rem;
        line-height: 0.44rem;
    }
    .kg{
        width: 100%;
    }
    .region{
        height: 5.4rem;
    }
</style>