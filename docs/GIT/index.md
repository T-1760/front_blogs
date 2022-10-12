---
title: page in git
date: 2022-06-06
tags:
 - index
categories: 
 - git
---
## git 使用
![git 的4个工作区和一些常见的操作](https://z3.ax1x.com/2021/06/19/RPt3LT.jpg)
* workspace工作区：就是平时进行开发改动的地方，是当前看到最新的内容，在开发的过程也就是对工作区的操作
* Index暂存区：当执行```git add```的命令后，工作区的文件就会被移入暂存区，暂存区标记了当前工作区中那些内容是被 git 管理的，当完成某个需求或者功能后需要提交代码，第一步就是通过```git add```先提交到暂存区。
* Repository本地仓库：位于自己的电脑上，通过```git commit```提交暂存区的内容，会进入本地仓库。
* Remote远程仓库：用来托管代码的服务器，远程仓库的内容能够被分布在多个地点的处于协作关系的本地仓库修改，本地仓库修改完代码后通过 git push命令同步代码到远程仓库。
### it 的工作流程分为以下几步
1.	在工作区开发，添加，修改文件。
2.	将修改后的文件(```git add```)放入暂存区。
3.	将暂存区域的文件(```git commit```)提交到本地仓库。
4.	将本地仓库的修改(```git push```)推送到远程仓库。

### git add
* 添加文件到暂存区
* 添加某个文件到暂存区，后面可以跟多个文件，以空格区分
> git add xxx.js xxx.html xxx.css
* 添加当前更改的所有文件到暂存区。
> git add .

### git commit
* 提交暂存的更改，会新开编辑器进行编辑
> git commit 
* 提交暂存的更改，并记录下备注
> git commit -m "【开发需求】增加右键菜单面板功能"
* 等同于 git add . && git commit -m
> git commit -am
* 对最近一次的提交的信息进行修改,此操作会修改 commit的 hash值
> git commit --amend

### git pull
* 从**远程仓库拉取代码并合并到本地**，可简写为 git pull 等同于 git fetch && git merge 
> git pull <远程主机名> <远程分支名>:<本地分支名>
* 使用 rebase的模式进行合并
> git pull --rebase <远程主机名> <远程分支名>:<本地分支名>

### git fetch
*与 git pull不同的是 git fetch操作**仅仅只会拉取远程的更改，不会自动进行merge操作**。对当前的代码没有影响
* 获取远程仓库特定分支的更新
> git fetch <远程主机名> <分支名>
* 获取远程仓库所有分支的更新
> git fetch --all

### git branch
* 新建本地分支，但不切换
> git branch <本地分支名> 
* 查看本地分支
> git branch
* 查看远程分支
> git branch -r
* 查看本地和远程分支
> git branch -a
* 删除本地分支
> git branch -D <本地分支名>
* 重新命名分支
> git branch -m <old-本地分支名> <new-本地分支名>

### 基本用法
* 查看下现在的状态
> git status
* 撤回工作区的修改 
> git checkout -- <文件名称>
* 对文件修改并且已经提交到暂存区，这部分文件不想要或撤销
> git reset <文件名称>
* 撤回所有存在暂存区的文件
> git reset

[引用参考](https://juejin.cn/post/6974184935804534815)