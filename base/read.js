const fs = require('fs')
// console.log(fs);
// Error: ENOENT: no such file or directory, open './a.txt'
// Error,原因这里需要写完整路径
fs.readFile('./base/a.txt', 'utf-8', function(err, data){
  console.log(err);
  console.log(data);
})