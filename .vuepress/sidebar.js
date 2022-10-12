module.exports = {
  "/docs/theme·-reco/": [
    "",
    "theme",
    "plugin",
    "api"
  ],
  "/docs/HTML/": [
    { title: 'HTML', icon: 'reco-menu', path:"/docs/HTML/"},
    { title: 'canvas', icon: 'reco-menu', children:[
      "/docs/HTML/canvas/",
      "/docs/HTML/canvas/expand",
    ]},
    { title: 'svg', icon: 'reco-menu', children:[
      "/docs/HTML/svg/",
      "/docs/HTML/svg/expand",
    ]},
    { title: 'D3', icon: 'reco-menu', children:[
      "/docs/HTML/D3/",
      "/docs/HTML/D3/expand",
    ]},
  ],  
  "/docs/CSS/": [
    { title: "CSS目录", icon: "reco-menu", path: "/docs/CSS/"},
    { title: "DuYi", icon: "reco-menu", path: "/docs/CSS/DuYi"},
    { title: "速查表", icon: "reco-menu", path: "/docs/CSS/css-cheat-sheet"},
    { title: "面试题", icon: "reco-menu", path: "/docs/CSS/css-interview"},
    { title: "优化技巧", icon: "reco-menu", path: "/docs/CSS/css-optimize"},
    { title: "base基础", icon: "reco-menu", children:[
      "/docs/CSS/base/css-selector",
      "/docs/CSS/base/css-unit",
      "/docs/CSS/base/css-function",
    ]},
    { title: "skill武器库", icon: "reco-menu", children:[
      "/docs/CSS/skill/text-tile",
      "/docs/CSS/skill/center",
      "/docs/CSS/skill/position-fixed",
    ]},
    { title: "layout布局", icon: "reco-menu", children:[
      "/docs/CSS/layout/",
      "/docs/CSS/layout/N-column",
      "/docs/CSS/layout/flex",
      "/docs/CSS/layout/gird",
      "/docs/CSS/layout/holy-grail",
      "/docs/CSS/layout/double-wings",
    ]},
    { title: "module模块", icon: "reco-menu", children:[
      "/docs/CSS/module/",
    ]},
  ],
  "/docs/JS/": [
    { title: "JavaScript", icon: "reco-menu", path: "/docs/JS/"},
    { title: "数据类型", icon: "reco-menu", children: [
      "/docs/JS/data-type/",
      "/docs/JS/data-type/String",
      "/docs/JS/data-type/Number",
      "/docs/JS/data-type/Function",  
      "/docs/JS/data-type/Object",
      "/docs/JS/data-type/Array",
      "/docs/JS/data-type/type-conversion",
      "/docs/JS/data-type/type-judge",
      "/docs/JS/data-type/equality",
      { title: "特殊数据类型", icon: "reco-menu", children: [
        "/docs/JS/data-type/special-data-type/Date",
        "/docs/JS/data-type/special-data-type/formData",
        "/docs/JS/data-type/special-data-type/webAudio"
      ]}
    ]},
  ],
  "/docs/GIT/": [
    { title: "Git", icon: "reco-menu", path: "/docs/GIT/"}
  ],
  "/docs/NPM/": [
    { title: "Npm", icon: "reco-menu", path: "/docs/NPM/"}
  ]
}