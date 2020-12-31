<template>
  <div id="login">
    <div class="login-content">
      <div class="login-logo">
        <img src="../../assets/logo.png">
        <h1>vantd-admin</h1>
      </div>
      <a-form-model class="login-form"
                    :model="form"
                    ref="ruleForm"
                    :rules="rules">
        <a-form-model-item prop="userName">
          <a-input v-model="form.userName">
            <a-icon slot="prefix"
                    type="user"
                    style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input v-model="form.password"
                   type='password'>
            <a-icon slot="prefix"
                    type="lock"
                    style="color:rgba(0,0,0,.25)" />
          </a-input>
        </a-form-model-item>
        <a-form-model-item prop="remenber">
          <a-checkbox-group v-model="form.remenber">
            <a-checkbox value="1"
                        name="remenber">
              记住我
            </a-checkbox>
          </a-checkbox-group>
          <a class="login-form-forgot"
             href="">
            忘记密码
          </a>
          <a-button type="primary"
                    html-type="submit"
                    class="login-form-button"
                    @click="handleSubmit">
            登录
          </a-button>
          <a href="">
            现在注册
          </a>
        </a-form-model-item>
      </a-form-model>
    </div>

  </div>

</template>

<script>
import { Login } from '@/api/login'
import { SaveToken } from '@/utils/token'
export default {
  data() {
    return {
      wrapperCol: 24,
      form: {
        userName: 'jxf',
        password: '123456',
        remenber: ['1']
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit(e) {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          this.$router.replace({ name: 'Home' }) // 无脑跳转，如需登录操作，请删除此句

          const rs = await Login({ userAccount: this.form.userName, userPwd: this.form.password })
          if (rs.data.Code === 200) {
            SaveToken(rs.data.Result)
            this.$router.replace({ name: 'Home' })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../../assets/image/bgc_img.svg) no-repeat center;
  background-clip: border-box;
  background-size: cover;
  .login-content {
    position: absolute;
    top: 150px;
    width: 100%;
    height: 520px;
    .login-logo {
      text-align: center;
      vertical-align: bottom;
      img {
        height: 60px;
      }
      h1 {
        vertical-align: bottom;
        display: inline-block;
        font-size: 42px;
      }
    }
    .login-form {
      position: absolute;
      left: 0;
      top: 120px;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      width: 400px;
      height: 300px;
      .login {
        width: 100%;
      }
    }
  }
}

#login .login-form-forgot {
  float: right;
}
#login .login-form-button {
  width: 100%;
}
</style>
