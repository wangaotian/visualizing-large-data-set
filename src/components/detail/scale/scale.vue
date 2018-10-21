<template>
    <section class="sectionN3 sectionOne clear">
        <header class="h bg1">各网站类型被转载量占比</header>
        <Left></Left>
        <Right></Right>
    </section>
</template>

<script>
    import Left from "./left.vue"
    import Right from "./right.vue"
    export default{
        data(){
            return{}
        },
        components:{
            Left,Right
        }
    }
</script>
<style scoped>
    .sectionN3{
        height: 4.61rem;
    }
</style>