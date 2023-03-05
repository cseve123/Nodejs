// import { val as vv } from './ex.js'
// console.log(vv);
// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// 要么配置package.js, 要么改文件后缀为.mjs

// internal/process/esm_loader.js:74
//     internalBinding('errors').triggerUncaughtException(
// Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Users/ultimater/Downloads/Github/Nodejs/base/ex' imported from /Users/ultimater/Downloads/Github/Nodejs/base/im.js
// 模块没有找到，原因是引入路径需要写后缀
import val from './ex.js'
console.log(val);