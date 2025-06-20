export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["新增","查看","修改","删除"],"menu":"学员","menuJump":"列表","tableName":"xueyuan"}],"menu":"学员管理"},{"child":[{"appFrontIcon":"cuIcon-similar","buttons":["新增","查看","修改","删除"],"menu":"驾校教练","menuJump":"列表","tableName":"jiaxiaojiaolian"}],"menu":"驾校教练管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论","预约"],"menu":"驾校车辆","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","修改","删除","取消"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","修改","删除","审核"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除","预约"],"menu":"考试安排","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","修改","删除","取消"],"menu":"考试预约","menuJump":"列表","tableName":"kaoshiyuyue"}],"menu":"考试预约管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","修改","删除","审核"],"menu":"取消考试","menuJump":"列表","tableName":"quxiaokaoshi"}],"menu":"取消考试管理"},{"child":[{"appFrontIcon":"cuIcon-taxi","buttons":["新增","查看","修改","删除","查看评论"],"menu":"驾驶知识","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["新增","查看","修改","删除"],"menu":"学员成绩","menuJump":"列表","tableName":"xueyuanchengji"}],"menu":"学员成绩管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"笔试考试管理","tableName":"exampaper"}],"menu":"笔试考试管理"},{"child":[{"appFrontIcon":"cuIcon-calendar","buttons":["新增","查看","修改","删除"],"menu":"考试题目管理","tableName":"examquestion"}],"menu":"考试题目管理"},{"child":[{"appFrontIcon":"cuIcon-send","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"驾校公告","tableName":"news"}],"menu":"系统管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"错题本","tableName":"examfailrecord"},{"appFrontIcon":"cuIcon-baby","buttons":["新增","查看","修改","删除"],"menu":"笔试考试列表","tableName":"exampaperlist"},{"appFrontIcon":"cuIcon-read","buttons":["查看","删除","导出"],"menu":"驾校考试记录","tableName":"examrecord"}],"menu":"驾校考试管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","预约"],"menu":"驾校车辆列表","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","预约"],"menu":"考试安排列表","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排模块"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看"],"menu":"驾驶知识列表","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","删除","取消"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","删除","支付","取消"],"menu":"考试预约","menuJump":"列表","tableName":"kaoshiyuyue"}],"menu":"考试预约管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","删除"],"menu":"取消考试","menuJump":"列表","tableName":"quxiaokaoshi"}],"menu":"取消考试管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"学员成绩","menuJump":"列表","tableName":"xueyuanchengji"}],"menu":"学员成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","预约"],"menu":"驾校车辆列表","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","预约"],"menu":"考试安排列表","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排模块"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看"],"menu":"驾驶知识列表","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学员","tableName":"xueyuan"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除","查看评论"],"menu":"驾校车辆","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看","删除"],"menu":"预约信息","menuJump":"列表","tableName":"yuyuexinxi"}],"menu":"预约信息管理"},{"child":[{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","审核","删除"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看"],"menu":"考试预约","menuJump":"列表","tableName":"kaoshiyuyue"}],"menu":"考试预约管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","审核"],"menu":"取消考试","menuJump":"列表","tableName":"quxiaokaoshi"}],"menu":"取消考试管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"学员成绩","menuJump":"列表","tableName":"xueyuanchengji"}],"menu":"学员成绩管理"},{"child":[{"appFrontIcon":"cuIcon-calendar","buttons":["新增","查看","修改","删除"],"menu":"考试题目管理","tableName":"examquestion"}],"menu":"考试题目管理"},{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"笔试考试管理","tableName":"exampaper"}],"menu":"笔试考试管理"},{"child":[{"appFrontIcon":"cuIcon-baby","buttons":["新增","查看","修改","删除"],"menu":"笔试考试列表","tableName":"exampaperlist"},{"appFrontIcon":"cuIcon-read","buttons":["查看","删除"],"menu":"驾校考试记录","tableName":"examrecord"},{"appFrontIcon":"cuIcon-cardboard","buttons":["查看","删除"],"menu":"错题本","tableName":"examfailrecord"}],"menu":"驾校考试管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-full","buttons":["查看","预约"],"menu":"驾校车辆列表","menuJump":"列表","tableName":"jiaxiaocheliang"}],"menu":"驾校车辆模块"},{"child":[{"appFrontIcon":"cuIcon-time","buttons":["查看","预约"],"menu":"考试安排列表","menuJump":"列表","tableName":"kaoshianpai"}],"menu":"考试安排模块"},{"child":[{"appFrontIcon":"cuIcon-rank","buttons":["查看"],"menu":"驾驶知识列表","menuJump":"列表","tableName":"jiashizhishi"}],"menu":"驾驶知识模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"驾校教练","tableName":"jiaxiaojiaolian"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
