# poetry-template-react

如使用该前端脚手架，可以先安装

```bash
npm install -g poetry-cli
```

```
? 请选择使用的模板
❯ umi
  taro
  electron
  next
```

```bash
poetry init <project-name>

cd <project-name> && npm install

npm run dev
```

## 程序目录

```
.
├── config                   # Server config
│   ├── server.config        # server
├── docs                     # 说明
├── src                      # 应用源文件
│   ├── api                  # api方法和配置库
│       ├── api.config.js    # api接口配置
│       ├── index.js         # fetch方法
│   ├── components           # 组件库
│       ├── DevTools         # redux dev tools
│   ├── containers           # 容器库
│       ├── App              # 入口容器
│   ├── router               # 路由配置
│   ├── store                # store
│   ├── index.html           # html入口
│   ├── index.js             # js入口
├── .babelrc 
├── .eslintrc.js 
├── package.json 
├── webpack.config.js 
```

## mockjs学习

[http://mockjs.com/](http://mockjs.com/)

## rap API文档工具学习

[http://rap.taobao.org/org/index.do](http://rap.taobao.org/org/index.do)
