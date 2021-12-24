<template>
    <el-container v-loading="loading" element-loading-text="请求登录中..." element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-main class="elm">
            <el-row class="row">
                <el-col :span="6">
                    <div class="grid-content bg-purple-dark">
                        <el-form ref="login_form" :model="login_form" label-width="80px" status-icon>
                            <el-form-item label="邮箱" class="lab">
                              <el-input v-model="login_form.email" placeholder="email" @blur="vaildateEmail($event)"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" class="lab" prop="password">
                              <el-input v-model="login_form.password" placeholder="password" auto-complete="false" @blur="vaildatePwd($event)"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="login('login_form')">立即登录</el-button>
                            </el-form-item>
                            <el-form-item class="lab2">
                              <el-button type="success" @click="dialogFormVisible = true" round>还没账号？点此注册吧！</el-button>
                            </el-form-item>
                        </el-form>
                        <el-form :model="register_form">
                            <el-dialog title="账号注册" :visible.sync="dialogFormVisible" width="600px" center :close-on-click-modal="false" :close-on-press-escape="false">
                                <el-form :model="register_form" label-width="80px">
                                    <el-form-item label="邮箱" class="la">
                                      <el-input v-model="register_form.email" placeholder="email" @blur="vaildateEmail($event)"></el-input>
                                    </el-form-item>
                                    <el-form-item label="用户名" class="la">
                                      <el-input v-model="register_form.username" placeholder="username" auto-complete="false" @blur="vaildateUserName($event)"></el-input>
                                    </el-form-item>
                                    <el-form-item label="密码" class="la">
                                      <el-input v-model="register_form.password" placeholder="password" auto-complete="false" @blur="vaildatePwd($event)"></el-input>
                                    </el-form-item>
                                    <el-form-item label="确认密码" class="la">
                                      <el-input v-model="register_form.confirm_pwd" placeholder="confirm" auto-complete="false" @blur="vaildatePwdAgain($event)"></el-input>
                                    </el-form-item>
                                    <el-form-item label="选择头像" class="la">
                                      <el-row>
                                        <el-avatar shape="square" :size="50" :src="value" class="img"></el-avatar>
                                        <el-select v-model="value" placeholder="选择系统头像" class="img">
                                          <el-option
                                          v-for="item in img_list"
                                          :key="item.value"
                                          :label="item.img"
                                          :value="item.value">
                                          </el-option>
                                        </el-select>
                                        <el-upload
                                          style="width:50px;height:50px;display:inline-block;"
                                          class="avatar-uploader img"
                                          action="http://localhost:8083/api/upload/getUploadUrl"
                                          :show-file-list="false"
                                          :on-success="handleAvatarSuccess"
                                          :before-upload="beforeAvatarUpload">
                                          <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                      </el-row>
                                    </el-form-item>
                                  <el-form-item label="验证码" class="la">
                                    <el-row>
                                      <el-col :span="12">
                                      <el-input v-model="register_form.code" placeholder="code" class="test"></el-input>
                                      </el-col>
                                      <el-col :span="1" :offset="2">
                                      <el-button type="primary" @click="getCode" class="test">点击获取验证码</el-button>
                                      </el-col>
                                    </el-row>
                                  </el-form-item>
                                </el-form>
                                <div slot="footer" class="dialog-footer">
                                  <el-button @click="dialogFormVisible = false,dialogFormVisible2=true">取 消</el-button>
                                  <el-button type="primary" @click="registerUsers">注 册</el-button>
                                </div>
                            </el-dialog>
                            <el-dialog :visible.sync="dialogFormVisible2">
                              <el-result icon="success" title="成功提示" subTitle="请根据提示进行操作">
                                  <template slot="extra">
                                    <el-button type="primary" size="medium">返回</el-button>
                                  </template>
                                </el-result>
                            </el-dialog>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import avatar1 from '@/assets/img/test1.jpg'
import avatar2 from '@/assets/img/test2.jpg'
import avatar3 from '@/assets/img/test3.jpg'

import {fetch} from '@/script/fetch.js'
import {login,register,test,video} from '@/script/get.js'

export default {
    data(){
      return{
        login_form:{
          email: '',
          password: ''
        },
        register_form:{
          name: '',
          password: '',
          confirm_pwd: '',
          email: '',
          code: '',
          avatar: ''
        },
        img_list:[
          {value: avatar1,img: '预设头像1'},
          {value: avatar2,img: '预设头像2'},
          {value: avatar3,img: '预设头像3'}
        ],
        dialogFormVisible: false,
        dialogFormVisible2: false,
        value: '',
        image_path: '',
        button_color: 'primary',
        bool: true,
        imageUrl: '',
        image_name: '',
        loading: false,
      }
    },
    created(){},
    methods: {
        login(formName){
          this.$refs[formName].validate((valid) => {
          if(valid) {
            // fetch(test).then(res=>{
            //   console.log(res)
            //   if(res==undefined || res==null){
            //     //this.$message.error('用户名或密码错误!')
            //     this.loading=true
            //     setTimeout(() => {
            //       this.$router.replace({name:'Video'})
            //     }, 3000);
            //   }
            //   else{
            //     this.$router.replace({name:'Video'})
            //   }
            // }).catch(err=>{
            //   this.$message.error(err)
            // })
            fetch(video,this.login_form).then(res=>{
              console.log(res)
              if(res!="error"){
                this.loading=true
                setTimeout(() => {
                  this.$router.replace({name:res})
                }, 3000);
              }
              else{
                this.$message.error("账号或密码错误!")
              }
            }).catch(err=>{
              this.$message.error(err)
            })
          } else {
            this.$message.error("输入有误!")
            return false;
          }}) 
        },
        getCode(){
          this.$notify({
            title: '提示',
            message: '已向您的邮箱发送验证码，请查收！',
            type: 'success',
            duration: 8000
          });
        },
        registerUsers(){
          this.$store.commit('setUser',{token:"bbb"})
          alert("注册成功")
          fetch(register,{"id":"1","email":"1","password":"1","imgUrl":this.image_name}).then(res=>{
            this.$store.commit('setAvatar',{img_name:this.image_name})
          }).catch(err=>{
            this.$message.error(err)
          })
          this.dialogFormVisible=false
        },
        handleAvatarSuccess(res, file) {
          console.error(file)
          this.imageUrl = URL.createObjectURL(file.raw)//得到本地图片的路径
          //alert(this.imageUrl)
          this.image_name=res
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg'
          const isLt2M = file.size / 1024 / 1024 < 2

          if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
          }
          if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
          }
          return isJPG && isLt2M
        },
        vaildateEmail(e){
          if(e.target.value=="" || e.target.value==null){
            this.$message.warning("邮箱不能为空!")
          }
          else if(!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/.test(this.login_form.email)){
            this.$message.warning("请输入正确格式的邮箱号!")
            this.login_form.email=""
            this.register_form.email=""
          }
        },
        vaildatePwd(e){
          if(e.target.value=="" || e.target.value==null){
            this.$message.warning("密码不能为空!")
          }
          else if(e.target.value.length<=5){
            this.$message.warning("密码长度必须大于5!")
            this.login_form.password=""
            this.register_form.password=""
          }
        },
        vaildatePwdAgain(e){
          if(e.target.value=="" || e.target.value==null){
            this.$message.warning("再次输入的密码不能为空!")
          }
          else if(e.target.value!=this.register_form.password){
            this.$message.warning("再次输入的密码不一致!")
            this.register_form.confirm_pwd=""
          }
        },
        vaildateUserName(e){
          if(e.target.value=="" || e.target.value==null){
            this.$message.warning("用户名不能为空!")
          }
        },
        vaildateCode(e){
          if(e.target.value=="" || e.target.value==null){
            this.$message.warning("验证码不能为空!")
          }
        }
    }
}
</script>

<style>
    body{
      margin: 0px;
      padding: 0px
    }
    .elm{
      margin: 0px;
      padding: 0px;
      height: 968px;
      width: 100%;
      background: url("~@/assets/img/test2.jpg");
    }
    .row{
      text-align: center;
      position: relative;
      margin-left: 40%;
      margin-top: 18%;
    }
    .lab .el-form-item__label{
      font-size: 18px;
      color: #000;
    }
    .test{
      display: inline;
    }
    .img{
      vertical-align: middle;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .avatar {
      width: 50px;
      height: 50px;
      display: block;
    }
</style>