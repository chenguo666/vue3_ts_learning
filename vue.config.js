const CompressionWebpackPlugin = require('compression-webpack-plugin');
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  // 配置方式1
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/component'
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
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
