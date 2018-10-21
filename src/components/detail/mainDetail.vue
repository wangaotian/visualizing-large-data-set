<template>
    <div>
        <!--详情页-->
        <PcSpread></PcSpread>
        <trend></trend>
        <draft></draft>
        <reprint></reprint>
        <scale></scale>
        <rank></rank>
        <media></media>
    </div>
</template>
<script>
    import PcSpread from "./pcSpread/pcSpread.vue"
    import trend from "./trend/trend.vue"
    import draft from "./draft/draft.vue"
    import reprint from "./reprint/reprint.vue"
    import scale from "./scale/scale.vue"
    import rank from "./rank/rank.vue"
    import media from "./media/media.vue"
    
    export default{
        components:{
            PcSpread,
            trend,
            draft,
            reprint,
            scale,
            rank,
            media
        }
    }
</script>