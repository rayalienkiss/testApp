/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 入口文件
	 */
	//import React from 'react';
	//import ReactDom from 'react-dom';

	// 导入公共样式
	//import 'ASSETS/less/app.less';

	// 导入路由配置
	//import routes from '../routes';

	// 渲染页面
	//ReactDom.render(routes, document.getElementById('app'));

	/*** entry.js ***/
	//document.getElementById('app').innerHTML="123";

	// var text = require('../components/components-ui/switch/index');
	document.write( __webpack_require__( 1 ) );


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = 'it is done again';


/***/ }
/******/ ]);