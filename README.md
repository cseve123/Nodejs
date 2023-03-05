# Nodejs
node学习
1. 基础到进阶的开发技术栈
2. 脚手架工具运行原理，自定义脚手架
3. 服务端接口开发逻辑，缓存、数据库、负载均衡等

## Node是什么
不是独立的编程语言，不是js框架
是一个js运行环境，操作系统下的环境
浏览器能力
js code ----> js Engine(V8) ------> Machine Code
## 与js关系
ECMAScript是浏览器给予的能力
控制浏览器、DOM、网络
Nodejs独立于浏览器宿主的能力
核心模块http、fs、url, 第三方模块nodemon、vue-cli脚手架，自定义模块
## Node能做什么
后端web服务器开发与网络爬虫开发
脚手架命令行工具
图形界面应用程序
## 发展历史
2008 V8引擎随Chrome问世
2009 Node发布，使用V8引擎

## 本地环境搭建与基础入门
搭建Node的运行环境
就是安装
使用Node运行js代码
> node base/index.js

## 文件操作与模块化编程概念
如何读取文件的内容
> fs.readFile
如何向文件中写入内容
> fs.writeFile
向文件中追加一段内容
> fs.readFile + fs.writeFile 组合拼接
文件操作里的路径需要完整的路径
模块化概念
> 拆分代码、相互独立、导入导出
require('fs')到的是什么意思
> 意思是引入模块
为什么需要模块化
隔离代码
js有哪些模块化规范
CommonJS、ADM、UMD、ECMAScript Module

## 模块化开发规范
