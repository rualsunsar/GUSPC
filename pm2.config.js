module.exports = {
  apps: [
    {
      name: 'GUSNuxt', // 应用名称，自定义
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start', // 启动命令
      instances: '1', // 进程数量
      autorestart: true, // 程序崩溃后自动重启
      watch: false, // 监听文件变化自动重启
      max_memory_restart: '1G', // 内存超出后重启
      env: {
        NODE_ENV: 'production' // 环境变量
      }
    }
  ]
}
