# gitbook-plugin-huahe

使用 Katex / MathJax 解释和渲染易学盘符，包括六爻和八字。（初版只支持Katex）

在 gitbook 工程以外使用此易学函数库，请参阅[华鹤易学平台通用版函数库](https://maiernte.gitee.io/huahedocument/chapter6/)。可以在Markdown文本编辑器，以及在独立的HTML网页中使用。支持 Katex 和 MathJax 两个渲染库。



本人同时开发了一个独立的易学案例管理平台，当前支持安卓、ios 以及在线版：

[华鹤易学在线版](https://maiernte.gitee.io/huahe/)

[华鹤易学平台文档](https://maiernte.gitee.io/huahedocument/)



演示网站： [《增删卜易》Gitbook](https://maiernte.gitee.io/zengshan/) （正在制作中。。。）



有疑问以及合作请联系邮箱 goldentianya@foxmail.com

[函数API](https://maiernte.gitee.io/huahedocument/chapter6/libapi.html)： https://maiernte.gitee.io/huahedocument/chapter6/libapi.html



### 安装

在Gitbook项目的配置文件 `book.json` 中加入插件名称 '**huahe**'：

```json
...
"plugins": [ ..., "huahe"],
...
```

然后在终端输入安装命令：

`gitbook install`



### 配置

此插件支持两种渲染方式：

- 运行时渲染
- 编译时渲染



编译时渲染即在编译HTML文件的时候已经把易学盘符转换成 Dom Element 。好处是浏览页面的时候会更流畅。而且当需要把Gitbook转换成其它如 pdf 或者 epub 格式的电子书时，也必须用这种方式。



而运行时渲染是指当用户浏览网站的时候，才将易学公式转换成 Dom Element。浏览设备的运算能力不够快的时候，会出现卡顿的情形。好处是它会在手机浏览时，自动采用简短名称的显示方式。



###### 运行时渲染

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



###### 编译时渲染

需要进入目录 `node_modules/gitbook-plugin-huahe` 并打开 `index.js` 文件，搜索变量并设置为`false`。

 ```javascript
 const runtimeRender = false
 ```

需要改变字体大小

```javascript
globalSetting['size'] = SizeDef[3]
```

