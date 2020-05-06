1.注册GitHub账号

2.安装Git：`https://git-scm.com/downloads`

3.设置ssh key：

```bash
//两种方式
https://github.com/xiangshuo1992/preload.git //https URL
git@github.com:xiangshuo1992/preload.git     //ssh URL

//首次配置
git config --global user.name "username"
git config --global user.email  "email"

//检查是否已有SSH Key
cd ~/.ssh
ls或者ll
//id_rsa 和 id_rsa.pub文件，如果存在，说明已经有SSH Key

//如果没有SSH Key，完成后重复上一步骤
ssh-keygen -t rsa -C "email"catc

//查看秘钥（ssh-rsa开头），复制
cat id_rsa.pub

//在GitHub-Setting-SSH and GPG Keys-New SSH Key中进行配置

//检验是否成功
ssh -T git@github.com
```

4.clone

```bash
//在GitHub中加入项目，复制gitSSH链接
git clone git@github.com:Hairaa-1026/SpecialForTeaching.git
```

5.push

```bash
//将全部文件加入到缓存中
git add .
//版本信息
git commit -m "VersionInformation"
//更新到远程仓库上
git push
```

6.pull

```bash
//拉取远程仓库
git pull
//如果本地仓库已经修改，则使用下面的命令：（需要首先执行push的前两步）
git fetch origin master
//查看冲突信息
git log -p FETCH_HEAD
//合并
git merge
```

