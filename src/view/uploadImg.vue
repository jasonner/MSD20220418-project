<template>
    <div class="upload-img-page">
        <div class="upload-box">
            <img :src="uploadImgSrc" alt="" srcset="" @click="imgUploadChange()">
        </div>
        <div class="tip-text" @click="goPage()">
            <img src="@/assets/img/uploadImg/text-btn.png" alt="" srcset="">
            <input
                type="file"
                accept="image/*"
                style="display:none"
                @change="changeImg()"
                name="upload_file"
                ref="inputA"
            />
        </div>
        <loading v-show="loadingShow"></loading>
    </div>
</template>
<script>
import OSS from 'ali-oss';
import loading from '@/components/loading';
export default {
    data(){
        return{
            uploadImgSrc:require('@/assets/img/uploadImg/uploadImg.png'),
            loadingShow:false
        }
    },
    components:{
      'loading':loading
    },
    mounted(){

    },
    methods:{
        //上传活动照片
        imgUploadChange(){
            this.$refs.inputA.dispatchEvent(new MouseEvent('click'));
        },

        //上传图片
        changeImg (type) {
            var files = this.$refs.inputA.files;
            this.Upload(files[0],type);
        },

        //自定义上传方法..
        Upload(file) {
            console.log(file)
            if(file){
                this.loadingShow = true;
                var name = 'MSD20220418'
                let fileName = name+'/'+file.lastModified + file.name;
                console.log(fileName);
                const _this = this;
                _this.axios.get('https://commapi.forhoo.cn/forhoo/GetOSSSTS?dir=MSD20220418').then((result) => {
                    console.log(result.data);
                    _this.client =  new OSS({
                        region: result.data.region,
                        accessKeyId: result.data.data.accessKeyId,
                        accessKeySecret: result.data.data.accessKeySecret,
                        stsToken: result.data.data.securityToken,
                        bucket: result.data.bucketName
                    });
                    this.getBase64(file).then(resBase64 => {
                        const base64 = resBase64.split(",").pop();
                        const fileType = resBase64.split(";").shift().split(":").pop();
                        // base64转blob
                        const blob = _this.dataURLtoBlob(base64, fileType);
                        console.log(blob);
                        // blob转arrayBuffer
                        const reader = new FileReader();
                        reader.readAsArrayBuffer(blob);
                        reader.onload = event => {
                            //arrayBuffer转Buffer
                            const buffer = OSS.Buffer(event.target.result);
                            // 上传
                            _this.client.put(fileName, buffer)
                            .then( result=> {
                                console.log(result);
                                let httpUrl = 'https://merckoss.wfbweb.com/'
                                _this.uploadImgSrc =  httpUrl+fileName;
                                console.log(_this.uploadImgSrc);
                                _this.loadingShow = false;
                            })
                            .catch( err=> {
                                console.log("错误", err);
                                alert('上传失败')
                            });
                        };
                    })
                })
            }
            
        },

        //file文件转base64
        getBase64(file) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                let fileResult = "";
                reader.readAsDataURL(file);
                //开始转
                reader.onload = function() {
                    fileResult = reader.result;
                };
                //转 失败
                reader.onerror = function(error) {
                    reject(error);
                };
                //转 结束 
                reader.onloadend = function() {
                    resolve(fileResult);
                };
            });
        },
        
        //base64转blob
        dataURLtoBlob(urlData, fileType) {
            let bytes = window.atob(urlData);
            let n = bytes.length;
            let u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bytes.charCodeAt(n);
            }
            return new Blob([u8arr], {
                type: fileType
            });
        },
        
        goPage(){
            this.$router.replace({path:'signIn'})
        }
    }
}
</script>
<style scoped>
    .upload-img-page{
        width: 100%;
        min-height: 100%;
        background: url('../assets/img/uploadImg/bg.png')  no-repeat;
        background-size: 100% 100%;
        position: relative;
        box-sizing: border-box;
    }
    .upload-box{
        width: 88%;
       
        margin: 0 auto;
    }
    .upload-box img{
        margin-top: 504px;
        max-height: 512px;
    }
    .tip-text{
        width: 68.4%;
        margin: 0 auto;
        margin-top: 67px;
    }
</style>