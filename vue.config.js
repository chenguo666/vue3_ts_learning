module.exports = {
  publicPath: './',
  // 配置方式1
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/component'
      }
    }
    // module: {
    //   rules: [
    //     {
    //       test: /\.mjs$/,
    //       include: /node_modules/,
    //       type: 'javascript/auto'
    //     }
    //   ]
    // }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:4000/',
        pathRewrite: {
          '^/api': ''
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
  // 配置方式2
  // configureWebpacik:(config)=>{
  //   config.resolve.alias={
  //     '@':path.resolve(__dirname,'src'),
  //     'component':'@/component'
  //   }
  // }
  // 配置方式3
  // chainWebpack:(config)=>{
  //   config.resolve.alias.set('@',path.resolve(__dirname,'src')).set('component','@/component')
  // }
};
