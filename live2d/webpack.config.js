const path = require('path');

module.exports = {
  entry: './waifu-tips.js',  // 你的入口文件
  output: {
    filename: 'bundle.js',  // 打包输出的文件名
    path: path.resolve(__dirname, 'dist'),  // 输出的文件目录
  },
  mode: 'development',  // 或 'production'，根据你的需求
};
