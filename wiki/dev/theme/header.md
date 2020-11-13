# 头部

我们一般将头部代码写在 `header.php` 文件中,以便复用。

## 默认输出

我们用这个语句来输出博客的相关信息，如描述、关键词、程序、模板等等。

``` php
<?php $this->header(); ?>
```

默认输出的 `<meta>`、`<link>` 标签如下。

``` html
<meta name="description" content="Just So So ..." />
<meta name="keywords" content="typecho,php,blog" />
<meta name="generator" content="Typecho 1.2/18.1.29" />
<meta name="template" content="default" />
<link rel="pingback" href=".../action/xmlrpc" />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href=".../action/xmlrpc?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href=".../action/xmlrpc?wlw" />
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href=".../feed/" />
<link rel="alternate" type="application/rdf+xml" title="RSS 1.0" href=".../feed/rss/" />
<link rel="alternate" type="application/atom+xml" title="ATOM 1.0" href=".../feed/atom/" />
```

## 过滤输出

在原先的代码中加入参数即可过滤你想隐藏的信息。代码如下

``` php
<?php $this->header('keywords=&generator=&template=&pingback=&xmlrpc=&wlw='); ?>
```

以上代码即可过滤关键词、程序、模板名称、文章引用、离线写作等信息的输出，过滤后的具体效果如下。

``` html
<meta name="description" content="..." />
<link rel="alternate" type="applicationrss+xml" title="RSS 2.0" href=".../feed/" />
<link rel="alternate" type="application/rdf+xml" title="RSS 1.0" href=".../feed/rss/" />
<link rel="alternate" type="application/atom+xml" title="ATOM 1.0" href=".../feed/atom/" />
```

你也可以通过下面的词典来查找你想要过滤项目所对应的参数。

| 参数 | 注释 |
| - | - |
| keywords | 关键词 |
| description | 描述、摘要 |
| rss1 | Feed rss1.0 |
| rss2 | Feed rss2.0 |
| atom | Feed atom |
| generator | 程序版本等 |
| template | 模板名称 |
| pingback | 文章引用 |
| xmlrpc | 离线写作接口 |
| wlw | Windows Live Writer 离线写作接口 |
| commentReply | 评论回复 |

> 等号（=）为空则不输出该项目，各个参数之间使用 `&` 连接。 如果需要自定义 RSS 地址，只填上  `rss2=RSS 地址` 即可。
