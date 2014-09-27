asciidoctorjs-demo-use-fis
==========================

使用fis插件fis-parser-asciidoctor.js编译asciidoc的一个实例；


### 使用方法

- 安装`fis-parser-asciidoctor.js`

    ```bash
    $ npm install -g fis-parser-asciidoctor.js
    ```
- 进入项目目录，进行发布

    ```bash
    $ fis release
    ```

- 启动`fis server`查看结果

    ```bash
    $ fis server start
    ```

    会启动一个监听自`8080`端口的服务，如果文档名为`a.adoc`，那么访问的时候
    访问`http://127.0.0.1:8080/a.html`，其他文件使用类似的方式查看。

> fis 用法请参见http://fis.baidu.com
> - `asciidoc` 书写中 `inline` 使用 fis 提供的 内嵌(inline) 能力
> - 书写时，可以使用fis的watch功能，效果很赞。
