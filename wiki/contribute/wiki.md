---
title: 维基
---
## 编辑

你可以通过两种方式来向维基提供贡献。

### 云端编辑

你需要达成以下预设条件

- 拥有一个独立的 GitHub 账号
- 初步熟悉 GitHub 的基本使用
- Markdown 标准语法及部分扩展语法的使用

现在在你想要编辑的页面上点击位于右上角的 :material-pencil: 标识开始你的编辑。维基的页面渲染方式与 Typecho 一致，均采用 Markdown。如你不甚了解，可优先阅读 [Markdown 语法文档](https://cyent.github.io/markdown-with-mkdocs-material/syntax/main/)。

在编辑完成后提交你的更改，此时若你未曾克隆过 typecho-lover/wiki 仓库，那么你需要跟随指引克隆，然后才能向原仓库提交你的更改。稍后维护者会 Review 你的 PR，若无误则将合并。

### 本地编辑

除云端编辑所需的预设条件外，你还需要

- 安装 Git、Python、Pip
- 熟悉 git 的使用

> 以上内容并不是本维基所论述的内容，你可以通过搜索引擎获取相关软件安装及使用帮助。

打开命令行工具（如 Powershell 等），安装 `mkdocs` 和 `mkdocs-material`

``` shell
pip install mkdocs mkdocs-material
```

下面克隆维基仓库，并进入其文件夹

``` shell
git clone https://github.com/typecho-lover/wiki.git
cd wiki
```

运行 mkdocs 的本地服务

``` shell
mkdocs serve
```

现在打开 `http://127.0.0.1:8000` 即可实时查看你所编辑内容的实际渲染效果。

稍后只需提交你的更改并推送到源储存库即可。
