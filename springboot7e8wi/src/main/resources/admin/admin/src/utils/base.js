const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot7e8wi/",
            name: "springboot7e8wi",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot7e8wi/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "驾校管理系统"
        } 
    }
}
export default base
