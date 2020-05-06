# gitbook-plugin-huahe

使用 Katex / MathJax 解释和渲染易学盘符，包括六爻和八字。（初版只支持Katex）

在 gitbook 工程以外使用此易学函数库，请参阅[华鹤易学平台通用版函数库](https://maiernte.gitee.io/huahedocument/chapter6/)。可以在Markdown文本编辑器，以及在独立的HTML网页中使用。支持 Katex 和 MathJax 两个渲染库。



### 安装

在Gitbook项目的配置文件 `book.json` 中加入：

```json
...
"plugins": [ ..., "huahe"],
...
```



### 配置

在Gitbook项目的配置文件 `book.json` 中加入：

```json
"pluginsConfig": {
  "huahe": { 
    "字体大小": 5, //字体大小 1~9 数字越大字体越大
    "水土共长生": true, //是否水土共长生
    "华鹤八字正偏财": true,  //是否使用华鹤偏财
    "开启短名": false, //是否使用短名，如“偏财”->“才”
    "Katex": true
  }
}
```



