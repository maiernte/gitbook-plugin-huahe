module.exports = {
  book: {
    assets: "./assets",
    js: [ "main.js", 
          "katex.min.js", 
          "auto-render.min.js",
          "bundle.js"],
    css: [
      "katex.min.css"
    ]
  },
  blocks: {
    math: {
        shortcuts: {
            parsers: ["markdown", "asciidoc", "restructuredtext"],
            start: "$$",
            end: "$$"
        },
        process: function(blk) {
            return `\\(${blk.body}\\)`;
        }
    }
  } 
}