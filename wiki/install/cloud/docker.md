# Docker

## 安装 Docker 和 Docker Compose

> Docker 的安装并不是本章节的论述重点，故仅简要概述。如编者认为此部分内容有必要扩充，欢迎编辑源文件。

### Linux

使用一键部署脚本进行快速安装。

安装 Docker

``` shell
curl -fsSL https://get.docker.com | bash -s docker
#DaoCloud 国内镜像
curl -sSL https://get.daocloud.io/docker | sh
```

安装 Docker Compose

``` shell
 sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

### Windows

#### Windows 7/8

1. 安装 Docker Toolbox

### windows 10

1. 开启 Hyper-V
2. 安装 WSL2（可选）
3. 下载 exe 安装包

## 下载配置文件

克隆 `typecho-on-docker` 仓库

``` git
git clone https://github.com/typecho-lover/typecho-on-docker.git
```

打开 `docker-compose.yml` 编辑数据库信息，亦可以编辑端口。

``` shell
cd typecho-on-docker
vi docker-compose.yml
```

## 下载 Typecho

以下两个环境，你需要拥有其中之一。

- git（推荐）
- wget 和 unzip

``` shell
git clone https://github.com/typecho/typecho.git public
```

``` shell
wget https://github.com/typecho/typecho/archive/master.zip
unzip master.zip public
```

## 部署 Typecho

``` docker
docker-compose up -d
```

现在 Typecho 已经部署成功，打开你的域名，之后只需根据 Typecho 指引完成安装即可。
