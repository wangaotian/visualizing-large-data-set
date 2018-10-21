<template>
    <section class="searchArticle searchOne clear">
        <div class="search_title clear">
            <div class="type left">
                文章类型 :
                <span :class="{select:index==current}"
                      class="week"
                      v-for="(item,index) in arr"
                      @click="typeAdd(index)">
                {{item.name}}
                 <i></i>
            </span>
            </div>
            <div class="hot left">
                文章排序 :
                <span v-for="(item,index) in arr"
                      @click="workSorting(index)"
                      class="week1"
                      :class="{select1:index==current1}"
                >
                      {{item.hot}}
                  </span>
            </div>
        </div>
        <!--文章列表-->
        <ul class="listBody">
            <!--:class="{fire:index==1&&index<3&&current1==0,new:index==1&&index<3&&current1==1}"-->
            <li v-for="(item,index) in data" :class="{fire:index<3&&current1==0&&current2==1,new:index<3&&current1==1&&current2==1}">
                <!--解析标签-->
                <router-link class="titleP"
                     v-html="item.title"
                     :to="{path:'/index/articleAnalysis'}"
                     tag="p"
                     :id="item.nid"
                     @click.native="getId(item.nid)"
                ></router-link>
                <div class="clear">
                    <p class="left clear">
                        <span class="sp1">{{item.pubtimeformat}}</span>
                        <span class="sp2">类型：{{item.articletype}}</span>
                        <a :href="item.url" class="left sp3">原文链接</a>
                        <span class="sp4">来源:{{item.source}}</span>
                    </p>
                    <p class="right">
                        <span class="sp5">被转载指数：-</span>
                        <span class="sp6">被转载量：-</span>
                        <router-link tag='span' class="sp7" @click.native="ajax2(item.nid,item.wid)" :to="{path:'/articleAnalysis'}" >查看传播效果</router-link>
                    </p>
                </div>
            </li>
        </ul>
        <!--插件分页器-->
    </section>
</template>
<script>
import $ from "jquery";
    export default{
        data(){
            return{
                arr:[{name:"原创",hot:"最热"},{name:"转载",hot:"最新"}],
                type:1,
                //判断最新还是最热 1是最热  2是最新
                current:0,
                current1:0,
                //判断点击第几页
                current2:1,
                //文章类型 原创1 转载2
                hot:1,
                data:'',
                //获取总条数
                Alltiao:'',
                //获取的总页数
                allpage:10,
                showItem:7,
            }
        },
        watch:{
           
            search(val){
                this.ajax();
            },
            current(){
                if(this.current===0){this.type=1}
                else{this.type=2}
                this.ajax();
            },
            //判断是热门还是最新
            current1(){
                if(this.current1===0){this.hot=1}else{this.hot=2}
                this.ajax();
            },
            //    判断点击的第几页
            current2(){this.ajax();},
            setTime(time){
                let date=new Date(time);
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate()<10?'0'+date.getDate()+ ' ':date.getDate()+ ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                return Y+M+D+h+m;
            }
        },
        computed:{
            search(){
                return this.$store.state.search;
            },
            pageIndex(){
                return this.$store.state.pageIndex;
            },
            pages(){
                var pag = [];
                if( this.current2 < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                    //总页数和要显示的条数那个大就显示多少条
                    var i = Math.min(this.showItem,this.allpage);
                    while(i){
                        pag.unshift(i--);
                    }
                }else{ //当前页数大于显示页数了
                    var middle = this.current2 - Math.floor(this.showItem / 2 ),//从哪里开始
                            i = this.showItem;
                    if( middle >  (this.allpage - this.showItem)  ){
                        middle = (this.allpage - this.showItem) + 1
                    }
                    while(i--){
                        pag.push( middle++ );
                    }
                }
                return pag;
            }
        },
        methods:{
            getId(id){
                this.$store.commit("ids",id);
            },
            typeAdd(index){this.current=index;},
            workSorting(index){this.current1=index;},
            goto(index){
                if(index == this.current2) return;
                this.current2 = index;
                //这里可以发送ajax请求
            },
            ajax(){
                this.$http.get('static/json/searchMediaAndArticle.json')
                        .then((data)=>{
                            //多少条数据
                            this.Alltiao=data.data.total;
                            //多少个页数
                            this.allpage=Math.ceil(data.data.total/13);
                            this.GT(data.data.data);
                        })
            },
            ajax2(nid,wid){
                console.log(nid,wid);
                this.$store.commit("ind",nid);
                this.$store.commit("wid",wid);
            },
            GT(data){
                var data1=[];
                var str1=this.search;
                for(var i=0;i<data.length;i++){
                    //字符串检索:找到搜索相对应的字符串,加上样式
                    //遇到的问题是:正则传动态参数无法传:解决办法如下
                    // console.log(data[0].title.replace(/5/g,"<span style=\"color:#ff503f\">"+5+"</span>"));
                    var date=new Date(data[i].pubtimeformat);
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    var D = date.getDate()<10?'0'+date.getDate():date.getDate();
                    var S = date.getHours()<10?'0'+date.getHours():date.getHours();
                    var F = date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes();
                    var timeDate = Y+M+D+" "+S+":"+F;
                    data1.push({
                        articletype:data[i].articletype,
                        url:data[i].url,
                        source:data[i].source,
                        pubtimeformat:timeDate,
                        title:data[i].title.replace(new RegExp(str1,'g'),"<span style=\"color:#ff503f\">"+str1+"</span>"),
                        wid:data[i].wid,
                        nid:data[i].nid,
                    });
                }
                this.data=data1;
            },
        },
        mounted(){this.ajax();}
    }
</script>
<style scoped>
    .searchArticle{
        width: 12.78rem;
        margin-bottom: 0.5rem;
    }
    .search_title{
        font-size: 0.16rem;
        color: #fff;
    }
    /*-选择原创或者转载-*/
    .week{
        cursor: pointer;
        display: inline-block;
        padding-left: 0.25rem;
        background-size: 0.16rem 0.16rem;
        background-position-y: 0;
        background:url("../../../static/img/time.png") no-repeat left;
        margin-right: 0.2rem;
        margin-left: 0.1rem;
    }
    .week1{
        background:white;
        border-radius: 0.05rem;
        width: 0.56rem;
        height: 0.26rem;
        line-height: 0.26rem;
        margin-right: 0.1rem;
        color:black !important;
        display: inline-block;
        text-align: center;
        cursor: pointer;
        font-size: 0.14rem;
    }
    .hot{
        margin-left: 0.9rem;
    }
    .select{
        background:url("../../../static/img/time1.png") no-repeat left !important;}
    .select1{
        background: #ff503f !important;
        color: #fff !important;
    }

    /*表单开始*/
    .listBody{
        background: rgba(67, 61, 54, 0.4);
        border-radius: 0.03rem;
        padding: 0 0.3rem;
        margin-top: 0.3rem;
        min-height: 2rem;
    }
    .listBody li{
        height: 1rem;
        border-top: 1px solid rgba(203, 182, 164, 0.2);
        padding: 0.2rem 0.1rem 0.18rem 0.48rem;
    }
    .listBody li:nth-child(1){
        border:0;
    }
    .listBody li:nth-child(2n-1) {
        background-color: rgba(255, 255, 255, 0.02);
    }
    .listBody>li>p{
        font-size: 0.15rem;color: #ebc58c;
    }
    .listBody>li>p.titleP{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
    }
    .listBody>li>div{
        font-size: 0.13rem;
        color: #fff;
        margin-top: 0.2rem;
    }
    .listBody>li > div > p > span{
        float:left;
    }
    .sp2{
        margin-left: 0.35rem;
    }
    .sp3{
        margin-left: 0.35rem;
        color: #ebc58c;
        background: url("../../../static/img/zhuanzai.png") left center no-repeat;;
        background-size: 0.12rem 0.12rem;
        padding-left: 0.14rem;
    }
    .sp4{
        margin-left: 0.35rem;
    }
    .sp5{
        width: 1.5rem;
        padding-left: 0.15rem;
        background: url("../../../static/img/sp5.png") left center no-repeat;
        background-size: 0.1rem 0.12rem;
    }
    .sp6{
        width: 1.5rem;
        padding-left: 0.15rem;
        background: url("../../../static/img/sp6.png") left center no-repeat;
        background-size: 0.12rem 0.12rem;
    }
    .sp7{
        margin-left: 0.65rem;
        padding-right: 0.15rem;
        font-weight: bold;
        color: #ebc58c;
        cursor: pointer;
        background: url("../../../static/img/sp7.png") right center no-repeat;
        background-size: 0.07rem 0.11rem;
    }
    /*火苗和最新样式*/
    .fire{
        background: url("../../../static/img/fire.png") 0.12rem 0.15rem no-repeat;
        background-size: 0.28rem 0.28rem;
    }
    .new{
        background: url("../../../static/img/new.png") 0.12rem 0.15rem no-repeat;
        background-size: 0.28rem 0.28rem;
    }
    /*分页器*/
    .pages{
        margin-top: .7rem;
        padding-left: 0.5rem;
    }
    .pages>div{
        float: left;
        font-size: .16rem;
        height: .27rem;
        line-height: .27rem;
        color: #fff;}
    .first{
        background: #b9956a;
        color: #000 !important;
    }
    .last{
        background: #fff;
        color: #000 !important;
    }
    .first,.last{
        width: .7rem;
        text-align: center;
        border-radius: .01rem;
        color: #000;
        margin: 0 .2rem;
    }
    .pages>input{
        float: left;
        background: transparent;
        outline: none;
        height: .25rem;
        border: 1px solid hsla(0,0%,100%,.6);
        padding: 0 .1rem;
        margin: 0 .1rem;
        width: .42rem;
        text-align: center;
        color: #fff;
    }
    .pages .ulPage>li{
        line-height: .27rem;
        color: #fff;
        font-size: .16rem;
        float: left;
        margin: 0 .01rem;
        width: .5rem;
        height: .26rem;
        text-align: center;
    }
    .select3{
        background: #b9956a;
        border-radius: 0.13rem;
        color: #000!important;
    }
    .pages .go{
        background: #b9956a;
        width: .7rem;
        text-align: center;
        cursor: pointer;
        border-radius: .01rem;
        color: #000;
        margin: 0 .2rem
    }
    /*<!--插件分页器-->*/
    .pagination {position: relative;}
    .pagination li{display: inline-block;margin:0 0.05rem;}
    .pagination li a{
        line-height: .27rem;
        color: #fff;
        font-size: .16rem;
        float: left;
        margin: 0 .01rem;
        width: .5rem;
        height: .26rem;
        text-align: center;
        text-decoration: none;
    }
    /*.pagination li a:hover{background: #b9956a;border-radius: .13rem;color: #000!important;text-decoration: none;}*/
    .pagination li.active a{
        background: #b9956a;
        color: #000!important;
        text-decoration: none;
        border-radius: .13rem;
    }
</style>