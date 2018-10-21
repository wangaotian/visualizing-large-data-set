<template>
    <section class="sectionN2 sectionOne">
        <h5 class="font18 colorY">发稿量分析</h5>
        <div class="pressBox kg clear">
            <Left></Left>
            <Right></Right>
        </div>
    </section>
</template>
<script>
    import Left from './left.vue';
    import Right from './right.vue';
    import $ from "jquery";
    export default{
        data(){
            return{
            }
        },
        components:{
            Left,Right
        }
    }
</script>
<style scoped>
    .sectionN2{
        height: 5.41rem;
    }
    .pressBox{
        width: 100%;
        height: 4.9rem;
    }
</style>