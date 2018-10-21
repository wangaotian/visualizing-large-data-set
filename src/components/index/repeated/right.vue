<template>
    <div class="repBox">
        <div class="rep_c">
            <div>{{name}}</div>
            <ul v-for="(item,index) in dt">
                <li>{{item.key+':'}}{{item.doc_count}}</li>
            </ul>
        </div>
        <div class="circle abs">
            <div class="abs" v-for="(item,index) in names">
            {{item.webname}}
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                name:"",
                dt:"",
                names:''
            }
        },
        mounted(){
            this.getList();
        },
        methods:{
            getList(){
                this.$http.get("static/json/beReprintedTop5mediaAnalysis.json").then((data)=> {
                    console.log(data.body)
                    this.name = data.body.data[0].webname;
                    this.dt = data.body.data[0].bereprintedTop5list;
                });
                this.$http.get("static/json/beReprintedAnalysis.json")
                    .then((data)=> {
                        this.names = data.body.data;
                });
            }
        }, 
    }
</script>

<style>
    .repBox{
        width: 5.4rem;
        height: 4.9rem;
    }
    .rep_c{
        margin:1.45rem 1.7rem;
        width: 2rem;
        height: 2rem;
        background: #ac8961;
        border-radius: 50%;
        text-align: center;
        color:black;
        padding-top: 0.3rem;
        box-sizing: border-box;
    }
    .rep_c div{
        font-size: 0.16rem;
        margin-bottom: 0.05rem;
        font-weight: bold;
    }
    .rep_c ul li{
        font-size: 0.1rem;
        margin: 0.05rem 0;
    }
    .circle{
        width: 100%;
        height: 100%;
        top:0;
        left: 0;
    }
    .circle div{
        top:0;
        width: 1rem;
        height: 0.3rem;
        line-height: 0.3rem;
        border-radius: 0.15rem;
        text-align: center;
        font-size: 0.12rem;
        color:white;
        background-origin:border-box;
    }
    .circle div:nth-child(1){
        top:0.7rem;
        left:1.5rem;
        border: 1px solid rgb(139, 103, 149);
        background:linear-gradient(90deg,rgb(139, 103, 149) 0%,black 50%,rgb(139, 103, 149) 100%);
    }
    .circle div:nth-child(1)#clk{
        background: rgb(139, 103, 149);
    }
    .circle div:nth-child(1):hover{
        background:rgb(139, 103, 149);
    }
    .circle div:nth-child(2){
        top:0.7rem;
        right:1.5rem;
        border: 1px solid rgb(95, 155, 118);
        background:linear-gradient(90deg,rgb(95, 155, 118) 0%,black 50%,rgb(95, 155, 118) 100%);
    }
    .circle div:nth-child(2):hover{
        background:rgb(95, 155, 118);
    }
    .circle div:nth-child(2)#clk{
        background:rgb(95, 155, 118);
    }
    .circle div:nth-child(3){
        top:1.4rem;
        right:0.6rem;
        border: 1px solid rgb(155, 105, 24);
        background:linear-gradient(90deg,rgb(155, 105, 24) 0%,black 50%,rgb(155, 105, 24) 100%);
    }
    .circle div:nth-child(3):hover{
        background:rgb(155, 105, 24);
    }
    .circle div:nth-child(3)#clk{
        background:rgb(155, 105, 24);
    }
    .circle div:nth-child(4){
        top:2.25rem;
        right:0.2rem;
        border: 1px solid rgb(176, 87, 77);
        background:linear-gradient(90deg,rgb(176, 87, 77) 0%,black 50%,rgb(176, 87, 77) 100%);
    }
    .circle div:nth-child(4):hover{
        background:rgb(176, 87, 77);
    }
    .circle div:nth-child(4)#clk{
        background:rgb(176, 87, 77);
    }
    .circle div:nth-child(5){
        top:3.1rem;
        right:0.6rem;
        border: 1px solid rgb(82, 118, 136);
        background:linear-gradient(90deg,rgb(82, 118, 136) 0%,black 50%, rgb(82, 118, 136) 100%);
    }
    .circle div:nth-child(5):hover{
        background:rgb(82, 118, 136);
    }
    .circle div:nth-child(5)#clk{
        background:rgb(82, 118, 136);
    }
    .circle div:nth-child(6){
        top:3.9rem;
        right:1.5rem;
        border: 1px solid rgb(155, 105, 24);
        background:linear-gradient(90deg,rgb(155, 105, 24) 0%,black 50%,rgb(155, 105, 24) 100%);
    }
    .circle div:nth-child(6):hover{
        background:rgb(155, 105, 24);
    }
    .circle div:nth-child(6)#clk{
        background:rgb(155, 105, 24);
    }
    .circle div:nth-child(7){
        top:3.9rem;
        left:1.5rem;
        border: 1px solid rgb(139, 103, 149);
        background:linear-gradient(90deg,rgb(139, 103, 149) 0%,black 50%,rgb(139, 103, 149) 100%);
    }
    .circle div:nth-child(7):hover{
        background:rgb(139, 103, 149);
    }
    .circle div:nth-child(7)#clk{
        background:rgb(139, 103, 149);
    }
    .circle div:nth-child(8){
        top:3.1rem;
        left:0.6rem;
        border: 1px solid rgb(95, 155, 118);
        background:linear-gradient(90deg,rgb(95, 155, 118) 0%,black 50%,rgb(95, 155, 118) 100%);
    }
    .circle div:nth-child(8):hover{
        background:rgb(95, 155, 118);
    }
    .circle div:nth-child(8)#clk{
        background:rgb(95, 155, 118);
    }
    .circle div:nth-child(9){
        top:2.25rem;
        left:0.2rem;
        border: 1px solid rgb(155, 105, 24);
        background:linear-gradient(90deg,rgb(155, 105, 24) 0%,black 50%,rgb(155, 105, 24) 100%);
    }
    .circle div:nth-child(9):hover{
        background:rgb(155, 105, 24);
    }
    .circle div:nth-child(9)#clk{
        background:rgb(155, 105, 24);
    }
    .circle div:nth-child(10){
        top:1.4rem;
        left:0.6rem;
        border: 1px solid rgb(176, 87, 77);
        background:linear-gradient(90deg,rgb(176, 87, 77) 0%,black 50%,rgb(176, 87, 77) 100%);
    }
    .circle div:nth-child(10):hover{
        background:rgb(176, 87, 77);
    }
    .circle div:nth-child(10)#clk{
        background:rgb(176, 87, 77);
    }
</style>