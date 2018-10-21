<template>
    <div class="box">
        <Headers></Headers>
        <Contents></Contents>
        <Footers></Footers>
    </div>
</template>
<script>
    import Headers from "./header.vue";
    import Contents from "./content.vue";
    import Footers from "./footer.vue";
    export default {
 
        components:{
            Headers,
            Contents,
            Footers
        }
    }
</script>
<style scoped>
    .box{
        width:14.4rem;
        height:100%;
    }
</style>