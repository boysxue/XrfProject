module.exports = {
    devServer: {
        // open:true, //配置自动启动浏览器
        // port:8888, // 设置端口号
        // host:'127.0.0.1',
        // https:true,
        proxy: {
            '/api': {
            target: 'http://api.m.taobao.com',
            changeOrigin: true, // 是否跨域
            //   pathRewrite: {
            //       '^/api' : '/api'
            //   }
            }
        }
    }
  }