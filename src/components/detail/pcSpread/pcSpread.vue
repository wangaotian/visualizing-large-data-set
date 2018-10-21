<template>
    <section class="sectionOne clear">
        <div class="spread_l bg2 left">
            <Left></Left>
        </div>
        <div class="spread_c left">
            <Centers></Centers>
        </div>
        <div class="spread_r right">
            <Right></Right>
        </div>
    </section>
</template>

<script>
    import Left from "./left.vue"
    import Centers from "./center.vue"
    import Right from "./right.vue"


    export default{
        data(){
            return{
            }
        },
        components:{
            Left,
            Centers,
            Right,
        },
    }
</script>

<style secpod>
    .sectionOne{
        width: 12.78rem;
        height: 4.19rem;
        margin-bottom: 0.43rem;
    }
    .spread_l{
        width: 4.18rem;
        height: 100%;
        box-sizing:border-box;
        text-align: center;
    }
    .spread_c{
        width: 5.6rem;
        height: 100%;
        margin-left: 0.12rem;
    }
    .spread_r{
        width: 2.76rem;
        height: 100%;
    }
</style>