# green-under-sun

Click here to view the [demo](http://124.222.91.249:3000/)

## Build Setup

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn generate

# view a production version of your app
$ yarn start
```

### 1、静态化页面部署
我们从官网给出的文档可以看出，部署静态化页面需要用到的命令是 nuxt generate ，执行的时候会在根目录下面生成 dist 目录，里面的文件都是静态化页面需要的打包好的文件。

### 2、服务器端渲染部署
#### 第一步、在本地 npm run build,会在.nuxt文件夹下生成dist文件;nuxt generate,生成dist目录;
#### 第二步、把本地文件的.nuxt,dist,static,package.json,nuxt.config.js,这四个文件夹放到服务器目录文件下，我在服务器上创建了run/www/visneyNuxt路径，四个文件放到里面;
#### 第三步、用cmd进入目录文件夹，安装依赖，npm install --production;
#### 第四步、npm start 此时运行的是 http://localhost:3000;

#### 使用 pm2 启动 Nuxt.js 项目。下面是具体的步骤：
##### 1、首先，安装 pm2：
```bash
npm install pm2 -g
```
##### 2、在 Nuxt.js 项目的根目录下创建一个 pm2 配置文件，例如 pm2.config.js，配置内容如下：
```bash
module.exports = {
  apps: [
    {
      name: 'my-nuxt-app', // 应用名称，自定义
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start', // 启动命令
      instances: 'max', // 进程数量
      autorestart: true, // 程序崩溃后自动重启
      watch: false, // 监听文件变化自动重启
      max_memory_restart: '1G', // 内存超出后重启
      env: {
        NODE_ENV: 'production' // 环境变量
      }
    }
  ]
}
```
##### 3、执行以下命令启动应用：
```bash
pm2 start pm2.config.js
```

这将会在后台启动一个进程来运行 Nuxt.js 应用。你可以使用
```bash
pm2 status
```
命令来查看进程状态。如果需要停止应用，可以使用
```bash
pm2 stop my-nuxt-app
```
命令。

注意：在启动应用之前，你需要先在生产环境中运行
```bash
npm run build
```
命令来生成静态文件。
