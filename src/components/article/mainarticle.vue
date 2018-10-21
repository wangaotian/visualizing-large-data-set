<template>
    <div>
        <produce></produce>
        <ways></ways>
        <pubished></pubished>
        <media></media>
    </div>
</template>

<script>
    import produce from "./produce/produce.vue"
    import ways from "./ways/ways.vue"
    import pubished from "./pubished/pubished.vue"
    import media from "./media/media.vue"

    export default{
        components:{
            produce,
            ways,
            pubished,
            media
        }
    }
</script>