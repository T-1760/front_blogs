---
title: page in npm
date: 2022-06-06
tags:
 - index
categories: 
 - npm
---
## NPM 使用
- 参考链接
  [引用参考](https://juejin.cn/post/6974380210388992036)
### 常见命令
*  查看当前NPM的版本号
> npm -v  //终端中会返回当前npm的版本号
* 帮助命令
> npm help [command]

### 创建模块
* 这里可以使用-y，跳过询问阶段(默认 yes同意)会采用默认配置
> npm init 
// 同样也可以使用
> npx create-thinkjs

### install
* 此命令安装一个包，以及它的所依赖的包，会从指定的源地址进行获取最新版本的包进行安装
1. 安装最新版本的包
> npm install packageName // 输入命令终端的根文件项目可使用
> npm install packageName -g // 全局安装包(整台电脑均可使用)
2. 安装指定版本的包
> npm install packageName @version
3. 安装模块到开发环境和生产环境依赖，即你的package.json文件的dependencies字段中；
> npm install packageName --save
> npm install packageName -S // 简写方式
4. 安装模块到开发环境依赖，即你的package.json文件的devDependencies字段中；
> npm install packageName --save-dev
> npm install packageName -D // 简写方式
5. 卸载当前项目中的模块
> npm uninstall packageName

### update
* 此命令会把当前所安装的模块进行更新至最新版本
* 更新/升级当前项目中的模块
> npm update moduleName
* 更新/升级全局安装的模块
> npm update -global packageName

### link
* 用来在本地项目 和 本地npm模块之间建立连接，可以在本地进行模块测试
* 引用模块
> npm link [path]
* 解除模块引用
> npm unlink [package]

### list
* 查看所有全局安装的包
> npm list -g --depth 0
* 查看当前项目安装的包
> npm list
* 查看 npm 的配置
> npm config list -l

### NPM源
* 查看npm安装的位置
> where npm
* 获取当前npm源
> npm config get registryBash
* 设置npm官方镜像源
> npm config set registry https://registry.npmjs.org
* 设置淘宝镜像源
> npm config set registry https://registry.npm.taobao.org
* 你也可以使用cnpm来使用淘宝源
> npm install cnpm -g --registry=https://registry.nlark.com

### 包管理
* publish用于将当前模块的发布到npmjs.com，在此之前你需要npmjs.com申请一个账户用来发布
> 注意，如果你当前使用的是淘宝源，你需要执行 npm config set registry https://registry.npmjs.org 切换到官方镜像源
1. 登录
> npm login
2. 发布包
> npm publish
3. 查看 配置npm的全局模块路径
> npm config get prefix
>> 设置npm的全局模块路径  npm config set prefix "路径"
3. 查看 配置npm的缓存模块路径
> npm config get cache
>> 设置npm的缓存模块路径  npm config set cache "路径"