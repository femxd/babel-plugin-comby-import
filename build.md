# 打包说明



----


如果是Windows系统，修改`package.json`中`scripts`为
```
"build": "./node_modules/.bin/babel src --out-dir lib --ignore __tests__",
```
手动删除`lib`文件夹  
执行
```bash
npm run build
```
再进行发布

