Git is a version control system.
Git is free software.
1.$ vue init webpack my-project  或  $ vue init webpack-simple my-project 搭建脚手架完成
2.安装   fastclick （移动端的300ms点击事件延迟） 安装完成后 之后，
在main.js中引入，并绑定到body

     import FastClick from 'fastclick'

     FastClick.attach(document.body);
3.# install

安装stylus

方法一  npm install stylus -g  安装  stylus （css编译预处理器）

方法二
  npm install stylus
  npm install stylus stylus-loader

4.设置reset.CSS
5.量好 设计版是几倍图


6.git 安装后  新建一个空项目 设置ssh
git clone + 项目的  ssh路径
git init webpack  +  项目名初始化项目
git status  查看状态
git add .  中间有空格   新增加的红色文件要放到缓冲区
git commit -m 'start project'   现在已经到了本地仓库
git push 上传到github


如何生成 SSH
 1.打开git bash  here
 2. 输入  cd   ~ （根目录）
 3.rm-r .ssh 如果原先有.ssh有的话删除一下
 4.输入 ls-a | grep ".ssh"
 5.输入  ssh-keygen -t rsa -C "937524664@qq.com"  按三次回车  出现个小框图
 6.输入 ls-a | grep ".ssh"
 7.cd .ssh  进入.ssh
 8.输入  ls  列出文件夹  含有公钥和私钥
 9. cat is_rsa.pub  打开公钥文件   复制下
 10  去github 去ssh 设置添加ssh

github  937524664@qq.com     Wang@937524664


上传github步骤  ：
1. git status 查看 状态   如果有红色的  说明是有改动的地方
2.git add . 把红色的改动地方方到缓冲区 然后再git status一下  红色的改动变成了绿色的了 说明放在了缓冲区
3.git commit -m 'start project'  启动项目
4.git push 上传

组员 如何下载项目到本地

1.git clone  到本地
2.执行  npm  install
3.npm  run  start


以后工作：
git pull   拉取

git checkout   切换分支



git  checkout . 可以清理没有提交到缓冲区的内容
写完一部分代码
1.git add .
2.git commit -m '随意标注'
3.git push

4.合并主分支
bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ git pull origin master
From github.com:wweChampin/vue-me
 * branch            master     -> FETCH_HEAD
Already up to date.

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ git merge 20180111-index-wweChampin
Auto-merging readme.txt
CONFLICT (content): Merge conflict in readme.txt
Automatic merge failed; fix conflicts and then commit the result.

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master|MERGING)
$ git status
On branch master
Your branch is up to date with 'origin/master'.

You have unmerged paths.
  (fix conflicts and run "git commit")
  (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

        both modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master|MERGING)
$ git add .

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master|MERGING)
$ git commit -m 'change master'
[master d19a6de] change master

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ git status
On branch master
Your branch is ahead of 'origin/master' by 4 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 382 bytes | 382.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:wweChampin/vue-me.git
   54960fa..d19a6de  master -> master

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ git pull origin master
From github.com:wweChampin/vue-me
 * branch            master     -> FETCH_HEAD
Already up to date.

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ ^C

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (master)
$ git checkout 20180111-index-wweChampin
Switched to branch '20180111-index-wweChampin'
Your branch is up to date with 'origin/20180111-index-wweChampin'.

bennettyw@WUQ-NB-257 MINGW64 /f/webstorm/webstormProject/vue-me (20180111-index-                                                                                                                wweChampin)
$


5.然后  git  push

==================================================================================================

2018/6/28
1. 图片站位兼容方案
    /*图片站位 兼容方案*/
    .slide-con
        overflow hidden
        height 0
        padding-bottom :31.25%   /*图片站位问题，用宽除以高*/
    .slide-img
        width 100%

2.ajax请求  用axios
        npm add axios

3.prop  子组件接收父组件传过来的值
4.computed 计算属性
=======================================================================

2018/6/29
1.  git merge origin  后  卡住可以  用  :c（Linus命令）退出
2.axios不兼容8  9  10   用 babel-polyfill   解决

2018/7/1
 1.导航   push  与 replace  的区别
     push 是另起一个新页面  可以后退
     replace 不能后退
     go  是向后跳转几部

2018/7/3


1.解耦模式路由

      {
          path: "/HelloWorld",
          component: HelloWorld,
          prop:true
      },

keep-alive  缓存住了
只要写了  keep-alive  之后  才会出现   activated（重新刷新组件）声明周期函数

2018/7/4

1.使用  bus
  1）.在main.js里面创建 bus
  2）.在组件中监听change
2..vue 的列表滚动  用  better-scroll    iscroll有坑
3.mounted 是在页面组件挂载完成后 执行

2018/7/5
vuex
Actions 异步的修改 state
Mutations 同步的修改 state
2018/7/6

操作dom  用 ref （引用）

<div class='header' ref='header'></div>

console.log( this.$refs.header)   //  <div class='header' ref='header'></div>

this.$refs.header.style.backgroundColor = 'red'