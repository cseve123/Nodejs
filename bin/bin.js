#! /usr/bin/env node

// console.log('mycli');
// 有哪些参数了
/**
 * mycli --help
 * [
			'C:\\Program Files\\nodejs\\node.exe',
			'C:\\Program Files\\nodejs\\node_modules\\mycli\\bin.js',
			'--help'
		]

 */
// console.log(process.argv);
// 原始方法
// if (process.argv[2] === '--help') {
// 	console.log('获取到了命令参数');
// }

// 使用commander获取参数
// const { program } = require('commander')
// console.log(program.parse(process.argv));
// program.option('-f --framework <framework>', '设置框架')
// program.parse()

// 自定义指令
// const { program } = require('commander')
// // 创建指令 和别名、描述和执行
// program
// .command('create <project> [other....]')
// .alias('crt')
// .description('创建项目')
// .action((project, args) => {
// 	// 真实命令行要执行的内容地区
// 	console.log(project, args);
// })
// program.parse()

// 模块化拆分
// const { program } = require('commander')
import { program } from 'commander';
// const myHelp = require('./cli/help.js')
// const myCommand = require('./cli/command.js')
import myHelp from './cli/help.js';
import myCommand from './cli/command.js';
myHelp(program)
myCommand(program)
program.parse(process.argv)




