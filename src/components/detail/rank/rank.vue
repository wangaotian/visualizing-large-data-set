<template>
    <section class="sectionN6 sectionOne">
        <div class="heads bg1">
            <span @click="getClick(1)" :class="{current:ind==1}">昨日排行</span>
            <div class="upline"></div>
            <span @click="getClick(2)"  :class="{current:ind==2}">周排行</span>
            <div class="upline"></div>
            <span @click="getClick(3)"  :class="{current:ind==3}">月排行</span>
        </div>
        <div class="acBox">
            <ul class="ulRank clear">
                <router-link :to="{path:'/index/article'}"
                             tag="li"
                             v-for="(item,index) in dataArt"
                             :key="index"
                             :id="item.id"

                >
                    <span class="ranking">{{index+1}}</span>
                    <a :href="item.urls" class="colorB">{{item.title}}</a>
                    <div class="right">
                        <div class="exp">
                            被转载指数:
                            <span>{{item.pcvagility}}</span>
                        </div>
                        <div class="amount">
                            被转载量:
                            <span>{{item.bzcount}}</span>
                        </div>
                        <div class="time">
                            发布时间:
                            <span>{{item.pubtimeformat}}</span>
                        </div>
                    </div>
                </router-link>
            </ul>
            <div class="more">
                <a href="">查看更多文章</a>
            </div>
        </div>
    </section>
</template>

<script>

    import $ from "jquery";
    export default {
        data(){
            return{
                dataArt:"",
                //文章-页码
                pageIndex:1,
                // 一页有多少条文章信息
                pageSize:8,
                // 文章--排序（1.热门 2.最新）
                order:1,
                ind:3,
                // 昨日排行榜
                yesterDate:""
            }
        },
        methods:{
            
            getArticle(){
                this.$http.get("static/json/signalwebsitearticle.json")
                        .then((data)=>{
                            if(data.data.data!=0){
                                $(".more").css("display","block");
                            }else{
                                $(".more").css("display","none");
                            }
                            this.ListClick(data.data.data);
                        });
            },
            ListClick(obj){
                let dateS=[];
                $.each(obj,function (index, item) {
                    //设置时间样式
                    var date=new Date(item.pubtimeformat);
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    var D = date.getDate()<10?'0'+date.getDate():date.getDate();
                    var yM=Y+M+D;
                    dateS.push({
                        title:item.title,
                        pcvagility:item.pcvagility,
                        bzcount:item.bzcount,
                        pubtimeformat:yM,
                        urls:item.url,
                        id:item.nid
                    });
                });
                this.dataArt=dateS;
            },
            getClick(val){
                this.ind=val;
                // 获取当前的时间
                let newDate = new Date();
                let newYear = newDate.getFullYear()+'-';
                let newMouth= (newDate.getMonth()+1 < 10 ? '0'+(newDate.getMonth()+1) : newDate.getMonth()+1) + '-';
                let newData= (newDate.getDate()-1 < 10 ? '0'+(newDate.getDate()-1): newDate.getDate()-1);
                let NowDate=newYear+newMouth+newData;
                if(val==1){
                    //获取----【昨日排行榜】
                    this.yesterDate=NowDate;
                    // console.log("一天前的时间："+this.yesterDate);
                    this.$http.get("static/json/signalwebsitearticle.json")
                            .then((data)=> {
                                console.log(data);
                                if(data.data.data.length!=0){
                                    $(".more").css("display","block");
                                }else{
                                    $(".more").css("display","none");
                                }
                                this.ListClick(data.data.data);
                            });
                }else if(val==2){
                    //获取----【周排行榜】
                    let oneweekdate = new Date(newDate-7*24*3600*1000);
                    let weekAgoY = oneweekdate.getFullYear()+'-';
                    let weekAgoM= (oneweekdate.getMonth()+1 < 10 ? '0'+(oneweekdate.getMonth()+1) : oneweekdate.getMonth()+1) + '-';
                    let weekAgoD= (oneweekdate.getDate() < 10 ? '0'+(oneweekdate.getDate()): oneweekdate.getDate());
                    this.yesterDate=weekAgoY+weekAgoM+weekAgoD;
//                     console.log("一周前的时间："+this.yesterDate);
                    this.$http.get("static/json/signalwebsitearticle.json")
                            .then((data)=> {
                                console.log(data.data.data);
                                if(data.data.data!=0){
                                    $(".more").css("display","block");
                                }else{
                                    $(".more").css("display","none");
                                }
                                this.ListClick(data.data.data);
                            });
                }else{
                    //获取----【月排行榜】
                    this.getArticle();
                }

            }
        },
        mounted(){
            this.getArticle();
        }
    }
</script>
<style scoped>
    .sectionN6{
        height: 100%;
    }
    .heads{
        height: 0.51rem;
        line-height: 0.51rem;
        padding-left: 0.26rem;
        color: #fff;
        clear: both;
        margin-bottom: 0.02rem;
    }
    .heads span{
        float: left;
        font-size: 0.16rem;
    }
    .upline{
        height: 0.2rem;
        margin: 0.15rem 0.29rem 0.16rem 0.27rem;
        border-left: 0.02rem solid rgb(235, 197, 140);
        float: left;
    }
    .current {
        color: #ebc58c;
    }
    .current1{
        color: #fff;
    }
    .acBox{
        padding: 0.26rem 0.48rem 0.22rem 0.47rem;
        background: #292218;
    }
    .ulRank{
        margin: 0.2rem 0 0.3rem 0;
    }
    .ulRank li{
        font-size: 0.13rem;
        height: 0.35rem;
        width: 95%;
        line-height: .45rem;
        border-bottom: .01rem solid #60574b;
        position: relative;
        margin-bottom: .3rem;
        margin-left: .43rem;
        cursor: pointer;
    }
    .ulRank li:hover{
        border-bottom: .01rem solid #ebc58c;
    }
    .ulRank li:hover a{
        text-decoration: none;
    }
    .ulRank li a:hover{
        color:#ebc58c;
    }
    a.colorB{
        color: #fff;
        width: 7.2rem;
        display: block;
        float: left;
    }
    .exp{
        float: left;
        color: #fff;
        width: 1.6rem;
        display: block;
    }
    .ulRank li > div > div:nth-child(-n+2)>span{
        color: #b28e64;
    }
    .ulRank li:nth-child(-n+3) > span:nth-child(1) {
        border: 3px solid #c0996c;
        left: -.38rem;
        top: 0.06rem;
        width: .3rem;
        height: .3rem;
    }
    .amount{
        color: #fff;
        width: 1.1rem;
        display: block;
        float: left;
    }
    .time {
        float: left;
        color: #fff;
        display: block;
    }
    .ranking{
        position: absolute;
        left: -.35rem;
        top: 0.1rem;
        width: .26rem;
        height: .26rem;
        font-size: .15rem;
        border: .01rem solid #c0996c;
        border-radius: 50%;
        text-align: center;
        line-height: 0.25rem;
        color: #fff;
    }
    .more{
        width: 98%;
        margin: 0.2rem auto;
        height: 0.42rem;
        display: block;
        background-color: #c0996c;
        line-height: 0.42rem;
        text-align: center;
        font-size: 0.16rem;
        color: black;
    }
    .more a{
        font-weight: bold;
        cursor: pointer;
    }
    .more a:hover{
        color:white;
;    }
</style>