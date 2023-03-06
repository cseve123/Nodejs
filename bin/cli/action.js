import inquirer from 'inquirer';
import config from './config.js';
import downloadFn from './download.js';
function myAction (project, args) {
	// console.log(project, args);
	// {
	// 	type: 'input',
	// 	name: 'userName',
	// 	message: '你的名字'
	// }
	// myAction 可改造成async await
	inquirer.prompt([
		{
			type: 'list',
			name: 'framework',
			choices: config.framework,
			message: '请选择你使用的框架'
		}
	]).then((awsers) => { 
		console.log('awsers', config.frameworkUrl[awsers.framework]);
		downloadFn(config.frameworkUrl[awsers.framework], project)
	}).catch((err) => {
		console.log('err', err);
	})
}
export default myAction