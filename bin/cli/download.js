import download from 'download-git-repo';
import ora from 'ora';
import chalk from 'chalk';
function downloadFn (url, project) {
	const spinner = ora().start()
	spinner.text = 'loading...'
	spinner.color = 'cyan'
	download(url, project, {clone: true}, function (err) {
		if (!err) {
			spinner.succeed('下载成功!')
			console.log(chalk.blue.bold('you can:'));
			console.log(chalk.green.bgBlueBright('npm run dev'));
		} else {
			console.log(err);
			spinner.fail('下载失败')
		}
	})
}
export default downloadFn