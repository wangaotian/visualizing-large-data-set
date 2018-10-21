<template>
    <div>
        <div class="timeSelection left">
            <p>时间选择：</p>
            <span class="rel"
                  @click="timePost(index)"
                  :class="{select:index==indexNum}"
                  v-for="(item,index) in timeSelect"
            >
                <i class="abs"></i>{{item}}
            </span>
        </div>
        <div class="searchTime left">
            <span>自定义时间：</span>
            <span class="timeState rel">
                <i class="abs"></i>
                <Time @on-change="getState" :hint="hint1"></Time>
            </span>
            <span>至</span>
            <span class="timeEnd rel">
                <i class="abs"></i>
                <Time @on-change="getEnd" :hint="hint2"></Time>
            </span>
            <input class="timeBtn" @click="search" type="button" value="搜索">
        </div>
    </div>
</template>
<script>
    import Time from "./time.vue"
    export default{
        data(){
            return{
                timeSelect:["近一周","近一月"],
                stateTime:'',
                endTime:'',
                hint1:"开始时间",
                hint2:"结束时间",
                indexNum:0
            }
        },
        components:{
            Time
        },
        methods:{
            getState(val){
                this.stateTime=val;
            },
            getEnd(val){
                this.endTime=val;
            },
            search(){
                this.$store.commit("state",this.stateTime);
                this.$store.commit("end",this.endTime);
            },
//            获取时间
            timeGet(e){
                var date=new Date();
                var weed=new Date(date-e*24*60*60*1000);
                var zy=weed.getFullYear()+"-";
                var zm=(weed.getMonth()+1<10?"0"+(weed.getMonth()+1):(weed.getMonth()+1))+"-";
                var zd=weed.getDate()<10?"0"+weed.getDate():weed.getDate();
                return zy+zm+zd;
            },
            timePost(index){
                this.indexNum=index;
                if(this.indexNum==0){
                    this.$store.commit("state",this.timeGet(7));
                    this.$store.commit("end",this.timeGet(0));
                }
                if(this.indexNum==1){
                    this.$store.commit("state",this.timeGet(30));
                    this.$store.commit("end",this.timeGet(0));
                }
            }
        },
        computed: {
            ind(){
                return this.$store.state.ind;
            },
            state(){
                return this.$store.state.stateTime;
            },
            end(){
                return this.$store.state.endTime;
            }
        }
    }
</script>

<style secpod>
    .timeSelection p{
        display: inline;
    }
    .timeSelection span{
        width: 0.7rem;
        height: 0.24rem;
        margin: 0 0.15rem;
        text-align: right;
        cursor: pointer;

    }
    .timeSelection>span>i{
        top: 0.04rem;
        left: 0;
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
        text-align: center;
        box-sizing: border-box;
        background: url("../../../static/img/select2.png") no-repeat;
        background-size: 0.16rem 0.16rem;
    }
    .timeSelection span.select i{
        background: url("../../../static/img/select1.png") no-repeat;
        background-size: 0.16rem 0.16rem;
    }
    .searchTime{
        margin-left: 0.78rem;
    }
    .searchTime input{
        display: inline-block;
        font-size: 0.13rem;
        height: 0.26rem;
        line-height: 0.26rem;
        color: grey;
    }
    .searchTime input:last-child{
        color:white;
    }
    .searchTime i{
        width: 0.15rem;
        height: 0.17rem;
        background: url("../../../static/img/time_03.png") no-repeat;
        background-size: 0.15rem 0.17rem;
        top:0.05rem;
        left: 0.08rem;
        z-index: 10;
    }
    .timeBtn{
        width: 0.56rem;
        background-color: #b2885a;
        cursor: pointer;
    }
</style>