/**
 * 入口文件
 */
import React from 'react';
import ReactDom from 'react-dom';

// 导入公共样式
import 'ASSETS/less/app.less';
// 导入脚本
// import 'ASSETS/js/jquery.min.js';
// import 'ASSETS/js/common.js';

// 导入路由配置
import routes from '../routes';

// 渲染页面
ReactDom.render(routes, document.getElementById('app'));

// 百度统计
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2acaebc1ef0d040c6f8117602345064b";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
