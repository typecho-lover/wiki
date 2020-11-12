# AppNode

## 环境要求

操作系统：

- CentOS 6.x 32/64 位
- CentOS 7.x 64 位
- 暂不支持 Ubuntu、Debian

内存要求：

- 建议可用内存在 512MB 以上。

## 安装面板

你可以前往 [AppNode](https://www.appnode.com/install) 来自行配置所需环境。在此我们预设安装 PHP 7.3 + Nginx 稳定版 + MariaDB 10.2 的环境，如果你选择自行配置则需替换以下命令。

``` shell
INSTALL_AGENT=1 INSTALL_APPS=sitemgr INIT_SWAPFILE=1 INSTALL_PKGS='nginx-stable,php73,mariadb102' bash -c "$(curl -sS http://dl.appnode.com/install.sh)"
```

命令行执行后，你仅需跟随引导配置端口、用户名、密码即可。稍后打开 `http://服务器 IP:你所设定的端口` 输入用户名和密码并同意相关协议进行登录。

## 部署站点

AppNode 中可以设定不同站点运行在不同的运行环境下，所以我们先创建一个运行环境，勾选你所安装的环境。在检查完软件的是否运行成功后，你就可以创建网站并选择该运行环境了。

创建网站时，AppNode 会根据你所绑定的域名自动创建数据库，你可以自行进行修改数据库名称、用户名、密码。但建议先复制一下相关，在后续的安装过程中将会用到它们。

虽然 AppNode 建站市场中有提供最新的 Typecho 稳定版快速安装，但我们**不推荐**。

> 由于 Typecho 长期未发布稳定版，实际上开发版比稳定版更稳定。

如果你需要安装稳定版，那么你需要先通过“网站管理-文件”进入该网站的目录。你会看到类似下方的文件目录结构，进入 `www` 删除 `index.html` 后即可开始安装。

``` bash
.

├── backup
├── conf
│   ├── nginx.conf
│   └── php-1.conf
├── log
│   ├── nginx
│   │   ├── access.log
│   │   └── error.log
│   └── php
│       └── error.log
├── php-pool
│   ├── php-fpm.sock
│   ├── session
│   │   └── sess_xxxxxxxxxxxxxxxxxxxxxxxxxx
│   └── upload_tmp
├── ssl
│   ├── site.crt
│   └── site.key
└── www
    └── index.html
```

如果你需要安装开发版。那么你仍需完成删除步骤，随后通过“在线下载”输入以下链接进行下载压缩包。

``` url
https://github.com/typecho/typecho/archive/master.zip
```

解压该压缩包，并复制 `typecho-master` 文件夹内所有文件至 `www` 文件夹中。

现在打开该网站所绑定的域名，跟随 Typecho 安装指引填写数据库名称、用户名、密码。如果忘记了数据库相关信息，你也可以打开“网站管理-设置-MySQL”进行查看。
