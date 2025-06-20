import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/exampaperlist/exam'
    import kaoshiyuyue from '@/views/modules/kaoshiyuyue/list'
    import news from '@/views/modules/news/list'
    import examfailrecord from '@/views/modules/examfailrecord/list'
    import examquestion from '@/views/modules/examquestion/list'
    import xueyuan from '@/views/modules/xueyuan/list'
    import discussjiaxiaocheliang from '@/views/modules/discussjiaxiaocheliang/list'
    import yuyuexinxi from '@/views/modules/yuyuexinxi/list'
    import quxiaokaoshi from '@/views/modules/quxiaokaoshi/list'
    import xueyuanchengji from '@/views/modules/xueyuanchengji/list'
    import exampaper from '@/views/modules/exampaper/list'
    import kaoshianpai from '@/views/modules/kaoshianpai/list'
    import jiaxiaojiaolian from '@/views/modules/jiaxiaojiaolian/list'
    import quxiaoyuyue from '@/views/modules/quxiaoyuyue/list'
    import systemintro from '@/views/modules/systemintro/list'
    import exampaperlist from '@/views/modules/exampaperlist/list'
    import discussjiashizhishi from '@/views/modules/discussjiashizhishi/list'
    import jiashizhishi from '@/views/modules/jiashizhishi/list'
    import jiaxiaocheliang from '@/views/modules/jiaxiaocheliang/list'
    import config from '@/views/modules/config/list'
    import examrecord from '@/views/modules/examrecord/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/kaoshiyuyue',
        name: '考试预约',
        component: kaoshiyuyue
      }
      ,{
	path: '/news',
        name: '驾校公告',
        component: news
      }
      ,{
	path: '/examfailrecord',
        name: '错题本',
        component: examfailrecord
      }
      ,{
	path: '/examquestion',
        name: '考试题目管理',
        component: examquestion
      }
      ,{
	path: '/xueyuan',
        name: '学员',
        component: xueyuan
      }
      ,{
	path: '/discussjiaxiaocheliang',
        name: '驾校车辆评论',
        component: discussjiaxiaocheliang
      }
      ,{
	path: '/yuyuexinxi',
        name: '预约信息',
        component: yuyuexinxi
      }
      ,{
	path: '/quxiaokaoshi',
        name: '取消考试',
        component: quxiaokaoshi
      }
      ,{
	path: '/xueyuanchengji',
        name: '学员成绩',
        component: xueyuanchengji
      }
      ,{
	path: '/exampaper',
        name: '笔试考试管理',
        component: exampaper
      }
      ,{
	path: '/kaoshianpai',
        name: '考试安排',
        component: kaoshianpai
      }
      ,{
	path: '/jiaxiaojiaolian',
        name: '驾校教练',
        component: jiaxiaojiaolian
      }
      ,{
	path: '/quxiaoyuyue',
        name: '取消预约',
        component: quxiaoyuyue
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/exampaperlist',
        name: '笔试考试列表',
        component: exampaperlist
      }
      ,{
	path: '/discussjiashizhishi',
        name: '驾驶知识评论',
        component: discussjiashizhishi
      }
      ,{
	path: '/jiashizhishi',
        name: '驾驶知识',
        component: jiashizhishi
      }
      ,{
	path: '/jiaxiaocheliang',
        name: '驾校车辆',
        component: jiaxiaocheliang
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/examrecord',
        name: '驾校考试记录',
        component: examrecord
      }
    ]
  },
  {
    path: '/adminexam',
    name: 'adminexam',
    component: adminexam,
    meta: {icon:'', title:'adminexam'}
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
