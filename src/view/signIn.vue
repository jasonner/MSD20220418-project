<template>
    <div class="SignIn-page">
        <div class="tab-list">
            <div>规则介绍</div>
            <div>签到</div>
            <div>PK挑战</div>
        </div>

        <div class="sign-list">
            <div v-for="(item,index) in signList" :key="index">
                <p>{{item.day}}</p>
                <img :src="item.SignInSrc" alt="" srcset="">
                <div>
                    +{{item.val}}
                </div>
            </div>
        </div>

        <div class="signInBtn-box">
            <img src="@/assets/img/signIn/signInBtn.png" alt="" srcset="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            signList:[{
                day:'第一天',
                SignInSrc:require('@/assets/img/signIn/signIned.png'),
                val:10
            },
            {
                day:'第二天',
                SignInSrc:require('@/assets/img/signIn/unSignIn.png'),
                val:10
            },
            {
                day:'第三天',
                SignInSrc:require('@/assets/img/signIn/unSignIn.png'),
                val:10
            }]
        }
    },
    mounted(){

    },

    methods:{

    }
}
</script>
<style scoped>
    .SignIn-page{
        width: 100%;
        min-height: 100%;
        background: url('../assets/img/signIn/bg.png')  no-repeat;
        background-size: 100% 100%;
        position: relative;
        box-sizing: border-box;
    }
    .tab-list{
        width: 100%;
        height: 80px;
        line-height: 80px;
        background: #1a395d;
        display: flex;
    }
    .tab-list div{
        flex: 1;
        color: #429ebf;
        font-size: 24px;
    }
    .tab-list div:nth-of-type(2){
        background: url('../assets/img/signIn/tab2-bg.png')center no-repeat;
        background-size: 100% 100%; 
        color: #fff;
        font-weight: 700;
        font-size: 30px;
    }
    .sign-list{
        width: 87.4%;
        margin: 0 auto;
        margin-top: 110px;
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        grid-template-rows: repeat(3, 33.33%);
        grid-column-gap:8.5px;
    }
    .sign-list div{
        position: relative;
        width: 196px;
    }
    .sign-list div p{
        position: absolute;
        left: 68px;
        top: 8px;
        color: #fff;
        font-size: 22px;
    }
    .sign-list div{
        color: #fff;
        margin-top: 18px;
        font-size: 20px;
    }
    .signInBtn-box{
        width: 512px;
        margin: 0 auto;
        margin-top: 560px;
    }
</style>