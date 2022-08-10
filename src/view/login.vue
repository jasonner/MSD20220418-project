<template>
    <div class="login-page">
        <div class="text-content-box">
            <div class="user-name">
                <p>
                    <img src="@/assets/img/login/icon-user.png" alt="" srcset="">
                </p>
                <p>
                    <input type="text" maxlength="10" name="" placeholder="姓名" id=""/>
                </p>
            </div>
            <div class="user-name user-email">
                <p>
                    <img src="@/assets/img/login/icon-email.png" alt="" srcset="">
                </p>
                <p>
                    <input class="email-input" type="text" name="" placeholder="邮箱" id=""/>
                    <span class="merck">@merck.com</span>
                </p>
            </div>
            <div class="sure-btn" @click="loginChange()">
                <button>确  定</button>
            </div>
        </div>
        <div class="tip-box">
            仅供内部交流使用，请勿截屏、分发或转发
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{
        loginChange(){
           this.$router.replace({path:'index'})
        }
    }
}
</script>
<style scoped>
    .login-page{
        width: 100%;
        min-height: 100%;
        background: url('../assets/img/login/bg.png')  no-repeat;
        background-size: 100% 100%;
        position: relative;
    }
    .text-content-box{
        width: 80%;
        margin: 0 auto;
        height: 90vw;
        box-sizing: border-box;
        position: absolute;
        left: 10%;
        top: 34vh; 
        background: url('../assets/img/login/text-content.png') center no-repeat;
        background-size: 100% 100%;
    }   
    .text-content-box img{
        width: 100%;
    }
    .user-name{
        position: absolute;
        top: 30vw;
        width: 86%;
        left: 7%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 20% 80%;
    }
    .user-name p{
        height: 75px;
        line-height: 75px;
        position: relative;
    }
    .user-name p:nth-of-type(1){
        background: #ffffff;
    }
    .user-name p img{
        width: 4vw;
        vertical-align: middle;
    }
    .user-name p input{
        width: 100%;
        border: none;
        display: inline-block;
        height: 100%;
        background: #d9d9d9;
        padding-left: 32px;
        box-sizing: border-box;
        outline: transparent;
        font-size: 20px;
        font-family: 'HarmonyOS_Sans_SC';
        color: #6f6f6f;
    }
    .user-name p .email-input{
      padding-right: 26vw;
      box-sizing: border-box;
    }
    .user-name p .merck{
        position: absolute;
        right: 0;
        width:30vw;
        top: 0;
        padding-left: 0;
        font-size: 20px;
    }
    .user-email{
        position: absolute;
        top: 48vw;
        width: 86%;
        left: 7%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 20% 80%;
    }
    .sure-btn button{
        width: 56.4%;
        position: absolute;
        bottom: 8vw;
        left:16.8vw;
        border: none;
        background: transparent;
        color: #ffffff;
        height: 78px;
        font-size: 28px;
        border-radius: 20px;
    }
    .tip-box{
        position: absolute;
        right: 42px;
        bottom: 4vh;
        color: #fff;
        font-size: 2.5vw;
    }
</style>