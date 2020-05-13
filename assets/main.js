
var settingYixue = { 
  "字体大小": 3, 
  "水土共长生": true, 
  "华鹤八字正偏财": true,  
  "开启短名": false, 
  "Katex": true 
}

require(['gitbook'], function(gitbook) {

  gitbook.events.bind('start', function(e, config) {
    const SizeDef = ["tiny", "tiny", "scriptsize", "footnotesize", "small", "normalsize", "large", "LARGE", "huge", "Huge"]
    settingYixue['set']['size'] = SizeDef[config.huahe['字体大小']]
  });

  gitbook.events.bind('page.change', function() {
    renderMathInElement(document.body, {
      preProcess: window['yixueRender'],
      delimiters: [{ left: "$$", right: "$$", display: true }, { left: "\\[", right: "\\]", display: true }, { left: "$", right: "$", display: false }, { left: "\\(", right: "\\)", display: false }, { left: "¥¥", right: "¥¥", display: true }, { left: "¥", right: "¥", display: false }]
    });
  })
});