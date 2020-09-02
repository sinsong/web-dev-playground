// webpack 的入口点是 js，这里引入样式表资源
// MiniCssExtractPlugin 插件会做分离
require('../style/index.scss')

// 引入其他 js 文件
// require('xxx.js')

// 与普通脚本无异(猜)
window.addEventListener("load", function(){
  console.log(
    "%c web-dev-playground %c by literal kernel ",

    [
      "font-size: 18px",
      "color: black",
      "background:white",
      "padding:5px 0"
    ].join(';'),
    [
      "font-size:18px",
      "color:white",
      "background:rgb(100, 149, 237)",
      "padding:5px 0"
    ].join(';')
  )
})