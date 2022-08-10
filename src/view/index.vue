<template>
    <div class="index-page">
        <div class="content-list-box">
            <div v-for="(item,index) in menuList" :key="index" @click="listChange(index)">
                <img :src="item.iconImg" alt="">
                <p>{{item.text}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import { Dialog } from 'vant';
Vue.use(Dialog);
export default {
    data(){
        return{
            menuList:[{
                iconImg:require('@/assets/img/index/icon1.png'),
                text:'会议日程'
            },{
                iconImg:require('@/assets/img/index/icon2.png'),
                text:'预热签到'
            },{
                iconImg:require('@/assets/img/index/icon3.png'),
                text:'大会直播'
            },{
                iconImg:require('@/assets/img/index/icon4.png'),
                text:'东区直播'
            },{
                iconImg:require('@/assets/img/index/icon5.png'),
                text:'西区直播'
            },{
                iconImg:require('@/assets/img/index/icon6.png'),
                text:'南区直播'
            },{
                iconImg:require('@/assets/img/index/icon7.png'),
                text:'北区直播'
            },{
                iconImg:require('@/assets/img/index/icon8.png'),
                text:'互动规则'
            },{
                iconImg:require('@/assets/img/index/icon9.png'),
                text:'考试中心'
            },{
                iconImg:require('@/assets/img/index/icon10.png'),
                text:'个人中心'
            }]
        }
    },
    mounted(){

    },
    methods:{
        listChange(index){
            let that = this;
            switch (index) {
                case 1:
                    that.$router.replace({path:'uploadImg'})
                    break;
                default:
                    Dialog.alert({
                        title: '提示',
                        message: '敬请期待！',
                        }).then(() => {
                        // on close
                    });
                    break;
            }
        }
    }
}
</script>
<style scoped>
    .index-page{
        width: 100%;
        min-height: 100%;
        background: url('../assets/img/login/bg.png')  no-repeat;
        background-size: 100% 100%;
        position: relative;
        padding: 400px 0;
        box-sizing: border-box;
    }
    .content-list-box{
        width: 73%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        grid-template-rows: repeat(3, 33.33%);
        grid-row-gap: 12px;
        grid-column-gap:24px;
        text-align: center;
    }
    .content-list-box div{
        width: 152px;
        height: 152px;
        background:url('../assets/img/index/list_bg.png')  no-repeat;
        background-size: 100% 100%;
    }
    .content-list-box div p{
        font-size: 20px;
        font-family: HarmonyOS Sans SC, HarmonyOS Sans SC-Regular;
        font-weight: 400;
        text-align: center;
        color: #73c8ff;
        letter-spacing: 2.8px;
        margin: 0;
    }
    .content-list-box div img{
        width: 89px;
        margin-top: 18px;
    }
    .content-list-box div:nth-of-type(1) img, .content-list-box div:nth-of-type(2) img{
        width: 80px;
    }  
    .content-list-box div:nth-of-type(3) img{
        width: 87px;
    }
    .content-list-box div:nth-last-of-type(3) img{
        width: 75px;
    }
    .content-list-box div:nth-last-of-type(2) img{
        width: 65px;
    }
</style>
<style>
.content-user-sex .van-radio__icon{
    font-size: 4vw;
    height: auto;
    line-height: 2;
}
.van-picker-select{
    width: 100%;
    height: 35vh;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
}
.van-picker-model{
    width:100vw;
    height: 100%vh;
    background: #000;
    opacity: 0.3;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
}
.van-picker-select .van-picker__cancel, .van-picker-select .van-picker__confirm{
    font-size: 4vw;
}
.van-picker-select .van-picker__confirm{
    color: #73c8ff;
}
.van-picker-select .van-ellipsis{
    font-size: 4vw;
}
.van-picker-select  .van-picker__toolbar{
    height: 10vw;
}
.van-dialog{
    width: 70% !important;
}
.van-dialog__header{
    font-size: 4vw;
}
.van-dialog__message{
   line-height: 1.5 !important;
   font-size: 4vw !important;
   margin-top: 3vw;
}
.van-dialog__confirm, .van-dialog__confirm:active{
    color: #2FC0C5 !important;
    height: 6vh !important;
}
.van-dialog__footer{
    margin-top: 3vw;
}
.van-button__text{
     font-size: 4vw !important;
}
.van-radio__label{
    font-size: 28px;
}
</style>