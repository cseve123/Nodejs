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
if (process.argv[2] === '--help') {
	console.log('获取到了命令参数');
}

