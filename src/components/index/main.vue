<template>
    <div>
        <spread></spread>
        <send></send>
        <repeat></repeat>
        <repeated></repeated>
        <earch></earch>
    </div>
</template>

<script>

    import spread from './spread/spread.vue'
    import send from './send/send.vue'
    import repeat from './repeat/repeat.vue'
    import repeated from './repeated/repeated.vue'
    import earch from './earch/earch.vue'


export default {
    components:{
       spread,
       send,
       repeat,
       repeated,
       earch
    }
}
</script>

<style>

</style>
