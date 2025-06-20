<template>
	<div class="main-containers">
		<div class="top-container" :style='{"boxShadow":"0 0px 0px rgba(64, 158, 255, .3)","padding":"0 20px","margin":" auto","overflow":"hidden","alignItems":"center","background":"#ffffff","display":"flex","width":"1200px","position":"relative","justifyContent":"space-between","height":"64px","zIndex":"1002"}'>
			<img v-if='false' :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","display":"block","height":"44px"}' src='http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg'>
			<div v-if="true" :style='{"color":"#000","fontSize":"28px"}'>驾校管理系统</div>
			<div>
				<div v-if="true" :style='{"color":"#666","fontSize":"14px","display":"inline-block"}'></div>
				<el-button v-if="!Token" @click="toLogin()" :style='{"padding":"0 12px","margin":"0 0 0 10px","color":"#f4f4f5","borderRadius":"2px","background":"#52b646","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px"}'>登录/注册</el-button>
                <el-button v-if="Token" @click="logout" :style='{"padding":"0 12px","margin":"0 0 0 10px","color":"#666","borderRadius":"2px","background":"#f4f4f5","display":"inline-block","fontSize":"14px","lineHeight":"32px","height":"32px"}'>退出</el-button>
			</div>
		</div>
		
		
		<div class="body-containers" :style='"horizontal" == "vertical" ? {"minHeight":"100vh","padding":"64px 0 0","margin":"0 0 0 210px","position":"relative","background":"rgba(64, 158, 255, .3)","display":"block"} : {"minHeight":"100vh","padding":"0","margin":"0","position":"relative","background":"url(http://codegen.caihongy.cn/20221117/38e5e7b28ead44818736f496c2105696.jpg) no-repeat right 500px,url(http://codegen.caihongy.cn/20221117/84d9df1596cc43c28e3a36058c6a89da.png) no-repeat left bottom,#f7f8fc"}'>
			<div class="menu-preview" :style='{"padding":"0 20px","borderColor":"#efefef","background":"url(http://codegen.caihongy.cn/20221114/1fde69930e764ee1acd7026e05e4c7ee.jpg) no-repeat center top","borderWidth":"0 0 0px 0","width":"100%","borderStyle":"solid","height":"auto"}'>
				<el-menu class="el-menu-horizontal-demo" :style='{"border":0,"padding":"0","listStyle":"none","margin":"0 auto","flexWrap":"wrap","background":"none","display":"flex","width":"auto","position":"relative","justifyContent":"center"}' :default-active="activeIndex" :unique-opened="true" mode="horizontal" :router="true" @select="handleSelect">
					<el-image v-if="false" :style='{"width":"44px","margin":"8px 10px 8px 0","objectFit":"cover","borderRadius":"100%","float":"left","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover"></el-image>
					<el-menu-item v-for="(menu, index) in menuList" :index="index + ''" :key="index" :route="menu.url">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"60px","fontSize":"14px","height":"60px"}' :class="iconArr[index]"></i>
						<span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"14px","color":"inherit","height":"60px"}'>{{menu.name}}</span>
					</el-menu-item>
					<el-menu-item @click="goBackend">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"60px","fontSize":"14px","height":"60px"}' class="el-icon-box"></i>
						<span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"14px","color":"inherit","height":"60px"}'>后台管理</span>
					</el-menu-item>
					<el-menu-item :index="menuList.length + 2 + ''" v-if="Token && notAdmin" @click="goMenu('/index/center')">
						<i v-if="true" :style='{"padding":"0 10px","margin":"0","color":"inherit","width":"14px","lineHeight":"60px","fontSize":"14px","height":"60px"}' class="el-icon-user"></i>
						<span :style='{"padding":"0 10px","lineHeight":"60px","fontSize":"14px","color":"inherit","height":"60px"}'>个人中心</span>
					</el-menu-item>
				</el-menu>
			</div>
			
			<div class="banner-preview" :style='{"width":"100%","height":"auto"}'>
				<el-carousel :style='{"width":"100%","margin":"0 auto"}' trigger="click" indicator-position="inside" arrow="always" type="default" direction="horizontal" height="500px" :autoplay="true" :interval="3000" :loop="true">
					<el-carousel-item :style='{"borderRadius":"0px","width":"100%","height":"100%"}' v-for="item in carouselList" :key="item.id">
						<el-image :style='{"objectFit":"cover","width":"100%","height":"100%"}' :src="baseUrl + item.value" fit="cover"></el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
			
			<router-view></router-view>
			
			<div class="bottom-preview" :style='{"padding":"20px 0","margin":"20px 0 0","alignItems":"center","background":"url(http://codegen.caihongy.cn/20221114/5ee2a2d898f04e6498db12f9e81d7350.jpg) repeat-y center top","flexDirection":"column","display":"flex","width":"100%","justifyContent":"center"}'>
			    <img :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","display":"none","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" >
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#333"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#333"}'></div>
			    <div :style='{"margin":"10px 0 0","fontSize":"14px","lineHeight":"28px","color":"#333"}'></div>
			</div>
		</div>
		
	</div>
</template>

<script>
import Vue from 'vue'
export default {
    data() {
		return {
            activeIndex: '0',
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"学员","menuJump":"列表","tableName":"xueyuan"}],"menu":"学员管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"驾校教练","menuJump":"列表","tableName":"jiaxiaojiaolian"}],"menu":"驾校教练管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论","预约"],"menu":"驾校车辆","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除","取消"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除","审核"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除","预约"],"menu":"考试安排","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除","取消"],"menu":"考试预约","menuJump":"列表","tableName":"kaoshiyuyue"}],"menu":"考试预约管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改","删除","审核"],"menu":"取消考试","menuJump":"列表","tableName":"quxiaokaoshi"}],"menu":"取消考试管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除","查看评论"],"menu":"驾驶知识","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"学员成绩","menuJump":"列表","tableName":"xueyuanchengji"}],"menu":"学员成绩管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"笔试考试管理","tableName":"exampaper"}],"menu":"笔试考试管理"},{"child":[{"appFrontIcon":"cuIcon-calendar","buttons":["新增","查看","修改","删除"],"menu":"考试题目管理","tableName":"examquestion"}],"menu":"考试题目管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"驾校公告","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"错题本","tableName":"examfailrecord"},{"appFrontIcon":"cuIcon-baby","buttons":["新增","查看","修改","删除"],"menu":"笔试考试列表","tableName":"exampaperlist"},{"appFrontIcon":"cuIcon-read","buttons":["查看","删除","导出"],"menu":"驾校考试记录","tableName":"examrecord"}],"menu":"驾校考试管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","预约"],"menu":"驾校车辆列表","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","预约"],"menu":"考试安排列表","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排模块"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看"],"menu":"驾驶知识列表","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","删除","取消"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","删除","支付","取消"],"menu":"考试预约","menuJump":"列表","tableName":"kaoshiyuyue"}],"menu":"考试预约管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","删除"],"menu":"取消考试","menuJump":"列表","tableName":"quxiaokaoshi"}],"menu":"取消考试管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"学员成绩","menuJump":"列表","tableName":"xueyuanchengji"}],"menu":"学员成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","预约"],"menu":"驾校车辆列表","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","预约"],"menu":"考试安排列表","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排模块"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看"],"menu":"驾驶知识列表","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学员","tableName":"xueyuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"驾校车辆","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","删除"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","审核","删除"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"考试预约","menuJump":"列表","tableName":"kaoshiyuyue"}],"menu":"考试预约管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","审核"],"menu":"取消考试","menuJump":"列表","tableName":"quxiaokaoshi"}],"menu":"取消考试管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"学员成绩","menuJump":"列表","tableName":"xueyuanchengji"}],"menu":"学员成绩管理"},{"child":[{"appFrontIcon":"cuIcon-calendar","buttons":["新增","查看","修改","删除"],"menu":"考试题目管理","tableName":"examquestion"}],"menu":"考试题目管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"笔试考试管理","tableName":"exampaper"}],"menu":"笔试考试管理"},{"child":[{"appFrontIcon":"cuIcon-baby","buttons":["新增","查看","修改","删除"],"menu":"笔试考试列表","tableName":"exampaperlist"},{"appFrontIcon":"cuIcon-read","buttons":["查看","删除"],"menu":"驾校考试记录","tableName":"examrecord"},{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"错题本","tableName":"examfailrecord"}],"menu":"驾校考试管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","预约"],"menu":"驾校车辆列表","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","预约"],"menu":"考试安排列表","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排模块"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看"],"menu":"驾驶知识列表","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"驾校教练","tableName":"jiaxiaojiaolian"}],
			baseUrl: '',
			carouselList: [],
			menuList: [],
			form: {
				ask: '',
				userid: localStorage.getItem('userid')
			},
			Token: localStorage.getItem('Token'),
            notAdmin: localStorage.getItem('sessionTable')!='"users"',
			timer: '',
			iconArr: [
				'el-icon-star-off',
				'el-icon-goods',
				'el-icon-warning',
				'el-icon-question',
				'el-icon-info',
				'el-icon-help',
				'el-icon-picture-outline-round',
				'el-icon-camera-solid',
				'el-icon-video-camera-solid',
				'el-icon-video-camera',
				'el-icon-bell',
				'el-icon-s-cooperation',
				'el-icon-s-order',
				'el-icon-s-platform',
				'el-icon-s-operation',
				'el-icon-s-promotion',
				'el-icon-s-release',
				'el-icon-s-ticket',
				'el-icon-s-management',
				'el-icon-s-open',
				'el-icon-s-shop',
				'el-icon-s-marketing',
				'el-icon-s-flag',
				'el-icon-s-comment',
				'el-icon-s-finance',
				'el-icon-s-claim',
				'el-icon-s-opportunity',
				'el-icon-s-data',
				'el-icon-s-check'
			],	
		}
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.menuList = this.$config.indexNav;
		this.getCarousel();
    },
    mounted() {
        this.activeIndex = localStorage.getItem('keyPath') || '0';
    },
    watch: {
        $route(newValue) {
            let that = this
            let url = window.location.href
            let arr = url.split('#')
            for (let x in this.menuList) {
                if (newValue.path == this.menuList[x].url) {
                    this.activeIndex = x
                }
            }
            this.Token = localStorage.getItem('Token')
        },
    },
    methods: {
        handleSelect(keyPath) {
            if (keyPath) {
                localStorage.setItem('keyPath', keyPath)
            }
        },
		toLogin() {
		  this.$router.push('/login');
		},
        logout() {
            localStorage.clear();
            Vue.http.headers.common['Token'] = "";
            this.$router.push('/index/home');
            this.activeIndex = '0'
            localStorage.setItem('keyPath', this.activeIndex)
            this.Token = ''
            this.$forceUpdate()
            this.$message({
                message: '登出成功',
                type: 'success',
                duration: 1000,
            });
        },
		getCarousel() {
			this.$http.get('config/list', {params: { page: 1, limit: 3 }}).then(res => {
				if (res.data.code == 0) {
					this.carouselList = res.data.data.list;
				}
			});
		},
		goBackend() {
			window.open(`${this.$config.baseUrl}admin/dist/index.html`, "_blank");
		},
		goMenu(path) {
            if (!localStorage.getItem('Token')) {
                this.toLogin();
            } else {
                this.$router.push(path);
            }
		},
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.menu-preview {
	  .el-scrollbar {
	    height: 100%;
	
	    & /deep/ .scrollbar-wrapper {
	      overflow-x: hidden;
	    }
	  }
	}
	
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item {
		cursor: pointer;
		border: 0;
		padding: 0 20px;
		color: #fff;
		white-space: nowrap;
		display: flex;
		font-size: 14px;
		line-height: 50px;
		background: none;
		align-items: center;
		position: relative;
		list-style: none;
		height: 50px;
	}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item:hover {
		cursor: pointer;
		border: 0;
		padding: 0 20px;
		color: #fff;
		white-space: nowrap;
		background: rgba(0,0,0,0.2);
		font-size: 14px;
		line-height: 50px;
		position: relative;
		list-style: none;
		height: 50px;
	}
	
	.menu-preview .el-menu-horizontal-demo .el-menu-item.is-active {
		cursor: pointer;
		border: 0;
		padding: 0 20px;
		color: #fff;
		white-space: nowrap;
		background: rgba(0,0,0,0.2);
		font-size: 14px;
		line-height: 50px;
		position: relative;
		list-style: none;
		height: 50px;
	}
	
	.banner-preview {
	  .el-carousel /deep/ .el-carousel__indicator button {
	    width: 0;
	    height: 0;
	    display: none;
	  }
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--left:hover {
		background: #52b646;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right {
		width: 36px;
		font-size: 12px;
		height: 36px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__container .el-carousel__arrow--right:hover {
		background: #52b646;
	}

	.banner-preview .el-carousel /deep/ .el-carousel__indicators {
		padding: 0;
		margin: 0 0 12PX;
		z-index: 2;
		position: absolute;
		list-style: none;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li {
		border-radius: 100%;
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.4;
		transition: 0.3s;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li:hover {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 0.7;
		height: 12px;
	}
	
	.banner-preview .el-carousel /deep/ .el-carousel__indicators li.is-active {
		padding: 0;
		margin: 0 4px;
		background: #fff;
		display: inline-block;
		width: 12px;
		opacity: 1;
		height: 12px;
	}

    .chat-content {
      .left-content {
          width: 100%;
          text-align: left;
      }
      .right-content {
          width: 100%;
          text-align: right;
      }
    }
</style>
