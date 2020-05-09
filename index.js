const katex = require('katex')
const { globalSetting, DictYiXue} = require('huaheyixue')

globalSetting['字体大小'] = 3

function huaheformat(tex) {

	let out = tex.replace(/【|《|「/g, '{')
	out = out.replace(/】|」|》/g, '}')
	out = out.replace(/纳音：/g, '\\nayin')
	out = out.replace(/卦爻：/g, '\\guayao')
	out = out.replace(/爻：/g, '\\yao')
	out = out.replace(/64卦：/g, '\\gua64')
	out = out.replace(/卦：/g, '\\paigua')
	out = out.replace(/命：/g, '\\paibazi')
	out = out.replace(/时令：/g, '\\timegz')

	return out
}

function yixue(math){
	const tex = huaheformat(math)

  var pattern = /(?<express>\\[a-zA-Z0-9]+)\{/
  var macro = tex.match(pattern)
  var key = macro ? macro.groups["express"] : ""
  var func = DictYiXue[key]
  if(func){
    return func(tex)
  }else{
    return math
  }
}

module.exports = {
  book: {
    assets: "./assets",
    css: [
      "katex.min.css"
    ]
  },
  blocks: {
    math: {
        shortcuts: {
            parsers: ["markdown", "asciidoc", "restructuredtext"],
            start: "$",
            end: "$"
        },
        process: function(blk) {
            const tex = yixue(blk.body)
            
            try {
              let html  = katex.renderToString(tex, {
                displayMode: false
              });
              return html;
            }catch(err) {
              console.error(err)
              console.log(tex)
              return `\\(${blk.body}\\)`;
            }
        }
    }
  } 
}