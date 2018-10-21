<template>
    <div id="header">
        <div class="left"></div>
        <div class="mid">
            <div class="search">
                <span class="text">{{msg}}</span>
                <i class="i1"
                   @click="msg='文章'"
                ></i>
                <i class="i2"
                   @click="msg='网络'"
                ></i>
            </div>
            <input class="inp" type="text" placeholder="请输入搜索词">
            <router-link :to="{path:'/index/search'}"
                         tag="span"
                         @click.native="searched"
                         class="sou"
            ></router-link>
        </div>
        <div class="right">0
            <img src="../../static/img/head_03.png" alt="">
            <span class="name">Raaz Das</span>
            <span class="m"></span>
            <span class="out">退出</span>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    data(){
        return{
            msg:'文章',
            search:''
        }
    },
    methods:{
        searched(){
            this.search=$('.inp').val();
            this.$store.commit("search",this.search);
        }
    }
}
</script>

<style scoped>
    #header{
        width:14.4rem;
        height: 0.7rem;
        position: relative;
    }
    .left{
        width: 2.76rem;
        height: 0.35rem;
        margin: 0.18rem 0 0 0.28rem;
        background: url("../../static/img/font_06.png") no-repeat;
        background-size: 2.76rem 0.35rem;
    }
    .mid{
        width: 3.2rem;
        height: 0.32rem;
        background: #262322;
        border-radius: 0.16rem;
        position: absolute;
        top: 30%;
        left: 53%;
    }
    .search{
        width: 0.84rem;
        line-height: 0.32rem; 
        display: inline-block;
        position: relative;
        border-right: 1px solid #564835;
    }
    .text{
        color:#ebc58c;
        font-size: 0.14rem;
        padding-left:0.1rem;
    }
    .search i{
        width: 0;
        height: 0;
        position: absolute;
        left: 0.6rem;
        cursor: pointer;
    }
    .i1{
        border-left: 0.065rem solid transparent;
        border-right: 0.065rem solid transparent;
        border-bottom: 0.07rem solid #ebc58c;
        top:0.07rem;
    }
    .i2{
        border-top: 0.07rem solid #ebc58c;
        border-left: 0.065rem solid transparent;
        border-right: 0.065rem solid transparent;
        top:0.17rem;
    }
    .inp{
        width: 1.9rem;
        display: inline-block;
        height: 0.32rem;
        line-height: 0.32rem;
        background: none;
        border: none;
        padding-left: 0.1rem;
        font-size: 0.14rem;
        color: grey;
    }
    .sou{
        width: 0.17rem;
        height: 0.17rem;
        background: url("../../static/img/j_03.png") no-repeat;
        background-size: 0.17rem;
        margin: 0.07rem 0 0 0.05rem;
    }

    
    .right{
        margin-right: 0.56rem;
        margin-top: 0.15rem;
    }
    .right img{
        width: 0.44rem;
        height: 0.44rem;
    }
    .name{
        margin-left: 0.11rem;
        
    }
    .m{
        width: 0.03rem;
        height: 0.15rem;
        background: url("../../static/img/m_03.png") no-repeat;
        background-size: 0.03rem 0.15rem;
        margin: 0 0.12rem;
    }
</style>

