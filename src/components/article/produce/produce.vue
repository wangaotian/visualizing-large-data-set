<template>
    <section id="produce">
        <h5 class="hn font18 colorY">被转载指数与转载量分析</h5>
        <div class="clear">
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
            Left,
            Right
        }
    }
</script>
<style secpod>
   #produce{
       width: 13rem;
   }
</style>