<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221115/d968ab69ddc8495282963cb2dab971cb.jpg) no-repeat center top","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"20px","boxShadow":"0 1px 6px rgba(0, 0, 0, .1)","margin":"0","borderRadius":"16px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221115/2f997573ef7545c39f9e0eff917cbd30.png) no-repeat left top,url(http://codegen.caihongy.cn/20221115/30139400df864d7eaddf9c3da399146c.png) no-repeat right bottom,#fff","display":"flex","width":"800px","justifyContent":"center","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="true" :style='{"margin":"0 0 10px 0","color":"#52b646","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(82, 182, 70, .3)"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"0 auto 20px auto","borderColor":"#52b646","color":"#52b646","textAlign":"center","borderWidth":"3px","width":"50%","letterSpacing":"2px","lineHeight":"44px","fontSize":"24px","borderStyle":"dotted dashed solid double","fontWeight":"600"}'>驾校管理系统注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="xueyuanzhanghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>学员账号：</div>
				<el-input v-model="registerForm.xueyuanzhanghao"  placeholder="请输入学员账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="xueyuanxingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>学员姓名：</div>
				<el-input v-model="registerForm.xueyuanxingming"  placeholder="请输入学员姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueyuanxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="shouji">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>手机：</div>
				<el-input v-model="registerForm.shouji"  placeholder="请输入手机" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="shenfenzheng">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>身份证：</div>
				<el-input v-model="registerForm.shenfenzheng"  placeholder="请输入身份证" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueyuantouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='xueyuan'" prop="jiashizhengleixing">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>驾驶证类型：</div>
				<el-input v-model="registerForm.jiashizhengleixing"  placeholder="请输入驾驶证类型" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="jiaolianzhanghao">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>教练账号：</div>
				<el-input v-model="registerForm.jiaolianzhanghao"  placeholder="请输入教练账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="mima">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="jiaolianxingming">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>教练姓名：</div>
				<el-input v-model="registerForm.jiaolianxingming"  placeholder="请输入教练姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="nianling">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>年龄：</div>
				<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="xingbie">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in jiaxiaojiaolianxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="jiaoling">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>教龄：</div>
				<el-input v-model="registerForm.jiaoling"  placeholder="请输入教龄" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="touxiang">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="jiaxiaojiaoliantouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 24px","height":"auto"}' v-if="tableName=='jiaxiaojiaolian'" prop="lianxidianhua">
				<div v-if="false" :style='{"width":"64px","lineHeight":"44px","fontSize":"14px","color":"rgba(64, 158, 255, 1)"}'>联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 2px 4px rgba(82, 182, 70, .2)","margin":"16px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"8px","background":"radial-gradient(circle, rgba(132,218,110,1) 0%, rgba(63,187,33,1) 81%, rgba(82,182,70,1) 100%)","width":"30%","fontSize":"16px","height":"40px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"1px solid #52b646","cursor":"pointer","padding":"0 10px","boxShadow":"0 2px 4px rgba(82, 182, 70, .2)","margin":"16px auto 5px","color":"#52b646","display":"block","outline":"none","borderRadius":"8px","background":"#ecfaea","width":"30%","fontSize":"16px","height":"40px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","margin":"8px 0 0","color":"rgba(159, 159, 159, 1)","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {
                xingbie: '',
                xingbie: '',
            },
			rules: {},
            xueyuanxingbieOptions: [],
            jiaxiaojiaolianxingbieOptions: [],
		}
    },
	mounted() {
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      this.tableName = this.$route.query.role;
      if ('xueyuan' == this.tableName) {
        this.rules.xueyuanzhanghao = [{ required: true, message: '请输入学员账号', trigger: 'blur' }];
      }
      if ('xueyuan' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
        this.xueyuanxingbieOptions = "男,女".split(',');
      if ('xueyuan' == this.tableName) {
        this.rules.shouji = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('xueyuan' == this.tableName) {
        this.rules.shenfenzheng = [{ required: true, validator: this.$validate.isIdCard, trigger: 'blur' }];
      }
      if ('jiaxiaojiaolian' == this.tableName) {
        this.rules.jiaolianzhanghao = [{ required: true, message: '请输入教练账号', trigger: 'blur' }];
      }
      if ('jiaxiaojiaolian' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('jiaxiaojiaolian' == this.tableName) {
        this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
      }
        this.jiaxiaojiaolianxingbieOptions = "男,女".split(',');
      if ('jiaxiaojiaolian' == this.tableName) {
        this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueyuantouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      jiaxiaojiaoliantouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
               if(`xueyuan` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
               if(`jiaxiaojiaolian` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20221115/d968ab69ddc8495282963cb2dab971cb.jpg) no-repeat center top;

		.el-date-editor.el-input {
			width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #88d67e;
						border-radius: 4px;
						padding: 0 10px;
						box-shadow: inset 0px 0px 48px 0px #def5db;
						outline: none;
						color: #999;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #88d67e;
						border-radius: 4px;
						padding: 0 10px;
						box-shadow: inset 0px 0px 48px 0px #def5db;
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #88d67e;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						box-shadow: inset 0px 0px 48px 0px #def5db;
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #88d67e;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						box-shadow: inset 0px 0px 48px 0px #def5db;
						outline: none;
						color: #999;
						width: 288px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #88d67e;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  box-shadow: inset 0px 0px 48px 0px #def5db;
		  		  color: #52b646;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: auto;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #88d67e;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  box-shadow: inset 0px 0px 48px 0px #def5db;
		  		  color: #52b646;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: auto;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #88d67e;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  box-shadow: inset 0px 0px 48px 0px #def5db;
		  		  color: #52b646;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 100px;
		  		  text-align: center;
		  		  height: auto;
		  		}
	}
</style>
