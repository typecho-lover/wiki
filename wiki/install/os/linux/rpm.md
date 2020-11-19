# rpm 系

> 以下操作仅保证在纯洁系统下可用。

## 安装 Nginx

``` shell
yum install epel-release
yum install nginx          #安装 Nginx
systemctl start nginx      #启动
systemctl enable nginx     #设置开机自启动
```

## 安装 PHP

``` shell
yum install yum-utils
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum-config-manager --enable remi-php73
yum update
#安装 PHP 和相关扩展
yum install php php-mcrypt php-devel php-cli php-gd php-pear php-curl php-fpm php-mysql php-ldap php-zip php-fileinfo php-json php-mbstring php-mysqlnd php-xml php-xmlrpc php-opcache
```

## 安装 MariaDB

``` shell
yum install mariadb mariadb-server
systemctl start mariadb    #启动 MariaDB
systemctl enable mariadb   #设置开机自启动
mysql_secure_installation  #安全性设置（如 root 密码等）
mysql -uroot -p            #测试登录
CREATE DATABASE typecho;   #创建 typecho 数据库
SHOW DATABASES;            #验证结果
```

## 安装 Typecho

``` shell
yum install git
#下载 Typecho 并移动
git clone https://github.com/typecho/typecho.git /data/wwwroot/typecho
#修改 Nginx 配置
vi /usr/local/nginx/conf/nginx.conf
```

``` nginx
server {
    listen 80;
    index index.php index.html;
    #域名
    server_name localhost;
    error_log  /data/wwwlogs/error.log;
    access_log /data/wwwlogs/access.log;
    root /data/wwwroot/typecho;

    location / {
        index index.php;
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
    }
```

现在打开你的域名，跟随 Typecho 安装引导输入相关信息即可。
