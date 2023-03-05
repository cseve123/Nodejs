const fs = require('fs')
fs.readFile('./base/a.txt', 'utf-8', function (err, data) {
  if (!err) {
    let newData = data + '888'
    fs.writeFile('./base/a.txt', newData, function (err) {
      if (!err) {
        console.log('追加成功');
      }
    })
  }
})