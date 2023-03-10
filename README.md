# Nodejs
node学习
1. 基础到进阶的开发技术栈
2. 脚手架工具运行原理，自定义脚手架
3. 服务端接口开发逻辑，缓存、数据库、负载均衡等

## Node是什么
不是独立的编程语言，不是js框架
是一个js运行环境，操作系统下的环境
浏览器能力
> js code ----> js Engine(V8) ------> Machine Code
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
> CommonJS、ADM、UMD、ECMAScript Module  

## 模块化开发规范--ECMAScript
> Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.  
// 错误的提示是需要配置package.json  
> internal/process/esm_loader.js:74  
> internalBinding('errors').triggerUncaughtException(  
> Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/ultimater/Downloads/Github/Nodejs/base/ex' imported from /Users/ultimater/Downloads/Github/Nodejs/base/im.js  
// 模块没有找到，原因是引入路径需要写后缀  

## npm包管理器
npm init [-y] 初始package  

## 脚手架
是什么？  
全局命令行工具  
创建初始化代码文件及目录  
基本能力？  
全局命令行执行能力  
命令行交互能力  
项目初始化代码下载能力  
如何实现自己的脚手架工具思路？  
1. 创建自定义全局命令  
2. 命令参数接收处理  
3. 终端交互  
4. 下载远程项目代码  
5. 项目初始化完成提示  
> 如 npm init vite@latest

## 脚手架-自定义全局指令
1. 需要package里，有bin{}对象指令具体路径
2. npm link 让命令生效的挂载
3. bin里的文件做为入口需要声明代码  
```
// 意思是使用环境变量下的node运行
#! /usr/bin/env node 
```
4. 原始取命令参数依赖process.argv
```
// mycli --help
// 取索引2是因为已经有了默认的环境参数
process.argv[2]
```

## 脚手架-commander 命令参数处理工具 第三方参数获取
1. npm install commander
2. const { program } = require('commander')
3. program.option('-f --framework <xxxx>', 'dec') 创建了新的命令
4. program.parse() 解析出来

## 脚手架-commander 处理自定义的参数
1. program.command('create <project> [other...]')
2. .alias('crt') 别名
3. .description('创建项目') 描述
4. .action((project, args) => {}) 执行的内容
5. program.parse() 最后都需要解析

## 脚手架-commander 模块化拆分
因为action里执行的内容特别多
拆分出option command action,导出

## 脚手架-inquirer 命令行问答交互
1. npm install inquirer
2. inquirer.prompt([{type: 'list', name: 'name', choices: [1,2,3], message: '描述'}]).then((answer)=>{}).catch((err)=>{})

## 脚手架-download-git-repo 下载远程项目代码
1. npm install download-git-repo
2. download('url', 'dir', {cloen: tue}, function(err){})
3. 注意url可以是direct:xxxx,下载github以外的代码

## 脚手架-ora 下载等待时间交互
1. npm install ora 
2. const spinner = ora().start()
3. 异步中spinner.succeed('') 或 spinner.fail('')

## 脚手架-chalk 命令行渲染工具
1. import chalk from 'chalk'
2. console.log(chalk.blue('Hello world!'))