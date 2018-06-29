Git is a version control system.
Git is free software.
1.$ vue init webpack my-project  或  $ vue init webpack-simple my-project 搭建脚手架完成
2.安装   fastclick （移动端的300ms点击事件延迟） 安装完成后 之后，
在main.js中引入，并绑定到body

     import FastClick from 'fastclick'

     FastClick.attach(document.body);
3.# install
  npm install stylus -g  安装  stylus （css编译预处理器）
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
git pull   与线上同步  拉取的意思
git status  查看一下分支
git checkout   切换到工作的分支
切换完成后然后就可以干活了

写完一部分代码
1.git add .
2.git commit -m '随意标注'
3.git push

4.代码测试没问题 切换到主分支（master）上  合并到主分支 输入 git merge origin/20180111-index-wweChampin(把线上的子分支与本地的主分支合并这时候改变的是本地主分支的代码)
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