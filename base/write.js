const fs = require('fs')
// 会覆盖
fs.writeFile('./base/a.txt', '6666', function(err) {
  console.log(err);
})