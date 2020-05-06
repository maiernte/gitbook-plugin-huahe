var dictYiXue = {}
var settingYixue = {}

function yixue(math){
    var pattern = /(?<express>\\[a-zA-Z0-9]+)\{/
    var macro = math.match(pattern)
    var key = macro ? macro.groups["express"] : ""
    var func = dictYiXue[key]
    if(func){
      return func(math)
    }else{
      return math
    }
  }

require(['gitbook'], function(gitbook) {

    anchors.options = {
        placement: 'left'
    }

    gitbook.events.bind('start', function(e, config) {
      
      settingYixue["字体大小"] = config['huahe']["字体大小"] 
      settingYixue["水土共长生"] = config['huahe']["水土共长生"]
      settingYixue["华鹤八字正偏财"] = config['huahe']["华鹤八字正偏财"]
      settingYixue["开启短名"] = config['huahe']["开启短名"]

      console.log('huahe gitbook start', settingYixue)
    });

    gitbook.events.bind('page.change', function() {
        console.log('huahe gitbook page.change')
        renderMathInElement(document.body, {
            preProcess: yixue,
            delimiters: [
              {left: "$$", right: "$$", display: true},
              {left: "\\[", right: "\\]", display: true},
              {left: "$", right: "$", display: false},
              {left: "\\(", right: "\\)", display: false}
            ]
        });
    })

});
