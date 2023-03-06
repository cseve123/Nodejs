import myAction from './action.js';
function myCommand (program) {
	program
		.command('create <project> [other....]')
		.alias('crt')
		.description('创建项目')
		.action(myAction)
}
export default myCommand