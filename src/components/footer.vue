<template>
    <div class="foot clear">
        <div class="foot_l left clear">
            <div class="p1 left">
                <img src="../../static/img/font_18.png" alt="">
            </div>
            <div class="p2 left">
                <p>覆盖3000家媒体</p>
                <p>媒体大数据实践者、创新者、推动者</p>
            </div>
            <div class="p3 left">
                <p>服务电话：400-819-0919</p>
                <p>邮箱：999@jusfoun.com</p>
                <p>地址：北京市海淀区王庄路1号清华同方科技广场D座西楼16层</p>
            </div>
        </div>
        <div class="foot_r right clear">
            <div class="left">
                <span class="wxImg"></span>
                <p>官方微信</p>
            </div>
            <div class="left">
                <span class="gzImg"></span>
                <p>数据之王公众号</p>
            </div>
        </div>
    </div>
</template>
<style secpod>
    .foot{
        width: 14.4rem;
        height: 1.7rem;
    }
    .foot_l{
        margin: 0 0;
    }
    .foot_l div{
        height: 0.76rem;
    }
    .foot_l div p{
        color: #cdb88c;
        font-size: 0.13rem;
    }
    .p1{
        width: 2.68rem;
        border-right: 1px solid #cfba8e;
    }
    .p1 img{
        width: 1.44rem;
        height: 0.38rem;
        margin: 0.19rem 0.44rem 0.19rem 0.81rem;
    }
    .p2{
        width: 3.4rem;
        border-right: 1px solid #cfba8e;
    }
    .p2 p{
        margin-left: 0.82rem;
    }
    .p2 p:nth-child(1){
        margin: 0.09rem 0 0.18rem 0.82rem;
    }
    .p3 p{
        margin-left: 0.57rem;
    }
    .p3 p:nth-child(1){
        margin-top: 0.09rem;
    }
    .foot_r{
        margin: 0 0.71rem 0 0;
    }
    .foot_r div{
        text-align: center;
    }
    .foot_r div:nth-child(1){
        margin-right: 0.1rem;
    }
    .foot_r div span{
        width: 0.84rem;
        height: 0.84rem;
        background-size: 0.84rem 0.84rem;
    }
    .foot_r div p{
        font-size: 0.13rem;
        color: #bababa;
    }
    .wxImg{
        background: url(../../static/img/num_03.jpg) no-repeat;

    }
    .gzImg{
        background: url(../../static/img/num_05.jpg) no-repeat;
    }
</style>