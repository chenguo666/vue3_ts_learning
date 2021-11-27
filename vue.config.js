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
